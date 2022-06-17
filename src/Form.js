import database from "./firebase";
import { ref } from "firebase/database";
import { useState } from "react";


const Form = () => {

    const dbRef = ref(database);

    const [userInput, setUserInput] = useState("");



    return (
        <section>
            <form action="inputForm">
                <label htmlFor="comment"></label>
                <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
                <button>Post</button>
            </form>
        </section>

    )
}

export default Form;