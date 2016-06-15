@regression @all
Feature: To test all the regression scenarios

  @done
  Scenario: Home page Landing - Not logged In User
    Given I am not logged in
    When I navigate to PushToPlay homepage
    Then Favourites should not have existing favourites
    And Credit card details should not be displayed
    And Continue button should not be enabled

  @done
  Scenario: Home page Landing - Logged In User
    Given I am logged in already
    When I navigate to PushToPlay homepage
    Then Credit card details should be displayed
    And Continue button should be enabled

  @done
  Scenario: Login modal Pop up display
    Given I am not logged in
    And I navigate to PushToPlay homepage
    When I select Dips
    And I enter the phone number
    Then Login modal should be displayed

  @done
  Scenario: Add a new CC
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I do not have existing credit card
    Then I should be able to attach the credit card
    And I should be able to CONTINUE the PushToPlay setup

  @done
  Scenario: Change the existing CC
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I click change credit card
    Then I should be able to change the credit card
    And I should be able to CONTINUE the PushToPlay setup

  @done
  Scenario: Terms and Conditions page display - Login and Logout state
    Given I am not logged in
    And I navigate to PushToPlay homepage
    When I click terms and conditions
    Then TnC modal should be displayed

  @done
  Scenario: Push to Play Opt in for favourites
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I select Favourites tab
    Then I should be able to CONTINUE the PushToPlay setup

  @done
  Scenario: Push to Play Opt in for Dips
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I select any dips from Dips tab
    Then I should be able to CONTINUE the PushToPlay setup

  @done
  Scenario: Push to play cancel
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I select any dips from Dips tab
    And I enter the phone number
    And I click continue
    Then I should be able to CANCEL the PushToPlay setup

  @done
  Scenario: Push to play - Create a second opt in
    Given I have existing PushToPlay notification
    When I start new PushToPlay opt in
    Then I should get warning message that existing notification will be removed

  @invalid-need-new-scenario
  Scenario: TC011	Edit a favourite with same wager that is connected to P2P
    Given I have existing PushToPlay notification
    When I edit favourite without changing the wager amount
    Then my PushToPlay settings should be updated accordingly

  @invalid-need-new-scenario
  Scenario: TC012	Edit a favourite with different wager that is connected to P2P
    Given I have existing PushToPlay notification
    When I edit favourite by changing the wager amount
    Then my PushToPlay settings should be updated accordingly

  @invalid-need-new-scenario
  Scenario: TC013	Delete a favourite that is connected to P2P
    Given I have existing PushToPlay notification
    When I delete the favourite
    Then my PushToPlay settings should be deleted

  @done
  Scenario: TC014	Error - Dips/Favourites selection validation
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I dont select any Dips or favourites
    Then I should get error message for ticket type selection

  @done
  Scenario: TC015	Error - Phone number field validation- null, more than 8 digits
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I dont enter any phone number
    Then I should get error message for empty phone number
    And I dont enter NZ standard number
    And I should get error message for invalid phone number

  @invalid
  Scenario: TC016	Error - Without Credit card
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I dont enter any phone number
    Then Continue button should not be enabled
@done
  Scenario: TC017	Error - Duplicate mobile number
    Given I am logged in already
    And I navigate to PushToPlay homepage
    When I enter duplicate phone number
    Then I should get error message for duplicate phone number

  Scenario: TC018	Error - Incorrect Code from SMS
    Given I am logged in already
    And I navigate to PushToPlay homepage
    And I start new PushToPlay opt in
    When I enter Invalid verification code
    Then error message should be displayed for wrong verification code

  Scenario: TC019	User Opts out
    Given I have existing PushToPlay notification
    When I click Stop from Settings page
    Then my PushToPlay settings should be deleted
