import { Action } from "@ngrx/store";

export enum ExpertActionTypes {
    AddEnum    = "[Expert] AddEnum",
    UpdateEnum = "[Expert] UpdateEnum",
    AddListEnum = "[Expert] AddList",
    DeleteEnum = "[Expert] DeleteEnum",
    ResetEnum  = "[Expert] ResetEnum",
}

export class ExpertAddActionClass implements Action
{
    readonly type = ExpertActionTypes.AddEnum;
    constructor(public payload: any){}
}

export class ExpertUpdateActionClass implements Action
{
    readonly type = ExpertActionTypes.UpdateEnum;
    constructor(public payload: any){}
}

export class ExpertAddListActionClass implements Action
{
    readonly type = ExpertActionTypes.AddListEnum;
    constructor(public payload: any[]){}
}

export class ExpertDeleteActionClass implements Action
{
    readonly type = ExpertActionTypes.DeleteEnum;
    constructor(public payload: any){}
}

export class ExpertResetActionClass implements Action
{
    readonly type = ExpertActionTypes.ResetEnum;
}

export type ExpertAllActionsClasses = ExpertAddActionClass | ExpertDeleteActionClass | ExpertResetActionClass | ExpertAddListActionClass | ExpertUpdateActionClass;