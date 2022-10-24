import Card from "../Card/Card.component";
import RadioButton from "../RadioButton/RadioButton.component";

const FiltersCard = () => {
  return (
    <Card cardHoverEffect={false}>
      <p>Filter the timeline content to show only:</p>
      <form>
        {/* <RadioButton valueProp={"Groups"} onClick={undefined} />
        <RadioButton valueProp={"Topics"} onClick={undefined} />
        <RadioButton valueProp={"Events"} onClick={undefined} />
        <RadioButton valueProp={"Your activity"} onClick={undefined} /> */}
      </form>
    </Card>
  );
};

export default FiltersCard;
