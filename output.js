//Tue Nov 25 2025 15:05:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"use strict";

const _0x187b50 = require("axios"),
  _0x15ce4c = require("querystring"),
  {
    SocksProxyAgent: _0x5f14e3
  } = require("socks-proxy-agent"),
  _0x21492c = require("fs");
function _0x5626a6(_0x3413f7) {
  return new Promise(_0x296739 => setTimeout(_0x296739, _0x3413f7));
}
const _0x424add = (() => {
    const _0x1edab0 = (process.env.KS_DEV_MODE || "").toLowerCase();
    return !["0", "false"].includes(_0x1edab0);
  })(),
  _0x1b4230 = (() => {
    const _0x498039 = (process.env.KS_LOG_COLOR || "1").toLowerCase();
    return !["0", "false"].includes(_0x498039);
  })();
function _0x30be66() {
  const _0x2acc43 = new Date(),
    _0x1c91e7 = _0x393867 => String(_0x393867).padStart(2, "0");
  return _0x1c91e7(_0x2acc43.getHours()) + ":" + _0x1c91e7(_0x2acc43.getMinutes()) + ":" + _0x1c91e7(_0x2acc43.getSeconds());
}
const _0x2bc0e7 = _0x1b4230 ? {
  "reset": "[0m",
  "bright": "[1m",
  "dim": "[2m",
  "red": "[31m",
  "green": "[32m",
  "yellow": "[33m",
  "blue": "[34m",
  "magenta": "[35m",
  "cyan": "[36m",
  "white": "[37m"
} : {
  "reset": "",
  "bright": "",
  "dim": "",
  "red": "",
  "green": "",
  "yellow": "",
  "blue": "",
  "magenta": "",
  "cyan": "",
  "white": ""
};
function _0x3603f0(_0x2b6f23, _0x1f3bbc) {
  if (!_0x1b4230 || !_0x1f3bbc) return String(_0x2b6f23);
  return "" + _0x1f3bbc + _0x2b6f23 + _0x2bc0e7.reset;
}
function _0x53fe09(_0x5e4b4e) {
  const _0x40fe1b = _0x5e4b4e || "未知账号";
  return _0x3603f0("[" + _0x40fe1b + "]", _0x2bc0e7.bright + _0x2bc0e7.cyan);
}
function _0x460708(_0x53a26c) {
  const _0x143b98 = _0x53a26c ?? "-";
  return _0x3603f0(_0x143b98, _0x2bc0e7.bright + _0x2bc0e7.green);
}
function _0x4e14a0(_0x3f5687) {
  const _0x1c8769 = _0x3f5687 ?? "-";
  return _0x3603f0(_0x1c8769, _0x2bc0e7.bright + _0x2bc0e7.yellow);
}
function _0x20c02c(_0x2f41b3) {
  const _0x5bbc1e = _0x2f41b3 ?? 0;
  return _0x3603f0(_0x5bbc1e + "金币", _0x2bc0e7.bright + _0x2bc0e7.yellow);
}
function _0x595d0e(_0x36628a, _0x244f1f) {
  const _0x3bb1ba = String(_0x36628a ?? "");
  if (_0x3bb1ba.length >= _0x244f1f) return _0x3bb1ba.slice(0, _0x244f1f);
  const _0x44b2c6 = _0x244f1f - _0x3bb1ba.length,
    _0x918aff = Math.floor(_0x44b2c6 / 2),
    _0x5d0585 = _0x44b2c6 - _0x918aff;
  return "" + " ".repeat(_0x918aff) + _0x3bb1ba + " ".repeat(_0x5d0585);
}
const _0x4106ca = {
    "DEBUG": 0,
    "INFO": 1,
    "WARN": 2,
    "ERROR": 3,
    "SUCCESS": 4
  },
  _0xe6a6a9 = {
    [_0x4106ca.DEBUG]: "DEBUG",
    [_0x4106ca.INFO]: "INFO",
    [_0x4106ca.WARN]: "WARN",
    [_0x4106ca.ERROR]: "ERROR",
    [_0x4106ca.SUCCESS]: "SUCCESS"
  },
  _0x52d513 = {
    [_0x4106ca.DEBUG]: "[36m",
    [_0x4106ca.INFO]: "[34m",
    [_0x4106ca.WARN]: "[33m",
    [_0x4106ca.ERROR]: "[31m",
    [_0x4106ca.SUCCESS]: "[32m"
  },
  _0x27f0d6 = "[0m";
class _0x2a8e2d {
  constructor(_0x42d016 = "") {
    this.prefix = _0x42d016 ? "[" + _0x42d016 + "]" : "";
    this.minLevel = _0x424add ? _0x4106ca.DEBUG : _0x4106ca.INFO;
  }
  ["_formatMessage"](_0x30ebba, _0x296f17) {
    const _0x34d215 = _0x30be66(),
      _0x1d8d55 = _0xe6a6a9[_0x30ebba].padEnd(7),
      _0x43c077 = _0x1b4230 ? _0x52d513[_0x30ebba] || "" : "",
      _0x2da12c = _0x1b4230 ? _0x27f0d6 : "";
    return _0x43c077 + "[" + _0x34d215 + "] " + _0x1d8d55 + " " + this.prefix + " " + _0x296f17 + _0x2da12c;
  }
  ["log"](_0x24b2dd, _0x19d59f, ..._0x1b05e9) {
    if (_0x24b2dd < this.minLevel) return;
    try {
      {
        const _0x15a6f3 = this._formatMessage(_0x24b2dd, _0x19d59f),
          _0x1c09e8 = _0x24b2dd === _0x4106ca.ERROR ? console.error : _0x24b2dd === _0x4106ca.WARN ? console.warn : console.log;
        _0x1c09e8(_0x15a6f3, ..._0x1b05e9);
      }
    } catch (_0x5ec6b7) {
      console.error("[" + _0x30be66() + "] ERROR   Logger error:", _0x5ec6b7);
      console.log("[" + _0x30be66() + "] INFO    Original message:", _0x19d59f, ..._0x1b05e9);
    }
  }
  ["debug"](_0x3c40b9, ..._0xd7a6f0) {
    this.log(_0x4106ca.DEBUG, _0x3c40b9, ..._0xd7a6f0);
  }
  ["info"](_0x45ce82, ..._0x44ea8f) {
    this.log(_0x4106ca.INFO, _0x45ce82, ..._0x44ea8f);
  }
  ["warn"](_0x28d497, ..._0x4fcff8) {
    this.log(_0x4106ca.WARN, _0x28d497, ..._0x4fcff8);
  }
  ["error"](_0x3761cf, ..._0x45bc13) {
    this.log(_0x4106ca.ERROR, _0x3761cf, ..._0x45bc13);
  }
  ["success"](_0x44190c, ..._0x5dc134) {
    this.log(_0x4106ca.SUCCESS, _0x44190c, ..._0x5dc134);
  }
}
const _0x42ca3a = new _0x2a8e2d();
function _0x4bdd60(..._0x1a2276) {
  for (const _0x827fd3 of _0x1a2276) {
    {
      const _0x16d0f7 = process.env[_0x827fd3];
      if (_0x16d0f7 && _0x16d0f7.trim()) {
        return _0x16d0f7.trim();
      }
    }
  }
  return "";
}
const _0x4bd438 = process.env.AUTH_API_URL || "http://47.95.197.104/auth_normal.php",
  _0x52f4b8 = _0x4bdd60("AUTH_KEY", "KAMICARD_KEY"),
  _0x471325 = _0x4bdd60("SCRIPT_VERSION") || "pt_v3",
  _0xac7979 = _0x4bdd60("QL_ID"),
  _0x5348d0 = (() => {
    const _0x187d01 = _0x4bdd60("AUTH_TIMEOUT") || "30",
      _0x37f982 = parseInt(_0x187d01, 10);
    return Number.isNaN(_0x37f982) ? 30 : _0x37f982;
  })(),
  _0x902373 = !!(_0x4bd438 && _0x52f4b8);
