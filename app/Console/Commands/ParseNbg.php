<?php

namespace App\Console\Commands;

use App\Models\NbgRate;
use Illuminate\Console\Command;
use SoapClient;

class ParseNbg extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'parse-nbg';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'get nbg rates';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $client = new SoapClient('https://nbg.gov.ge/currency.wsdl');

        NbgRate::create([
            'usd' => $client->GetCurrency('USD'),
            'eur' => $client->GetCurrency('EUR'),
            'exchange_date' => $client->GetDate(),
        ]);
    }
}
