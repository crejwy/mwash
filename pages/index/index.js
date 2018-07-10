//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    search: {
      searchValue: '',
      showClearBtn: false
    },
    searchResult: []
  },
  //输入内容时
  searchActiveChangeinput: function (e) {
    const val = e.detail.value;
    this.setData({
      'search.showClearBtn': val != '' ? true : false,
      'search.searchValue': val
    })
  },
  //点击清除搜索内容
  searchActiveChangeclear: function (e) {
    this.setData({
      'search.showClearBtn': false,
      'search.searchValue': ''
    })
  },
  //点击聚集时
  focusSearch: function () {
    if (this.data.search.searchValue) {
      this.setData({
        'search.showClearBtn': true
      })
    }
  },
  //搜索提交
  searchSubmit: function () {
    const val = this.data.search.searchValue;
    if (val) {
      const that = this,
        app = getApp();
      wx.showToast({
        title: '搜索中',
        icon: 'loading'
      });
      that.setData({
        searchResult: [{
          id:new Date().getTime,
          team_id: new Date().getTime,                team_avator:'https://bravetest.oss-cn-beijing.aliyuncs.com/IMG_20160528_140200.jpg?x-oss-process=style/style1&Expires=1531183236&OSSAccessKeyId=TMP.AQFemAjL411dshelUidE6O0L-rJyheI_h6Qs3fKCjZxVB_dP_Z6Kj_W6O6qUADAtAhQA7RYX5kpamDrSVw1jjMaF-n80RgIVAKmvngLlO1vN0dWnpZ_OuIZsWhjk&Signature=kNSdw%2B0Iuff6To6Vwoy9VkOin7w%3D',
          team_name:'94',
          team_intr:'94是个都比'
        }],
        'search.showClearBtn': false,
      })
      wx.hideToast();
      // wx.request({
      //   url: app.globalData.api_url + 'searchTeam',
      //   data: {
      //     keywords: val,
      //     user_id: app.globalData.myInfo.user_id
      //   },
      //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      //   // header: {}, // 设置请求的 header
      //   success: function (res) {
      //     // success
      //     let searchResult = res.data.data;
      //     const len = searchResult.length;
      //     for (let i = 0; i < len; i++) {
      //       searchResult[i]['team_avator'] = app.globalData.STATIC_SOURCE + searchResult[i]['team_avator'];
      //     }
      //     that.setData({
      //       searchResult: searchResult,
      //       'search.showClearBtn': false,
      //     })
      //   },
      //   fail: function () {
      //     // fail
      //   },
      //   complete: function () {
      //     // complete
      //     wx.hideToast();
      //   }
      // })
    }
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
