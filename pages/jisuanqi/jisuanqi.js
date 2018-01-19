//jisuanqi.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    xiaochegnxu:'xiaochengxu',
    all_num:0,
    num:10,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  clickMe: function() {
      this.setData({ all_num: this.data.num })
  },
  clickNum1:function(){
      this.setData({ all_num: 1 })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },

})
