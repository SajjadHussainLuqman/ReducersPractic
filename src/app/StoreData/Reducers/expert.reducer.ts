import * as Models  from '../../Models/index';
import * as All from '../Actions/expert.actions';

export type AllActions = All.ExpertAllActionsClasses;

const DefaultValue : Models.Expert[] = [{ Id: 1, Name: "Sajjad", Address: "Rahim Yar Khan",Age:31 }];

export function ExpertReducerFunction(state = DefaultValue, action: AllActions)
{
    switch(action.type)
    {
        case All.ExpertActionTypes.AddEnum:
            return [...state, action.payload]

        case All.ExpertActionTypes.UpdateEnum:
        {
            state.map((todo, i) => {
            if (todo.Id == action.payload.Id){
                state[i] = action.payload;
            }
            });

            return state;
        }

        case All.ExpertActionTypes.AddListEnum:
            {
                state.push.apply(state, action.payload);
                return state;
            }

        case All.ExpertActionTypes.DeleteEnum:
            let product = action.payload
            return state.filter((el) => el.Id != product.Id);

        case All.ExpertActionTypes.ResetEnum:
        {
            state=[];
            return state;
        }

        default:
            return state;
    }
}