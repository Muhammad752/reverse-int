module.exports = function reverse (n) {
    if(n<0){
        return Number(n.toString().slice(1).split("").reverse().join(""))
    }
    else
    return Number(n.toString().split("").reverse().join(""))
}
