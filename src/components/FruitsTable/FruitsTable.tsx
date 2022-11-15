import { useTranslate } from "../../hooks/useTranslante";

interface IFruitsTranslateProps {
  name: string;
  calories: string;
  protein: string;
  carbs: string;
  fiber: string;
  fat: string;
}

function FruitsTable() {
  const { fruitsTableTranslations } = useTranslate();
  const fruitsTableTranslationsArray: IFruitsTranslateProps[] = Object.values(
    fruitsTableTranslations("fruitsTable.fruits", { returnObjects: true })
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            {fruitsTableTranslations("fruitsTable.fruitName")}
          </th>
          <th scope="col">
            {fruitsTableTranslations("fruitsTable.fruitCalories")}
          </th>
          <th scope="col">
            {fruitsTableTranslations("fruitsTable.fruitProtein")}
          </th>
          <th scope="col">
            {fruitsTableTranslations("fruitsTable.fruitCarbs")}
          </th>
          <th scope="col">
            {fruitsTableTranslations("fruitsTable.fruitFiber")}
          </th>
          <th scope="col">{fruitsTableTranslations("fruitsTable.fruitFat")}</th>
        </tr>
      </thead>
      <tbody>
        {fruitsTableTranslationsArray.map((fruit, index) => {
          return (
            <tr key={index}>
              <td>{fruit.name}</td>
              <td>{fruit.calories}</td>
              <td>{fruit.protein}</td>
              <td>{fruit.carbs}</td>
              <td>{fruit.fiber}</td>
              <td>{fruit.fat}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export { FruitsTable };
