import * as React from 'react';
import { IPersonDTO } from '../../interfaces';
import { HIRING_DIRECTIONS, HIRING_STAGES } from '../../enums';

export class ProfileCard extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.onChangeHiringStage = this.onChangeHiringStage.bind(this);
  }

  public onChangeHiringStage(e): void {
    e.preventDefault();
    const excistingStages: string[] = Object.keys(HIRING_STAGES);
    const stageIndex: number = excistingStages.indexOf(this.props.personData.stage.toUpperCase());
    const {direction} = e.target.dataset;
    console.log(excistingStages[stageIndex + 1]);
    if (direction.toUpperCase() === HIRING_DIRECTIONS.NEXT) {
      this.props.onChangeHiringStage(this.props.personData.uuid, excistingStages[stageIndex + 1]);
    } else if (direction.toUpperCase() === HIRING_DIRECTIONS.PREV) {
      this.props.onChangeHiringStage(this.props.personData.uuid, excistingStages[stageIndex - 1]);
    }
  }

  public render(): JSX.Element {
    const {name, picture, stage} = this.props.personData;
    return (
      <div className="person">
        <img className="photo" src={picture}/>
        <div className="name">{name}</div>
        {(stage !== HIRING_STAGES.APPLIED)
          ? <button
            className="to-prev-status"
            data-direction="prev"
            onClick={this.onChangeHiringStage}> prev </button>
          : null}
        {(stage !== HIRING_STAGES.HIRED) ?
          <button
            className="to-next-status"
            onClick={this.onChangeHiringStage}
            data-direction="next"> next </button>
          : null}
      </div>
    );
  }
}

export interface IProps {
  readonly personData: IPersonDTO;

  onChangeHiringStage(uuid: string, stage: string): void;
}
