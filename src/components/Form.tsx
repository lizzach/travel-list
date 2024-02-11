export default function Form(): JSX.Element {
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({length: 20}, (_, i) => i + 1).map((num) =>
        <option value={num} key={num}>
          {num}
        </option>)}
      </select>
    </form>
  );
}