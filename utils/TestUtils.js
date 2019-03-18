const lodash = require('lodash')
const util = require('util')

const defcfg = {
    appid: '', 
    apikey: '', 
    secretkey: '',
    inEncoding: 'GBK', // 设置dos命令行的编码格式
}

class TestUtils {
    
    constructor(config) {
        console.log('TestUtils constructor')
        let newConfig = {}
        lodash.assign(newConfig, defcfg, config)
        console.log(`new Config : ${util.inspect(newConfig)}`)
    }
    
}

module.exports = TestUtils