import jwt_decode from 'jwt-decode'
import Cookie from 'js-cookie'

import { setShowLogo } from './utils/navbar'

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
  const showModalSuccess = (context, messages) => {
    context.$store.dispatch('modal/setMessages', messages)
    context.$store.dispatch('modal/setModalSuccess')
    context.$store.dispatch('modal/showModal')
    setTimeout(() => {
      context.$store.dispatch('modal/resetModal')
    }, 2000)
  }
  const showModalError = (context, messages, autohide=true) => {
    context.$store.dispatch('modal/setMessages', messages)
    context.$store.dispatch('modal/setModalError')
    context.$store.dispatch('modal/showModal')
    if (autohide) {
      setTimeout(() => {
        context.$store.dispatch('modal/resetModal')
      }, 2000)
    }
  }
  const resetModal = (context) => {
    context.$store.dispatch('modal/resetModal')
  }
  const showModalLoading = (context) => {
    context.$store.dispatch('modal/showModalLoading')
  }
  const hideModalLoading = (context) => {
    context.$store.dispatch('modal/hideModalLoading')
  }
  const decodeJwt = (jwt) => {
    return jwt_decode(jwt)
  }
  const getCookieManager = () => {
    return Cookie
  }
  const getJwtData = () => {
    const token = Cookie.get('jwt')
    return jwt_decode(token)
  }
  const loggedIn = () => {
    const token = Cookie.get('jwt')
    return token
  }
  const preventUnauthorizedAccess = (context) => {
    if (!loggedIn() || !getJwtData()['is_admin']) {
      context.$router.push('/')
    }
  }
  const setNavbarTitle = (context, title) => {
    context.$store.dispatch('navbar/setTitle', title)
  }
  const resetNavbarTitle = (context) => {
    context.$store.dispatch('navbar/resetTitle')
  }
  const getAdminContact = () => {
    return '+6285249903865'
  }
  const getAdminWhatsappContact = () => {
    return `https://wa.me/+6285249903865?text=Hai admin Sistem Alumni Asy Syaamil, saya ingin bertanya`
  }
  const useMock = () => {
    return true
  }
  const getConfigAxios = () => {
    return {
      headers: {
        Authorization: `Bearer ${Cookie.get('jwt')}`
      }
    }
  }
  inject('isMobile', isMobile)
  inject('validateEmail', validateEmail)
  inject('isEmpty', isEmpty)
  inject('showModalSuccess', showModalSuccess)
  inject('showModalError', showModalError)
  inject('resetModal', resetModal)
  inject('showModalLoading', showModalLoading)
  inject('hideModalLoading', hideModalLoading)
  inject('decodeJwt', decodeJwt)
  inject('getCookieManager', getCookieManager)
  inject('getJwtData', getJwtData)
  inject('loggedIn', loggedIn)
  inject('preventUnauthorizedAccess', preventUnauthorizedAccess)
  inject('setNavbarTitle', setNavbarTitle)
  inject('resetNavbarTitle', resetNavbarTitle)
  inject('getAdminContact', getAdminContact)
  inject('getAdminWhatsappContact', getAdminWhatsappContact)
  inject('useMock', useMock)
  inject('getConfigAxios', getConfigAxios)
  // Navbar
  inject('setShowLogo', setShowLogo)
}
