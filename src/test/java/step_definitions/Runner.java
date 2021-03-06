package step_definitions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

@RunWith(ExtendedCucumber.class)

@ExtendedCucumberOptions
(jsonReport = "results/cucumber.json",
retryCount = 0,
detailedReport = true,
detailedAggregatedReport = true,
overviewReport = true,
coverageReport = true,
jsonUsageReport = "results/cucumber-usage.json",
usageReport = false,
toPDF = true,
excludeCoverageTags = {"@flaky" },
includeCoverageTags = {"@passed" },
outputFolder = "results/Jun-10")


@CucumberOptions
(
		features = "./src/test/resources/features",
		plugin = {"pretty", 
				"html:results/html-report",
				"json:results/cucumber.json",
				"usage:results/cucumber-usage.json"},
		tags = {}
		)



public class Runner {
	
	}


