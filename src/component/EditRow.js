import React from "react";
import { Button } from "react-bootstrap";

const EditRow =({editFormData , handleEditFormChanges })=>{
    return(
        <tr>
            <td>
                <input type='text' name='actual_name' placeholder="Enter actual_name" value={editFormData.actual_name} onChange={handleEditFormChanges}></input>
            </td>
            <td><input type='text' name='short_name' placeholder="Enter short_name" value={editFormData.short_name} onChange={handleEditFormChanges}></input></td>
            <td><input type='text' name='allow_decimal' placeholder="Enter allow_decimal" value={editFormData.allow_decimal} onChange={handleEditFormChanges}></input></td>
            <td><input type='text' name='base_unit_id' value={editFormData.base_unit_id} onChange={handleEditFormChanges}></input></td>
            <td><input type='text' name='base_unit_multiplier' value={editFormData.base_unit_multiplier} onChange={handleEditFormChanges}></input></td>
            <td><input type='text' name='base_unit' value={editFormData.base_unit} onChange={handleEditFormChanges}></input></td>
            <td> <Button type="submit">Save</Button></td>
        </tr>
    )
}

export default EditRow;