export const changeMsg = ({ commit }) => {
  commit({
    type: 'mutationMsg',
    msg: 'Changed msg'
  })
}
