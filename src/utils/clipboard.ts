import { getCurrentInstance } from 'vue'
const ctx = getCurrentInstance()?.appContext.config.globalProperties
import Clipboard from 'clipboard'
/* interface IClipboard extends Clipboard{
  off?: Function;
} */

function clipboardSuccess() {
  if (!!ctx) {
    ctx.$message({
      message: 'Copy successfully',
      type: 'success',
      duration: 1500
    })
  }
}

function clipboardError() {
  if (!!ctx) {
    ctx.$message({
      message: 'Copy failed',
      type: 'error'
    })
  }

}

export default function handleClipboard(text: string, event: any) {
  const clipboard: any = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
