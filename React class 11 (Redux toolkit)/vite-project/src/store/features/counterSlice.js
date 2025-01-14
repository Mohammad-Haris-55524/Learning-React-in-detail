// What are Reducers ? 
// In Redux, a reducer is a function that updates an application's state in response to actions
// Reducer aik Object hay jisy ham Redux ki duniya my state ko Handle karny ka code jahaan likhty han usy reducers bolty han. Normal screnerio 
// my ham inhy functions bol rhay hoty han (increment, decrement, incrementByAmount, decrementByAmount) lekin redux ki duniya my inhay REDUCERS 
// bolain gy.

// Yah mery counter ky state ki initial Value hay jisy my increment and decrement karwao ga global state ky thorough
const initialValue = {
    value : 0
}

const counterSlice = createSlice({
    initialValue:initialValue,
    name:"counter",
    reducers: {
        increment: function(state,action){
            state.value += 1;
        },

        decrement: (state,action)=>{
            state.value -= 1;
        },

        incrementByAmount: (state,action)=>{
            state.value = action.payLoad + 1 
        },

        decrementByAmount : (state,action)=>{
            state.value = action.payLoad - 1
        }
    }
})

export const {increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.action