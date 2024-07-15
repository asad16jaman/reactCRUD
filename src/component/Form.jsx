import React,{useState,useContext,useEffect} from 'react'
import { dataContext } from '../store/Store'


export default function Form({showEdit,editformdata,editbtn}) {

    const {addItem,updateItem} = useContext(dataContext);
    
    const initialData = editformdata
    

    let [ob,setob]=useState(initialData)

    useEffect(()=>{
        let newOb = {...editformdata}
        setob(newOb)
    },[showEdit])


  

    const handleInput = (e)=>{
        setob(current=>{
            let oob = {
                ...current,
                [e.target.name]:e.target.value
            }
            return oob
        })

    }

    const submitAllData = ()=>{
        addItem(ob);
        setob({...initialData})
    }

   function updateData(id){
    updateItem(id,ob)
    editbtn('','','',undefined)
   }
    
    



  return (
    <div className="inputbox">
            <div className="input-item">
                <input type="text" name="name" placeholder='inter your name' value={ob.name} onChange={(e)=>{handleInput(e)}}/>
            </div>
            <div className="input-item">
            <input type="text" name="home" placeholder='inter your home' value={ob.home} onChange={(e)=>{handleInput(e)}} />
            </div>
            <div className="input-item">
            <input type="text" name="age" onChange={(e)=>{handleInput(e)}} placeholder='inter your age' value={ob.age} />
            </div>
              {showEdit.update ? <button className='btn' onClick={updateData.bind(this,showEdit.id)}>update</button> : <button className='btn' onClick={submitAllData}>Submit</button>}
        </div>
  )
}
