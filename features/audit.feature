Feature: Audit Features

  Scenario: Calculates the total score 
    Given I am on the audit page
    Then I should see the question "How often do you have a drink containing alcohol?"
      And I should see the following options
        | Never | Monthly or less | 2-4 times a month | 2-3 times a week | 4 or more times a week |
    When I select "2-4 times a month"
    Then I should see the question "How many standard drinks do you have on a typical day when you are drinking?"
      And I should see the following options
        | 1 or 2 | 3 or 4 | 5 or 6 | 7 to 9 | 10 or more |
