export default function abortableFetch(url, options = {}) {
  // Thanks to stack overflow
  const controller = new AbortController();
  const { signal } = controller;

  const addControllerToPromise = (promise) => {
    if (promise instanceof Promise) {
      promise.then = function resultWrapper(onfulfilled, onrejected) {
        const nativeThenResult = Object.getPrototypeOf(this).then.call(
          this,
          onfulfilled,
          onrejected
        );
        return addControllerToPromise(nativeThenResult);
      };
      promise.controller = controller;
    }

    return promise;
  };

  return addControllerToPromise(fetch(url, { signal, ...options }));
}
