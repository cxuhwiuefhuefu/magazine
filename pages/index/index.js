// pages/index/index.js
import {IndexModel} from "../../models/index";
// 产生随机数
import {random} from "../../utils/randomStr";
const indexModel = new IndexModel();

Page({

  data: {
    articleList: [], // 文章列表数据
    markList: [], // 推荐类型数据
    recommend: {}, // 推荐封面数据
    getMore: '',
    magazineId: 0, // 当前哪个值
    loading: true
  },


  onLoad() {
    this.getData()
  },

  onShow() {
  },

  // 上拉触底事件
  onReachBottom(){
    this.setData({
      getMore: random(20)
    })
  },

  // 跳转到目录页面
  onCatalog() {
    wx.switchTab({
      url: "/pages/catalog/catalog"
    })
  },

  // 点击导航事件
  onNav(e) {
    const magazineId = e.detail.index;
    this.setMagazineId(magazineId);
    this.resetData();
    this.scrollPageToTop();
    this.getData(magazineId)
  },

  // 获取数据
  getData(magazineId) {
    const articleList = indexModel.getArticleList(magazineId)
    const markList = indexModel.getMarkList(magazineId)
    const recommend = indexModel.getRecommendInfo(magazineId)
    Promise.all([articleList, markList, recommend]).then( res=> {
      console.log(res);  
      this.setData({
        articleList: res[0],
        markList: res[1],
        recommend: res[2]
      })
      this.hideLoading()
    })
  },

  // 隐藏加载
  hideLoading() {
    this.setData({
      loading: false
    })
  },

  // 垂直页面数据为空
  resetData() {
    this.setData({
      articleList: [],
      markList: [],
      recommend: {}
    })
  },
  
  // 滚动页面到顶部
  scrollPageToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },

  // 设置当前页面的节点值
  setMagazineId(magazineId) {
    this.setData({
      magazineId
    })
  }
  
})