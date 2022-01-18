// app.js
App({
  globalData: {
  },
  showToast(data, cb) {
    let { title, icon, duration } = data;
    title = title ? title : '默认提示';
    icon = icon ? icon : 'none';
    duration = duration ? duration : 2000;
    // 如果还需要用到wx.showToast，可自行添加
    wx.showToast({ title, icon, duration }).then(() => {
      let timer = setTimeout(() => {
        if(cb) {
          cb();
        }
        clearTimeout(timer);
      }, duration)
    })
  }
})
