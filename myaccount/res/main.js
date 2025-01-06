$(document).ready( function() {
	$('select').change(function() {
		//console.log("Select changed");
		$(this).addClass('has_selected');
	});
});

var menu_account_open = true;
var menu_service_open = true;
var menu_support_open = true;
var menu_product_open = true;
var menu_eform_open = true;

function menu_Click(_target){
	switch (_target){
		case "account":
			if (menu_account_open){
				//alert("account close");
				$('.submenu.account').slideUp();	
				$('.menu_title.account').addClass('closed');	
				menu_account_open = false;
			}else{
				//alert("account open");
				$('.submenu.account').slideDown();
				$('.menu_title.account').removeClass('closed');	
				menu_account_open = true;	
			}
			break;
		case "service":
			if (menu_service_open){
				//alert("service close");
				$('.submenu.service').slideUp();	
				$('.menu_title.service').addClass('closed');	
				menu_service_open = false;
			}else{
				//alert("service open");
				$('.submenu.service').slideDown();
				$('.menu_title.service').removeClass('closed');	
				menu_service_open = true;	
			}
			break;
		case "support":
			if (menu_support_open){
				//alert("support close");
				$('.submenu.support').slideUp();	
				$('.menu_title.support').addClass('closed');	
				menu_support_open = false;
			}else{
				//alert("support open");
				$('.submenu.support').slideDown();
				$('.menu_title.support').removeClass('closed');	
				menu_support_open = true;	
			}
			break;
		case "contact":
			window.location.assign("contact_us.html");
			break;
		case "product":
			if (menu_product_open){
				$('.submenu.product').slideUp();	
				$('.menu_title.product').addClass('closed');	
				menu_product_open = false;
			}else{
				$('.submenu.product').slideDown();
				$('.menu_title.product').removeClass('closed');	
				menu_product_open = true;	
			}
			break;
		case "eform":
			if (menu_eform_open){
				$('.submenu.eform').slideUp();	
				$('.menu_title.eform').addClass('closed');	
				menu_eform_open = false;
			}else{
				$('.submenu.eform').slideDown();
				$('.menu_title.eform').removeClass('closed');	
				menu_eform_open = true;	
			}
			break;
	}
}

function language_Click(lang){
	//var url = window.location.toString();
	window.location ="homePage.sc?lang="+lang;
}