import * as actions from '../orderActions';
import { GET_ORDERS, LOADING_FAILED } from '../../constants';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const payload = [
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
    ];
    const expectedAction = {
      type: GET_ORDERS,
      payload,
    };
    expect(actions.getOrders(payload)).toEqual(expectedAction);
  });

  it('should create an action on error loading', () => {
    const payload = {
      error: 'Any error',
    };

    const expectedAction = {
      type: LOADING_FAILED,
      payload,
    };
    expect(actions.loadingFailed(payload)).toEqual(expectedAction);
  });
});
