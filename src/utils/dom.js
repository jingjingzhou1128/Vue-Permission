export function removeClass (element, className) {
  if (!element) return
  if (!className) {
    element.className = ''
    return
  }
  let classArray = element.className.split(' ')
  let removeClassArray = className.split(' ')
  let filterClassArray = classArray.filter(item => {
    return removeClassArray.every(remove => {
      return remove !== item
    })
  })
  element.className = filterClassArray.join(' ')
}

export function addClass (element, className) {
  if (!element) return
  if (!className) return
  let classArray = element.className.split(' ')
  let addClassArray = className.split(' ')
  element.className = Array.from(new Set(classArray.concat(addClassArray))).join(' ')
}

export function toggleClass (element, className) {
  if (!element) return
  if (!className) return
  let classArray = element.className.split(' ')
  let toggleClassArray = className.split(' ')
  toggleClassArray.forEach((item, index) => {
    if (classArray.includes(item)) {
      classArray.forEach((ele, index) => {
        if (ele === item) classArray.splice(index, 1)
      })
    } else {
      classArray.push(item)
    }
  })
  element.className = classArray.join(' ')
}
