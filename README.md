# WEB103 Prework - *Creatorverse*

Submitted by: **Yash**

About this web app: **A high-energy, visually engaging web application for curating a list of content creators. Built with React and Supabase, it features a modern grid layout with glassmorphism effects and smooth navigation.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] **Picocss is used to style HTML elements**
- [x] **The content creator items are displayed in a creative format, like cards instead of a list**
- [x] **An image of each content creator is shown on their content creator card**

The following **additional** features are implemented:

* [x] **Glassmorphism UI**: Implemented semi-transparent cards with backdrop-blur effects for a modern aesthetic.
* [x] **Dynamic Background**: Added a high-quality abstract background with a dark linear gradient overlay for better text readability.
* [x] **Sticky Navigation**: A global navigation bar stays at the top of the viewport to allow easy access to the creator list or the addition form.
* [x] **Real-time Refresh**: Integrated the `useLocation` hook to automatically re-fetch creator data from Supabase whenever the user navigates back to the homepage.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/your-actual-gif-link.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

## Notes

One of the biggest challenges was ensuring the homepage refreshed correctly after a new creator was added. By utilizing the `useLocation` hook as a dependency in the `useEffect` fetch call, I was able to ensure the UI stays in sync with the Supabase database without requiring a manual page refresh. Additionally, balancing the styles of Pico.css with custom CSS for the card grid required careful management of CSS specificity.

## License

Copyright [2025] [Yash]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
