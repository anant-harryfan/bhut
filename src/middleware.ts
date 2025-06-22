import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    '/',
    '/sign-in',
    '/sign-up',
    '/products',
    '/products/:id',
    '/categories',
    '/categories/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/products',
    '/api/products/:id',
    '/api/categories',
    '/api/categories/:id',
    '/search',
  ],
  // Routes that can be accessed without authentication info
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};