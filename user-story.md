# User Stories

## User Story 1: User Registration
**As a** new user  
**I need** to register an account  
**So that** I can access the platform and save my preferences  

**Details and Assumptions:**  
- User must provide first name, last name, email, and password.  
- Emails must be unique.  
- Password is hashed and stored securely.  

**Acceptance Criteria (Gherkin syntax):**  
- Given I am a new user, when I enter my first name, last name, email, and password, then I am successfully registered.  
- Given I enter an email that already exists, when I submit the form, then I see an error message "Email already exists".  
- Given I am successfully registered, when I submit the registration form, then I am logged in automatically.  

---

## User Story 2: User Login
**As a** registered user  
**I need** to log into my account  
**So that** I can access my personalized content  

**Details and Assumptions:**  
- Users must have a registered account.  
- System validates email and password.  
- Successful login returns a JWT authentication token.  

**Acceptance Criteria (Gherkin syntax):**  
- Given I am a registered user, when I enter my email and password correctly, then I am logged in and receive an auth token.  
- Given I enter incorrect credentials, when I submit the login form, then I see an error message "Wrong password" or "User not found".  

---

## User Story 3: Search Gifts
**As a** user  
**I need** to search for gifts using filters  
**So that** I can find relevant items quickly  

**Details and Assumptions:**  
- Users can filter by name, category, condition, and age range.  
- Results are displayed dynamically.  
- System shows a message if no results match.  

**Acceptance Criteria (Gherkin syntax):**  
- Given I am on the search page, when I enter a gift name and optional filters, then the results list only matching items.  
- Given no items match my criteria, when I perform the search, then I see a message "No results found".  

---

## User Story 4: View Gift Details
**As a** user  
**I need** to view details of a selected gift  
**So that** I can decide if it suits my needs  

**Details and Assumptions:**  
- Users can click on a product from the search results.  
- Product details page displays name, description, image, category, and other attributes.  

**Acceptance Criteria (Gherkin syntax):**  
- Given I am on the search results page, when I click on a product, then I am taken to the product details page.  
- Given I am on the product details page, when I view the page, then I see the product’s name, description, and image.  
