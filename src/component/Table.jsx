import React,{useContext} from 'react'
import { dataContext } from '../store/Store'


function Tr({name,home,age,indexno,delet,editbtn}){
      

    let ob = {
        padding:"10px 20px",
        background:'red',
        color:"#fff",
        border:'none',
        cursor:"pointer"
    }

    return <tr>
    <td>{name}</td>
    <td>{home}</td>
    <td>{age}</td>
    <td>
        <button style={ob} onClick={delet.bind(this,indexno)}>delete</button>
        <button onClick={editbtn.bind(this,name,home,age,indexno)} className='tableeditbtn'>edit</button>
    </td>
  </tr>
}

export default function Table({editbtn}) {

  let {data,deleteItem} = useContext(dataContext);

  return (
    <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Home</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {data.data.map((ele,ind)=>{
                return <Tr name={ele.name} home={ele.home} age={ele.age} key={ind} indexno={ind} delet={deleteItem} editbtn={editbtn}/>
              })}
          </tbody>
        </table>
  )
}
