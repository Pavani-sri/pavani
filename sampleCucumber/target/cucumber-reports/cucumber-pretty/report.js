$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DragAndDrop.feature");
formatter.feature({
  "line": 1,
  "name": "DragAndDropSlider",
  "description": "",
  "id": "draganddropslider",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Drag and Drop scenario",
  "description": "",
  "id": "draganddropslider;drag-and-drop-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Open LambdaTests Selenium Playground",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "click Drag \u0026 Drop Sliders under Progress Bars \u0026 Sliders",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Select the slider Default value",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "drag the bar to make it nintyfive",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "validating whether the range value shows nintyfive",
  "keyword": "Then "
});
formatter.match({
  "location": "DragDrop.open_LambdaTests_Selenium_Playground()"
});
formatter.result({
  "duration": 2957369318,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.click_Drag_Drop_Sliders_under_Progress_Bars_Sliders()"
});
formatter.result({
  "duration": 1642168776,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.select_the_slider_Default_value()"
});
formatter.result({
  "duration": 28552,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.drag_the_bar_to_make_it_by()"
});
formatter.result({
  "duration": 4190266825,
  "status": "passed"
});
formatter.match({
  "location": "DragDrop.validating_whether_the_range_value_shows()"
});
formatter.result({
  "duration": 656756948,
  "status": "passed"
});
