//Fri Oct 18 2024 15:59:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x27c3ec = new _0x1b1c77("快手");
let _0x47ef7d = ["\n", "@", "&"],
  _0x4b5386,
  _0x55e261,
  _0x12a2ec,
  _0x335dca = (_0x27c3ec.isNode() ? process.env.ksCash : _0x27c3ec.getval("ksCash")) || "",
  _0x505fd1 = (_0x27c3ec.isNode() ? process.env.ksWithdrawTime : _0x27c3ec.getval("ksWithdrawTime")) || 9,
  _0x27a2be = (_0x27c3ec.isNode() ? process.env.ksAggressive : _0x27c3ec.getval("ksAggressive")) || 1,
  _0x252e2c = (_0x27c3ec.isNode() ? process.env.ksNotify : _0x27c3ec.getval("ksNotify")) || 1,
  _0x460b6d = (_0x27c3ec.isNode() ? process.env.ksCookie : _0x27c3ec.getdata("ksCookie")) || "",
  _0x419a77 = [],
  _0x409f20 = 0,
  _0x54e254 = 0,
  _0x151aad = [];
const _0x123575 = {
  sign: 12
};
let _0x73d9cc = new Date(),
  _0x358442 = _0x73d9cc.getHours(),
  _0x3bd620 = 5,
  _0x2310b8 = 1.06,
  _0x211c4d = 0,
  _0x28b87a = "ks",
  _0x392aa9 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x20684e = "https://127.0.0.1/";
