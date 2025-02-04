# 📚 EduShelf - Library Management System

Welcome to **EduShelf**, a comprehensive **Library Management System** designed to make borrowing and managing books easier and more efficient. With a seamless user experience and powerful admin tools, EduShelf simplifies library operations🚀

---

## **✨ Core Features**

### **📖 Book Catalog**
- Browse and filter books by category, title, author, and rating.
- View detailed book descriptions with images and ratings.

### **📚 Borrow & Return Books**
- Users can borrow books, with records maintained in the system.
- Return borrowed books, updating the inventory instantly.

### **🛠️ User Panel**
- Users can **add, update, and delete** book details.
- Track the statistics of borrowed and returned books.

### **🔒 Secure Authentication**
- Private routes protect important pages like borrowing and returning books.
- User authentication ensures a secure experience.

### **📱 Fully Responsive Design**
- Optimized for desktops, tablets, and mobile devices.

### **🎨 Interactive Animations**
- Engaging animations powered by **Framer Motion**.

---

## **🚀 Live Demo**

[EduShelf - Live Website](https://assignment---11-21024.web.app)

---

## **📚 Tech Stack**

### **Frontend:**
- React.js
- Tailwind CSS
- Daisy UI
- React Router
- React Toastify (Notifications)
- Framer Motion (Animations)

### **Backend:**
- Node.js
- Express.js
- MongoDB
- Firebase & JWT for Authentication
- Cors & Cookie Parser

### **Additional Tools:**
- Axios for API requests
- Sweet Alert for user-friendly popups
- Chart.js for data visualization (admin statistics)

---

## **📦 Dependencies**

### **Frontend Dependencies (`client/package.json`)**
- `react`
- `react-router-dom`
- `tailwindcss`
- `daisyui`
- `react-toastify`
- `axios`
- `firebase`
- `react-icons`
- `framer-motion`

### **Backend Dependencies (`server/package.json`)**
- `express`
- `cors`
- `dotenv`
- `jsonwebtoken`
- `bcryptjs`
- `mongoose`
- `cookie-parser`
- `nodemon` (devDependency)

---

## **💻 Running the Project Locally**

Follow these steps to set up **EduShelf** on your local machine.

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/edushelf.git
cd edushelf
```

### **2️⃣ Setup the Backend**
```bash
cd server
npm install  # Install backend dependencies
```

#### **Configure `.env` File for Backend**
Create a `.env` file inside the `server/` directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

#### **Start the Backend Server**
```bash
npm run dev  # Runs the server with nodemon
```

---

### **3️⃣ Setup the Frontend**
```bash
cd ../client
npm install  # Install frontend dependencies
```

#### **Configure `.env` File for Frontend**
Create a `.env` file inside `client/` and add:
```
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
```

#### **Start the Frontend**
```bash
npm run dev  # Runs the React frontend
```

Now, open **http://localhost:5173/** in your browser to see **EduShelf** in action! 🚀

---

## **🛠️ Contributing**
We welcome contributions! Follow these steps to contribute:
1. **Fork** the repository.
2. **Create a feature branch** (`git checkout -b feature-name`).
3. **Commit your changes** (`git commit -m "Added new feature"`).
4. **Push to your branch** (`git push origin feature-name`).
5. **Create a Pull Request**.

---

## **📜 License**
This project is **open-source** and licensed under the **MIT License**.

---