Feature: Login

  Scenario: Verify user is able to login successfully 
    Given Launch application
    Then Verify Login page
    When Enter credentials and click on login button
    Then Verify user logged in successfully
