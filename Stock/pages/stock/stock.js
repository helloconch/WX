// pages/stock/stock.js
const util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    stockValue: 18.88,
    upValue1: 0,
    upValue2: 0,
    upValue3: 0,
    upValue4: 0,
    upValue5: 0,
    upValue6: 0,
    upValue7: 0,
    upValue8: 0,
    upValue9: 0,
    upValue10: 0,
    downValue1: 0,
    downValue2: 0,
    downValue3: 0,
    downValue4: 0,
    downValue5: 0,
    downValue6: 0,
    downValue7: 0,
    downValue8: 0,
    downValue9: 0,
    downpValue10: 0
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
    this.calc()
  },

  calc:function(e){
    this.setData({
      upValue1: util.calcStock(this.data.stockValue, 1.01),
      upValue2: util.calcStock(this.data.stockValue, 1.02),
      upValue3: util.calcStock(this.data.stockValue, 1.03),
      upValue4: util.calcStock(this.data.stockValue, 1.04),
      upValue5: util.calcStock(this.data.stockValue, 1.05),
      upValue6: util.calcStock(this.data.stockValue, 1.06),
      upValue7: util.calcStock(this.data.stockValue, 1.07),
      upValue8: util.calcStock(this.data.stockValue, 1.08),
      upValue9: util.calcStock(this.data.stockValue, 1.09),
      upValue10: util.calcStock(this.data.stockValue, 1.1),

      downValue1: util.calcStock(this.data.stockValue, 0.99),
      downValue2: util.calcStock(this.data.stockValue, 0.98),
      downValue3: util.calcStock(this.data.stockValue, 0.97),
      downValue4: util.calcStock(this.data.stockValue, 0.96),
      downValue5: util.calcStock(this.data.stockValue, 0.95),
      downValue6: util.calcStock(this.data.stockValue, 0.94),
      downValue7: util.calcStock(this.data.stockValue, 0.93),
      downValue8: util.calcStock(this.data.stockValue, 0.92),
      downValue9: util.calcStock(this.data.stockValue, 0.91),
      downValue10: util.calcStock(this.data.stockValue, 0.9)
    })
  },

  stockInputValue:function(e){
   this.setData({
     stockValue: e.detail.value
   })
   this.calc()
  },
  calcStockValue:function(e){
    this.calc()
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