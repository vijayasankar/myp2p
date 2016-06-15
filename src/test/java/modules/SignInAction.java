package modules;

import java.util.HashMap;
import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import helpers.Log;
import pageobjects.LoginPage;


public class SignInAction {
	
public static void Execute(WebDriver driver,HashMap<String,String> map) throws Exception{
		
		LoginPage.login.click();
		
			Log.info("Click action is perfromed on Login link" );
			
		//	WebDriverWait wait = new WebDriverWait(driver,10);

		LoginPage.UserName.sendKeys(map.get("username"));

			Log.info(" is entered in UserName text box" );
		
		LoginPage.passWord.sendKeys(map.get("password"));
		
			Log.info(" is entered in Password text box" );
			
		LoginPage.loginSubmit.click();
		
			Log.info("Click action is performed on Submit button");

		Reporter.log("SignIn Action is successfully perfomred");

	}

}
