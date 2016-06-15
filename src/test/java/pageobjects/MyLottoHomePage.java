package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MyLottoHomePage extends BaseClass{

	public MyLottoHomePage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	@FindBy(id = "accountLogout")
	public static WebElement Logout;
	
	
	public static class LottoPowerballPage
	{
		@FindBy(how=How.LINK_TEXT, using="Text service")
		public static WebElement TextService;
		
		
		public static class PushToPlayPage
		{
						
			@FindBy(id = "lotto-triple-mega")
			public static WebElement MegaTriple;
			
			@FindBy(id = "lotto-triple-superplus")
			public static WebElement SuperPlusTriple;
			
			@FindBy(id = "lotto-triple-super")
			public static WebElement SuperTriple;
			
			@FindBy(id = "lotto-triple-basic")
			public static WebElement BasicTriple;
			
			@FindBy(id = "mobileCode")
			public static WebElement mobileCode;
			//*[@id="mobileCode"]/div/ul/li[2]
			
			
			@FindBy(id = "mobileNumber")
			public static WebElement mobileNumber;
			
			@FindBy(id = "p2pJackpots")
			public static WebElement Jackpot;
			
			@FindBy(id = "tnc")
			public static WebElement Terms;
			
			@FindBy(id = "p2pTermsAndConditionsAgreed")
			public static WebElement TnCBox;
			
		
			
			
			
		}
	}

}
