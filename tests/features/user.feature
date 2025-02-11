Feature: User Management
  This feature tests user-related operations such as registration, login, profile update, and deletion.

  Scenario: Register a New User
    Given that the user is not yet registered
    When registering with valid details
    Then the system successfully registers the user

  Scenario: Login with Valid Credentials
    Given that the user is already registered
    When logging in with the correct email and password
    Then the system returns a valid authentication token

  Scenario: Update User Profile
    Given that the user is authenticated
    When updating the profile information
    Then the system successfully updates the user data

  Scenario: Delete User Profile
    Given that the user is authenticated
    When requesting the deletion of the user profile
    Then the system deletes the user data and confirms the deletion