class _0x437ae2 {
  constructor(_0x213643) {
    this.index = ++_0x409f20;
    this.name = this.index;
    this.valid = false;
    this.payType = _0x213643.indexOf("ksPayType") > -1 ? _0x213643.match(/ksPayType=(\w+)/)[1] : "";
    this.api_st = _0x213643.match(/kuaishou.api_st=([\w\-]+)/)[1];
    try {
      this.did = _0x213643.match(/[ ;]did=(\w+)/)[1];
    } catch (_0xbc39f0) {
      this.did = "ANDROID_" + _0x27c3ec.randomString(16);
      console.log("账号[" + this.index + "]没有找到did，将使用随机did");
    }
    this.cookie = "kpn=KUAISHOU; kpf=ANDROID_PHONE; c=OPPO; ver=10.2; appver=10.2.20.24402; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=3c2cd3f3; kuaishou.api_st=" + this.api_st + "; did=" + this.did + ";";
    this.bindAlipay = false;
    this.alipay = "";
    this.bindWechat = false;
    this.wechat = "";
    this.needSign = false;
    this.assisted = false;
  }
  async getUserInfo(_0x47d8de = false) {
    let _0x3d6505 = "https://encourage.kuaishou.com/rest/wd/encourage/home",
      _0x24739d = "",
      _0x2651eb = _0x46e354(_0x3d6505, this.cookie, _0x24739d);
    await _0x37dc35("get", _0x2651eb);
    let _0x216c51 = _0x4b5386;
    if (!_0x216c51) {
      return;
    }
    _0x216c51.result == 1 ? (this.valid = true, await this.getNickname(), this.cash = _0x216c51.data.cash, this.coin = _0x216c51.data.coin, _0x47d8de ? _0x27c3ec.logAndNotify("账号[" + this.name + "]账户余额" + this.cash + "元，" + this.coin + "金币") : console.log("账号[" + this.name + "]账户余额" + this.cash + "元，" + this.coin + "金币")) : _0x27c3ec.logAndNotify("账号[" + this.name + "]查询账户信息失败，CK失效：" + _0x216c51.error_msg);
  }
  async getNickname() {
    let _0x50f746 = "https://demeter.kuaishou.com/rest/n/demeter/qrcode?source=INVITE_PAGE",
      _0x8977ff = "",
      _0x4dc329 = _0x46e354(_0x50f746, this.cookie, _0x8977ff);
    await _0x37dc35("get", _0x4dc329);
    let _0x1690a8 = _0x4b5386;
    if (!_0x1690a8) {
      return;
    }
    _0x1690a8.result == 1 ? this.name = _0x1690a8.data.nickName : console.log("账号[" + this.name + "]获取昵称失败：" + _0x1690a8.error_msg);
  }
  async getSignInfo() {
    let _0x13b545 = "https://encourage.kuaishou.com/rest/wd/encourage/signIn/info",
      _0x18abd4 = "",
      _0x38b75a = _0x46e354(_0x13b545, this.cookie, _0x18abd4);
    await _0x37dc35("get", _0x38b75a);
    let _0x182fe9 = _0x4b5386;
    if (!_0x182fe9) {
      return;
    }
    if (_0x182fe9.result == 1) {
      if (_0x182fe9.data) {
        let _0x120213 = 0;
        if (_0x182fe9.data.cashSignInData) {
          let _0x13d3f7 = _0x182fe9.data.cashSignInData.currentDay;
          for (let _0x48129e of _0x182fe9.data.cashSignInData.tasks) {
            if (_0x48129e.signInDay == _0x13d3f7) {
              this.isSign = _0x48129e.status == 2;
              _0x120213 = _0x182fe9.data.cashSignInData.signInBizId;
              break;
            }
          }
        } else {
          this.isSign = _0x182fe9.data.todaySignInCompleted;
        }
        console.log("账号[" + this.name + "]今天" + (this.isSign ? "已" : "未") + "签到");
        this.isSign == false && (await this.doSign(_0x120213));
      }
    } else {
      console.log("账号[" + this.name + "]查询签到信息失败：" + _0x182fe9.error_msg);
    }
  }
  async friendAssist(_0x61683a) {
    try {
      let _0x3ee841 = "https://nebula.kuaishou.com/rest/zt/encourage/assistance/friendAssist",
        _0x33e6e0 = "{\"assistanceId\":\"" + _0x61683a + "\"}",
        _0x4cb0e7 = "kuaishou.api_st=" + this.api_st + "; did=" + this.did + "; kpn=NEBULA; kpf=ANDROID_PHONE; ver=10.2; appver=10.2.20.2998; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=2ac2a76d;",
        _0x386065 = _0x46e354(_0x3ee841, _0x4cb0e7, _0x33e6e0);
      _0x386065.headers["Content-Type"] = "application/json";
      await _0x37dc35("post", _0x386065);
      let _0x1d9ef9 = _0x4b5386;
      if (!_0x1d9ef9) {
        return;
      }
      if (_0x1d9ef9.result == 1) {
        this.assisted = true;
      } else {
        let _0x3ec0c1 = _0x1d9ef9.msg || _0x1d9ef9.error_msg;
        if (_0x3ec0c1.indexOf("每天只能给好友助力一次") > -1) {
          this.assisted = true;
        }
        if (_0x3ec0c1.indexOf("系统繁忙") > -1) {
          this.assisted = true;
        }
      }
    } catch (_0x2265b5) {
      console.log(_0x2265b5);
    } finally {}
  }
  async doAssist() {
    try {
      let _0x2f97ea = _0x151aad.length,
        _0x3295b9 = Math.floor(Math.random() * _0x2f97ea);
      for (let _0x380302 = 0; _0x380302 < _0x2f97ea && !this.assisted; _0x380302++) {
        let _0x522391 = (_0x3295b9 + _0x380302) % _0x2f97ea;
        await this.friendAssist(_0x151aad[_0x522391]);
      }
    } catch (_0x4378e4) {
      console.log(_0x4378e4);
    } finally {}
  }
  async doSign(_0x1fed78) {
    let _0x20d474 = "https://encourage.kuaishou.com/rest/wd/encourage/signIn/report",
      _0xc971fc = "{\"signInBizId\":" + _0x1fed78 + "}",
      _0x4731b1 = _0x46e354(_0x20d474, this.cookie, _0xc971fc);
    _0x4731b1.headers["Content-Type"] = "application/json";
    await _0x37dc35("post", _0x4731b1);
    let _0x208040 = _0x4b5386;
    if (!_0x208040) {
      return;
    }
    if (_0x208040.result == 1) {
      if (_0x208040.data.cashSignInData) {
        console.log("账号[" + this.name + "]签到获得：" + _0x208040.data.cashSignInData.rewardCount / 100 + "元");
      } else {
        _0x208040.data.dailySignInView ? _0x208040.data.dailySignInView.status == 1 ? console.log("账号[" + this.name + "]签到成功") : console.log("账号[" + this.name + "]签到失败：" + _0x208040.data.dailySignInView.toast) : console.log("账号[" + this.name + "]签到获得：" + _0x208040.data.popup.amount + "金币");
      }
    } else {
      console.log("账号[" + this.name + "]签到失败：" + _0x208040.error_msg);
    }
  }
  async treasureBoxInfo(_0x57cf67 = true) {
    let _0x49df73 = "https://encourage.kuaishou.com/rest/wd/encourage/treasureBox/info",
      _0x3352a8 = "",
      _0x2e3aec = _0x46e354(_0x49df73, this.cookie, _0x3352a8);
    await _0x37dc35("get", _0x2e3aec);
    let _0xcd8121 = _0x4b5386;
    if (!_0xcd8121) {
      return;
    }
    if (_0xcd8121.result == 1) {
      if (_0xcd8121.data) {
        if (_0xcd8121.data.status == 4) {
          console.log("账号[" + this.name + "]今天开宝箱次数已用完，明日可获得" + _0xcd8121.data.treasureRewardAmountEveryDay + "金币");
        } else {
          _0xcd8121.data.status == 3 ? await this.openBox(_0xcd8121.data.token) : console.log("账号[" + this.name + "]开宝箱冷却还有" + _0xcd8121.data.treasureCurrentTaskRemainSeconds + "秒，今日可获得" + _0xcd8121.data.treasureRewardAmountEveryDay + "金币");
        }
      } else {
        console.log("账号[" + this.name + "]查询宝箱状态失败，返回为空");
      }
    } else {
      console.log("账号[" + this.name + "]查询宝箱状态失败：" + _0xcd8121.error_msg);
    }
  }
  async openBox(_0x22e626) {
    let _0x5eea1c = "https://encourage.kuaishou.com/rest/wd/encourage/treasureBox/report",
      _0x3f2774 = "{\"taskToken\":\"" + _0x22e626 + "\"}",
      _0x450fc8 = _0x46e354(_0x5eea1c, this.cookie, _0x3f2774);
    _0x450fc8.headers["Content-Type"] = "application/json";
    await _0x37dc35("post", _0x450fc8);
    let _0x2ee5dc = _0x4b5386;
    if (!_0x2ee5dc) {
      return;
    }
    _0x2ee5dc.result == 1 ? (console.log("账号[" + this.name + "]开宝箱获得" + _0x2ee5dc.data.rewardCount + "金币"), await this.treasureBoxInfo(false)) : console.log("账号[" + this.name + "]开宝箱失败：" + _0x2ee5dc.error_msg);
  }
  async bindInfo() {
    let _0x3a3507 = "https://www.kuaishoupay.com/pay/account/h5/provider/bind_info",
      _0x30a569 = "account_group_key=INCENTIVE_CASH&bind_page_type=3",
      _0x28362f = _0x46e354(_0x3a3507, this.cookie, _0x30a569);
    await _0x37dc35("post", _0x28362f);
    let _0x4c6543 = _0x4b5386;
    if (!_0x4c6543) {
      return;
    }
    if (_0x4c6543.result == "SUCCESS") {
      let _0x3ac6a0 = "未绑定支付宝",
        _0x444cdb = "未绑定微信";
      _0x4c6543.alipay_bind == true && (this.bindAlipay = true, this.alipay = _0x4c6543.alipay_nick_name, _0x3ac6a0 = "已绑定支付宝[" + _0x4c6543.alipay_nick_name + "]");
      _0x4c6543.wechat_bind == true && (this.bindWechat = true, this.wechat = _0x4c6543.wechat_nick_name, _0x444cdb = "已绑定微信[" + _0x4c6543.wechat_nick_name + "]");
      console.log("账号[" + this.name + "]" + _0x444cdb + "，" + _0x3ac6a0);
    } else {
      console.log("账号[" + this.name + "]查询提现账号绑定情况失败：" + _0x4c6543.error_msg);
    }
  }
  async withdrawOld(_0x14ba15) {
    if (!this.alipay && !this.wechat) {
      console.log("账号[" + this.name + "]未绑定提现账号，不执行提现");
      return;
    }
    let _0x1573aa = this.alipay ? "ALIPAY" : "WECHAT",
      _0x283e0b = _0x1573aa == "ALIPAY" ? "支付宝" : "微信",
      _0x1c8567 = _0x1573aa == "ALIPAY" ? this.alipay : this.wechat;
    if (_0x27a2be == 1 && parseFloat(this.cash) >= 0.3) {
      _0x14ba15 = Math.floor(parseFloat(this.cash) * 10) / 10;
      _0x14ba15 > 50 && (_0x14ba15 = 50);
      console.log("账号[" + this.name + "]准备最大化提现，提现" + _0x14ba15 + "元");
    } else {
      if (parseFloat(this.cash) < _0x14ba15) {
        console.log("账号[" + this.name + "]账户余额不足" + _0x14ba15 + "元，不执行提现");
        return;
      }
    }
    let _0x416b75 = "https://www.kuaishoupay.com/pay/account/h5/withdraw/apply",
      _0x1a11f0 = "account_group_key=INCENTIVE_CASH&mobile_code=&fen=" + _0x14ba15 * 100 + "&provider=" + _0x1573aa + "&total_fen=" + _0x14ba15 * 100 + "&commission_fen=0&third_account=" + _0x1573aa + "&attach=&biz_content=&session_id=&bank_id=",
      _0x3ef37f = _0x46e354(_0x416b75, this.cookie, _0x1a11f0);
    await _0x37dc35("post", _0x3ef37f);
    let _0x1895ad = _0x4b5386;
    if (!_0x1895ad) {
      return;
    }
    _0x1895ad.result == "SUCCESS" ? _0x27c3ec.logAndNotify("账号[" + this.name + "]提现" + _0x14ba15 + "元到" + _0x283e0b + "[" + _0x1c8567 + "]成功") : _0x27c3ec.logAndNotify("账号[" + this.name + "]提现" + _0x14ba15 + "元到" + _0x283e0b + "[" + _0x1c8567 + "]失败：" + _0x1895ad.msg);
  }
  async withdraw(_0x3c6bd9) {
    if (!this.bindAlipay && !this.bindWechat) {
      _0x27c3ec.logAndNotify("账号[" + this.name + "]未绑定提现账号，不执行提现");
      return;
    }
    let _0x36da55 = this.bindWechat ? "WECHAT" : "ALIPAY";
    this.payType && (_0x36da55 = this.payType, console.log("账号[" + this.name + "]手动设置了提现渠道：" + this.payType));
    let _0x5609eb = _0x36da55 == "ALIPAY" ? "支付宝" : "微信",
      _0x2ea0a4 = _0x36da55 == "ALIPAY" ? this.alipay : this.wechat,
      _0x40c555 = "https://encourage.kuaishou.com/rest/wd/encourage/account/withdraw/external/apply",
      _0x4c367e = "{\"channel\":\"" + _0x36da55 + "\",\"amount\":" + _0x3c6bd9 + "}",
      _0x2d825a = "kuaishou.api_st=" + this.api_st + ";",
      _0x343bc8 = _0x46e354(_0x40c555, _0x2d825a, _0x4c367e);
    _0x343bc8.headers["Content-Type"] = "application/json";
    await _0x37dc35("post", _0x343bc8);
    let _0x5da1c9 = _0x4b5386;
    if (!_0x5da1c9) {
      return;
    }
    _0x5da1c9.result == 1 ? _0x27c3ec.logAndNotify("账号" + this.index + "[" + this.name + "]提现" + _0x3c6bd9 / 100 + "元到" + _0x5609eb + "[" + _0x2ea0a4 + "]成功") : _0x27c3ec.logAndNotify("账号" + this.index + "[" + this.name + "]提现" + _0x3c6bd9 / 100 + "元到" + _0x5609eb + "[" + _0x2ea0a4 + "]失败：" + _0x5da1c9.error_msg);
  }
  async withdrawOverview() {
    let _0x34fe42 = "https://encourage.kuaishou.com/rest/wd/encourage/account/withdraw/external/info",
      _0x2f61ba = "",
      _0x2dbd42 = _0x46e354(_0x34fe42, this.cookie, _0x2f61ba);
    await _0x37dc35("get", _0x2dbd42);
    let _0x4385df = _0x4b5386;
    if (!_0x4385df) {
      return;
    }
    if (_0x4385df.result == 1) {
      if (_0x4385df.data.account.limit == true) {
        console.log("账号[" + this.name + "]今天已提现");
        return;
      }
      let _0x427c10 = parseInt(_0x4385df.data.account.cashAvailableAmount);
      if (_0x27a2be == 1) {
        _0x427c10 < 30 ? _0x27c3ec.logAndNotify("账号[" + this.name + "]余额不足0.3元，不提现") : (_0x427c10 = _0x427c10 > 5000 ? 5000 : _0x427c10, _0x27c3ec.logAndNotify("账号[" + this.name + "]准备最大化提现" + _0x427c10 / 100 + "元"), await this.withdraw(_0x427c10));
      } else {
        if (!_0x335dca) {
          let _0x3509c5 = [5000, 2000, 1000, 300, 200, 30];
          for (let _0x4d6e89 of _0x3509c5) {
            if (_0x427c10 >= parseInt(_0x4d6e89)) {
              _0x27c3ec.logAndNotify("账号[" + this.name + "]准备提现" + _0x4d6e89 / 100 + "元");
              await this.withdraw(_0x4d6e89);
              return;
            }
          }
          _0x27c3ec.logAndNotify("账号[" + this.name + "]余额不足");
        } else {
          _0x427c10 >= parseFloat(_0x335dca) * 100 ? (_0x27c3ec.logAndNotify("账号[" + this.name + "]准备提现" + _0x335dca + "元"), await this.withdraw(parseFloat(_0x335dca) * 100)) : _0x27c3ec.logAndNotify("账号[" + this.name + "]余额不足" + _0x335dca + "元，不提现");
        }
      }
    } else {
      console.log("账号[" + this.name + "]查询提现列表失败：" + _0x4385df.error_msg);
    }
  }
  async taskList() {
    let _0x5b21cb = "https://encourage.kuaishou.com/rest/wd/encourage/task/list",
      _0x3d167c = "",
      _0x28d7f7 = _0x46e354(_0x5b21cb, this.cookie, _0x3d167c);
    await _0x37dc35("get", _0x28d7f7);
    let _0x335c9c = _0x4b5386;
    if (!_0x335c9c) {
      return;
    }
    if (_0x335c9c.result == 1) {
      for (let _0x26bc57 of _0x335c9c.data.dailyTasks.taskList) {
        if (_0x26bc57.taskId == _0x123575.sign) {
          this.needSign = true;
          continue;
        }
        _0x26bc57.status == 3 && (await this.taskReward(_0x26bc57.taskId));
      }
    } else {
      console.log("账号[" + this.name + "]查询任务列表失败：" + _0x335c9c.error_msg);
    }
  }
  async taskTake(_0x51dd45) {
    let _0x4a7ea8 = "https://encourage.kuaishou.com/rest/wd/encourage/task/take?taskId=" + _0x51dd45,
      _0xf75b92 = "",
      _0x3af24d = _0x46e354(_0x4a7ea8, this.cookie, _0xf75b92);
    await _0x37dc35("get", _0x3af24d);
    let _0x12d2eb = _0x4b5386;
    if (!_0x12d2eb) {
      return;
    }
    if (!(_0x12d2eb.result == 1)) {
      console.log("账号[" + this.name + "]开始任务[" + _0x51dd45 + "]失败：" + _0x12d2eb.error_msg);
    }
  }
  async taskReward(_0xebf01d) {
    let _0x9c5fd7 = "https://encourage.kuaishou.com/rest/wd/encourage/task/reward?taskId=" + _0xebf01d,
      _0x478e9f = "",
      _0xa211f7 = _0x46e354(_0x9c5fd7, this.cookie, _0x478e9f);
    await _0x37dc35("get", _0xa211f7);
    let _0x378385 = _0x4b5386;
    if (!_0x378385) {
      return;
    }
    _0x378385.result == 1 ? _0x378385.data.popup ? console.log("账号[" + this.name + "]领取任务[" + _0xebf01d + "]奖励获得" + _0x378385.data.popup.amount + "金币") : console.log("账号[" + this.name + "]领取任务[" + _0xebf01d + "]奖励失败：" + _0x378385.data.toast) : console.log("账号[" + this.name + "]领取任务[" + _0xebf01d + "]奖励失败：" + _0x378385.error_msg);
  }
  async resourcePanel() {
    let _0x159357 = "https://encourage.kuaishou.com/rest/wd/encourage/resourcePanel",
      _0x3fab19 = "{\"source\":\"pendant\"}",
      _0x3121a0 = _0x46e354(_0x159357, this.cookie, _0x3fab19);
    await _0x37dc35("post", _0x3121a0);
    let _0x5bf51b = _0x4b5386;
    if (!_0x5bf51b) {
      return;
    }
    _0x5bf51b.result == 1 ? _0x5bf51b.data.watchVideoExtraRewardPanel && _0x5bf51b.data.watchVideoExtraRewardPanel.status == 3 && (console.log("账号[" + this.name + "]可领取限时任务奖励"), await this.taskReward(_0x5bf51b.data.watchVideoExtraRewardPanel.taskId)) : console.log("账号[" + this.name + "]领取抽奖页定时奖励失败：" + _0x5bf51b.error_msg);
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x52e592();
  } else {
    await _0x29e9bd();
    if (_0x211c4d == false) {
      return;
    }
    await _0x53dd98();
    if (!(await _0x4243f7())) {
      return;
    }
    console.log("\n============== 登录 ==============");
    for (let _0xb0d7ba of _0x419a77) {
      await _0xb0d7ba.getUserInfo(false);
    }
    let _0x5587fc = _0x419a77.filter(_0x2bc230 => _0x2bc230.valid == true);
    if (_0x5587fc.length == 0) {
      await _0x27c3ec.showmsg();
      return;
    }
    for (let _0x3b0b77 of _0x5587fc) {
      console.log("\n=========== 账号[" + _0x3b0b77.name + "] ===========");
      await _0x3b0b77.getSignInfo();
      await _0x3b0b77.taskList();
      await _0x3b0b77.treasureBoxInfo();
      _0x3b0b77.needSign && (await _0x3b0b77.doSign(6));
      await _0x3b0b77.resourcePanel();
    }
    if (_0x151aad.length > 0) {
      for (let _0x12c02e of _0x5587fc) {
        await _0x12c02e.doAssist();
      }
    }
    console.log("\n============== 账户情况 ==============");
    for (let _0xd6f28b of _0x5587fc) {
      await _0xd6f28b.getUserInfo(true);
      await _0xd6f28b.bindInfo();
    }
    if (_0x358442 == _0x505fd1) {
      console.log("\n============== 自动提现 ==============");
      for (let _0x49bef1 of _0x5587fc) {
        await _0x49bef1.withdrawOverview();
      }
    } else {
      console.log("\n非提现时间，现在设置为" + _0x505fd1 + "点提现");
    }
    if (_0x252e2c == 2) {
      await _0x27c3ec.showmsg();
    } else {
      if (_0x252e2c == 1) {
        if (_0x358442 == _0x505fd1) {
          await _0x27c3ec.showmsg();
        }
      }
    }
  }
})().catch(_0x4ef19a => console.log(_0x4ef19a)).finally(() => _0x27c3ec.done());
async function _0x52e592() {
  if ($request.url.indexOf("appsupport/yoda/biz/info") > -1) {
    let _0x39f343 = $request.headers.Cookie.match(/(kuaishou.api_st=[\w\-]+)/)[1] + ";",
      _0x21faaf = $request.headers.Cookie.match(/[ ;](did=[\w\-]+)/)[1] + ";",
      _0x3d429a = _0x39f343 + " " + _0x21faaf;
    _0x460b6d ? _0x460b6d.indexOf(_0x39f343) == -1 && (_0x460b6d = _0x460b6d + "\n" + _0x3d429a, _0x27c3ec.setdata(_0x460b6d, "ksCookie"), ckList = _0x460b6d.split("\n"), _0x27c3ec.msg(jsname + (" 获取第" + ckList.length + "个ck成功: " + _0x3d429a))) : (_0x27c3ec.setdata(_0x3d429a, "ksCookie"), _0x27c3ec.msg(jsname + (" 获取第1个ck成功: " + _0x3d429a)));
  }
  if ($request.url.indexOf("ksapp/client/package/renew") > -1) {
    let _0x526b28 = $request.url.match(/(kuaishou.api_st=[\w\-]+)/)[1] + ";",
      _0x29a631 = $request.url.match(/[\?&](did=[\w\-]+)/)[1] + ";",
      _0x41a1fb = _0x526b28 + " " + _0x29a631;
    _0x460b6d ? _0x460b6d.indexOf(_0x526b28) == -1 && (_0x460b6d = _0x460b6d + "\n" + _0x41a1fb, _0x27c3ec.setdata(_0x460b6d, "ksCookie"), ckList = _0x460b6d.split("\n"), _0x27c3ec.msg(jsname + (" 获取第" + ckList.length + "个ck成功: " + _0x41a1fb))) : (_0x27c3ec.setdata(_0x41a1fb, "ksCookie"), _0x27c3ec.msg(jsname + (" 获取第1个ck成功: " + _0x41a1fb)));
  }
}
async function _0x4243f7() {
  if (_0x460b6d) {
    let _0x4f2e62 = _0x47ef7d[0];
    for (let _0xe4ece9 of _0x47ef7d) {
      if (_0x460b6d.indexOf(_0xe4ece9) > -1) {
        _0x4f2e62 = _0xe4ece9;
        break;
      }
    }
    for (let _0x33ce88 of _0x460b6d.split(_0x4f2e62)) {
      if (_0x33ce88) {
        _0x419a77.push(new _0x437ae2(_0x33ce88));
      }
    }
    _0x54e254 = _0x419a77.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x54e254 + "个账号");
  return true;
}
async function _0x29e9bd(_0x46c8d5 = 0) {
  const _0x238897 = {
    url: _0x392aa9
  };
  await _0x37dc35("get", _0x238897);
  let _0x2398d0 = _0x4b5386;
  if (!_0x2398d0) {
    if (_0x46c8d5 < _0x3bd620) {
      await _0x29e9bd(++_0x46c8d5);
    }
    return;
  }
  _0x2398d0?.["code"] == 0 && (_0x2398d0 = JSON.parse(_0x2398d0.data.file.data));
  _0x2398d0?.["commonNotify"] && _0x2398d0.commonNotify.length > 0 && _0x27c3ec.logAndNotify(_0x2398d0.commonNotify.join("\n") + "\n");
  _0x2398d0?.["commonMsg"] && _0x2398d0.commonMsg.length > 0 && console.log(_0x2398d0.commonMsg.join("\n") + "\n");
  if (_0x2398d0[_0x28b87a]) {
    let _0x1774eb = _0x2398d0[_0x28b87a];
    _0x1774eb.status == 0 ? _0x2310b8 >= _0x1774eb.version ? (_0x211c4d = true, _0x20684e = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x28b87a + "jsb.json", console.log(_0x1774eb.msg[_0x1774eb.status]), console.log(_0x1774eb.updateMsg), console.log("现在运行的脚本版本是：" + _0x2310b8 + "，最新脚本版本：" + _0x1774eb.latestVersion)) : console.log(_0x1774eb.versionMsg) : console.log(_0x1774eb.msg[_0x1774eb.status]);
  } else {
    console.log(_0x2398d0.errorMsg);
  }
}
async function _0x53dd98(_0x5ed7de = 0) {
  const _0xed5b14 = {
    url: _0x20684e
  };
  await _0x37dc35("get", _0xed5b14);
  let _0x470f85 = _0x4b5386;
  if (!_0x470f85) {
    if (_0x5ed7de < _0x3bd620) {
      await _0x53dd98(++_0x5ed7de);
    }
    return;
  }
  _0x470f85?.["code"] == 0 && (_0x470f85 = JSON.parse(_0x470f85.data.file.data));
  _0x151aad = _0x470f85.assistCode || [];
  return;
}
function _0x46e354(_0x5cae18, _0x7df927, _0x5d284e = "") {
  let _0x1f87ff = _0x5cae18.replace("//", "/").split("/")[1];
  const _0x2507af = {
    Host: _0x1f87ff,
    Cookie: _0x7df927,
    Connection: "keep-alive"
  };
  const _0x2fb06a = {
    url: _0x5cae18,
    headers: _0x2507af,
    timeout: 5000
  };
  _0x5d284e && (_0x2fb06a.body = _0x5d284e, _0x2fb06a.headers["Content-Type"] = "application/x-www-form-urlencoded");
  return _0x2fb06a;
}
async function _0x37dc35(_0x3bd232, _0x561299) {
  _0x4b5386 = null;
  _0x55e261 = null;
  _0x12a2ec = null;
  return new Promise(_0x4de326 => {
    _0x27c3ec.send(_0x3bd232, _0x561299, async (_0x22b2e0, _0x22eda4, _0x3e6c47) => {
      try {
        _0x55e261 = _0x22eda4;
        _0x12a2ec = _0x3e6c47;
        if (_0x22b2e0) {
          console.log(_0x3bd232 + "请求失败");
          console.log(JSON.stringify(_0x22b2e0));
        } else {
          if (_0x3e6c47.body) {
            if (typeof _0x3e6c47.body == "object") {
              _0x4b5386 = _0x3e6c47.body;
            } else {
              try {
                _0x4b5386 = JSON.parse(_0x3e6c47.body);
              } catch (_0x527ca1) {
                _0x4b5386 = _0x3e6c47.body;
              }
            }
          }
        }
      } catch (_0x714583) {
        console.log(_0x714583);
      } finally {
        _0x4de326();
      }
    });
  });
}
function _0x71edd3(_0x453d64, _0x4ff829, _0x5cc2f5, _0x15f04a, _0x4cc84e, _0xa77de6) {
  return CryptoJS[_0x453d64].encrypt(CryptoJS.enc.Utf8.parse(_0x15f04a), CryptoJS.enc.Utf8.parse(_0x4cc84e), {
    mode: CryptoJS.mode[_0x4ff829],
    padding: CryptoJS.pad[_0x5cc2f5],
    iv: CryptoJS.enc.Utf8.parse(_0xa77de6)
  }).ciphertext.toString(CryptoJS.enc.Base64);
}
function _0x4c5fdc(_0x227fef, _0x3915a1, _0x13f10f, _0x38d105, _0x490970, _0x26933b) {
  return CryptoJS[_0x227fef].decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(_0x38d105)
  }, CryptoJS.enc.Utf8.parse(_0x490970), {
    mode: CryptoJS.mode[_0x3915a1],
    padding: CryptoJS.pad[_0x13f10f],
    iv: CryptoJS.enc.Utf8.parse(_0x26933b)
  }).toString(CryptoJS.enc.Utf8);
}
var _0x4d44cf = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x4b8dd6) {
    var _0x2c5c72 = "",
      _0x32d06f,
      _0x5661cc,
      _0x3845fa,
      _0x3e5c40,
      _0x55dd05,
      _0x310d1b,
      _0x45723d,
      _0x37c539 = 0;
    _0x4b8dd6 = _0x4d44cf._utf8_encode(_0x4b8dd6);
    while (_0x37c539 < _0x4b8dd6.length) {
      _0x32d06f = _0x4b8dd6.charCodeAt(_0x37c539++);
      _0x5661cc = _0x4b8dd6.charCodeAt(_0x37c539++);
      _0x3845fa = _0x4b8dd6.charCodeAt(_0x37c539++);
      _0x3e5c40 = _0x32d06f >> 2;
      _0x55dd05 = (_0x32d06f & 3) << 4 | _0x5661cc >> 4;
      _0x310d1b = (_0x5661cc & 15) << 2 | _0x3845fa >> 6;
      _0x45723d = _0x3845fa & 63;
      if (isNaN(_0x5661cc)) {
        _0x310d1b = _0x45723d = 64;
      } else {
        isNaN(_0x3845fa) && (_0x45723d = 64);
      }
      _0x2c5c72 = _0x2c5c72 + this._keyStr.charAt(_0x3e5c40) + this._keyStr.charAt(_0x55dd05) + this._keyStr.charAt(_0x310d1b) + this._keyStr.charAt(_0x45723d);
    }
    return _0x2c5c72;
  },
  decode: function (_0x2e85bb) {
    var _0x4f1e89 = "";
    var _0x242152, _0x1e6e5f, _0x27be89;
    var _0x14b6e5, _0x590afd, _0x22258b, _0x2a1c99;
    var _0x4fbf5d = 0;
    _0x2e85bb = _0x2e85bb.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x4fbf5d < _0x2e85bb.length) {
      _0x14b6e5 = this._keyStr.indexOf(_0x2e85bb.charAt(_0x4fbf5d++));
      _0x590afd = this._keyStr.indexOf(_0x2e85bb.charAt(_0x4fbf5d++));
      _0x22258b = this._keyStr.indexOf(_0x2e85bb.charAt(_0x4fbf5d++));
      _0x2a1c99 = this._keyStr.indexOf(_0x2e85bb.charAt(_0x4fbf5d++));
      _0x242152 = _0x14b6e5 << 2 | _0x590afd >> 4;
      _0x1e6e5f = (_0x590afd & 15) << 4 | _0x22258b >> 2;
      _0x27be89 = (_0x22258b & 3) << 6 | _0x2a1c99;
      _0x4f1e89 = _0x4f1e89 + String.fromCharCode(_0x242152);
      _0x22258b != 64 && (_0x4f1e89 = _0x4f1e89 + String.fromCharCode(_0x1e6e5f));
      _0x2a1c99 != 64 && (_0x4f1e89 = _0x4f1e89 + String.fromCharCode(_0x27be89));
    }
    _0x4f1e89 = _0x4d44cf._utf8_decode(_0x4f1e89);
    return _0x4f1e89;
  },
  _utf8_encode: function (_0x3e1926) {
    _0x3e1926 = _0x3e1926.replace(/rn/g, "n");
    var _0xaed199 = "";
    for (var _0x3368a1 = 0; _0x3368a1 < _0x3e1926.length; _0x3368a1++) {
      var _0x180f97 = _0x3e1926.charCodeAt(_0x3368a1);
      if (_0x180f97 < 128) {
        _0xaed199 += String.fromCharCode(_0x180f97);
      } else {
        _0x180f97 > 127 && _0x180f97 < 2048 ? (_0xaed199 += String.fromCharCode(_0x180f97 >> 6 | 192), _0xaed199 += String.fromCharCode(_0x180f97 & 63 | 128)) : (_0xaed199 += String.fromCharCode(_0x180f97 >> 12 | 224), _0xaed199 += String.fromCharCode(_0x180f97 >> 6 & 63 | 128), _0xaed199 += String.fromCharCode(_0x180f97 & 63 | 128));
      }
    }
    return _0xaed199;
  },
  _utf8_decode: function (_0x2bfb8a) {
    c1 = c2 = 0;
    var _0xb06430 = "",
      _0x33f64c = 0,
      _0x490500 = c1;
    while (_0x33f64c < _0x2bfb8a.length) {
      _0x490500 = _0x2bfb8a.charCodeAt(_0x33f64c);
      if (_0x490500 < 128) {
        _0xb06430 += String.fromCharCode(_0x490500);
        _0x33f64c++;
      } else {
        _0x490500 > 191 && _0x490500 < 224 ? (c2 = _0x2bfb8a.charCodeAt(_0x33f64c + 1), _0xb06430 += String.fromCharCode((_0x490500 & 31) << 6 | c2 & 63), _0x33f64c += 2) : (c2 = _0x2bfb8a.charCodeAt(_0x33f64c + 1), c3 = _0x2bfb8a.charCodeAt(_0x33f64c + 2), _0xb06430 += String.fromCharCode((_0x490500 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x33f64c += 3);
      }
    }
    return _0xb06430;
  }
};
function _0x3ef3c4(_0xb60d68) {
  function _0x34a940(_0x30da3b, _0xba421c) {
    return _0x30da3b << _0xba421c | _0x30da3b >>> 32 - _0xba421c;
  }
  function _0x5199e2(_0x335e94, _0x4406d1) {
    var _0x14f05a, _0x4fe9db, _0x36dc27, _0x2e22e9, _0x35e2a8;
    _0x36dc27 = 2147483648 & _0x335e94;
    _0x2e22e9 = 2147483648 & _0x4406d1;
    _0x14f05a = 1073741824 & _0x335e94;
    _0x4fe9db = 1073741824 & _0x4406d1;
    _0x35e2a8 = (1073741823 & _0x335e94) + (1073741823 & _0x4406d1);
    return _0x14f05a & _0x4fe9db ? 2147483648 ^ _0x35e2a8 ^ _0x36dc27 ^ _0x2e22e9 : _0x14f05a | _0x4fe9db ? 1073741824 & _0x35e2a8 ? 3221225472 ^ _0x35e2a8 ^ _0x36dc27 ^ _0x2e22e9 : 1073741824 ^ _0x35e2a8 ^ _0x36dc27 ^ _0x2e22e9 : _0x35e2a8 ^ _0x36dc27 ^ _0x2e22e9;
  }
  function _0x8751de(_0x2d39a0, _0x30bcdc, _0x3d2207) {
    return _0x2d39a0 & _0x30bcdc | ~_0x2d39a0 & _0x3d2207;
  }
  function _0x49e8fa(_0xcec465, _0x403d83, _0x11c231) {
    return _0xcec465 & _0x11c231 | _0x403d83 & ~_0x11c231;
  }
  function _0x347609(_0x1e27f4, _0x3bb82b, _0x294814) {
    return _0x1e27f4 ^ _0x3bb82b ^ _0x294814;
  }
  function _0x13648a(_0x5475dc, _0x320aca, _0x2603d5) {
    return _0x320aca ^ (_0x5475dc | ~_0x2603d5);
  }
  function _0xbc4271(_0x2bfbcb, _0x1b339b, _0x3b9fd6, _0x1049ce, _0xc00968, _0x5d0c59, _0x46ff0b) {
    _0x2bfbcb = _0x5199e2(_0x2bfbcb, _0x5199e2(_0x5199e2(_0x8751de(_0x1b339b, _0x3b9fd6, _0x1049ce), _0xc00968), _0x46ff0b));
    return _0x5199e2(_0x34a940(_0x2bfbcb, _0x5d0c59), _0x1b339b);
  }
  function _0x117f96(_0x3c393b, _0x573f31, _0x1c2039, _0x575bdd, _0x23209d, _0x1c38ab, _0x110501) {
    _0x3c393b = _0x5199e2(_0x3c393b, _0x5199e2(_0x5199e2(_0x49e8fa(_0x573f31, _0x1c2039, _0x575bdd), _0x23209d), _0x110501));
    return _0x5199e2(_0x34a940(_0x3c393b, _0x1c38ab), _0x573f31);
  }
  function _0xd00921(_0x3e3284, _0xb0d520, _0x212f81, _0x59eead, _0x4ca1ff, _0x351e6d, _0x461d21) {
    _0x3e3284 = _0x5199e2(_0x3e3284, _0x5199e2(_0x5199e2(_0x347609(_0xb0d520, _0x212f81, _0x59eead), _0x4ca1ff), _0x461d21));
    return _0x5199e2(_0x34a940(_0x3e3284, _0x351e6d), _0xb0d520);
  }
  function _0x4c0127(_0x3372b0, _0x544959, _0x44ebd1, _0x81f1a3, _0x2484b9, _0x40048d, _0x3e924f) {
    _0x3372b0 = _0x5199e2(_0x3372b0, _0x5199e2(_0x5199e2(_0x13648a(_0x544959, _0x44ebd1, _0x81f1a3), _0x2484b9), _0x3e924f));
    return _0x5199e2(_0x34a940(_0x3372b0, _0x40048d), _0x544959);
  }
  function _0x4fe86e(_0x5ac5e3) {
    for (var _0x407b5f, _0x379d27 = _0x5ac5e3.length, _0x3ef12c = _0x379d27 + 8, _0x33f54c = (_0x3ef12c - _0x3ef12c % 64) / 64, _0x412ca0 = 16 * (_0x33f54c + 1), _0x5e6fa8 = new Array(_0x412ca0 - 1), _0x12b041 = 0, _0x3bac17 = 0; _0x379d27 > _0x3bac17;) {
      _0x407b5f = (_0x3bac17 - _0x3bac17 % 4) / 4;
      _0x12b041 = _0x3bac17 % 4 * 8;
      _0x5e6fa8[_0x407b5f] = _0x5e6fa8[_0x407b5f] | _0x5ac5e3.charCodeAt(_0x3bac17) << _0x12b041;
      _0x3bac17++;
    }
    _0x407b5f = (_0x3bac17 - _0x3bac17 % 4) / 4;
    _0x12b041 = _0x3bac17 % 4 * 8;
    _0x5e6fa8[_0x407b5f] = _0x5e6fa8[_0x407b5f] | 128 << _0x12b041;
    _0x5e6fa8[_0x412ca0 - 2] = _0x379d27 << 3;
    _0x5e6fa8[_0x412ca0 - 1] = _0x379d27 >>> 29;
    return _0x5e6fa8;
  }
  function _0x587343(_0x35650b) {
    var _0x134394,
      _0x4d66e8,
      _0x431075 = "",
      _0x4895cc = "";
    for (_0x4d66e8 = 0; 3 >= _0x4d66e8; _0x4d66e8++) {
      _0x134394 = _0x35650b >>> 8 * _0x4d66e8 & 255;
      _0x4895cc = "0" + _0x134394.toString(16);
      _0x431075 += _0x4895cc.substr(_0x4895cc.length - 2, 2);
    }
    return _0x431075;
  }
  function _0x1a54fc(_0x3e28ed) {
    _0x3e28ed = _0x3e28ed.replace(/\r\n/g, "\n");
    for (var _0x109aa7 = "", _0x14415e = 0; _0x14415e < _0x3e28ed.length; _0x14415e++) {
      var _0x504a4a = _0x3e28ed.charCodeAt(_0x14415e);
      128 > _0x504a4a ? _0x109aa7 += String.fromCharCode(_0x504a4a) : _0x504a4a > 127 && 2048 > _0x504a4a ? (_0x109aa7 += String.fromCharCode(_0x504a4a >> 6 | 192), _0x109aa7 += String.fromCharCode(63 & _0x504a4a | 128)) : (_0x109aa7 += String.fromCharCode(_0x504a4a >> 12 | 224), _0x109aa7 += String.fromCharCode(_0x504a4a >> 6 & 63 | 128), _0x109aa7 += String.fromCharCode(63 & _0x504a4a | 128));
    }
    return _0x109aa7;
  }
  var _0x29d931,
    _0x6bb906,
    _0x460c73,
    _0x4b8eea,
    _0x97a9f8,
    _0x4218eb,
    _0xaa4ea,
    _0x2b1a67,
    _0x1c80fa,
    _0x4baef3 = [],
    _0x54d373 = 7,
    _0x166a2d = 12,
    _0x5df820 = 17,
    _0x9dc400 = 22,
    _0x2dcf85 = 5,
    _0x5a2e69 = 9,
    _0x4ef79f = 14,
    _0x2db9cd = 20,
    _0x42810a = 4,
    _0x5969cb = 11,
    _0x39c4ba = 16,
    _0xd17adc = 23,
    _0x59040c = 6,
    _0x35ed91 = 10,
    _0x5aa880 = 15,
    _0x229e93 = 21;
  for (_0xb60d68 = _0x1a54fc(_0xb60d68), _0x4baef3 = _0x4fe86e(_0xb60d68), _0x4218eb = 1732584193, _0xaa4ea = 4023233417, _0x2b1a67 = 2562383102, _0x1c80fa = 271733878, _0x29d931 = 0; _0x29d931 < _0x4baef3.length; _0x29d931 += 16) {
    _0x6bb906 = _0x4218eb;
    _0x460c73 = _0xaa4ea;
    _0x4b8eea = _0x2b1a67;
    _0x97a9f8 = _0x1c80fa;
    _0x4218eb = _0xbc4271(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 0], _0x54d373, 3614090360);
    _0x1c80fa = _0xbc4271(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 1], _0x166a2d, 3905402710);
    _0x2b1a67 = _0xbc4271(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 2], _0x5df820, 606105819);
    _0xaa4ea = _0xbc4271(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 3], _0x9dc400, 3250441966);
    _0x4218eb = _0xbc4271(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 4], _0x54d373, 4118548399);
    _0x1c80fa = _0xbc4271(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 5], _0x166a2d, 1200080426);
    _0x2b1a67 = _0xbc4271(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 6], _0x5df820, 2821735955);
    _0xaa4ea = _0xbc4271(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 7], _0x9dc400, 4249261313);
    _0x4218eb = _0xbc4271(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 8], _0x54d373, 1770035416);
    _0x1c80fa = _0xbc4271(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 9], _0x166a2d, 2336552879);
    _0x2b1a67 = _0xbc4271(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 10], _0x5df820, 4294925233);
    _0xaa4ea = _0xbc4271(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 11], _0x9dc400, 2304563134);
    _0x4218eb = _0xbc4271(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 12], _0x54d373, 1804603682);
    _0x1c80fa = _0xbc4271(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 13], _0x166a2d, 4254626195);
    _0x2b1a67 = _0xbc4271(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 14], _0x5df820, 2792965006);
    _0xaa4ea = _0xbc4271(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 15], _0x9dc400, 1236535329);
    _0x4218eb = _0x117f96(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 1], _0x2dcf85, 4129170786);
    _0x1c80fa = _0x117f96(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 6], _0x5a2e69, 3225465664);
    _0x2b1a67 = _0x117f96(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 11], _0x4ef79f, 643717713);
    _0xaa4ea = _0x117f96(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 0], _0x2db9cd, 3921069994);
    _0x4218eb = _0x117f96(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 5], _0x2dcf85, 3593408605);
    _0x1c80fa = _0x117f96(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 10], _0x5a2e69, 38016083);
    _0x2b1a67 = _0x117f96(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 15], _0x4ef79f, 3634488961);
    _0xaa4ea = _0x117f96(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 4], _0x2db9cd, 3889429448);
    _0x4218eb = _0x117f96(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 9], _0x2dcf85, 568446438);
    _0x1c80fa = _0x117f96(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 14], _0x5a2e69, 3275163606);
    _0x2b1a67 = _0x117f96(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 3], _0x4ef79f, 4107603335);
    _0xaa4ea = _0x117f96(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 8], _0x2db9cd, 1163531501);
    _0x4218eb = _0x117f96(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 13], _0x2dcf85, 2850285829);
    _0x1c80fa = _0x117f96(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 2], _0x5a2e69, 4243563512);
    _0x2b1a67 = _0x117f96(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 7], _0x4ef79f, 1735328473);
    _0xaa4ea = _0x117f96(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 12], _0x2db9cd, 2368359562);
    _0x4218eb = _0xd00921(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 5], _0x42810a, 4294588738);
    _0x1c80fa = _0xd00921(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 8], _0x5969cb, 2272392833);
    _0x2b1a67 = _0xd00921(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 11], _0x39c4ba, 1839030562);
    _0xaa4ea = _0xd00921(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 14], _0xd17adc, 4259657740);
    _0x4218eb = _0xd00921(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 1], _0x42810a, 2763975236);
    _0x1c80fa = _0xd00921(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 4], _0x5969cb, 1272893353);
    _0x2b1a67 = _0xd00921(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 7], _0x39c4ba, 4139469664);
    _0xaa4ea = _0xd00921(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 10], _0xd17adc, 3200236656);
    _0x4218eb = _0xd00921(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 13], _0x42810a, 681279174);
    _0x1c80fa = _0xd00921(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 0], _0x5969cb, 3936430074);
    _0x2b1a67 = _0xd00921(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 3], _0x39c4ba, 3572445317);
    _0xaa4ea = _0xd00921(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 6], _0xd17adc, 76029189);
    _0x4218eb = _0xd00921(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 9], _0x42810a, 3654602809);
    _0x1c80fa = _0xd00921(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 12], _0x5969cb, 3873151461);
    _0x2b1a67 = _0xd00921(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 15], _0x39c4ba, 530742520);
    _0xaa4ea = _0xd00921(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 2], _0xd17adc, 3299628645);
    _0x4218eb = _0x4c0127(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 0], _0x59040c, 4096336452);
    _0x1c80fa = _0x4c0127(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 7], _0x35ed91, 1126891415);
    _0x2b1a67 = _0x4c0127(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 14], _0x5aa880, 2878612391);
    _0xaa4ea = _0x4c0127(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 5], _0x229e93, 4237533241);
    _0x4218eb = _0x4c0127(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 12], _0x59040c, 1700485571);
    _0x1c80fa = _0x4c0127(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 3], _0x35ed91, 2399980690);
    _0x2b1a67 = _0x4c0127(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 10], _0x5aa880, 4293915773);
    _0xaa4ea = _0x4c0127(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 1], _0x229e93, 2240044497);
    _0x4218eb = _0x4c0127(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 8], _0x59040c, 1873313359);
    _0x1c80fa = _0x4c0127(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 15], _0x35ed91, 4264355552);
    _0x2b1a67 = _0x4c0127(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 6], _0x5aa880, 2734768916);
    _0xaa4ea = _0x4c0127(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 13], _0x229e93, 1309151649);
    _0x4218eb = _0x4c0127(_0x4218eb, _0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4baef3[_0x29d931 + 4], _0x59040c, 4149444226);
    _0x1c80fa = _0x4c0127(_0x1c80fa, _0x4218eb, _0xaa4ea, _0x2b1a67, _0x4baef3[_0x29d931 + 11], _0x35ed91, 3174756917);
    _0x2b1a67 = _0x4c0127(_0x2b1a67, _0x1c80fa, _0x4218eb, _0xaa4ea, _0x4baef3[_0x29d931 + 2], _0x5aa880, 718787259);
    _0xaa4ea = _0x4c0127(_0xaa4ea, _0x2b1a67, _0x1c80fa, _0x4218eb, _0x4baef3[_0x29d931 + 9], _0x229e93, 3951481745);
    _0x4218eb = _0x5199e2(_0x4218eb, _0x6bb906);
    _0xaa4ea = _0x5199e2(_0xaa4ea, _0x460c73);
    _0x2b1a67 = _0x5199e2(_0x2b1a67, _0x4b8eea);
    _0x1c80fa = _0x5199e2(_0x1c80fa, _0x97a9f8);
  }
  var _0x48ec1d = _0x587343(_0x4218eb) + _0x587343(_0xaa4ea) + _0x587343(_0x2b1a67) + _0x587343(_0x1c80fa);
  return _0x48ec1d.toLowerCase();
}
function _0x154393(_0x220dfd) {
  function _0x242ba8(_0x1e74dd, _0x1ee1c9) {
    return (_0x1e74dd & 2147483647) + (_0x1ee1c9 & 2147483647) ^ _0x1e74dd & 2147483648 ^ _0x1ee1c9 & 2147483648;
  }
  function _0x49475e(_0x262f96) {
    var _0xee4bc1 = "0123456789abcdef",
      _0x157e36 = "";
    for (var _0x825c25 = 7; _0x825c25 >= 0; _0x825c25--) {
      _0x157e36 += _0xee4bc1.charAt(_0x262f96 >> _0x825c25 * 4 & 15);
    }
    return _0x157e36;
  }
  function _0x545ec1(_0xb541d2) {
    var _0x27e21e = (_0xb541d2.length + 8 >> 6) + 1,
      _0x4f033c = new Array(_0x27e21e * 16);
    for (var _0x274708 = 0; _0x274708 < _0x27e21e * 16; _0x274708++) {
      _0x4f033c[_0x274708] = 0;
    }
    for (_0x274708 = 0; _0x274708 < _0xb541d2.length; _0x274708++) {
      _0x4f033c[_0x274708 >> 2] |= _0xb541d2.charCodeAt(_0x274708) << 24 - (_0x274708 & 3) * 8;
    }
    _0x4f033c[_0x274708 >> 2] |= 128 << 24 - (_0x274708 & 3) * 8;
    _0x4f033c[_0x27e21e * 16 - 1] = _0xb541d2.length * 8;
    return _0x4f033c;
  }
  function _0x4a7022(_0x290545, _0x5d1c70) {
    return _0x290545 << _0x5d1c70 | _0x290545 >>> 32 - _0x5d1c70;
  }
  function _0x49c44e(_0x2271e0, _0x480149, _0x2cd4c7, _0x245c28) {
    if (_0x2271e0 < 20) {
      return _0x480149 & _0x2cd4c7 | ~_0x480149 & _0x245c28;
    }
    if (_0x2271e0 < 40) {
      return _0x480149 ^ _0x2cd4c7 ^ _0x245c28;
    }
    if (_0x2271e0 < 60) {
      return _0x480149 & _0x2cd4c7 | _0x480149 & _0x245c28 | _0x2cd4c7 & _0x245c28;
    }
    return _0x480149 ^ _0x2cd4c7 ^ _0x245c28;
  }
  function _0x5b525c(_0x1d2329) {
    return _0x1d2329 < 20 ? 1518500249 : _0x1d2329 < 40 ? 1859775393 : _0x1d2329 < 60 ? -1894007588 : -899497514;
  }
  var _0x4e7720 = _0x545ec1(_0x220dfd),
    _0x36fdd8 = new Array(80),
    _0x414b82 = 1732584193,
    _0x1fda9f = -271733879,
    _0x2756c5 = -1732584194,
    _0x2f2fbd = 271733878,
    _0x478c69 = -1009589776;
  for (var _0x58c6e7 = 0; _0x58c6e7 < _0x4e7720.length; _0x58c6e7 += 16) {
    var _0x487027 = _0x414b82,
      _0x303cdb = _0x1fda9f,
      _0x15241f = _0x2756c5,
      _0x43bfbd = _0x2f2fbd,
      _0x12694b = _0x478c69;
    for (var _0x52b81e = 0; _0x52b81e < 80; _0x52b81e++) {
      if (_0x52b81e < 16) {
        _0x36fdd8[_0x52b81e] = _0x4e7720[_0x58c6e7 + _0x52b81e];
      } else {
        _0x36fdd8[_0x52b81e] = _0x4a7022(_0x36fdd8[_0x52b81e - 3] ^ _0x36fdd8[_0x52b81e - 8] ^ _0x36fdd8[_0x52b81e - 14] ^ _0x36fdd8[_0x52b81e - 16], 1);
      }
      t = _0x242ba8(_0x242ba8(_0x4a7022(_0x414b82, 5), _0x49c44e(_0x52b81e, _0x1fda9f, _0x2756c5, _0x2f2fbd)), _0x242ba8(_0x242ba8(_0x478c69, _0x36fdd8[_0x52b81e]), _0x5b525c(_0x52b81e)));
      _0x478c69 = _0x2f2fbd;
      _0x2f2fbd = _0x2756c5;
      _0x2756c5 = _0x4a7022(_0x1fda9f, 30);
      _0x1fda9f = _0x414b82;
      _0x414b82 = t;
    }
    _0x414b82 = _0x242ba8(_0x414b82, _0x487027);
    _0x1fda9f = _0x242ba8(_0x1fda9f, _0x303cdb);
    _0x2756c5 = _0x242ba8(_0x2756c5, _0x15241f);
    _0x2f2fbd = _0x242ba8(_0x2f2fbd, _0x43bfbd);
    _0x478c69 = _0x242ba8(_0x478c69, _0x12694b);
  }
  SHA1Value = _0x49475e(_0x414b82) + _0x49475e(_0x1fda9f) + _0x49475e(_0x2756c5) + _0x49475e(_0x2f2fbd) + _0x49475e(_0x478c69);
  return SHA1Value;
}
function _0x2619b4(_0x4e1345) {
  const _0xb21442 = 8,
    _0x11a8e9 = 0;
  function _0x536151(_0x383fb9, _0x451d0b) {
    const _0x16ee13 = (65535 & _0x383fb9) + (65535 & _0x451d0b);
    return (_0x383fb9 >> 16) + (_0x451d0b >> 16) + (_0x16ee13 >> 16) << 16 | 65535 & _0x16ee13;
  }
  function _0x2d2a86(_0x7b4ca1, _0x542f77) {
    return _0x7b4ca1 >>> _0x542f77 | _0x7b4ca1 << 32 - _0x542f77;
  }
  function _0x141752(_0x2575c7, _0x496892) {
    return _0x2575c7 >>> _0x496892;
  }
  function _0x4c94cf(_0x4742ba, _0x3679f3, _0x20badc) {
    return _0x4742ba & _0x3679f3 ^ ~_0x4742ba & _0x20badc;
  }
  function _0x49e456(_0x2f3ac5, _0xc7ea65, _0x345baa) {
    return _0x2f3ac5 & _0xc7ea65 ^ _0x2f3ac5 & _0x345baa ^ _0xc7ea65 & _0x345baa;
  }
  function _0x5567ca(_0x49f47e) {
    return _0x2d2a86(_0x49f47e, 2) ^ _0x2d2a86(_0x49f47e, 13) ^ _0x2d2a86(_0x49f47e, 22);
  }
  function _0x1eb876(_0x2f057e) {
    return _0x2d2a86(_0x2f057e, 6) ^ _0x2d2a86(_0x2f057e, 11) ^ _0x2d2a86(_0x2f057e, 25);
  }
  function _0x41f18f(_0x3fcdf7) {
    return _0x2d2a86(_0x3fcdf7, 7) ^ _0x2d2a86(_0x3fcdf7, 18) ^ _0x141752(_0x3fcdf7, 3);
  }
  return function (_0x7b1839) {
    const _0x16b2c4 = _0x11a8e9 ? "0123456789ABCDEF" : "0123456789abcdef";
    let _0x528a7f = "";
    for (let _0x2f9e54 = 0; _0x2f9e54 < 4 * _0x7b1839.length; _0x2f9e54++) {
      _0x528a7f += _0x16b2c4.charAt(_0x7b1839[_0x2f9e54 >> 2] >> 8 * (3 - _0x2f9e54 % 4) + 4 & 15) + _0x16b2c4.charAt(_0x7b1839[_0x2f9e54 >> 2] >> 8 * (3 - _0x2f9e54 % 4) & 15);
    }
    return _0x528a7f;
  }(function (_0x4fe11f, _0xfd9a6e) {
    const _0x10c2ae = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      _0x20e733 = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      _0x344152 = new Array(64);
    let _0x494ef6, _0x2a7e1c, _0x31b58e, _0x47ef5d, _0x13f4f4, _0xd5114e, _0xc35c24, _0x40e492, _0x367360, _0x15cf99, _0x474a8c, _0x29e0ad;
    for (_0x4fe11f[_0xfd9a6e >> 5] |= 128 << 24 - _0xfd9a6e % 32, _0x4fe11f[15 + (_0xfd9a6e + 64 >> 9 << 4)] = _0xfd9a6e, _0x367360 = 0; _0x367360 < _0x4fe11f.length; _0x367360 += 16) {
      for (_0x494ef6 = _0x20e733[0], _0x2a7e1c = _0x20e733[1], _0x31b58e = _0x20e733[2], _0x47ef5d = _0x20e733[3], _0x13f4f4 = _0x20e733[4], _0xd5114e = _0x20e733[5], _0xc35c24 = _0x20e733[6], _0x40e492 = _0x20e733[7], _0x15cf99 = 0; _0x15cf99 < 64; _0x15cf99++) {
        _0x344152[_0x15cf99] = _0x15cf99 < 16 ? _0x4fe11f[_0x15cf99 + _0x367360] : _0x536151(_0x536151(_0x536151(_0x2d2a86(_0x3ab42e = _0x344152[_0x15cf99 - 2], 17) ^ _0x2d2a86(_0x3ab42e, 19) ^ _0x141752(_0x3ab42e, 10), _0x344152[_0x15cf99 - 7]), _0x41f18f(_0x344152[_0x15cf99 - 15])), _0x344152[_0x15cf99 - 16]);
        _0x474a8c = _0x536151(_0x536151(_0x536151(_0x536151(_0x40e492, _0x1eb876(_0x13f4f4)), _0x4c94cf(_0x13f4f4, _0xd5114e, _0xc35c24)), _0x10c2ae[_0x15cf99]), _0x344152[_0x15cf99]);
        _0x29e0ad = _0x536151(_0x5567ca(_0x494ef6), _0x49e456(_0x494ef6, _0x2a7e1c, _0x31b58e));
        _0x40e492 = _0xc35c24;
        _0xc35c24 = _0xd5114e;
        _0xd5114e = _0x13f4f4;
        _0x13f4f4 = _0x536151(_0x47ef5d, _0x474a8c);
        _0x47ef5d = _0x31b58e;
        _0x31b58e = _0x2a7e1c;
        _0x2a7e1c = _0x494ef6;
        _0x494ef6 = _0x536151(_0x474a8c, _0x29e0ad);
      }
      _0x20e733[0] = _0x536151(_0x494ef6, _0x20e733[0]);
      _0x20e733[1] = _0x536151(_0x2a7e1c, _0x20e733[1]);
      _0x20e733[2] = _0x536151(_0x31b58e, _0x20e733[2]);
      _0x20e733[3] = _0x536151(_0x47ef5d, _0x20e733[3]);
      _0x20e733[4] = _0x536151(_0x13f4f4, _0x20e733[4]);
      _0x20e733[5] = _0x536151(_0xd5114e, _0x20e733[5]);
      _0x20e733[6] = _0x536151(_0xc35c24, _0x20e733[6]);
      _0x20e733[7] = _0x536151(_0x40e492, _0x20e733[7]);
    }
    var _0x3ab42e;
    return _0x20e733;
  }(function (_0x507587) {
    const _0x2e7673 = [],
      _0x1707f0 = (1 << _0xb21442) - 1;
    for (let _0x18fe53 = 0; _0x18fe53 < _0x507587.length * _0xb21442; _0x18fe53 += _0xb21442) {
      _0x2e7673[_0x18fe53 >> 5] |= (_0x507587.charCodeAt(_0x18fe53 / _0xb21442) & _0x1707f0) << 24 - _0x18fe53 % 32;
    }
    return _0x2e7673;
  }(_0x4e1345 = function (_0x934f77) {
    _0x934f77 = _0x934f77.replace(/\r\n/g, "\n");
    let _0x2699f1 = "";
    for (let _0x403834 = 0; _0x403834 < _0x934f77.length; _0x403834++) {
      const _0x1e1f70 = _0x934f77.charCodeAt(_0x403834);
      _0x1e1f70 < 128 ? _0x2699f1 += String.fromCharCode(_0x1e1f70) : _0x1e1f70 > 127 && _0x1e1f70 < 2048 ? (_0x2699f1 += String.fromCharCode(_0x1e1f70 >> 6 | 192), _0x2699f1 += String.fromCharCode(63 & _0x1e1f70 | 128)) : (_0x2699f1 += String.fromCharCode(_0x1e1f70 >> 12 | 224), _0x2699f1 += String.fromCharCode(_0x1e1f70 >> 6 & 63 | 128), _0x2699f1 += String.fromCharCode(63 & _0x1e1f70 | 128));
    }
    return _0x2699f1;
  }(_0x4e1345)), _0x4e1345.length * _0xb21442));
}
function _0x1b1c77(_0x23da54, _0x41de2a) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x2b1989, _0x207113) {
      this.name = _0x2b1989;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x207113);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x1de6b4) {
      let _0x5f3839 = this.getval(_0x1de6b4);
      if (/^@/.test(_0x1de6b4)) {
        const [, _0x859882, _0x4b80ea] = /^@(.*?)\.(.*?)$/.exec(_0x1de6b4),
          _0x42c6f8 = _0x859882 ? this.getval(_0x859882) : "";
        if (_0x42c6f8) {
          try {
            const _0x43cc6a = JSON.parse(_0x42c6f8);
            _0x5f3839 = _0x43cc6a ? this.lodash_get(_0x43cc6a, _0x4b80ea, "") : _0x5f3839;
          } catch (_0x3e8f87) {
            _0x5f3839 = "";
          }
        }
      }
      return _0x5f3839;
    }
    setdata(_0x486e9a, _0x5c8dfd) {
      let _0x4c7bc5 = !1;
      if (/^@/.test(_0x5c8dfd)) {
        const [, _0x940310, _0x35d482] = /^@(.*?)\.(.*?)$/.exec(_0x5c8dfd),
          _0x20c6ec = this.getval(_0x940310),
          _0x538107 = _0x940310 ? "null" === _0x20c6ec ? null : _0x20c6ec || "{}" : "{}";
        try {
          const _0x1dc240 = JSON.parse(_0x538107);
          this.lodash_set(_0x1dc240, _0x35d482, _0x486e9a);
          _0x4c7bc5 = this.setval(JSON.stringify(_0x1dc240), _0x940310);
        } catch (_0x4f9423) {
          const _0x1006b8 = {};
          this.lodash_set(_0x1006b8, _0x35d482, _0x486e9a);
          _0x4c7bc5 = this.setval(JSON.stringify(_0x1006b8), _0x940310);
        }
      } else {
        _0x4c7bc5 = this.setval(_0x486e9a, _0x5c8dfd);
      }
      return _0x4c7bc5;
    }
    getval(_0x532489) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x532489) : this.isQuanX() ? $prefs.valueForKey(_0x532489) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x532489]) : this.data && this.data[_0x532489] || null;
    }
    setval(_0x56f82f, _0x1ee371) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x56f82f, _0x1ee371) : this.isQuanX() ? $prefs.setValueForKey(_0x56f82f, _0x1ee371) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1ee371] = _0x56f82f, this.writedata(), !0) : this.data && this.data[_0x1ee371] || null;
    }
    send(_0x26ebe1, _0xe0cb09, _0x1b44e7 = () => {}) {
      if (_0x26ebe1 != "get" && _0x26ebe1 != "post" && _0x26ebe1 != "put" && _0x26ebe1 != "delete") {
        console.log("无效的http方法：" + _0x26ebe1);
        return;
      }
      if (_0x26ebe1 == "get" && _0xe0cb09.headers) {
        delete _0xe0cb09.headers["Content-Type"];
        delete _0xe0cb09.headers["Content-Length"];
      } else {
        if (_0xe0cb09.body && _0xe0cb09.headers) {
          if (!_0xe0cb09.headers["Content-Type"]) {
            _0xe0cb09.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0xe0cb09.headers = _0xe0cb09.headers || {};
          const _0x13b544 = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0xe0cb09.headers, _0x13b544);
        }
        const _0x425af9 = {
          method: _0x26ebe1,
          url: _0xe0cb09.url,
          headers: _0xe0cb09.headers,
          timeout: _0xe0cb09.timeout,
          data: _0xe0cb09.body
        };
        if (_0x26ebe1 == "get") {
          delete _0x425af9.data;
        }
        $axios(_0x425af9).then(_0x1354f9 => {
          const {
              status: _0x596a89,
              request: _0x8fdba4,
              headers: _0x102393,
              data: _0x278b9a
            } = _0x1354f9,
            _0x3b6d68 = {
              statusCode: _0x596a89,
              headers: _0x102393,
              body: _0x278b9a
            };
          _0x1b44e7(null, _0x8fdba4, _0x3b6d68);
        }).catch(_0x30f8cd => console.log(_0x30f8cd));
      } else {
        if (this.isQuanX()) {
          const _0x351f0f = {
            hints: !1
          };
          _0xe0cb09.method = _0x26ebe1.toUpperCase();
          this.isNeedRewrite && (_0xe0cb09.opts = _0xe0cb09.opts || {}, Object.assign(_0xe0cb09.opts, _0x351f0f));
          $task.fetch(_0xe0cb09).then(_0x23414a => {
            const {
                statusCode: _0x4af4e3,
                request: _0x18d544,
                headers: _0x194414,
                body: _0x3828e6
              } = _0x23414a,
              _0x362f99 = {
                statusCode: _0x4af4e3,
                headers: _0x194414,
                body: _0x3828e6
              };
            _0x1b44e7(null, _0x18d544, _0x362f99);
          }, _0x4d5a44 => _0x1b44e7(_0x4d5a44));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x3b7645,
                ..._0x420acc
              } = _0xe0cb09,
              _0x742582 = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x742582);
            this.instance[_0x26ebe1](_0x3b7645, _0x420acc).then(_0x19d537 => {
              const {
                  statusCode: _0x475806,
                  request: _0x543b8d,
                  headers: _0x331682,
                  body: _0x5d4c2b
                } = _0x19d537,
                _0x3feadf = {
                  statusCode: _0x475806,
                  headers: _0x331682,
                  body: _0x5d4c2b
                };
              _0x1b44e7(null, _0x543b8d, _0x3feadf);
            }, _0x51c786 => {
              const {
                message: _0x19153c,
                response: _0x1da7c4
              } = _0x51c786;
              _0x1b44e7(_0x19153c, _0x1da7c4, _0x1da7c4 && _0x1da7c4.body);
            });
          }
        }
      }
    }
    time(_0x132f4d) {
      let _0x4837e8 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x132f4d) && (_0x132f4d = _0x132f4d.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x5a309f in _0x4837e8) new RegExp("(" + _0x5a309f + ")").test(_0x132f4d) && (_0x132f4d = _0x132f4d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4837e8[_0x5a309f] : ("00" + _0x4837e8[_0x5a309f]).substr(("" + _0x4837e8[_0x5a309f]).length)));
      return _0x132f4d;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x30feb2 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x27c3ec.isNode()) {
        var _0x58162e = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x58162e.sendNotify(this.name, _0x30feb2);
      } else {
        this.msg(_0x30feb2);
      }
    }
    logAndNotify(_0xe27bf4) {
      console.log(_0xe27bf4);
      this.notifyStr += _0xe27bf4;
      this.notifyStr += "\n";
    }
    msg(_0x5720bf = t, _0x2fc71c = "", _0x5c466c = "", _0x5705eb) {
      const _0x37ee33 = _0x272206 => {
        if (!_0x272206) {
          return _0x272206;
        }
        if ("string" == typeof _0x272206) {
          return this.isLoon() ? _0x272206 : this.isQuanX() ? {
            "open-url": _0x272206
          } : this.isSurge() ? {
            url: _0x272206
          } : void 0;
        }
        if ("object" == typeof _0x272206) {
          if (this.isLoon()) {
            let _0x20f3e8 = _0x272206.openUrl || _0x272206.url || _0x272206["open-url"],
              _0xa06154 = _0x272206.mediaUrl || _0x272206["media-url"];
            const _0x261c5e = {
              openUrl: _0x20f3e8,
              mediaUrl: _0xa06154
            };
            return _0x261c5e;
          }
          if (this.isQuanX()) {
            let _0x44a881 = _0x272206["open-url"] || _0x272206.url || _0x272206.openUrl,
              _0x489ab9 = _0x272206["media-url"] || _0x272206.mediaUrl;
            const _0x3ac4fa = {
              "open-url": _0x44a881,
              "media-url": _0x489ab9
            };
            return _0x3ac4fa;
          }
          if (this.isSurge()) {
            let _0x4293c2 = _0x272206.url || _0x272206.openUrl || _0x272206["open-url"];
            const _0x336141 = {
              url: _0x4293c2
            };
            return _0x336141;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x5720bf, _0x2fc71c, _0x5c466c, _0x37ee33(_0x5705eb)) : this.isQuanX() && $notify(_0x5720bf, _0x2fc71c, _0x5c466c, _0x37ee33(_0x5705eb)));
      let _0x560a3e = ["", "============== 系统通知 =============="];
      _0x560a3e.push(_0x5720bf);
      _0x2fc71c && _0x560a3e.push(_0x2fc71c);
      _0x5c466c && _0x560a3e.push(_0x5c466c);
      console.log(_0x560a3e.join("\n"));
    }
    getMin(_0x9f0bda, _0x264681) {
      return _0x9f0bda < _0x264681 ? _0x9f0bda : _0x264681;
    }
    getMax(_0x1e9cdc, _0x2e7906) {
      return _0x1e9cdc < _0x2e7906 ? _0x2e7906 : _0x1e9cdc;
    }
    padStr(_0x1801f8, _0x399840, _0x3bdc0d = "0") {
      let _0x27146d = String(_0x1801f8),
        _0x356ee9 = _0x399840 > _0x27146d.length ? _0x399840 - _0x27146d.length : 0,
        _0x16881e = "";
      for (let _0x4a746a = 0; _0x4a746a < _0x356ee9; _0x4a746a++) {
        _0x16881e += _0x3bdc0d;
      }
      _0x16881e += _0x27146d;
      return _0x16881e;
    }
    json2str(_0x25b49d, _0x224f46, _0x4cef21 = false) {
      let _0x4621e1 = [];
      for (let _0x204a60 of Object.keys(_0x25b49d).sort()) {
        let _0x10760d = _0x25b49d[_0x204a60];
        if (_0x10760d && _0x4cef21) {
          _0x10760d = encodeURIComponent(_0x10760d);
        }
        _0x4621e1.push(_0x204a60 + "=" + _0x10760d);
      }
      return _0x4621e1.join(_0x224f46);
    }
    str2json(_0x4a1dd0, _0x16d211 = false) {
      let _0x1cef00 = {};
      for (let _0x348b51 of _0x4a1dd0.split("&")) {
        if (!_0x348b51) {
          continue;
        }
        let _0x40894a = _0x348b51.indexOf("=");
        if (_0x40894a == -1) {
          continue;
        }
        let _0x25634b = _0x348b51.substr(0, _0x40894a),
          _0x1c4c7a = _0x348b51.substr(_0x40894a + 1);
        if (_0x16d211) {
          _0x1c4c7a = decodeURIComponent(_0x1c4c7a);
        }
        _0x1cef00[_0x25634b] = _0x1c4c7a;
      }
      return _0x1cef00;
    }
    randomString(_0x21cbd4, _0x5a3b3f = "abcdef0123456789") {
      let _0x48cd6b = "";
      for (let _0x5c2f5f = 0; _0x5c2f5f < _0x21cbd4; _0x5c2f5f++) {
        _0x48cd6b += _0x5a3b3f.charAt(Math.floor(Math.random() * _0x5a3b3f.length));
      }
      return _0x48cd6b;
    }
    randomList(_0x2db296) {
      let _0x2620bf = Math.floor(Math.random() * _0x2db296.length);
      return _0x2db296[_0x2620bf];
    }
    wait(_0x2895e5) {
      return new Promise(_0x1b9077 => setTimeout(_0x1b9077, _0x2895e5));
    }
    done(_0x4b4773 = {}) {
      const _0x239fae = new Date().getTime(),
        _0x430409 = (_0x239fae - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x430409 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x4b4773);
      }
    }
  }(_0x23da54, _0x41de2a);
}