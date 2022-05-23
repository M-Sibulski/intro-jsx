import { React } from "react";

import Header from "./Header";
import Footer from "./Footer";
import createNote from "./createNote";
import notes from "../notes";
import CreateArea from "./CreateArea";

export default function App() {
    return (
        <div>
            <Header />
            <CreateArea />
            {notes.map(createNote)}
            <Footer />
        </div>
    )
}