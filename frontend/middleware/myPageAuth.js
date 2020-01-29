export default function ({ store, redirect, params }) {
  if (!store.state.user.isSignedIn) {
    return redirect('/')
  } else if (!(Number(params.id) === store.state.user.currentUser.id)) {
    return redirect('/')
  }
}
