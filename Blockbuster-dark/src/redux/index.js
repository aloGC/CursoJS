
const createStore = (reducer, initialState) => {
    let state = initialState
    let update = () => {}

 const getState= () => state

 const dispatch=(action) =>{
    state = reducer(state, action) 
    update() 
 }
 const subscribe =(listener) =>{
     update = listener
 }
 return{
     getState,
     dispatch,
     subscribe,
 }

}
function combineReducers(){

}

export{
    createStore,
    combineReducers
}
