<?php

namespace App\Http\Controllers\Api\App;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PostRequest;
use App\Http\Requests\App\CommentRequest;
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

        $categories = Category::with('posts.category', 'posts.comments')->get();

//        $posts = Post::with('category', 'comments');

//        $featuredPosts = $posts->where('is_featured', 1)->latest()->take(5)->get();

        return Response([
            'status' => 'success',
            'data' => [
                'categories' => $categories,
//                'posts' => $posts,
                'featured' => Post::with('category', 'comments')->where('is_featured', 1)->latest()->take(5)->get()
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
        $post = Post::with('category', 'comments')->where('id', $id)->first();

        return response([
            'status' => 'success',
            'data' => [
                'post' => $post,
            ]
        ]) ;
    }

    /**
     * add comment
     *
     * @param CommentRequest $request
     * @param Post $post
     * @return Response
     */

    public function addComment(CommentRequest $request, Post $post)
    {
        $data = $request->validated();

        $post->comments()->create($data);

        $post->load('comments', 'category');

        return response([
            'status' => 'success',
            'data' => [
                'post' => $post,
            ]
        ]) ;
    }
}
