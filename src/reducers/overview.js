const reducersOverview = (testVal = 1000, action) => {
  switch (action.type) {
    case 'ADD':
      console.log('adddddd', testVal)
      return testVal + 100
    case 'REDUCE':
      console.log('REDUCEREDUCEREDUCE', testVal)
      return testVal - 100
    default:
      console.log('defaultdefault', testVal)
      return testVal
  }
}
export default reducersOverview
