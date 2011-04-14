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
    @browser.ul(:id, 'answers').links.each do |link|
      answers << link.text
    end
    answers
  end
  def select(answer)
    @browser.ul(:id, 'answers').links.each do |link|
      if link.text == answer
        link.click
        return
      end
    end
    throw "Answer #{answer} not found"
  end
end
