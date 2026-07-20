// Plug types & voltage by country (cca2). Sources: IEC world plugs list.
// PLUGS[a2] = { t: ["C","F"], v: "230V" }
const PLUGS = {};
function _reg(types, volt, codes) {
  for (const a2 of codes.split(" ")) PLUGS[a2] = { t: types.split("/"), v: volt };
}

// North/Central America & Caribbean (Type A/B, 110–127V)
_reg("A/B", "120V", "US CA GT SV HN NI CR PA DO HT JM BS BB TT PR BM KY TC VG VI GU FM MH PW AS");
_reg("A/B", "110V", "CO VE");
_reg("A/B", "120V", "EC");
_reg("A/B", "127V", "MX");
_reg("A/B/F", "127V", "AW CW");
_reg("A/B/G", "110V / 220V", "BZ");
_reg("A/C/L", "110V / 220V", "CU");

// East Asia
_reg("A/B", "100V", "JP");
_reg("A/B", "110V", "TW");
_reg("A/C/I", "220V", "CN");
_reg("C/F", "220V", "KR");
_reg("A/C/F", "220V", "KP");
_reg("G", "220V", "HK");
_reg("D/G/F", "220V", "MO");
_reg("C/E", "230V", "MN");

// Southeast Asia
_reg("A/B/C/O", "230V", "TH");
_reg("A/C/D", "220V", "VN");
_reg("G", "230V", "SG MY BN");
_reg("C/F", "230V", "ID TL");
_reg("A/B/C", "220V", "PH");
_reg("C/D/F/G", "230V", "MM");
_reg("A/C/G", "230V", "KH");
_reg("A/C", "230V", "LA");

// South Asia
_reg("C/D/M", "230V", "IN NP");
_reg("C/D", "230V", "PK AF");
_reg("C/D/G", "220V", "BD");
_reg("D/G/M", "230V", "LK");
_reg("D/F/G", "230V", "BT");
_reg("D/G", "230V", "MV");

// Middle East
_reg("G", "230V", "AE QA BH KW OM SA YE");
_reg("C/F/G", "230V", "JO");
_reg("C/D/G", "230V", "IQ LB");
_reg("C/F", "230V", "IR TR SY");
_reg("C/H/M", "230V", "IL PS");

// Europe — Schuko C/F
_reg("C/F", "230V", "DE NL ES PT GR AT HU RO BG HR RS SI BA MK AL ME SE NO FI IS EE LV LT RU BY UA MD GE AM AZ AD XK");
// Europe — French C/E
_reg("C/E", "230V", "FR BE PL CZ SK MC LU");
_reg("G", "230V", "GB IE MT CY GI");
_reg("C/F/L", "230V", "IT SM VA");
_reg("C/J", "230V", "CH LI");
_reg("C/E/F/K", "230V", "DK FO GL");

// Central Asia
_reg("C/F", "220V", "KZ KG UZ TJ TM");

// Oceania
_reg("I", "230V", "AU NZ FJ PG SB TO WS TV NR KI CK NU");
_reg("C/I", "230V", "VU");
_reg("C/E", "220V", "PF NC WF");

// South America
_reg("C/N", "127V / 220V", "BR");
_reg("C/I", "220V", "AR");
_reg("C/L", "220V", "CL");
_reg("A/B/C", "220V", "PE");
_reg("A/C", "230V", "BO");
_reg("C", "220V", "PY");
_reg("C/F/I/L", "220V", "UY");
_reg("A/B/D/G", "240V", "GY");
_reg("C/F", "127V", "SR");
_reg("C/E", "220V", "GF");

// North & West Africa
_reg("C/E", "220V", "MA DZ TN SN CI CM BF ML NE BJ TG GQ CF KM DJ GA CG CD BI MG");
_reg("C", "220V", "MR AO GW SO EH");
_reg("C/F", "220V", "EG LY ST CV MZ");
_reg("C/F/K", "220V", "GN");
_reg("C/D", "230V", "SD SS");
_reg("C/F", "220V", "ET");
_reg("C/L", "230V", "ER");
_reg("C/J", "230V", "RW");
_reg("C/E", "220V", "RE YT GP MQ");

