import Card from "../Card/Card.component";
import RadioButton from "../RadioButton/RadioButton.component";

const FiltersCard = () => {
  return (
    <Card cardHoverEffect={false}>
      <p>Filter the timeline content to show only:</p>
      <form>
        <RadioButton valueProp={"Groups"} />
        <RadioButton valueProp={"Topics"} />
        <RadioButton valueProp={"Events"} />
        <RadioButton valueProp={"Your activity"} />
      </form>
    </Card>
  );
};

export default FiltersCard;
