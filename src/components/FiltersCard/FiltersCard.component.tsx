import Card from "../Card/Card.component";
import RadioButton from "../RadioButton/RadioButton.component";

const FiltersCard = () => {
  return (
    <Card>
      <p>Filter the timeline content to show only:</p>
      <RadioButton valueProp={"Groups"} />
      <RadioButton valueProp={"Topics"} />
      <RadioButton valueProp={"Events"} />
      <RadioButton valueProp={"Your activity"} />
    </Card>
  );
};

export default FiltersCard;
