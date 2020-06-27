
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    user: {
      type: Object
    }
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
    userClick() {
      this.triggerEvent('onUserClick', this.properties.user)
    }
  }
})
