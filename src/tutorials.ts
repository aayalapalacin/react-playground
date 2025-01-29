import { Tutorial} from "./types";

 export const tutorialsArray: Tutorial[]=[
    {
    category: "Authentication",
    name: "Google Sign-In: Let the API Handle the Hassle",
    icon: "🔑",
    steps: [
      {
        title: "Step 1: Create a Google Developer Account (Because Google Owns Us)",
        description: "Go to the Google Developer Console and make a new project. Click buttons like a pro.",
        codeSample: `
  // In the console:
  gcloud projects create my-awesome-project
  // Or, if you prefer the UI, just click around until something works.
  `
      },
      {
        title: "Step 2: Enable Google Sign-In (Because OAuth is a Pain)",
        description: "Enable the 'Google Sign-In' API and grab your client ID like it's a free sample.",
        codeSample: `
  // In your .env file:
  REACT_APP_GOOGLE_CLIENT_ID=your-client-id-here
  `
      },
      {
        title: "Step 3: Implement It in React (Copy-Paste and Pray)",
        description: "Use the Google OAuth package because writing your own auth system is a nightmare.",
        codeSample: `
  import { GoogleLogin } from 'react-google-login';
  
  const onSuccess = (response) => console.log('Logged in:', response);
  const onFailure = (error) => console.log('Failed:', error);
  
  <GoogleLogin 
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Login with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
  />
  `
      }
    ]
  },
  
 {
    category: "Security",
    name: "Multi-Factor Authentication: Because Passwords Are Useless",
    icon: "🔐",
    steps: [
      {
        title: "Step 1: Choose Your Method (Pick Your Poison)",
        description: "Decide if you want SMS, Email, Authenticator App, or just trust that the user is who they say they are (not recommended).",
        codeSample: `
  // Options:
  const methods = ["SMS", "Email", "Authenticator App"];
  console.log("Which MFA method do you hate the least?", methods);
  `
      },
      {
        title: "Step 2: Set Up a Verification Code System (Or Use Someone Else’s)",
        description: "Use a service like Twilio or Firebase to send verification codes. Don’t try to build one from scratch unless you enjoy suffering.",
        codeSample: `
  // Using Firebase:
  const auth = firebase.auth();
  auth.settings.appVerificationDisabledForTesting = true;
  
  auth.signInWithPhoneNumber("+1234567890", window.recaptchaVerifier)
    .then(confirmResult => console.log("Code sent!"))
    .catch(error => console.error(error));
  `
      },
      {
        title: "Step 3: Make Users Enter the Code (And Hope They Do It Correctly)",
        description: "Display an input field, validate the code, and authenticate the user. Simple, right?",
        codeSample: `
  <input type="text" placeholder="Enter 6-digit code" onChange={handleCodeInput} />
  <button onClick={verifyCode}>Verify</button>
  `
      }
    ]
  },
  
 {
    category: "UI/UX",
    name: "Dark Mode: Because Light Mode Burns Our Eyes",
    icon: "🌙",
    steps: [
      {
        title: "Step 1: Create a Toggle Button (Fancy Switch Optional)",
        description: "Use a button or a fancy slider to switch themes. You can even animate it if you're feeling spicy.",
        codeSample: `
  <button onClick={toggleDarkMode}>🌞 / 🌙</button>
  `
      },
      {
        title: "Step 2: Apply Dark Mode Styles (Embrace the Darkness)",
        description: "Change the background, text color, and maybe add a spooky font for fun.",
        codeSample: `
  const darkModeStyles = {
    backgroundColor: "#121212",
    color: "#ffffff"
  };
  
  const lightModeStyles = {
    backgroundColor: "#ffffff",
    color: "#000000"
  };
  `
      },
      {
        title: "Step 3: Save User Preference (So They Don’t Have to Keep Clicking)",
        description: "Use localStorage because users have better things to do than re-enable dark mode every time.",
        codeSample: `
  localStorage.setItem("theme", "dark");
  const theme = localStorage.getItem("theme") || "light";
  `
      }
    ]
  }]
  