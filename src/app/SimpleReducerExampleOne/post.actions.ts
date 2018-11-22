import { Action } from "@ngrx/store";

export enum PostActionTypes
{
    AddEnum    = "AddEnum",
    UpdateEnum = "UpdateEnum",
    AddListEnum = "AddList",
    DeleteEnum = "DeleteEnum",
    ResetEnum  = "ResetEnum",
}

export class AddActionClass implements Action
{
    readonly type = PostActionTypes.AddEnum;
    constructor(public payload: any){}
}

export class UpdateActionClass implements Action
{
    readonly type = PostActionTypes.UpdateEnum;
    constructor(public payload: any){}
}

export class AddListActionClass implements Action
{
    readonly type = PostActionTypes.AddListEnum;
    constructor(public payload: any[]){}
}

export class DeleteActionClass implements Action
{
    readonly type = PostActionTypes.DeleteEnum;
    constructor(public payload: any){}
}

export class ResetActionClass implements Action
{
    readonly type = PostActionTypes.ResetEnum;
}

export type AllActionsClasses = AddActionClass | DeleteActionClass | ResetActionClass | AddListActionClass | UpdateActionClass;