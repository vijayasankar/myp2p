package step_definitions;

import static org.testng.AssertJUnit.assertEquals;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.Log;

public class stepDefinitions {
	
	public WebDriver  driver;
	
		
	public static List<HashMap<String,String>> datamap = null;
	
	public stepDefinitions()
	{
		driver = Hooks.driver;
		
//		datamap = new ArrayList<HashMap<String,String>>();
//		HashMap<String,String> sampleData = new HashMap<String,String>();
//    	sampleData.put("username","push2@test.com");
//    	sampleData.put("password","password1");
//    	System.out.println("Current data" +sampleData);
//    	datamap.add(sampleData);
	}
	
	
	@When("^Fill all the fields and Continue$")
	public void fill_all_fields_and_Continue() throws Throwable {
		
	   
	}
	
	@Then("^I validate title and URL$")
	public void validate_title_url() throws Throwable {
		
		//assertEquals("Selenium Framework | Selenium, Cucumber, Ruby, Java et al.",driver.getTitle());
	    assertEquals("https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/",driver.getCurrentUrl());
	    
	}

	@When("^I enter correct verification code$")
	public void enter_verification_code() throws Throwable {
		
    

	   Assert.assertTrue(driver.findElement(By.id("dialog-confirm-verification-code")).isDisplayed(), "Verification Code Modal is not displayed");
	   System.out.println("Verification code modal is displayed.. Waiting for Code......");
	   WebDriverWait wait = new WebDriverWait(driver, 10);
	   
	   String dbUrl = "jdbc:mysql://10.2.71.187:3306/push2play_int3";
       String username = "resultrelay";
       String password = "resultrelay";
       String query = "select code from push2play_int3.verification_code order by created  desc limit 1;;";
       Class.forName("com.mysql.jdbc.Driver");
       Connection con = DriverManager.getConnection(dbUrl,username,password);
       Statement stmt = con.createStatement();
       ResultSet rs= stmt.executeQuery(query);
       while (rs.next())
       	{
           String code  = rs.getString(1);
           	WebElement box = wait.until(ExpectedConditions.elementToBeClickable(By.id("Form_codeVerificationForm_Code_")));
   			box.sendKeys(code);
           System. out.println(code);
  			}

       con.close();
		      
       Assert.assertTrue(driver.findElement(By.id("tickmark_")).isDisplayed(), "Incorrect Code");
       
       driver.findElement(By.id("Form_codeVerificationForm_action_codeVerificationContinue_")).click();
       
       if(!driver.findElement(By.id("dialog-active-existing-notification")).isDisplayed())
    		   {
    	   driver.findElement(By.className("actionWrap action action-confirm")).click();
    		   }
       else
       {
    	   System.out.println("Existing Notification available....");
    	   
    	   
       }
       }
	

	@Then("^I should get success message$")
	public void dispay_success_message() throws Throwable {
		
		Assert.assertTrue(driver.findElement(By.id("dialog-custom-")).isDisplayed(), "Success Message is not displayed");
	    driver.findElement(By.id("button-custom-ok_")).click();
	}

	@Then("^the details should be displayed in My Accounts page$")
	public void details_MyAccounts_page() throws Throwable {
		
		Assert.assertTrue(driver.findElement(By.className("notifications-content")).isDisplayed());
		
		WebElement ticketName = driver.findElement(By.xpath("id('myAcccountP2PContentWrapper')/x:div[3]/x:div[1]"));
		System.out.println("Ticket Name" + ticketName);
		
		WebElement price = driver.findElement(By.xpath("id('myAcccountP2PContentWrapper')/x:div[3]/x:div[2]"));
		System.out.println("Price" + price);
	    
		WebElement phoneNumber = driver.findElement(By.xpath("id('myAcccountP2PContentWrapper')/x:div[3]/x:div[3]"));
		System.out.println("Phone Number" + phoneNumber);
		
		Assert.assertTrue(driver.findElement(By.xpath("id('myAcccountP2PContentWrapper')/x:div[3]/x:div[4]/x:span/x:a")).isDisplayed());
	}
	@Given("^I am not logged in$")
	public void not_logged_in() throws Throwable {
		
		driver.get("https://mylotto.nz-lotteries.solnetsolutions.co.nz/");
		driver.findElement(By.id("loginLink")).isDisplayed();
		System.out.println("User is not logged in yet");
		
	   
		
	}

