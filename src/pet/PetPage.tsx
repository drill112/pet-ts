import Pet from "./Pet";

function PetPage() {
  return (
    <div>
      <h1>Домашний питомец</h1>

      <Pet
        name="Шарик"
        type="Кот"
        age={2}
      />
    </div>
  );
}

export default PetPage;
