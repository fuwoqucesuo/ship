// miniprogram/pages/voyage/list/list.js
const { findTrackPage } = require('../../../commons/sApi');
const uitl = require('../../../commons/utils');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    voyages: [1, 2, 3, 4, 5, 6, 7],
    startDate: '2020-01-01',
    endDate: uitl.formatTime(new Date(), '-', false),
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initFun()
  },
  handlerGobackClick() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  initFun(){
    findTrackPage({
      startDate: this.data.startDate,
      endDate: this.data.endDate
    }).then( res => {
        const { records } = res || {}
        this.setData({
          list: records.map((x, index) => {
            x.isOpen = false
            x.index = index + 1
            return x
          })
        })
        console.log(res)
    })					
  },
  onSwitchClick(e) {
    const _that = this
    const { detail } = e || {}
    console.log(detail);
    
    _that.setData({
      list: _that.data.list.map(x => {
        if (x.index === detail.pkid) {
          x.isOpen = detail.isOpen
        }
        return x
      })
    })
    console.log(e)
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