import StringifyJSON from "./StringifyJSON";

const List = ({list,renderItem}) => {
  const renderList = () => {
   
    if(!renderItem) {
    return <StringifyJSON data={list}/>
    }
      return list.map(renderItem)
  }
  return(
  <div>
      
           {renderList()}
  </div >
  
  
  )
}

export default List
