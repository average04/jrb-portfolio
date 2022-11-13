import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { PageStateProps } from "./Types";

import { Home } from "../components/Home/Home";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";

const initialState: PageStateProps[] = [
  {
    id: 0,
    name: "Home",
    description: "Home page",
    page: <Home />,
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
  name: "page",
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
