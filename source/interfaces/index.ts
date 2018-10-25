export interface IState {
  readonly people: IPersonDTO[];
}

export interface IPersonDTO {
  readonly name: string;
  readonly picture: string;
  readonly city: string;
  readonly stage: string;
}
