//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

    num:""
    
  },

  inputValue:function(e){
    console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    });
  },

  calc:function(){

    app.calcProgress(num,show());

  },

  show:function(v){

  },
  onLoad: function () {
   
  }
})
