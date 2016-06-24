/**
 * Created by neto on 16/06/16.
 */
// the reducer takes 

// 1. The action (information about what happened)

// 2. A copy of the current state

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}

export default posts;