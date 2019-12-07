// pages/me/order/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupon: '1',
    couponList: [
      { label: '满800减￥61', value: '1', checked: 'true' },
      { label: '满800减￥62', value: '2', checked: 'true' },
      { label: '满800减￥63', value: '3', checked: 'true' },
      { label: '满800减￥64', value: '4', checked: 'true' }
    ],
    modalName: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      modalName: null,
      coupon: e.detail.value
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的订单'
    })
  },
  showModal: function (e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal: function (e) {
    this.setData({
      modalName: null
    })
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

  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      coupon: ''
    })
  },
  couponChange: function (e) {
    this.setData({
      coupon: e.detail.value
    })
  }
})