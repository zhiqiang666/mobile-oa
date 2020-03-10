const getters = {
  appWithVersion:(state)=>{
      return `${state.appName} V2.0`
  },
  myTelVersion:(state)=>{
    return `my tel:${state.myTel}`
  }
}
export default getters
