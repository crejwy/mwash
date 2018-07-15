// pages/visaDetail/visadetail.js
var common = require("../common.js")
var basedata = require("../data.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    productid:0,
    placeofissue_range: ['上海', '武汉', '北京', '广州', '深圳'],
    placeofissue: 0,
    sign_rate_stars: common.getStars(5),
    btn_foucus:1,
    identity_foucus:2,
    elementsource:[{
      necessary:true,
      name:'护照'
    }, {
      necessary: true,
      name: '照片'
    }, {
      necessary: false,
      name: '同性人签证页'
    }],
    interviewsource: [{
      necessary: true,
      name: '护照原件'
    }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      productid: options.productid
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
  
  },
  bindPlaceofissuePickerChange: function (event) {
    this.setData({
      placeofissue: event.detail.value
    })
  },
  changebtn:function(event){
    this.setData({
      btn_foucus: event.currentTarget.dataset.btn
    })
  },
  changeidentity: function (event){
    this.setData({
      identity_foucus: event.currentTarget.dataset.identity
    })
  }
})