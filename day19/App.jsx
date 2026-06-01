import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(30);

  const incrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Simple React Example</h2>

      
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={() => setLiked(!liked)}
        />
        Like this
      </label>

      <p>
        {liked ? "You like this" : "You did not like this"}
      </p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      
      <button onClick={incrementAge}>
        Increment Age
      </button>

      <h3>
        Hello, {name || "Guest "}. you are {age}
      </h3>
    </div>
  );
}

export default App;