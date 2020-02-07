export default function ({ store, redirect, params }) {
  if (!store.state.user.headerInfo.loggedIn) {
    return redirect('/')
  } else if (!(Number(params.id) === store.state.user.headerInfo.id)) {
    return redirect('/')
  }
}
