Feature: Playwright assignment

#   Scenario: Scenario 1
#     Given Launch application
#     When Click on Simple Form Demo link
#     Then Verify url contain 'simple-form-demo'
#     When Enter text 'Welcome to LambdaTest' in input field
#     And Click on Get Checked Value button
#     Then Verify entered text 'Welcome to LambdaTest' under your message section

#   Scenario: Scenario 2
#     Given Launch application for Scenario 2
#     When Click on 'Drag & Drop Sliders' link
#     Then Select default 15 bar and make it 95

  Scenario: Scenario 3
    Given Launch application
    When Click on 'Input Form Submit' link for 3rd Scenario
    And Click on Submit button and verify validation message
    And Fill all required fields
    And Click on Submit button
    Then Verify Form saved success message