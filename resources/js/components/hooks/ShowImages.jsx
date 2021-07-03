import React, {useState} from 'react';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function ({images, name, setData, url, errorMessage}) {
    const [isOpen, setIsOpen] = useState(false);
    const [urls, setUrls] = useState([]);
    const [start, setStart] = useState(0)

    const handleDelete = id => {
        axios.post(`${url}/${id}`).then(res => {
            if (res.data.status === "success") {
                setData(prevState => ({...prevState, [name]: res.data[name]}));
            }
        });
    }

    const openGallery = index =>{
        setUrls(images?.map(photo =>{
            return photo.name;
        }))
        setIsOpen(true);
        setStart(index);
    }

    return (
        <div className="form-group">
            {images && (images?.map( (item, index) => {
                return (
                    <div className="float-left" key={index}>
                        <div className="float-left">
                            <img className="img-thumbnail" src={item?.name}
                                 style={{height: '150px', width: '180px', cursor: "pointer", marginBottom: '10px'}} alt=""
                                 onClick={()=>openGallery(index)}/>
                            <button type="button" className="align-top btn-danger" onClick={()=> {handleDelete(item?.id)}}>x</button>
                        </div>
                    </div>)
            } ))}
            {isOpen ? (
                <Lightbox images={urls} onClose={()=>setIsOpen(false)} showTitle={false} startIndex={start}/>
            ) : null}
            <div className="invalid-feedback" style={{display:'block'}}>{errorMessage}</div>
        </div>

    )
}

