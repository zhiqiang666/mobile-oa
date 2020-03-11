export const getTel = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) resolve({ code: 200, newTel: '119' })
      else reject(err)
    })
  })
}
export const getUsername = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) resolve({ code: 200, info: { newName: "王八" } })
      else reject(err)
    })
  })
}
