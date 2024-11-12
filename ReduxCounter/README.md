# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Step 1 : Make Two files , one for making slices and other to make a store

Step 2 : In reducer , import createSlice . Decalre a const and pass a object to createSlice. This requires properties like name, initialState, and the reducers . Reducers is a property , inside which we declare types and make a function. Infunction , we have two args , state and action. State is the current state and action is only required when have to update with input .

Step 3 : We export all the reducers individually so we can make use of them individually and all at once too, to call em all int store.

Step 4 : Import configureStore and reducer as we had exported previously. Then create a store and pass in a object and set reducer property to reducer we have imported . Set it with a name so it will be easy for us to useSelector.

Step 5 : Import all reducers in App.js or any component you are dealing with . Also Import useSelector and useDispatch . useSelector is to show the constant changing state of things we are dealing with, here it is just a number. useDispatch is used to trigger the particular reducer.

Step 6 : Wrap your App with Provider in main and also pass store property as store we have created.

CODE IS UP AND RUNNING