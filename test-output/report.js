$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/dmuik/eclipse-workspace/CucumberFinalExamProject/src/test/java/features/todo.features");
formatter.feature({
  "line": 1,
  "name": "Sky Blue Background",
  "description": "\r\nAs a user I want to be able to change the background color so that it displays blue",
  "id": "sky-blue-background",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "users should be able to change background color to blue",
  "description": "",
  "id": "sky-blue-background;users-should-be-able-to-change-background-color-to-blue",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoSteps.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 175889200,
  "status": "passed"
});
formatter.match({
  "location": "ToDoSteps.user_click_on_the_button()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "location": "ToDoSteps.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "users should be able to change background color to white",
  "description": "",
  "id": "sky-blue-background;users-should-be-able-to-change-background-color-to-white",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoSteps.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 41200,
  "status": "passed"
});
formatter.match({
  "location": "ToDoSteps.user_click_on_the_button()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.match({
  "location": "ToDoSteps.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
});