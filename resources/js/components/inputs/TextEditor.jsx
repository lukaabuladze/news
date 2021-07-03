import React from 'react';
import {Editor} from '@tinymce/tinymce-react';

export default function ({label, name, setValue, register, data, errorMessage}) {

    const handleEditorChange = description => {
        setValue(name, description);
    }

    return (
        <div className="form-group">
            <h5 className="col-form-label">{label}</h5>
            <input type="hidden" name={name} ref={register}/>
            <Editor
                initialValue={data}
                init={{
                    convert_urls: false,
                    branding: false,
                    menubar: false,
                    plugins: [
                        'autoresize advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                        'undo redo | link image |formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | ',
                    automatic_uploads: true,
                    file_picker_types: 'image',

                    images_upload_handler: function (blobInfo, success) {
                        let data = new FormData();
                        data.append('image', blobInfo.blob(), blobInfo.filename());
                        axios.post('/api/admin/upload-image', data).then(res => {
                            success(res.data.image);
                        })
                    },

                    init_instance_callback: function () {
                        let freeTiny = document.querySelector('.tox .tox-notification--in');
                        freeTiny.style.display = 'none';
                    }

                }}

                onEditorChange={handleEditorChange}
            />
            <span className="error invalid-feedback" style={{display: 'block'}}>{errorMessage}</span>

        </div>
    );

}
