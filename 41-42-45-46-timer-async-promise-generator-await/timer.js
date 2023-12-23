// 📍 Leetcode 2715. Timeout Cancellation

/* Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.
If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. 
Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments. */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// args를 받는 fn 함수를 취소하는 cancelFn를 리턴하는 cancellable 함수
// 아 그니까 cancelFn으로 fn을 취소할 수 있게 하는거임. 

const cancellable = function(fn, args, t) {
    // 취소 옵션
    const cancelFn = function () {
        clearTimeout(timer);
    }

    // 취소하려는 함수
    const timer = setTimeout(()=>{
        fn(...args)
        // 얘가 태스크 큐에 들어가서 실행이 되어야 하는데
        // 이벤트 루프가 얘를 너무 안 가져 가는거지.
        // 그래서 그 타이머를 취소하는 거임.
    } ,t)

    return cancelFn
};



// 📍 Leetcode 2725. Interval Cancellation

// 위에랑 같은데 이번엔 0초부터 실행하고 interval cancel 하는 거.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var intervalCancellable = function(fn, args, t) {
    
    fn(...args)
    const timer = setInterval(()=>{
        fn(...args)      
    }, t)

    const cancelFn = function () {
        clearInterval(timer);
    }

    return cancelFn;
};




// 📍 Leetcode 2627. Debounce

/* setTimeout 제대로 이해했으면 쓸데없이 호출한 시간 Date.now로 담지 않았을 듯 */

var debounce = function (fn, t) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        },t)
    }
};