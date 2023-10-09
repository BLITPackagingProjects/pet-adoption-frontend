


const Pet = (props) => {
    const {id,Pet_id ,name,color,sex,age} = props.data
  return (
    <tr>
        <td>{id}</td>
        <td>{Pet_id}</td>
        <td>{name}</td>
        <td>{color}</td>
        <td>{sex}</td>
        <td>{age}</td>
    </tr>
  )
}

export default Pet