<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AboutUsRequest;
use App\Models\AboutUs;
use Illuminate\Http\Response;

class AboutUsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */

    public function index()
    {
        $aboutUs = AboutUs::firstOrCreate(['active' => 1]);

        return Response([
            'status' => 'success',
            'data' => [
                'aboutUs' => $aboutUs
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param AboutUsRequest $request
     * @param $id
     * @return Response
     */
    public function update(AboutUsRequest $request, $id)
    {
        $aboutUs = AboutUs::find($id);

        $aboutUs->update($request->validated());

        return Response(['status' => 'success']);
    }

}
