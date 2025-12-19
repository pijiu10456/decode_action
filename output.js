//Fri Dec 19 2025 17:30:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var i11iIIii = typeof globalThis !== "undefined" && globalThis.AndroidBridge ? globalThis.AndroidBridge : typeof i11iIIii !== "undefined" ? i11iIIii : null;
function ilIiiill() {
  try {
    if (i11iIIii && i11iIIii.log) i11iIIii.log([].map.call(arguments, illi => String(illi)).join(" "));
  } catch (iiliIIiI) {}
}
function liIiiIl1() {
  var lIlIIil = [];
  for (var il1iiiil = 0; il1iiiil < arguments.length; il1iiiil++) {
    var IllIiII1 = String(arguments[il1iiiil] || "");
    if (!IllIiII1) continue;
    if (IllIiII1[0] === "/" && il1iiiil > 0) IllIiII1 = IllIiII1.replace(/^\/+/, "");
    lIlIIil.push(IllIiII1.replace(/\\/g, "/"));
  }
  return lIlIIil.join("/").replace(/\\/g, "/").replace(/\/+/g, "/");
}
function ilIlI11I(I1i11IlI) {
  if (!i11iIIii || !i11iIIii.readText) return null;
  try {
    return i11iIIii.readText(I1i11IlI);
  } catch (I1lI1IlI) {
    return null;
  }
}
function llIIilil(IIliliii, ilIlIlII) {
  if (!i11iIIii || !i11iIIii.writeText) return false;
  try {
    return !!i11iIIii.writeText(IIliliii, String(ilIlIlII));
  } catch (Il111Ill) {
    return false;
  }
}
async function i111lll(IIi1l1, l1iIlII1, iIIlllII) {
  try {
    if (!i11iIIii || !i11iIIii.http) return ilIiiill("HTTP不可用：AndroidBridge.http 缺失"), null;
    var I1lllIii = {
      "method": String(IIi1l1.method || "GET").toUpperCase(),
      "url": String(IIi1l1.url || ""),
      "headers": IIi1l1.headers || {},
      "body": typeof IIi1l1.body === "string" ? IIi1l1.body : IIi1l1.body ? JSON.stringify(IIi1l1.body) : "",
      "timeout": IIi1l1.timeout || 20000,
      "proxy": iIIlllII || null
    };
    var lI11liI = await i11iIIii.http(I1lllIii);
    var illll1li = lI11liI && typeof lI11liI.body === "string" ? lI11liI.body : "";
    try {
      return JSON.parse(illll1li);
    } catch (IlIlIIIl) {
      return illll1li;
    }
  } catch (IlliiIi) {
    ilIiiill("HTTP请求失败: " + (IlliiIi && IlliiIi.message || IlliiIi));
    return null;
  }
}
function I1IIl1lI(lIIlll1l) {
  this.name = lIIlll1l;
  this.logSeparator = "\n";
}
I1IIl1lI.prototype.isNode = function () {
  return true;
};
I1IIl1lI.prototype.getdata = function () {
  return null;
};
I1IIl1lI.prototype.setdata = function () {
  return false;
};
I1IIl1lI.prototype.log = function () {
  try {
    ilIiiill([].slice.call(arguments).join(this.logSeparator));
  } catch (i11lII1l) {}
};
I1IIl1lI.prototype.done = function () {};
var iiI1I1Il = false;
if (!i11iIIii) {
  iiI1I1Il = true;
  try {
    var I1iIliI = require("fs");
    ilIlI11I = function (IIIli1l1) {
      try {
        return I1iIliI.readFileSync(IIIli1l1, "utf8");
      } catch (lili1il1) {
        return null;
      }
    };
    llIIilil = function (il1l11ll, IIi1iI1) {
      try {
        I1iIliI.writeFileSync(il1l11ll, String(IIi1iI1));
        return true;
      } catch (IIIilI1I) {
        return false;
      }
    };
  } catch (Ii1llili) {}
  try {
    if (typeof fetch !== "function") {
      var IiiI1i = null;
      try {
        IiiI1i = require("node-fetch");
      } catch (i1llI1li) {
        IiiI1i = null;
      }
      IiiI1i && (global.fetch = IiiI1i);
    }
  } catch (Ii11IiiI) {}
  if (typeof fetch === "function") {
    async function ll1ll1ll(I1llIIll, i1ililII, ilII1I1I) {
      try {
        {
          var I1IlIIlI = String(I1llIIll.method || "GET").toUpperCase();
          var I1111llI = I1llIIll.headers || {};
          var iI1IiII1 = I1IlIIlI === "GET" || I1IlIIlI === "HEAD" ? undefined : typeof I1llIIll.body === "string" ? I1llIIll.body : I1llIIll.body ? JSON.stringify(I1llIIll.body) : undefined;
          var I111iiI1 = await fetch(String(I1llIIll.url || ""), {
            "method": I1IlIIlI,
            "headers": I1111llI,
            "body": iI1IiII1
          });
          var I11Ii1 = await I111iiI1.text();
          try {
            return JSON.parse(I11Ii1);
          } catch (lii11ill) {
            return I11Ii1;
          }
        }
      } catch (illliIIi) {
        console.log("[fetch] HTTP请求失败: " + (illliIIi && illliIIi.message || illliIIi));
        return null;
      }
    }
  }
}
const IIlIIII = new I1IIl1lI("ks200"),
  iiiIiiIi = "ks200",
  i1llliil = "phid";
function lilIlill() {
  try {
    {
      var I1I11ii1 = ["config.txt", "ks200.txt", ".env"];
      for (var iilIiII1 = 0; iilIiII1 < I1I11ii1.length; iilIiII1++) {
        var ll1iilii = I1I11ii1[iilIiII1],
          Il1l11lI = ilIlI11I(ll1iilii);
        if (Il1l11lI && String(Il1l11lI).length) {
          {
            var ll1l1lI = {},
              iIIIIlI = String(Il1l11lI).split("\n");
            for (var iIliilIi = 0; iIliilIi < iIIIIlI.length; iIliilIi++) {
              var llI1111I = iIIIIlI[iIliilIi].trim();
              if (!llI1111I || llI1111I.indexOf("#") === 0) continue;
              var i1Iliiil = llI1111I.indexOf("=");
              if (i1Iliiil > 0) {
                var iIiIii1l = llI1111I.slice(0, i1Iliiil).trim(),
                  iil1IIiI = llI1111I.slice(i1Iliiil + 1).trim();
                ll1l1lI[iIiIii1l] = iil1IIiI;
              }
            }
            return ll1l1lI;
          }
        }
      }
      return {};
    }
  } catch (Ilil1i1l) {
    IIlIIII.log("⚠️ 配置文件读取失败: " + (Ilil1i1l && Ilil1i1l.message || Ilil1i1l));
    return {};
  }
}
const lli111II = lilIlill();
let illI11Ii = lli111II.phid || (IIlIIII.isNode() ? process.env[i1llliil] : IIlIIII.getdata(i1llliil)) || "",
  liIll1lI = lli111II.km || (IIlIIII.isNode() ? process.env.km : IIlIIII.getdata("km")) || "",
  iI1iiIil = lli111II.jinbi || (IIlIIII.isNode() ? process.env.jinbi : IIlIIII.getdata("jinbi")) || "",
  l1IlIlll = lli111II.AMA || (IIlIIII.isNode() ? process.env.AMA : IIlIIII.getdata("AMA")) || "0",
  IIilIlIl = parseInt(lli111II.loops || (IIlIIII.isNode() ? process.env.loops : IIlIIII.getdata("loops")) || "10"),
  l1i1Illi = lli111II.ad || (IIlIIII.isNode() ? process.env.ad : IIlIIII.getdata("ad")) || "",
  liil11lI = lli111II.huihao || (IIlIIII.isNode() ? process.env.huihao : IIlIIII.getdata("huihao")) || "0";
