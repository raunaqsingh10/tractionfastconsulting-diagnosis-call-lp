let lastLeadTrackAt = 0
const LEAD_DEDUPE_WINDOW_MS = 1000

export function trackMetaLead() {
  const now = Date.now()

  if (now - lastLeadTrackAt < LEAD_DEDUPE_WINDOW_MS) {
    return
  }

  lastLeadTrackAt = now

  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return
  }

  window.fbq('track', 'Lead')
}
