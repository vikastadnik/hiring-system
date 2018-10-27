import { ActionType, people } from '../../source/reducers/people';
import { ActionType as filterAction, filters } from '../../source/reducers/filter';
import * as Actions from '../../source/actions';
import { IPersonDTO } from '../../source/interfaces';

const peopleList: IPersonDTO[] = [
  {
    uuid: 'f1a09841-5c38-4198-9bf7-23fff4c52504',
    name: 'wayne boyd',
    picture: 'https://randomuser.me/api/portraits/med/men/96.jpg',
    city: 'londonderry',
    stage: 'APPLIED'
  },
  {
    uuid: '8732fff1-ce70-4743-8518-cc1e8e892226',
    name: 'norman roberts',
    picture: 'https://randomuser.me/api/portraits/med/men/57.jpg',
    city: 'york',
    stage: 'APPLIED'
  },
  {
    uuid: 'd0d51f21-ad28-42ee-9e2e-a49a91a66b5a',
    name: 'shaun welch',
    picture: 'https://randomuser.me/api/portraits/med/men/85.jpg',
    city: 'bradford',
    stage: 'APPLIED'
  },
  {
    uuid: '6762d4bb-18b6-4126-a7e6-4f8ad7f7bf12',
    name: 'louis elliott',
    picture: 'https://randomuser.me/api/portraits/med/men/96.jpg',
    city: 'truro',
    stage: 'APPLIED'
  },
  {
    uuid: '160fb518-6e8f-4b2e-bbaa-02bbb0b05922',
    name: 'kathy murray',
    picture: 'https://randomuser.me/api/portraits/med/women/93.jpg',
    city: 'southampton',
    stage: 'APPLIED'
  }
];

describe('initial state', () => {
  test('is correct', () => {
    const action: ActionType = {
      type: Actions.SET_PEOPLE_DATA,
      person: {uuid: '', name: '', picture: '', city: '', stage: ''},
      people: []
    };

    expect(people([], action)).toMatchSnapshot();
  });
});

describe('set people', () => {
  test('returns the correct state', () => {
    const action: ActionType = {
      type: Actions.SET_PEOPLE_DATA,
      person: {uuid: '', name: '', picture: '', city: '', stage: ''},
      people: peopleList
    };

    expect(people(undefined, action)).toMatchSnapshot();
  });
});

describe('set filter', () => {
  test('set new filter', () => {
    const action: filterAction = {
      type: Actions.SET_FILTER,
      filterData: {title: 'city', value: 'Kyiv'}
    };

    expect(filters(undefined, action)).toMatchSnapshot();
  });


  test('update filter', () => {
    const action: filterAction = {
      type: Actions.SET_FILTER,
      filterData: {title: 'city', value: 'Kyiv'}
    };

    expect(filters({city: 'Poltava', name: ''}, action)).toMatchSnapshot();
  });
});