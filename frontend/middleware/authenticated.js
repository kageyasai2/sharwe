export default function ({ store, redirect }) {
  if (!store.state.user.isSignedIn) {
    return redirect('/')
  }
}
