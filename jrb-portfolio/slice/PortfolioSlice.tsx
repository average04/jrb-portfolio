import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioStateProps } from "./Types";

const initialState: PortfolioStateProps[] = [
  {
    id: 1,
    name: "Todo App with Backend Rest API",
    description:
      "A simple todo app integrated with Rest API, using React NextJS",
    image_path: "/portfolio/todo/thumbnail.png",
    url: "https://jrb-todoapp.netlify.app/",
  },
  {
    id: 2,
    name: "Todo REST API",
    description: "A simple REST API for Todo, using C# .Net 6",
    image_path: "/portfolio/todo_api/thumbnail.png",
    url: "https://jrbtodoapi.azurewebsites.net/swagger/index.html",
  },
  {
    id: 3,
    name: "Image Catalog App",
    description: "A simple image catalog app, using React NextJS",
    image_path: "/portfolio/image_catalog/thumbnail.png",
    url: "https://jrb-imagecatalog.netlify.app/",
  },
  {
    id: 4,
    name: "Old Portfolio",
    description: "A portfolio template, using ReactJS",
    image_path: "/portfolio/portfolio/thumbnail.png",
    url: "https://jayrbayog.netlify.app/",
  },
];

export const modalSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
});

export const {} = modalSlice.actions;

export default modalSlice.reducer;
