const initState = {

  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'help me find peach', content: 'blah blah blah'},
    {id: '3', title: 'help me find peach', content: 'blah blah blah'},
    {id: '4', title: 'help me find peach', content: 'blah blah blah'},
    {id: '5', title: 'help me find peach', content: 'blah blah blah'},
  ]

}

const  projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('proejct created', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create proejct error', action.err);
      return state;
    default:
      return state;
  }
return state;
}

export default projectReducer;