let _0x21d156 = "";
if (_0x4bd438) {
  if (_0x4bd438.endsWith("auth_normal.php")) _0x21d156 = _0x4bd438.replace("auth_normal.php", "client_api.php");else {
    if (_0x4bd438.endsWith("auth.php")) _0x21d156 = _0x4bd438.replace("auth.php", "client_api.php");else _0x4bd438.endsWith("auth_pt.php") && (_0x21d156 = _0x4bd438.replace("auth_pt.php", "client_api.php"));
  }
}
const _0x16c2df = (() => {
  const _0x4f6524 = _0x4bdd60("AUTH_STATUS_TTL") || "60",
    _0x1b8182 = parseInt(_0x4f6524, 10);
  return Number.isNaN(_0x1b8182) ? 60 : _0x1b8182;
})();
let _0x5555b5 = {
  "timestamp": 0,
  "result": null,
  "ud": null,
  "device_id": null
};
const _0x410f2f = ".device_id.txt";
function _0x2459f2() {
  try {
    {
      if (_0x21492c.existsSync(_0x410f2f)) {
        const _0x401614 = _0x21492c.readFileSync(_0x410f2f, "utf8").trim();
        if (_0x401614 && _0x401614.length === 32) return _0x401614;else {
          if (_0x401614) try {
            _0x21492c.unlinkSync(_0x410f2f);
          } catch (_0x34e33a) {}
        }
      }
      const _0x986b63 = "0123456789abcdef";
      let _0x31e142 = "";
      for (let _0xd7c6d5 = 0; _0xd7c6d5 < 32; _0xd7c6d5++) {
        _0x31e142 += _0x986b63.charAt(Math.floor(Math.random() * _0x986b63.length));
      }
      try {
        _0x21492c.writeFileSync(_0x410f2f, _0x31e142, "utf8");
      } catch (_0x3772f2) {}
      return _0x31e142;
    }
  } catch (_0x46b9c0) {
    {
      const _0x8da01b = "0123456789abcdef";
      let _0x5b09c4 = "";
      for (let _0x336282 = 0; _0x336282 < 32; _0x336282++) {
        _0x5b09c4 += _0x8da01b.charAt(Math.floor(Math.random() * _0x8da01b.length));
      }
      return _0x5b09c4;
    }
  }
}
function _0x1dad70() {
  if (process.env.KS_GUI_MODE) {
    return;
  }
  const _0x2dec19 = () => {
    _0x42ca3a.warn("\n" + "=".repeat(80));
    _0x42ca3a.warn("收到停止信号，脚本立即强制退出...");
    _0x42ca3a.warn("=".repeat(80));
    process.exit(0);
  };
  try {
    process.on("SIGINT", _0x2dec19);
    process.on("SIGTERM", _0x2dec19);
  } catch (_0x4f5825) {}
}
_0x1dad70();
async function _0xfcb2ef(_0x47110f, _0x49af7a = "") {
  if (!_0x902373) return null;
  const _0x27538a = {
    "key": _0x52f4b8,
    "script_version": _0x471325,
    ..._0x47110f
  };
  _0xac7979 && (_0x27538a.ql_id = _0xac7979);
  const _0x13b5e5 = {
    "Content-Type": "application/json",
    "X-Auth-Key": _0x52f4b8,
    "X-Script-Version": _0x471325
  };
  try {
    const _0x1a8ca1 = await _0x187b50.post(_0x4bd438, _0x27538a, {
        "headers": _0x13b5e5,
        "timeout": _0x5348d0 * 1000
      }),
      _0x33f4f6 = _0x1a8ca1.data;
    if (!_0x33f4f6 || typeof _0x33f4f6 !== "object") {
      return null;
    }
    if (!_0x33f4f6.status) return {
      "status": false,
      "error": _0x33f4f6.message,
      "data": _0x33f4f6.data
    };
    let _0x581591 = _0x33f4f6.data;
    if (typeof _0x581591 === "string") {
      {
        const _0x5e8ab8 = _0x581591.trim();
        if (_0x5e8ab8) try {
          _0x581591 = JSON.parse(_0x5e8ab8);
        } catch {}
      }
    }
    return {
      "status": true,
      "data": _0x581591
    };
  } catch (_0x1a8d5) {
    return null;
  }
}
async function _0x36af0a(_0x3ab227 = null, _0x5e0eda = null) {
  if (!_0x52f4b8) return {
    "valid": false,
    "message": "未配置卡密(AUTH_KEY / KAMICARD_KEY)"
  };
  if (!(_0x902373 && _0x21d156)) {
    return {
      "valid": false,
      "message": ""
    };
  }
  const _0x30a300 = _0x5e0eda || _0x2459f2(),
    _0x375cdb = Date.now() / 1000,
    _0x4f9bfb = _0x5555b5.result;
  if (_0x4f9bfb && _0x5555b5.ud === _0x3ab227 && _0x5555b5.device_id === _0x30a300 && _0x375cdb - (_0x5555b5.timestamp || 0) < _0x16c2df) {
    return _0x4f9bfb;
  }
  const _0x1dc676 = {
    "api": "check_key",
    "key": _0x52f4b8,
    "script_version": _0x471325
  };
  if (_0x3ab227) _0x1dc676.ud = _0x3ab227;
  if (_0x30a300) _0x1dc676.device_id = _0x30a300;
  if (_0xac7979) _0x1dc676.ql_id = _0xac7979;
  try {
    {
      const _0x4b32a4 = await _0x187b50.get(_0x21d156, {
          "params": _0x1dc676,
          "timeout": _0x5348d0 * 1000
        }),
        _0x47bdce = _0x4b32a4.data;
      if (!_0x47bdce || typeof _0x47bdce !== "object") throw new Error("invalid response");
      let _0x429679;
      !_0x47bdce.status ? _0x429679 = {
        "valid": false,
        "message": _0x47bdce.message || "卡密验证失败",
        "data": _0x47bdce.data || {}
      } : _0x429679 = {
        "valid": true,
        "message": "",
        "data": _0x47bdce.data || {}
      };
      _0x5555b5 = {
        "timestamp": _0x375cdb,
        "result": _0x429679,
        "ud": _0x3ab227,
        "device_id": _0x30a300
      };
      return _0x429679;
    }
  } catch (_0x589256) {
    return {
      "valid": true,
      "message": ""
    };
  }
}
async function _0x1e4bec(_0x262b3e = "脚本") {
  const _0x255745 = await _0x36af0a();
  if (_0x255745.valid) return _0x42ca3a.info(_0x262b3e + " 卡密验证通过"), true;
  const _0x48e144 = _0x255745.message || "卡密验证失败";
  _0x42ca3a.error(_0x262b3e + " " + _0x48e144);
  return false;
}
async function _0x12fa54(_0x3ff5e1) {
  const _0xe9a5db = _0x2459f2(),
    _0x2101ed = await _0x36af0a(_0x3ff5e1.userId, _0xe9a5db);
  if (!_0x2101ed.valid) {
    let _0x3e0e2e = _0x2101ed.message || "卡密验证失败";
    const _0x30cc1b = _0x2101ed.data && typeof _0x2101ed.data === "object" ? _0x2101ed.data : {},
      _0x1f93c8 = _0x30cc1b.code || _0x30cc1b.error_code;
    _0x1f93c8 && (_0x3e0e2e = _0x3e0e2e + " (code=" + _0x1f93c8 + ")");
    _0x42ca3a.error("账户[" + _0x3ff5e1.nickname + "] " + _0x3e0e2e);
    return false;
  }
  const _0x465748 = _0x2101ed.data && typeof _0x2101ed.data === "object" ? _0x2101ed.data : {},
    _0x2d41ba = [true, "1", 1].includes(_0x465748.device_bind_enabled);
  let _0x925c2e = _0x465748.bound_device_id;
  if (typeof _0x925c2e === "string") {
    _0x925c2e = _0x925c2e.trim() || null;
  }
  if (_0x2d41ba && _0x925c2e) {
    if (_0xe9a5db && _0xe9a5db !== _0x925c2e) return _0x42ca3a.error("账户[" + _0x3ff5e1.nickname + "] 设备ID绑定验证失败：本地设备与云端绑定设备不一致，脚本已停止运行"), process.exit(1), false;
  }
  const _0x48e09e = (_0x3ff5e1.userId || "").trim(),
    _0x43bffe = [true, "1", 1].includes(_0x465748.ud_bind_enabled),
    _0x3d4d10 = _0x465748.bound_uds || [];
  if (_0x43bffe && _0x48e09e) {
    if (Array.isArray(_0x3d4d10) && _0x3d4d10.length > 0) {
      {
        const _0x4c09b2 = _0x3d4d10.map(_0xdf7b29 => String(_0xdf7b29).trim()).filter(Boolean);
        if (!_0x4c09b2.includes(_0x48e09e)) return _0x42ca3a.error("账户[" + _0x3ff5e1.nickname + "] UD绑定验证失败：当前账号UD（" + _0x48e09e + "）不在云端绑定列表中，脚本已停止运行"), process.exit(1), false;
      }
    }
  }
  return true;
}
async function _0x34de9b() {
  !_0x52f4b8 && (_0x42ca3a.error("\n错误: 未设置卡密（AUTH_KEY / KAMICARD_KEY）"), _0x42ca3a.info("提示: 请在环境变量中设置 AUTH_KEY 或 KAMICARD_KEY 后再运行脚本"), process.exit(1));
  if (!(_0x902373 && _0x21d156)) {
    {
      _0x42ca3a.warn("\n授权网关未正确配置(AUTH_API_URL / client_api.php)，跳过卡密及绑定检查");
      return;
    }
  }
  _0x42ca3a.info("\n正在检测卡密状态及绑定配置...");
  const _0x5534c8 = await _0x36af0a();
  if (!_0x5534c8.valid) {
    const _0x1eedc6 = _0x5534c8.message || "卡密验证失败";
    _0x42ca3a.error("卡密验证失败: " + _0x1eedc6);
    _0x42ca3a.info("提示: 请检查 AUTH_KEY/KAMICARD_KEY 是否正确，或联系管理员");
    process.exit(1);
  }
  _0x42ca3a.success("卡密验证通过");
  const _0x251517 = _0x5534c8.data && typeof _0x5534c8.data === "object" ? _0x5534c8.data : {},
    _0x2df0d2 = [true, "1", 1].includes(_0x251517.device_bind_enabled);
  let _0x54d7f0 = _0x251517.bound_device_id;
  typeof _0x54d7f0 === "string" && (_0x54d7f0 = _0x54d7f0.trim() || null);
  const _0x1f2a67 = _0x2459f2();
  if (_0x2df0d2 && _0x54d7f0) _0x1f2a67 && _0x1f2a67 === _0x54d7f0 ? _0x42ca3a.success("\n设备ID验证通过") : _0x42ca3a.error("\n设备ID验证失败：本地设备ID与云端绑定不一致");else _0x2df0d2 && !_0x54d7f0 && _0x42ca3a.info("\n设备ID验证已启用，当前尚未绑定设备ID");
  const _0x1670a8 = [true, "1", 1].includes(_0x251517.ud_bind_enabled),
    _0x3f68a1 = Array.isArray(_0x251517.bound_uds) ? _0x251517.bound_uds : [],
    _0x36d38f = typeof _0x251517.max_ud_bind_count === "number" ? _0x251517.max_ud_bind_count : typeof _0x251517.max_bind_count === "number" ? _0x251517.max_bind_count : 0;
  if (_0x1670a8) {
    _0x42ca3a.info("\nUD绑定功能: 已开启");
    if (_0x3f68a1.length > 0) {
      if (_0x36d38f > 0) {
        console.log("   已绑定账号数: " + _0x3f68a1.length + "/" + _0x36d38f + " 个");
      } else console.log("   已绑定账号数: " + _0x3f68a1.length + " 个（无限制）");
    } else console.log("   UD绑定已开启，当前尚未绑定任何账号UD");
  }
}
async function _0x254e49() {
  if (!_0x4bd438) return null;
  try {
    {
      let _0x4f7759;
      try {
        const _0x3e21df = new URL(_0x4bd438),
          _0x18a5d7 = _0x3e21df.pathname.split("/");
        _0x18a5d7[_0x18a5d7.length - 1] = "gongmonan.php";
        _0x3e21df.pathname = _0x18a5d7.join("/");
        _0x3e21df.search = "?api=get_script_version";
        _0x4f7759 = _0x3e21df.toString();
      } catch (_0x1caba9) {
        _0x4f7759 = _0x4bd438.replace("auth_normal.php", "gongmonan.php").replace("auth_pt.php", "gongmonan.php").replace("auth.php", "gongmonan.php") + "?api=get_script_version";
      }
      const _0x27318e = await _0x187b50.get(_0x4f7759, {
        "timeout": _0x5348d0 * 1000,
        "validateStatus": function (_0x59ec88) {
          return _0x59ec88 >= 200 && _0x59ec88 < 600;
        }
      });
      if (_0x27318e.status === 401) return console.log("⚠️ 获取版本号需要登录"), null;
      let _0x80d15d = _0x27318e.data;
      if (typeof _0x80d15d === "string") {
        try {
          _0x80d15d = JSON.parse(_0x80d15d);
        } catch (_0x427a42) {
          console.log("⚠️ 服务器响应格式错误");
          return null;
        }
      }
      if (!_0x80d15d || _0x80d15d.status !== true || !_0x80d15d.data) {
        {
          const _0x4c49ba = _0x80d15d && (_0x80d15d.message || _0x80d15d.error) || "响应格式不正确";
          console.log("⚠️ 无法从服务器获取版本号: " + _0x4c49ba);
          return null;
        }
      }
      const _0x13793d = _0x80d15d.data || {},
        _0x4718e3 = (_0x13793d.configured_version || "").toString().trim(),
        _0x42eab6 = (_0x13793d.normal_version || "").toString().trim();
      let _0x3d9fde = [];
      if (_0x42eab6) {
        _0x3d9fde = [_0x42eab6];
      } else Array.isArray(_0x13793d.extra_versions) && (_0x3d9fde = _0x13793d.extra_versions.map(_0x194730 => _0x194730 != null ? String(_0x194730).trim() : "").filter(Boolean));
      return {
        "configuredVersion": _0x4718e3,
        "extraVersions": _0x3d9fde
      };
    }
  } catch (_0x1ff087) {
    const _0x57c0e3 = _0x1ff087.response && _0x1ff087.response.data && _0x1ff087.response.data.message || _0x1ff087.message || "未知错误";
    console.log("⚠️ 获取服务器版本号失败: " + _0x57c0e3);
    return null;
  }
}
async function _0x46cd0b() {
  try {
    {
      const _0x28764c = await _0x254e49();
      (!_0x28764c || !_0x28764c.configuredVersion) && (console.log("\n⚠️ 无法从服务器获取版本号，脚本已停止运行"), process.exit(1));
      const _0x44f7fd = _0x28764c.configuredVersion,
        _0x484efe = Array.isArray(_0x28764c.extraVersions) ? _0x28764c.extraVersions : [],
        _0x4be4b4 = String(_0x471325).toLowerCase().trim(),
        _0x58bafc = _0x44f7fd ? _0x44f7fd.toLowerCase().trim() : "",
        _0x586c90 = _0x484efe.map(_0x107b01 => String(_0x107b01).toLowerCase().trim()),
        _0x571ec0 = _0x586c90.length > 0 ? _0x586c90 : [_0x58bafc].filter(Boolean);
      !_0x571ec0.includes(_0x4be4b4) && (console.log("\n⚠️ 检测到新脚本版本，请更新脚本后重新运行。"), process.exit(1));
    }
  } catch (_0x1811de) {
    console.log("\n⚠️ 版本检查出错: " + (_0x1811de.message || _0x1811de));
    console.log("\n⚠️ 脚本已停止运行。");
    process.exit(1);
  }
}
function _0x239a33() {
  const _0x334ad9 = (process.env.KS_COIN_LIMIT || "").trim();
  if (_0x334ad9) {
    const _0x2d8a85 = parseInt(_0x334ad9, 10);
    if (!Number.isNaN(_0x2d8a85) && _0x2d8a85 > 0) {
      return _0x2d8a85;
    }
  }
  return 500000;
}
function _0x496729() {
  const _0x4a24f0 = (process.env.KS_WATCH_RANGE || "").trim();
  if (_0x4a24f0) {
    try {
      {
        const _0x58f237 = _0x4a24f0.split(",");
        if (_0x58f237.length === 2) {
          {
            const _0x4f5e27 = parseInt(_0x58f237[0].trim(), 10),
              _0x5580e6 = parseInt(_0x58f237[1].trim(), 10);
            if (_0x4f5e27 > 0 && _0x5580e6 > _0x4f5e27) {
              return [_0x4f5e27 * 1000, _0x5580e6 * 1000];
            }
          }
        }
      }
    } catch {}
  }
  return [30000, 35000];
}
function _0x2ae0b4() {
  const _0x33cee4 = (process.env.KS_ROUND_REST_INTERVAL || "").trim();
  if (_0x33cee4) {
    const _0x1be72a = parseInt(_0x33cee4, 10);
    if (!Number.isNaN(_0x1be72a) && _0x1be72a > 0) return _0x1be72a;
  }
  return 1;
}
function _0x5b6ab7() {
  const _0x5449e9 = (process.env.KS_ADINFO_FAIL_EXIT || "").trim();
  return _0x5449e9 === "1";
}
function _0x49b3c1() {
  const _0x3be5dd = (process.env.KS_DID_SWITCH || "").trim();
  return _0x3be5dd === "1";
}
function _0x4ea6d7() {
  const _0x14cbac = (process.env.KS_AD_APPEND || "").trim();
  if (_0x14cbac) try {
    return parseInt(_0x14cbac, 10) !== 0;
  } catch {}
  return true;
}
function _0x207c77() {
  const _0x54c3b9 = (process.env.KS_SEARCH_APPEND || "").trim();
  if (_0x54c3b9) {
    try {
      return parseInt(_0x54c3b9, 10) !== 0;
    } catch {}
  }
  return true;
}
function _0x3ae5fd() {
  const _0x4a4f90 = (process.env.KS_SEARCH_PER_ROUND || "").trim();
  if (_0x4a4f90) {
    const _0x222550 = parseInt(_0x4a4f90, 10);
    if (!Number.isNaN(_0x222550) && _0x222550 > 0) return _0x222550;
  }
  return 10;
}
function _0x349e0a() {
  const _0x44d043 = (process.env.KS_COIN_CHECK_LIST || "").trim();
  if (_0x44d043) {
    try {
      {
        const _0x1b072c = _0x44d043.split(",").map(_0x27db24 => _0x27db24.trim()).filter(Boolean).map(_0x4832d4 => parseInt(_0x4832d4, 10)).filter(_0xfc3c80 => !Number.isNaN(_0xfc3c80) && _0xfc3c80 > 0);
        if (_0x1b072c.length > 0) return _0x1b072c;
      }
    } catch {}
  }
  return [10, 1];
}
function _0x4bb72a() {
  const _0xb442b4 = (process.env.KS_SEARCH_KEYWORD || "").trim();
  if (_0xb442b4) return _0xb442b4;
  return "短剧小说";
}
function _0x10288c() {
  const _0x137963 = (process.env.KS_TASKS || "").trim(),
    _0x3f5826 = {
      "1": "box",
      "2": "look",
      "3": "box_extra",
      "4": "ss"
    };
  if (!_0x137963) {
    return ["look"];
  }
  const _0x4634e4 = _0x137963.split(",").map(_0x24a704 => _0x24a704.trim()).filter(Boolean),
    _0x45ac86 = [];
  for (const _0x50ac96 of _0x4634e4) {
    if (_0x3f5826[_0x50ac96]) _0x45ac86.push(_0x3f5826[_0x50ac96]);else {
      console.log("⚠️ 警告：rw环境变量中的 '" + _0x50ac96 + "' 不是有效值，忽略");
    }
  }
  if (_0x45ac86.length === 0) return console.log("⚠️ rw环境变量配置无效，将执行默认任务"), ["look"];
  return _0x45ac86;
}
function _0x3f0a3e() {
  let _0x2fd5f5 = process.env.KS_ACCOUNTS || "";
  const _0x4007fb = process.env.KS_ACCOUNTS_FILE;
  if (_0x4007fb && _0x21492c.existsSync(_0x4007fb)) {
    try {
      {
        _0x2fd5f5 = _0x21492c.readFileSync(_0x4007fb, "utf8");
        console.log("从临时文件读取账号配置: " + _0x4007fb);
        try {
          _0x21492c.unlinkSync(_0x4007fb);
        } catch {}
      }
    } catch (_0x21f7cb) {
      console.log("读取临时文件失败: " + (_0x21f7cb.message || _0x21f7cb));
    }
  }
  if (!_0x2fd5f5) {
    console.log("未发现 KS_ACCOUNTS 环境变量");
    return [];
  }
  const _0x46287f = _0x2fd5f5.split("&").map(_0x31665f => _0x31665f.trim()).filter(Boolean);
  return _0x46287f;
}
function _0x530609(_0xf385f0, _0x126cc6) {
  const _0x4cd115 = _0xf385f0.trim().split("#");
  if (_0x4cd115.length < 3) return null;
  const _0x2c6350 = _0x4cd115[0].trim(),
    _0x5c0cb7 = _0x4cd115[1].replace("kpn=NEBULA", "kpn=KUAISHOU"),
    _0x59a206 = _0x4cd115[2].trim();
  let _0xd4c94f = null,
    _0x130642 = null;
  const _0x1f68ab = _0x51b5a4 => _0x51b5a4.includes("|") || _0x51b5a4.startsWith("socks5://");
  if (_0x4cd115.length === 3) {} else {
    if (_0x4cd115.length === 4) {
      {
        if (_0x1f68ab(_0x4cd115[3])) {
          const _0x2239b0 = _0x4cd115[3].trim();
          if (_0x2239b0.includes("|")) {
            {
              const _0x176e37 = _0x2239b0.split("|");
              if (_0x176e37.length >= 2) {
                const _0x2844f9 = _0x176e37[0],
                  _0x2abb4c = _0x176e37[1],
                  _0x1ef621 = _0x176e37[2] || "",
                  _0x3d0eb6 = _0x176e37[3] || "";
                _0x1ef621 && _0x3d0eb6 ? _0x130642 = "socks5://" + _0x1ef621 + ":" + _0x3d0eb6 + "@" + _0x2844f9 + ":" + _0x2abb4c : _0x130642 = "socks5://" + _0x2844f9 + ":" + _0x2abb4c;
              }
            }
          } else {
            if (_0x2239b0.startsWith("socks5://")) {
              _0x130642 = _0x2239b0;
            }
          }
        } else _0xd4c94f = _0x4cd115[3].trim();
      }
    } else {
      if (_0x4cd115.length === 5) {
        _0xd4c94f = _0x4cd115[3].trim();
        if (_0x1f68ab(_0x4cd115[4])) {
          {
            const _0x27853f = _0x4cd115[4].trim();
            if (_0x27853f.includes("|")) {
              const _0x3378ca = _0x27853f.split("|");
              if (_0x3378ca.length >= 2) {
                const _0x12fff0 = _0x3378ca[0],
                  _0x156872 = _0x3378ca[1],
                  _0x37f103 = _0x3378ca[2] || "",
                  _0x5f2384 = _0x3378ca[3] || "";
                if (_0x37f103 && _0x5f2384) {
                  _0x130642 = "socks5://" + _0x37f103 + ":" + _0x5f2384 + "@" + _0x12fff0 + ":" + _0x156872;
                } else _0x130642 = "socks5://" + _0x12fff0 + ":" + _0x156872;
              }
            } else _0x27853f.startsWith("socks5://") && (_0x130642 = _0x27853f);
          }
        }
      } else {
        if (_0x4cd115.length === 6) {
          _0xd4c94f = _0x4cd115[4].trim();
          if (_0x1f68ab(_0x4cd115[5])) {
            {
              const _0x4ecf58 = _0x4cd115[5].trim();
              if (_0x4ecf58.includes("|")) {
                const _0xbdfd91 = _0x4ecf58.split("|");
                if (_0xbdfd91.length >= 2) {
                  const _0x256142 = _0xbdfd91[0],
                    _0x4e0f60 = _0xbdfd91[1],
                    _0x31d616 = _0xbdfd91[2] || "",
                    _0x32b589 = _0xbdfd91[3] || "";
                  _0x31d616 && _0x32b589 ? _0x130642 = "socks5://" + _0x31d616 + ":" + _0x32b589 + "@" + _0x256142 + ":" + _0x4e0f60 : _0x130642 = "socks5://" + _0x256142 + ":" + _0x4e0f60;
                }
              } else {
                if (_0x4ecf58.startsWith("socks5://")) _0x130642 = _0x4ecf58;else return console.log("⚠️ 6个字段时第6个应该是代理，格式错误"), null;
              }
            }
          } else return console.log("⚠️ 6个字段时第6个应该是代理，格式错误"), null;
        } else return console.log("⚠️ 不支持的格式（字段数：" + _0x4cd115.length + "）"), null;
      }
    }
  }
  return {
    "index": _0x126cc6,
    "nickname": _0x2c6350,
    "salt": _0x59a206,
    "cookie": _0x5c0cb7,
    "region_ticket": _0xd4c94f,
    "proxy_url": _0x130642
  };
}
function _0x7aa724() {
  const _0x41a64b = _0x3f0a3e(),
    _0x191b8b = [];
  _0x41a64b.forEach((_0xb170b7, _0x2ba333) => {
    const _0xb018f6 = _0x530609(_0xb170b7, _0x2ba333 + 1);
    _0xb018f6 ? _0x191b8b.push(_0xb018f6) : console.log("账号配置格式异常：" + _0xb170b7);
  });
  return _0x191b8b;
}
class _0x31cd31 {
  constructor(_0x462c94, _0x168fa0) {
    this.accountConfig = _0x462c94;
    this.tasksToExecute = _0x168fa0;
    this.nickname = _0x462c94.nickname;
    this.customRegionTicket = _0x462c94.region_ticket;
    this.cookieInfo = this._extractCookieInfo();
    this.egid = this.cookieInfo.egid || "";
    this.did = this.cookieInfo.did || "";
    this.userId = this.cookieInfo.user_id || "";
    this.kuaishouApiSt = this.cookieInfo.kuaishou_api_st || "";
    this.appver = this.cookieInfo.appver || "13.7.20.10468";
    this.ssFirstTaskShown = false;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "business_id": 604,
        "pos_id": 20347,
        "sub_page_id": 100024063,
        "request_scene_type": 1,
        "task_type": 1
      },
      "look": {
        "name": "看广告得金币",
        "business_id": 671,
        "pos_id": 24068,
        "sub_page_id": 100026368,
        "request_scene_type": 1,
        "task_type": 1
      },
      "ss": {
        "name": "搜索广告",
        "business_id": 7077,
        "pos_id": 216267,
        "sub_page_id": 100161535,
        "page_id": 10014,
        "request_scene_type": 1,
        "task_type": 2,
        "link_url": "eyJwYWdlSWQiOjEwMDE0LCJzdWJQYWdlSWQiOjEwMDE2MTUzNSwicG9zSWQiOjIxNjI2NywiYnVzaW5lc3NJZCI6NzA3NywiZXh0UGFyYW1zIjoiYzc4OWI1ZTAzMjMxOTUwZjcyM2ZjMWE1ZGJjYzgwNmYzMDE1OTcyZWE0Mzc2NmNlNDYwNTk2ZDgzMGVjNTE5MDM0OGEwNTlkOTA2NWYwZGY1ZjkwY2YwMjEwMGVhMmQzYzU0YjUyZDBlNGUxY2Q0NmMxN2ExZDU3YmRhY2EyMzVlM2U1NjYzN2JmZGQzMThiZWMzNTgzOWU1YzIxNWUyNzMzY2IyMzQ2ZGQ1NDYyODc1NDdlMjc4OWYxMjZjZWU5NWZhYzg4N2IxMzM2MzBlZTEzYTVmYTlhODYzNDYxODQ5MjM0NDk3ZGY3ZTRmOWYyYzk2ZjQ5YzViMGExNzQ2NGE2MGM0MDg1MzU2NTY2ZDc4NGIxYjY3NzY3MzYzYjg3IiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6Miwic2luZ2xlUGFnZUlkIjowLCJzaW5nbGVTdWJQYWdlSWQiOjAsImNoYW5uZWwiOjAsImNvdW50ZG93blJlcG9ydCI6ZmFsc2UsInRoZW1lVHlwZSI6MCwibWl4ZWRBZCI6dHJ1ZSwiZnVsbE1peGVkIjp0cnVlLCJhdXRvUmVwb3J0Ijp0cnVlLCJmcm9tVGFza0NlbnRlciI6dHJ1ZSwic2VhcmNoSW5zcGlyZVNjaGVtZUluZm8iOm51bGwsImFtb3VudCI6MH0"
      },
      "box_extra": {
        "name": "饭补广告",
        "business_id": 921,
        "pos_id": 29742,
        "sub_page_id": 100029908,
        "request_scene_type": 7,
        "task_type": 2
      }
    };
    this.taskStats = {};
    for (const _0x5a7f98 of this.tasksToExecute) {
      this.taskConfigs[_0x5a7f98] && (this.taskStats[_0x5a7f98] = {
        "success": 0,
        "failed": 0,
        "total_reward": 0
      });
    }
    if (!this.taskStats.box_extra) {
      this.taskStats.box_extra = {
        "success": 0,
        "failed": 0,
        "total_reward": 0
      };
    }
    this.coinLimit = _0x239a33();
    this.coinExceeded = false;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    for (const _0xb6b604 of this.tasksToExecute) {
      this.taskConfigs[_0xb6b604] && (this.taskLimitReached[_0xb6b604] = false);
    }
    this.jbjcValues = _0x349e0a();
    this.jbjcStreak = 0;
    this.jbjcLimit = 5;
    this.adInfoFailCount = 0;
    this.adInfoFailLimit = 3;
    this.ggcsEnabled = _0x5b6ab7();
    this.jbqzEnabled = _0x49b3c1();
    this.dynamicDid = null;
    this.didFixed = false;
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this._updateQueryParams();
  }
  ["_updateQueryParams"]() {
    const _0x31dc9f = this.getCurrentDid();
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + _0x31dc9f;
  }
  ["generateDeviceId"]() {
    try {
      const _0x1f2911 = "0123456789abcdef";
      let _0x2166d4 = "";
      for (let _0x54a692 = 0; _0x54a692 < 16; _0x54a692++) {
        _0x2166d4 += _0x1f2911.charAt(Math.floor(Math.random() * _0x1f2911.length));
      }
      return "ANDROID_" + _0x2166d4;
    } catch (_0x2ee683) {
      {
        console.log("设备ID生成异常: " + (_0x2ee683.message || _0x2ee683));
        const _0x581470 = Date.now().toString(16).toUpperCase();
        return "ANDROID_" + _0x581470.slice(0, 16);
      }
    }
  }
  ["_extractCookieInfo"]() {
    const _0x5d1ce0 = {};
    try {
      {
        const _0x380af5 = this.accountConfig.cookie.split(";");
        for (let _0xa41660 of _0x380af5) {
          _0xa41660 = _0xa41660.trim();
          if (!_0xa41660.includes("=")) continue;
          const [_0xae8070, _0x56e04b] = _0xa41660.split("=", 2);
          if (_0xae8070 === "egid") _0x5d1ce0.egid = _0x56e04b;else {
            if (_0xae8070 === "did") _0x5d1ce0.did = _0x56e04b;else {
              if (_0xae8070 === "userId") _0x5d1ce0.user_id = _0x56e04b;else {
                if (_0xae8070 === "kuaishou.api_st") _0x5d1ce0.kuaishou_api_st = _0x56e04b;else {
                  if (_0xae8070 === "appver") _0x5d1ce0.appver = _0x56e04b;
                }
              }
            }
          }
        }
      }
    } catch (_0x339a9c) {
      console.log("账户[" + this.accountConfig.nickname + "] Cookie解析异常: " + (_0x339a9c.message || _0x339a9c));
    }
    return _0x5d1ce0;
  }
  ["getCurrentDid"]() {
    if (this.jbqzEnabled && this.dynamicDid && !this.didFixed) return this.dynamicDid;
    return this.did;
  }
  ["_getImpExtData"](_0x65a6ee) {
    if (_0x65a6ee.name === "搜索广告") {
      const _0x39a3e8 = _0x65a6ee.link_url || "",
        _0x356ef9 = _0x4bb72a();
      return JSON.stringify({
        "openH5AdCount": 2,
        "sessionLookedCompletedCount": "1",
        "sessionType": "1",
        "searchKey": _0x356ef9,
        "triggerType": "2",
        "disableReportToast": "true",
        "businessEnterAction": "7",
        "neoParams": _0x39a3e8
      }, null, 0);
    }
    return "{}";
  }
  async ["getAccountBasicInfo"](_0x24b8be) {
    const _0x51857d = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
      _0xb1fbe8 = {
        "Host": "encourage.kuaishou.com",
        "User-Agent": "kwai-android aegon/4.27.0",
        "Cookie": this.accountConfig.cookie,
        "Content-Type": "application/x-www-form-urlencoded"
      };
    try {
      const _0x217099 = await _0x24b8be.get(_0x51857d, {
        "headers": _0xb1fbe8,
        "timeout": 15000
      });
      if (_0x217099.status !== 200) {
        console.log("[调试] 账户[" + this.nickname + "] 基础信息请求状态异常: " + _0x217099.status);
        return null;
      }
      const _0x28d4c4 = _0x217099.data;
      if (_0x28d4c4 && _0x28d4c4.result === 1 && _0x28d4c4.data) {
        {
          const _0x28f6ac = _0x28d4c4.data;
          let _0x4307ba = _0x28f6ac.coinAmount || 0,
            _0x229c05 = _0x28f6ac.cashAmountDisplay || 0;
          try {
            _0x4307ba = _0x4307ba ? parseInt(_0x4307ba, 10) : 0;
          } catch {
            _0x4307ba = 0;
          }
          try {
            _0x229c05 = _0x229c05 ? parseFloat(_0x229c05) : 0;
          } catch {
            _0x229c05 = 0;
          }
          return {
            "nickname": _0x28f6ac.userData && _0x28f6ac.userData.nickname || this.nickname,
            "total_coin": _0x4307ba,
            "all_cash": _0x229c05
          };
        }
      }
      return null;
    } catch (_0x1bdf72) {
      console.log("[调试] 账户[" + this.nickname + "] 基础信息请求错误: " + (_0x1bdf72.message || _0x1bdf72));
      return null;
    }
  }
  async ["checkCoinLimit"](_0x2ee18f) {
    try {
      const _0x11dbdd = await this.getAccountBasicInfo(_0x2ee18f);
      if (_0x11dbdd && _0x11dbdd.total_coin) {
        const _0x36d52f = parseInt(_0x11dbdd.total_coin, 10) || 0;
        if (_0x36d52f >= this.coinLimit) return console.log("⚠️ 账户[" + this.nickname + "] 金币数量 " + _0x36d52f + " 已达上限 " + this.coinLimit + "，停止执行"), this.coinExceeded = true, this.stopAllTasks = true, true;
      }
      return false;
    } catch (_0x1879c0) {
      console.log("账户[" + this.nickname + "] 金币检查过程异常: " + (_0x1879c0.message || _0x1879c0));
      return false;
    }
  }
  async ["getAdInfo"](_0x3b69ec, _0x5df3eb) {
    try {
      const _0x21659a = "/rest/e/reward/mixed/ad",
        _0x233bed = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "3c2cd3f3",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0x40778f = this.getCurrentDid(),
        _0x237854 = {
          "earphoneMode": "1",
          "mod": "Xiaomi(23116PN5BC)",
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": "pineapple",
          "kpn": "KUAISHOU",
          "androidApiLevel": "35",
          "country_code": "cn",
          "sys": "ANDROID_15",
          "sw": "1080",
          "sh": "2400",
          "abi": "arm64",
          "userRecoBit": "0"
        },
        _0x4e638d = {
          "appInfo": {
            "appId": "kuaishou",
            "name": "快手",
            "packageName": "com.smile.gifmaker",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": "15",
            "deviceId": _0x40778f,
            "screenSize": {
              "width": 1080,
              "height": 2249
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": _0x5df3eb.page_id || 100011251,
            "subPageId": _0x5df3eb.sub_page_id,
            "action": 0,
            "browseType": _0x5df3eb.name === "搜索广告" ? 4 : 3,
            "impExtData": this._getImpExtData(_0x5df3eb),
            "mediaExtData": "{}"
          }]
        },
        _0xf602a7 = JSON.stringify(_0x4e638d),
        _0x4c7398 = _0x15ce4c.stringify(_0x237854) + "&" + _0x15ce4c.stringify(_0x233bed),
        _0x38dfe8 = await this._generateSignature2(_0x3b69ec, _0x21659a, _0x4c7398, this.accountConfig.salt, _0xf602a7);
      if (!_0x38dfe8) {
        console.log("❌ 账户[" + this.nickname + "] 签名生成失败，无法获取" + _0x5df3eb.name);
        return null;
      }
      const _0x2e48c9 = {
        ..._0x237854,
        "sig": _0x38dfe8.sig || "",
        "__NS_sig3": _0x38dfe8.__NS_sig3 || "",
        "__NS_xfalcon": _0x38dfe8.__NS_xfalcon || "",
        "__NStokensig": _0x38dfe8.__NStokensig || ""
      };
      _0x233bed.encData = _0x38dfe8.encData || "";
      _0x233bed.sign = _0x38dfe8.sign || "";
      const _0x196bc0 = "https://api.e.kuaishou.com" + _0x21659a + "?" + _0x15ce4c.stringify(_0x2e48c9),
        _0x49ad0a = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7",
        _0x20e857 = {
          "Host": "api.e.kuaishou.com",
          "User-Agent": "kwai-android aegon/4.27.0",
          "Cookie": _0x49ad0a,
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Client-Info": "model=23127PN0CC;os=Android;nqe-score=36;network=WIFI;signal-strength=4;"
        };
      try {
        {
          const _0x3e355e = await _0x3b69ec.post(_0x196bc0, _0x15ce4c.stringify(_0x233bed), {
            "headers": _0x20e857,
            "timeout": 15000
          });
          if (_0x3e355e.status !== 200) {
            console.log("[调试] 广告信息请求状态异常: " + _0x3e355e.status);
            return null;
          }
          const _0x2098aa = _0x3e355e.data;
          if (!_0x2098aa) return null;
          if (_0x2098aa.errorMsg === "OK" && Array.isArray(_0x2098aa.feeds) && _0x2098aa.feeds[0] && _0x2098aa.feeds[0].ad) {
            {
              const _0x3315ff = _0x2098aa.feeds[0],
                _0x54de3b = _0x3315ff.exp_tag || "",
                _0x21be58 = _0x54de3b.split("/");
              let _0x356ab9 = "";
              if (_0x21be58.length > 1) {
                const _0x552b3f = _0x21be58[1].split("_");
                _0x356ab9 = _0x552b3f[0] || "";
              }
              let _0x49e4f6 = false;
              try {
                const _0x21a259 = _0x3315ff.ad && _0x3315ff.ad.adDataV2 || {},
                  _0x2082c8 = _0x21a259.onceAgainRewardInfo || {},
                  _0x1fcb03 = _0x2082c8.hasMore || false;
                _0x1fcb03 && (_0x49e4f6 = true);
              } catch (_0x512a3c) {}
              return {
                "cid": _0x3315ff.ad.creativeId,
                "llsid": _0x356ab9,
                "hasRewardEnd": _0x49e4f6
              };
            }
          }
          console.log("❌ 账户[" + this.nickname + "] 广告信息获取失败: " + (_0x2098aa.errorMsg || "未知错误"));
          return null;
        }
      } catch (_0x366767) {
        console.log("❌ 账户[" + this.nickname + "] 广告信息请求异常: " + (_0x366767.message || _0x366767));
        return null;
      }
    } catch (_0x5b447d) {
      console.log("❌ 账户[" + this.nickname + "] 广告信息处理异常: " + (_0x5b447d.message || _0x5b447d));
      return null;
    }
  }
  async ["_generateSignature"](_0x28991c, _0x2e268b, _0x4676c9, _0x2947d0, _0x157781) {
    try {
      {
        const _0xc5c70b = JSON.stringify({
            "businessId": _0x157781.business_id,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0x2e268b,
              "extInfo": "",
              "llsid": _0x4676c9,
              "requestSceneType": _0x157781.request_scene_type,
              "taskType": _0x157781.task_type,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": _0x157781.page_id || 100011251,
            "posId": _0x157781.pos_id,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x157781.sub_page_id
          }),
          _0x44f8c3 = "bizStr=" + encodeURIComponent(_0xc5c70b) + "&cs=false&client_key=3c2cd3f3",
          _0x560d48 = _0x15ce4c.parse(this.queryParams),
          _0x4755ac = {};
        for (const _0x1de703 of Object.keys(_0x560d48)) {
          const _0x3d0999 = _0x560d48[_0x1de703];
          _0x4755ac[_0x1de703] = Array.isArray(_0x3d0999) ? _0x3d0999[0] : _0x3d0999;
        }
        const _0x4c29bd = _0x15ce4c.parse(_0x44f8c3),
          _0x278572 = {};
        for (const _0x3dc9b9 of Object.keys(_0x4c29bd)) {
          const _0x1ff17b = _0x4c29bd[_0x3dc9b9];
          _0x278572[_0x3dc9b9] = Array.isArray(_0x1ff17b) ? _0x1ff17b[0] : _0x1ff17b;
        }
        const _0x8ae5e5 = {
          ..._0x4755ac,
          ..._0x278572
        };
        delete _0x8ae5e5.sig;
        delete _0x8ae5e5.__NS_sig3;
        delete _0x8ae5e5.__NS_xfalcon;
        delete _0x8ae5e5.__NStokensig;
        const _0x55b4f9 = "/rest/r/ad/task/report",
          _0x1601a2 = _0x15ce4c.stringify(_0x8ae5e5),
          _0x1867fc = await this.requestNssig(_0x1601a2, this.accountConfig.salt, _0x55b4f9, "账户[" + this.nickname + "] nssig(任务报告)");
        if (!_0x1867fc) {
          console.log("❌ 账户[${this.nickname}] /nssig(任务报告) 返回空值");
          return null;
        }
        const _0x34da9c = _0x1867fc.sig || "",
          _0x30cfe4 = _0x1867fc.nstokensig || "",
          _0x38a596 = _0x1867fc.nssig3 || "",
          _0x15c46b = _0x1867fc.nssig4 || "";
        if (!_0x34da9c || !_0x30cfe4 || !_0x38a596 || !_0x15c46b) return console.log("❌ 账户[" + this.nickname + "] /nssig(任务报告) 返回字段不完整"), null;
        return {
          "sig": _0x34da9c,
          "sig3": _0x38a596,
          "xfalcon": _0x15c46b,
          "sigtoken": _0x30cfe4,
          "post": _0x44f8c3
        };
      }
    } catch (_0x3a88c9) {
      console.log("❌ 账户[" + this.nickname + "] 生成签名异常: " + (_0x3a88c9.message || _0x3a88c9));
      return null;
    }
  }
  async ["_generateSignature2"](_0x410c2c, _0x4dc9fb, _0x361948, _0x3d4b14, _0x346cf5) {
    try {
      const _0x2fd9fd = Buffer.from(_0x346cf5, "utf8").toString("base64"),
        _0x2bd267 = await this.requestEncsign(_0x2fd9fd, "账户[" + this.nickname + "] encsign(广告)");
      if (!_0x2bd267) return console.log("账户[" + this.nickname + "] /encsign 返回空值"), null;
      const _0x49b2e9 = _0x2bd267.encdata || _0x2bd267.encData,
        _0x45244b = _0x2bd267.sign;
      if (!_0x49b2e9 || !_0x45244b) {
        console.log("账户[" + this.nickname + "] /encsign 返回字段不完整");
        return null;
      }
      const _0x39cada = _0x15ce4c.parse(_0x361948),
        _0x3fb168 = {};
      for (const _0x357f09 of Object.keys(_0x39cada)) {
        const _0x1f1c64 = _0x39cada[_0x357f09];
        _0x3fb168[_0x357f09] = Array.isArray(_0x1f1c64) ? _0x1f1c64[0] : _0x1f1c64;
      }
      _0x3fb168.encData = _0x49b2e9;
      _0x3fb168.sign = _0x45244b;
      const _0xf92fc7 = _0x15ce4c.stringify(_0x3fb168),
        _0x2f371b = await this.requestNssig(_0xf92fc7, _0x3d4b14, _0x4dc9fb, "账户[" + this.nickname + "] nssig(广告)");
      if (!_0x2f371b) {
        console.log("❌ 账户[${this.nickname}] /nssig(广告) 返回空值");
        return null;
      }
      const _0xc9802c = _0x2f371b.sig || "",
        _0x51f3df = _0x2f371b.nstokensig || "",
        _0x13a848 = _0x2f371b.nssig3 || "",
        _0x304b93 = _0x2f371b.nssig4 || "";
      if (!_0xc9802c || !_0x51f3df || !_0x13a848 || !_0x304b93) return console.log("❌ 账户[" + this.nickname + "] /nssig(广告) 返回字段不完整"), null;
      return {
        "encData": _0x49b2e9,
        "sign": _0x45244b,
        "sig": _0xc9802c,
        "__NS_sig3": _0x13a848,
        "__NS_xfalcon": _0x304b93,
        "__NStokensig": _0x51f3df
      };
    } catch (_0x511317) {
      console.log("账户[" + this.nickname + "] 生成广告签名异常: " + (_0x511317.message || _0x511317));
      return null;
    }
  }
  async ["submitReport"](_0x532a42, _0x368c73, _0x56c3bc, _0x16d65c, _0x29a58c, _0x285e3b, _0x103f0f, _0x53a4a7) {
    try {
      const _0x548fc5 = "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.queryParams + ("&sig=" + _0x368c73 + "&__NS_sig3=" + _0x56c3bc + "&__NS_xfalcon=" + _0x16d65c + "&__NStokensig=" + _0x29a58c),
        _0x2f200a = this.customRegionTicket || "";
      let _0x4c120a;
      if (_0x2f200a) {
        _0x4c120a = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=" + _0x2f200a;
      } else _0x4c120a = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7";
      const _0x4f93ea = {
        "Host": "api.e.kuaishou.cn",
        "User-Agent": "kwai-android aegon/4.27.0",
        "Cookie": _0x4c120a,
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Client-Info": "model=23127PN0CC;os=Android;nqe-score=36;network=WIFI;signal-strength=4;"
      };
      try {
        {
          const _0x10a4a1 = await _0x532a42.post(_0x548fc5, _0x285e3b, {
            "headers": _0x4f93ea,
            "timeout": 15000
          });
          if (_0x10a4a1.status !== 200) return console.log("[调试] 报告提交状态异常: " + _0x10a4a1.status), {
            "success": false,
            "reward": 0
          };
          const _0x446ae7 = _0x10a4a1.data;
          if (!_0x446ae7) return {
            "success": false,
            "reward": 0
          };
          if (_0x446ae7.result === 1) {
            {
              const _0xae7b64 = (_0x446ae7.data && _0x446ae7.data.neoAmount) !== undefined ? _0x446ae7.data.neoAmount : 0;
              return {
                "success": true,
                "reward": _0xae7b64
              };
            }
          }
          const _0x34da3e = [20107, 20108, 1003, 415];
          if (_0x34da3e.includes(_0x446ae7.result)) return console.log("⚠️ 账户[" + this.nickname + "] " + _0x53a4a7.name + " 任务已达上限"), this.taskLimitReached[_0x103f0f] = true, {
            "success": false,
            "reward": 0
          };
          console.log("❌ 账户[" + this.nickname + "] " + _0x53a4a7.name + " 奖励获取失败，result=" + _0x446ae7.result + " msg=" + (_0x446ae7.data || ""));
          return {
            "success": false,
            "reward": 0
          };
        }
      } catch (_0x91f724) {
        console.log("❌ 账户[" + this.nickname + "] 报告提交请求异常: " + (_0x91f724.message || _0x91f724));
        return {
          "success": false,
          "reward": 0
        };
      }
    } catch (_0x370755) {
      console.log("❌ 账户[" + this.nickname + "] 任务提交过程异常: " + (_0x370755.message || _0x370755));
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["_retryOperation"](_0xf2a981, _0x5ddb6a, _0x330f05 = 3, _0x5e2e5b = 2) {
    let _0x357441 = 0,
      _0x552355 = null;
    while (_0x357441 < _0x330f05) {
      try {
        {
          const _0x3d7623 = await _0xf2a981();
          if (_0x3d7623) return _0x3d7623;
          _0x552355 = new Error(_0x5ddb6a + " 返回空结果");
        }
      } catch (_0x47311d) {
        _0x552355 = _0x47311d;
        console.log("账户[" + this.nickname + "] " + _0x5ddb6a + " 过程异常: " + (_0x47311d.message || _0x47311d));
      }
      _0x357441 += 1;
      _0x357441 < _0x330f05 && (console.log("账户[" + this.nickname + "] " + _0x5ddb6a + " 失败，第 " + _0x357441 + "/" + _0x330f05 + " 次重试"), await _0x5626a6(_0x5e2e5b * 1000));
    }
    return null;
  }
  async ["executeTask"](_0x198d53, _0x20e117, _0xa25466 = 1, _0xe7eec7 = 1, _0x4199be = false, _0x445c57 = true, _0x98e3e6 = 1) {
    const _0x171f56 = this.taskConfigs[_0x20e117];
    if (!_0x171f56) {
      console.log("❌ 账户[" + this.nickname + "] 未知任务类型: " + _0x20e117);
      return {
        "success": false,
        "hasRewardEnd": false
      };
    }
    if (this.taskLimitReached[_0x20e117]) {
      return {
        "success": false,
        "hasRewardEnd": false
      };
    }
    try {
      const _0x4fc2f9 = _0x171f56.task_type ?? 1,
        _0xf4f6ca = _0x171f56.request_scene_type ?? 1;
      _0x171f56.task_type = _0xa25466;
      if (_0x20e117 === "ss") {
        if (_0x4199be) _0x171f56.request_scene_type = 7, _0x171f56.task_type = 2;else {
          _0x171f56.request_scene_type = 1;
        }
      } else _0xa25466 === 2 && (_0x171f56.request_scene_type = 7);
      const _0x15c0ce = await this._retryOperation(() => this.getAdInfo(_0x198d53, _0x171f56), "获取" + _0x171f56.name + "信息", 3);
      if (!_0x15c0ce) {
        {
          this.adInfoFailCount += 1;
          const _0x157474 = _0x30be66();
          console.log("账号[" + this.nickname + "]获取" + _0x171f56.name + "信息 失败，重试 " + this.adInfoFailCount + "/" + this.adInfoFailLimit);
          this.ggcsEnabled && this.adInfoFailCount >= this.adInfoFailLimit && (console.log("🏁 账号[" + this.nickname + "] 获取看广告信息失败" + this.adInfoFailLimit + "次，结束该账号"), this.stopAllTasks = true);
          _0x171f56.task_type = _0x4fc2f9;
          _0x171f56.request_scene_type = _0xf4f6ca;
          this.taskStats[_0x20e117].failed += 1;
          return {
            "success": false,
            "hasRewardEnd": false
          };
        }
      }
      this.adInfoFailCount = 0;
      const [_0x51d9f0, _0x105c02] = _0x496729(),
        _0x16f15a = (Math.floor(Math.random() * (_0x105c02 - _0x51d9f0 + 1)) + _0x51d9f0) / 1000,
        _0x1822c4 = _0x4199be ? "_追加" : "",
        _0x4ceafd = _0x30be66();
      if (_0x445c57) {
        {
          if (_0x20e117 === "ss") {
            const _0x285e51 = _0x3ae5fd();
            console.log(_0x4ceafd + " - INFO - 账号[" + this.nickname + "] 开始搜索广告任务 " + _0xe7eec7 + "/" + _0x285e51);
            if (!_0x4199be && !this.ssFirstTaskShown && _0xe7eec7 === 1) {
              const _0x665734 = _0x4bb72a();
              (process.env.KS_SEARCH_KEYWORD || "").trim() && (console.log(_0x4ceafd + " - INFO - 账号[" + this.nickname + "] 搜索关键词[" + _0x665734 + "]"), this.ssFirstTaskShown = true);
            }
          } else console.log(_0x4ceafd + " - INFO - 账号[" + this.nickname + "] 开始广告任务 " + _0xe7eec7 + "/10");
        }
      }
      console.log(_0x4ceafd + " - INFO - 账号[" + this.nickname + "] ==>" + _0x171f56.name + " 广告浏览中 " + Math.round(_0x16f15a) + " 秒");
      await _0x5626a6(_0x16f15a * 1000);
      const _0x7ec36d = await this._retryOperation(() => this._generateSignature(_0x198d53, _0x15c0ce.cid, _0x15c0ce.llsid, _0x20e117, _0x171f56), "生成" + _0x171f56.name + "签名", 3);
      if (!_0x7ec36d) return _0x171f56.task_type = _0x4fc2f9, _0x171f56.request_scene_type = _0xf4f6ca, this.taskStats[_0x20e117].failed += 1, {
        "success": false,
        "hasRewardEnd": false
      };
      const _0x22529c = await this._retryOperation(() => this.submitReport(_0x198d53, _0x7ec36d.sig, _0x7ec36d.sig3, _0x7ec36d.xfalcon, _0x7ec36d.sigtoken, _0x7ec36d.post, _0x20e117, _0x171f56), "提交" + _0x171f56.name + "报告", 3);
      _0x171f56.task_type = _0x4fc2f9;
      _0x171f56.request_scene_type = _0xf4f6ca;
      if (_0x22529c && _0x22529c.success) {
        {
          this.taskStats[_0x20e117].success += 1;
          const _0x5bae9a = _0x22529c.reward || 0;
          this.taskStats[_0x20e117].total_reward += _0x5bae9a;
          const _0x4a0fc1 = await this.getAccountBasicInfo(_0x198d53),
            _0x324d04 = _0x4a0fc1 ? _0x4a0fc1.total_coin ?? _0x4a0fc1.totalCoin ?? 0 : 0,
            _0x193979 = {
              "box": _0x2bc0e7.bright + _0x2bc0e7.blue,
              "box_extra": _0x2bc0e7.bright + _0x2bc0e7.green,
              "look": _0x2bc0e7.bright + _0x2bc0e7.cyan,
              "ss": _0x2bc0e7.bright + _0x2bc0e7.magenta
            },
            _0x2366fb = _0x5bae9a >= 1000 ? "" + _0x2bc0e7.bright + _0x2bc0e7.red + "💰[高额奖励]" + _0x2bc0e7.reset : "" + _0x2bc0e7.bright + _0x2bc0e7.green + "💰[奖励]" + _0x2bc0e7.reset,
            _0x1c00c4 = _0x53fe09(this.nickname),
            _0x384dbd = _0x3603f0("" + _0x171f56.name + _0x1822c4, _0x193979[_0x20e117] || _0x2bc0e7.bright + _0x2bc0e7.cyan),
            _0xd3e7d0 = _0xe7eec7 || 1,
            _0x807fa5 = _0x98e3e6 || _0xd3e7d0 || 1,
            _0x3c0b2a = _0x3603f0("（第" + _0xd3e7d0 + "/" + _0x807fa5 + "次）", _0x2bc0e7.bright + _0x2bc0e7.yellow),
            _0x524a97 = [_0x2366fb, _0x1c00c4, "" + _0x384dbd + _0x3c0b2a].filter(Boolean).join("").trim();
          console.log(_0x524a97 + "==>" + _0x20c02c(_0x5bae9a) + " —— 当前金币[" + _0x460708(_0x324d04) + "]");
          if (this.jbqzEnabled && !this.didFixed) {
            if (_0x5bae9a < 1000) {
              {
                const _0x14e1c5 = this.generateDeviceId();
                this.dynamicDid = _0x14e1c5;
                this._updateQueryParams();
                console.log("💰 账号[" + this.nickname + "] 获得" + _0x5bae9a + "金币 < 1000，切换设备ID: " + _0x14e1c5);
              }
            } else this.dynamicDid && (this.didFixed = true, console.log("✅ 账号[" + this.nickname + "] 获得" + _0x5bae9a + "金币 >= 1000，固定设备ID: " + this.dynamicDid));
          }
          if (this.jbjcValues.includes(_0x5bae9a)) {
            this.jbjcStreak += 1;
            const _0x29b28f = this.jbjcValues.join(",");
            console.log("⚠️ 账户[" + this.nickname + "] 获得" + _0x5bae9a + "金币 (连续" + this.jbjcStreak + "次，检测值：" + _0x29b28f + ")");
            if (this.jbjcStreak >= this.jbjcLimit) {
              console.log("🏁 账户[" + this.nickname + "] 连续" + this.jbjcLimit + "次获得" + _0x29b28f + "金币，停止该账号所有任务");
              this.stopAllTasks = true;
            }
          } else this.jbjcStreak = 0;
          return {
            "success": true,
            "hasRewardEnd": _0x15c0ce.hasRewardEnd || false
          };
        }
      }
      this.taskStats[_0x20e117].failed += 1;
      return {
        "success": false,
        "hasRewardEnd": false
      };
    } catch (_0x5213cb) {
      console.log("❌ 账户[" + this.nickname + "] 任务执行异常(" + _0x20e117 + "): " + (_0x5213cb.message || _0x5213cb));
      this.taskStats[_0x20e117].failed += 1;
      return {
        "success": false,
        "hasRewardEnd": false
      };
    }
  }
  async ["executeAllTasksByPriority"](_0x5d3b23) {
    const _0x5a9327 = this.tasksToExecute.filter(_0xcfdd01 => this.taskConfigs[_0xcfdd01]),
      _0x3010f0 = {},
      _0x12e45b = _0x207c77(),
      _0x285739 = _0x5a9327.length === 1 && _0x5a9327[0] === "ss";
    if (_0x285739 && _0x12e45b) {
      {
        const _0x3b8f5b = "ss";
        let _0x277d9c = 0;
        const _0x6dc18f = _0x3ae5fd();
        while (_0x277d9c < _0x6dc18f && !this.stopAllTasks) {
          {
            _0x277d9c += 1;
            const _0x2e3730 = await this.executeTask(_0x5d3b23, _0x3b8f5b, 2, _0x277d9c, false, true, _0x6dc18f);
            if (!_0x2e3730.success) continue;
            let _0x3c36e4 = _0x2e3730.hasRewardEnd || false;
            while (_0x3c36e4 && _0x277d9c < _0x6dc18f && !this.stopAllTasks) {
              _0x277d9c += 1;
              const _0x5d523d = await this.executeTask(_0x5d3b23, _0x3b8f5b, 2, _0x277d9c, true, true, _0x6dc18f);
              if (!_0x5d523d.success) break;
              _0x3c36e4 = _0x5d523d.hasRewardEnd || false;
            }
          }
        }
        _0x3010f0[_0x3b8f5b] = true;
        return _0x3010f0;
      }
    }
    const _0x2ef046 = _0x5a9327.filter(_0x2caaed => !["look", "ss"].includes(_0x2caaed));
    for (const _0x430441 of _0x2ef046) {
      {
        if (this.stopAllTasks) break;
        const _0x2b51e2 = this.taskConfigs[_0x430441],
          _0x2f120d = await this.executeTask(_0x5d3b23, _0x430441, _0x2b51e2.task_type || 1, 1, false, false, 1);
        _0x3010f0[_0x430441] = !!_0x2f120d.success;
        if (_0x430441 !== _0x2ef046[_0x2ef046.length - 1] || _0x5a9327.includes("look")) {
          {
            const _0x2cfdca = Math.floor(Math.random() * 3001 + 3000) / 1000;
            await _0x5626a6(_0x2cfdca * 1000);
          }
        }
      }
    }
    if (_0x5a9327.includes("ss") && !_0x285739) {
      const _0x25b9e9 = "ss",
        _0xb293e1 = this.taskConfigs[_0x25b9e9],
        _0x59ed8b = await this.executeTask(_0x5d3b23, _0x25b9e9, _0xb293e1.task_type || 2, 1, false, false, _0x3ae5fd());
      _0x3010f0[_0x25b9e9] = !!_0x59ed8b.success;
      if (_0x5a9327.includes("look")) {
        const _0x5c4af5 = Math.floor(Math.random() * 3001 + 3000) / 1000;
        await _0x5626a6(_0x5c4af5 * 1000);
      }
    }
    if (!_0x5a9327.includes("look")) return _0x3010f0;
    const _0x538622 = "look";
    let _0x32f210 = 0;
    const _0x57360d = 10,
      _0x2fabe4 = _0x4ea6d7();
    while (_0x32f210 < _0x57360d && !this.stopAllTasks) {
      {
        _0x32f210 += 1;
        const _0x2f8511 = await this.executeTask(_0x5d3b23, _0x538622, 1, _0x32f210, false, true, _0x57360d);
        if (!_0x2f8511.success) continue;
        if (_0x2fabe4) {
          let _0x1f68d4 = _0x2f8511.hasRewardEnd || false;
          while (_0x1f68d4 && _0x32f210 < _0x57360d && !this.stopAllTasks) {
            _0x32f210 += 1;
            const _0xc3d9f2 = await this.executeTask(_0x5d3b23, _0x538622, 2, _0x32f210, true, true, _0x57360d);
            if (!_0xc3d9f2.success) break;
            _0x1f68d4 = _0xc3d9f2.hasRewardEnd || false;
          }
        }
      }
    }
    _0x3010f0[_0x538622] = true;
    return _0x3010f0;
  }
  ["printTaskStats"]() {
    console.log("\n账户[" + this.nickname + "] 任务执行统计:");
    for (const [_0xd08457, _0x47c42b] of Object.entries(this.taskStats)) {
      const _0x83ec5d = this.taskConfigs[_0xd08457]?.["name"] || _0xd08457;
      console.log("  " + _0x83ec5d + ": 成功" + _0x47c42b.success + "次, 失败" + _0x47c42b.failed + "次, 总奖励" + _0x47c42b.total_reward + "金币");
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  async ["requestEncsign"](_0x28f747, _0x398068) {
    if (!_0x902373) return null;
    const _0x9bf040 = {
        "type": "encsign",
        "data": _0x28f747,
        "ud": this.userId,
        "device_id": _0x2459f2(),
        "task": _0x398068
      },
      _0x5b69e6 = await _0xfcb2ef(_0x9bf040, _0x398068);
    if (_0x5b69e6 && _0x5b69e6.status) {
      let _0x5ba7a2 = _0x5b69e6.data || {};
      if (typeof _0x5ba7a2 === "string") try {
        _0x5ba7a2 = JSON.parse(_0x5ba7a2);
      } catch {}
      _0x5ba7a2 && typeof _0x5ba7a2 === "object" && _0x5ba7a2.data && typeof _0x5ba7a2.data === "object" && (_0x5ba7a2 = _0x5ba7a2.data);
      return _0x5ba7a2;
    }
    _0x5b69e6 && _0x5b69e6.error && console.log("[警告] " + _0x398068 + " 网关返回错误: " + _0x5b69e6.error);
    return null;
  }
  async ["requestNssig"](_0xa8290e, _0x2460ef, _0x1f74d5, _0x3ff89f) {
    if (!_0x902373) return null;
    const _0x514a58 = {
        "type": "nssig",
        "data": _0xa8290e,
        "salt": _0x2460ef,
        "path": _0x1f74d5,
        "ud": this.userId,
        "device_id": _0x2459f2(),
        "task": _0x3ff89f
      },
      _0x563ac6 = await _0xfcb2ef(_0x514a58, _0x3ff89f);
    if (_0x563ac6 && _0x563ac6.status) {
      {
        let _0x8b010 = _0x563ac6.data || {};
        if (typeof _0x8b010 === "string") try {
          _0x8b010 = JSON.parse(_0x8b010);
        } catch {}
        if (_0x8b010 && typeof _0x8b010 === "object" && _0x8b010.data && typeof _0x8b010.data === "object") {
          _0x8b010 = _0x8b010.data;
        }
        return _0x8b010;
      }
    }
    _0x563ac6 && _0x563ac6.error && console.log("[警告] " + _0x3ff89f + " 网关返回错误: " + _0x563ac6.error);
    return null;
  }
}
async function _0xa7a741(_0x3e2707, _0x50a03f = "代理连通性检测") {
  if (!_0x3e2707) {
    return {
      "ok": true,
      "msg": "✅ 未配置代理（直连模式）",
      "ip": "localhost"
    };
  }
  const _0x537e1a = 3;
  for (let _0x5a6df7 = 0; _0x5a6df7 < _0x537e1a; _0x5a6df7++) {
    try {
      const _0x672276 = new _0x5f14e3(_0x3e2707),
        _0x8efe4b = _0x187b50.create({
          "httpAgent": _0x672276,
          "httpsAgent": _0x672276
        }),
        _0x553bd4 = Date.now(),
        _0x10935e = "https://nebula.kuaishou.com",
        _0xdc00a5 = await _0x8efe4b.get(_0x10935e, {
          "timeout": 15000
        }),
        _0x34aace = (Date.now() - _0x553bd4) / 1000;
      if (_0xdc00a5.status === 200) {
        let _0xd54700 = "未知";
        try {
          {
            const _0x5ce79d = await _0x8efe4b.get("https://ipinfo.io/json", {
              "timeout": 10000
            });
            _0x5ce79d.status === 200 && _0x5ce79d.data && (_0xd54700 = _0x5ce79d.data.ip || "未知");
          }
        } catch {
          _0xd54700 = "未知";
        }
        return {
          "ok": true,
          "msg": "✅ 代理正常，延迟: " + _0x34aace.toFixed(2) + "秒，IP: " + _0xd54700,
          "ip": _0xd54700
        };
      }
      if (_0x5a6df7 < _0x537e1a - 1) {
        console.log("账户[" + _0x50a03f + "] 代理测试失败，重试 " + (_0x5a6df7 + 1) + "/" + _0x537e1a);
        await _0x5626a6(1000);
        continue;
      }
      return {
        "ok": false,
        "msg": "❌ 代理测试失败，状态码: " + _0xdc00a5.status,
        "ip": ""
      };
    } catch (_0x4a1fdc) {
      if (_0x5a6df7 < _0x537e1a - 1) {
        console.log("账户[" + _0x50a03f + "] 代理测试失败，重试 " + (_0x5a6df7 + 1) + "/" + _0x537e1a + ": " + (_0x4a1fdc.message || _0x4a1fdc));
        await _0x5626a6(1000);
        continue;
      }
      return {
        "ok": false,
        "msg": "❌ 代理测试失败: " + (_0x4a1fdc.message || _0x4a1fdc),
        "ip": ""
      };
    }
  }
  return {
    "ok": false,
    "msg": "❌ 代理测试失败，3次重试均失败",
    "ip": ""
  };
}
function _0x1aae8a(_0xfe79c) {
  if (_0xfe79c) {
    try {
      const _0x37caca = new _0x5f14e3(_0xfe79c);
      return _0x187b50.create({
        "httpAgent": _0x37caca,
        "httpsAgent": _0x37caca
      });
    } catch (_0xe2d194) {
      console.log("[错误] 代理配置异常: " + (_0xe2d194.message || _0xe2d194));
    }
  }
  return _0x187b50.create();
}
function _0x1f909a(_0x29d10e) {
  return {
    "isTaskResult": true,
    ..._0x29d10e
  };
}
async function _0x4ca6c2(_0x1bb5b9, _0x3d61a2 = 100) {
  const _0x5bee77 = new Set(),
    _0x50fced = _0x1aae8a(_0x1bb5b9.proxy_url);
  try {
    const _0x3ce88a = await _0x1e4bec("账户[" + _0x1bb5b9.index + "]");
    !_0x3ce88a && (console.log("❌ 账户[" + _0x1bb5b9.index + "] 卡密验证失败，脚本已停止运行"), process.exit(1));
    if (_0x1bb5b9.proxy_url) {
      console.log("账户[" + _0x1bb5b9.index + "] 🔌 代理连接测试中...");
      const _0x172e1e = await _0xa7a741(_0x1bb5b9.proxy_url, "账户[" + _0x1bb5b9.index + "]");
      console.log("  - " + _0x172e1e.msg);
      if (_0x172e1e.ok && _0x172e1e.ip && _0x172e1e.ip !== "localhost") {
        if (_0x5bee77.has(_0x172e1e.ip)) return console.log("\n⚠️ 检测到重复代理IP（" + _0x172e1e.ip + "），请检查配置！"), null;
        _0x5bee77.add(_0x172e1e.ip);
      }
    }
    const _0x154ea0 = new _0x31cd31(_0x1bb5b9, _0x10288c());
    let _0xa85418 = await _0x154ea0.getAccountBasicInfo(_0x50fced);
    const _0xf9e7da = await _0x12fa54(_0x154ea0);
    if (!_0xf9e7da) return _0x154ea0.stopAllTasks = true, _0x1f909a({
      "index": _0x1bb5b9.index,
      "nickname": _0x154ea0.nickname,
      "error": "卡密或绑定验证失败"
    });
    let _0x5108d2 = _0x1bb5b9.nickname;
    if (_0xa85418) {
      _0x5108d2 = _0xa85418.nickname || _0x1bb5b9.nickname;
      _0x154ea0.nickname = _0x5108d2;
      const _0x59715d = _0xa85418.total_coin || 0,
        _0x36c63d = _0xa85418.all_cash || 0;
      console.log("账户[" + _0x5108d2 + "] ✅ 登录验证成功， 当前金币: " + _0x59715d + "，💸 当前余额: " + _0x36c63d);
    } else {
      _0x154ea0.nickname = _0x5108d2;
      console.log("账户[" + _0x5108d2 + "] ❌ 登录验证失败，基础信息获取失败");
      if (_0x154ea0.ggcsEnabled) return console.log("🏁 账号[" + _0x5108d2 + "] 登录验证失败，结束该账号运行"), null;
      console.log("账户[" + _0x5108d2 + "] 继续执行流程");
    }
    await _0x154ea0.checkCoinLimit(_0x50fced);
    if (_0x154ea0.coinExceeded) {
      {
        console.log("账户[" + _0x154ea0.nickname + "] 初始金币已达上限，跳过任务执行");
        const _0x49454a = await _0x154ea0.getAccountBasicInfo(_0x50fced),
          _0x3db814 = _0xa85418 ? _0xa85418.total_coin || 0 : 0,
          _0x5671f5 = _0x49454a ? _0x49454a.total_coin || 0 : 0,
          _0x17c307 = _0xa85418 ? _0xa85418.all_cash || 0 : 0,
          _0xb9454f = _0x49454a ? _0x49454a.all_cash || 0 : 0;
        return _0x1f909a({
          "index": _0x1bb5b9.index,
          "nickname": _0x154ea0.nickname,
          "initial_coin": _0x3db814,
          "final_coin": _0x5671f5,
          "coin_change": _0x5671f5 - _0x3db814,
          "initial_cash": _0x17c307,
          "final_cash": _0xb9454f,
          "cash_change": _0xb9454f - _0x17c307,
          "stats": _0x154ea0.getTaskStats(),
          "coin_limit_exceeded": true
        });
      }
    }
    const _0xd3d837 = _0x2ae0b4();
    for (let _0x40816a = 0; _0x40816a < _0x3d61a2; _0x40816a++) {
      if ((process.env.KS_STOP_FLAG || "").trim() === "1") {
        console.log("账号[" + _0x154ea0.nickname + "] ⚠️ 收到停止信号，立即退出");
        return null;
      }
      console.log("账号[" + _0x154ea0.nickname + "] 🚀 开始第" + (_0x40816a + 1) + "轮任务");
      await _0x154ea0.executeAllTasksByPriority(_0x50fced);
      if (_0x154ea0.stopAllTasks) {
        console.log("账号[" + _0x154ea0.nickname + "] 🏁 达到停止条件，终止后续轮次");
        break;
      }
      if ((process.env.STOP_FLAG || "").trim() === "1") return console.log("账号[" + _0x154ea0.nickname + "] ⚠️ 收到停止信号，立即退出"), null;
      if (_0xd3d837 > 0 && (_0x40816a + 1) % _0xd3d837 === 0 && _0x40816a < _0x3d61a2 - 1) {
        const _0x5dabdf = 600,
          _0x3ad602 = _0x30be66();
        _0x42ca3a.info("\n" + _0x3ad602 + " - INFO - 账号[" + _0x154ea0.nickname + "] 休息10分钟\n");
        for (let _0x2900f1 = 0; _0x2900f1 < _0x5dabdf; _0x2900f1++) {
          if ((process.env.KS_STOP_FLAG || "").trim() === "1") {
            console.log("账号[" + _0x154ea0.nickname + "] ⚠️ 收到停止信号，立即退出");
            return null;
          }
          await _0x5626a6(1000);
        }
      } else {
        if (_0x40816a < _0x3d61a2 - 1) {
          const _0x59f3ae = Math.floor(Math.random() * 5001 + 5000),
            _0x32e29f = Math.floor(_0x59f3ae / 1000);
          for (let _0x2391fc = 0; _0x2391fc < _0x32e29f; _0x2391fc++) {
            if ((process.env.KS_STOP_FLAG || "").trim() === "1") {
              console.log("账号[" + _0x154ea0.nickname + "] ⚠️ 收到停止信号，立即退出");
              return null;
            }
            await _0x5626a6(1000);
          }
        }
      }
    }
    const _0x761c32 = await _0x154ea0.getAccountBasicInfo(_0x50fced),
      _0x23b377 = _0xa85418 ? _0xa85418.total_coin || 0 : 0,
      _0x1f58e2 = _0x761c32 ? _0x761c32.total_coin || 0 : 0,
      _0x3044ec = _0xa85418 ? _0xa85418.all_cash || 0 : 0,
      _0x5b9e1a = _0x761c32 ? _0x761c32.all_cash || 0 : 0;
    _0x154ea0.printTaskStats();
    return _0x1f909a({
      "index": _0x1bb5b9.index,
      "nickname": _0x154ea0.nickname,
      "initial_coin": _0x23b377,
      "final_coin": _0x1f58e2,
      "coin_change": _0x1f58e2 - _0x23b377,
      "initial_cash": _0x3044ec,
      "final_cash": _0x5b9e1a,
      "cash_change": _0x5b9e1a - _0x3044ec,
      "stats": _0x154ea0.getTaskStats(),
      "coin_limit_exceeded": _0x154ea0.coinExceeded
    });
  } finally {}
}
async function _0x2763dc(_0x205cc6, _0x44f34f, _0x2b58b3) {
  const _0x482033 = _0x205cc6.map(_0x244c6d => _0x4ca6c2(_0x244c6d, _0x2b58b3));
  return Promise.all(_0x482033);
}
function _0x4c9af5(_0x28f093) {
  if (!_0x28f093 || _0x28f093.length === 0) {
    {
      console.log("\n无有效账户信息可显示。");
      return;
    }
  }
  const _0x20f129 = _0x28f093.filter(_0x1ff4e1 => _0x1ff4e1 && _0x1ff4e1.isTaskResult);
  if (_0x20f129.length === 0) {
    console.log("\n无有效任务执行结果。");
    return;
  }
  let _0x1c1c4c = 0,
    _0x45c61e = 0,
    _0x3f4896 = 0,
    _0x51fe90 = 0,
    _0x409950 = 0,
    _0x5abd8e = 0;
  try {
    for (const _0x312494 of _0x20f129) {
      const _0xa19335 = _0x312494.initial_coin || 0,
        _0xa1e742 = _0x312494.final_coin || 0,
        _0x32094c = _0x312494.initial_cash || 0,
        _0xfb1764 = _0x312494.final_cash || 0;
      _0x1c1c4c += _0xa19335;
      _0x45c61e += _0xa1e742;
      _0x51fe90 += _0x32094c;
      _0x409950 += _0xfb1764;
    }
    _0x3f4896 = _0x45c61e - _0x1c1c4c;
    _0x5abd8e = _0x409950 - _0x51fe90;
  } catch (_0x4e3a75) {
    {
      console.log("汇总数据计算异常: " + (_0x4e3a75.message || _0x4e3a75));
      _0x1c1c4c = 0;
      _0x45c61e = 0;
      _0x3f4896 = 0;
      _0x51fe90 = 0;
      _0x409950 = 0;
      _0x5abd8e = 0;
    }
  }
  let _0x102b92 = 0,
    _0x526004 = 0,
    _0x1c46a6 = 0;
  for (const _0x5cfb92 of _0x20f129) {
    if (!_0x5cfb92.stats) continue;
    for (const _0x516fae of Object.values(_0x5cfb92.stats)) {
      _0x102b92 += (_0x516fae.success || 0) + (_0x516fae.failed || 0);
      _0x526004 += _0x516fae.success || 0;
      _0x1c46a6 += _0x516fae.total_reward || 0;
    }
  }
  const _0x3e987c = _0x102b92 > 0 ? _0x526004 / _0x102b92 * 100 : 0,
    _0x363881 = _0x20f129.filter(_0x13717b => _0x13717b.coin_limit_exceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + "快手任务执行结果汇总".padStart(39).padEnd(79) + "|");
  console.log("=".repeat(80));
  console.log("|总账户数: " + _0x20f129.length + "超过金币上限账户: " + _0x363881 + "总任务数: " + _0x102b92 + "任务成功率: " + _0x3e987c.toFixed(1) + "%|");
  console.log("|总金币变化: " + _0x3f4896 + "总金币奖励: " + _0x1c46a6 + "总余额变化: " + _0x5abd8e.toFixed(2) + "|");
  console.log("-".repeat(80));
  const _0x9350c6 = ["序号", "账户名称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x3c6334 = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x2bac2a = "|";
  _0x9350c6.forEach((_0x39b44c, _0x4d8c55) => {
    const _0x59504c = _0x3c6334[_0x4d8c55];
    _0x2bac2a += _0x39b44c.padStart(Math.floor((_0x59504c + _0x39b44c.length) / 2)).padEnd(_0x59504c) + "|";
  });
  console.log(_0x2bac2a);
  let _0x249038 = "|";
  _0x3c6334.forEach(_0x4c1822 => {
    _0x249038 += "-".repeat(_0x4c1822) + "|";
  });
  console.log(_0x249038);
  for (const _0x79412e of _0x20f129) {
    {
      let _0x523668 = "|";
      _0x523668 += String(_0x79412e.index).padStart(3).padEnd(_0x3c6334[0]) + "|";
      const _0x2ae180 = _0x79412e.nickname + (_0x79412e.coin_limit_exceeded ? " ⚠️" : "");
      _0x523668 += _0x2ae180.slice(0, _0x3c6334[1] - 2).padEnd(_0x3c6334[1]) + "|";
      _0x523668 += String(_0x79412e.initial_coin || 0).padEnd(_0x3c6334[2]) + "|";
      _0x523668 += String(_0x79412e.final_coin || 0).padEnd(_0x3c6334[3]) + "|";
      const _0x4232ac = _0x79412e.coin_change || 0,
        _0x4063dc = (_0x4232ac >= 0 ? "+" : "") + _0x4232ac;
      _0x523668 += _0x4063dc.padEnd(_0x3c6334[4]) + "|";
      _0x523668 += String(_0x79412e.initial_cash || 0).padEnd(_0x3c6334[5]) + "|";
      _0x523668 += String(_0x79412e.final_cash || 0).padEnd(_0x3c6334[6]) + "|";
      const _0x37fc97 = _0x79412e.cash_change || 0,
        _0x7803da = (_0x37fc97 >= 0 ? "+" : "") + _0x37fc97.toFixed(2);
      _0x523668 += _0x7803da.padEnd(_0x3c6334[7]) + "|";
      console.log(_0x523668);
    }
  }
  console.log("=".repeat(80));
  console.log("|" + "任务执行流程完毕，请查看详细结果".padStart(39).padEnd(79) + "|");
  console.log("=".repeat(80));
}
async function _0xd64e29() {
  if (_0x52f4b8 && _0x52f4b8.trim() && _0x902373 && _0x21d156) await _0x46cd0b();else {
    {
      if (!_0x52f4b8) {
        console.log("⚠️ 未设置卡密，跳过版本检查");
      } else !(_0x902373 && _0x21d156) && console.log("⚠️ 卡密服务未配置完整，跳过版本检查");
    }
  }
  await _0x34de9b();
  const _0x175a5f = _0x7aa724(),
    _0x25f363 = _0x175a5f.length,
    _0x278be0 = await _0x1e4bec("脚本启动");
  !_0x278be0 && (console.log("❌ 卡密验证失败，脚本终止运行"), process.exit(1));
  console.log("╔".padEnd(70, "═") + "╗");
  console.log("║" + "📢 购卡地址提示".padStart(35 + "📢 购卡地址提示".length / 2).padEnd(69) + "║");
  console.log("╠".padEnd(70, "═") + "╣");
  console.log("║  购卡地址: https://t.me/+U1IwSeGh-CA1Yjk1".padEnd(69) + "║");
  console.log("╚".padEnd(70, "═") + "╝");
  const _0x7dfed8 = _0x10288c(),
    _0x5e805b = {
      "box": "宝箱广告",
      "look": "看广告得金币",
      "box_extra": "饭补广告",
      "ss": "搜索广告"
    },
    _0x50b0de = _0x7dfed8.map(_0x38e2ce => _0x5e805b[_0x38e2ce] || _0x38e2ce),
    _0x1fdaa0 = _0x239a33(),
    _0x2bc67c = _0x2ae0b4(),
    _0x18be26 = _0x4ea6d7(),
    _0x5af014 = (process.env.KS_TASKS || "").trim(),
    _0x446ca2 = parseInt(process.env.KS_CONCURRENCY || "5", 10) || 5,
    _0x116969 = (process.env.KS_ROUND_TOTAL || "50").trim();
  let _0x58c871 = parseInt(_0x116969, 10);
  if (Number.isNaN(_0x58c871)) _0x58c871 = 50;
  const _0x308fd2 = _0x7dfed8.includes("look"),
    _0x35de2c = _0x7dfed8.includes("ss");
  let _0x260e5b = null,
    _0x69bb2a = null;
  _0x35de2c && (_0x260e5b = _0x207c77(), _0x69bb2a = _0x3ae5fd());
  console.log("".padEnd(80, "═"));
  console.log("📋 当前配置信息：");
  console.log("  账号数量: " + _0x25f363);
  console.log("  金币上限 (KS_COIN_LIMIT): " + _0x1fdaa0 + ((process.env.KS_COIN_LIMIT || "").trim() ? "" : " (默认)"));
  console.log("  轮次休息间隔 (KS_ROUND_REST_INTERVAL): " + _0x2bc67c + " 轮" + ((process.env.KS_ROUND_REST_INTERVAL || "").trim() ? "" : " (默认)"));
  console.log("  执行任务 (KS_TASKS): " + (_0x50b0de.join(", ") || "look"));
  console.log(_0x308fd2 ? "  广告追加 (KS_AD_APPEND / ggzj): " + (_0x18be26 ? "开启" : "关闭") : "  广告追加 (KS_AD_APPEND / ggzj): 未使用");
  _0x35de2c && (console.log("  搜索追加 (KS_SEARCH_APPEND / sszj): " + (_0x260e5b ? "开启" : "关闭")), console.log("  搜索广告次数 (KS_SEARCH_PER_ROUND / sscs): " + _0x69bb2a + " 次/轮"));
  console.log("  并发上限 (KS_CONCURRENCY): " + _0x446ca2);
  console.log("  轮次上限 (KS_ROUND_TOTAL): " + _0x58c871);
  console.log("".padEnd(80, "═"));
  if (_0x25f363 > _0x446ca2) {
    console.log("错误: 检测到 " + _0x25f363 + " 个账户配置，最大并发限制" + _0x446ca2 + "个");
    return;
  }
  if (!_0x175a5f.length) {
    {
      console.log("未发现有效账户配置");
      return;
    }
  }
  console.log("\n防黑并发：" + _0x446ca2 + "    防黑轮数：" + _0x58c871 + "\n");
  const _0x1aa038 = await _0x2763dc(_0x175a5f, _0x446ca2, _0x58c871),
    _0x1126fd = [];
  for (const _0x2823f4 of _0x1aa038) {
    if (_0x2823f4 && _0x2823f4.isTaskResult) _0x1126fd.push(_0x2823f4);else _0x2823f4 instanceof Error && console.log("任务执行过程异常: " + (_0x2823f4.message || _0x2823f4));
  }
  console.log("\n所有任务执行完毕。 ✅");
  console.log("\n" + "-".repeat(90) + " 账户信息汇总 " + "-".repeat(90));
  _0x4c9af5(_0x1126fd);
}
_0xd64e29().catch(_0x59ef06 => {
  console.log("主流程异常: " + (_0x59ef06.message || _0x59ef06));
});