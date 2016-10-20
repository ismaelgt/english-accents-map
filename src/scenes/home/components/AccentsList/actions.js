export const SELECT_ACCENT = 'SELECT_ACCENT'

export const selectAccent = (accent) => ({
  type: SELECT_ACCENT,
  payload: {
    accent: accent
  }
})
