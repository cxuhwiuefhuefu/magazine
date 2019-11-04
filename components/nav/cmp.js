// components/nav/cmp.js
Component({
  
  properties: {

  },

  data: {
    magazineTypeArr: ["轻芒", "兴趣", "物质", "世界", "新事", "灵魂"],
    magazineIndex: 0, // 点击节点的值
    activeId: 'magazine0' // 滑动的值
  },

  methods: {
    onTap(e) {
      // 上一个点击节点的值
      const lastIndex = this.data.magazineIndex;
      // 当前点击节点的值
      const index = e.currentTarget.dataset.index; 

      this.setData({
        magazineIndex: index,
        activeId: `magazine${index === 0 ? 0 : index - 1}`
      })

      // 如果当前节点和上一个节点是一样，则不需要进行数据的请求
      if(lastIndex == index) {
        return;
      }
      
      // 组件通信 
      this.triggerEvent("nav", {
        index
      }, {})
    }
  }
})
