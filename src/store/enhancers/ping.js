/*eslint-disable */
// ES5 version
// var ping = function ping(store) {
//   return function (next) {
//     return function (action) {
//       console.log('ping');
//       return next(action);
//     };
//   };
// };

export const ping = store => next => action => {
  console.log('ping')
  return next(action)
}
/*eslint-enable */
