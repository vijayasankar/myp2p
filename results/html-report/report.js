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
formatter.before({
  "duration": 2195996047,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Home page Landing - Not logged In User",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;home-page-landing---not-logged-in-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@done"
    }
  ]
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
formatter.match({
  "location": "stepDefinitions.not_logged_in()"
});
formatter.result({
  "duration": 11586031047,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 3794731190,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.noFavoritesExisting()"
});
formatter.result({
  "duration": 181121652,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.noCreditCardDetails()"
});
formatter.result({
  "duration": 33599069,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.continue_disabled()"
});
formatter.result({
  "duration": 32668341,
  "status": "passed"
});
formatter.after({
  "duration": 947162141,
  "status": "passed"
});
formatter.before({
  "duration": 1577504733,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Home page Landing - Logged In User",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;home-page-landing---logged-in-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@not-done"
    }
  ]
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
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 11483896763,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 2817203037,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.displayCreditCardDetails()"
});
formatter.result({
  "duration": 75610619,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.continue_enabled()"
});
formatter.result({
  "duration": 32267591,
  "status": "passed"
});
formatter.after({
  "duration": 866462140,
  "status": "passed"
});
formatter.before({
  "duration": 1632360337,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login modal Pop up display",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;login-modal-pop-up-display",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@not-done"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Dips",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter the phone number",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Login modal should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.not_logged_in()"
});
formatter.result({
  "duration": 2568835660,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 3096280258,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.selectDips()"
});
formatter.result({
  "duration": 123466398,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.enterPhoneNumber()"
});
formatter.result({
  "duration": 54776760,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot focus element\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 35 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir19704_6490}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9d0e7445a82302912e1c52f76c2dfd03\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:122)\r\n\tat step_definitions.stepDefinitions.enterPhoneNumber(stepDefinitions.java:244)\r\n\tat ✽.And I enter the phone number(Regression.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.displayLoginModal()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1333205504,
  "status": "passed"
});
formatter.before({
  "duration": 1573751960,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add a new CC",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;add-a-new-cc",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@not-done"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I do not have existing credit card",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should be able to attach the credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 10585845368,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 1150756106,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.noExistingCreditCard()"
});
formatter.result({
  "duration": 71846,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.attachCreditCard()"
});
formatter.result({
  "duration": 97505,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.continue_PushToPlay_setup()"
});
formatter.result({
  "duration": 144515326,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression id(\u0027mobileNumber\u0027)/x:input because of the following error:\nNamespaceError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027id(\u0027mobileNumber\u0027)/x:input\u0027 contains unresolvable namespaces.\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 21 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir19972_30896}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 0dd20efb3f8bc402d6c9e540ac3b7e83\n*** Element info: {Using\u003dxpath, value\u003did(\u0027mobileNumber\u0027)/x:input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.continue_PushToPlay_setup(stepDefinitions.java:330)\r\n\tat ✽.And I should be able to CONTINUE the PushToPlay setup(Regression.feature:30)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1202766806,
  "status": "passed"
});
formatter.before({
  "duration": 1633342385,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Change the existing CC",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;change-the-existing-cc",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@not-done"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click change credit card",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I should be able to change the credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 60383283835,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 74594320363,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_change_credit_card()"
});
formatter.result({
  "duration": 83509,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.change_credit_card()"
});
formatter.result({
  "duration": 40122,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.continue_PushToPlay_setup()"
});
formatter.result({
  "duration": 142906262,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression id(\u0027mobileNumber\u0027)/x:input because of the following error:\nNamespaceError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027id(\u0027mobileNumber\u0027)/x:input\u0027 contains unresolvable namespaces.\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 21 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir17736_848}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 87860a3b2f78030657d2756ee7a4b8c5\n*** Element info: {Using\u003dxpath, value\u003did(\u0027mobileNumber\u0027)/x:input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.continue_PushToPlay_setup(stepDefinitions.java:330)\r\n\tat ✽.And I should be able to CONTINUE the PushToPlay setup(Regression.feature:37)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1317849182,
  "status": "passed"
});
formatter.before({
  "duration": 1540826562,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Terms and Conditions page display - Login and Logout state",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;terms-and-conditions-page-display---login-and-logout-state",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@done"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I am not logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click terms and conditions",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "TnC modal should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.not_logged_in()"
});
formatter.result({
  "duration": 12338325677,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 5450961100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_terms_and_conditions_link()"
});
formatter.result({
  "duration": 166406809,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.display_tnc_modal()"
});
formatter.result({
  "duration": 35022454,
  "status": "passed"
});
formatter.after({
  "duration": 864321231,
  "status": "passed"
});
formatter.before({
  "duration": 1389228834,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Push to Play Opt in for favourites",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;push-to-play-opt-in-for-favourites",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@not-done"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select Favourites tab",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 7545271666,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 1060444175,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.select_Favourites()"
});
formatter.result({
  "duration": 156172060,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.continue_PushToPlay_setup()"
});
formatter.result({
  "duration": 81970830,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression id(\u0027mobileNumber\u0027)/x:input because of the following error:\nNamespaceError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027id(\u0027mobileNumber\u0027)/x:input\u0027 contains unresolvable namespaces.\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 23 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir532_23746}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: da282798094aaaca9aa13594e3558c92\n*** Element info: {Using\u003dxpath, value\u003did(\u0027mobileNumber\u0027)/x:input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.continue_PushToPlay_setup(stepDefinitions.java:330)\r\n\tat ✽.Then I should be able to CONTINUE the PushToPlay setup(Regression.feature:49)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1244961236,
  "status": "passed"
});
formatter.before({
  "duration": 1578966840,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Push to Play Opt in for Dips",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;push-to-play-opt-in-for-dips",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select any dips from Dips tab",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 8487589352,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 2235325045,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.select_Dips()"
});
formatter.result({
  "duration": 94241052,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.continue_PushToPlay_setup()"
});
formatter.result({
  "duration": 77122644,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression id(\u0027mobileNumber\u0027)/x:input because of the following error:\nNamespaceError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027id(\u0027mobileNumber\u0027)/x:input\u0027 contains unresolvable namespaces.\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir16288_14271}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a7803138f70b31afe5d26f34d6bd0148\n*** Element info: {Using\u003dxpath, value\u003did(\u0027mobileNumber\u0027)/x:input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.continue_PushToPlay_setup(stepDefinitions.java:330)\r\n\tat ✽.Then I should be able to CONTINUE the PushToPlay setup(Regression.feature:55)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1258097339,
  "status": "passed"
});
formatter.before({
  "duration": 1596616626,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "TC009\tPush to play cancel",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc009-push-to-play-cancel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I select any dips from Dips tab",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I click continue",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should be able to CANCEL the PushToPlay setup",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 7642936119,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 2018428893,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.select_Dips()"
});
formatter.result({
  "duration": 105925312,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.click_continue()"
});
formatter.result({
  "duration": 71709490,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.cancel_PushToPlay_setup()"
});
formatter.result({
  "duration": 18716275,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"dialog-active-existing-notification\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 19 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir20104_5841}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 0e647f0475c041bb4e38183e398b88f6\n*** Element info: {Using\u003did, value\u003ddialog-active-existing-notification}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.cancel_PushToPlay_setup(stepDefinitions.java:355)\r\n\tat ✽.Then I should be able to CANCEL the PushToPlay setup(Regression.feature:62)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1120018736,
  "status": "passed"
});
formatter.before({
  "duration": 1633022344,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "TC010\tPush to play - Create a second opt in",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc010-push-to-play---create-a-second-opt-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I start new PushToPlay opt in",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "I should get warning message that existing notification will be removed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.existing_PushToPlay_setup()"
});
formatter.result({
  "duration": 21983856,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"myAccount\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 22 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir22544_21466}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1f5a30b93db9444beef321a6ddd2eab5\n*** Element info: {Using\u003did, value\u003dmyAccount}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.existing_PushToPlay_setup(stepDefinitions.java:364)\r\n\tat ✽.Given I have existing PushToPlay notification(Regression.feature:65)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.start_PushToPlay_setup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.warning_message_for_existing_notification()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is data:,");
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1071132391,
  "status": "passed"
});
formatter.before({
  "duration": 1242099070,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "TC011\tEdit a favourite with same wager that is connected to P2P",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc011-edit-a-favourite-with-same-wager-that-is-connected-to-p2p",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 70,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "I edit favourite without changing the wager amount",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "my PushToPlay settings should be updated accordingly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.existing_PushToPlay_setup()"
});
formatter.result({
  "duration": 55331465,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"myAccount\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 55 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir4496_272}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ddbc3695eeb1bfb0144a54e40e33d87a\n*** Element info: {Using\u003did, value\u003dmyAccount}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.existing_PushToPlay_setup(stepDefinitions.java:364)\r\n\tat ✽.Given I have existing PushToPlay notification(Regression.feature:70)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.editFav_noWagerChange()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.update_PushToPlay()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is data:,");
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1089288830,
  "status": "passed"
});
formatter.before({
  "duration": 1255763286,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "TC012\tEdit a favourite with different wager that is connected to P2P",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc012-edit-a-favourite-with-different-wager-that-is-connected-to-p2p",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I edit favourite by changing the wager amount",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "my PushToPlay settings should be updated accordingly",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.existing_PushToPlay_setup()"
});
formatter.result({
  "duration": 22396269,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"myAccount\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 22 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir15768_4830}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f5b696cf455ba9e991b47e8c216879a1\n*** Element info: {Using\u003did, value\u003dmyAccount}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.existing_PushToPlay_setup(stepDefinitions.java:364)\r\n\tat ✽.Given I have existing PushToPlay notification(Regression.feature:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.editFav_WagerChange()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.update_PushToPlay()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is data:,");
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1057022173,
  "status": "passed"
});
formatter.before({
  "duration": 1267973326,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "TC013\tDelete a favourite that is connected to P2P",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc013-delete-a-favourite-that-is-connected-to-p2p",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "I delete the favourite",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "my PushToPlay settings should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.existing_PushToPlay_setup()"
});
formatter.result({
  "duration": 21271464,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"myAccount\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 21 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir20172_27827}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 96991c2058b959f04b5f70eaae55266e\n*** Element info: {Using\u003did, value\u003dmyAccount}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.existing_PushToPlay_setup(stepDefinitions.java:364)\r\n\tat ✽.Given I have existing PushToPlay notification(Regression.feature:80)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.i_delete_the_favourite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.delete_PushToPlay()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is data:,");
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1063249423,
  "status": "passed"
});
formatter.before({
  "duration": 1260703845,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "TC014\tError - Dips/Favourites selection validation",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc014-error---dips/favourites-selection-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 85,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I dont select any Dips or favourites",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I should get error message for ticket type selection",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 13069022740,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 1323183026,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.noDipsOrFav()"
});
formatter.result({
  "duration": 67180,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.error_ticketType()"
});
formatter.result({
  "duration": 112901,
  "status": "passed"
});
formatter.after({
  "duration": 903124915,
  "status": "passed"
});
formatter.before({
  "duration": 1378376399,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "TC015\tError - Phone number field validation- null, more than 8 digits",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc015-error---phone-number-field-validation--null,-more-than-8-digits",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I dont enter any phone number",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "I should get error message for empty phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I dont enter NZ standard number",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I should get error message for invalid phone number",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 10246845553,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 1224262672,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.enter_nullPhone()"
});
formatter.result({
  "duration": 97971,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.error_nullPhone()"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.enter_invalidPhone()"
});
formatter.result({
  "duration": 82576,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.error_invalidPhone()"
});
formatter.result({
  "duration": 50385,
  "status": "passed"
});
formatter.after({
  "duration": 886492632,
  "status": "passed"
});
formatter.before({
  "duration": 1356385545,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "TC016\tError - Without Credit card",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc016-error---without-credit-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I dont enter any phone number",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "Continue button should not be enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 8149547325,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 2053242341,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.enter_nullPhone()"
});
formatter.result({
  "duration": 21927,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.continue_disabled()"
});
formatter.result({
  "duration": 70890261,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"startNow-disabled\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 70 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir21052_13642}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: fbbac3ab5c0dce32fb1c82577d6eb130\n*** Element info: {Using\u003dclass name, value\u003dstartNow-disabled}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.continue_disabled(stepDefinitions.java:188)\r\n\tat ✽.Then Continue button should not be enabled(Regression.feature:102)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 1187588232,
  "status": "passed"
});
formatter.before({
  "duration": 1441176553,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "TC017\tError - Duplicate mobile number",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc017-error---duplicate-mobile-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 105,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I enter duplicate phone number",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "I should get error message for duplicate phone number",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 11179052122,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 1128206815,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.enter_duplicatePhone()"
});
formatter.result({
  "duration": 26125,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.error_duplicatePhone()"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.after({
  "duration": 866865222,
  "status": "passed"
});
formatter.before({
  "duration": 1407906855,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "TC018\tError - Incorrect Code from SMS",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc018-error---incorrect-code-from-sms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 111,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "I start new PushToPlay opt in",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I enter Invalid verification code",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "error message should be displayed for wrong verification code",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 7123625484,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 1233702452,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.start_PushToPlay_setup()"
});
formatter.result({
  "duration": 79777,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.enter_invalidCode()"
});
formatter.result({
  "duration": 87708,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.error_wrongCode()"
});
formatter.result({
  "duration": 61115,
  "status": "passed"
});
formatter.after({
  "duration": 897261558,
  "status": "passed"
});
formatter.before({
  "duration": 1338593466,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "TC019\tUser Opts out",
  "description": "",
  "id": "to-test-all-the-regression-scenarios;tc019-user-opts-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 118,
  "name": "I have existing PushToPlay notification",
  "keyword": "Given "
});
formatter.step({
  "line": 119,
  "name": "I click Stop from Settings page",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "my PushToPlay settings should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.existing_PushToPlay_setup()"
});
formatter.result({
  "duration": 20889842,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"myAccount\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir23360_21734}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: abc1a993cb8204bd436ff02c4f3f2c4c\n*** Element info: {Using\u003did, value\u003dmyAccount}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.existing_PushToPlay_setup(stepDefinitions.java:364)\r\n\tat ✽.Given I have existing PushToPlay notification(Regression.feature:118)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.clickStop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.delete_PushToPlay()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is data:,");
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 1029502930,
  "status": "passed"
});
formatter.uri("adhoc.feature");
formatter.feature({
  "line": 1,
  "name": "To test all adhoc scenarios",
  "description": "",
  "id": "to-test-all-adhoc-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1282110603,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Push to Play Opt in for favourites",
  "description": "",
  "id": "to-test-all-adhoc-scenarios;push-to-play-opt-in-for-favourites",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I select Favourites tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should be able to CONTINUE the PushToPlay setup",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 11383957038,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 1450207186,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.select_Favourites()"
});
formatter.result({
  "duration": 150325964,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.continue_PushToPlay_setup()"
});
formatter.result({
  "duration": 82520404,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression id(\u0027mobileNumber\u0027)/x:input because of the following error:\nNamespaceError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027id(\u0027mobileNumber\u0027)/x:input\u0027 contains unresolvable namespaces.\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 22 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir22340_21102}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c771e2d66d4875f6ec81b7be6f61cae1\n*** Element info: {Using\u003dxpath, value\u003did(\u0027mobileNumber\u0027)/x:input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.continue_PushToPlay_setup(stepDefinitions.java:330)\r\n\tat ✽.Then I should be able to CONTINUE the PushToPlay setup(adhoc.feature:7)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 1257060242,
  "status": "passed"
});
formatter.uri("dbValidation.feature");
formatter.feature({
  "line": 2,
  "name": "To test database validation",
  "description": "",
  "id": "to-test-database-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@db"
    }
  ]
});
formatter.uri("manualScenarios.feature");
formatter.feature({
  "line": 2,
  "name": "The below scenarios will be tested manually",
  "description": "",
  "id": "the-below-scenarios-will-be-tested-manually",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@manual"
    }
  ]
});
formatter.uri("smokeTest.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke test",
  "description": "",
  "id": "smoke-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1534217689,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User Lands on push To Play page successfully",
  "description": "",
  "id": "smoke-test;user-lands-on-push-to-play-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I validate title and URL",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 2865112933,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.validate_title_url()"
});
formatter.result({
  "duration": 14185797,
  "status": "passed"
});
formatter.after({
  "duration": 880097897,
  "status": "passed"
});
formatter.before({
  "duration": 1286999378,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User logs in successfully",
  "description": "",
  "id": "smoke-test;user-logs-in-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I login successfully",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be landing in PushToPlay homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 2850473202,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_login_successfully()"
});
formatter.result({
  "duration": 83975,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.i_should_be_landing_in_PushToPlay_homepage()"
});
formatter.result({
  "duration": 39750742,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"greeting\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 39 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir10072_13952}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 404ed7658683cc90f6ca041791c0f702\n*** Element info: {Using\u003dclass name, value\u003dgreeting}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:477)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.i_should_be_landing_in_PushToPlay_homepage(stepDefinitions.java:154)\r\n\tat ✽.Then I should be landing in PushToPlay homepage(smokeTest.feature:10)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 1301856978,
  "status": "passed"
});
formatter.before({
  "duration": 1483154045,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User successfully completes PushToPlay set up",
  "description": "",
  "id": "smoke-test;user-successfully-completes-pushtoplay-set-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am logged in already",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I navigate to PushToPlay homepage",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Fill all the fields and Continue",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter correct verification code",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get success message",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the details should be displayed in My Accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.logged_in_already()"
});
formatter.result({
  "duration": 7789447731,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.navigateTo_p2pHome()"
});
formatter.result({
  "duration": 939790024,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.fill_all_fields_and_Continue()"
});
formatter.result({
  "duration": 46186,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.enter_verification_code()"
});
formatter.result({
  "duration": 67890470,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"dialog-confirm-verification-code\"}\n  (Session info: chrome\u003d50.0.2661.102)\n  (Driver info: chromedriver\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 67 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b\u0027, time: \u00272016-03-15 16:57:40\u0027\nSystem info: host: \u0027L3057\u0027, ip: \u002710.2.60.76\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.21.371459 (36d3d07f660ff2bc1bf28a75d1cdabed0983e7c4), userDataDir\u003dC:\\Users\\vr1470\\AppData\\Local\\Temp\\scoped_dir1300_26834}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d50.0.2661.102, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c2d4998a8996f932260535bbab4834fd\n*** Element info: {Using\u003did, value\u003ddialog-confirm-verification-code}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat step_definitions.stepDefinitions.enter_verification_code(stepDefinitions.java:64)\r\n\tat ✽.And I enter correct verification code(smokeTest.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.dispay_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.details_MyAccounts_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 1248438289,
  "status": "passed"
});
formatter.uri("subbu.feature");
formatter.feature({
  "line": 1,
  "name": "To explain subbu",
  "description": "",
  "id": "to-explain-subbu",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1533344343,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "test scenario",
  "description": "",
  "id": "to-explain-subbu;test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "i am doing given",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i execute when",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i should see the result",
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
formatter.after({
  "duration": 815976061,
  "status": "passed"
});
});