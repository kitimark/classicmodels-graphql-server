export const returnOnError = (operation: any, alternative: any) => {
  try {
    return operation()
  } catch (e) {
    return alternative
  }
}
