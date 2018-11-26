import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';

import { PostsReducerFunction } from "./post.reducer";
import { ExpertReducerFunction } from "./expert.reducer";

import * as Models from '../../Models/index';


export interface IAppState {
    AllPost: Models.Student[];
    Experts: Models.Expert[];
}

export const reducers: ActionReducerMap<IAppState> = {
    AllPost: PostsReducerFunction,
    Experts: ExpertReducerFunction,
};


// Only For Reset All Reducers

export function resetFunctionReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      switch (action.type) {
          case "Logout":
            console.log("logout action");
          return  state = undefined;
      }

      return reducer(state, action);
    }
  }

  export const metaReducers: MetaReducer<any>[] = [resetFunctionReducer];
