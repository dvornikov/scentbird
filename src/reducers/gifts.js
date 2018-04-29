import { GIFTS_ADD } from '../actions/gifts';

const gifts = (state = [], action) => {
  switch (action.type) {
    case GIFTS_ADD:
      return [
        ...state,
        {
          ...action.payload
        }
      ]

    default:
      return state
  }
}

export default gifts;
