// import React, {useEffect, useState} from 'react';
// import { Multiselect } from 'multiselect-react-dropdown';
//
// export default function ({label,register,name,setValue,errorMessage,list=[],values=[],className="", displayName="name"}) {
//   const [selectedValues, setSelectValues] = useState([]);
//
//   useEffect(() => {
//     if(values?.length) {
//       const filtered = list.filter(item => values.includes(item.id));
//       setSelectValues(filtered);
//     }
//   },[values]);
//
//   useEffect(()=>{
//     register({name:name});
//     setValue(name,values);
//   },[register]);
//
//   const onSelect = (selectedList, selectedItem)=> {
//     setValue(name,selectedList.map(item=>{
//       return item.id
//     }));
//   }
//
//   const onRemove=(selectedList, removedItem)=> {
//     setValue(name,selectedList.map(item=>{
//       return item.id;
//     }));
//   }
//
//   return (
//     <div className={`form-group ${className}`}>
//       <h5 className="col-form-label">{label}</h5>
//       <Multiselect
//         options={list}
//         selectedValues={selectedValues}
//         onSelect={onSelect}
//         onRemove={onRemove}
//         placeholder={label}
//         displayValue={displayName}
//         emptyRecordMsg="ვერ მოიძებნა"
//         showArrow={true}
//       />
//
//       <span className="error invalid-feedback d-block">{errorMessage}</span>
//     </div>
//   );
// }
