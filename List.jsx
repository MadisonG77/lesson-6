const items = ['Apples', 'Bananas', 'Cherries','Grapes'];

function List() {
  return (
    <ul>
      {items.map((item, index) => (
       
       <li key={index}>{item}</li> 
      
      ))}
    </ul>
  );
}

export default List;