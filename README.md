# 🚗 BD Motors

BD Motors is a full-stack **Car Service Web Application** built with **Next.js (App Router), MongoDB, and TailwindCSS**.  
It allows users to explore car services, view details, and (for admins) add/manage services.  

🔗 **Live Demo:** [Visit Live Site](https://nextjs-project-2-roan.vercel.app/)

---

## 📖 Short Project Description
BD Motors is designed to help car owners manage their vehicle services online.  
Users can browse available services, check pricing, and view details.  
Admins can securely add new services through a form, which updates in real-time from MongoDB.  
The project demonstrates **full-stack CRUD operations, authentication, and responsive UI** using modern web technologies.  

---

## ⚡ Setup & Installation Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/bd-motors.git
   cd bd-motors




**Route Summary**
- Public Routes

/ → Home page with banner & intro

/products → Shows all car services (from MongoDB)

/services/[id] → Individual service details page

Protected/Admin Routes

/addProducts → Add a new service (only accessible to admins)


**API Routes**

/api/services

GET → Fetch all services

POST → Add a new service
 

**Modern UI/UX**

Responsive design with TailwindCSS + DaisyUI

Interactive animations with Framer Motion

Clean, mobile-friendly layout


**Tech Stack**

- Frontend

Next.js (App Router)

React

Tailwind CSS + DaisyUI

Framer Motion

- Backend

Node.js + Express.js (via Next.js API routes)

MongoDB (Database)

**Other Tools**

Git, GitHub (Version Control)

Vercel (Deployment)
