import Vue from 'vue'

const args = {
  heading: '',
  flag: false,
}

// タイトルの改行対応
Vue.prototype.$myInjectedFunction = (heading, flag) => {
  let headingTxt = heading
  if (flag) {
    headingTxt = headingTxt.replace(/<br>/g, '<br>')
    return headingTxt
  } else {
    headingTxt = headingTxt.replace(/<br>/g, '')
    headingTxt = headingTxt.replace(/】/, '】<br>')
    return headingTxt
  }
}
