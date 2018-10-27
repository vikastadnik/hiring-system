import * as React from 'react';
import { IPersonDTO } from '../../interfaces';
import { HIRING_DIRECTIONS, HIRING_STAGES } from '../../enums';

export class ProfileCard extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.onChangeHiringStage = this.onChangeHiringStage.bind(this);
  }

  public onChangeHiringStage(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    const existingStages: string[] = Object.keys(HIRING_STAGES);
    const stageIndex: number = existingStages.indexOf(this.props.personData.stage.toUpperCase());
    const {direction} = e.currentTarget.dataset;
    if (direction.toUpperCase() === HIRING_DIRECTIONS.NEXT) {
      this.props.onChangeHiringStage(this.props.personData.uuid, existingStages[stageIndex + 1]);
    } else if (direction.toUpperCase() === HIRING_DIRECTIONS.PREV) {
      this.props.onChangeHiringStage(this.props.personData.uuid, existingStages[stageIndex - 1]);
    }
  }

  public getNextStageButton(): JSX.Element {
    const {stage} = this.props.personData;
    if (stage === HIRING_STAGES.HIRED) {
      return null;
    }
    return (
      <button
        className="ui basic green button"
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
        className="ui basic green button"
        onClick={this.onChangeHiringStage}
        data-direction="prev"
      >
        Prev
      </button>
    );
  }

  public render(): JSX.Element {
    const {name, picture, city} = this.props.personData;
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <img className="left floated ui tiny image" src={picture}/>
            <div className="header">
              {name}
            </div>
            <div className="meta"> <b> {city}</b> </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              {this.getPrevStageButton()}
              {this.getNextStageButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export interface IProps {
  readonly personData: IPersonDTO;

  onChangeHiringStage(uuid: string, stage: string): void;
}