const l1i1I11 = 0;
let lIilIiil = 0,
  liiiIlii = ["\n", "&"],
  ll1l1lli = msg = "",
  il1lllll,
  ll1lI1l1,
  llliilIl = lli111II.ks200 || (IIlIIII.isNode() ? process.env[iiiIiiIi] : IIlIIII.getdata(iiiIiiIi)) || "",
  lII1IIiI = null;
function lI1lI1l() {
  return null;
}
let i1li1Ii1 = [],
  iI1l1Ill = 0,
  llllI1lI = 0,
  lIiI11 = Date.now(),
  l1ll1Il1 = lIiI11 - 25000;
const I1I1llII = new Date(),
  l11IiIii = I1I1llII.getHours();
let IIlIl1Ii = [],
  Ili1111l = 20000,
  l1Iiill1 = 30000;
const liillI1i = lli111II.xz || (IIlIIII.isNode() ? process.env.xz : IIlIIII.getdata("xz")) || "";
liillI1i === "0" && (Ili1111l = 0, l1Iiill1 = 5000);
let Illliil1 = 0,
  lIilI11 = 0,
  I1l1iiI = false,
  ll1ii1i = 0;
const il1liii1 = "Mozilla/5.0 (Linux; Android 13; 23116PN5BC Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160043 MMWEBSDK/20231202 MMWEBID/9859 MicroMessenger/8.0.47.2560(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64";
function i1iIiii(i1IlIII1) {
  if (!i1IlIII1) return null;
  if (i1IlIII1.startsWith("socks5://") || i1IlIII1.startsWith("http://") || i1IlIII1.startsWith("https://")) return i1IlIII1;
  const IliIi1ii = i1IlIII1.split("|");
  if (IliIi1ii.length === 4) {
    {
      const [liii1iii, Illl11il, IIIIIiII, ii1l11ii] = IliIi1ii;
      return "socks5://" + IIIIIiII + ":" + ii1l11ii + "@" + liii1iii + ":" + Illl11il;
    }
  }
  if (i1IlIII1.includes(":") && !i1IlIII1.includes("|")) return "socks5://" + i1IlIII1;
  return i1IlIII1;
}
function Il11llIi(I11IIiii) {
  if (liil11lI === "1") return false;
  const IIlIiIl = Date.now();
  if (I11IIiii === 1 || I11IIiii === 10) {
    {
      Illliil1++;
      lIilI11 = IIlIiIl;
      if (Illliil1 === 1) {
        const IiII1iii = 1;
        ll1ii1i = IIlIiIl + IiII1iii * 3600 * 1000;
        I1l1iiI = true;
        console.log("检测到低金币(" + I11IIiii + ")，暂停任务" + IiII1iii + "小时");
        return true;
      } else {
        if (Illliil1 === 2) {
          const liiliI1I = 2;
          ll1ii1i = IIlIiIl + liiliI1I * 3600 * 1000;
          I1l1iiI = true;
          console.log("再次检测到低金币(" + I11IIiii + ")，暂停任务" + liiliI1I + "小时");
          return true;
        } else {
          if (Illliil1 === 3) {
            const I11IIIi = 3;
            ll1ii1i = IIlIiIl + I11IIIi * 3600 * 1000;
            I1l1iiI = true;
            console.log("第三次检测到低金币(" + I11IIiii + ")，暂停任务" + I11IIIi + "小时");
            return true;
          } else {
            if (Illliil1 >= 4) {
              const lllil1l = IIlIiIl + 86400000,
                iI11lii = lllil1l - lllil1l % 86400000;
              ll1ii1i = iI11lii;
              I1l1iiI = true;
              console.log("连续" + Illliil1 + "次检测到低金币(" + I11IIiii + ")，暂停任务到明天");
              return true;
            }
          }
        }
      }
    }
  } else Illliil1 > 0 && (console.log("检测到正常金币(" + I11IIiii + ")，重置低金币计数"), Illliil1 = 0, I1l1iiI = false);
  return false;
}
function i1liI1l1() {
  if (!I1l1iiI) return false;
  const llIIi1Ii = Date.now();
  if (llIIi1Ii >= ll1ii1i) return I1l1iiI = false, Illliil1 = 0, console.log("低金币暂停时间已过，恢复任务执行"), false;
  return true;
}
const II1iIi11 = {
  "广告": 672,
  "宝箱": 606,
  "饭补": 9362,
  "搜索": 7038,
  "内容": 7054,
  "广告2": 7044,
  "内容2": 7060
};
function i1II1Ii() {
  if (!l1i1Illi) {
    return Object.values(II1iIi11);
  }
  const IilIII1l = [],
    l1iIilIl = l1i1Illi.split(",").map(IIi1li11 => IIi1li11.trim()).filter(I1IiIIii => I1IiIIii);
  for (const IllliI of l1iIilIl) {
    II1iIi11[IllliI] && IilIII1l.push(II1iIi11[IllliI]);
  }
  return IilIII1l;
}
function IlliiI1(ili1Iii1) {
  return i1II1Ii().includes(ili1Iii1);
}
async function i1ilIi1I() {
  try {
    const iIlI111i = "http://121.204.244.130:18999/jk.php",
      IiiIi111 = await fetch(iIlI111i, {
        "method": "GET",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      }),
      I1Ii11il = await IiiIi111.text();
    let IIiiI1I1 = null;
    try {
      IIiiI1I1 = JSON.parse(I1Ii11il);
    } catch (IIliilli) {
      IIiiI1I1 = I1Ii11il;
    }
    function l1l1lIlI(IiI1i1II) {
      {
        if (Array.isArray(IiI1i1II)) return IiI1i1II;
        if (!IiI1i1II) return null;
        if (typeof IiI1i1II === "string") {
          try {
            return l1l1lIlI(JSON.parse(IiI1i1II));
          } catch (IiIl1lll) {
            return null;
          }
        }
        if (typeof IiI1i1II === "object") {
          {
            function llIIii1l(lIiIlIii) {
              if (!lIiIlIii) return [];
              if (Array.isArray(lIiIlIii)) {
                return lIiIlIii.map(function (I1l1i11i) {
                  if (typeof I1l1i11i === "string") return {
                    "url": I1l1i11i
                  };
                  if (I1l1i11i && typeof I1l1i11i === "object" && I1l1i11i.url) return {
                    "url": I1l1i11i.url
                  };
                  return null;
                }).filter(Boolean);
              }
              if (typeof lIiIlIii === "object" && Array.isArray(lIiIlIii.interfaces)) {
                return lIiIlIii.interfaces.map(function (ll111iII) {
                  if (typeof ll111iII === "string") return {
                    "url": ll111iII
                  };
                  if (ll111iII && typeof ll111iII === "object" && ll111iII.url) return {
                    "url": ll111iII.url
                  };
                  return null;
                }).filter(Boolean);
              }
              if (typeof lIiIlIii === "string") {
                {
                  var il1IiI11 = lIiIlIii.split(/[\n,;\s]+/).map(function (IllllIl1) {
                    return IllllIl1.trim();
                  }).filter(Boolean);
                  return il1IiI11.map(function (liiilIIl) {
                    return {
                      "url": liiilIIl
                    };
                  });
                }
              }
              return [];
            }
            var Ii1l1iiI = IiI1i1II;
            if (IiI1i1II && typeof IiI1i1II.data === "object") Ii1l1iiI = IiI1i1II.data;
            if (Ii1l1iiI && typeof Ii1l1iiI.apiGroups !== "undefined") {
              var iIlIi1il = Ii1l1iiI.apiGroups;
              if (Array.isArray(iIlIi1il)) return iIlIi1il;
            }
            var il1iIli1 = [],
              iII11iII = [IiI1i1II, IiI1i1II.data].filter(function (Ilililii) {
                return !!Ilililii && typeof Ilililii === "object";
              });
            for (var iIllliii = 0; iIllliii < iII11iII.length; iIllliii++) {
              var iill11il = iII11iII[iIllliii];
              var Iliil1I = llIIii1l(iill11il.sign || iill11il.SIGN || iill11il.Sign);
              var IiIli1Ii = llIIii1l(iill11il.enc || iill11il.ENC || iill11il.Enc);
              if (Iliil1I.length) il1iIli1.push({
                "name": "sign",
                "interfaces": Iliil1I
              });
              if (IiIli1Ii.length) il1iIli1.push({
                "name": "enc",
                "interfaces": IiIli1Ii
              });
              if (il1iIli1.length) return il1iIli1;
            }
            var lIilli1i = Object.keys(Ii1l1iiI || IiI1i1II || {});
            for (var I11I1Il1 = 0; I11I1Il1 < lIilli1i.length; I11I1Il1++) {
              var ii1iIlI1 = lIilli1i[I11I1Il1],
                lIi1l111 = llIIii1l((Ii1l1iiI || IiI1i1II)[ii1iIlI1]);
              lIi1l111.length && il1iIli1.push({
                "name": ii1iIlI1,
                "interfaces": lIi1l111
              });
            }
            if (il1iIli1.length) return il1iIli1;
          }
        }
        return null;
      }
    }
    var llI1IIII = l1l1lIlI(IIiiI1I1);
    return llI1IIII && Array.isArray(llI1IIII) && llI1IIII.length > 0 ? (IIlIl1Ii = llI1IIII, true) : (console.log("获取接口列表失败，返回值异常"), false);
  } catch (illlil11) {
    console.log("获取接口列表异常: " + (illlil11 && illlil11.message || illlil11));
    return false;
  }
}
function Iili1Il(lillIIll, lli1i1lI = "") {
  const I1l11lII = IIlIl1Ii.find(I1ll1iil => I1ll1iil.name === lillIIll);
  if (!I1l11lII || !I1l11lII.interfaces || I1l11lII.interfaces.length === 0) return null;
  const iliIliil = Math.floor(Math.random() * I1l11lII.interfaces.length),
    I11Iliil = I1l11lII.interfaces[iliIliil];
  return I11Iliil;
}
function IiI11iI() {
  return Math.floor(Math.random() * (l1Iiill1 - Ili1111l + 1)) + Ili1111l;
}
function III1iIi() {
  return Math.floor(Math.random() * 8001) + 2000;
}
async function liii1il1() {
  try {
    if (!llliilIl) {
      return;
    }
    if (i1li1Ii1.length === 0) return;
    for (const iIIillIi of i1li1Ii1) {
      const Ili1lIlI = {
          "Host": "nebula.kuaishou.com",
          "Connection": "keep-alive",
          "User-Agent": iIIillIi.userAgent,
          "Cookie": "kuaishou.api_st=" + iIIillIi.api_st + ";client_key=2ac2a76d;",
          "content-type": "application/json"
        },
        II1iiIII = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo";
      try {
        const liIl1ll = await fetch(II1iiIII, {
            "method": "GET",
            "headers": Ili1lIlI
          }),
          ii1I1lII = await liIl1ll.text();
        let ilillI1I = null;
        try {
          ilillI1I = JSON.parse(ii1I1lII);
        } catch (IiIIiiil) {
          ilillI1I = null;
        }
        if (ilillI1I && ilillI1I.result == 1) {
          const III11li1 = ilillI1I.data.totalCoin,
            il1lli11 = ilillI1I.data.allCash;
          console.log("账号[" + iIIillIi.index + "] " + iIIillIi.remark + "您的金币: " + III11li1 + " 余额: " + il1lli11);
          if (iI1iiIil) {
            const IlliI11l = parseInt(iI1iiIil);
            III11li1 > IlliI11l ? console.log("账号[" + iIIillIi.index + "] 金币(" + III11li1 + ")大于(" + IlliI11l + ")，今天任务已完成") : console.log("账号[" + iIIillIi.index + "] 金币(" + III11li1 + ")小于等于(" + IlliI11l + ")，继续执行任务");
          }
        } else console.log("账号[" + iIIillIi.index + "] 查询失败 ❌，原因: 未知");
      } catch (I1li1Il1) {}
    }
  } catch (l1lIiiiI) {}
}
async function ii1Ii1l() {
  try {
    if (typeof fetch !== "function") return;
    const I1iilil = await fetch("http://121.204.244.130:18999/gg.php"),
      i1lIllil = await I1iilil.text(),
      iilllII = String(i1lIllil || "").trim();
    if (iilllII && iilllII !== "0") {
      console.log(iilllII);
    }
  } catch (lI1lIll1) {}
}
async function il11i11() {
  await ii1Ii1l();
  console.log("\n================== 获取ad ==================\n");
  await liii1il1();
  console.log("\n📊 本次执行共 " + i1li1Ii1.length + " 个账号\n");
  let iliiIli1 = 0;
  while (iliiIli1 < IIilIlIl) {
    iliiIli1++;
    if (i1liI1l1()) {
      while (i1liI1l1()) {
        const iiiI1i1i = Math.ceil((ll1ii1i - Date.now()) / 1000);
        if (iiiI1i1i > 0) {
          const iI1l1il = Math.floor(iiiI1i1i / 3600),
            Ill1lIi1 = Math.floor(iiiI1i1i % 3600 / 60),
            ilI1l1 = iiiI1i1i % 60;
          console.log("⏸️ 因低金币暂停中，剩余时间: " + iI1l1il.toString().padStart(2, "0") + ":" + Ill1lIi1.toString().padStart(2, "0") + ":" + ilI1l1.toString().padStart(2, "0"));
          await new Promise(Il111li1 => setTimeout(Il111li1, 10000));
        } else {
          I1l1iiI = false;
          Illliil1 = 0;
          console.log("低金币暂停时间已过，恢复任务执行");
          break;
        }
      }
      continue;
    }
    for (let Illl1ill of i1li1Ii1) {
      const I1IlIl1l = IiI11iI();
      console.log("账号[" + Illl1ill.index + "]  随机延迟 " + Math.round(I1IlIl1l / 1000) + "秒");
      Illl1ill.initialDelay = I1IlIl1l;
    }
    let lIlIlilI = [];
    for (let i1IiilIi of i1li1Ii1) {
      lIlIlilI.push((async () => {
        await new Promise(li1ll11I => setTimeout(li1ll11I, i1IiilIi.initialDelay));
        const Iliiill1 = [{
          "id": 672,
          "name": "广告"
        }, {
          "id": 606,
          "name": "宝箱"
        }, {
          "id": 9362,
          "name": "饭补"
        }, {
          "id": 7038,
          "name": "搜索"
        }, {
          "id": 7054,
          "name": "内容"
        }, {
          "id": 7044,
          "name": "广告2"
        }, {
          "id": 7060,
          "name": "内容2"
        }];
        for (const iiiI11 of Iliiill1) {
          if (i1liI1l1()) {
            {
              console.log("账号[" + i1IiilIi.index + "] 因低金币暂停，停止所有任务");
              return;
            }
          }
          if (!IlliiI1(iiiI11.id)) {
            {
              console.log("账号[" + i1IiilIi.index + "]  " + iiiI11.name + "任务已禁用，跳过执行");
              continue;
            }
          }
          if (!i1IiilIi.isTaskStopped(iiiI11.id)) {
            await i1IiilIi.cid(iiiI11.id);
          } else {
            console.log("账号[" + i1IiilIi.index + "]  " + iiiI11.name + "任务已达上限，已停止执行");
          }
        }
      })());
    }
    await Promise.all(lIlIlilI);
    if (iliiIli1 < IIilIlIl) {}
  }
}
class l11lIil {
  constructor(lil1liiI) {
    this.index = ++iI1l1Ill;
    this.remark = lil1liiI.remark || "小主";
    this.salt = lil1liiI.salt;
    this.userAgent = lil1liiI.userAgent || il1liii1;
    this.sock5 = i1iIiii(lil1liiI.sock5);
    this.userId = lil1liiI.userId;
    this.egid = lil1liiI.egid;
    this.did = lil1liiI.did;
    this.api_st = lil1liiI.api_st;
    this.appver = lil1liiI.appver || "13.2.41.9745";
    if (!this.salt || !this.userAgent || !this.userId || !this.egid || !this.did || !this.api_st) {
      console.log("账号[" + this.index + "] 参数不完整:", {
        "salt": this.salt,
        "userAgent": this.userAgent,
        "userId": this.userId,
        "egid": this.egid,
        "did": this.did,
        "api_st": this.api_st
      });
      this.valid = false;
      return;
    }
    this.valid = true;
    this.headers = {
      "Host": "nebula.kuaishou.cn",
      "Connection": "keep-alive",
      "User-Agent": this.userAgent,
      "Cookie": "kuaishou.api_st=" + this.api_st + ";client_key=2ac2a76d;",
      "content-type": "application/json"
    };
    this.hostt = "https://api.e.kuaishou.com";
    this.path = "/rest/r/ad/task/report";
    this.query = "mod=Xiaomi(23116PN5BC)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.stoppedTasks = new Set();
    this.degradedTasks = new Set();
  }
  ["isTaskStopped"](i1Ili1Il) {
    return this.stoppedTasks.has(i1Ili1Il);
  }
  ["stopTask"](lIlliIII) {
    this.stoppedTasks.add(lIlliIII);
  }
  ["isTaskDegraded"](llIllIi1) {
    return this.degradedTasks.has(llIllIi1);
  }
  ["degradeTask"](iiiilllI) {
    this.degradedTasks.add(iiiilllI);
  }
  async ["sig3"](ii1liIlI, li1i11il, IIIIlI, il1lI1Ii, iiIl1IiI) {
    if (!this.valid) return;
    if (IIIIlI === 672) {
      {
        if (this.isTaskDegraded(672)) var I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";else {
          var I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0},{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":1,\"taskType\":3,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";
        }
      }
    }
    if (IIIIlI === 606) {
      if (this.isTaskDegraded(606)) {
        var I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":20346,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100024064}&cs=false&client_key=2ac2a76d";
      } else var I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":7,\"taskType\":2,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":20346,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100024064}&cs=false&client_key=2ac2a76d";
    }
    if (IIIIlI === 9362) var Ii1IlI = l1IlIlll === "1" ? 3 : 1,
      I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":1,\"taskType\":" + Ii1IlI + ",\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":24067,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100026367}&cs=false&client_key=2ac2a76d";
    if (IIIIlI === 7038) var I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":96134,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100074584}&cs=false&client_key=2ac2a76d";
    if (IIIIlI === 7054) var I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":186550,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100141480}&cs=false&client_key=2ac2a76d";
    if (IIIIlI === 7044) var I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":182533,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100138797}&cs=false&client_key=2ac2a76d";
    if (IIIIlI === 7060) var I11Il11i = "bizStr={\"businessId\":" + IIIIlI + ",\"endTime\":" + l1ll1Il1 + ",\"extParams\":\"\",\"mediaScene\":\"" + il1lI1Ii + "\",\"neoInfos\":[{\"creativeId\":" + ii1liIlI + ",\"extInfo\":\"\",\"llsid\":" + li1i11il + ",\"requestSceneType\":1,\"taskType\":1,\"watchExpId\":\"\",\"watchStage\":0}],\"pageId\":11101,\"posId\":188553,\"reportType\":0,\"sessionId\":\"\",\"startTime\":" + lIiI11 + ",\"subPageId\":100138797}&cs=false&client_key=2ac2a76d";
    try {
      const ilIi1lIl = Iili1Il("sign", this.index);
      if (!ilIi1lIl) return;
      let IiI111l1 = {
          "method": "post",
          "url": "http://" + ilIi1lIl.url + "?km=" + encodeURIComponent(liIll1lI) + "&user=" + this.userId,
          "headers": {
            "User-Agent": this.userAgent,
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({
            "query": this.query,
            "body": I11Il11i,
            "salt": this.salt,
            "path": this.path
          })
        },
        I1ilIll1 = null;
      try {
        {
          const IilII1lI = await fetch(IiI111l1.url, {
              "method": "POST",
              "headers": IiI111l1.headers,
              "body": IiI111l1.body
            }),
            iiiii1I1 = await IilII1lI.text();
          try {
            I1ilIll1 = JSON.parse(iiiii1I1);
          } catch (IiI1i11I) {
            I1ilIll1 = null;
          }
        }
      } catch (l1I1i11I) {
        I1ilIll1 = null;
      }
      if (I1ilIll1 && I1ilIll1.Sig && I1ilIll1.Sig3 && I1ilIll1.NsSig) {
        let IiIi11li = I1ilIll1.Sig,
          liIilllI = I1ilIll1.Sig3,
          iilIIllI = I1ilIll1.NsSig;
        if (IIIIlI === 672) {
          await this.ad(IiIi11li, liIilllI, iilIIllI, I11Il11i, IIIIlI);
        }
        IIIIlI === 606 && (await this.boxad(IiIi11li, liIilllI, iilIIllI, I11Il11i, IIIIlI));
        IIIIlI === 9362 && (await this.fanbuad(IiIi11li, liIilllI, iilIIllI, I11Il11i, IIIIlI));
        if (IIIIlI === 7038) {
          await this.ad7038(IiIi11li, liIilllI, iilIIllI, I11Il11i, IIIIlI);
        }
        if (IIIIlI === 7054) {
          await this.ad7054(IiIi11li, liIilllI, iilIIllI, I11Il11i, IIIIlI);
        }
        IIIIlI === 7044 && (await this.ad7044(IiIi11li, liIilllI, iilIIllI, I11Il11i, IIIIlI));
        IIIIlI === 7060 && (await this.ad7060(IiIi11li, liIilllI, iilIIllI, I11Il11i, IIIIlI));
      } else {
        return;
      }
    } catch (IIiI11li) {
      return;
    }
  }
  async ["cid"](IlllI1I, l1lIlII) {
    if (!this.valid) return;
    try {
      let iI1IlIii = IlllI1I;
      const l11Il1 = Iili1Il("enc", this.index);
      if (!l11Il1) {
        {
          console.log("账号[" + this.index + "] 无法获取enc接口");
          return;
        }
      }
      let i1ii1Iii = {
          "method": "get",
          "url": function () {
            var I1l1llII = [];
            I1l1llII.push("km=" + encodeURIComponent(liIll1lI));
            I1l1llII.push("salt=" + encodeURIComponent(String(this.salt || "")));
            I1l1llII.push("userId=" + encodeURIComponent(String(this.userId || "")));
            I1l1llII.push("did=" + encodeURIComponent(String(this.did || "")));
            I1l1llII.push("oaid=");
            I1l1llII.push("apist=" + encodeURIComponent(String(this.api_st || "")));
            I1l1llII.push("adType=" + encodeURIComponent(String(iI1IlIii)));
            return "http://" + l11Il1.url + "?" + I1l1llII.join("&");
          }.call(this),
          "headers": {
            "User-Agent": this.userAgent
          }
        },
        illIIilI = null;
      try {
        const lllIl1li = await fetch(i1ii1Iii.url, {
            "method": "GET",
            "headers": i1ii1Iii.headers || {}
          }),
          IiI1lIlI = await lllIl1li.text();
        try {
          illIIilI = JSON.parse(IiI1lIlI);
        } catch (ilill1il) {
          illIIilI = null;
        }
        if (!illIIilI) {
          {
            var ii1iIil1 = [];
            ii1iIil1.push("km=" + encodeURIComponent(liIll1lI));
            ii1iIil1.push("salt=" + encodeURIComponent(String(this.salt || "")));
            ii1iIil1.push("userId=" + encodeURIComponent(String(this.userId || "")));
            ii1iIil1.push("did=" + encodeURIComponent(String(this.did || "")));
            ii1iIil1.push("oaid=");
            ii1iIil1.push("apist=" + encodeURIComponent(String(this.api_st || "")));
            ii1iIil1.push("adType=" + encodeURIComponent(String(iI1IlIii)));
            const lIiIIi1I = "http://" + l11Il1.url,
              li11iiIl = await fetch(lIiIIi1I, {
                "method": "POST",
                "headers": Object.assign({}, i1ii1Iii.headers || {}, {
                  "Content-Type": "application/x-www-form-urlencoded"
                }),
                "body": ii1iIil1.join("&")
              }),
              ilIi1iIi = await li11iiIl.text();
            try {
              illIIilI = JSON.parse(ilIi1iIi);
            } catch (Ili11lI) {
              illIIilI = null;
            }
          }
        }
      } catch (lII1iil) {
        illIIilI = null;
      }
      if (illIIilI && illIIilI.result == 1 && illIIilI.feeds && illIIilI.feeds[0]) {
        if (illIIilI.feeds[0].caption) {
          console.log("账号[" + this.index + "] " + illIIilI.feeds[0].caption);
        }
        let ili1lIl = illIIilI.feeds[0].exp_tag,
          IilliliI = ili1lIl.split("/"),
          ii11ilil = IilliliI[1],
          IlII1Iil = ii11ilil.split("_")[0],
          lillI1 = illIIilI.feeds[0].ad.creativeId,
          l111il1i = IlII1Iil,
          i1II1iiI = illIIilI.feedType;
        if (!l111il1i || l111il1i === "undefined" || l111il1i === "") return;
        if (i1II1iiI === 0) {
          const IliIlll = IiI11iI();
          console.log("账号[" + this.index + "]  随机延迟 " + Math.round(IliIlll / 1000) + "秒");
          await new Promise(iii1Illi => setTimeout(iii1Illi, IliIlll));
          let lliIiill = "video";
          await this.sig3(lillI1, l111il1i, IlllI1I, lliIiill);
        }
      } else {
        return;
      }
    } catch (iIiiIIl1) {
      return;
    }
  }
  async ["boxad"](ii1lIIil, iii1i1li, IliiIii1, IIIl1iiI, i1l1Ii1i, Iii1Illl) {
    try {
      let IIll111i = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + ii1lIIil + "&__NS_sig3=" + iii1i1li + "&__NS_xfalcon=&__NStokensig=" + IliiIii1,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": IIIl1iiI
        },
        iiiii1 = null;
      try {
        {
          const lIIIi11i = await fetch(IIll111i.url, {
              "method": "POST",
              "headers": IIll111i.headers,
              "body": IIIl1iiI
            }),
            lI11IlII = await lIIIi11i.text();
          try {
            iiiii1 = JSON.parse(lI11IlII);
          } catch (l11ilili) {
            iiiii1 = null;
          }
        }
      } catch (iilI11iI) {
        iiiii1 = null;
      }
      if (iiiii1 && iiiii1.result == 1) {
        let Il1IIIII = iiiii1.data.neoAmount || 0;
        console.log("账号[" + this.index + "]  开宝箱获得金币:" + Il1IIIII);
        Il11llIi(Il1IIIII);
        const ll1l1lII = III1iIi();
        console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(ll1l1lII / 1000) + "秒");
        await new Promise(ii1i1iIl => setTimeout(ii1i1iIl, ll1l1lII));
      } else {
        {
          let IlilIl = iiiii1 && iiiii1.result;
          const ili1li1I = iiiii1 && (iiiii1.message || iiiii1.error_msg) || "";
          if (IlilIl == 1003 || typeof ili1li1I === "string" && ili1li1I.includes("今日奖励领完啦")) {
            if (this.isTaskDegraded(606)) {
              console.log("账号[" + this.index + "]  宝箱任务提示\"今日奖励领完啦\"，停止该任务");
              this.stopTask(606);
              return;
            } else {
              console.log("账号[" + this.index + "]  宝箱任务提示\"今日奖励领完啦\"，降级重试");
              this.degradeTask(606);
              return;
            }
          }
          if (this.isTaskDegraded(606) && (IlilIl == 400 || IlilIl == 415)) {
            console.log("账号[" + this.index + "]  宝箱任务已达上限，已停止执行");
            this.stopTask(606);
            return;
          }
          iiiii1 && iiiii1.result !== 400 && iiiii1.result !== 415 && console.log(iiiii1);
        }
      }
    } catch (liIili1l) {
      return;
    }
  }
  async ["ad"](lIIliIiI, I1iI1lIi, lliI1l1I, lIliIil, ilIi1i1I, I1I11iiI) {
    try {
      let i1I11iII = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + lIIliIiI + "&__NS_sig3=" + I1iI1lIi + "&__NS_xfalcon=&__NStokensig=" + lliI1l1I,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": lIliIil
        },
        l111iiII = null;
      try {
        const I1iil1l = await fetch(i1I11iII.url, {
            "method": "POST",
            "headers": i1I11iII.headers,
            "body": lIliIil
          }),
          i111I1II = await I1iil1l.text();
        try {
          l111iiII = JSON.parse(i111I1II);
        } catch (iIIill1l) {
          l111iiII = null;
        }
      } catch (llIlliIl) {
        l111iiII = null;
      }
      if (l111iiII && l111iiII.result == 1) {
        let llli1l = l111iiII.data.neoAmount || 0;
        console.log("账号[" + this.index + "]  看广告获得金额:" + llli1l);
        Il11llIi(llli1l);
        const Ili11l11 = III1iIi();
        console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(Ili11l11 / 1000) + "秒");
        await new Promise(iIIIl1Ii => setTimeout(iIIIl1Ii, Ili11l11));
      } else {
        let IlI1lili = l111iiII && l111iiII.result;
        const ii1iiIil = l111iiII && (l111iiII.message || l111iiII.error_msg) || "";
        if (IlI1lili == 1003 || typeof ii1iiIil === "string" && ii1iiIil.includes("今日奖励领完啦")) {
          {
            if (this.isTaskDegraded(672)) {
              console.log("账号[" + this.index + "]  ad广告任务提示\"今日奖励领完啦\"，停止该任务");
              this.stopTask(672);
              return;
            } else {
              {
                console.log("账号[" + this.index + "]  ad广告任务提示\"今日奖励领完啦\"，降级重试");
                this.degradeTask(672);
                return;
              }
            }
          }
        }
        l111iiII && l111iiII.result !== 400 && l111iiII.result !== 415 && console.log(l111iiII);
      }
    } catch (i1I1111i) {
      return;
    }
  }
  async ["fanbuad"](liI1iil, Iil1llIi, IlllI, ll11liII, i1ilIl1, II1I1ll) {
    try {
      {
        let Ii1lIiIi = {
            "method": "post",
            "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + liI1iil + "&__NS_sig3=" + Iil1llIi + "&__NS_xfalcon=&__NStokensig=" + IlllI,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou.api_st=" + this.api_st,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": ll11liII
          },
          lIlII1li = null;
        try {
          const l1Il1lI = await fetch(Ii1lIiIi.url, {
              "method": "POST",
              "headers": Ii1lIiIi.headers,
              "body": ll11liII
            }),
            I1liiiI = await l1Il1lI.text();
          try {
            lIlII1li = JSON.parse(I1liiiI);
          } catch (llIiiiii) {
            lIlII1li = null;
          }
        } catch (illlli1I) {
          lIlII1li = null;
        }
        if (lIlII1li && lIlII1li.result == 1) {
          let il1IlIlI = lIlII1li.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  饭补看广告" + il1IlIlI + "金币奖励！");
          Il11llIi(il1IlIlI);
          const iI1IIi = III1iIi();
          console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(iI1IIi / 1000) + "秒");
          await new Promise(iIilI1ii => setTimeout(iIilI1ii, iI1IIi));
        } else {
          const lIl1i1ii = lIlII1li && lIlII1li.result,
            I1iiiI11 = lIlII1li && (lIlII1li.message || lIlII1li.error_msg) || "";
          if (lIl1i1ii == 1003 || typeof I1iiiI11 === "string" && I1iiiI11.includes("今日奖励领完啦")) {
            console.log("账号[" + this.index + "]  饭补任务提示\"今日奖励领完啦\"，停止该任务");
            this.stopTask(9362);
            return;
          }
          console.log("账号[" + this.index + "] 饭补奖励失败,多次失败请先手动点击饭补的广告是否正常");
          lIlII1li && lIlII1li.result !== 400 && lIlII1li.result !== 415 && console.log(lIlII1li);
        }
      }
    } catch (I1l1ii1i) {
      return;
    }
  }
  async ["ad7038"](lI1i1iI, ll11llli, l1liiI1l, liiIilI1, il11iIi1, l1IliI) {
    try {
      let i1IiIi1 = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + lI1i1iI + "&__NS_sig3=" + ll11llli + "&__NS_xfalcon=&__NStokensig=" + l1liiI1l,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": liiIilI1
        },
        Ill1i1lI = null;
      try {
        const IiIIi1iI = await fetch(i1IiIi1.url, {
            "method": "POST",
            "headers": i1IiIi1.headers,
            "body": liiIilI1
          }),
          lI11111l = await IiIIi1iI.text();
        try {
          Ill1i1lI = JSON.parse(lI11111l);
        } catch (l11iiiI) {
          Ill1i1lI = null;
        }
      } catch (iiI1IilI) {
        Ill1i1lI = null;
      }
      if (Ill1i1lI && Ill1i1lI.result == 1) {
        let IllIilI1 = Ill1i1lI.data.neoAmount || 0;
        console.log("账号[" + this.index + "]  搜索看广告获得金额:" + IllIilI1);
        Il11llIi(IllIilI1);
        const IlIi11i = III1iIi();
        console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(IlIi11i / 1000) + "秒");
        await new Promise(i1liI => setTimeout(i1liI, IlIi11i));
      } else {
        const iilI1I11 = Ill1i1lI && Ill1i1lI.result,
          liil1Ill = Ill1i1lI && (Ill1i1lI.message || Ill1i1lI.error_msg) || "";
        if (iilI1I11 == 1003 || typeof liil1Ill === "string" && liil1Ill.includes("今日奖励领完啦")) {
          console.log("账号[" + this.index + "]  搜索任务提示\"今日奖励领完啦\"，停止该任务");
          this.stopTask(7038);
          return;
        }
        console.log("账号[" + this.index + "]  搜索看广告奖励失败");
        if (Ill1i1lI && Ill1i1lI.result !== 400 && Ill1i1lI.result !== 415) {
          console.log(Ill1i1lI);
        }
      }
    } catch (iIIIIlli) {
      return;
    }
  }
  async ["ad7054"](iiliI1l1, IliiI1lI, iIlIIi11, IIIli1li, I1ll1lIi, ill111Ii) {
    try {
      let il1lIIi = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + iiliI1l1 + "&__NS_sig3=" + IliiI1lI + "&__NS_xfalcon=&__NStokensig=" + iIlIIi11,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": IIIli1li
        },
        iilll1i = null;
      try {
        const iI11l1II = await fetch(il1lIIi.url, {
            "method": "POST",
            "headers": il1lIIi.headers,
            "body": IIIli1li
          }),
          i1liil1l = await iI11l1II.text();
        try {
          iilll1i = JSON.parse(i1liil1l);
        } catch (iii1IIi) {
          iilll1i = null;
        }
      } catch (III1l111) {
        iilll1i = null;
      }
      if (iilll1i && iilll1i.result == 1) {
        {
          let l1iiIii = iilll1i.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  新任务看广告获得金额:" + l1iiIii);
          Il11llIi(l1iiIii);
          const Il11l1II = III1iIi();
          console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(Il11l1II / 1000) + "秒");
          await new Promise(liiilI1i => setTimeout(liiilI1i, Il11l1II));
        }
      } else {
        const Illli1i1 = iilll1i && iilll1i.result,
          ll1iIili = iilll1i && (iilll1i.message || iilll1i.error_msg) || "";
        if (Illli1i1 == 1003 || typeof ll1iIili === "string" && ll1iIili.includes("今日奖励领完啦")) {
          console.log("账号[" + this.index + "]  新任务提示\"今日奖励领完啦\"，停止该任务");
          this.stopTask(7054);
          return;
        }
        console.log("账号[" + this.index + "]  新任务看广告奖励失败");
        if (iilll1i && iilll1i.result !== 400 && iilll1i.result !== 415) {
          console.log(iilll1i);
        }
      }
    } catch (l1iilll1) {
      return;
    }
  }
  async ["ad7044"](iilIIl1, IIi1li1, IiIiIIl1, iIliiIi1, IIiiIl, iIIiiIli) {
    try {
      {
        let il11lil1 = {
            "method": "post",
            "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + iilIIl1 + "&__NS_sig3=" + IIi1li1 + "&__NS_xfalcon=&__NStokensig=" + IiIiIIl1,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/4.9.1",
              "Cookie": "kuaishou.api_st=" + this.api_st,
              "page-code": "NEW_TASK_CENTER",
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
            },
            "body": iIliiIi1
          },
          iiii11II = null;
        try {
          const IiIill11 = await fetch(il11lil1.url, {
              "method": "POST",
              "headers": il11lil1.headers,
              "body": iIliiIi1
            }),
            IIlIiI1I = await IiIill11.text();
          try {
            iiii11II = JSON.parse(IIlIiI1I);
          } catch (lIiIIlIi) {
            iiii11II = null;
          }
        } catch (IiIIil11) {
          iiii11II = null;
        }
        if (iiii11II && iiii11II.result == 1) {
          let iIiil1II = iiii11II.data && iiii11II.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  广告2看广告获得金额:" + iIiil1II);
          Il11llIi(iIiil1II);
          const I1i1ilIi = III1iIi();
          console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(I1i1ilIi / 1000) + "秒");
          await new Promise(iiliIi1i => setTimeout(iiliIi1i, I1i1ilIi));
        } else {
          const IliIiIiI = iiii11II && iiii11II.result,
            liiIi1ii = iiii11II && (iiii11II.message || iiii11II.error_msg) || "";
          if (IliIiIiI == 1003 || typeof liiIi1ii === "string" && liiIi1ii.includes("今日奖励领完啦")) {
            console.log("账号[" + this.index + "]  广告2任务提示\"今日奖励领完啦\"，停止该任务");
            this.stopTask(7044);
            return;
          }
          if (iiii11II && iiii11II.result !== 400 && iiii11II.result !== 415) {
            console.log(iiii11II);
          }
        }
      }
    } catch (IIl1lIl) {
      return;
    }
  }
  async ["ad7060"](I11111I, l11ll11, IIIIIli, liI1liI, i1IlIlI, l1i11lI) {
    try {
      let lI1l1l1i = {
          "method": "post",
          "url": "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.query + "&sig=" + I11111I + "&__NS_sig3=" + l11ll11 + "&__NS_xfalcon=&__NStokensig=" + IIIIIli,
          "headers": {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.9.1",
            "Cookie": "kuaishou.api_st=" + this.api_st,
            "page-code": "NEW_TASK_CENTER",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=V2049A;os=Android;nqe-score=33;network=WIFI;"
          },
          "body": liI1liI
        },
        i1lii = null;
      try {
        const IIiil1i1 = await fetch(lI1l1l1i.url, {
            "method": "POST",
            "headers": lI1l1l1i.headers,
            "body": liI1liI
          }),
          i1li11Il = await IIiil1i1.text();
        try {
          i1lii = JSON.parse(i1li11Il);
        } catch (l1I1iIII) {
          i1lii = null;
        }
      } catch (Il1iliI) {
        i1lii = null;
      }
      if (i1lii && i1lii.result == 1) {
        {
          let li111I = i1lii.data && i1lii.data.neoAmount || 0;
          console.log("账号[" + this.index + "]  内容2看广告获得金额:" + li111I);
          Il11llIi(li111I);
          const IlllliIi = III1iIi();
          console.log("账号[" + this.index + "]  随机防黑延迟 " + Math.round(IlllliIi / 1000) + "秒");
          await new Promise(l1iIiiI => setTimeout(l1iIiiI, IlllliIi));
        }
      } else {
        const i1iIIiIl = i1lii && i1lii.result,
          ii1IIil1 = i1lii && (i1lii.message || i1lii.error_msg) || "";
        if (i1iIIiIl == 1003 || typeof ii1IIil1 === "string" && ii1IIil1.includes("今日奖励领完啦")) {
          {
            console.log("账号[" + this.index + "]  内容2任务提示\"今日奖励领完啦\"，停止该任务");
            this.stopTask(7060);
            return;
          }
        }
        i1lii && i1lii.result !== 400 && i1lii.result !== 415 && console.log(i1lii);
      }
    } catch (lil1ii1I) {
      return;
    }
  }
}
async function IIil1iii(iIiI11il, iliIIi) {
  try {
    if (!lIilIiil) return true;
    if (!iIiI11il) return true;
    if (iiI1I1Il) return true;
    return true;
  } catch (lI1IIill) {
    return true;
  }
}
!(async () => {
  if (!(await llil1iI())) return;
  try {
    if (i1li1Ii1.length > 0) for (const iIllli1l of i1li1Ii1) {
      try {
        await IIil1iii(iIllli1l.sock5, iIllli1l.index);
      } catch (Ii11ll1i) {}
    }
  } catch (lIiIiil1) {}
  const llIIl1lI = await i1ilIi1I();
  if (!llIIl1lI) {
    return;
  }
  i1li1Ii1.length > 0 ? await il11i11() : console.log("❌没有有效的账号配置，程序退出");
  await l11IIi(msg);
})().catch(() => {}).finally(() => IIlIIII.done());
function lI1i1l11() {
  return Math.floor(Math.random() * 3) + 8;
}
function IIllI1l1(lIllIilI) {
  var illllIIi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var iliIii1I = String(lIllIilI || "").replace(/=+$/, "");
  var iillli1 = "";
  if (!iliIii1I || iliIii1I.length % 4 === 1) return "";
  for (var II1i11Il = 0, l1i111ll, Iii1liI1, I11Ill11 = 0; Iii1liI1 = iliIii1I.charAt(I11Ill11++); ~Iii1liI1 && (l1i111ll = II1i11Il % 4 ? l1i111ll * 64 + Iii1liI1 : Iii1liI1, II1i11Il++ % 4) ? iillli1 += String.fromCharCode(255 & l1i111ll >> (-2 * II1i11Il & 6)) : 0) {
    Iii1liI1 = illllIIi.indexOf(Iii1liI1);
  }
  try {
    return decodeURIComponent(escape(iillli1));
  } catch (liliIII) {
    return iillli1;
  }
}
async function llil1iI() {
  if (!liIll1lI) return console.log("❌未找到km环境变量，请设置青龙面板的km变量"), false;
  if (llliilIl) {
    {
      const iii1i1i1 = llliilIl.split(new RegExp(liiiIlii.join("|"))).map(i1lIll1l => i1lIll1l.trim()).filter(IiIIl11i => IiIIl11i),
        il1i11II = [];
      for (const lIilIIiI of iii1i1i1) {
        let IIiili1, Ii1llIlI, IiIliill, lIIlllli, lIiIIlll;
        if (lIilIIiI.includes("#")) {
          {
            const l11IlI1l = lIilIIiI.split("#").map(I11li => I11li.trim()).filter(Ii1i1llI => Ii1i1llI);
            if (l11IlI1l.length < 2) {
              {
                console.log("❌账号格式错误: " + lIilIIiI);
                console.log("正确格式: 账号1#cookie1#salt1#ua1#ip地址|端口号|账号|密码");
                continue;
              }
            }
            if (l11IlI1l[0].includes("=")) {
              {
                Ii1llIlI = l11IlI1l[0];
                IiIliill = l11IlI1l[1] || "";
                lIIlllli = l11IlI1l[2] || il1liii1;
                lIiIIlll = l11IlI1l[3] || "";
                IIiili1 = "小主" + (il1i11II.length + 1);
              }
            } else {
              IIiili1 = l11IlI1l[0];
              Ii1llIlI = l11IlI1l[1] || "";
              IiIliill = l11IlI1l[2] || "";
              lIIlllli = l11IlI1l[3] || il1liii1;
              lIiIIlll = l11IlI1l[4] || "";
            }
          }
        } else {
          if (lIilIIiI.includes("@")) {
            {
              const iII1liII = lIilIIiI.split("@").map(iI1IiI1 => iI1IiI1.trim()).filter(lIliiIi => lIliiIi);
              if (iII1liII.length < 3) {
                console.log("❌账号格式错误: " + lIilIIiI);
                console.log("旧格式: 备注@cookie@salt@ua@proxy 或 cookie@salt@ua@proxy");
                continue;
              }
              let l11iIIll = 0;
              iII1liII[0].indexOf("=") === -1 ? (IIiili1 = iII1liII[0], l11iIIll = 1) : IIiili1 = "小主" + (il1i11II.length + 1);
              Ii1llIlI = iII1liII[l11iIIll] || "";
              IiIliill = iII1liII[l11iIIll + 1] || "";
              lIIlllli = iII1liII[l11iIIll + 2] || il1liii1;
              lIiIIlll = iII1liII[l11iIIll + 3] || "";
            }
          } else {
            console.log("❌账号格式错误: " + lIilIIiI);
            console.log("请使用@或#分隔符");
            continue;
          }
        }
        if (!Ii1llIlI || !IiIliill) {
          console.log("❌账号信息不完整(跳过): " + lIilIIiI);
          console.log("必须包含cookie和salt");
          continue;
        }
        const iliillIl = illl1ilI(Ii1llIlI);
        if (!iliillIl) {
          console.log("❌Cookie信息提取失败(跳过): " + IIiili1);
          continue;
        }
        const l111lII = new l11lIil({
          "remark": IIiili1,
          "salt": IiIliill,
          "userAgent": lIIlllli,
          "sock5": lIiIIlll,
          ...iliillIl
        });
        if (!l111lII.valid) {
          console.log("❌账号参数不完整(跳过): " + IIiili1);
          continue;
        }
        il1i11II.push(l111lII);
      }
      if (il1i11II.length === 0) {
        console.log("❌未解析到任何有效账号，请检查变量内容");
        console.log("支持格式:");
        console.log("1. 旧格式: 备注@cookie@salt@ua@proxy");
        console.log("2. 新格式: 账号1#cookie1#salt1#ua1#ip地址|端口号|账号|密码");
        console.log("其中备注(可选), ua(可选), proxy(可选)");
        return false;
      }
      i1li1Ii1 = il1i11II;
      llllI1lI = i1li1Ii1.length;
      lII1IIiI = i1li1Ii1[0].sock5 || null;
      console.log("✅共找到" + llllI1lI + "个有效账号");
      return true;
    }
  } else {
    console.log("❌未找到ks200环境变量");
    console.log("支持格式:");
    console.log("1. 旧格式: 备注@cookie@salt@ua@proxy");
    console.log("2. 新格式: 账号1#cookie1#salt1#ua1#ip地址|端口号|账号|密码");
    console.log("其中备注(可选), ua(可选), proxy(可选)");
    console.log("多账号用换行或&分隔");
    return false;
  }
}
function illl1ilI(i1I1iI1l) {
  try {
    {
      const iiIiI1l1 = {},
        ilI1ll1i = i1I1iI1l.split(";");
      for (let IIl1lIl1 of ilI1ll1i) {
        const [iili1, IlI11ii] = IIl1lIl1.trim().split("=");
        iili1 && IlI11ii && (iiIiI1l1[iili1.trim()] = IlI11ii.trim());
      }
      const l1IliiiI = iiIiI1l1.userId || iiIiI1l1.ud,
        I1lIl1ii = iiIiI1l1.egid,
        II1iIIi = iiIiI1l1.did,
        I1il1Ii1 = iiIiI1l1["kuaishou.api_st"],
        llIiI1i = iiIiI1l1.appver || "13.2.41.9745";
      return l1IliiiI && I1lIl1ii && II1iIIi && I1il1Ii1 ? {
        "userId": l1IliiiI,
        "egid": I1lIl1ii,
        "did": II1iIIi,
        "api_st": I1il1Ii1,
        "appver": llIiI1i
      } : (console.log("Cookie中缺少必要字段:", {
        "userId": l1IliiiI,
        "egid": I1lIl1ii,
        "did": II1iIIi,
        "api_st": I1il1Ii1
      }), null);
    }
  } catch (iIi1iI1l) {
    console.log("Cookie解析失败:", iIi1iI1l.message);
    return null;
  }
}
function I1iIIIl(iIllIl1l) {
  return new Promise(function (i1I1I1iI) {
    setTimeout(i1I1I1iI, iIllIl1l * 1000);
  });
}
function Il1Ii1ll(iIl1II11) {
  IIlIIII.isNode() ? iIl1II11 && (console.log("" + iIl1II11), msg += "\n" + iIl1II11) : (console.log("" + iIl1II11), msg += "\n" + iIl1II11);
}
async function l11IIi(liII11i1) {
  if (!liII11i1) return;
  if (l1i1I11 > 0) try {
    {
      var li1i1lIl = require("./sendNotify");
      await li1i1lIl.sendNotify(IIlIIII.name, liII11i1);
    }
  } catch (l1iIill) {} else console.log(liII11i1);
}
function I1IIl1lI(i11Il1Il, li111ili) {
  try {
    {
      if (typeof process !== "undefined" && JSON.stringify(process.env).indexOf("GITHUB") > -1) process.exit(0);
    }
  } catch (liiI1i1l) {}
  return new class {
    constructor(i1i1111i, lIIIlllI) {
      this.name = i11Il1Il;
      this.logs = [];
      this.logSeparator = "\n";
      this.startTime = Date.now();
    }
    ["isNode"]() {
      return true;
    }
    ["msg"]() {}
    ["log"]() {
      try {
        console.log(Array.from(arguments).join(this.logSeparator));
      } catch (iiIl1IIi) {}
    }
    ["done"]() {}
  }();
}