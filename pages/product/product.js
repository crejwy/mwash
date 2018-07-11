Page({
  data: {
    productid:0,
    date:'2018-07-09'
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
  }
})
