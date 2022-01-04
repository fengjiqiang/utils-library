// 一些常用的公共方法

/**
 * 判断是否为数字
 * @param {*} number
 */
export function isNumber(number) {
    return typeof number === 'number' && !isNaN(number)
}

/**
 * 将时间戳（秒级）转化为日期字符串
 */
export function dealTableTime(str, format = 'YYYY.MM.DD HH:mm') {
    if (!str) {
        return ''
    }
    return moment(str * 1000).format(format)
}

/**
 * 将日期时间转化为时间戳（秒级）
 * @param {*} str
 */
export function dealDateTime(str) {
    if (!str) {
        return ''
    }
    return new Date(str).getTime() / 1000
}

/**
 * 查询将日期转化为时间戳
 */
export function dealSearchTime(str, isStart) {
    if (!str) {
        return ''
    }
    if (isStart) {
        return new Date(str + ' 0:0:0').getTime() / 1000
    } else {
        return new Date(str + ' 23:59:59').getTime() / 1000
    }
}

/**
 * 根据文件后缀区分文件
 * @param {*} fileName 文件名（带后缀）
 */
export function getFileType(fileName) {
    let index = fileName.lastIndexOf(".")
    let suffix = ''   // 后缀
    let result = ''   // 类型结果
    if (index !== -1) {
        suffix = fileName.substr(index + 1).toLowerCase()
    }
    if (!suffix) return false   // 无后缀 返回false

    // 匹配 视频
    const videolist = ['mp4', 'm2v', 'mkv', 'rmvb', 'wmv', 'avi', 'flv', 'mov', 'm4v']
    result = videolist.find(item => item === suffix)
    if (result) return 'video'
    // 匹配 音频
    const radiolist = ['mp3', 'wav', 'wmv']
    result = radiolist.find(item => item === suffix)
    if (result) return 'radio'
    // 匹配 图片
    const imglist = ['png', 'jpg', 'jpeg', 'bmp', 'tif', 'tiff']
    result = imglist.find(item => item === suffix)
    if (result) return 'image'
    // 匹配 文档
    // pdf
    const pdflist = ['pdf'];
    result = pdflist.find(item => item === suffix)
    if (result) return 'pdf'
    // txt
    const txtlist = ['txt']
    result = txtlist.find(item => item === suffix)
    if (result) return 'txt'
    // word
    const wordlist = ['doc', 'docx']
    result = wordlist.find(item => item === suffix)
    if (result) return 'word'
    // excel
    const excelist = ['xls', 'xlsx']
    result = excelist.find(item => item === suffix)
    if (result) return 'excel'
    // ppt
    const pptlist = ['ppt', 'pptx']
    result = pptlist.find(item => item === suffix)
    if (result) return 'ppt'
    // 匹配 压缩包
    const ziplist = ['zip', 'rar', 'gz']
    result = ziplist.find(item => item === suffix)
    if (result) return 'zip'
    // 其他 文件类型
    return 'other'
}

/**
 * 复制
 * @param {*} info 要复制的内容
 * @param {*} CB 复制后的回调
 */
export function copy(info, CB) {
    let msg;
    switch (typeof info) {
        case 'string':
            msg = info
            break;
        case 'object':
            msg = JSON.stringify(info)
            break;
        case 'number':
            msg = info;
            break;
        default:
            break;

    }
    let oInput = document.createElement('textarea');
    oInput.value = msg;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand('Copy'); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    oInput.remove()
    CB && CB()
}

/**
 * blob下载
 * @param {*} blob 文件blob对象
 * @param {*} filename 下载后的文件名
 */
export function downloadFile(blob, filename) {
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}

/**
 * url下载
 * @param {*} url 文件的url地址
 * @param {*} filename 下载后的文件名
 */
export function downloadUrl(url, filename) {
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}

/**
 * 字符串去空格
 * @param {*} str 字符串
 */
export function strTrim(str) {
    if (!str) {
        return ''
    }
    return str.replace(/^\s+|\s+$/gm, '');
}

/**
 * 获取字符串长度 汉字占两个
 * @param {*} str 字符串
 */
export function getStrLength(str) {
    let w = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            w++;
        } else {
            w += 2;
        }
    }
    return w
}

/**
 * 随机数生成
 * @param {*} number 随机数位数
 */
export function uuid(number) {
    let n = 36   // 默认36位
    if (typeof number === 'number' && !isNaN(number)) {
        n = number
    }
    const s = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < n; i += 1) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    const id = s.join('');
    return id;
}

/**
 * 将数组元素从一个数组位置移动到另一数组位置
 * @param {*} array 原数组
 * @param {*} from 开始位置索引
 * @param {*} to 目标位置索引
 */
export function arrayMove(array, from, to) {
    if (Math.abs(from - to) > 60) {
        array.splice(to, 0, array.splice(from, 1)[0]);
    } else {
        // works better when we are not moving things very far
        let target = array[from];
        let inc = (to - from) / Math.abs(to - from);
        let current = from;
        for (; current != to; current += inc) {
            array[current] = array[current + inc];
        }
        array[to] = target;
    }
    return array
}

/**
 * base64转File
 * @param {*} dataurl base64
 * @param {*} filename 文件名
 */
export function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}

/**
 * base64转Blob
 * @param {*} dataurl base64
 */
export function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
