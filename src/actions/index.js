export const FETCH_PICTURE_LOADING = "FETCH_PICTURE_LOADING";
export const FETCH_PICTURE_SUCCESS = "FETCH_PICTURE_SUCCESS";
export const FETCH_PICTURE_FAILED = "FETCH_PICTURE_FAILED";

export const pictureLoading = () => ({ type: FETCH_PICTURE_LOADING });
export const pictureLoadSuccess = data => ({
  type: FETCH_PICTURE_SUCCESS,
  payload: data
});
export const pictureLoadFailure = error => ({
  type: FETCH_PICTURE_FAILED,
  payload: error
});

export function fetchPicture(props) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(pictureLoading());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://picsum.photos/800/800/?${props}`)
      .then(response => 
        response.url
        //console.log('API Response', response)
        )
      .then(url =>
        //console.log('Picture', url)
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        dispatch(pictureLoadSuccess(url))
      )
      .catch(error => dispatch(pictureLoadFailure(error)));
  };
}