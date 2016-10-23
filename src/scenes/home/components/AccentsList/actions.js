export const SELECT_ACCENT = 'SELECT_ACCENT'
export const SELECT_COUNTRY = 'SELECT_COUNTRY'

export const selectCountry = (country) => ({
  type: SELECT_COUNTRY,
  payload: {
    country: country
  }
})

export const selectAccent = (accent) => ({
  type: SELECT_ACCENT,
  payload: {
    accent: accent
  }
})
