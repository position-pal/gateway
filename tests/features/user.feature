Feature: User Management
  This feature tests user-related operations such as registration, login, profile update, and deletion.

  Scenario: Register a New User
    Given that the user is not yet registered
    When registering with valid details
    Then the system successfully registers the user

  Scenario: Login with Valid Credentials
    Given logged user with the correct email and password
    When system returns a valid authentication token
    Then authentication token can be use to authorize requests

  Scenario: Update User Profile
    Given new user logged in
    When updating the profile information
    Then the system successfully updates the user data
    When requesting the deletion of the user profile
    Then the system deletes the user data and confirms the deletion
