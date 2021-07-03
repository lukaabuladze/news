<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Mail;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sendMail($to_name, $to_email, $subject, $text, $from_name='', $replay_to='')
    {
        $data = array('name' => $to_name, "body" => $text);
        Mail::send("mail", $data, function ($message) use ($subject, $to_name, $to_email, $from_name, $replay_to) {
            $message->to($to_email, $to_name);
            $message->subject($subject);

            if($replay_to){
                $message->replyTo($replay_to, $from_name);
            }
        });

        return ['status' => 'message sent'];
    }

}
