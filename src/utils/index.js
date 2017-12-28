export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function browserRedirect(){
  let sUserAgent  = navigator.userAgent.toLowerCase(),
    bIsIpad     = sUserAgent.match(/ipad/i) == 'ipad',
    bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os',
    bIsMidp     = sUserAgent.match(/midp/i) == 'midp',
    bIsUc7      = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4',
    bIsUc       = sUserAgent.match(/ucweb/i) == 'ucweb',
    bIsAndroid  = sUserAgent.match(/android/i) == 'android',
    bIsCE       = sUserAgent.match(/windows ce/i) == 'windows ce',
    bIsWM       = sUserAgent.match(/windows mobile/i) == 'windows mobile',
    isPhone     = (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);

    return isPhone
}