// East & Southern Africa
_reg("G", "240V", "KE UG TZ ZM MW SL GM NG GH");
_reg("D/G", "220V", "ZW LR");
_reg("D/G/M", "230V", "BW");
_reg("C/G", "230V", "MU");
_reg("G", "240V", "SC");
_reg("C/D/M/N", "230V", "ZA");
_reg("M", "220V", "LS SZ");
_reg("D/M", "220V", "NA");

// Caribbean (UK-style islands)
_reg("G", "230V", "LC GD DM KN VC AG AI MS");

// Which sockets each plug type physically fits into
const PLUG_FITS = {
  A: ["A", "B"], B: ["B"],
  C: ["C", "E", "F", "H", "J", "K", "L", "N", "O"],
  D: ["D"], E: ["E", "F"], F: ["E", "F"],
  G: ["G"], H: ["H"], I: ["I"], J: ["J"], K: ["K"],
  L: ["L"], M: ["M"], N: ["N"], O: ["O"],
};

// Adapter-family grouping for shopping advice
const PLUG_FAM = {
  A: "us", B: "us", C: "eu", E: "eu", F: "eu", G: "uk", I: "au",
  D: "in", M: "za", J: "ch", K: "dk", L: "it", N: "br", H: "il", O: "th",
};
// Plain-language socket descriptions (what the holes look like)
const SOCKET_DESC = {
  A: { zh: "两孔扁脚", en: "2 flat pins" },
  B: { zh: "三孔·两扁一圆（美式）", en: "3-pin grounded (US)" },
  C: { zh: "两孔圆脚（欧式）", en: "2 round pins (Euro)" },
  D: { zh: "三孔圆脚（旧英式/印度）", en: "3 round pins (old UK/India)" },
  E: { zh: "两孔圆脚带接地柱（法式）", en: "2 round pins + earth pin (French)" },
  F: { zh: "两孔圆脚带侧接地（德式）", en: "2 round pins, side clips (Schuko)" },
  G: { zh: "三孔方脚（英式）", en: "3 rectangular pins (UK)" },
  H: { zh: "三孔（以色列专用）", en: "3-pin (Israel)" },
  I: { zh: "三孔扁脚八字形（同国内三脚）", en: "3 flat pins, angled (AU/CN)" },
  J: { zh: "三孔圆脚（瑞士专用）", en: "3 round pins (Swiss)" },
  K: { zh: "三孔（丹麦专用）", en: "3-pin (Danish)" },
  L: { zh: "三孔圆脚一字排（意大利）", en: "3 round pins in a row (Italy)" },
  M: { zh: "三孔大圆脚（南非）", en: "3 large round pins (South Africa)" },
  N: { zh: "三孔圆脚（巴西）", en: "3 round pins (Brazil)" },
  O: { zh: "三孔圆脚（泰国）", en: "3 round pins (Thai)" },
};

// The 2-pin plug a traveler's phone charger typically has, by home-country sockets
function chooseCharger(types) {
  if (types.includes("A")) return "A";
  if (types.some((x) => "CEFJKLNOH".includes(x))) return "C";
  if (types.includes("G")) return "G";
  if (types.includes("I")) return "I";
  if (types.includes("D")) return "D";
  return types[0];
}
const CHARGER_NAME = {
  A: { zh: "两脚扁插", en: "2 flat pins" },
  C: { zh: "两脚圆插", en: "2 round pins" },
  G: { zh: "三脚方插", en: "UK 3-pin" },
  I: { zh: "三脚扁插", en: "3 flat pins" },
  D: { zh: "三脚圆插", en: "3 round pins" },
};

const PLUG_FAM_LABEL = {
  us: { zh: "美标", en: "US-type" },
  eu: { zh: "欧标", en: "EU-type" },
  uk: { zh: "英标", en: "UK-type" },
  au: { zh: "澳标", en: "AU-type" },
  in: { zh: "印度标", en: "India-type" },
  za: { zh: "南非标", en: "South-Africa-type" },
  ch: { zh: "瑞士标", en: "Swiss-type" },
  dk: { zh: "丹麦标", en: "Danish-type" },
  it: { zh: "意大利标", en: "Italian-type" },
  br: { zh: "巴西标", en: "Brazil-type" },
  il: { zh: "以色列标", en: "Israel-type" },
  th: { zh: "泰标", en: "Thai-type" },
};
