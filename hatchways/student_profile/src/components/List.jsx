
import Student from './Student';

const List = (props) => {

	console.log("props data", props.data);
	const filteredData = props.data.filter((el) => {
	
		if (props.input === '') {
				return el.id;
		}

		else {
			return el.firstName.toLowerCase().includes(props.input)||
						el.lastName.toLowerCase().includes(props.input)
		}
	})

	return (
		<>

			{filteredData.map((item) => (
        <Student key={item.id} {...item} />
      ))}
		
		</>
	);
};

export default List;
