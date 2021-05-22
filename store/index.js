import Vuex from 'vuex'
import register from './register'
import dataemail from './dataemail'
import datadiri from './datadiri'
import dataalumni from './dataalumni'
import modal from './modal'
import profile from './profile'
import dashboard from './dashboard'
import navbar from './navbar'
import userconfig from './userconfig'
import alumni from './alumni'

new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    register,
    dataemail,
    datadiri,
    dataalumni,
    modal,
    profile,
    dashboard,
    navbar,
    userconfig,
    alumni
  },
})
