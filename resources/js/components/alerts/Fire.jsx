import React from "react";
import Swal from "sweetalert2";

export const successFire = (message = 'მონაცემები წარმატებით განახლდა') => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 1500
  })
}


export const deleteFire = ({url, thisObject ,callBack=null}) => {
  Swal.fire({
    title: "<p class='fs-22'>ნამდვილად გსურთ წაშლა ?</p>",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: "<span class='fs-14'>დიახ</span>",
    cancelButtonText: "<span class='fs-14'>არა</span>",
  }).then((result) => {
    if (result.value) {
      axios.delete(url, {}).then(res => {
        if (res.data.status == "success")  {
          Swal.fire(
            "<p class='fs-22'>წაიშალა!</p>",
            "<p class='fs-14'>მონაცემი წარმატებით წაიშალა.</p>",
            'success'
          )
          $(thisObject).closest('tr').remove();
          if(callBack) callBack();
        } else if(res.data?.message) {
          Swal.fire(`<p class='fs-22'>${res.data.message}</p>`);
        }
      });

    }
  })
};