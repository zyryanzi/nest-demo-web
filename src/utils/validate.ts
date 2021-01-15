/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string): boolean => {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export const validUsername = (str: string): boolean => {
    const validMap: string[] = ['admin', 'editor']
    return validMap.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export const validURL = (url: string): boolean => {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export const validLowerCase = (str: string): boolean => {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export const validUpperCase = (str: string): boolean => {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export const validAlphabets = (str: string): boolean => {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export const validEmail = (email: string): boolean => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}

export const isvalidPhone = (phone: string): boolean => {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(phone)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export const isString = (str: any): boolean => {
    if (typeof str === 'string' || str instanceof String) {
        return true
    }
    return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export const isArray = (arg: any): boolean => {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
}

/**
 * 是否合法IP地址
 * @param rule
 * @param value
 * @param callback
 */
export const validateIP = (rule: any, value: any, callback: Function): void => {
    if (value === '' || value === undefined || value == null) {
        callback()
    } else {
        const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
        if ((!reg.test(value)) && value !== '') {
            callback(new Error('请输入正确的IP地址'))
        } else {
            callback()
        }
    }
}

/* 是否手机号码或者固话*/
export const validatePhoneTwo = (rule: any, value: any, callback: Function): void => {
    const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/
    if (value === '' || value === undefined || value == null) {
        callback()
    } else {
        if ((!reg.test(value)) && value !== '') {
            callback(new Error('请输入正确的电话号码或者固话号码'))
        } else {
            callback()
        }
    }
}

/* 是否固话*/
export const validateTelephone = (rule: any, value: any, callback: Function): void => {
    const reg = /0\d{2}-\d{7,8}/
    if (value === '' || value === undefined || value == null) {
        callback()
    } else {
        if ((!reg.test(value)) && value !== '') {
            callback(new Error('请输入正确的固话（格式：区号+号码,如010-1234567）'))
        } else {
            callback()
        }
    }
}

/* 是否手机号码*/
export const validatePhone = (rule: any, value: any, callback: Function): void => {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (value === '' || value === undefined || value == null) {
        callback()
    } else {
        if ((!reg.test(value)) && value !== '') {
            callback(new Error('请输入正确的电话号码'))
        } else {
            callback()
        }
    }
}

/* 是否身份证号码*/
export const validateIdNo = (rule: any, value: any, callback: Function): void => {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (value === '' || value === undefined || value == null) {
        callback()
    } else {
        if ((!reg.test(value)) && value !== '') {
            callback(new Error('请输入正确的身份证号码'))
        } else {
            callback()
        }
    }
}

