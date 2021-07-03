<?php

use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\AuthController;
use App\Http\Controllers\Api\Admin\AboutUsController;
use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Admin\ContactUsController;
use App\Http\Controllers\Api\Admin\ImageUploadController;
use App\Http\Controllers\Api\Admin\PostController;
use App\Http\Controllers\Api\App\HomeController;
use App\Http\Controllers\Api\App\PostController as AppPostController;
use App\Http\Controllers\Api\App\CategoryController as AppCategoryController;
use App\Http\Controllers\Api\App\AboutUsController as AppAboutUsController;
use App\Http\Controllers\Api\App\ContactUsController as AppContactUsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'app'], function () {

    Route::post('/posts/{post}/comment', [AppPostController::class, 'addComment']);
    Route::post('/contact-us/send-email', [AppContactUsController::class, 'sendEmail']);

    Route::resources([
        'home' => HomeController::class,
        'posts' => AppPostController::class,
        'categories' => AppCategoryController::class,
        'about-us' => AppAboutUsController::class,
        'contact-us' => AppContactUsController::class
    ]);
});

Route::group(['prefix' => 'admin'], function () {

    Route::post('/login', [AuthController::class, 'login']);

    Route::post('/upload-image', [ImageUploadController::class, 'upload']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::resources([
            'users' => UserController::class,
            'posts' => PostController::class,
            'categories' => CategoryController::class,
            'about-us' => AboutUsController::class,
            'contact-us' => ContactUsController::class
        ]);
    });
});
