<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageUploadController extends Controller
{
    public function upload(Request $request)
    {
        $validator=validator($request->all(),[
            'image'=>'required|image|mimes:png,jpg,jpeg|max:2048'
        ]);

        if ($validator->fails()) return response()->json($validator->errors())->throwResponse();

        $path=uploadFile('/uploads/images',$request->file('image'));

        return [
            'status'=>'success',
            'image'=>$path
        ];

    }
}
