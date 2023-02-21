import { useState } from "react";
import data from './T-data.json';
import Table from 'react-bootstrap/Table';
import EditRow from './EditRow';
import ReadRow from "./ReadRow";

// const API_url = 'https://v8.api.storemate.parallaxtec.com/api';
// const xTenant = 'gayashan';

const Body = () =>{
    // const headers = {
    //     'X-Tenant': xTenant,
        
    //   };

    // const fetchList = async (url)=>{
    //     try {
    //         const res = await fetch(url,headers);
    //         const data = await res.json();
    //         console.log(data)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    // useEffect( ()=>{
    //     fetchList(API_url);
    // })
    
    //Hook use get Dynamically changed data
    const[lists, setLists] = useState(data);

    const [editListId, setEditListId] = useState();

    //create event handler to Edit row
    const handleEditClick = (event, list)=>{
        event.preventDefault();
        setEditListId(list.id);

        const formValues = {
            actual_name: list.actual_name,
            short_name: list.short_name,
            allow_decimal: list.allow_decimal,
            base_unit_id: list.base_unit_id,
            base_unit_multiplier: list.base_unit_multiplier,
            base_unit: list.base_unit,
        }

        setEditFormData(formValues);
    }

    const [editFormData, setEditFormData] = useState({
        actual_name: '',
        short_name: '',
        allow_decimal: '',
        base_unit_id: '',
        base_unit_multiplier: '',
        base_unit: '',
    })

    //create event handler to Edit form change
    const handleEditFormChange = (event)=>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleEditFormSubmit = (event)=>{
        event.preventDefault();

        const editedList = {
            id: editListId,
            actual_name: editFormData.actual_name,
            short_name: editFormData.short_name,
            allow_decimal: editFormData.allow_decimal,
            base_unit_id: editFormData.base_unit_id,
            base_unit_multiplier: editFormData.base_unit_multiplier,
            base_unit: editFormData.base_unit,

        }

        const newLists = [...lists];

        const index = lists.findIndex((list)=>list.id === editListId);

        newLists[index] = editedList;

        setLists(newLists);
        setEditListId(null);

    }

    //create event handler to Delete row
    const handleDeleteClick = (listId) =>{
        const newLists = [...lists];

        const index =lists.findIndex((list) => list.id === listId);

        newLists.splice(index, 1);

        setLists(newLists);
    }
    

    return(
        <div className="table-container">
            <form onSubmit={handleEditFormSubmit}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Actual Name</th>
                        <th>Short Name</th>
                        <th>Allow Decimal</th>
                        <th>Base Unit id</th>
                        <th>Base Unit Multiplier</th>
                        <th>Base Unit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map( (list)=> (
                    <>
                    {editListId === list.id ? 
                    <EditRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} />: 
                    <ReadRow list={list} 
                    handleEditClick={handleEditClick} 
                    handleDeleteClick={handleDeleteClick} />
                    }
                    </>
                    ))}
                    
                </tbody>
            </Table>
            </form>

        </div>
    )
}

export default Body;