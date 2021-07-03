<?php

namespace App\Http\Controllers\Api\App;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ContactUsRequest;
use App\Models\ContactUs;
use Illuminate\Http\Request;
use Illuminate\Notifications\Messages\MailMessage;

class ContactUsController extends Controller
{

    public function index()
    {
        $contactUs = ContactUs::where('active', 1)->first();

        return [
            'status' => 'success',
            'data' => [
                'contactUs' => $contactUs,
            ]
        ];
    }

    public function sendEmail(Request $request)
    {

        $contact = ContactUs::where('active', 1)->first();

        $to_name = "პრესა";
        $to_email = $contact->email;
        $replay_to = $request->email;
        $from_name = $request->name;
        $subject = 'კონტაქტი';
        $text = $request->message;

        $this->sendMail($to_name, $to_email, $subject, $text, $from_name, $replay_to);

        return [
            'status' => 'success',
        ];
    }

}
