export const setShowLogo = (context, payload) => {
  context.$store.dispatch('navbar/setShowLogo', payload)
}