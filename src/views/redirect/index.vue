<script>
export default {
  beforeCreate () {
    const {params, query} = this.$route
    this.$router.replace({
      path: `/${params.path}`,
      query
    })
  },
  render (h) {
    return h() // avoid warning message
  }
}
</script>
