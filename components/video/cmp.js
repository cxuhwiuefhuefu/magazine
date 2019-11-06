Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached() {
      this._getVideoInfo();
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 点击播放按钮
    onPlay() {
      this._toggleVideoPoster();
      this.video.play();
    },

    // 点击朦胧层暂停视频
    onMaskTap() {
      this._toggleVideoPoster();
      
      // 重新开始播放
      this.video.seek(0);
      // 暂停播放
      this.video.stop();
    },

    // 当播放到末尾触发事件
    onVideoEnd() {
      this._toggleVideoPoster();
    },

    // 切换视频封面
    _toggleVideoPoster() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    },

    // 生成视频对象
    _getVideoInfo() {
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);
    }
  }
})
