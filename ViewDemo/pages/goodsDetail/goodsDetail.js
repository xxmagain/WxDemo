// pages/goodsDetail/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    duration: "500",
    imgUrls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556258828661&di=23d9d096d28455e88bdb9b056c8fcae6&imgtype=0&src=http%3A%2F%2Fycimg.woofeng.cn%2F20180704%2F20180704121440_22619.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556674188&di=f2694330a8e44b8e3cb97525e2dfbc96&imgtype=jpg&er=1&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150430%2Ftooopen_sy_121005835886.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556079483689&di=b7f3a1a2054832373ea21182e180d64d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8877744c714e041862f51d2d6b39cbb46cf660d740a7-SBPl1k_fw658'
    ],
    current: 0,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
          type: 'text',
          text: '品牌名称：雅诗兰黛'
        }, {
          name: 'img',
          attrs: {
            src: 'https://img.alicdn.com/imgextra/i2/2064892827/O1CN01nWIdHM1WkoCKEKPS7_!!2064892827.jpg',
            width: '100%;'
          }
        }, {
          name: 'img',
          attrs: {
            src: 'https://img.alicdn.com/imgextra/i1/2064892827/O1CN01qt5D8E1WkoB9PTFVa_!!2064892827.jpg',
            width: '100%;'
          }
        },
        {
          name: 'img',
          attrs: {
            src: 'https://img.alicdn.com/imgextra/i2/2064892827/O1CN01fts0U01WkoB6xVZSC_!!2064892827.jpg',
            width: '100%;'
          }
        }
      ]
    }]
  },
  swiperChange: function(e) {
    var that = this;
    that.setData({
      current: e.detail.current
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
    this.setData({
      imgUrls: this.data.imgUrls.concat(options.cover)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})