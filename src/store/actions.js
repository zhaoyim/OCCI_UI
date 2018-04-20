export const changeMsg = ({ commit }) => {
  commit({
    type: 'mutationMsg',
    msg: 'Changed msg'
  })
}

export const changeLang = ({ commit }, payload) => {
  commit({
    type: 'mutationLang',
    lang: payload.lang
  })
}

export const logUsername = ({ commit }, payload) => {
  commit({
    type: 'mutationUsername',
    username: payload.username
  })
}
