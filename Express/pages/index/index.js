//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

    num:null,
    expressInfo:null,
    
  },

  inputValue:function(e){
    console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    });
  },

  calc:function(){
    var thisPage=this;
    app.getExpressInfo(this.data.num,function(data){
      console.log(data);
        thisPage.setData({
          expressInfo:data.data
        });
    });

  },

  show:function(v){

  },
  onLoad: function () {
   
  }
})
