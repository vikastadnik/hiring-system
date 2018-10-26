export interface IState {
  readonly people: IPersonDTO[];
  readonly filters: IFilters;
}

export interface IPersonDTO {
  readonly uuid: string;
  readonly name: string;
  readonly picture: string;
  readonly city: string;
  stage: string;
}
export interface IFilters {
  readonly city: string;
  readonly name: string;
}
