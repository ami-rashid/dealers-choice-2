import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const SET_CONTAINERS = 'SET_CONTAINERS'
const SET_CONTAINER = 'SET_CONTAINER'

const SET_BOXES = 'SET_BOXES'
const SET_BOX = 'SET_BOX'

const SET_ITEMS = 'SET_ITEMS'
const SET_ITEM = 'SET_ITEM'

//action cases

const setContainers = (containers) => {
    return {
        type: SET_CONTAINERS,
        containers
    }
}

const setContainer = (container) => {
    return {
        type: SET_CONTAINER,
        containers
    }
}

const setBoxes = (boxes) => {
    return {
        type: SET_BOXES,
        boxes
    }
}

const setBox = (box) => {
    return {
        type: SET_BOX,
        box
    }
}

const setItems = (items) => {
    return {
        type: SET_ITEMS,
        items
    }
}

const setItem = (item) => {
    return {
        type: SET_ITEM,
        item
    }
}

//fetch data

const fetchContainers = ()=> {
    return async(dispatch)=> {
      dispatch(setContainers((await axios.get('/api/containers')).data))
    }
}

const fetchContainer = (id)=> {
    return async(dispatch)=> {
      dispatch(setContainer((await axios.get(`/api/containers/${id}`)).data))
    }
}

const fetchBoxes = ()=> {
    return async(dispatch)=> {
      dispatch(setBoxes((await axios.get('/api/boxes')).data))
    }
}

const fetchBox = (id)=> {
    return async(dispatch)=> {
      dispatch(setBox((await axios.get(`/api/boxes/${id}`)).data))
    }
}

const fetchItems = ()=> {
    return async(dispatch)=> {
      dispatch(setItems((await axios.get('/api/items')).data))
    }
}

const fetchItem = (id)=> {
    return async(dispatch)=> {
      dispatch(setItem((await axios.get(`/api/items/${id}`)).data))
    }
}

//reducer
const initialState = {
    containers: [],
    container: {},
    boxes: [],
    box: {},
    items: [],
    item: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTAINERS:
            const containers = action.containers
            return {...state, containers}
        case SET_CONTAINER:
            const container = action.container
            return {...state, container}
        case SET_BOXES:
            const boxes = action.boxes
            return {...state, boxes}
        case SET_BOX:
            const box = action.box
            return {...state, box}
        case SET_ITEMS:
            const items = action.items
            return {...state, items}
        case SET_ITEM:
            const item = action.item
            return {...state, item}
        default: 
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export { fetchContainers, fetchContainer, fetchBoxes, fetchBox, fetchItems, fetchItem }
export default store