// index.js
const app = getApp(); // 导入全局对象
Page({
  saveData() {
    // 前面可以是一段业务逻辑处理
    // 使全局方法
    app.showToast({ title: '保存成功！', icon: 'success', duration: 2000 }, () => {
      wx.navigateTo({
        url: '/pages/testPage/testPage',
      })
    })
  },
  defaultToast() {
    app.showToast({});
  },
})
