const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log('User Reducer... ');
  
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state, currentUser: action.payload
      }


    default:
      return state;
  }
}

export default userReducer;