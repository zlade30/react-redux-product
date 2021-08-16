import { handleActions } from 'redux-actions';
import {
  addProductActionSuccess,
  removeProductActionSuccess,
  updateProductActionSuccess
} from '../actions/product.action';

const defaultState = {
  products: [
    {
      id: 'fjdkd49879475f',
      name: 'Logitech G102 Gaming Mouse 8000DPI Adjustable RGB Macro Programmable Mechanical Button Wired Mouse Game Mice For Windows10/8/7',
      price: '163',
      image: 'https://my-test-11.slatic.net/p/492d2bf07c67107cd809d4f293d2f135.jpg_200x200q90.jpg_.webp'
    },
    {
      id: 'fjdkd49ge9475f', 
      name: 'Fantech WG10 Raigor II 2000 DPI Wireless 2.4GHz Pro Gaming Mouse',
      price: '98',
      image: 'https://my-test-11.slatic.net/p/7194fbf24c49359aabeb35ddb1c6ea35.jpg_200x200q90.jpg_.webp'
    },
    {
      id: 'fj44d49879475f',
      name: '2.4GHz Wireless Mice With USB Receiver Gamer 2000DPI Mouse For Computer PC Laptop',
      price: '190',
      image: 'https://ph-test-11.slatic.net/p/067d4ce125052262dbbe806b753259a0.jpg_200x200q90.jpg_.webp'
    },
    {
      id: 'fjdkd498794ssd',
      name: 'Fantech VX7 WHITE/ BLACK CRYPTO GAMING MOUSE',
      price: '200',
      image: 'https://ph-test-11.slatic.net/p/1cbaed621ae5334e7d37c187199b19eb.png_200x200q90.jpg_.webp'
    },
    {
      id: 'fjdkd49879gffd',
      name: 'LED Optical Game Mouse USB Wired Gaming Mouse 6 Buttons Gamer Computer Mice For Laptop Mice PC A210',
      price: '900',
      image: 'https://ph-test-11.slatic.net/p/8437a0e4df2b5b887ec9552512f34cc6.jpg_200x200q90.jpg_.webp'
    },
    {
      id: 'fjdkd4987plji2',
      name: 'Wireless Mouse Gaming Mouse USB Receiver Gamer Mice Wireless Mouse 2000 DPI Computer Wireless Mouse 2.4G USB Mouse For Laptop and PC',
      price: '800',
      image: 'https://ph-test-11.slatic.net/p/691e331d1174b66422bc8152effc0de4.jpg_200x200q90.jpg_.webp'
    },
    {
      id: 'fjdkd498fjkdj3',
      name: 'Allan New Style Mechanic M200 Warwick USB LED Gaming Mouse',
      price: '253',
      image: 'https://ph-test-11.slatic.net/p/5e0b450e07d0abc4de632f04252c5557.png_200x200q90.jpg_.webp'
    },
    {
      id: 'fjdkd49879ghje',
      name: 'LIMEI S1 wired USB gaming mouse with luminous backlight mouse PC notebook computer business office games',
      price: '200',
      image: 'https://ph-test-11.slatic.net/p/7ac1c3cafaf93eab6ba384d1ce5837ff.jpg_200x200q90.jpg_.webp'
    },
    {
      id: 'fjdkd49879rree',
      name: 'FANTECH X7 BLAST RGB COLOR Macro Pro Gaming Mouse',
      price: '849',
      image: 'https://ph-live-01.slatic.net/original/bde91d2626f5ae285a4c193fa27b30f8.jpg_200x200q90.jpg_.webp'
    },
    {
      id: 'fjdkd498gjkkjk',
      name: 'Zeus MR002 ( Beez-Hive ) Wired Gaming Mouse RGB Backlight Gaming - Upgraded Version',
      price: '163',
      image: 'https://ph-test-11.slatic.net/p/5f5f9e851ee9b4b0a1cceb530d88ce77.jpg_200x200q90.jpg_.webp'
    }
  ],
}

const reducer = handleActions(
  {
    [addProductActionSuccess]: (state, { payload }) => {
      return {
        ...state,
        products: [...state.products, payload]
      }
    },

    [updateProductActionSuccess]: (state, { payload }) => {
      return {
        ...state,
        products: state.products.map(product => product.id === payload.id ? { ...product, ...payload } : product)
      }
    },

    [removeProductActionSuccess]: (state, { payload }) => {
      return {
        ...state,
        products: state.products.filter(product => product.id !== payload.id)
      }
    }
  },
  defaultState
)

export default reducer
