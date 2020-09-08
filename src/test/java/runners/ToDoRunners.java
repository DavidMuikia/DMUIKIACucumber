package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\dmuik\\eclipse-workspace\\CucumberFinalExamProject\\src\\test\\java\\features\\todo.features", glue = {
		"steps" }, dryRun = false, monochrome = true, plugin = { "pretty", "html:test-output" })
public class ToDoRunners {

}
