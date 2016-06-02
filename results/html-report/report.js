$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "line": 2,
  "name": "To test all the regression scenarios",
  "description": "",
  "id": "to-test-all-the-regression-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "TC001\tP2P - Home page Landing - Not logged In User",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc001-p2p---home-page-landing---not-logged-in-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Favourites should not have existing favourites",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Credit card details should not be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Continue button should not be enabled",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "TC002\tP2P - Home page Landing - Logged In User",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc002-p2p---home-page-landing---logged-in-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Credit card details should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Continue button should be enabled",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "TC003\tLogin modal Pop up display",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc003-login-modal-pop-up-display",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Dips",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter the phone number",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Login modal should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 24,
  "name": "TC004\tAdd a new CC",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc004-add-a-new-cc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I do not have existing credit card",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should be able to attach the credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 31,
  "name": "TC005\tChange the existing CC",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc005-change-the-existing-cc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click change credit card",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I should be able to change the credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 38,
  "name": "TC006\tTerms and Conditions page display - Login and Logout state",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc006-terms-and-conditions-page-display---login-and-logout-state",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click terms and conditions",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "TnC modal should be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 44,
  "name": "TC007\tPush to Play Opt in for favourites",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc007-push-to-play-opt-in-for-favourites",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select Favourites tab",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 50,
  "name": "TC008\tPush to Play Opt in for Dips",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc008-push-to-play-opt-in-for-dips",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select any dips from Dips tab",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 56,
  "name": "TC009\tPush to play cancel",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc009-push-to-play-cancel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select any dips from Dips tab",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I should be able to CANCEL the PushToPlay setup",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 63,
  "name": "TC010\tPush to play - Create a second opt in",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc010-push-to-play---create-a-second-opt-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I start new PushToPlay opt in",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I should get warning message that existing notification will be removed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 68,
  "name": "TC011\tEdit a favourite with same wager that is connected to P2P",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc011-edit-a-favourite-with-same-wager-that-is-connected-to-p2p",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I edit favourite without changing the wager amount",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "my PushToPlay settings should be updated accordingly",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 73,
  "name": "TC012\tEdit a favourite with different wager that is connected to P2P",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc012-edit-a-favourite-with-different-wager-that-is-connected-to-p2p",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I edit favourite by changing the wager amount",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "my PushToPlay settings should be updated accordingly",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 78,
  "name": "TC013\tDelete a favourite that is connected to P2P",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc013-delete-a-favourite-that-is-connected-to-p2p",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "I delete the favourite",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "my PushToPlay settings should be deleted",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 83,
  "name": "TC014\tError - Dips/Favourites selection validation",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc014-error---dips/favourites-selection-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 84,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I dont select any Dips or favourites",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I should get error message for ticket type selection",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 89,
  "name": "TC015\tError - Phone number field validation- null, more than 8 digits",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc015-error---phone-number-field-validation--null,-more-than-8-digits",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 90,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I dont enter any phone number",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "I should get error message for empty phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "I dont enter NZ standard number",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I should get error message for invalid phone number",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 97,
  "name": "TC016\tError - Without Credit card",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc016-error---without-credit-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 98,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I dont enter any phone number",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "Continue button should not be enabled",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 103,
  "name": "TC017\tError - Duplicate mobile number",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc017-error---duplicate-mobile-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 104,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I enter duplicate phone number",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "I should get error message for duplicate phone number",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 109,
  "name": "TC018\tError - Incorrect Code from SMS",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc018-error---incorrect-code-from-sms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 110,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 111,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I start new PushToPlay opt in",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I enter Invalid verification code",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "error message should be displayed for wrong verification code",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 116,
  "name": "TC019\tUser Opts out",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc019-user-opts-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 117,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "I click Stop from Settings page",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "my PushToPlay settings should be deleted",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("smoke.feature");
formatter.feature({
  "line": 2,
  "name": "Smoke test",
  "description": "",
  "id": "smoke-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "User successfully completes PushToPlay set up",
  "description": "",
  "id": "smoke-test;user-successfully-completes-pushtoplay-set-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Fill all the fields and Continue",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter correct verification code",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should get success message",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the details should be displayed in My Accounts page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});