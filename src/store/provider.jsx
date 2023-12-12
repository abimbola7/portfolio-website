"use client"

import store from ".";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{ children }</Provider>
}
