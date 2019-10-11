import {Request} from "../utils/request.js"

class IndexModel extends Request{
    // 
    getArticleList (magazineId=0, start=0) {
        return this.getData({
            url: `/getIndexArticleList/${magazineId}/${start}.json`
        })
    }

    // 收藏喜欢的数据
    getMarkList(magazineId=0) {
        return this.getData({
            // url: `/getMarkTypeList/${magazineId}.json`,
            url: `/getMarkTypeList.json`,
        })
    }

    // 首页头部数据
    getRecommendInfo (magazineId=0) {
        return this.getData({
            // url: `/getRecommendInfo/${magazineId}.json`
            url: `/getRecommendInfo.json`
        })
    }
}
export {IndexModel}