/* global Globe, d3, topojson, WORLD, DATA, I18N, REGIONS, PLUGS, PLUG_FITS, PLUG_FAM, PLUG_FAM_LABEL, SOCKET_DESC, CHARGER_NAME, chooseCharger, LANGS, LANG_BY_COUNTRY, PHRASE_EN, EXTRA, SUBNOTES */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

const worldByN3 = {};
WORLD.forEach((w) => { worldByN3[w.n3] = w; });
const N3TOA2 = {};
for (const [a2, d] of Object.entries(DATA)) N3TOA2[d.n3] = a2;

const state = {
  ui: localStorage.getItem("wtm-ui") || "zh",
  homeN3: localStorage.getItem("wtm-home-n3") || null,
  rates: null,
  selN3: null,
};

function homeW() { return worldByN3[state.homeN3] || null; }
// currency always follows the home country
function homeCur() {
  const w = homeW();
  return w && w.cur.length ? w.cur[0][0] : "USD";
}
function t(k) {
  const dict = I18N[state.ui] || I18N.en;
  return dict[k] ?? I18N.en[k] ?? k;
}
// Hand-written guide content exists in zh + en only
function info(f) { return state.ui === "zh" ? f.zh : f.en; }
function zhEn(obj) { return state.ui === "zh" ? obj.zh : obj.en; } // for small label tables
function locName(w) {
  if (!w) return "";
  return (state.ui !== "en" && w[state.ui]) ? w[state.ui] : w.en;
}
function regionName(reg) {
  const r = REGIONS[reg];
  return (r && r[state.ui]) || reg;
}
function flagEmoji(a2) {
  return String.fromCodePoint(...[...a2.toUpperCase()].map((ch) => 127397 + ch.charCodeAt(0)));
}
// Taiwan is shown without a flag icon
function dispFlag(a2) {
  return a2 === "TW" ? "" : flagEmoji(a2);
}

