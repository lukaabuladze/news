<?php

namespace App\Http\Controllers\Api\App;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PostRequest;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Yajra\DataTables\DataTables;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {

        return Response([
            'status' => 'success',
            'data' => [

            ]
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  $slug
     * @return Response
     */
    public function show($slug)
    {
        $category = Category::with('posts.comments')->where('slug', $slug)->first();

        return response([
            'status' => 'success',
            'data' => [
                'category' => $category,
            ]
        ]) ;
    }
}
