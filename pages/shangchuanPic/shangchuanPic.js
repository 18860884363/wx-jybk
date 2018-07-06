// pages/shangchuanPic/shangchuanPic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:"../../assets/img/btn_add_photo_first.png",
    listArray: [
     {
        text1:"上传图片必须为本人拍摄",
        text2:"经后台审核通过后即表示授权同意使用该图片"
     },
     {
       text1: "上传格式要求JPG.PNG",
       text2: "单张图片大小不能超过5MB,长度比不能为1:1"
     },
     {
       text1:"最多可上传三张图片",
       text2:"图片审核结果以展示为准"
     }
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 2000, //自动切换时间间隔,5s
    duration: 800, //  滑动动画时长1s
    indicatorcolor: "#88caff", //指示点颜色
    indicatoractivecolor: "#2da1dc", //指示点选中颜色,
    shangchuanPic:"1",
    previewPic:"../../assets/img/wdz_header.jpg",
    shangchuan:'土匪',
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
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        console.log(res);
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths,
        });
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            // console.log(res)
          }
        });
      }
    })
  },
  showModal: function () {
    wx.showModal({
      title: '提示',
      content: '图片上传成功，经后台审核发布',
      showCancel:false,
      confirmText:"我知道了",
      success: function (res) {
        console.log('用户点击确定')
      },
      fail: function (res) {
        console.log("失败" + res);
      }
    });
    this.setData({
      shangchuanPic:"2"
    })
  },
})