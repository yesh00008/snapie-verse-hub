# Firebase App Check Error Fix

## Problem
`Firebase: Error (auth/firebase-app-check-token-is-invalid.)`

## Root Cause
Firebase App Check is enabled in your Firebase Console but not properly configured in the client app.

## Solution Options

### Option 1: Disable App Check (Recommended for Development)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `chat-giga`
3. Navigate to **App Check** in the left sidebar
4. Find your web app registration
5. **Turn OFF** App Check enforcement for development
6. You can re-enable it later for production

### Option 2: Configure App Check Properly
1. In Firebase Console > App Check
2. Register your domain (localhost:3000 for development)
3. Get a reCAPTCHA site key
4. Update the firebase config with proper App Check setup

### Option 3: Use Debug Token (Already implemented)
The code already includes debug token setup for development:
```javascript
(window as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
```

## Quick Fix Applied
✅ Added debug token configuration
✅ Added proper error handling  
✅ Environment-based App Check configuration
✅ Graceful fallbacks for development

## Test Steps
1. Refresh your browser at http://localhost:3000
2. Try phone authentication again
3. If error persists, disable App Check in Firebase Console

## Firebase Console Link
https://console.firebase.google.com/project/chat-giga/appcheck