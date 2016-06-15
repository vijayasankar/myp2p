Feature: To test all adhoc scenarios

  Scenario: TC018	Error - Incorrect Code from SMS
    Given I am logged in already
    When I enter Invalid verification code
    Then error message should be displayed for wrong verification code
