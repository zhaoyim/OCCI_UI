import { occiapp } from '../main'

export const mutationMsg = (state, payload) => {
  state.msg = payload.msg
}

export const mutationLang = (state, payload) => {
  occiapp.$i18n.locale = payload.lang
  state.lang = payload.lang
}
