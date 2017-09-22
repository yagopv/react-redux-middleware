export default ({dispatch}) => {
  return next => action => {
    if (action.payload && action.payload.then) {
      action.payload.then(data => dispatch({...action, payload: data}));
    } else {
      return next(action);
    }
  };
}