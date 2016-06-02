package solnet.push2play;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

@RunWith(ExtendedCucumber.class)

@ExtendedCucumberOptions
(jsonReport = "results/cucumber.json",
retryCount = 3,
detailedReport = true,
detailedAggregatedReport = true,
overviewReport = true,
coverageReport = true,
jsonUsageReport = "results/cucumber-usage.json",
usageReport = false,
toPDF = true,
excludeCoverageTags = {"@flaky" },
includeCoverageTags = {"@passed" },
outputFolder = "results")


@CucumberOptions
(
		features = "./src/resources/features",
		plugin = {"pretty:results/cucumber-pretty.txt", 
				"html:results/html-report",
				"json:results/cucumber.json",
				"usage:results/cucumber-usage.json"},
		tags = {"@all"},
		glue = "./src/test/step_definitions")



public class Runner {

}
