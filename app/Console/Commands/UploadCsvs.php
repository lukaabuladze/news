<?php

namespace App\Console\Commands;

use App\Models\Country;
use App\Models\Driver;
use App\Models\Location;
use Illuminate\Console\Command;

class UploadCsvs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'upload-csvs';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Upload CSV files';

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
     * @return mixed
     */
    public function handle()
    {
        dump("Saving locations...");

        $this->data("locations")->each(function ($location) {
            dump( "$location[0] is saving...");

            Location::updateOrCreate([
                "id" => $location[0],
            ], [
                "ka" => ['name' => $location[1], 'url' => $location[8]],
                "en" => ['name' => $location[2], 'url' => $location[9]],
                "ru" => ['name' => $location[3], 'url' => $location[7]],
                "coordinates" => $location[4],
                "time" => $location[5],
                "is_mandatory" => $location[6],
            ]);

        });

        dump("Saving countries...");

        $this->data("countries")->each(function ($country) {
            dump( "$country[0] is saving...");

            Country::updateOrCreate([
                "code" => $country[1],
            ], [
                "ka" => ['name' => $country[2]],
                "en" => ['name' => $country[3]],
                "ru" => ['name' => $country[4]],
                "phone_code" => $country[5],
            ]);

        });

    }

    private function data(string $path)
    {
        $path = public_path("csvs/$path.csv");

        $data = array_map('str_getcsv', file($path));

        return collect($data)->slice(1);
    }
}
