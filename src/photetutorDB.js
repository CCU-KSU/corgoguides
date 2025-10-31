// src/data/phonetutorDB.js

// 👥 User Data
export const users = [
  {
    id: 1,
    fullName: "Miron Carp",
    email: "miron.carp@example.com",
    password: "123456",
    dob: "1998-04-12",
  },
  {
    id: 2,
    fullName: "Swarna Yaswitha",
    email: "yaswitha@example.com",
    password: "password123",
    dob: "2000-06-25",
  },
];

// 📰 Feed Data
export const feedPosts = [
  {
    id: 1,
    title: "App Idea: Reminder Buddy",
    description: "An app to remind you about daily habits and small tasks.",
    date: "2025-10-17",
  },
  {
    id: 2,
    title: "Tip: Try Gesture Navigation",
    description: "Learn how to use gesture navigation on your Android device.",
    date: "2025-10-16",
  },
  {
    id: 3,
    title: "Feature Update: Split-Screen Guide",
    description: "Now you can learn multitasking using our new split-screen tutorial!",
    date: "2025-10-15",
  },
];

// 📱 App Suggestions
export const appSuggestions = [
  { id: 1, name: "Google Maps" },
  { id: 2, name: "Spotify" },
  { id: 3, name: "YouTube" },
  { id: 4, name: "WhatsApp" },
  { id: 5, name: "Instagram" },
];

// 📋 Checklist Data
export const checklistItems = [
  { id: 1, task: "Open App Drawer", done: false },
  { id: 2, task: "Open Google Play", done: false },
  { id: 3, task: "Set Wallpaper", done: false },
  { id: 4, task: "Trial and Error", done: false },
  { id: 5, task: "Try Split Screen", done: false },
];

// 🎓 Tutorial / Content Data
export const tutorials = [
  {
    id: 1,
    title: "Splitscreen",
    description:
      "Learn how to use split-screen mode to multitask effectively. Follow the tutorial and practice using two apps simultaneously.",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // placeholder link
  },
  {
    id: 2,
    title: "Set Wallpaper",
    description: "Steps to customize your phone wallpaper using built-in settings.",
    videoUrl: "",
  },
];