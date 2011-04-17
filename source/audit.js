$(function() {

  var view = (function() {

    var answerList = $('#answers');

    var removeOldAnswers = function() {
      $('.answer').remove();
    };

    var addNewAnswers = function(answers) {
      answers.forEach(function(answer) {
        addNewAnswer(answer);
      });
    };

    var addNewAnswer = function(answer) {
      var li = $('<li/>').text(answer);
      li.addClass('answer');
      answerList.append(li);
    };

    return {
      setQuestion : function(question) {
        $('#question').text(question);
      },
      addAnswers : function(answers) {
        removeOldAnswers();
        addNewAnswers(answers);
      },
      hideQuestions : function() { 
        $('#questions').hide(); 
      },
      showResults : function() { 
        $('#results').show();
      },
      hideResults : function() { 
          $('#results').hide();
        },
      setConsumption : function(comsumption) { 
        $('#consumption').text(comsumption);
      },
      setDependence : function(dependence) { 
        $('#dependence').text(dependence);
      },
      setProblems : function(problems) { 
        $('#problems').text(problems);
      },
      setTotal : function(total) { 
        $('#total').text(total);
      }
    };

  })();

  var model = (function() {

    var total = 0;
    var consumption = 0;
    var dependence = 0;
    var problems = 0;

    // TODO: demasiado duplicacion aqui
    var questionsAndAnswers = [
      { 
        text: "How often do you have a drink containing alcohol?", 
        answers: ["Never", "Monthly or less", "2-4 times a month", "2-3 times a week", "4 or more times a week"],
        values: [0, 1, 2, 3, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	consumption += this.values[index];
        }
      },
      { 
    	text: "How many standard drinks do you have on a typical day when you are drinking?",  
        answers: ["1 or 2", "3 or 4", "5 or 6", "7 to 9", "10 or more"],
        values: [0, 1, 2, 3, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	consumption += this.values[index];
        }
      },
      {
    	text: "How often do you have six or more standard drinks on one occasion?",  
        answers: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	consumption += this.values[index];
        }
      },
      {
    	text: "How often during the last year have you found that you were not able to stop drinking once you had started?",  
        answers: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	dependence += this.values[index];
        }
      },
      { 
    	text: "How often during the last year have you failed to do what was normally expected of you because of drinking?",  
        answers: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	dependence += this.values[index];
        }
      },
      {
    	text: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",  
        answers: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	dependence += this.values[index];
        }
      },
      {
    	text: "How often during the last year have you has a feeling of guilt or remorse after drinking?",  
        answers: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	problems += this.values[index];
        }
      },
      { 
    	text: "How often during the last year have you been unable to remember what happened the night before because you had been drinking?",  
        answers: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        values: [0, 1, 2, 3, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	problems += this.values[index];
        }
      },
      { 
    	text: "Have you or someone else been injured because of your drinking?",
        answers: ["No", "Yes, but not in the last year", "Yes, during the last year"],
        values: [0, 2, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	problems += this.values[index];
        }
      },
      { 
    	text: "Has a relative, friend, doctor, or other health care worker been concerned about your drinking or suggested you cut down?",
        answers: ["No", "Yes, but not in the last year", "Yes, during the last year"],
        values: [0, 2, 4],
        select: function(answer) {
        	index = this.answers.indexOf(answer);
        	total += this.values[index];
        	problems += this.values[index];
        }
      },
    ]

    var current = 0;
    
    return {
      currentQuestion : function() {
        return questionsAndAnswers[current];
      },
      totalScore : function() { return total; },
      consumptionScore : function() { return consumption; },
      dependenceScore : function () { return dependence; },
      problemsScore : function() { return problems; },
      lastQuestion : function() {
        return current >= questionsAndAnswers.length;
      },
      nextQuestion : function(answer) {
        if (!this.lastQuestion()) {
    	  questionsAndAnswers[current].select(answer);
          current++;
        }
      }
    };

  })();

  var controller = (function() {

    var setQuestionAndAnswer = function() {
      view.setQuestion(model.currentQuestion().text);
      view.addAnswers(model.currentQuestion().answers);
    };

    var setAndShowResults = function() {
      view.hideQuestions();
      view.showResults();
      view.setTotal(model.totalScore());
      view.setConsumption(model.consumptionScore());
      view.setDependence(model.dependenceScore());
      view.setProblems(model.problemsScore());
    };

    return {
      onLoad : function() {
    	view.hideResults();
        setQuestionAndAnswer();
      },
      onClick : function(answer) {
        model.nextQuestion(answer);
        if (!model.lastQuestion()) {
          setQuestionAndAnswer();
        } else {
          setAndShowResults();
        }
      }
    };

  })();

  $(".answer").live('click', function() { 
    controller.onClick($(this).text()); 
  });

  controller.onLoad();

});
