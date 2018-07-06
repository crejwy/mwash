var app = getApp();
Page({
  data: {
      c:0
  },
  onLoad: function () {
      this.setData({
        c: app.globalData.example
      });
  }
})
