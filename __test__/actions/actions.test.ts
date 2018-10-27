import configureStore from 'redux-mock-store';
import * as Actions from '../../source/actions';
import { IPersonDTO } from '../../source/interfaces';

const mockStore = configureStore();
const store = mockStore();
const people: IPersonDTO[] = [
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

describe('actions test', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('Dispatches the correct action adding people', () => {
    store.dispatch(Actions.setPeopleData(people));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('Dispatches the correct action setting city filter', () => {
    store.dispatch(Actions.setFilter({title: 'city', value: 'Kyiv'}));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('Dispatches the correct action setting other filter', () => {
    store.dispatch(Actions.setFilter({title: 'otherFilter', value: 'Test'}));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('Dispathes the correct action updating crew status', () => {
    store.dispatch(Actions.updatePersonStage({
        uuid: 'f1a09841-5c38-4198-9bf7-23fff4c52504',
        name: 'wayne boyd',
        picture: 'https://randomuser.me/api/portraits/med/men/96.jpg',
        city: 'londonderry',
        stage: 'HIRED'
      }
    ));
    expect(store.getActions()).toMatchSnapshot();
  });

  test('Dispathes the correct action updating crew status with wrong uuid', () => {
    store.dispatch(Actions.updatePersonStage({
        uuid: '2504',
        name: 'wayne boyd',
        picture: 'https://randomuser.me/api/portraits/med/men/96.jpg',
        city: 'londonderry',
        stage: 'HIRED'
      }
    ));
    expect(store.getActions()).toMatchSnapshot();
  });
});
