# Snapie - Secure Messaging Platform

A modern, full-featured messaging application built with React, Node.js, Socket.IO, Firebase Authentication, and MongoDB. Snapie offers secure, fast, and private communication with advanced features.

## Features

- 🔐 **Firebase Phone Authentication** - Secure login with phone number and OTP
- 💬 **Real-time Messaging** - Instant messaging with Socket.IO
- 👥 **Contact Management** - View and search contacts
- 📱 **WhatsApp-style UI** - Material-UI components with WhatsApp design
- 🔔 **Message Status** - Delivery and read receipts
- ⌨️ **Typing Indicators** - See when someone is typing
- 🟢 **Online Status** - See who's online
- 📁 **File Sharing** - Send images, documents, and voice messages
- 🎥 **Voice/Video Calls** - WebRTC integration
- 👥 **Group Chats** - Create and manage group conversations

## Tech Stack

### Frontend
- React 18 with TypeScript
- Material-UI (MUI) for components
- Firebase SDK for authentication
- Socket.IO client for real-time communication
- Redux Toolkit for state management

### Backend
- Node.js with Express.js
- TypeScript
- Socket.IO for real-time communication
- Firebase Admin SDK
- MongoDB with Mongoose
- JWT for additional authentication

## Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Firebase project with Authentication enabled
- Phone authentication provider configured in Firebase

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
# Install root dependencies
npm run install-all
```

### 2. Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Authentication > Phone authentication
3. Add your domain to authorized domains
4. Download Firebase config and service account key

### 3. Environment Configuration

#### Server (.env)
```bash
cp server/.env.example server/.env
```

Edit `server/.env`:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/whatsapp_clone
CLIENT_URL=http://localhost:3000
FIREBASE_ADMIN_PRIVATE_KEY_PATH=./config/firebase-admin-sdk.json
JWT_SECRET=your_jwt_secret_key_here
```

#### Client (.env)
```bash
cp client/.env.example client/.env
```

Edit `client/.env`:
```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_SERVER_URL=http://localhost:5000
```

### 4. Firebase Configuration

1. Update `client/src/config/firebase.ts` with your Firebase config
2. Place your Firebase Admin SDK JSON file in `server/src/config/firebase-admin-sdk.json`

### 5. Database Setup

Make sure MongoDB is running locally or update the connection string in the server environment file.

## Running the Application

### Development Mode (Both servers)
```bash
npm run dev
```

### Individual Services

#### Run Server Only
```bash
npm run server
```

#### Run Client Only
```bash
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Usage

1. **Phone Registration**: Enter your phone number with country code (+1234567890)
2. **OTP Verification**: Enter the 6-digit code sent to your phone
3. **Chat Interface**: Select contacts and start messaging
4. **Real-time Features**: Messages appear instantly, typing indicators work
5. **Enhanced Features**: Send voice messages, files, make calls

## Project Structure

```
whatsapp-clone/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── config/         # Firebase configuration
│   │   └── ...
│   ├── public/
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── middleware/     # Auth middleware
│   │   ├── routes/         # API routes
│   │   ├── socket/         # Socket.IO handlers
│   │   └── index.ts        # Main server file
│   └── package.json
└── package.json            # Root package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/verify-token` - Verify Firebase token
- `GET /api/auth/profile` - Get user profile

### Messages
- `POST /api/messages/send` - Send message
- `GET /api/messages/conversation/:id` - Get conversation messages

### Users
- `GET /api/users` - Get all users
- `GET /api/users/search` - Search users

## Socket Events

### Client → Server
- `join` - Join user room
- `send_message` - Send a message
- `typing` - Typing indicator

### Server → Client
- `receive_message` - Receive new message
- `message_sent` - Message delivery confirmation
- `user_typing` - User typing notification

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Troubleshooting

### Common Issues

1. **Firebase Auth Error**: Make sure your Firebase config is correct and phone auth is enabled
2. **Socket Connection Error**: Ensure the backend server is running on port 5000
3. **MongoDB Connection Error**: Check if MongoDB is running and connection string is correct
4. **CORS Error**: Verify CLIENT_URL environment variable matches your frontend URL

### Development Tips

- Use Chrome DevTools to debug Firebase authentication
- Check browser console for Socket.IO connection status
- Monitor MongoDB queries for database issues
- Use Firebase Console to view authentication logs

## Future Enhancements

- [ ] End-to-end encryption
- [ ] Voice messages with audio recording
- [ ] File sharing with drag & drop
- [ ] Group chat management
- [ ] Message reactions and replies
- [ ] Dark mode theme
- [ ] Push notifications
- [ ] Multi-device synchronization
- [ ] Message search functionality
- [ ] User presence indicators