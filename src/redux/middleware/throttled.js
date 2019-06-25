const throttled = {};

export default store => next => action => {
  const time = action.meta && action.meta.throttled;

  if (!time) return next(action);

  if (throttled[action.type]) return;

  throttled[action.type] = true;

  setTimeout(() => {
    throttled[action.type] = false;
  }, time);
  next(action);
};
