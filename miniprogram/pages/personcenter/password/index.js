const com = require('../../../commons/constant');
const { updatePassWord, userLogout } = require('../../../commons/sApi')
const { userInfoKey, userAuthKey, openidKey } = require('../../../commons/config')
const { removeStorageSync, getStorageSync } = require('../../../commons/utils')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    passwords: com.passwords
  },
  handlerGobackClick() {
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  async save() {
    const _that = this
    let _param = {}
    _that.data.passwords.map(x => {
      _param[x.attrKey] = x.value
    })
    if (_param.password !== _param.repeatPassword) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'none'
      })
      return
    }
    const result = await updatePassWord(_param)
    result && this.cleanUpUserCache()
  },
  async cleanUpUserCache() {
    const userToken = getStorageSync(userAuthKey)
    const openid = getStorageSync(openidKey)
    const result = await userLogout(userToken, openid)
    if (result) {
      removeStorageSync(userInfoKey)
      removeStorageSync(userAuthKey)
      wx.switchTab({
        url: '/pages/realtime/index'
      })
      wx.$eventBus.$emit('refresh_ship')
    }
  },
  onInputChange(e) {
    const _that = this
    const cells = _that.data.passwords
    const item = e.detail
    _that.setData({
      passwords: cells.map(x => {
        if (x.attrKey === item.attrKey) {
          x.value = item.newValue
        }
        return x
      })
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

  }
})