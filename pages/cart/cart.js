// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listor: [{ num: 0, pic: 'http://img.lookcss.com/bg.png' },
    { num: 0, pic: 'http://img.lookcss.com/bg' }]
  },
  add: function (e) {
    const index = e.currentTarget.dataset.index;//索引
    let num = this.data.listor[index].num;//当前值
    num = num + 1;//自增
    this.data.listor[index].num = num;
     this.setData({

    listor: this.data.listor

      })


  },
  min: function (e) {
    const index = e.currentTarget.dataset.index;
    let list = this.data.listor;
    let num = list[index].num;    
    
    if (num < 1) {
      return false;
    }
    num = num - 1;
    list[index].num = num;
    this.setData({

      listor: list

    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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