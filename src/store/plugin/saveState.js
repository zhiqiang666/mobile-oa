export default state => {
  if (localStorage.state) state.replaceState(JSON.parse(localStorage.state))
    state.subscribe((mutations, state) => {
      localStorage.state = JSON.stringify(state)
    })
}
