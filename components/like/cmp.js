// like组件

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击收藏按钮
    onLike() {
      const like = !this.data.like;

      this.setData({
        like
      })

      // 触发父组件的事件
      this.triggerEvent('like', {
        like
      })
    }
  }
})
