const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const status = () => ({
  type: CHECK_STATUS,
  text: 'Under construction',
});

const statusReducer = (state = [], action) => {
  if (action.type === CHECK_STATUS) {
    return [...state, action.text];
  }
  return state;
};

export default statusReducer;
