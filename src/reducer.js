import { assumptions, ongoingCosts } from "./defaultState";

export const UPDATE_ASSUMPTIONS = "update_assumptions";
export const UPDATE_ONGOINGCOSTS = "update_ongoingcosts";
export const RESET = "RESET";

export function reducer(state, action) {
  switch (action.type) {
    case UPDATE_ASSUMPTIONS:
      return {
        ongoingCosts: {
          ...state.ongoingCosts
        },
        assumptions: {
          ...action.payload
        }
      };
    case UPDATE_ONGOINGCOSTS:
      return {
        ongoingCosts: {
          ...action.payload
        },
        assumptions: {
          ...state.assumptions
        }
      };
    case RESET:
      return {
        assumptions,
        ongoingCosts
      };
    default:
      throw new Error();
  }
}
