const Drbeo = {
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
    debounce (fn, delay) {
        let timer = null
        return function () {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, delay)
        }
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
        }
    },
    /**
     * 获取地址栏查询参数
     * @param name 参数名
     * @return {string|null}
     */
    getQueryString: function (name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
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
    },
}
export default Drbeo

