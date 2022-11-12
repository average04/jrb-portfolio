import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioStateProps } from "./Types";

const initialState: PortfolioStateProps[] = [
  {
    id: 1,
    name: "Todo App with Backend Rest API",
    description: "A simple todo app integrated with Rest API deployed on Azure",
    image_path: "./portfolio/todo/thumbnail.png",
    url: "https://jrb-todoapp.netlify.app/",
  },
  {
    id: 2,
    name: "Image Catalog App",
    description: "A simple image catalog app using next js",
    image_path: "./portfolio/todo/thumbnail.png",
    url: "https://jrb-todoapp.netlify.app/",
  },
  {
    id: 2,
    name: "Image Catalog App",
    description: "A simple image catalog app using next js",
    image_path: "./portfolio/todo/thumbnail.png",
    url: "https://jrb-todoapp.netlify.app/",
  },
  {
    id: 2,
    name: "Image Catalog App",
    description: "A simple image catalog app using next js",
    image_path: "./portfolio/todo/thumbnail.png",
    url: "https://jrb-todoapp.netlify.app/",
  },
  {
    id: 2,
    name: "Image Catalog App",
    description: "A simple image catalog app using next js",
    image_path: "./portfolio/todo/thumbnail.png",
    url: "https://jrb-todoapp.netlify.app/",
  },
  {
    id: 2,
    name: "Image Catalog App",
    description: "A simple image catalog app using next js",
    image_path: "./portfolio/todo/thumbnail.png",
    url: "https://jrb-todoapp.netlify.app/",
  },
];

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
});

export const {} = modalSlice.actions;

export default modalSlice.reducer;
