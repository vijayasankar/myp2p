@smoke @all
Feature: Smoke test

  Scenario: User successfully completes PushToPlay set up
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When Fill all the fields and Continue
    And I enter correct verification code
    Then I should get success message
    And the details should be displayed in My Accounts page
