import { useEffect, useState } from "react";
import { RecipieList } from "./components/RecipieList";
import { v4 as uuidv4 } from "uuid";
import { RecipiEdit } from "./components/RecipiEdit";

import "./css/app.css";

function App() {
  const [selectedRecipieId, setSelectedRecipieId] = useState(null);
  const [recipieArray, setRecipieArray] = useState(sampleRecipies);
  const selectedRecipie = recipieArray.find(
    (ele) => ele.id == selectedRecipieId
  );
  useEffect(() => {
    const recipieJSON = localStorage.getItem("recipie");
    if (recipieJSON != null) setRecipieArray(JSON.parse(recipieJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem("recipie", JSON.stringify(recipieArray));
  }, [recipieArray]);

  const handleAddRecipie = () => {
    const newRecipie = {
      id: uuidv4(),
      name: "name",
      servings: 1,
      cookTime: "1",
      instructions: "inst ..",
      ingridients: [
        {
          id: uuidv4(),
          name: "ing name",
          amount: "amt",
        },
        {
          id: uuidv4(),
          name: "ing name",
          amount: "amt",
        },
      ],
    };
    setRecipieArray([...recipieArray, newRecipie]);
  };

  const handleDelete = (id) => {
    const filteredArray = recipieArray.filter((ele) => ele.id != id);
    setRecipieArray(filteredArray);
  };

  const handleRecipieSelect = (id) => {
    setSelectedRecipieId(id);
  };

  const handleRecipieChange = (id, recipie) => {
    const newRecipie = [...recipieArray];
    const index = newRecipie.findIndex((r) => r.id == id);
    newRecipie[index] = recipie;
    setRecipieArray(newRecipie);
  };
  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        {/* Left half - RecipieList */}
        <div
          style={{
            flex: 1,
            borderRight: "1px solid #ccc",
            padding: "20px",
            overflow: "auto",
          }}
        >
          <RecipieList
            recipieArray={recipieArray}
            handleAddRecipie={handleAddRecipie}
            handleDelete={handleDelete}
            handleRecipieSelect={handleRecipieSelect}
          />
        </div>

        {/* Right half - RecipiEdit */}
        <div style={{ flex: 1, padding: "20px", overflow: "auto" }}>
          {selectedRecipie && (
            <RecipiEdit
              recipie={selectedRecipie}
              handleRecipieChange={handleRecipieChange}
            />
          )}
        </div>
      </div>
    </>
  );
}

const sampleRecipies = [
  {
    id: 1,
    name: "Plain chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on Chicken\n2. Cook the Chicken\n 3. Eat the chicken",
    ingridients: [
      {
        id: 1,
        name: "salt",
        amount: "2 tea spoons",
      },
      {
        id: 2,
        name: "pepper",
        amount: "4 cloves",
      },
    ],
  },
  {
    id: 2,
    name: "Plain pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put salt on pork\n2. Cook the pork\n 3. Eat the pork",
    ingridients: [
      {
        id: 1,
        name: "salt",
        amount: "2 tea spoons",
      },
      {
        id: 2,
        name: "paprika",
        amount: "10 gm",
      },
    ],
  },
];

export default App;
