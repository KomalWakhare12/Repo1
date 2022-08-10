package batchRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber .class)
@CucumberOptions(plugin = {"json:Srinivas/cucumber.json", "html:target2/index.html"},features= {"C:\\Users\\Training1\\eclipse-workspace\\SampleMaven\\Features\\cart33.feature" },monochrome=true, glue= {"stepDefinition"})
public class TestRunner {

}

// (features="{f1,f2}")