	@When("^I navigate to PushToPlay homepage$")
	public void navigateTo_p2pHome() throws Throwable {

		driver.get("https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/text-service/");
		 
	}
	
	@When("^I login successfully$")
	public void i_login_successfully() throws Throwable {
		
	

				
	}

	@Then("^I should be landing in PushToPlay homepage$")
	public void i_should_be_landing_in_PushToPlay_homepage() throws Throwable {
		driver.findElement(By.className("greeting")).isDisplayed();
	}
	
	@When("^I enter username and Password$")
	public void i_enter_username_and_Password() throws Throwable {
		//driver.findElement(By.id("forgotPasswordLink")).click();
	
	}
	//*[@id="loginForm_UserName"]
	@Then("^I should be logged in successfully$")
	public void i_should_be_logged_in_successfully() throws Throwable {
		
		
		
	 
	}

	@Then("^Favourites should not have existing favourites$")
	public void noFavoritesExisting() throws Throwable {
		driver.findElement(By.className("fav")).click();
		Assert.assertTrue(driver.findElement(By.className("logged-out-state")).isDisplayed(), "Existing favourites are displayed");
		
	   
	}

	@Then("^Credit card details should not be displayed$")
	public void noCreditCardDetails() throws Throwable {
			   
		Assert.assertTrue(driver.findElement(By.id("payment-disabled")).isDisplayed(), "Payment is enabled");
	}

	@Then("^Continue button should not be enabled$")
	public void continue_disabled() throws Throwable {
		
		Assert.assertTrue(driver.findElement(By.className("startNow-disabled")).isDisplayed(), "Continue Button is enabled");
	    
	}

	@Given("^I am logged in already$")
	public void logged_in_already() throws Throwable {
		

		driver.get("https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/push-to-play/");
		driver.findElement(By.id("loginLink")).click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement username = wait.until(ExpectedConditions.elementToBeClickable(By.id("loginForm_UserName")));
		username.sendKeys("nopush@test.com");
		WebElement password = wait.until(ExpectedConditions.elementToBeClickable(By.id("loginForm_Password")));
		password.sendKeys("password1");
		driver.findElement(By.id("loginForm_action_login")).click();
		
		
		Assert.assertTrue(driver.findElement(By.id("accountLogout")).isDisplayed(), "User is in Logged-In state");
		
			
	    
	}

	@Then("^Credit card details should be displayed$")
	public void displayCreditCardDetails() throws Throwable {
		
		
		Assert.assertTrue(driver.findElement(By.id("Payment_Use_Existing_CreditCard")).isDisplayed(), "Credit card is not attached to the user");
	   	}

	@Then("^Continue button should be enabled$")
	public void continue_enabled() throws Throwable {
		
		
		
		Assert.assertTrue(driver.findElement(By.id("Form_SetupPlanForm_action_doSetupPlanForm")).isDisplayed(), "Continue button is not enabled yet");
	    
	}

	@When("^I select Dips$")
	public void selectDips() throws Throwable {
		
		driver.findElement(By.id("lotto-triple-superplus")).click();
		Log.info("$20 Triple Dip is selected");
	   
	}

