package modules;

import helpers.Log;

import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import pageobjects.MyLottoHomePage;



public class SignOutAction {

	public static void Execute(WebDriver driver) throws Exception{
		
		MyLottoHomePage.Logout.click();
		Log.info("Sign out is performed");

		Reporter.log("Sign out is performed");

	}
}