// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      image:'',
      name:'',
  },
  goToAddress:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    try {
      const value = wx.getStorageSync('name')
      if (value) {
          this.setData({
            name:value
          })
      }
    } catch (e) {
      // Do something when catch error
    }
    try {
      const value = wx.getStorageSync('headImage')
      if (value) {
        this.setData({
          image: value
        })
      }else{
        this.setData({
          image: 'http://img.52z.com/upload/news/image/20171129/20171129123259_92718.jpg'
        })
      }
    } catch (e) {
      // Do something when catch error
    }
  },
  bindViewTap:function(){
    wx.navigateTo({
      url: '../editUser/editUser',
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
    try {
      const value = wx.getStorageSync('name')
      if (value) {
        this.setData({
          name: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    try {
      const value = wx.getStorageSync('headImage')
      if (value) {
        this.setData({
          image: value
        })
      }else{
        this.setData({
          image: 'http://img.52z.com/upload/news/image/20171129/20171129123259_92718.jpg'
        })
      }
    } catch (e) {
      // Do something when catch error
    }
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