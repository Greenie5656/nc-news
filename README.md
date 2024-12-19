NC News 📰
🌐 Live Demo Links


Frontend: NC News Website
API: Backend API

📝 Project Overview

NC News is a full-stack web application that serves as a news aggregation and discussion platform, similar to Reddit. Users can read articles, filter them by topics, sort them by various criteria, comment on articles, and vote on content.
✨ Key Features

📚 Browse articles by topics (Coding, Football, Cooking)
🔄 Sort articles by date, comments, or votes
📄 View detailed article pages with comments
💬 Add and delete comments
👍 Vote on articles
📱 Responsive design for all devices

🔗 Repository Links


Frontend Repository: https://github.com/Greenie5656/nc-news
Backend Repository: https://github.com/Greenie5656/My-NC-News

🛠️ Technical Requirements

Frontend Requirements

Node.js v22.11.0 or higher
React 18+
Modern web browser with JavaScript enabled

Backend Requirements

Node.js v22.11.0 or higher
PostgreSQL v14.0 or higher

⚙️ Local Setup Instructions

🖥️ Frontend Setup

Clone the repository
bash - git clone https://github.com/Greenie5656/nc-news
cd nc-news

Install dependencies
bash - npm install

Start the development server
bash - npm run dev

Open your browser and navigate to:
http://localhost:5173


⚡ Backend Setup

Clone the repository
bash - git clone https://github.com/Greenie5656/My-NC-News
cd My-NC-News

Install dependencies
bash - npm install

Set up environment variables
Create two .env files in the root directory:
.env.test
PGDATABASE=nc_news_test
.env.development
PGDATABASE=nc_news

Setup and seed the database
bash - npm run setup-dbs
npm run seed

Start the server
bash - npm start


🧪 Testing

The backend includes a comprehensive test suite. To run the tests:
bashCopynpm test
💻 Technologies Used

Frontend Technologies

⚛️ React
🔄 React Router
🌐 Axios
🎨 CSS3

Backend Technologies

💚 Node.js
⚡ Express
🐘 PostgreSQL
🧪 Jest (testing)


<div align="center">
This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by <a href="https://northcoders.com/">Northcoders</a>
</div>