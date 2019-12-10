//implement curry and compose

const curry = (fn) => {
    return (arg) => {
        return(arg2) => {
            return fn(arg, arg2)
        }
    }
}

const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result);
    }
}