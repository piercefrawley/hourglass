const init = (initialCount = 0) => initialCount;

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

const update = (count, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    default:
      return count
  }
}
