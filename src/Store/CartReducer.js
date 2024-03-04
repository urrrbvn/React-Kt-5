

const start_data = [
    {id: 1, title: 'Велосипед', count: 5},
    {id: 2, title: 'Самокат', count: 4},
    {id: 3, title: 'Гантели', count: 7},
    {id: 4, title: 'Ракетки', count: 1}
 ]

 const defaultState = JSON.parse(localStorage.getItem('cart')) ?? start_data

 const COUNT_INCR = 'COUNT_INCR'
 const COUNT_DECR = 'COUNT_DECR'
 const ADD_NEW = 'ADD_NEW'
 
export const cartReducer = (state = defaultState, action ) =>{
    switch(action.type){
        case COUNT_INCR:
            return state.map(elem =>{
                if(elem.count < 25){
                    if(elem.id == action.payload){
                        elem.count = elem.count +1
                        return elem
                    }else{
                        return elem
                    }
                }else{
                    return elem
                }
            })
        case COUNT_DECR:
            //Сочувствую вашим глазам :/
            return state.map(elem =>{
                if(elem.count !== 0){
                    if(elem.id == action.payload){
                        elem.count = elem.count - 1
                        return elem
                    }else{
                        return elem
                    }
                }else{
                    return elem
                }
            }).filter(elem => elem.count !== 0)
        case ADD_NEW:
            let newObj = {id:state.length+1 , title: action.payload, count: 1 }
            return [...state, newObj]

        default:
            return state
    }
}

export const incrCountAction = (payload) => ({type: COUNT_INCR, payload})
export const decrCountAction = (payload) => ({type: COUNT_DECR, payload})
export const addNewAction = (payload) => ({type: ADD_NEW, payload})