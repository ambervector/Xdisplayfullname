import { useState, useRef } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const fNameRef = useRef();
  const lNameRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFName(fNameRef.current.value);
    setLName(lNameRef.current.value);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form>
        <label for="fname">First name:</label>
        <input ref={fNameRef} type="text" id="fname" name="fname" required />
        <br />
        <label for="lname">Last name:</label>
        <input ref={lNameRef} type="text" id="lname" name="lname" required />
        <br />
        <button
          onClick={(e) => {
            submitHandler(e);
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      {isSubmitted && <p>Full Name: {`${fName} ${lName}`}</p>}
    </div>
  );
}

export default App;
