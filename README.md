🌍 Wanderlust

A full-stack Travel & Property Listing Web Application built with Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, and Passport.js. This project allows users to explore travel listings, create and manage their own listings, and share reviews and ratings.

🚀 Built as part of my Full Stack Web Development learning journey.

✨ Features

🏡 Create new property/travel listings

📖 View all available listings

🔍 View detailed information about individual listings

✏️ Edit existing listings

🗑️ Delete listings

⭐ Add reviews and ratings

🔐 User registration and login

👤 Authentication and authorization

🔒 Protected routes for authorized actions

💬 Flash messages for user feedback

💾 MongoDB database integration

🗄️ MongoDB Atlas support

📦 MongoDB-backed session storage

🎨 Responsive and clean user interface

⚠️ Centralized error handling and validation

🛠️ Tech Stack

Frontend

HTML5

CSS3

JavaScript

Bootstrap

EJS

EJS-Mate

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

MongoDB Atlas

Authentication & Sessions

Passport.js

Passport Local Strategy

Express Session

Connect-Mongo

Other Tools

Joi

Method Override

Connect-Flash

Nodemon

Git & GitHub

## 📂 Project Structure

```text
wanderlust-fullstack/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── user.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── error.ejs
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
│
├── app.js
├── cloudconfig.js
├── middleware.js
├── schema.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

⚙️ Installation

1️⃣ Clone the repository

git clone https://github.com/harshpandey3187/wanderlust-fullstack.git

2️⃣ Navigate to the project folder

cd wanderlust-fullstack

3️⃣ Install dependencies

npm install

4️⃣ Configure environment variables

Create a .env file in the project root:

ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret

⚠️ Never commit your .env file or expose your MongoDB credentials publicly.

5️⃣ Run the application

node app.js

or

nodemon app.js

6️⃣ Open in browser

http://localhost:8080

📌 Main Routes

Method

Route

Description

GET

/listings

View all listings

GET

/listings/new

Show new listing form

POST

/listings

Create a listing

GET

/listings/:id

View a listing

GET

/listings/:id/edit

Show edit listing form

PUT/PATCH

/listings/:id

Update a listing

DELETE

/listings/:id

Delete a listing

GET

/signup

Show signup page

POST

/signup

Create a user account

GET

/login

Show login page

POST

/login

Authenticate user

GET

/logout

Log out user

POST

/listings/:id/reviews

Add a review

DELETE

/listings/:id/reviews/:reviewId

Delete a review

📖 What I Learned

Through this project, I gained hands-on experience with:

Express.js Routing

CRUD Operations

MongoDB & Mongoose

MongoDB Atlas

RESTful APIs

EJS Templating

MVC Architecture

Authentication & Authorization

Passport.js

Express Sessions

Session Storage with Connect-Mongo

Middleware

Joi Validation

Error Handling

Git & GitHub Workflow

🚀 Future Improvements

☁️ Deploy the application

🗺️ Add interactive maps and location-based search

🔍 Advanced search and filtering

❤️ Favorites / Wishlist functionality

📷 Improved image upload and cloud storage

📄 Pagination

📱 Further UI/UX improvements

🔔 Real-time notifications

🌙 Dark Mode

🤝 Contributing

Contributions are welcome!



👨‍💻 Author

Harsh Pandey

GitHub: https://github.com/harshpandey3187

LinkedIn: https://www.linkedin.com/in/harsh-pandey-2abba337a/

⭐ Show Your Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

Happy Coding! 🚀