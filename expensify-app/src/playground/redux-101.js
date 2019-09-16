import { createStore} from 'redux'

// Action generators - fn that returns action objs (eventually broken out into own file)
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

const resetCount = ({count = 0} = {}) => ({
  type: 'RESET',
  count
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
      default:
        return state;
  }
};
// create store
const store = createStore(countReducer);

// gets state every time it changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
// unsubscribe();

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount())
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 88}));
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}))

// 5 6 9 -10 88 89 94 :)


