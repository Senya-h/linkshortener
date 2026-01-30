# Authentication Guidelines

This document outlines authentication requirements for the link-shortener application.

## Overview

All authentication in this application is handled exclusively by **Clerk**. No alternative authentication methods should be implemented or used.

## Core Requirements

- **Clerk is the sole authentication provider** — Do not implement custom auth, OAuth providers, or any alternative methods.
- **Clerk modals** — All sign-in and sign-up flows must launch as modals, not separate pages.
- **Protected routes** — The `/dashboard` route requires user authentication and must reject unauthenticated users.
- **Homepage redirect** — Logged-in users accessing `/` (homepage) must be automatically redirected to `/dashboard`.

## Implementation Guidelines

### Protected Routes

Use Clerk's middleware or protection utilities to:
- Block unauthenticated access to `/dashboard`
- Return appropriate error responses or redirect to sign-in modal for unauthorized requests

### Homepage Logic

Implement conditional routing on the homepage (`/`) to:
1. Check if user is authenticated
2. Redirect authenticated users to `/dashboard`
3. Display public homepage content to unauthenticated users

### Clerk UI Components

- Use Clerk's built-in modal/dialog components for sign-in and sign-up
- Never create custom authentication forms or pages
- Leverage Clerk's session management and user object for authentication state

## Testing

- Verify unauthenticated users cannot access `/dashboard`
- Verify authenticated users on `/` redirect to `/dashboard`
- Verify sign-in/sign-up modals display correctly and don't redirect to separate pages
