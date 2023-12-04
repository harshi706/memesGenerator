import React from "react";

export default function List() {
  const [form, setForm] = React.useState({
    first: "",
    last: "",
    mail: "",
    num:"",
    address: ""
  });
  console.log(form);

  function handlefunct(event) {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  const [form2, setForm2] = React.useState({
    first: "",
    last: "",
    mail: "",
    course: "",
    stream:"",
    year:""
  });
  console.log(form2);

  function handlefunc(event) {
    setForm2((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function handleData(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleData2(event) {
    event.preventDefault();
    console.log(form2);
  }

  const [itemsInA, setItemsInA] = React.useState([]);
  const [itemsInB, setItemsInB] = React.useState([]);
  const [itemsInBoth, setItemsInBoth] = React.useState([]);
  const [combinedItems, setCombinedItems] = React.useState([]);

  function handleCompute() {
    const itemsInA = Object.keys(form).filter((key) => form[key] !== form2[key]);
    const itemsInB = Object.keys(form2).filter((key) => form[key] !== form2[key]);
    const itemsInBoth = Object.keys(form).filter((key) => form[key] === form2[key]);
    const combinedItems = [...new Set([...Object.values(form), ...Object.values(form2)])];

    setItemsInA(itemsInA);
    setItemsInB(itemsInB);
    setItemsInBoth(itemsInBoth);
    setCombinedItems(combinedItems);

    console.log("Items present only in A:", itemsInA);
    console.log("Items present only in B:", itemsInB);
    console.log("Items present in both A and B:", itemsInBoth);
    console.log("Items combining both A and B (unique):", combinedItems);
  }

  return (
    <>
      <form onSubmit={handleData}>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={handlefunct}
          name="first"
          value={form.first}
        />
    <input
          type="text"
          placeholder="Enter your last name"
          onChange={handlefunct}
          name="last"
          value={form.last}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={handlefunct}
          name="mail"
          value={form.mail}
        />
         <input
          type="number"
          placeholder="Enter your phone no"
          onChange={handlefunct}
          name="num"
          value={form.num}
        />
        <input
          type="text"
          placeholder="Enter your address"
          onChange={handlefunct}
          name="address"
          value={form.address}
        />
      
        <input
          type="email"
          placeholder="Enter your email"
          onChange={handlefunct}
          name="mail"
          value={form.mail}
        />
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleData2}>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={handlefunc}
          name="first"
          value={form2.first}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={handlefunc}
          name="last"
          value={form2.last}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={handlefunc}
          name="mail"
          value={form2.mail}
        />
        <input
          type="text"
          placeholder="Enter your course"
          onChange={handlefunc}
          name="course"
          value={form2.course}
        />
        <input
          type="text"
          placeholder="Enter your stream"
          onChange={handlefunc}
          name="stream"
          value={form2.stream}
        />
        <input
          type="text"
          placeholder="Enter your year"
          onChange={handlefunc}
          name="year"
          value={form2.year}
        />

        <button type="submit">Submit</button>
      </form>

      <button onClick={handleCompute}>Compute</button>

      <div>
        <h3>Computed Values:</h3>
        <p>Items present only in A: {itemsInA.join(", ")}</p>
        <p>Items present only in B: {itemsInB.join(", ")}</p>
        <p>Items present in both A and B: {itemsInBoth.join(", ")}</p>
        <p>Items combining both A and B (unique): {combinedItems.join(", ")}</p>
      </div>
    </>
  );
}
