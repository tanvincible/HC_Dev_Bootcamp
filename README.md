# HC_Dev_Bootcamp

## Overview
This project is aimed at creating a functional development bootcamp application. The app currently features a login page, student page, doctor page, and simple navigation with day/night mode functionality. Key features include student and doctor login, navigation through pages, a simple registration page, and the ability to file complaints or write prescriptions.

## Features

### Login Page
- Users can enter an email and password to log in.
- **Student account**: Credentials are hardcoded for now.
    - **Username**: `student`
    - **Password**: `123`
- **Doctor account**:
    - **Username**: `doctor`
    - **Password**: `456`
- Future improvement: Will connect to a database for proper registration and login functionality.

### Routing
- The landing page (Login) is available at `http://localhost:3000/`.
- After clicking the "Sign in with email" button, users are redirected to the student page located at `http://localhost:3000/student`.
    - Achieved by creating a folder named `student` in the app directory containing a `page.tsx` file for the page.
- **Navigation Bar**: A `main-nav.tsx` file is added for navigation, which allows users to visit example links such as YouTube or any other external websites.

### Registration Page
- A basic registration page is set up but currently lacks authentication. Future updates will include proper registration and authentication functionality.

### Student Page
- The student page contains a header (navigation bar) and footer.
- A "Complain to Doctor" button is available, which redirects to the `/receptionist` page for submitting complaints.
- **Header and Footer**: Added in the `components` folder, and both are visible on the `/student` page.
- **Configuration**: A `config` folder is included to store site configurations, which are currently set to default but customizable.

### Doctor Page
- On the doctor page, the doctor can write a prescription for a specific student by entering their student ID.
- When a student ID is entered, the doctor is redirected to `/doctor/[id]`, where they can use **Excalidraw** to create handwritten prescriptions or scribble notes.

### Day and Night Mode
- Implemented in the `mode-toggle.tsx` and `theme-provider.tsx` files, allowing users to switch between day and night themes.

### Reporting Issues (Student Page)
- The student page has an option to file a complaint or report a medical issue.
- This takes the student to their report page, where they can view past and current prescriptions written by the doctor.

## External Resources
- **Excalidraw Developer Docs**: Excalidraw is used for the doctor scribble functionality. You can refer to the developer documentation here:
  [Excalidraw Docs](https://docs.excalidraw.com/docs/)

---

This project is currently a work in progress. Future improvements include proper authentication for login and registration, as well as more advanced features in the student and doctor workflows.
