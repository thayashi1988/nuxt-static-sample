import Vue from 'vue'

const args = {
  heading: '',
  flag: false,
}

// タイトルの改行対応
Vue.prototype.$myInjectedFunction = (heading, flag) => {
  let headingTxt = heading
  if (flag === 'heading1') {
    headingTxt = headingTxt.replace(/<br>/g, '<br>')
  } else if (flag === 'bread') {
    headingTxt = headingTxt.replace(/<br>/g, '')
  } else {
    headingTxt = headingTxt.replace(/<br>/g, '')
    headingTxt = headingTxt.replace(/】/, '】<br>')
  }
  return headingTxt
}
