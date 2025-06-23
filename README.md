


- 🛍️ **Product Browsing**: Browse products by category, search, and filter options
- 🔍 **Product Details**: View detailed product information, specifications, and related products
- 🛒 **Shopping Cart**: Add, update, and remove items from your cart
- 👤 **User Authentication**: Secure authentication with Clerk
- 💳 **Checkout Process**: Multi-step checkout with shipping, payment, and order review
- 📱 **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop
- 🌙 **Dark Mode Support**: Toggle between light and dark themes
- 📦 **Order Management**: View order history and track order status



- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **State Management**: TanStack Query (React Query)
- **Payments**: Stripe (simulated in this demo)
- **Image Storage**: Cloudinary
- **Form Validation**: Zod
- **UI Components**: Custom components with Radix UI primitives





- Node.js 18+ and npm/yarn
- PostgreSQL database
- Clerk account for authentication
- Stripe account for payments (optional for demo)
- Cloudinary account for image uploads (optional for demo)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/amazon-clone.git
cd amazon-clone
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

.env bana or usme jo maine discord pe bejha hai vo copy paste karde




4. Set up the database

```bash
npx prisma migrate dev   // abhi ye nahi karna hai 
npx prisma db seed
```

5. Start the development server

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/        # React components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and shared logic
│   ├── middleware.ts     # Next.js middleware (auth protection)
│   └── providers/        # React context providers
├── .env.example          # Example environment variables
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

This application can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by Amazon
- Built with modern web technologies
- Created for educational purposes
