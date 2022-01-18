const showToast = getApp().showToast;
Page({
  goIndex() {
    console.log('5s后跳转到首页!')
    showToast({ title: '测试页面, 5s后跳转到首页', icon: 'none', duration: 5000 }, () => {
      wx.navigateTo({
        url: '/pages/index/index',
      })
    })
  }
})