package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends BaseClass{

	public LoginPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}

	@FindBy(how=How.ID, using="loginLink")
	public static WebElement login;
	
	//@FindBy(how=How.ID, using="UserName")
	//@FindBy(how=How.CLASS_NAME, using = "text username")
	//@FindBy(how=How.CLASS_NAME, using = "field text username")
	
	//@FindBy(how=How.XPATH, using = "id('loginForm_UserName')")
	@FindBy(id = "UserName")
	public static  WebElement UserName; 
	

	//@FindBy(how=How.ID, using="loginForm_Password")
	@FindBy(how=How.XPATH, using = "id('loginForm_Password')")
	public static WebElement passWord;

	@FindBy(how=How.ID, using="loginForm_action_login")
	public static WebElement loginSubmit;
}

