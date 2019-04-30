// translate
export function generateTitle (path, title) {
  const hasKey = this.$te(path + title)

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t(path + title)
    return translatedTitle
  }
  return title
}
