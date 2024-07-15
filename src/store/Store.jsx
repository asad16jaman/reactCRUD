import {createContext,useReducer,useState} from 'react'
import Messages from '../component/Messages'

export let dataContext = createContext({
    data:{},
    addItem:()=>{},
    deleteItem:()=>{},
    updateItem:()=>{}
})




function addUserOnCondition(initialState,action){

    let mystate = initialState
    if(action.type == "ADD_ITEM"){
        if(isNaN(action.payload.age) || action.payload.age<18 || action.payload.age>60){
                    mystate = {
                        ...initialState,
                        mess:true
                    }
        }else{
            mystate = {
                mess:false,
                data:[action.payload,...initialState.data]
            }
        }
        
    }else if(action.type=='DELETE_ITEM'){
        let pp = [...initialState.data];
            pp.splice(action.payload.id,1)
            mystate = {
                mess:false,
                data:pp
            }

    }else if(action.type=='UPDATE_ITEM'){
        let pp = [...initialState.data]
          pp[action.payload.id] = action.payload.data

          mystate = {
            mess:false,
            data:pp
        }

        
    }
    return mystate;
}


function Store({children}){
    
    const data = [
        {
          name:"asad",
          home:"nilphamari",
          'age':25
        },
        {
          name:"ali",
          home:"dinajpur",
          'age':30
        }
      ]
      
        const [allinfo,dispatch] = useReducer(addUserOnCondition,{data,mess:false})
      
        const deleteItem = (ind)=>{
        let action = {
            type:"DELETE_ITEM",
            payload:{id:ind}
            }
            dispatch(action)

        }

        const addItem = (obj)=>{

            let action = {
                type:"ADD_ITEM",
                payload:obj
            }
            dispatch(action)
        }

        const updateItem =(index,ob)=>{
           let action={
            type:'UPDATE_ITEM',
            payload:{
                id:index,
                data:ob
            }
           }
           dispatch(action)
        }



        return (
            <dataContext.Provider value={{data:allinfo,addItem,deleteItem,updateItem}}>
                {allinfo.mess && <Messages />}
                {children}
            </dataContext.Provider>
        )
}


export default Store