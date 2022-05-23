import { React } from "react";
import Note from "./Note";

export default ((note) => 
    <Note 
        key={note.key} 
        title={note.title} 
        body={note.content} 
    />
)

