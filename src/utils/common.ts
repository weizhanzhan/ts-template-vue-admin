import Vue from 'vue'
// import { message } from 'ant-design-vue'
// const lessNodesAppended = message.loading('正在编译主题！', 0)

/**
 * @description event bus
 */
const bus = new Vue()

/**
 * @param {String} primaryColor
 * @description 更新主题
 */
const updateTheme = (primaryColor = '#2F54E8') => {
//   const hideMessage =
//   function buildIt() {
//     if (!window.less) {
//       return
//     }
//     setTimeout(() => {
//       window.less
//         .modifyVars({
//           '@primary-color': primaryColor
//         })
//         .then(() => {
//             message.loading('正在编译主题！', 0)
//         })
//         .catch(() => {
//           message.error('Failed to update theme')
//           message.loading('正在编译主题！', 0)
//         })
//     }, 200)
//   }
//   if (!lessNodesAppended) {
//     // insert less.js and color.less
//     const lessStyleNode = document.createElement('link')
//     const lessConfigNode = document.createElement('script')
//     const lessScriptNode = document.createElement('script')
//     lessStyleNode.setAttribute('rel', 'stylesheet/less')
//     lessStyleNode.setAttribute('href', '/color.less')
//     lessConfigNode.innerHTML = `
//     window.less = {
//       async: true,
//       env: 'production',
//       javascriptEnabled: true
//     };
//   `
//     lessScriptNode.src = 'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'
//     lessScriptNode.async = true
//     lessScriptNode.onload = () => {
//       buildIt()
//       lessScriptNode.onload = null
//     }
//     document.body.appendChild(lessStyleNode)
//     document.body.appendChild(lessConfigNode)
//     document.body.appendChild(lessScriptNode)
//     lessNodesAppended = true
//   } else {
//     buildIt()
//   }
}

export {
    bus,
    updateTheme
}
