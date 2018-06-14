import { createApp } from './app'
// console.log(11111111111111)
const isDev = process.env.NODE_ENV !== 'production'

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => {
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now()
    const { app, router, store } = createApp()

    // console.log(store)
    const { url } = context
  //  console.log(context.title)
    const title = context.title
    const { fullPath } = router.resolve(url).route
    const product = context.product
    if (fullPath !== url) {
      return reject({ url: fullPath })
    }
    // console.log(product)
    store.state.product = product
    // store.dispatch('fetchItem', {store, router, product})
    // set router's location
    router.push(url)
    // console.log(store.state.product)
    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      // Call fetchData hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
// store.dispatch('fetchItem', {store, router, product})
      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router.currentRoutem,
        product: product
      }))).then(() => {

        // console.log(22222)
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // Expose the state on the render context, and let the request handler
        // inline the state in the HTML response. This allows the client-side
        // store to pick-up the server-side state without having to duplicate
        // the initial data fetching on the client.
        context.state = store.state
      //  console.log(context.state)
        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
