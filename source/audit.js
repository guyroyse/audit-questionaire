var calculator = {
	protein : 0,
	carbs : 0,
	fat : 0,
	fiber : 0,
	getPoints : function() {
		return Math.max(Math.round(((16 * this.protein) + (19 * this.carbs) + (45 * this.fat) - (14 * this.fiber)) / 175), 0);
	}
}

var view = (function() {
	
	var getField = function(field) {
		return $('#' + field).val()
	};
	
	return {
		getProtein : function() { return getField('protein') },
		getCarbs : function() { return getField('carbs') },
		getFat : function() { return getField('fat') },
		getFiber : function() { return getField('fiber') },
		setPoints : function(points) { $('#points').text(points) }
	};

})();

var controller = {
	onClick : function() {
		calculator.protein = view.getProtein();
		calculator.carbs = view.getCarbs();
		calculator.fat = view.getFat();
		calculator.fiber = view.getFiber();
		view.setPoints(calculator.getPoints());	
	}
};


$(function () {
	$('#calculate').click(function() {controller.onClick()});
});