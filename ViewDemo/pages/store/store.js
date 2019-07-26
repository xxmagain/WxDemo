// pages/dianpu/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeList : [{
      id:1,
      image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1792894298,856132472&fm=26&gp=0.jpg',
      name:'喵格的店',
      desc:'欢迎来到喵格的店铺，',
      images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556258890513&di=5eceeee3872c9ac9e10ed7e1893d9d50&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110225%2F1637792_113636659162_2.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556258890700&di=c1e88bc08279894a7753a815bb54df88&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Fitem%2F20190318%2F70827185381552896285_m.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556258890699&di=15d53d02406b1225caeffa641f411097&imgtype=0&src=http%3A%2F%2Fpic.16pic.com%2F00%2F52%2F72%2F16pic_5272757_b.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556258890698&di=4ab7426cc166f596da42e25b42ee38dd&imgtype=0&src=http%3A%2F%2Fpic33.nipic.com%2F20130923%2F6757827_095142702116_2.jpg']
    }, {
        id: 2,
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3024766318,1637918465&fm=26&gp=0.jpg',
        name: '颜九的口号',
        desc: '欢迎来到颜九的店铺，找到你想要的颜色',
        images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556854799&di=27b569467b5eda9fed2549f6ab31003f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.pclady.com.cn%2Fpclady%2F1310%2F14%2F1048934_1.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556854830&di=aaa442f51deb81699620d4d6a3c70e7f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160428%2Ftooopen_sy_160816215447.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556260146994&di=fcb266fead7d622b9ece676752790663&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F941557bcb1f199f9a0bc49fa04952daeac6f404b1324a-AWFK2t_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556260146992&di=cf51d4b242903f4b87005b2cbf0346b6&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fpop%2Fjfs%2Ft23926%2F123%2F1721720311%2F57354%2Feef1fd7d%2F5b6835fdN3cef93c5.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556854931&di=0dce6f760892c7c7feb58c1ddd3732d4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi4%2F113779932%2FTB25bFnaB0lpuFjSszdXXcdxFXa_%21%21113779932.jpg']
      }, {
        id: 3,
        image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1792894298,856132472&fm=26&gp=0.jpg',
        name: '喵格的店',
        desc: '欢迎来到喵格的店铺，',
        images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556258890513&di=5eceeee3872c9ac9e10ed7e1893d9d50&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110225%2F1637792_113636659162_2.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556258890700&di=c1e88bc08279894a7753a815bb54df88&imgtype=0&src=http%3A%2F%2Fwww.shang360.com%2Fupload%2Fitem%2F20190318%2F70827185381552896285_m.jpg', ]
      },{
        id: 4,
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3024766318,1637918465&fm=26&gp=0.jpg',
        name: '颜九的口号',
        desc: '欢迎来到颜九的店铺，找到你想要的颜色',
        images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556854799&di=27b569467b5eda9fed2549f6ab31003f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.pclady.com.cn%2Fpclady%2F1310%2F14%2F1048934_1.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556854830&di=aaa442f51deb81699620d4d6a3c70e7f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160428%2Ftooopen_sy_160816215447.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556260146994&di=fcb266fead7d622b9ece676752790663&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F941557bcb1f199f9a0bc49fa04952daeac6f404b1324a-AWFK2t_fw658', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556260146992&di=cf51d4b242903f4b87005b2cbf0346b6&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fpop%2Fjfs%2Ft23926%2F123%2F1721720311%2F57354%2Feef1fd7d%2F5b6835fdN3cef93c5.jpg']
      }]

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