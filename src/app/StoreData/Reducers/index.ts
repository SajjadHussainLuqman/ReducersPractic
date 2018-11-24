import { ActionReducerMap } from '@ngrx/store';

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