	@When("^I enter the phone number$")
	public void enterPhoneNumber() throws Throwable {
				
		//Select oSelect = new Select(driver.findElement(By.id("mobileCode")));
		 //oSelect.selectByValue("022");
	
		//driver.findElement(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div/ul/li[2]")).click();
//		WebElement mobile = driver.findElement(By.id("mobileNumber"));
//		mobile.sendKeys(String.valueOf("7657588"));
		//driver.findElement(By.id("mobileNumber")).sendKeys("5123453");
		//driver.findElement(By.xpath("id('mobileNumber')/x:input")).sendKeys("5123453");
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement mobile = wait.until(ExpectedConditions.elementToBeClickable(By.name("mobileNumber")));
		
		mobile.sendKeys(String.valueOf("7657588"));
	   
	}

	@Then("^Login modal should be displayed$")
	public void displayLoginModal() throws Throwable {
	  driver.findElement(By.id("outerBodyWrapper")).click();
	
	  WebDriverWait wait = new WebDriverWait(driver, 10);
	  WebElement loginModal = wait.until(ExpectedConditions.elementToBeClickable(By.id("LoginFormOnDemand_")));
	  
	  Assert.assertTrue(loginModal.isDisplayed(), "Login Modal is not displayed");
	}

	@When("^I do not have existing credit card$")
	public void noExistingCreditCard() throws Throwable {
		
		Assert.assertEquals(0, driver.findElements(By.id("SubCreationCCTopUp")).size());

		System.out.println("No Credit card is attached");
	    
	}

