import Table from './component/Table'
import './style.css'
import Form from './component/Form'
import Store from './store/Store'
import { useState } from 'react'

function App() {

  const [oneedit,setedit] = useState({update:false,id:undefined});
  const [formdata , setFormdata] = useState({name:"",home:"",age:""})
  
  const getEditbtn = (name,home,age,ind)=>{
    let ob = {name,home,age}
 
    setFormdata(current=>{
      return {
        ...ob
      }
    })
    if(ind==undefined){
      setedit({
        update:false,
        id:undefined
      })
    }else{
      setedit({
        update:true,
        id:ind
      })
    }
  }


      
  return (
    
     <Store>
      <div className="container ">
        
        <div className="row">
          <Form showEdit={oneedit} editformdata={formdata} editbtn={getEditbtn}/>
        </div>
        <div className="row">
          <Table editbtn = {getEditbtn} edit={oneedit}/>
        </div>
      </div>
     </Store>
  )
}

export default App
