import { useEffect, useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  const [nameInputError, setNameInputError] = useState("");

  const handleSubmit = (e) => {
    console.log(name);
    console.log(age);
    console.log(hairColor);
    e.preventDefault();
  };

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be two or more characters");
    } else {
      setNameInputError("");
    }
  }, [name]);

  return (
    <form onSubmit={handleSubmit}>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ControlledForm;
