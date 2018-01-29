import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from '../orderActions';
import { GET_ORDERS } from '../../constants';

const getOrdersUrl = 'https://private-bf0eb-test12906.apiary-mock.com/orders';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates SUCCESS when fetching orders has been done', () => {
    fetchMock.getOnce(getOrdersUrl, {
      body: [
        {
          id: '69422655',
          date: '24 октября 2016 14:47',
          products: [
            {
              name: 'Sennheiser MX 585 ',
              items: '1',
              price: '1 055',
              image:
                'https://i1.rozetka.ua/goods/108367/sennheiser_mx585_images_108367104.jpg',
            },
          ],
          items: 1,
          summ: '1 055',
          delivery: '35',
          total: '1 090 ',
          deliveryStatus: 'DONE',
          feedback: {
            status: 'Good',
            statusCode: 2,
            comment: '',
          },
        },
      ],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: GET_ORDERS,
        payload: [
          {
            id: '69422655',
            date: '24 октября 2016 14:47',
            products: [
              {
                name: 'Sennheiser MX 585 ',
                items: '1',
                price: '1 055',
                image:
                  'https://i1.rozetka.ua/goods/108367/sennheiser_mx585_images_108367104.jpg',
              },
            ],
            items: 1,
            summ: '1 055',
            delivery: '35',
            total: '1 090 ',
            deliveryStatus: 'DONE',
            feedback: {
              status: 'Good',
              statusCode: 2,
              comment: '',
            },
          },
        ],
      },
    ];

    const store = mockStore([]);

    return store.dispatch(actions.loadOrders()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
