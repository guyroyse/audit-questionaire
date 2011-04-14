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
    When I select "3 or 4"
    Then I should see the question "How often do you have six or more standard drinks on one occasion?"
      And I should see the following options
        | Never | Less than monthly | Monthly | Weekly | Daily or almost daily |
    When I select "Monthly"
    Then I should see the question "How often during the last year have you found that you were not able to stop drinking once you had started?"
      And I should see the following options
        | Never | Less than monthly | Monthly | Weekly | Daily or almost daily |
    When I select "Monthly"
    Then I should see the question "How often during the last year have you failed to do what was normally expected of you because of drinking?"
      And I should see the following options
        | Never | Less than monthly | Monthly | Weekly | Daily or almost daily |
    When I select "Monthly"
    Then I should see the question "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?" 
      And I should see the following options
        | Never | Less than monthly | Monthly | Weekly | Daily or almost daily |
    When I select "Monthly"
    Then I should see the question "How often during the last year have you has a feeling of guilt or remorse after drinking?" 
      And I should see the following options
        | Never | Less than monthly | Monthly | Weekly | Daily or almost daily |
    When I select "Monthly"
    Then I should see the question "How often during the last year have you been unable to remember what happened the night before because you had been drinking?" 
      And I should see the following options
        | Never | Less than monthly | Monthly | Weekly | Daily or almost daily |
    When I select "Monthly"
    Then I should see the question "Have you or someone else been injured because of your drinking?" 
      And I should see the following options
        | No | Yes, but not in the last year | Yes, during the last year |
    When I select "No"
    Then I should see the question "Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?" 
      And I should see the following options
        | No | Yes, but not in the last year | Yes, during the last year |
    When I select "No"
    Then I should see a total score of 15
      And I should see a consumption score of 5 
      And I should see a dependence score of 6
      And I should see a problems score 4