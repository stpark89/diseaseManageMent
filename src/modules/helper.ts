export const createNextState = <T>(state: T) => (changes: Partial<T>): T => ({
  ...state,
  ...changes,
});

export default {
  createNextState,
};
