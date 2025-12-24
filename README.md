This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Patient App - React Native

A React Native mobile application for patient management, ported from the Next.js registration web application.

## Source Repository

This React Native app is based on the Next.js web application:
- **Source Repository**: [avinashhasule/registration](https://github.com/avinashhasule/registration)
- The screens and components in this app mirror the structure of the web app for consistency

## Project Structure

```
src/
├── screens/              # Screen components mapped from Next.js pages
│   ├── Login/           # Authentication (existing)
│   ├── VerifyOTP/       # OTP verification (existing)
│   ├── Register/        # Registration entry (from app/register/page.js)
│   ├── AbhaCommunication/ # ABHA registration (from app/register/with-abha/)
│   ├── Patient/         # Patient home (from app/patient/*)
│   ├── AppointmentList/ # Appointments list (from app/patient/appointment/)
│   ├── AppointmentDetails/ # Appointment details (from app/patient/details/)
│   └── GlobalError/     # Error handling (from app/global-error.js)
├── components/          # Reusable UI components
│   ├── AadharInput.js   # Aadhar number input (from web app)
│   ├── DoctorCard.js    # Doctor information card
│   ├── ConfirmSubmitModal.js # Booking confirmation modal
│   ├── CancelApptModal.js    # Cancellation modal
│   ├── AppHeader.js     # Application header
│   ├── Footer.js        # Application footer
│   └── ... (existing components)
├── context/             # Context providers
│   ├── AuthProvider.js     # Authentication context
│   ├── PatientContext.js   # Patient data context
│   ├── MastersProvider.js  # Master data context
│   └── ToastProvider.js    # Toast notifications
├── hooks/               # Custom hooks
└── utils/               # Utility functions
```

## Screen Mapping from Next.js

Each screen in this app corresponds to a page in the Next.js source repository:

| React Native Screen | Next.js Source File |
|-------------------|-------------------|
| `Login` | `app/login/page.js` (existing) |
| `Register` | `app/register/page.js` |
| `AbhaCommunication` | `app/register/with-abha/AbhaCommunication.js` |
| `Patient` | `app/patient/page.js` |
| `AppointmentList` | `app/patient/appointment/page.js` |
| `AppointmentDetails` | `app/patient/details/page.js` |
| `GlobalError` | `app/global-error.js` |

## Current Implementation Status

**✅ Completed:**
- React Native CLI project scaffolding
- Navigation structure with React Navigation
- Skeleton screens with placeholders
- Core component skeletons
- Context providers

**🚧 In Progress / TODO:**
- Port business logic from Next.js source
- Implement API integrations
- Add proper styling to match web app
- Implement ABHA registration flow
- Add appointment booking functionality
- Implement patient data management
- Add form validations
- Integrate with backend APIs
- Add error boundaries
- Implement offline support

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Prerequisites

- Node.js >= 18
- React Native development environment (Android Studio / Xcode)
- For iOS: CocoaPods installed

### Installation

1. Install dependencies:

```sh
npm install
# OR
yarn install
```

2. For iOS, install CocoaPods dependencies:

```sh
cd ios
bundle install
bundle exec pod install
cd ..
```

### Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

#### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Development

### Adding New Features

When porting functionality from the Next.js source:

1. Refer to the TODO comments in each screen/component file
2. Check the corresponding source file in the Next.js repository
3. Adapt web-specific code to React Native equivalents
4. Test on both iOS and Android platforms

### Key Differences from Web App

- **Navigation**: Uses React Navigation instead of Next.js routing
- **Storage**: Uses MMKV instead of localStorage
- **Styling**: React Native StyleSheet instead of CSS
- **Forms**: React Native components instead of HTML forms
- **API Calls**: Adapted for mobile environment

## Dependencies

Key dependencies used in this project:

- `react-native`: Core framework
- `@react-navigation/native`: Navigation
- `@react-navigation/native-stack`: Stack navigator
- `react-native-safe-area-context`: Safe area handling
- `react-native-screens`: Native screen optimization
- `react-native-mmkv`: Fast storage
- `react-native-otp-entry`: OTP input
- `lottie-react-native`: Animations

## Next Steps

1. **Port ABHA Registration Flow**
   - Implement Aadhar input validation
   - Add OTP verification for ABHA
   - Integrate with ABHA APIs

2. **Implement Appointment Management**
   - Add appointment booking
   - Implement appointment listing with filters
   - Add appointment cancellation/rescheduling

3. **Complete Patient Profile**
   - Add patient information forms
   - Implement profile editing
   - Add medical history section

4. **Styling and UX**
   - Match web app design system
   - Add loading states
   - Implement proper error handling
   - Add form validations

5. **Testing**
   - Add unit tests
   - Add integration tests
   - Test on multiple device sizes

## Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

### Common Issues

- **Metro bundler not starting**: Clear cache with `npm start -- --reset-cache`
- **Build errors**: Clean build folders and rebuild
- **iOS pod install fails**: Try `cd ios && pod install --repo-update`

## Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## License

This project is part of the patient management system.

## Contributing

When contributing, please:
1. Reference the original Next.js source files in comments
2. Maintain consistency with the web app's business logic
3. Test on both iOS and Android platforms
4. Update this README with any new screens or features
