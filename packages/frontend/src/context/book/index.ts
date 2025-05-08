import { createContext } from "react";
import { BookContextType } from "./type";

const BookContext = createContext<BookContextType>({} as BookContextType);

export { BookContext };
