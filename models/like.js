class LikeModel {

    // 在缓存中设置值
    setLikeList (value) {
        wx.setStorageSync('likeList', value);
    }

    // 从缓存中获取值
    getLikeList () {
        return wx.getStorageSync('likeList') || [];
    }

    // 增加喜欢的列表
    addLikeList (articleDetail) {
        const likeList = this.getLikeList();
        likeList.unshift(articleDetail)
        this.setLikeList(likeList)
    }

    // 移除不喜欢的列表
    removeLikeList (artId) {
        const likeList = this.getLikeList()
        let myIndex = 0

        likeList.forEach( (item, index) => {
            if(item.artId === artId) {
                myIndex = index
                return
            }
        } )

        likeList.splice(myIndex, 1)

        this.setLikeList(likeList)
    }

    // 获取喜欢的状态
    getLikeStatus (artId) {
        const likeList = this.getLikeList();
        let likeStatus = false;

        likeList.forEach( (item, index) => {
            if(item.artId === artId) {
                likeStatus = true
            }
        } )

        return likeStatus
    }
}

export {LikeModel}