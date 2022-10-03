export interface Dictionary<T> {
    [Key: string]: T;
}


export interface LooseObject {
    [key: string]: any
}