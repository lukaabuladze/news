<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ContactUsRequest;
use App\Models\ContactUs;
use Illuminate\Http\Response;

class ContactUsController extends Controller
{

    public function index()
    {
        $contactUs = ContactUs::firstOrCreate(['active' => 1]);

        return [
            'status' => 'success',
            'data' => [
                'contactUs' => $contactUs,
            ]
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ContactUsRequest $request
     * @param $id
     * @return Response
     */
    public function update(ContactUsRequest $request, $id)
    {

        $contactUs = ContactUs::find($id);

        $contactUs->update($request->validated());

        return Response(['status' => 'success']);
    }

}
