import { ActionReducerMap } from '@ngrx/store';

import { PostsReducerFunction } from "./post.reducer";
import { ExpertReducerFunction } from "./expert.reducer";


export interface IAppState {
    AllPost: any;
    Experts: any;
}

export const reducers: ActionReducerMap<IAppState> = {
    AllPost: PostsReducerFunction,
    Experts: ExpertReducerFunction,
};
