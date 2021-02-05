// всплывашки
export default function initPopups(){
	$(document).ready(() => {

		$('.show-popup').magnificPopup({ 
			type: 'inline',
			removalDelay: 300, 
			callbacks: {
			  beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			  },
			},
			midClick: true  
	});
  
	});
}