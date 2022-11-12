import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { PageStateProps } from "./Types";

import { Portfolio } from "../components/Portfolio";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

const initialState: PageStateProps[] = [
  {
    id: 0,
    name: "Home",
    description: "Home page",
    page: <Portfolio />,
    active: true,
  },
  {
    id: 1,
    name: "Portfolio",
    description: "Portfolio page",
    page: <Portfolio />,
    active: false,
  },
  {
    id: 2,
    name: "About",
    description: "About page",
    page: <About />,
    active: false,
  },
  {
    id: 3,
    name: "Contact",
    description: "Contact page",
    page: <Contact />,
    active: false,
  },
];

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      let index = state.findIndex((x) => x.id === action.payload);
      if (index != -1) {
        state.forEach((x) => (x.active = false));
        state[index].active = true;
      }
    },
  },
});

export const { setActivePage } = modalSlice.actions;

export default modalSlice.reducer;
