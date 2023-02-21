import React from "react";
import { Button } from "react-bootstrap";

const ReadRow =({list, handleEditClick, handleDeleteClick})=>{
    return(
        <tr>
            <td>{list.actual_name}</td>
            <td>{list.short_name}</td>
            <td>{list.allow_decimal}</td>
            <td>{list.base_unit_id}</td>
            <td>{list.base_unit_multiplier}</td>
            <td>{list.base_unit}</td>
            <td>
                <Button type="submit" onClick={(event)=> handleEditClick(event, list)}>Edit</Button>
                
                <Button type="submit" size="xx" onClick={()=> handleDeleteClick(list.id)}>Delete</Button>
            </td>
        </tr>
    )
}

export default ReadRow;