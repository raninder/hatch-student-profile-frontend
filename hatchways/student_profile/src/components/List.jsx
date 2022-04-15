
import Student from './Student';
const List = (props) => {

	const objArray = Object.entries(props.data2);

	const filteredData2 = objArray.filter(([key, value]) => {
		if (value===props.input2)
		return value;
		})


	const filteredData1 = props.data1.filter((el) => {
	
		if (props.input1 === '') {
				return el.id;
		}

		else {
			return ((el.firstName.toLowerCase().includes(props.input1)||
						el.lastName.toLowerCase().includes(props.input1)))
						// return ((filteredData2)&&(el.firstName.toLowerCase().includes(props.input1)||
						// el.lastName.toLowerCase().includes(props.input1)))
		}
	})
	
		
	
	return (
		<>

			{filteredData1.map((item) => (
        <Student key={item.id} {...item} />
      ))}
		
		</>
	);
};

export default List;
