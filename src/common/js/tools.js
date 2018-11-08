import bus from '@/util/bus.js'
import copy from 'copy-to-clipboard'

function copyStr(str) {
  let save = function (e) {
    e.clipboardData.setData('text/plain', str)
    e.preventDefault()
  }
  document.addEventListener('copy', save)
  document.execCommand('copy')
  document.removeEventListener('copy', save)
  bus.$tip({
    content: localStorage.getItem('lang') == 'en' ?
      'Copy Successfully ' : 'Copy Berhasil'
  })
}

function copy_code(copyText) {
  copy(copyText)
  bus.$tip({
    content: localStorage.getItem('lang') == 'en' ?
      'Copy Successfully ' : 'Copy Berhasil'
  })
}

export {
  copyStr,
  copy_code
}
