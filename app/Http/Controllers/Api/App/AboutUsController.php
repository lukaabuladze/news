<?php

namespace App\Http\Controllers\Api\App;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AboutUsRequest;
use App\Models\AboutUs;

class AboutUsController extends Controller
{

    public function index()
    {
        $aboutUs = AboutUs::where('active', 1)->first();

        return [
            'status' => 'success',
            'data' => [
                'aboutUs' => $aboutUs
            ]
        ];
    }

}
