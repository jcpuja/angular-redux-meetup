export interface AppState {
  count: number;
  fetching: boolean;
}

export const INITIAL_STATE: AppState = {
  count: 0,
  fetching: false
};
