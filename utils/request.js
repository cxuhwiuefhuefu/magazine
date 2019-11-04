class Request {
    baseUrl = 'http://api.duyiedu.com/zazhi/magazine'

    getData({url, method='GET', data={}}) {
        return new Promise( (resolve, reject) => {
            wx.request({
                url: this.baseUrl + url,
                method: method,
                data: data,
                // 成功回调函数
                success: res => {
                    if(res.data.code == 0) {
                        resolve(res.data.data)
                    } else {
                        this._showError()
                    }
                },
                // 失败回调函数
                fail: err => {
                    reject()
                    this._showError()
                }
            })
        })
    }

    // 请求错误的话显示提示框 
    _showError() {
        wx.showToast({
            title: "请求错误",
            icon: "none"
        })
    }
}

export {Request}