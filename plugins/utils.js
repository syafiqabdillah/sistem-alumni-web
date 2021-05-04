export default ({ app }, inject) => {
  const isMobile = () => {
    return window.innerWidth < 500
  }
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  const isEmpty = (s) => {
    return !(s && s.length > 0)
  }
  inject('isMobile', isMobile)
  inject('validateEmail', validateEmail)
  inject('isEmpty', isEmpty)
}