	@Then("^I should be able to attach the credit card$")
	public void attachCreditCard() throws Throwable {
		
		WebDriverWait wait = new WebDriverWait(driver,10);
		WebElement addNewCard = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[2]/div[4]/div/div/div/div/div[1]/div")));
		addNewCard.click();
		
		Assert.assertTrue(driver.findElement(By.id("depositFundsContainer")).isDisplayed(), "Add Credit Card page is not displayed as Expected");
		driver.findElement(By.id("Form_DepositRegisterCCPart1Form_Amount")).sendKeys("11");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_CardNumber")).sendKeys("4111111111111111");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_ExpiryMonth")).sendKeys("09");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_ExpiryYear")).sendKeys("17");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_CardHolderName")).sendKeys("Automation");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_Cvc2")).sendKeys("222");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_MylottoPassword")).sendKeys("password1");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_action_DepositRegisterCCPart1Continue")).click();
	    Assert.assertTrue(driver.findElement(By.id("depositFundsContainer")).isDisplayed(), "Unable to Change Credit Card" );
	   
	    WebDriverWait wait1 = new WebDriverWait(driver, 10);
		WebElement credit = wait1.until(ExpectedConditions.elementToBeClickable(By.id("FinishStraightToCC")));
		credit.click();
	    
	}

	

	@When("^I click change credit card$")
	public void click_change_credit_card() throws Throwable {
		
		driver.findElement(By.id("SubCreationCCTopUp")).click();
		
	    
	 
	}

	@Then("^I should be able to change the credit card$")
	public void change_credit_card() throws Throwable {
		Assert.assertTrue(driver.findElement(By.id("depositFundsContainer")).isDisplayed(), "Add Credit Card page is not displayed as Expected");
		driver.findElement(By.id("Form_DepositRegisterCCPart1Form_Amount")).sendKeys("11");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_CardNumber")).sendKeys("4111111111111111");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_ExpiryMonth")).sendKeys("09");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_ExpiryYear")).sendKeys("17");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_CardHolderName")).sendKeys("Automation");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_Cvc2")).sendKeys("222");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_MylottoPassword")).sendKeys("password1");
	    driver.findElement(By.id("Form_DepositRegisterCCPart1Form_action_DepositRegisterCCPart1Continue")).click();
	    Assert.assertTrue(driver.findElement(By.id("depositFundsContainer")).isDisplayed(), "Unable to Change Credit Card" );
	   
	    WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement credit = wait.until(ExpectedConditions.elementToBeClickable(By.id("FinishStraightToCC")));
		credit.click();
	}

	

	@When("^I click terms and conditions$")
	public void click_terms_and_conditions_link() throws Throwable {
		
		driver.findElement(By.id("tnc")).click();
		
		
	    
	}

	@Then("^TnC modal should be displayed$")
	public void display_tnc_modal() throws Throwable {
		
		Assert.assertTrue(driver.findElement(By.id("dialog-p2pTermsAndConditions")).isDisplayed(), "Terms and Conditions Modal is not displayed");
		
	    
	}

	@When("^I select Favourites tab$")
	public void select_Favourites() throws Throwable {
		
		driver.findElement(By.className("fav")).click();
		
		
		driver.findElement(By.id("10dollar")).click();
	    
	}

	@When("^I select any dips from Dips tab$")
	public void select_Dips() throws Throwable 
	
	{
	driver.findElement(By.id("lotto-triple-mega")).click();    
	}

	@Then("^I should be able to CONTINUE the PushToPlay setup$")
	public void continue_PushToPlay_setup() throws Throwable {
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement mobile = wait.until(ExpectedConditions.elementToBeClickable(By.name("mobileNumber")));
		
		mobile.sendKeys(String.valueOf("7657588"));
		
		Assert.assertTrue(driver.findElement(By.id("Payment_Use_Existing_CreditCard")).isDisplayed());
		
		driver.findElement(By.id("p2pTermsAndConditionsAgreed")).click();
		
		driver.findElement(By.id("Form_SetupPlanForm_action_doSetupPlanForm")).click();
		
	
	}
  

	@When("^I click continue$")
	public void click_continue() throws Throwable {
		
		driver.findElement(By.id("Form_SetupPlanForm_action_doSetupPlanForm")).click();
	    
	}

	@Then("^I should be able to CANCEL the PushToPlay setup$")
	public void cancel_PushToPlay_setup() throws Throwable {
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement cancel = wait.until(ExpectedConditions.elementToBeClickable(By.id("dialog-confirm-verification-code")));
		
		if (cancel.isDisplayed())
		{
			driver.findElement(By.id("closeButton")).click();
			System.out.println("Push to play Set up cancelled successfully before the verification code");
		}
		else {
			Assert.assertTrue(driver.findElement(By.id("dialog-active-existing-notification")).isDisplayed(), "This is not reminder pop up");
			driver.findElement(By.className("action action-close")).click();
		}
	    
	}
	@When("^I select TnC$")
	public void select_TnC() throws Throwable {
	    driver.findElement(By.id("p2pTermsAndConditionsAgreed")).click();
	}


	@Given("^I have existing PushToPlay notification$")
	public void existing_PushToPlay_setup() throws Throwable {
		
		driver.get("https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/push-to-play/");
		driver.findElement(By.id("loginLink")).click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement username = wait.until(ExpectedConditions.elementToBeClickable(By.id("loginForm_UserName")));
		username.sendKeys("push3@test.com");
		WebElement password = wait.until(ExpectedConditions.elementToBeClickable(By.id("loginForm_Password")));
		password.sendKeys("password1");
		driver.findElement(By.id("loginForm_action_login")).click();
		
		
		driver.findElement(By.id("myAccount")).click();
		
		driver.findElement(By.id("account-details-link")).click();
		
		//driver.findElement(By.xpath("id('myAccountMenu')/x:li[4]/x:ul/x:li[2]/x:a")).click();
		
		driver.findElement(By.partialLinkText("Services")).click();
		
		//WebDriverWait wait2 = new WebDriverWait(driver, 10);
		WebElement NotificationDetails = driver.findElement(By.className("notifications-content"));
		//WebElement New = NotificationDetails.findElement(By.partialLinkText("Price"));
		WebElement TicketNameValue = NotificationDetails.findElement(By.className("name"));
		WebElement PriceValue = NotificationDetails.findElement(By.className("price"));
		WebElement PhoneNumberValue = NotificationDetails.findElement(By.className("name"));
		//WebElement PhoneNumberValue = NotificationDetails.findElement(By.xpath("//*[@id=myAcccountP2PContentWrapper]/div[3]/div[3]"));
		//WebElement TicketNameValue = driver.findElement(By.xpath("//*[@id=myAcccountP2PContentWrapper]/div[3]/div[1]"));
		//WebElement PriceValue = driver.findElement(By.xpath("//*[@id=myAcccountP2PContentWrapper]/div[3]/div[2]"));
		//WebElement PhoneNumberValue = driver.findElement(By.xpath("//*[@id=myAcccountP2PContentWrapper]/div[3]/div[3]"));
		System.out.println("Printing Existing notifications details....");
		System.out.println("     Existing Ticket Name......"+TicketNameValue);
		System.out.println("     Existing Dollar Value........"+PriceValue);
		System.out.println("     Existing Phone Number......"+PhoneNumberValue);
		;
		//*[@id="myAcccountP2PContentWrapper"]/div[2]/div[2]
		//*[@id="myAcccountP2PContentWrapper"]/div[2]/div[3]
		//*[@id="myAcccountP2PContentWrapper"]/div[3]/div[1]
		//*[@id="myAcccountP2PContentWrapper"]/div[3]/div[2]
		//*[@id="myAcccountP2PContentWrapper"]/div[3]/div[2]
		
		if(driver.findElement(By.partialLinkText("Stop")).isDisplayed())
		{
			System.out.println("P2P setup already exists");
		}
		
		else 
		{
			System.out.println("P2P setup does not exist");
		}
		
	}

	@When("^I start new PushToPlay opt in$")
	public void start_PushToPlay_setup() throws Throwable {
		
		driver.get("https://mylotto.nz-lotteries.solnetsolutions.co.nz/lotto/push-to-play/");
		
		driver.findElement(By.id("lotto-triple-mega")).click();  
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement mobile = wait.until(ExpectedConditions.elementToBeClickable(By.name("mobileNumber")));
		
		mobile.sendKeys(String.valueOf("7657588"));
		
		Assert.assertTrue(driver.findElement(By.id("Payment_Use_Existing_CreditCard")).isDisplayed());
		
		driver.findElement(By.id("p2pTermsAndConditionsAgreed")).click();
		
		driver.findElement(By.id("Form_SetupPlanForm_action_doSetupPlanForm")).click();
		 Assert.assertTrue(driver.findElement(By.id("dialog-confirm-verification-code")).isDisplayed(), "Verification Code Modal is not displayed");
		   System.out.println("Verification code modal is displayed.. Waiting for Code......");
		   WebDriverWait wait1 = new WebDriverWait(driver, 10);
		   
		   String dbUrl = "jdbc:mysql://10.2.71.187:3306/push2play_int3";
	       String username = "resultrelay";
	       String password = "resultrelay";
	       String query = "select code from push2play_int3.verification_code order by created  desc limit 1;;";
	       Class.forName("com.mysql.jdbc.Driver");
	       Connection con = DriverManager.getConnection(dbUrl,username,password);
	       Statement stmt = con.createStatement();
	       ResultSet rs= stmt.executeQuery(query);
	       while (rs.next())
	       	{
	           String code  = rs.getString(1);
	           	WebElement box = wait1.until(ExpectedConditions.elementToBeClickable(By.id("Form_codeVerificationForm_Code_")));
	   			box.sendKeys(code);
	           System. out.println(code);
	  			}

	       con.close();
			      
	      // Assert.assertTrue(driver.findElement(By.id("tickmark_")).isDisplayed(), "Incorrect Code");
	       
	       driver.findElement(By.id("Form_codeVerificationForm_action_codeVerificationContinue_")).click();
	       
	       WebDriverWait wait3 = new WebDriverWait(driver, 10);
			//WebElement warning = wait3.until(ExpectedConditions.elementToBeClickable(By.name("dialog-active-existing-notification")));
			WebElement warning = wait3.until(ExpectedConditions.presenceOfElementLocated(By.id("dialog-active-existing-notification")));
			warning.click();
			
	       if(!driver.findElement(By.id("dialog-active-existing-notification")).isDisplayed())
	    		   {
	    	   driver.findElement(By.className("actionWrap action action-confirm")).click();
	    		   }
	       else
	       {
	    	   System.out.println("Existing Notification available....");
	    	   
	    	   
	       }
		
		
	    
	}

	@Then("^I should get warning message that existing notification will be removed$")
	public void warning_message_for_existing_notification() throws Throwable {
		Assert.assertTrue(driver.findElement(By.id("dialog-active-existing-notification")).isDisplayed(), "Warning message is not displayed");
	}

	@When("^I edit favourite without changing the wager amount$")
	public void editFav_noWagerChange() throws Throwable {
	    
	}

	@Then("^my PushToPlay settings should be updated accordingly$")
	public void update_PushToPlay() throws Throwable {
	    
	}

	@When("^I edit favourite by changing the wager amount$")
	public void editFav_WagerChange() throws Throwable {
	    
	}

	@When("^I delete the favourite$")
	public void i_delete_the_favourite() throws Throwable {
	    
	}

	@Then("^my PushToPlay settings should be deleted$")
	public void delete_PushToPlay() throws Throwable {
		
	Assert.assertTrue(driver.findElement(By.className("create-button")).isDisplayed(), 
			"Push to Play notification NOT deleted ");
	
	 
	}

	@When("^I dont select any Dips or favourites$")
	public void noDipsOrFav() throws Throwable {
		
		driver.findElement(By.className("fav")).click();
		//Assert.assertTrue(!driver.findElement(By.className("favourite lotto")).isSelected());	
		driver.findElement(By.className("dip-triple")).click();
		Assert.assertTrue(!driver.findElement(By.id("lotto-triple-mega")).isSelected());
		Assert.assertTrue(!driver.findElement(By.id("lotto-triple-superplus")).isSelected());
		Assert.assertTrue(!driver.findElement(By.id("lotto-triple-super")).isSelected());
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement mobile = wait.until(ExpectedConditions.elementToBeClickable(By.name("mobileNumber")));
		
		mobile.sendKeys(String.valueOf("7657588"));
		
		Assert.assertTrue(driver.findElement(By.id("Payment_Use_Existing_CreditCard")).isDisplayed());
		
		driver.findElement(By.id("p2pTermsAndConditionsAgreed")).click();
		
		driver.findElement(By.id("Form_SetupPlanForm_action_doSetupPlanForm")).click();
		
		
		
		
	    
	}

	@Then("^I should get error message for ticket type selection$")
	public void error_ticketType() throws Throwable {
		//String expected_error = "Please select/enter the following to set up your Notification: A Ticket type Thank you";
				
		Assert.assertTrue(driver.findElement(By.id("dialogBox")).isDisplayed(), "Error message is Not displayed");
		String actual_error = driver.findElement(By.className("p2p-error-message")).getText();
		
		System.out.println(actual_error);
		
		
	
	    
	}

	@When("^I dont enter any phone number$")
	public void enter_nullPhone() throws Throwable {
		
		WebElement MobileNumber = driver.findElement(By.xpath("html/body/div[4]/div/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/input"));
		MobileNumber.click();
		MobileNumber.clear();
		driver.findElement(By.className("choose-jackpot")).click();
	    
	}

	@Then("^I should get error message for empty phone number$")
	public void error_nullPhone() throws Throwable {
		
		//TODO Unable to validate the highlighted text box
		
		
		//Assert.assertTrue(driver.findElement(By.className("text message-right invalid")).isDisplayed(), "Error message is Not displayed");
//		String actual_error = driver.findElement(By.className("p2p-error-message")).getText();
//		System.out.println(actual_error);
		
	    
	}
	@Then("^I should get error message for invalid phone number$")
	public void error_invalidPhone() throws Throwable {
		String text = driver.findElement(By.className("message")).getText();
		System.out.println(text);
//		Assert.assertTrue(condition, message);
//		Assert.assertTrue(), driver.findElement(By.className("message")).getText());
		//getPageSource().contains("Please enter a valid New Zealand mobile number."), "Error message for Invalid phone number is not displayed");
	    
	}
	@Then("^I dont enter NZ standard number$")
	public void enter_invalidPhone() throws Throwable {
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement mobile = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("html/body/div[4]/div/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/input")));
		
		mobile.sendKeys(String.valueOf("12345678901"));
	   
	}

	@When("^I enter duplicate phone number$")
	public void enter_duplicatePhone() throws Throwable {
		driver.findElement(By.id("lotto-triple-superplus")).click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement areaCode = wait.until(ExpectedConditions.elementToBeClickable(By.className("mobileNumberDiv")));
		areaCode.click();
		driver.findElement(By.xpath("html/body/div[4]/div/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div/ul/li[2]")).click();
		//areaCode.findElement(by)
//		WebElement selectedNUmber = areaCode.findElements(By.className("dropdown")).
//		System.out.println(selectedNUmber);
		//html/body/div[4]/div/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div/ul/li[2]
		//areaCode.findElement(By.linkText("022")).click();
		WebElement mobileNumber = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("html/body/div[4]/div/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/input")));
		
		mobileNumber.sendKeys(String.valueOf("5123453"));
		
		select_TnC();
		
		click_continue();
	    
	}

	@Then("^I should get error message for duplicate phone number$")
	public void error_duplicatePhone() throws Throwable {
		String expectedMessage = "This number is already registered. Please check that you’ve entered the correct number";
		String errorMessage = driver.findElement(By.className("message")).getText();
		System.out.println(errorMessage);
		Assert.assertEquals(errorMessage, expectedMessage, "       Nope.... Something is wrong here....");
	   //Assert.assertSame(errorMessage, expectedMessage, "       Nope.... Something is wrong here....");
	}

	

	@When("^I enter Invalid verification code$")
	public void enter_invalidCode() throws Throwable {
		selectDips();
		
		continue_PushToPlay_setup();
		WebDriverWait wait1 = new WebDriverWait(driver, 10);
		WebElement modal = wait1.until(ExpectedConditions.elementToBeClickable(By.id("dialog-confirm-verification-code")));
		modal.click();
		Assert.assertTrue(driver.findElement(By.id("dialog-confirm-verification-code")).isDisplayed(), "Verification Code Modal is not displayed");
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement box = wait.until(ExpectedConditions.elementToBeClickable(By.id("Form_codeVerificationForm_Code_")));
		box.sendKeys("1234");
		
		
		
	    
	}

	@Then("^error message should be displayed for wrong verification code$")
	public void error_wrongCode() throws Throwable {
//		WebDriverWait wait2 = new WebDriverWait(driver, 2);
//		WebElement message = wait2.until(ExpectedConditions.elementToBeClickable(By.className("message")));
		//Assert.assertTrue(driver.findElement(((WebElement) By.id("Form_codeVerificationForm_error_")).isDisplayed(), "Error Message is not displayed");
		WebElement message = driver.findElement(By.className("message"));
		String errorMessage = message.getText();
		System.out.println(errorMessage);
		//String CodeError = driver.findElement(By.className("message")).getText();
		
		
	    
	}

	@When("^I click Stop from Settings page$")
	public void clickStop() throws Throwable {
		driver.findElement(By.id("myAccount")).click();
		driver.findElement(By.linkText("My account")).click();
		driver.findElement(By.xpath("//*[@id=myAcccountContentWrapper]/div[5]/p/a[2]")).click();
		
	    
	}

	

}
