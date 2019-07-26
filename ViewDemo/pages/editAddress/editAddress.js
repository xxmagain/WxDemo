// pages/editAddress/editAddress.js
var animation;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    address:'',
    addressDetail:'',
    defult:false,
    addressMenuIsShow:false,
    provinces:[
      {id:1,name:'陕西'},
      {id:2,name:'四川' },
      {id:3,name:'广东' },
      ],
    citys: [
        { id: 1, name:['西安','安康','咸阳']},
        { id: 2, name:['成都','绵阳','德阳']},
        { id: 3, name:['深圳','广州']},
      ],
    city:'',
    areaInfo:'请选择所在区域',
    value:[0,0]
  },
  bindName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindPhone(e){
    this.setData({
      phone:e.detail.value
    })
  },
  bindArressDetail(e) {
    this.setData({
      addressDetail: e.detail.value
    })
  },
  switchChange: function (e){
    this.setData({
      defult:e.detail.value
    })
  },
  // 点击所在地区弹出选择框
  selectDistrict: function (e) {
    var that = this;
    if (that.data.addressMenuIsShow) {
      return;
    }
    that.startAddressAnimation(true);
  },
  // 执行城市选择动画
  startAddressAnimation: function (isShow) {
    var that = this;
    if (isShow) {
      that.animation.translateY(0 + 'vh').step();
    } else {
      that.animation.translateY(50 + 'vh').step();
    }
    that.setData({
      animationAddressMenu: that.animation.export(),
      addressMenuIsShow: isShow,
    });
  },
  cityChange:function(e){
    var value = e.detail.value;
    console.log('value'+value)
    var provinceIndex = value[0];
    var cityIndex = value[1];
    this.setData({
      city:this.data.citys[provinceIndex],
      value:[provinceIndex,cityIndex]
    })
  },
  // 点击地区选择取消按钮
  cityCancel: function (e) {
    this.startAddressAnimation(false);
  },
  // 点击地区选择确定按钮
  citySure: function (e) {
    var that = this;
    var value = that.data.value;
    that.startAddressAnimation(false);
    // 将选择的城市信息显示到输入框
    var areaInfo =
      that.data.provinces[value[0]].name +
      '-' +
      that.data.city.name[value[1]];
      that.setData({
        areaInfo: areaInfo,
        address:areaInfo
      });
  },
  bindSave:function(){
    if(this.data.name===''){
      wx.showToast({
        title: '请输入收件人名字',
        duration: 1500,
        icon: 'none',
      })
      return
    }
    if(this.data.phone === ''){
      wx.showToast({
        title: '请输入收件人手机号',
        duration: 1500,
        icon: 'none',
      })
      return
    }
    if(this.data.address===''){
      wx.showToast({
        title: '请输入收件人所在区域',
        duration: 1500,
        icon: 'none',
      })
      return
    }
    if(this.data.addressDetail===''){
      wx.showToast({
        title: '请输入收件人详细地址',
        duration: 1500,
        icon: 'none',
      })
      return
    }
    var object = {
      name:this.data.name,
      phone:this.data.phone,
      address:this.data.address,
      addressDetail:this.data.addressDetail,
      defult:this.data.defult,
    }
    wx.setStorage({
      key: "address",
      data:object,
      success: function () {
        wx.showToast({
          title: '添加成功',
          duration: 1500,
          icon: 'none',
        })
        wx.navigateBack({
          delta: 1,
        })
      },
      fail: function () {
        console.log('写入地址发生错误')
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var animation = wx.createAnimation({
      duration: 500,
      transformOrigin: '50% 50%',
      timingFunction: 'ease',
    });
    this.animation = animation;
    this.setData({
      city:this.data.citys[0]
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