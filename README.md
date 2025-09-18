# Next.js Supabase Shadcn Auth 2025

A modern authentication starter built with **Next.js 15**, **Supabase**, and **Shadcn UI**. Perfect for adding secure, production-ready auth to any Next.js application with minimal setup.

---

## ✨ Features
- 🔐 Supabase Authentication with email, password & OAuth providers  
- ⚡ Next.js 15 App Router + Turbopack  
- 🎨 Beautiful UI with Shadcn components (Radix + Tailwind)  
- 🔄 Session management via Supabase middleware  
- 📱 Responsive design out of the box  
- 🧩 Ready-to-use auth components: Login, Signup, Reset, Update Password  
- 🚀 Easy integration into any Next.js app  

---

![Next Supa Shadcn Template](https://repository-images.githubusercontent.com/1052965512/f74b11e4-ea9d-422d-8573-b50a65de5c5d)

## 📁 Project Structure
```
├── app/
│   └── (auth context, routes, pages)
├── components/
│   └── ui/
│       ├── auth-button.tsx
│       ├── login-form.tsx
│       ├── logout-button.tsx
│       ├── sign-up-form.tsx
│       ├── forgot-password-form.tsx
│       ├── update-password-form.tsx
│       └── ...
├── lib/
│   └── supabase/
│       ├── client.ts
│       ├── middleware.ts
│       ├── server.ts
│       ├── types.ts
│       └── utils.ts
├── public/
│   └── (logo, favicon, assets)
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

![Next Supa Shadcn Template](https://pbs.twimg.com/media/G1HygYAWgAEPx20?format=jpg&name=4096x4096)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/next-supabase-shadcn-auth.git
cd next-supabase-shadcn-auth
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Set Up Environment
Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Start the Development Server
```bash
npm run dev
# or
pnpm dev
```
The app will be available at **http://localhost:3000**

---

## ✍️ Usage
- Import the ready-made components (LoginForm, SignUpForm, LogoutButton, etc.) directly into your pages.  
- Use the provided `AuthContext` to access `user`, `loading`, and session state globally.  
- Supabase middleware handles token refresh and server-side validation automatically.  

---

## 🎨 Customization
- Modify **Tailwind config** to adjust your theme.  
- Extend **Shadcn UI** with additional components.  
- Customize auth flows inside **lib/supabase/**.  

---

## 📦 Building for Production
```bash
npm run build
# or
pnpm build
```
Your app will be optimized and ready for deployment.

---

## 🚀 Deployment
Deploy easily to:
- Vercel  
- Netlify  
- Render  
- Cloudflare Pages  

---

## ❓ FAQ

**Why Supabase for Auth?**  
Supabase provides secure, scalable auth with minimal setup, including OAuth providers, email magic links, and password resets.  

**Can I extend the auth logic?**  
Yes. Customize `middleware.ts` or add new Supabase functions for advanced flows.  

**Is it production-ready?**  
Yes. This template uses Next.js App Router and Supabase’s secure APIs.  

---

## 👨‍💻 About the Creator
Built by Guillaume Duhan — CTO, indie builder, and educator. Passionate about building SaaS, templates, and tools that help developers ship faster.  

---

## 📎 License
This project is licensed under the **MIT**.
