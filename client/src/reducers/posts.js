const posts =  (state = [], action) => {
  switch (action.type){
    case 'GET_POSTS':
      return action.posts;
    default:
      return state;
    case 'ADD_POST':
      return [action.post, ...state]
  }
}

export default posts;
