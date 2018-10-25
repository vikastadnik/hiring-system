export interface IState {
  readonly people: IPersonDTO[];
}

export interface IPersonDTO {
  readonly uuid: string;
  readonly name: string;
  readonly picture: string;
  readonly city: string;
  stage: string;
}
