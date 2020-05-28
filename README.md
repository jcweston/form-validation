## FORM VALIDATION

For this sprint, you are being asked to create a **form** using the DOM which will validate a range of different user input scenarios.

### Objectives:
* understand concept of form validation, and what can be validated on the client side before information is sent to the server
* use CSS and html attributes to help with validation and navigation
* use in-line back-end validation where appropriate
* design an engaging and navigable UX with clear feedback

### Task:
You need to write a typical **account creation form** for a fictional website (the purpose of which is delegated to your imagination, but think along the lines of Facebook or Twitter).  

We have pre-populated a MongoDB database with a selection of a thousand users. The API for this database can be found at https://intense-coast-72655.herokuapp.com/. You have access to the following endpoints:

`/api/users`
- `GET` - returns all users.
- `POST` - adds a user. It requires data for all the keys in the first list below else you will get an error.

`/api/users/:username`
- `GET` - return the user with the given username
- `PATCH` - update a user with the given username. Accepts all keys in the update document described below.

Your form, when submitted, should add a user to this database as long as all of the information provided is valid.  The form **must** validate the fields listed below:
* `firstName` (only allow letters, spaces, hyphens and apostrophes)
* `lastName` (as above)
* `dob` (aka date of birth; should be a valid date, and indicate the user is at least 18 years old. NB: the test might be out by a few million milliseconds so don't be too precise with your test boundary!)
* `userName` (should contain at least three letters and two numbers - and not already be in the user database!)
* `gender` (must be 'male', 'female', 'non-binary', 'prefer not to say', 'prefer to self-identify')
* `email`, and confirm email (should match, and follow rules)
* `phoneNumber` (should accept only valid UK formats)

---

Your form should also have:
* Password, confirm password, and a password strength indicator (inputs should match, and they should follow the rules from your password strength kata. The indicator should provide feedback on how strong the password is; weak passwords should be disallowed)
* Accept agreement (users should only be able to tick this when they have scrolled to the bottom of your agreement text; provide lorem ipsum if you don't fancy writing a legally binding contract)

You will need to provide helpful feedback to your client, as well as preventing them from submitting, when they make mistakes.

---

Unusually, we have also done backend validation to ensure data is submitted in the correct format. If you get an error message, your front-end validation is incorrect.

When a user successfully submits a form (it passes validation front and back), they should be taken to a basic 'profile page' with the option to edit the following fields:
* `occupation`
* `aboutMe`
* `profilePic`
* any fields from the submission list above

### Helpful links:
Form validation is more than coding - it is a service you provide to users, and as such, there are practices and expectations in terms of accessibility, usability and functionality. Best practice rules are ignored at your peril! Here are some interesting articles that document the sort of approaches you should adopt when designing your form, from [smashingmagazine](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/) and [designmodo](https://designmodo.com/ux-form-validation/).

There are a lot of [html input attribute types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that your browser can use to modify behaviour on your form, some of which you may never use again, but could be experimented with now.

[CSS pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) interpret other element attributes. Don't forget that CSS can be used more broadly to signal things too; people make inferences from colour, font size and font style, for example.