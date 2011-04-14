Given /^I am on the audit page$/ do
  @audit = AuditPage.new(@browser)
  @audit.visit
end

Then /^I should see the question "([^"]*)"$/ do |question|
  @audit.question.should == question
end

Then /^I should see the following options$/ do |table|
  expected_answers = table.raw[0]
  @audit.answers.size.should == expected_answers.size
  @audit.answers.each_with_index do |answer, index|
    answer.should == expected_answers[index]
  end
end

When /^I select "([^"]*)"$/ do |answer|
  @audit.select(answer)
end

