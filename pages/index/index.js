//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  loginSuccess: function (e) {
    console.log(e.detail.code) // wx.login 的 code
    console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
  },
  onTabItemTap(item) {
    // console.log(item.index)
    // console.log(item.pagePath)
    // console.log(item.text)
  },
  //事件处理函数
  bindViewTap: function () {
    //跳转应用【外】某个界面,保留当前页面
    wx.navigateTo({
      url: '../product/product'
    })
    //跳转应用【外】某个界面，关闭当前页面
    // wx.redirectTo({
    //   url: '../product/product'
    // })
    //关闭所有页面，打开到应用内的某个页面。
    // wx.reLaunch({
    //   url: '../product/product'
    // })
    // wx.switchTab({ 
    //   url: '../my/my'
    // })
  },
  onReady: function () {

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
