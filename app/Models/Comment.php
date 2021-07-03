<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['post_id', 'author', 'text'];

    protected $casts = [
        'created_at' => 'datetime:d.m.Y'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

}
