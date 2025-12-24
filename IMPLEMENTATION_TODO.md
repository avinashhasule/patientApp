# Implementation TODO List

This document tracks the implementation status of features that need to be ported from the Next.js source repository to the React Native app.

## Source Repository
https://github.com/avinashhasule/registration

---

## Screens To Implement

### 1. RegisterScreen (`src/screens/Register/index.js`)
**Source:** `app/register/page.js`

- [ ] Add registration option buttons (ABHA vs Standard)
- [ ] Implement navigation to ABHA registration flow
- [ ] Add standard registration form
- [ ] Port validation logic
- [ ] Add loading states
- [ ] Implement error handling

### 2. AbhaCommunicationScreen (`src/screens/AbhaCommunication/index.js`)
**Source:** `app/register/with-abha/AbhaCommunication.js`

- [ ] Add ABHA logo/branding
- [ ] Implement phone number input with validation
- [ ] Add OTP input fields
- [ ] Implement OTP verification flow
- [ ] Port ABHA API integration
- [ ] Add loading and error states
- [ ] Implement account creation/linking logic

### 3. AppointmentListScreen (`src/screens/AppointmentList/index.js`)
**Source:** `app/patient/appointment/page.js`

- [ ] Fetch appointments from API
- [ ] Implement filter tabs (All, Upcoming, Past, Cancelled)
- [ ] Add pull-to-refresh functionality
- [ ] Integrate DoctorCard component
- [ ] Add navigation to appointment details
- [ ] Implement empty state
- [ ] Add loading skeleton

### 4. AppointmentDetailsScreen (`src/screens/AppointmentDetails/index.js`)
**Source:** `app/patient/details/page.js`

- [ ] Fetch appointment details by ID
- [ ] Display complete doctor information
- [ ] Show appointment date, time, location
- [ ] Implement cancel appointment functionality
- [ ] Add reschedule functionality
- [ ] Display patient notes/instructions
- [ ] Add appointment status indicators

### 5. GlobalErrorScreen (`src/screens/GlobalError/index.js`)
**Source:** `app/global-error.js`

- [ ] Implement retry logic
- [ ] Add error boundary integration
- [ ] Implement error reporting/logging
- [ ] Add navigation reset on retry
- [ ] Port error messages from Next.js

---

## Components To Implement

### 1. AadharInput (`src/components/AadharInput.js`)
**Source:** `app/register/with-abha/AadharInput.js`

- [ ] Add Aadhar number formatting (XXXX-XXXX-XXXX)
- [ ] Implement 12-digit validation
- [ ] Port masking logic (show/hide toggle)
- [ ] Add error state styling
- [ ] Implement input restrictions (numbers only)

### 2. DoctorCard (`src/components/DoctorCard.js`)
**Source:** Components in appointment pages

- [ ] Add actual doctor image support
- [ ] Implement rating stars display
- [ ] Add availability status indicator
- [ ] Port styling from web app
- [ ] Add touch feedback

### 3. ConfirmSubmitModal (`src/components/ConfirmSubmitModal.js`)
**Source:** Booking confirmation modals

- [ ] Display complete appointment details
- [ ] Add terms and conditions section
- [ ] Implement submission API call
- [ ] Add loading state during booking
- [ ] Port modal animations

### 4. CancelApptModal (`src/components/CancelApptModal.js`)
**Source:** Cancellation modals

- [ ] Implement reason validation
- [ ] Add cancellation policy display
- [ ] Integrate cancellation API
- [ ] Add confirmation feedback
- [ ] Implement loading states

### 5. AppHeader (`src/components/AppHeader.js`)
**Source:** Global layout components

- [ ] Add user profile icon/avatar
- [ ] Implement notification bell
- [ ] Add notification badge count
- [ ] Implement menu/drawer toggle
- [ ] Port header styling

### 6. Footer (`src/components/Footer.js`)
**Source:** Global layout components

- [ ] Implement actual link navigation
- [ ] Add app version display (dynamic)
- [ ] Link terms and privacy policy pages
- [ ] Add support contact functionality

---

## Context & State Management

