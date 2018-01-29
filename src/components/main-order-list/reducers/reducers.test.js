import reducer from './reducers';
import { GET_ORDERS } from '../constants';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle add data', () => {
    expect(reducer([], {
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
    })).toEqual([
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
    ]);
  });
});
