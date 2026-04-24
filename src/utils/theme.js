export const THEME_STORAGE_KEY = 'resume-theme'

function getStoredThemePreference() {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

export function getInitialDarkMode() {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark')
  }

  const storedTheme = getStoredThemePreference()

  if (storedTheme) {
    return storedTheme === 'dark'
  }

  return true
}

export function applyDarkMode(enabled) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.classList.toggle('dark', enabled)
}

export function persistThemePreference(enabled) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, enabled ? 'dark' : 'light')
  } catch {
    // Ignore storage failures in private browsing or restricted contexts.
  }
}
