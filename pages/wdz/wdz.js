// pages/wdz/wdz.js
var on = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    biaoqian:false,
    tishi:"填写与(读写页面标题,例如: 钢铁侠）",
    xubg:false,
    dianzan:"../../assets/img/btn_unlike.png",
    zanNum:999,
    zan:'赞',
    addFun:"../../assets/img/btn_start.png",
    addCancel:"../../assets/img/btn_cancel.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    this.setData({
      xubg:false
    })
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
  addContent:function(){
    console.log("1");
    this.setData({
      show:true
    })
  },
  // 添加标签
  addbiaoqian:function(){
    this.setData({
      biaoqian:true,
      tishi:"tishi"
    });
    this.biaoqianshenhe();
  },

// 标签审核定时器
  biaoqianshenhe:function(){
    var that = this;
    setTimeout(function () {
      that.setData({
        biaoqian: false,
      });
    }, 3000);
  },
  addPic:function(){
    this.setData({
      xubg:true
    })
  },
  btn_cancel:function(){
    this.setData({
      xubg:false
    })
  },
  // 点赞
  dianzan:function(e){
    var dianzanPic = "../../assets/img/btn_like.png";
    var nodianzanPic = "../../assets/img/btn_unlike.png";
    var zanNum = this.data.zanNum;
    var zan = "已赞";
    var nozan = "赞"
    if(on){
      if(this.data.zanNum >= 999){
        this.setData({
          zanNum:999+"+",
          zan : zan,
          dianzan: dianzanPic,
        })
      }else{
        this.setData({
          zanNum: zanNum++,
          dianzan: dianzanPic,
        })
      }
      on = false;
    }else{
      if(this.data.zanNum >= "999+"){
        this.setData({
          dianzan: nodianzanPic,
          zanNum: 999,
          zan : nozan
        });
      }else{
        this.setData({
          dianzan: nodianzanPic,
          zanNum: zanNum--
        });
      }
     
      on = true;
    }
  },
  // 选择图册
  chooseImgalbum:function(){
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    });
    wx.navigateTo({
      url: '../shangchuanPic/shangchuanPic',
    })
  },
  // 选择相机
  chooseImgcamera:function(){
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    });
    wx.navigateTo({
      url: '../shangchuanPic/shangchuanPic',
    })
  }
});

