const reducersLogin = (testValO = {age: 1}, action) => {
  switch (action.type) {
    case 'ADD':
      return {...testValO, age: ++testValO.age}
    case 'REDUCE':
      return {...testValO, age: --testValO.age}
    default:
      return testValO
  }
}
export default reducersLogin
