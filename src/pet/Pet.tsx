import { useState } from "react";

type PetProps = {
  name: string;
  type: string;
  age: number;
};

function Pet({ name, type, age }: PetProps) {
  const [hungry, setHungry] = useState<boolean>(true);

  function toggleHunger() {
    setHungry(!hungry);
  }

  return (
    <div className="card">
      <p><strong>Имя:</strong> {name}</p>
      <p><strong>Вид:</strong> {type}</p>
      <p><strong>Возраст:</strong> {age} года</p>
      <p>
        <strong>Состояние:</strong>{" "}
        {hungry ? "Голодный" : "Сытый"}
      </p>

      <button onClick={toggleHunger}>
        Покормить
      </button>
    </div>
  );
}

export default Pet;
