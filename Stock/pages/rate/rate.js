// pages/rate/rate.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rateDescription:'',
    rateDescription2:'当A点位于最高点【下跌波段或下跌浪出现超跌】',
    rate_38:0,
    rate_50:0,
    rate_62:0,
    aValue:0,
    bValue:0,
    rate_382:0,
    rate_500:0,
    rate_quit:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calc()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  inputAValue: function (e) {
    this.setData({
      aValue: e.detail.value
    })
    this.calc()
  },
  inputBValue: function (e) {
    this.setData({
      bValue: e.detail.value
    })
    this.calc()
  },
  calc: function (e) {
    this.setData({
      rateDescription: util.calcRateDescription(this.data.aValue, this.data.bValue),
      rate_38: util.calcRate(this.data.aValue, this.data.bValue,0.382),
      rate_50: util.calcRate(this.data.aValue, this.data.bValue, 0.5),
      rate_62: util.calcRate(this.data.aValue, this.data.bValue, 0.628),
      rate_382: util.calcReduceRate(this.data.aValue,0.382),
      rate_500: util.calcReduceRate(this.data.aValue, 0.5),
      rate_quit: util.calcReduceRate(this.data.aValue*0.5, 0.1)
    })
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