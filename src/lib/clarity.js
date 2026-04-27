const CLARITY_SCRIPT_ID = 'clarity-tag-script'
const CLARITY_PROJECT_ID = 'wieuheh4fg'

export function initClarity() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  if (typeof window.clarity !== 'function') {
    window.clarity = function clarityQueueProxy(...args) {
      ;(window.clarity.q = window.clarity.q || []).push(args)
    }
  }

  if (document.getElementById(CLARITY_SCRIPT_ID)) {
    return
  }

  const script = document.createElement('script')
  script.id = CLARITY_SCRIPT_ID
  script.async = true
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`

  const firstScript = document.getElementsByTagName('script')[0]
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript)
    return
  }

  document.head.appendChild(script)
}
