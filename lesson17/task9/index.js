export const bind = (func, context, ...arg) => (...args) => 
  func.apply(context, [...arg, ...args])

