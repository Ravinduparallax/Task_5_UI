import Api from "./Api";

export const getUnits = async() =>{
    return await Api.get('/ims/unit/list',{
        headers:{
            'x-Tenant': 'gayashan',
        }
    })
};



// const createUnit = async(url) =>{
//     return await Api.post('/ims/unit/save', url,{
//         headers:{
//             'x-Tenant': 'gayashan',
//         }
//     })
// };

// const getUnit = async(uId)=>{
//     return await Api.get(`/ims/unit/edit/${uId}`,{
//         headers:{
//             'x-Tenant': 'gayashan',
//         }
//     })
// };

// const deleteUnit = async (uId) =>{
//     return await Api.delete(`/ims/unit/${uId}`,{
//         headers:{
//             'x-Tenant': 'gayashan',
//         }
//     })
// };

// const updateUnit = async (uId, url) =>{
//     return await Api.put(`/ims/unit/update/${uId}`, url,{
//         headers:{
//             'x-Tenant': 'gayashan',
//         }
//     })
// };

// export default updateUnit; deleteUnit; getUnit; getUnits; createUnit;