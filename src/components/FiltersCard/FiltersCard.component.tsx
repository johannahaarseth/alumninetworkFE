import Card from "../Card/Card.component";
import RadioButton from "../RadioButton/RadioButton.component";

const FiltersCard = () => {
  return (
    <Card cardHoverEffect={false}>
      <p>Filter the timeline content to show only:</p>
      <form>
        <RadioButton
          valueProp={"Groups"}
          isChecked={undefined}
          onChange={undefined}
        />
        <RadioButton
          valueProp={"Topics"}
          isChecked={undefined}
          onChange={undefined}
        />
        <RadioButton
          valueProp={"Events"}
          isChecked={undefined}
          onChange={undefined}
        />
      </form>
    </Card>
  );
};

export default FiltersCard;
