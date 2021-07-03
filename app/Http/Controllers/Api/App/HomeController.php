<?php

namespace App\Http\Controllers\Api\App;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PostRequest;
use App\Models\Category;
use App\Models\ContactUs;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Yajra\DataTables\DataTables;

class HomeController extends Controller
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
                'categories' => Category::all(),
                'contactUs' => ContactUs::where('active', 1)->first()
            ]
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {

        return Response([
            'status' => 'success',
            'data' => [
                'categories' => Category::all(),
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $post = Post::with('category', 'comments')->where('id', $id)->first();

        return response([
            'status' => 'success',
            'data' => [
                'post' => $post,
            ]
        ]) ;
    }
}
