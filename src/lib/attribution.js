const STORAGE_KEY = 'tractionfast-attribution'

function pickAllQueryParams(source) {
  const result = {}
  source.forEach((value, key) => {
    if (typeof value === 'string' && value.length > 0) {
      result[key] = value
    }
  })

  return result
}

function readStoredTrackingParams() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return {}
    }

    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') {
      return {}
    }

    return Object.entries(parsed).reduce((acc, [key, value]) => {
      if (typeof value === 'string' && value.length > 0) {
        acc[key] = value
      }
      return acc
    }, {})
  } catch {
    return {}
  }
}

function persistTrackingParams(params) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params))
  } catch {
    // Ignore storage errors in restricted environments.
  }
}

export function getAttributionParams(search) {
  const stored = readStoredTrackingParams()
  const incoming = pickAllQueryParams(new URLSearchParams(search))
  const merged = { ...stored, ...incoming }

  if (Object.keys(merged).length > 0) {
    persistTrackingParams(merged)
  }

  return merged
}

export function buildAttributedBookingUrl(baseUrl, params) {
  let parsedUrl

  try {
    parsedUrl = new URL(baseUrl)
  } catch {
    return baseUrl
  }

  Object.entries(params).forEach(([key, value]) => {
    if (!parsedUrl.searchParams.has(key)) {
      parsedUrl.searchParams.set(key, value)
    }
  })

  return parsedUrl.toString()
}
