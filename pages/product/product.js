var basedata = require("../data.js")
Page({
  data: {
    productid:0,
    date:'2018-07-09',
    bacimgsrc:"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
    placeofissue_range: ['上海', '武汉', '北京', '广州', '深圳'],
    placeofissue:0,
    searchProductsCost: basedata.searchProductsCost()
  },
  onLoad: function (options) {
    this.setData({
      productid:options.productid
    })
  },
  bindDateChange: function (event){
    this.setData({
      date: event.detail.value
    })
    // console.log(event.detail.value)
  },
  bindPlaceofissuePickerChange: function (event){
    this.setData({
      placeofissue:event.detail.value
    })
  }
})
