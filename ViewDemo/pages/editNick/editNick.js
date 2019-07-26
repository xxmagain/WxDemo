// pages/editNick/editNick.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nick:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nick: options.nick
    })
  },
  bindNick(e){
    this.setData({
      nick: e.detail.value
    })
  },
  saveNick:function(){
    if(this.data.nick){
      wx.setStorage({
        key: "name",
        data: this.data.nick,
        success: function () {
          wx.showToast({
            title: '修改成功',
            duration: 1500,
            icon: 'none',
          })
          wx.navigateBack({
            delta: 1,
          })
        },
        fail: function () {
          console.log('写入value1发生错误')
        }
      })
    }else{
      wx.showToast({
        title: '请输入要修改的昵称',
        duration:1500,
        icon:'none',
      })
    }
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