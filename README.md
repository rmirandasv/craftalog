# Craftalog

**A modern, open-source PDF catalog generator built with Laravel and React**

Generate beautiful, customizable product catalogs in PDF format with an intuitive interface and real-time preview.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![PHP](https://img.shields.io/badge/PHP-8.2+-777BB4?logo=php)
![Laravel](https://img.shields.io/badge/Laravel-11.x-FF2D20?logo=laravel)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)

## ✨ Features

- 📚 **Catalog Management**: Create and manage multiple product catalogs
- 🎨 **Full Customization**: Choose colors, layouts, and products per page
- 👀 **Live Preview**: See your catalog in real-time as you design it
- 📦 **Product Management**: Organize products with categories, prices, and images
- 🎯 **User-Friendly Interface**: Clean, modern UI built with shadcn/ui
- 📄 **Professional PDFs**: Generate high-quality PDF catalogs with @react-pdf/renderer
- 🌓 **Dark Mode**: Full dark mode support
- 🔐 **Authentication**: Secure user authentication with Laravel Fortify
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Tech Stack

### Backend
- **Laravel 11.x** - PHP framework
- **SQLite/MySQL/PostgreSQL** - Database
- **Inertia.js** - Modern monolith architecture

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **@react-pdf/renderer** - PDF generation
- **Vite** - Build tool

## 📋 Requirements

- PHP 8.2 or higher
- Composer
- Node.js 18+ & npm/pnpm
- SQLite, MySQL or PostgreSQL

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/rmirandasv/craftalog.git
cd craftalog
```

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Install Node dependencies

```bash
npm install
# or
pnpm install
```

### 4. Environment setup

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Database setup

```bash
# For SQLite (default)
touch database/database.sqlite

# Run migrations
php artisan migrate

# (Optional) Seed with sample data
php artisan db:seed
```

### 6. Build assets

```bash
npm run build
# or for development
npm run dev
```

### 7. Start the server

```bash
php artisan serve
```

Visit `http://localhost:8000` in your browser.

## 🎯 Quick Start

1. **Register an account** at `/register`
2. **Create categories** for your products (e.g., "Electronics", "Furniture")
3. **Add products** with names, descriptions, prices, and images
4. **Create a catalog** and select products to include
5. **Customize** colors, layout, and products per page
6. **Preview** your catalog in real-time
7. **Download** your professional PDF catalog

## 📖 Usage Examples

### Creating Your First Catalog

1. Navigate to **Catalogs → Create Catalog**
2. Fill in catalog details:
   - Catalog Name
   - Company Name
   - Upload a logo (optional)
3. Customize colors in the **Customization** section
4. Set **Products per Page** (1-12)
5. Select products to include
6. See live preview on the right
7. Click **Create Catalog**

### Customization Options

- **Primary Color**: Main titles and headings
- **Secondary Color**: Subtitles and metadata
- **Accent Color**: Borders, dividers, and prices
- **Text Color**: Body text
- **Background Color**: Page background
- **Products per Page**: 1-12 products per PDF page

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Roadmap

- [ ] Multi-language support
- [ ] Templates library
- [ ] Bulk product import (CSV/Excel)
- [ ] Catalog sharing via URL
- [ ] Watermark support
- [ ] Advanced PDF customization
- [ ] API for external integrations
- [ ] Catalog analytics

## 💡 Why Craftalog?

Craftalog was built to solve the problem of creating professional product catalogs without expensive design software. Whether you're a small business owner, freelancer, or agency, Craftalog makes it easy to:

- Create beautiful catalogs in minutes
- Maintain brand consistency with custom colors
- Update catalogs quickly when products change
- Generate PDFs ready for printing or digital distribution

## 🙏 Acknowledgments

Built with amazing open-source tools:
- [Laravel](https://laravel.com) - Backend framework
- [React](https://react.dev) - UI library
- [Inertia.js](https://inertiajs.com) - Modern monolith
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - Components
- [@react-pdf/renderer](https://react-pdf.org) - PDF generation

## 📧 Contact

Project Link: [https://github.com/rmirandasv/craftalog](https://github.com/yourusername/craftalog)
