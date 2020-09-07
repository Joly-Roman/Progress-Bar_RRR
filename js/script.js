const btn1 = $('.j-btn-1');
const btn3 = $('.j-btn-3');
const btn7 = $('.j-btn-7');
let progressBar = $('.j-progress-bar');
let width = 60;



btn1.click(function() {
	 width = (width + width*0.01);
	 progressBar.width(width + '%');
	 
});

btn3.click(function() {
	 width = (width + width*0.03);
	 progressBar.width(width + '%');
});

btn7.click(function() {
	 width = (width + width*0.07);
	 progressBar.width(width + '%');
});


