function getDestinations(){
  var data = [
    {
      area: "东南亚",
      country: [{
        name: "泰国"
      }]
    },
    {
      area: "北美",
      country: [{
        name: "美国"
      }]
    },
    {
      area: "欧洲",
      country: [{
        name: "英国"
      }, {
        name: "法国"
      }, {
        name: "德国"
      }]
    },
    {
      area: "亚洲",
      country: [{
        name: "东南亚"
      }]
    }
  ];
  return data;
}


function getProduct(){
  var data=[
    {
      imgurl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      productid:1
    },
    {
      imgurl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      productid: 2
    },
    {
      imgurl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      productid: 3
    }
  ]

  return data;
}


module.exports={
  getDestinations, getProduct
}