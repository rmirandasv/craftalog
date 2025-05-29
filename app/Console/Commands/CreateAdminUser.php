<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use function Laravel\Prompts\{text, password, confirm, info, error};

class CreateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'craftalog:create-admin-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an admin user for the Craftalog application';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = text('Enter the admin user name');
        $email = text('Enter the admin user email');
        $password = password('Enter the admin user password');
        $confirmPassword = password('Confirm the admin user password');

        if ($password !== $confirmPassword) {
            error('Passwords do not match. Please try again.');
            return 1;
        }

        if (!confirm('Do you want to create the admin user?')) {
            info('Admin user creation cancelled.');
            return 0;
        }

        User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password),
            'is_admin' => true,
        ]);

        info(sprintf("Admin user created successfully. You can now log in at %s/admin", config('app.url')));
    }
}
