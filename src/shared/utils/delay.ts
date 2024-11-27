/**
 * Creates a promise that resolves after a specified delay
 * @param ms Time to delay in milliseconds
 * @returns Promise that resolves after the delay
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
