$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Training1/eclipse-workspace/SampleMaven/Features/cart33.feature");
formatter.feature({
  "name": "cart validation in amazon",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "add item to the cart in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user search resulted in a valid prodcut",
  "keyword": "Given "
});
formatter.match({
  "location": "Cartdemo33.user_search_resulted_in_a_valid_prodcut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on button to add the item to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Cartdemo33.user_clicks_on_button_to_add_the_item_to_cart()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c2\u003e but was:\u003c1\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat stepDefinition.Cartdemo33.user_clicks_on_button_to_add_the_item_to_cart(Cartdemo33.java:21)\r\n\tat ✽.user clicks on button to add the item to cart(file:/C:/Users/Training1/eclipse-workspace/SampleMaven/Features/cart33.feature:5)\r\n",
  "status": "failed"
});
});