<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $password = bcrypt('01234567');

        $admin = ['username' => 'Admin', 'role' => 1, 'phone' => '555555555', 'email' => 'admin@test.com', 'password' => $password];

        $moder= ['username' => 'Moder', 'role' => 2, 'phone' => '666666666', 'email' => 'moder@test.com', 'password' => $password];


        User::upsert([$admin, $moder], ['email']);
    }
}