### AuthProvider (`src/context/AuthProvider.js`)
- [x] Basic structure exists
- [ ] Complete API integration
- [ ] Add token refresh logic
- [ ] Implement session management

### PatientProvider (`src/context/PatientContext.js`)
- [x] Basic structure exists
- [ ] Complete patient data management
- [ ] Add ABHA data handling
- [ ] Implement profile update logic

### MastersProvider (`src/context/MastersProvider.js`)
- [x] Basic structure exists
- [ ] Load master data from API
- [ ] Implement caching strategy

### ToastProvider (`src/context/ToastProvider.js`)
- [x] Basic structure exists
- [ ] Verify toast functionality
- [ ] Add different toast types

---

## Navigation

### AppNavigation (`src/components/AppNavigation/index.js`)
- [x] All screens registered
- [ ] Configure screen transitions
- [ ] Add gesture handling
- [ ] Implement deep linking
- [ ] Add screen tracking/analytics

---

## API Integration

### Priority APIs to Implement:
1. **Authentication**
   - Login with OTP
   - Verify OTP
   - Logout
   - Token refresh

2. **ABHA Registration**
   - Generate Aadhar OTP
   - Verify Aadhar OTP
   - Create ABHA account
   - Link ABHA account

3. **Appointments**
   - Fetch appointments list
   - Get appointment details
   - Book appointment
   - Cancel appointment
   - Reschedule appointment

4. **Patient Profile**
   - Fetch patient data
   - Update patient profile
   - Upload documents

---

## Styling & UX

### Global Styling
- [ ] Define color palette (match web app)
- [ ] Create reusable style constants
- [ ] Implement theme support
- [ ] Add responsive sizing utilities

### Animations
- [ ] Screen transitions
- [ ] Button press feedback
- [ ] Loading animations
- [ ] Success/error animations

### Accessibility
- [ ] Add accessibility labels
- [ ] Implement screen reader support
- [ ] Test with TalkBack/VoiceOver
- [ ] Add proper focus management

---

## Testing

### Unit Tests
- [ ] Add tests for context providers
- [ ] Test utility functions
- [ ] Test component rendering

### Integration Tests
- [ ] Test navigation flows
- [ ] Test API integration
- [ ] Test form validations

### E2E Tests
- [ ] Login flow
- [ ] Registration flow
- [ ] Appointment booking flow

---

## Platform-Specific

### iOS
- [ ] Configure app icons
- [ ] Set up push notifications
- [ ] Test on multiple iOS versions
- [ ] Optimize bundle size

### Android
- [ ] Configure app icons
- [ ] Set up push notifications
- [ ] Test on multiple Android versions
- [ ] Optimize bundle size
- [ ] Configure ProGuard rules

---

## Documentation

- [x] README updated with project structure
- [x] Screen mapping documented
- [ ] Add API documentation
- [ ] Add component usage examples
- [ ] Create developer onboarding guide
- [ ] Add troubleshooting section

---

## Performance

- [ ] Optimize image loading
- [ ] Implement list virtualization
- [ ] Add offline support
- [ ] Implement data caching
- [ ] Minimize bundle size
- [ ] Profile and optimize re-renders

---

## Security

- [ ] Secure token storage
- [ ] Implement certificate pinning
- [ ] Add input sanitization
- [ ] Implement rate limiting
- [ ] Add biometric authentication
- [ ] Secure sensitive data in logs

---

## Priority Order

### Phase 1: Core Functionality (Week 1-2)
1. Complete ABHA registration flow
2. Implement authentication completely
3. Basic appointment listing

### Phase 2: Appointment Management (Week 3-4)
1. Appointment details
2. Booking functionality
3. Cancellation functionality

### Phase 3: Polish & Testing (Week 5-6)
1. Complete styling
2. Add animations
3. Write tests
4. Fix bugs

### Phase 4: Optimization & Launch (Week 7-8)
1. Performance optimization
2. Security hardening
3. Documentation completion
4. App store preparation

---

## Notes

- All TODO items are also documented in individual screen/component files
- Refer to Next.js source repository for business logic reference
- Test all changes on both iOS and Android
- Keep changes backward compatible with existing features
