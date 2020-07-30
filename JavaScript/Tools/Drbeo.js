const Drbeo = {
    /**
     * dataURL转Blob
     * @param dataurl
     * @return {Blob}
     */
    dataURLtoBlob(dataurl) {
        let arr = dataurl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
            type: mime
        });
    },
    /**
     * 图片base64转 Blob
     * @param urlData {String} base64
     * @param type {String} 图片mine
     * @return {Blob} Blob
     */
    imageBase64ToBlob(urlData, type = 'image/jpeg') {
        try {
            let arr = urlData.split(',');
            let mime = arr[0].match(/:(.*?);/)[1] || type;
            // 去掉url的头，并转化为byte
            let bytes = window.atob(arr[1]);
            // 处理异常,将ascii码小于0的转换为大于0
            let ab = new ArrayBuffer(bytes.length);
            // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
            let ia = new Uint8Array(ab);

            for (var i = 0; i < bytes.length; i++) {
                ia[i] = bytes.charCodeAt(i);
            }
            return new Blob([ab], {
                type: mime
            });
        } catch (e) {
            let ab = new ArrayBuffer(0);
            return new Blob([ab], {
                type: type
            });
        }
    },
    /**
     * blob转本地url
     */
    blobToUrl(blob_data) {
        return URL.createObjectURL(blob_data);
    },
    /**
     * Blob 转base64
     */
    blobToBase64(blob_data, callback) {
        let reader = new FileReader();
        reader.onload = (e) => {
            if (callback) {
                callback(e.target.result);
            }
        };
        reader.readAsDataURL(blob_data);
    },
    /**
     * url转Blob
     * @param the_url
     * @param callback
     */
    urlToBlob(the_url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('get', the_url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (this.status === 200) {
                if (callback) {
                    callback(this.response);
                }
            }
        };
        xhr.send();
    },
    /***********************************************************************************
     *
     * 函数防抖（debounce）和函数节流（throttle）都是为了缓解函数频繁调用，它们相似，但有区别
     */
    /**
     * 防抖
     * @param fn {Function} 函数
     * @param delay {Number} 延迟时间ms
     * @return {Function} 执行函数
     */
    debounce(fn, delay) {
        let timer = null;
        return function () {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, arguments);
            }, delay);
        };
    },
    /**
     * 节流
     * @param fn {Function} 函数
     * @param cycle {Number} 执行时间ms
     * @return {Function} 执行函数
     */
    throttle(fn, cycle) {
        let start = Date.now();
        let now;
        let timer;
        return function () {
            now = Date.now();
            clearTimeout(timer);
            if (now - start >= cycle) {
                fn.apply(this, arguments);
                start = now;
            } else {
                timer = setTimeout(() => {
                    fn.apply(this, arguments);
                }, cycle);
            }
        };
    },
    /**
     * 获取地址栏查询参数
     * @param name 参数名
     * @return {string|null}
     */
    getQueryString: function (name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    /**
     * 查询参数格式化
     * @param data 字符串
     * @return {*}
     */
    queryDataInit: function (data) {
        data = data.replace(/%20/g, '');
        data = data.replace(/,/g, '&');
        return data;
    }
};
export default Drbeo;

