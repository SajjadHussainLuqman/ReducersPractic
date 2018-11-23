import * as All from "../Actions/post.actions";
import { Student } from '../../Models/post.model';

export type AllActions = All.AllActionsClasses;

const DefaultState: Student[] = [{ Id: 1, Name: "Sajjad", Address: "Rahim Yar Khan" }];

export function PostsReducerFunction(state: Student[] = DefaultState, action: AllActions) {
    switch (action.type) {

        case All.PostActionTypes.AddEnum:
            return [...state, action.payload]

        case All.PostActionTypes.UpdateEnum:
        {
            state.map((todo, i) => {
            if (todo.Id == action.payload.Id){
                state[i] = action.payload;
            }
            });

            return state;
        }

        case All.PostActionTypes.AddListEnum:
            {
                state.push.apply(state, action.payload);
                return state;
            }

        case All.PostActionTypes.DeleteEnum:
            let product = action.payload
            return state.filter((el) => el.Id != product.Id);

        case All.PostActionTypes.ResetEnum:
        {
            state=[{ Id: 1, Name: "Sajjad", Address: "Rahim Yar Khan" }];
            return state;
        }

        default:
            return state;
    }
}