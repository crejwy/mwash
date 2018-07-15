// components/marquee/marquee.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {    
    cohesion: {
      type: [String,Boolean],
      value: false,
    },
    text:{
      type:String,
      value: '请配置内容 '
    },
    orientation: {
      type: String,
      value: 'left'//滚动方向
    },
    width:{
      type:Number,
      value:400
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _cohesion:false,
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 60,
    size: 14,    
    interval: 200 // 时间间隔
  },
  ready: function () {
    // 页面显示
    var vm = this; 
    var length = vm.data.text.length * vm.data.size;//文字长度
    // var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    // console.log(wx.getSystemInfoSync().windowWidth)
    var windowWidth = vm.data.width;
    vm.setData({
      _cohesion: vm.data.cohesion == "true",
      length: length,
      windowWidth: windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
    });
    if (vm.data._cohesion){
      vm.run2();// 第一个字消失后立即从右边出现
    }else{
      vm.run1();// 水平一行字滚动完了再按照原来的方向滚动
    }   
   
  },
  /**
   * 组件的方法列表
   */
  methods: {
    run1: function () {
      var vm = this;
      var interval = setInterval(function () {
        if (-vm.data.marqueeDistance < vm.data.length) {
          vm.setData({
            marqueeDistance: vm.data.marqueeDistance - vm.data.marqueePace,
          });
        } else {
          clearInterval(interval);
          vm.setData({
            marqueeDistance: vm.data.windowWidth
          });
          vm.run1();
        }
        // console.log(1);
      }, vm.data.interval);
    },
    run2: function () {
      var vm = this;
      var interval = setInterval(function () {
        if (-vm.data.marqueeDistance2 < vm.data.length) {
          // 如果文字滚动到出现marquee2_margin=30px的白边，就接着显示
          vm.setData({
            marqueeDistance2: vm.data.marqueeDistance2 - vm.data.marqueePace,
            marquee2copy_status: vm.data.length + vm.data.marqueeDistance2 <= vm.data.windowWidth + vm.data.marquee2_margin,
          });
        } else {
          if (-vm.data.marqueeDistance2 >= vm.data.marquee2_margin) { // 当第二条文字滚动到最左边时
            vm.setData({
              marqueeDistance2: vm.data.marquee2_margin // 直接重新滚动
            });
            clearInterval(interval);
            vm.run2();
          } else {
            clearInterval(interval);
            vm.setData({
              marqueeDistance2: -vm.data.windowWidth
            });
            vm.run2();
          }
        }
      }, vm.data.interval);
    }
  }
})
