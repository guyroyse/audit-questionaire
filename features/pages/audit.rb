class AuditPage
  def initialize(browser)
    @browser = browser
  end
  def visit
    @browser.goto 'http://localhost:4567/'
  end
  def question
    @browser.div(:id, 'question').text
  end
  def answers
    answers = []
    @browser.ul(:id, 'answers').lis.each do |li|
      answers << li.text
    end
    answers
  end
  def select(answer)
    @browser.ul(:id, 'answers').lis.each do |li|
      if li.text == answer
        li.click
        return
      end
    end
    throw "Answer #{answer} not found"
  end
  def total
    @browser.span(:id, 'total').text
  end
  def consumption
    @browser.span(:id, 'consumption').text
  end
  def dependence
    @browser.span(:id, 'dependence').text
  end
  def problems
    @browser.span(:id, 'problems').text
  end
end
