<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PostRequest;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Yajra\DataTables\DataTables;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {

        $posts = Post::query();

        return DataTables::of($posts)
            ->addColumn("edit", function ($item) {
                return '<button type="button" class="btn btn-primary edit" item="' . $item->id . '">ცვლილება</button>';
            })
            ->addColumn("delete", function ($item) {
                return '<button type="button" class="btn btn-danger delete" item="' . $item->id . '">წაშლა</button>';
            })
            ->rawColumns(["edit","delete"])
            ->make(TRUE);


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
     * Store a newly created resource in storage.
     *
     * @param PostRequest $request
     * @return Response
     */
    public function store(PostRequest $request)
    {
        $data = $request->validated();

        $data['photo'] = uploadFile("/uploads/posts/", $data['photo']);

        $post = Post::create($data);

        return response([
                'status' => 'success',
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $post = Post::find($id);

        return response([
            'status' => 'success',
            'data' => [
                'post' => $post,
                'categories' => Category::all(),
            ]
        ]) ;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PostRequest $request
     * @param Post $post
     * @return Response
     */
    public function update(PostRequest $request, Post $post)
    {
        $data = $request->validated();

        if($request->hasFile('photo')) {
            $data['photo'] = uploadFile('/uploads/posts', $request->file('photo'));
            deleteFile($post->photo);
        }

        $post->update($data);

        return Response(['status' => 'success']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @return Response
     * @throws \Exception
     */
    public function destroy(Post $post)
    {
        deleteFile($post->photo);

        $post->delete();

        return Response(['status' => 'success']);
    }
}
