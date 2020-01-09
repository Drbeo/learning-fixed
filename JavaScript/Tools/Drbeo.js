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
}
export default Drbeo

