import { addPromocode } from '../../components/state/appState';
import { STATE } from '../../components/state/state';

describe('addPromocode function', () => {
  afterAll(() => {
    STATE.cartPromocode = [];
  });

  test('Should save promocode object in state of app', () => {
    const promocode = { id: 'rs', name: 'RSS', discount: 10 };

    addPromocode(promocode);
    expect(STATE.cartPromocode[0]).toBeDefined();
    expect(STATE.cartPromocode[0]).toEqual(promocode);
    expect(STATE.cartPromocode.length).toBe(1);
  });

  test('Should add promocode object in state of app', () => {
    const promocode = { id: 'happybuyer', name: 'Happy Buyer', discount: 50 };
    const expected = [
      { id: 'rs', name: 'RSS', discount: 10 },
      { id: 'happybuyer', name: 'Happy Buyer', discount: 50 },
    ];

    addPromocode(promocode);
    expect(STATE.cartPromocode.length).toBe(2);
    expect(STATE.cartPromocode[1]).toEqual(promocode);
    expect(STATE.cartPromocode).toEqual(expected);
  });
});
