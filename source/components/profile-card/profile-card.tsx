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
    if (direction.toUpperCase() === HIRING_DIRECTIONS.NEXT) {
      this.props.onChangeHiringStage(this.props.personData.uuid, excistingStages[stageIndex + 1]);
    } else if (direction.toUpperCase() === HIRING_DIRECTIONS.PREV) {
      this.props.onChangeHiringStage(this.props.personData.uuid, excistingStages[stageIndex - 1]);
    }
  }

  public getNextStageButton(): JSX.Element {
    const {stage} = this.props.personData;
    if (stage.toUpperCase() === HIRING_STAGES.HIRED) {
      return null;
    }
    return (
      <button
        className="ui button"
        onClick={this.onChangeHiringStage}
        data-direction="next"
      >
        Next
      </button>
    );
  }

  public getPrevStageButton(): JSX.Element {
    const {stage} = this.props.personData;
    if (stage === HIRING_STAGES.APPLIED) {
      return null;
    }
    return (
      <button
        className="ui  button"
        onClick={this.onChangeHiringStage}
        data-direction="prev"
      >
        Prev
      </button>
    );
  }

  public render(): JSX.Element {
    const {name, picture} = this.props.personData;
    return (
      <div className="person">
        <img className="photo" src={picture}/>
        <div className="name">{name}</div>
        {this.getPrevStageButton()}
        {this.getNextStageButton()}
      </div>
    );
  }
}

export interface IProps {
  readonly personData: IPersonDTO;

  onChangeHiringStage(uuid: string, stage: string): void;
}
