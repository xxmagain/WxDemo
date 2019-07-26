// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556258828661&di=23d9d096d28455e88bdb9b056c8fcae6&imgtype=0&src=http%3A%2F%2Fycimg.woofeng.cn%2F20180704%2F20180704121440_22619.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556674188&di=f2694330a8e44b8e3cb97525e2dfbc96&imgtype=jpg&er=1&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20150430%2Ftooopen_sy_121005835886.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556079483689&di=b7f3a1a2054832373ea21182e180d64d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8877744c714e041862f51d2d6b39cbb46cf660d740a7-SBPl1k_fw658'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    discount: [{
      id: 1,
      cover:          'https://www.chanel.cn/fnbv3/image/full/chanel__com_type1/skus_full/coco-mademoiselle--15ml.3145891160505.jpg',
      title: 'COCO MADEMOISELLE',
      desc: '香奈儿可可小姐香精',
      price: '1750'
    }, {
      id: 2,
      cover: 'https://www.dior.cn/couture/var/dior/storage/images/horizon/woman/make-up/dior-addict-stellar-shine/slider-stellar-shine/image-1/16426751-1-fre-FR/image-1.jpg',
      title: '迪奥魅惑星耀唇膏',
      desc: '耀闪色泽 晶润 盈亮',
      price: '320'
    }, {
      id: 3,
      cover: 'https://www.dior.cn/beauty/version-5.156982000270/resize-image/ep/870/580/90/0/horizon%252Fcovers%252FY0048000_C004800976_E01_ZHC.jpg',
      title: '迪奥魅惑星耀唇膏',
      desc: '耀闪色泽 晶润 盈亮',
      price: '320'
    }],
    newList: [{
      id:1,
      cover: 'https://img.alicdn.com/imgextra/i1/2064892827/O1CN01Q9qotg1WkoCN27iL3_!!0-item_pic.jpg_430x430q90.jpg', title: 'COCO MADEMOISELLE',
      title:'雅诗兰黛爽肤水补水保湿',
      desc: '修护肌底 加乘吸收力 深透深彻',
      price: '450'}]
  },
  toDetails(el) {
    var cover = el.currentTarget.dataset.cover;
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail?cover=' + cover,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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