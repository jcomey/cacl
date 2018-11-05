// pages/cacl/cacl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jq: '',
    jqtax: '',
    cc: '',
    cctax: '',
    sy: '',
    sytax: '',
    total: '',
    jfbf: '',
    jffl: 0,
    yongjin: '',
    jffljq: 0,
    jfflcc: 0,
    jfflsy: 0,
    showview: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {



  },
  getjqNum: function (e) {



    this.setData({
      jq: e.detail.value
    })

    this.cacl()
  },
  getjqtax: function (e) {



    this.setData({
      jqtax: e.detail.value
    })

    this.cacl()
  },
  getcc: function (e) {

    this.setData({
      cc: e.detail.value
    })



    this.cacl()

  },
  getcctax: function (e) {


    this.setData({
      cctax: e.detail.value
    })



    this.cacl()
  },
  getsy: function (e) {

    this.setData({
      sy: e.detail.value
    })



    this.cacl()

  },
  getsytax: function (e) {


    this.setData({
      sytax: e.detail.value
    })


    this.cacl()


  },



  cacl: function () {

    var that = this;
    var a = that.data.jq * 1
    var b = that.data.cc * 1
    var c = that.data.sy * 1
    var d = that.data.jqtax * 0.01
    var e = that.data.cctax * 0.01
    var f = that.data.sytax * 0.01
    var jfbfjq = (a - (a * d)).toFixed(2);
    var jfbfcc = (b - (b * e)).toFixed(2);
    var jfbfsy = (c - (c * f)).toFixed(2);
    var jingfen = (jfbfjq * 1 + jfbfcc * 1 + jfbfsy * 1).toFixed(2);
    var jffljq = (a - (a / 1.06) * d).toFixed(2);
    var jfflcc = (b - b * e).toFixed(2);
    var jfflsy = (c - (c / 1.06) * f).toFixed(2);
    var jffl = (jffljq * 1 + jfflcc * 1 + jfflsy * 1).toFixed(2);
    var total = (a + b + c).toFixed(2);
    var yj = (total - jffl).toFixed(2);
    var yongjin = (total - jingfen).toFixed(2);
    console.log(that.data)
    that.setData({
      showview: true,
      total: total,
      jfbfjq: jfbfjq,
      jfbfcc: jfbfcc,
      jfbfsy: jfbfsy,
      jingfen: jingfen,
      yongjin: yongjin,
      jffljq: jffljq,
      jfflcc: jfflcc,
      jfflsy: jfflsy,
      jffl: jffl,
      yj: yj
    })


  },
  clear: function () {



  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})