function applyChrome() {
  document.documentElement.lang = state.ui;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

/* ---------- speech ---------- */
if ("speechSynthesis" in window) {
  speechSynthesis.getVoices(); // warm up async voice list
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}
function speak(text, lang) {
  if (!("speechSynthesis" in window)) { toast(t("noVoice")); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.92;
  const voices = speechSynthesis.getVoices();
  const norm = (v) => v.lang.replace("_", "-");
  const base = lang.split("-")[0];
  let v = voices.find((x) => norm(x) === lang);
  if (!v) v = voices.find((x) => norm(x).startsWith(base + "-") || norm(x) === base);
  if (v) u.voice = v;
  else if (voices.length) toast(`${t("noVoice")} (${lang})`);
  speechSynthesis.speak(u);
}
$("#panel").addEventListener("click", (e) => {
  const b = e.target.closest(".say");
  if (b) speak(b.dataset.text, b.dataset.lang);
});

/* ---------- exchange rates ---------- */
function fmtNum(n) {
  return new Intl.NumberFormat(undefined, { maximumSignificantDigits: 4 }).format(n);
}
function rateText(code) {
  const home = homeCur();
  if (!state.rates || !state.rates[code] || !state.rates[home]) return t("rateFail");
  if (code === home) return `1 ${code} = 1 ${home}`;
  const one = state.rates[home] / state.rates[code];
  return `1 ${code} ≈ ${fmtNum(one)} ${home} · 1 ${home} ≈ ${fmtNum(1 / one)} ${code}`;
}
async function loadRates() {
  try {
    const r = await fetch("https://open.er-api.com/v6/latest/USD");
    const j = await r.json();
    if (j.result === "success") { state.rates = j.rates; rerenderPanel(); }
  } catch (_) { /* offline — rate rows show fallback text */ }
}

/* ---------- personalized rows (plug & visa) ---------- */
function plugRowHtml(destA2) {
  const p = PLUGS[destA2];
  if (!p) return `<div class="fact"><span>🔌 ${t("plug")}</span><b>—</b></div>`;
  const descs = [...new Set(p.t.map((x) => (SOCKET_DESC[x] && zhEn(SOCKET_DESC[x])) || ""))].filter(Boolean);
  let tip = "";
  const hw = homeW();
  const hp = hw ? PLUGS[hw.a2] : null;
  if (hp && hw.a2 !== destA2) {
    const cp = chooseCharger(hp.t); // the plug on your phone charger
    const cpName = CHARGER_NAME[cp] ? zhEn(CHARGER_NAME[cp]) : `Type ${cp}`;
    const fits = (PLUG_FITS[cp] || [cp]).some((s) => p.t.includes(s));
    if (fits) {
      tip += `<div class="plug-ok">✅ ${t("plugOk")}（${esc(cpName)}）</div>`;
    } else {
      const fams = [...new Set(p.t.map((x) => PLUG_FAM[x]).filter(Boolean))];
      const names = fams
        .map((f) => `${zhEn(PLUG_FAM_LABEL[f])} (Type ${p.t.filter((x) => PLUG_FAM[x] === f).join("/")})`)
        .join(" / ");
      tip += `<div class="plug-warn">⚠️ ${t("plugAdapter")}${esc(names)}</div>`;
    }
    const dv = (p.v.match(/\d+/g) || []).map(Number);
    const hv = (hp.v.match(/\d+/g) || []).map(Number);
    if (dv.length && hv.length) {
      const dHigh = Math.max(...dv) >= 200;
      const hHigh = Math.max(...hv) >= 200;
      if (hHigh && !dHigh) tip += `<div class="plug-note">ℹ️ ${t("voltLower")}</div>`;
      if (!hHigh && dHigh) tip += `<div class="plug-warn">⚠️ ${t("voltHigher")}</div>`;
    }
  }
  return `<div class="fact"><span>🔌 ${t("plug")}</span><b>${esc(descs.join(" / "))} (Type ${esc(p.t.join("/"))}) · ${esc(p.v)}${tip}</b></div>`;
}

// Territories inherit the visa policy of their parent state for matrix lookups
const TERR_PARENT = {
  PR: "US", GU: "US", VI: "US", AS: "US", MP: "US", UM: "US",
  GP: "FR", MQ: "FR", RE: "FR", YT: "FR", NC: "FR", PF: "FR", WF: "FR",
  BL: "FR", MF: "FR", PM: "FR", GF: "FR", TF: "FR",
  AW: "NL", CW: "NL", SX: "NL", BQ: "NL",
  GL: "DK", FO: "DK",
  AI: "GB", BM: "GB", KY: "GB", TC: "GB", VG: "GB", MS: "GB", FK: "GB",
  GI: "GB", SH: "GB", IM: "GB", JE: "GB", GG: "GB", IO: "GB", GS: "GB", PN: "GB",
  CK: "NZ", NU: "NZ", TK: "NZ",
  NF: "AU", CX: "AU", CC: "AU", HM: "AU",
  AX: "FI", SJ: "NO", BV: "NO", EH: "MA", VA: "IT",
};
const VISA_CAT_INFO = {
  F: { k: "visaFree", c: "vf" },
  V: { k: "visaVoa", c: "vv" },
  E: { k: "visaEvisa", c: "ve" },
  T: { k: "visaEta", c: "ve" },
  R: { k: "visaReq", c: "vr" },
  N: { k: "visaNo", c: "vn" },
};
const visaRowCache = {};
function visaLookup(homeA2, destA2) {
  const h = VISA_ROWS[homeA2] ? homeA2 : TERR_PARENT[homeA2];
  if (!h || !VISA_ROWS[h]) return null;
  const d = VISA_DESTS.includes(destA2) ? destA2 : TERR_PARENT[destA2];
  if (!d) return null;
  const di = VISA_DESTS.indexOf(d);
  if (di < 0) return null;
  if (!visaRowCache[h]) visaRowCache[h] = VISA_ROWS[h].split(",");
  const tok = visaRowCache[h][di];
  if (!tok || tok === "S") return null;
  if (/^\d+$/.test(tok)) return { cat: "F", days: +tok };
  return { cat: tok, days: null };
}

function visaRowHtml(destA2, curatedVisa) {
  const hw = homeW();
  const label = hw ? `${t("visa")} · ${esc(locName(hw))}` : t("visa");
  let body = "";
  if (hw && (hw.a2 === destA2 || TERR_PARENT[destA2] === hw.a2)) {
    body = "—";
  } else if (hw) {
    const v = visaLookup(hw.a2, destA2);
    const ci = v && VISA_CAT_INFO[v.cat];
    if (ci) {
      body = `<span class="visa-badge ${ci.c}">${t(ci.k)}${v.days ? ` · ${v.days} ${t("visaDays")}` : ""}</span>`;
    } else {
      body = esc(t("visaGeneric"));
    }
    if (curatedVisa && hw.a2 === "CN") body += `<div class="visa-extra">${esc(info(curatedVisa))}</div>`;
    if (hw.dem) {
      const url = `https://en.wikipedia.org/wiki/Visa_requirements_for_${encodeURIComponent(hw.dem.replace(/ /g, "_"))}_citizens`;
      body += `<br><a class="wiki" href="${url}" target="_blank" rel="noopener">${t("visaWiki")}</a>`;
    }
  } else {
    body = esc(t("visaGeneric"));
  }
  return `<div class="fact"><span>🛂 ${label}</span><b>${body}</b></div>`;
}

/* ---------- panel rendering ---------- */
function sayBtn(text, lang) {
  return `<button class="say" data-text="${esc(text)}" data-lang="${esc(lang)}" title="🔊 ${esc(lang)}">🔊</button>`;
}
function termRow(item, langCode) {
  const [en, ipa, local, zh] = item;
  const showLocal = local && local !== en;
  const showZh = state.ui === "zh" && zh && zh !== local && zh !== en;
  return `<li>
    <div class="term-en"><b>${esc(en)}</b>${sayBtn(en, "en-US")}${ipa ? `<span class="ipa">${esc(ipa)}</span>` : ""}</div>
    ${showLocal || showZh ? `<div class="term-local">
      ${showLocal ? `<span>${esc(local)}</span>${sayBtn(local, langCode)}` : ""}
      ${showZh ? `<span class="gloss">${esc(zh)}</span>` : ""}
    </div>` : ""}
  </li>`;
}
function section(icon, title, items, langCode) {
  if (!items || !items.length) return "";
  return `<section><h3>${icon} ${title}</h3><ul class="terms">${items.map((i) => termRow(i, langCode)).join("")}</ul></section>`;
}
function renderHint() {
  $("#panel").innerHTML = `<div class="hint"><div class="hint-emoji">🧭</div><h2>${t("hintTitle")}</h2><p>${t("hintBody")}</p></div>`;
}

// Unified full guide for every country/territory
function renderCountry(n3, fallbackName) {
  const p = $("#panel");
  const w = worldByN3[n3];
  const a2c = N3TOA2[n3]; // set when a hand-written guide exists
  const d = a2c ? DATA[a2c] : null;

  if (!w && !d) { // rare disputed areas without ISO entry
    p.innerHTML = `
      <div class="country-head"><div class="flag">🗺️</div>
        <div><h2>${esc(fallbackName || "—")}</h2> ${fallbackName ? sayBtn(fallbackName, "en-US") : ""}</div></div>`;
    return;
  }

  const a2 = d ? a2c : w.a2;
  const flag = d ? d.flag : dispFlag(w.a2);
  const enName = d ? d.en : w.en;
  const localizedName = w ? locName(w) : d.zh;

  // header
  let head = `
    <div class="country-head">
      ${flag ? `<div class="flag">${flag}</div>` : ""}
      <div>
        <h2>${esc(enName)}</h2> ${sayBtn(enName, "en-US")}
        ${d ? `<div class="ipa big">${esc(d.ipa)}</div>` : ""}
        ${d ? `<div class="localname">${esc(d.local)} ${sayBtn(d.local.replace(/\s*\([^)]*\)\s*$/, ""), d.lang)}</div>` : ""}
        ${localizedName && localizedName !== enName ? `<div class="zhname">${esc(localizedName)}</div>` : ""}
      </div>
    </div>`;
  const contentNote = d && state.ui !== "zh" && state.ui !== "en" ? `<p class="note">${t("contentNote")}</p>` : "";

  // facts: basics + currency + plug + visa
  let facts = "";
  if (d) facts += `<div class="fact"><span>🗣 ${t("language")}</span><b>${esc(state.ui === "zh" ? d.langZh : d.langEn)}</b></div>`;
  if (w) {
    if (w.cap) {
      const capLabel = w.a2 === "TW" ? t("provCapital") : t("capital");
      facts += `<div class="fact"><span>🏛 ${capLabel}</span><b>${esc(w.cap)} ${sayBtn(w.cap, "en-US")}</b></div>`;
    }
    facts += `<div class="fact"><span>🌐 ${t("region")}</span><b>${esc(regionName(w.reg))}${w.sub ? ` · ${esc(w.sub)}` : ""}</b></div>`;
    if (w.area) facts += `<div class="fact"><span>📐 ${t("area")}</span><b>${new Intl.NumberFormat().format(w.area)} km²</b></div>`;
    if (!d && w.langs.length) facts += `<div class="fact"><span>🗣 ${t("langsOfficial")}</span><b>${esc(w.langs.join(", "))}</b></div>`;
  }
  if (d) {
    facts += `<div class="fact"><span>💰 ${t("currency")}</span><b>${esc(state.ui === "zh" ? d.cur[1] : d.cur[2])} (${d.cur[0]} ${esc(d.cur[3])}) ${sayBtn(d.cur[2], "en-US")}<br><span class="ratesub">${rateText(d.cur[0])}</span></b></div>`;
  } else if (w && w.cur.length) {
    const curLine = w.cur
      .map(([code, name, sym]) => `${esc(name)} (${code}${sym ? " " + esc(sym) : ""}) ${sayBtn(name, "en-US")}<br><span class="ratesub">${rateText(code)}</span>`)
      .join("<br>");
    facts += `<div class="fact"><span>💰 ${t("currency")}</span><b>${curLine}</b></div>`;
  }
  facts += plugRowHtml(a2);
  facts += visaRowHtml(a2, d ? d.visa : null);

  // safety & taboo: hand-written, else regional reference
  let safetyHtml = "", tabooHtml = "";
  if (d) {
    safetyHtml = esc(info(d.safety));
    tabooHtml = esc(info(d.taboo));
  } else if (w) {
    const note = SUBNOTES[w.sub] || SUBNOTES[w.reg];
    if (note) {
      const tag = ` <span class="ratesub">${esc(t("regionalNote"))}</span>`;
      safetyHtml = esc(info(note.safety)) + tag;
      tabooHtml = esc(info(note.taboo)) + tag;
    }
  }

  // cities / sights / foods
  let cities, sights, foods;
  if (d) {
    cities = d.cities; sights = d.sights; foods = d.foods;
  } else {
    const ex = EXTRA[a2];
    const conv = (arr) => (arr || []).map(([en2, zh2]) => [en2, "", "", zh2]);
    cities = conv(ex && ex.c); sights = conv(ex && ex.s); foods = conv(ex && ex.f);
  }
  // the capital already has its own row with audio — drop it from the city list
  if (w && w.cap) {
    const capFirst = w.cap.split(",")[0].trim().toLowerCase();
    cities = cities.filter((it) => it[0].toLowerCase() !== capFirst);
  }
  const termLang = d ? d.lang : "en-US";

  // phrases: hand-written, else generated from the country's main language
  let phrasesHtml = "";
  if (d) {
    phrasesHtml = section("💬", t("phrases"), d.phrases, d.lang);
  } else if (w) {
    const lk = LANG_BY_COUNTRY[w.a2];
    const L = lk && LANGS[lk];
    if (L) {
      const items = PHRASE_EN.map(([en2, ipa, zh2], i) => [en2, ipa, L.p[i], zh2]);
      const langLabel = state.ui === "zh" ? L.zh : L.en;
      phrasesHtml = section("💬", `${t("phrases")} · ${esc(langLabel)}`, items, L.tts);
    }
  }

  p.innerHTML = `
    ${head}
    ${contentNote}
    <div class="facts">${facts}</div>
    ${safetyHtml ? `<section><h3>🛡️ ${t("safety")}</h3><p>${safetyHtml}</p></section>` : ""}
    ${tabooHtml ? `<section><h3>⚠️ ${t("taboo")}</h3><p>${tabooHtml}</p></section>` : ""}
    ${section("🏙️", t("cities"), cities, termLang)}
    ${section("🏛️", t("sights"), sights, termLang)}
    ${section("🍜", t("foods"), foods, termLang)}
    ${phrasesHtml}
    <p class="disclaimer">${t("disclaimer")}</p>`;
  p.scrollTop = 0;
}

function rerenderPanel() {
  if (state.selN3) renderCountry(state.selN3, selFallbackName);
  else renderHint();
}

/* ---------- 3D globe ---------- */
let globe = null;
let features = [];
const polyByN3 = {};
let markers = [];
let hoverD = null;
let selFallbackName = "";
// After clicking a country the camera flies while the mouse stays still, which
// would make the globe "hover" random countries passing under the cursor.
// Suppress hover previews until the mouse actually moves again.
let suppressHover = false;
let suppressPt = null;
let lastPtr = { x: 0, y: 0 };
function trackMove(x, y) {
  // In-app browsers (e.g. WeChat) fire a synthesized mouse-move at the tap
  // point right after a tap; tracking pointerdown keeps its delta at zero so
  // only a real move (>10px) re-enables hover previews.
  if (suppressHover && suppressPt && Math.hypot(x - suppressPt.x, y - suppressPt.y) > 10) {
    suppressHover = false;
    refreshGlobe();
  }
  lastPtr = { x, y };
}
window.addEventListener("pointermove", (e) => trackMove(e.clientX, e.clientY));
window.addEventListener("mousemove", (e) => trackMove(e.clientX, e.clientY));
window.addEventListener("pointerdown", (e) => { lastPtr = { x: e.clientX, y: e.clientY }; });
window.addEventListener("touchstart", (e) => {
  const tp = e.touches[0];
  if (tp) lastPtr = { x: tp.clientX, y: tp.clientY };
}, { passive: true });
window.addEventListener("touchmove", (e) => {
  const tp = e.touches[0];
  if (tp) trackMove(tp.clientX, tp.clientY);
}, { passive: true });

const id3 = (f) => String(f.id).padStart(3, "0");
function capColor(d) {
  const n3 = id3(d);
  if (n3 === state.selN3) return "rgba(255,209,102,0.55)";
  if (d === hoverD) return "rgba(255,255,255,0.35)";
  return "rgba(67,198,172,0.20)";
}
const altFn = (d) => (d === hoverD ? 0.028 : id3(d) === state.selN3 ? 0.02 : 0.006);
function markerColor(w) {
  return w.n3 === state.selN3 ? "#ffd166" : "#5fd6bd";
}
function refreshGlobe() {
  if (!globe) return;
  globe.polygonCapColor(capColor).polygonAltitude(altFn).pointColor(markerColor);
}
function tipHtml(n3, fallback) {
  const w = worldByN3[n3];
  const name = w ? locName(w) : fallback || "";
  const flag = w ? dispFlag(w.a2) : "🗺️";
  return `<div class="gtip">${flag ? flag + " " : ""}${esc(name)}</div>`;
}

function selectN3(n3, fallbackName) {
  state.selN3 = n3;
  selFallbackName = fallbackName || "";
  suppressHover = true;          // pause hover previews while the camera flies
  suppressPt = { ...lastPtr };   // …until the mouse moves away from this spot
  hoverD = null;
  if (globe) {
    globe.controls().autoRotate = false;
    refreshGlobe();
    const f = polyByN3[n3];
    const w = worldByN3[n3];
    let lat = null, lng = null;
    if (f) { const c = d3.geoCentroid(f); lng = c[0]; lat = c[1]; }
    else if (w && w.lat != null) { lat = w.lat; lng = w.lng; }
    if (lat != null) {
      const area = (w && w.area) || 200000;
      const alt = Math.min(1.9, Math.max(0.4, Math.sqrt(area) / 1600)) + 0.25;
      globe.pointOfView({ lat, lng, altitude: alt }, 900);
    }
  }
  renderCountry(n3, fallbackName);
}

function sizeGlobe() {
  if (!globe) return;
  const r = $("#map-wrap").getBoundingClientRect();
  globe.width(r.width).height(r.height);
}

async function initGlobe() {
  const world = await (await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")).json();
  features = topojson.feature(world, world.objects.countries).features;
  features.forEach((f) => { polyByN3[id3(f)] = f; });
  // countries/territories with no polygon at 110m (Singapore, microstates, islands) → dots
  markers = WORLD.filter((w) => !polyByN3[w.n3] && w.lat != null);
  const el = $("#map");
  globe = Globe()(el)
    .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
    .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")
    .showAtmosphere(true)
    .atmosphereColor("#7fc4ff")
    .atmosphereAltitude(0.16)
    .polygonsData(features)
    .polygonCapColor(capColor)
    .polygonSideColor(() => "rgba(15,25,45,0.35)")
    .polygonStrokeColor(() => "rgba(255,255,255,0.3)")
    .polygonAltitude(altFn)
    .polygonsTransitionDuration(250)
    .polygonLabel((d) => (suppressHover ? null : tipHtml(id3(d), d.properties.name)))
    .onPolygonHover((d) => {
      if (suppressHover) {
        hoverD = null;
        el.style.cursor = "grab";
        refreshGlobe();
        return;
      }
      hoverD = d;
      el.style.cursor = d ? "pointer" : "grab";
      refreshGlobe();
    })
    .onPolygonClick((d) => selectN3(id3(d), d.properties.name))
    .pointsData(markers)
    .pointLat((w) => w.lat)
    .pointLng((w) => w.lng)
    .pointColor(markerColor)
    .pointAltitude(0.012)
    .pointRadius(0.28)
    .pointLabel((w) => (suppressHover ? null : tipHtml(w.n3)))
    .onPointClick((w) => selectN3(w.n3));
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.55;
  el.addEventListener("pointerdown", () => { globe.controls().autoRotate = false; }, { once: true });
  sizeGlobe();
  new ResizeObserver(sizeGlobe).observe($("#map-wrap"));
  const hw = homeW();
  globe.pointOfView(
    hw && hw.lat != null ? { lat: hw.lat, lng: hw.lng, altitude: 2.1 } : { lat: 20, lng: 10, altitude: 2.2 },
    0
  );
}

/* ---------- search, home country & controls ---------- */
function sortedWorld() {
  return WORLD.slice().sort((a, b) => locName(a).localeCompare(locName(b), state.ui));
}
function buildCountryLists() {
  $("#country-list").innerHTML = sortedWorld()
    .map((w) => `<option value="${esc(locName(w))} / ${esc(w.en)}"></option>`)
    .join("");
}
function resolveCountry(raw) {
  const v = raw.trim().toLowerCase();
  if (!v) return null;
  let hit = WORLD.find((w) => `${locName(w)} / ${w.en}`.toLowerCase() === v);
  if (!hit) hit = WORLD.find((w) => w.en.toLowerCase() === v || locName(w).toLowerCase() === v);
  if (!hit && v.length >= 2) hit = WORLD.find((w) => `${locName(w)} / ${w.en}`.toLowerCase().includes(v));
  return hit || null;
}
$("#search").addEventListener("change", (e) => {
  const hit = resolveCountry(e.target.value);
  if (hit) { selectN3(hit.n3); e.target.value = ""; e.target.blur(); }
});

function updateHomeBtn() {
  const hw = homeW();
  $("#home-btn").textContent = hw ? `${dispFlag(hw.a2)} ${locName(hw)}`.trim() : "🌐 —";
  $("#home-btn").title = t("myCountry");
}
function setHome(n3) {
  state.homeN3 = n3;
  localStorage.setItem("wtm-home-n3", n3);
  updateHomeBtn();
  rerenderPanel();
}

function openWelcome() {
  const hw = homeW();
  $("#home-input").value = hw ? `${locName(hw)} / ${hw.en}` : (state.ui === "zh" ? "中国 / China" : "China");
  $("#welcome-lang").value = state.ui;
  $("#home-opts").classList.add("hidden");
  $("#welcome").classList.remove("hidden");
}

// custom always-readable country dropdown (native datalist popups were unreadable in dark mode)
function renderHomeOpts(filter) {
  const q = (filter || "").trim().toLowerCase();
  const items = sortedWorld().filter((w) =>
    !q || locName(w).toLowerCase().includes(q) || w.en.toLowerCase().includes(q));
  $("#home-opts").innerHTML = items
    .map((w) => {
      const f = dispFlag(w.a2);
      return `<div class="opt" data-n3="${w.n3}">${f ? f + " " : ""}${esc(locName(w))}<span class="opt-en">${esc(w.en)}</span></div>`;
    })
    .join("");
}
$("#home-input").addEventListener("focus", () => {
  renderHomeOpts("");
  $("#home-opts").classList.remove("hidden");
});
$("#home-input").addEventListener("input", (e) => {
  renderHomeOpts(e.target.value);
  $("#home-opts").classList.remove("hidden");
});
$("#home-opts").addEventListener("mousedown", (e) => {
  const o = e.target.closest(".opt");
  if (!o) return;
  e.preventDefault(); // keep the input from blurring first
  const w = worldByN3[o.dataset.n3];
  $("#home-input").value = `${locName(w)} / ${w.en}`;
  $("#home-opts").classList.add("hidden");
});
$("#home-input").addEventListener("blur", () => {
  setTimeout(() => $("#home-opts").classList.add("hidden"), 150);
});
$("#welcome-lang").addEventListener("change", (e) => {
  state.ui = e.target.value;
  localStorage.setItem("wtm-ui", state.ui);
  $("#ui-lang").value = state.ui;
  applyChrome();
  buildCountryLists();
});
$("#start-btn").addEventListener("click", () => {
  const hit = resolveCountry($("#home-input").value) || worldByN3["156"];
  setHome(hit.n3);
  $("#welcome").classList.add("hidden");
  if (globe && hit.lat != null && !state.selN3) {
    globe.pointOfView({ lat: hit.lat, lng: hit.lng, altitude: 1.9 }, 1200);
  }
});
$("#home-btn").addEventListener("click", openWelcome);

$("#ui-lang").value = state.ui;
$("#ui-lang").addEventListener("change", (e) => {
  state.ui = e.target.value;
  localStorage.setItem("wtm-ui", state.ui);
  applyChrome();
  buildCountryLists();
  updateHomeBtn();
  rerenderPanel();
});
window.__wtm = { select: (a2) => { const d = DATA[a2]; if (d) selectN3(d.n3); }, selectN3, state, hoverSuppressed: () => suppressHover }; // debug handle

/* ---------- init ---------- */
applyChrome();
buildCountryLists();
updateHomeBtn();
renderHint();
loadRates();
initGlobe();
openWelcome(); // always ask on entry — visitors pick their own country & language
