Before do
  @browser = Browser.new
end

After do
  @browser.close
end