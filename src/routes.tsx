import { FC } from "react";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import MangaPage from "./pages/MangaPage";

interface RoutesType {
  name: string;
  path: string;
  Component: FC;
}

export const routes: RoutesType[] = [
  {
    name: "main",
    path: "/",
    Component: NotFoundPage,
  },
  {
    name: "not found",
    path: "/not_found",
    Component: NotFoundPage,
  },
  {
    name: "user",
    path: "/user",
    Component: UserPage,
  },
  {
    name: "manga page",
    path: "/manga_page",
    Component: MangaPage,
  },
];
