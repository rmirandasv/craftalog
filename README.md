# Craftalog

Craftalog is a web-based catalog management system built with modern technologies, designed to help businesses showcase their products efficiently.

## Features

- Admin panel for managing categories, brands, and products
- User-friendly frontend for catalog browsing
- Responsive design for various devices
- Role-based access control (admin vs regular users)

## Tech Stack

- Backend: Laravel 12
- Frontend: React 19 with TypeScript
- Admin Panel: Filament
- UI Components: Shadcn
- CSS Framework: Tailwind CSS 4
- API: Inertia.js 2.x

## Getting Started

### Prerequisites

- PHP 8.x
- Node.js 16.x or higher
- Composer
- MySQL or PostgreSQL

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rmirandasv/craftalog.git
```

2. Install PHP dependencies:

```bash
composer install
```

2. Install Javascript dependencies:

```bash
npm install
```

4. Copy the `.env.example` file to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

5. Generate an application key:

```bash
php artisan key:generate
```

6. Run database migrations:

```bash
php artisan migrate
```

7. Build frontend assets:

```bash
npm run build
```

8. Start the development server:

```bash
composer dev
```
## Usage

- Access the admin panel at `/admin`
- Browse the catalog at the root URL

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Ronald Miranda - [@rmirandasv](https://github.com/rmirandasv)

Project Link: [https://github.com/rmirandasv/craftalog](https://github.com/rmirandasv/craftalog)
