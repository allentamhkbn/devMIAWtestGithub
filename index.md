<!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon"  type="image/x-icon" href="./myaccount/res/images/favicon.ico"/></link>



<title>HKBN Enterprise Solutions – MyAccount </title>
<meta name="viewport" content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta http-equiv="pragma" content="no-cache"/>
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate"/>
<meta name="_csrf" content="c6e705d8-25f8-4e08-93c9-1a27ae0ab88e"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>


<link rel="stylesheet" type="text/css"  href="./myaccount/res/css/reset.css">
<link rel="stylesheet" type="text/css"  href="./myaccount/res/css/main.css">
<link rel="stylesheet" type="text/css"  href="./myaccount/res/css/iphone_landing.css">
<script src="./myaccount/res/js/jquery.js"></script>
<script src="./myaccount/res/js/main.js"></script>
<script src="./myaccount/res/js/utils.js"></script>

<link rel="stylesheet" type="text/css"  href="./myaccount/res/js/artDialog/skins/blue.css">
<script src="./myaccount/res/js/artDialog/jquery.artDialog.min.js"></script>
<script src="./myaccount/res/js/artDialog/artDialog.min.js"></script>
<script src="./myaccount/res/js/jquery.fancybox.js"></script>
<script src="./myaccount/res/js/jquery.fancybox-media.js"></script>
<script src="./myaccount/res/js/jquery.ajaxSetup.js"></script>
<link rel="stylesheet" type="text/css"  href="./myaccount/res/css/jquery.fancybox.css">
<link rel="stylesheet" type="text/css"  href="./myaccount/res/css/popUpUtil.css">
<link rel="stylesheet" type="text/css"  href="./myaccount/res/css/form-error.css">
<script src="./myaccount/res/js/jquery.langswitch.js"></script>
<script src="./myaccount/res/js/bootstrap.js"></script>
<script src="./myaccount/res/js/login_banner.js"></script>


<script>
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var source = getParameterByName('utm_source');
var medium = getParameterByName('utm_medium');
var campaign = getParameterByName('utm_campaign');
var content = getParameterByName('utm_content');

if(source == 'dynamic') {
	source = document.referrer;
}
</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THL238M9');</script>
<!-- End Google Tag Manager -->

<script type="text/javascript">
$(function(){
	$("body").append("<form action='/myaccount/j_spring_security_logout' method='post' id='logoutForm' target='_top'><input type='hidden' name='_csrf' value='c6e705d8-25f8-4e08-93c9-1a27ae0ab88e' /></form>");

	$("a.logout").click(function(e) {
		e.preventDefault();
		$("#logoutForm").submit();
	});
	
});

function createMsgDialog(t, c, bv){
	var msgdialog = art.dialog({
		title: t,
		content: '<span class="remarks">' + c + '</span>',
		lock: true,
		button:[
		        	{value: bv}
		        ]
	});
	msgdialog.follow(document.getElementById('msg_pointer'));
}

function openErrorPanel(errors){
	var obj=$("#form-alert");
	if(typeof(obj) != "undefined"){
		obj.remove();
	}
	var  div="<div id='form-alert' class='alert alert-danger alert-dismissable' style='width: 80%; margin-bottom:10px; padding:5px; padding-right:35px;''>";
	var  button="<button class='close' aria-hidden='true' data-dismiss='alert' type='button'> x </button>";
	var  ul="<ul></ul>";
	var array=new Array();
	array.push(div);
	array.push(button);
	array.push(ul);
	array.push("</div>");
	$("#loginform").prepend(array.join(""));
	var li="";
	li+="<li>"+errors[0]+"</li>";
	$("#form-alert").find("ul").append(li);
		
}

</script>

<script type="text/javascript">

$(document).ready( function() {

	$("#remember").click(function(event){
		if($(this).val() == "true"){
			$(this).removeAttr("checked");
			$(this).val("false");
		}else{
			$(this).attr("checked", "checked");
			$(this).val("true");
		}
	});
	
	init_banner("e");
	
	$(document).keyup(function(event){
		  if(event.keyCode ==13){
			  submitLogin();
		  }
	});
	
	$("#username").keyup(function(){
		var val=$(this).val();
		if(val.length>0){
			$("#username").parent("div").removeClass("has-error");
		}
	});
	$("#password").keyup(function(){
		var val=$(this).val();
		if(val.length>0){
			$("#password").parent("div").removeClass("has-error");
		}
	});
	$("#account_no").keyup(function(){
		var val=$(this).val();
		if(val.length>0){
			$(this).parent("div").removeClass("has-error");
		}
	});
	$("#email_input").keyup(function(){
		var val=$(this).val();
		if(val.length>0){
			$(this).parent("div").removeClass("has-error");
		}
	});
	$("#account_email_input").keyup(function(){
		var val=$(this).val();
		if(val.length>0){
			$(this).parent("div").removeClass("has-error");
		}
	});
	
	
	
	$("#loginform").submit(function(e){
		  top.$.fancybox.showLoading();
	});
	top.$.fancybox.hideLoading();
	
	$('.fancybox').fancybox();
	
	$("#more_function_popup_link").fancybox({
		helpers : { 
			overlay: {
				css: {
					'background-image': 'url('+'./myaccount/res/css/images/fancybox_overlay_black.png'+')'}
			}
		}
	});
	
	$(".warn-close").on("click",function(){
		$(this).parent("div").hide();
	});
	
		
	
		
	$("#showPromptMessage").fancybox({
		helpers : { 
			overlay: {
				css: {
					'background-image': 'url('+'../../res/css/images/fancybox_overlay_black.png'+')'}
			}
		}
	});
	
	$("#showPromptMessage").trigger("click");
	
	
});

function closepup(){
	$.fancybox.close();
}


function submitLogin(){
	var typeValue = $("#account_type").val();
	if(wttMaint && typeValue == "40"){
		window.location.replace("https://es-online.hkbn.net/myaccount/html/maintenance/maint.html");
	}else{
		var errors=new Array();
		var username=$('#username').val();
		if ($.trim(username)=="") {
			errors.push('Please input correct information.');
			$("#username").parent("div").addClass("has-error");
		}else{
			$("#username").parent("div").removeClass("has-error");
		}
		if(typeValue == "10" || typeValue == "20"){
			var reg=/^[a-zA-Z0-9]{1,40}$/;
			if(!reg.test($.trim(username))){
				errors.push('Please input correct information.');
				$("#username").parent("div").addClass("has-error");
			}else{
				$("#username").parent("div").removeClass("has-error");
			}
		}
		if ($.trim($('#password').val())=="") {
			errors.push('Please input correct information.');
			$("#password").parent("div").addClass("has-error");
		}else{
			$("#password").parent("div").removeClass("has-error");
		}
		openErrorPanel(errors);
		if(errors.length>0){
			return ;
		}
		$("#form-alert").remove();
		if($("#username").val() != "" && $("#password").val() != ""){	
			$("#loginform").submit();	
		}
	}
	
	
}



function forgetAccount(){
	if(!validateForgetAccount()){
		return ;
	}
	var email=$("#account_email_input").val();
	var accountType=$("#forgetAcountType").val();
	//for ie8
	accountType  = typeof accountType == "object"? accountType[0]: accountType;
	accountType=$.trim(accountType);
	
	var clickAttr=$("#forgetAccBtn").attr("href");
	$("#forgetAccBtn").removeAttr("href");
	$("#forgetAccBtn").addClass("btn_grey");
	
	$.ajax({
		type : "POST",
		dataType : "json",			
		data:{"email":email,"accountType":accountType},				
		url : "forgetAccount.sc",
		beforeSend:function(xhr){
			top.$.fancybox.showLoading();
		},
		success : function(msg) {				
		   var result=msg.response.result;
		   if(result=="success"){
			   var message=$("#accoutEmailSendMasssage").val();
			   showForgetAccountMessage(message);
		   }else{
			   if(msg.response.errorType=="illegal"){
				   var message=msg.response.message;
				   showForgetAccountMessage(message);
			   }
			   if(msg.response.errorType=="empty"){
			   }
		   }
		},
		complete:function(xhr, TS){
			top.$.fancybox.hideLoading();
			$("#forgetAccBtn").attr("href",clickAttr);
			$("#forgetAccBtn").removeClass("btn_grey");
		}
	});    
}

function forgetPassword(){
	if(!validateForgetPass()){
		return ;
	}
	var accountNo=$("#account_no").val();
	var email=$("#email_input").val();
	var accountType=$("#forgetPassAcountType").val();
	//for ie8
	accountType  = typeof accountType == "object"? accountType[0]: accountType;
	accountType=$.trim(accountType);
	var clickAttr=$("#forgetPassBtn").attr("href");
	$("#forgetPassBtn").removeAttr("href");
	$("#forgetPassBtn").addClass("btn_grey");
	$.ajax({
		type : "POST",
		dataType : "json",			
		data:{'accountNo':accountNo,'accountType':accountType,'email':email},				
		url : "forgetPassword.sc" ,
		beforeSend:function(xhr){
			top.$.fancybox.showLoading();
		},
		success : function(msg) {				
		   var result=msg.response.result;
		   if(result=="success"){
			   var message=$("#emailSendMessage").val();
			   showForgetPasswordMessage(message);
		   }else{
			   if(msg.response.errorType=="illegal"){
				   var message=msg.response.message;
				   showForgetPasswordMessage(message);
			   }
			   if(msg.response.errorType=="empty"){
			   }
		   }
		},
		complete:function(xhr, TS){
			top.$.fancybox.hideLoading();
			$("#forgetPassBtn").attr("href",clickAttr);
			$("#forgetPassBtn").removeClass("btn_grey");
		}
	});    
}

function showForgetPasswordMessage(messsage){
	$("#forgetPassword-alert").find("ul").empty();
	$("#forgetPassword-alert").find("ul").append("<li>"+messsage+"</li>");
	$("#forgetPassword-alert").show();
}

function showForgetAccountMessage(messsage){
	$("#forgetAccount-alert").find("ul").empty();
	$("#forgetAccount-alert").find("ul").append("<li>"+messsage+"</li>");
	$("#forgetAccount-alert").show();
}


function validateForgetPass(){
	var accountNo=$("#account_no").val();
	var email=$("#email_input").val();
	$("#forgetPassword-alert").find("ul").empty();
	if(accountNo==""){
		var val=$("#accountErrorMessage").val();
		$("#forgetPassword-alert").find("ul").append("<li>"+val+"</li>");
		$("#account_no").parent("div").addClass("has-error");
	}
	if(email==""){
		var val=$("#emailErrorMessage").val();
		$("#forgetPassword-alert").find("ul").append("<li>"+val+"</li>");
		$("#email_input").parent("div").addClass("has-error");
	}
	if(accountNo==""||email==""){
		$("#forgetPassword-alert").show();
		return false;
	}
	var emailReg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(!emailReg.test(email)){
		var val=$("#formatEmailErrorMessage").val();
		$("#forgetPassword-alert").find("ul").append("<li>"+val+"</li>");
		$("#email_input").parent("div").addClass("has-error");
		$("#forgetPassword-alert").show();
		return false;
	}
	return true;
}

function validateForgetAccount(){
	var email=$("#account_email_input").val();
	$("#forgetAccount-alert").find("ul").empty();
	
	if(email==""){
		var val=$("#emailErrorMessage").val();
		$("#forgetAccount-alert").find("ul").append("<li>"+val+"</li>");
		$("#account_email_input").parent("div").addClass("has-error");
		$("#forgetAccount-alert").show();
		return false;
	}
	var emailReg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(!emailReg.test(email)){
		var val=$("#formatEmailErrorMessage").val();
		$("#forgetAccount-alert").find("ul").append("<li>"+val+"</li>");
		$("#account_email_input").parent("div").addClass("has-error");
		$("#forgetAccount-alert").show();
		return false;
	}
	return true;
}

function autodisplay(value){
	var accountPlaceholder = $("#accountPlaceholder").val();
	var usernamePlaceholder = $("#usernamePlaceholder").val();
	var placeholder = "";
	$("#loginInfo").show();
	$("#wttBtn").hide();
	$("#wtt_msg").hide();
	$("#wttdesc").show();
	
	if(value=="30"||value=="40"){
		$("#myAccount").hide();
		$("#eCSUsername").show();
		$("#rememberMeUsername").show();
		$("#rememberMeAccount").hide();
		placeholder = usernamePlaceholder;	
	}else if(value!="WTT"){
		$("#myAccount").show();
		$("#eCSUsername").hide();
		$("#rememberMeUsername").hide();
		$("#rememberMeAccount").show();
		placeholder = accountPlaceholder;	
	}else if(value=="WTT"){
			$("#loginInfo").hide();
			$("#wttBtn").show();
			$("#wtt_msg").show();
			$("#wttdesc").hide();
	}
	$("#username").attr("placeholder",placeholder);

}

function closepup(){
	$.fancybox.close();
}

</script>
	
	
	
    
    
    
    
    <!--  -->
    
<style>
	.fancybox-inner {
      background-color: #FFF;
	  overflow:hidden !important;
    }
</style>

<style type="text/css">.fancybox-margin{margin-right:17px;}</style></head>
<!-- typetype  -->
<body class="login" style="width: 898px;margin: auto;">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THL238M9"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<style type='text/css'>
	.embeddedServiceHelpButton {
		position:relative !important;
		z-index: -10;
	}
	.embeddedServiceHelpButton .helpButton {
    	position:relative !important;
    	
		bottom: 205px !important;
		
    	/*left: 76.5%;*/
    	margin-left: 113.5%;
	}
	.embeddedServiceSidebarMinimizedDefaultUI {
		position: relative !important;
		
		bottom: 205px !important;
		
    	/*left: 76.5%;*/
    	margin-left: 113.5%;
    	min-width: auto;
    	width: 161px;
    	border: none !important;
	}
	
	@media (max-width: 768px) {
	.embeddedServiceHelpButton .helpButton {
    	position:relative !important;
    	
		bottom: 18px !important;
		
    	/*left: 76.5%;*/
    	margin-left: 30%;
	}
	
	.embeddedServiceSidebarMinimizedDefaultUI {
		position: relative !important;
		
		bottom: 18px !important;
		
    	/*left: 76.5%;*/
    	margin-left: 30%;
    	min-width: auto;
    	width: 161px;
    	border: none !important;
	}
	}
	.embeddedServiceHelpButton .helpButton .uiButton {
		background-color: #0e3d6a;
		font-weight: bold;
		font-size: 12px;
		box-shadow: none !important;
		width: 18em;
		border: none !important;
	}

	.embeddedServiceHelpButton .helpButton .uiButton:focus {
		outline: none;
		border: none !important;
	}

	.message {
		margin: 0px;
		padding: 0px;
		color: #ffffff;
		background-color: transparent;
		border-width: 0px;
		text-decoration: none !important;
		font-weight: normal !important;
	}
	
	
	
	.embeddedServiceSidebar.modalContainer {
		position: relative !important;
	}
	@media (max-width: 767px) {
		.embeddedServiceSidebar.sidebarMinimized {
			top: auto !important;
			left: 40%;
		}
		
		.embeddedServiceSidebar.modalContainer {
			position: absolute !important;
			
		}
		
		
		.embeddedServiceSidebar.layout-docked .dockableContainer, .embeddedServiceSidebar.layout-float .dockableContainer {
			height: calc(100% - 20%) !important;
			position: unset !important;
		}
	}
	
	.embeddedServiceSidebar.layout-docked .dockableContainer {
		/*position: relative !important;*/
		/*left: 76.5% !important;*/
		/*right: calc(4.6%);*/
		margin-left: 113.5%;
		/*bottom: 510px !important;*/
	}
	
	.embeddedServiceHelpButton .helpButton :hover{
    	background-color: #ff7a36 !important;
	}
    .embeddedServiceHelpButton .helpButton .helpButtonEnabled:hover::before {
    	background-color: #ff7a36 !important;
    }
    
	/*.embeddedServiceHelpButton .helpButton :focus{
    	background-color: #ff7a36;
	}*/
	
	
	
	.embeddedServiceHelpButton .uiButton .helpButtonLabel .message {
		font-weight: normal;
	}
	.embeddedServiceSidebarMinimizedDefaultUI .minimizedText>.message {
		text-decoration: none !important;
	}
	
	.embeddedServiceSidebarMinimizedDefaultUI :hover {
    	background-color: #ff7a36 !important;
    	
	}
    

    .embeddedServiceSidebarMinimizedDefaultUI.minimizedContainer:hover{
    	border: none !important;
        background-color: #ff7a36 !important;
        border-color:  #ff7a36 !important;
    }
    
    .embeddedServiceSidebarButton:not(:disabled):hover {
		background-color: #0e3d6a !important;
	}
	.embeddedServiceSidebarButton:not(:disabled):hover span{
    	color:#fff;
	}
	.embeddedServiceSidebarButton:focus {
        text-decoration: none !important;
    }
    .helpButtonLabel{
    	text-decoration: none !important;
    }
    .embeddedServiceSidebarMinimizedDefaultUI{
        text-decoration: none !important;
    }
</style>

<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>
	function isIE(){
	 	if (document.all) return true; 
	 	if (!!window.ActiveXObject || "ActiveXObject" in window) return true; 
	 	if (window.navigator && window.navigator.msSaveOrOpenBlob) return true; 
	}

	function isPC(){
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		var flag=true;

		for(var v=0; v<Agents.length; v++){
			if(userAgentInfo.indexOf(Agents[v])>0){
				flag = false;
				break;
			}

		}
		return flag;
	}

	var initESW = function (gslbBaseURL, config) {
		embedded_svc.settings.displayHelpButton = true; //Or false

		// 顯示語言 en-US = 英文 zh-TW = 繁體中文
		embedded_svc.settings.language = config.language; //For example, enter 'en' or 'en-US'

		// 按扭顯示在線的文字
		embedded_svc.settings.defaultMinimizedText = config.online; //(Defaults to Chat with an Expert)

		// 按扭顯離線的文字
		embedded_svc.settings.disabledMinimizedText = config.offline; //(Defaults to Agent Offline)

		embedded_svc.settings.loadingText = config.loadingText; //(Defaults to Loading)
		//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

		// Settings for Chat
		embedded_svc.settings.directToButtonRouting = function (prechatFormData) {
			// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
			// Returns a valid button ID.
		};

		// 如果登入了，請放參數，如果沒有登入，則刪除參數
		embedded_svc.settings.prepopulatedPrechatFields = {
			FirstName: "", // 名字
			LastName: "", // 姓氏
			PPSOrAccountNo__c: "" // PPS No
		};

		//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
		//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';
		embedded_svc.settings.extraPrechatInfo = [{
			"entityFieldMaps": [{
				"doCreate": false,
				"doFind": true,
				"fieldName": "PPSOrAccountNo__c",
				"isExactMatch": true,
				"label": config.accountNoLabel
			}],
			"entityName": "Case"
		}, {
			"entityFieldMaps": [{
				"doCreate": false,
				"doFind": true,
				"fieldName": "FirstName",
				"isExactMatch": true,
				"label": config.firstNameLabel
			}, {
				"doCreate": false,
				"doFind": true,
				"fieldName": "LastName",
				"isExactMatch": true,
				"label": config.lastNameLabel
			}],
			"entityName": "Contact"
		}];

		embedded_svc.settings.extraPrechatFormDetails = [
			{ "label": config.accountNoLabel, "transcriptFields": ["PPSOrAccountNo__c"] },
			{ "label": config.firstNameLabel, "transcriptFields": ["PreChatFirstName__c"] },
			{ "label": config.lastNameLabel, "transcriptFields": ["PreChatLastName__c"] }
		];
		embedded_svc.settings.prechatBackgroundImgURL = "./myaccount/res/images/live_chat/Waiting_State_Background.jpg";
		embedded_svc.settings.avatarImgURL = "./myaccount/res/images/live_chat/Agent_Avatar.png";
		embedded_svc.settings.smallCompanyLogoImgURL = "./myaccount/res/images/live_chat/chat.png";

		embedded_svc.init(
			'https://hkbn.my.salesforce.com',
			'https://hkbnes.force.com/survey',
			gslbBaseURL,
			'00D7F000007BSmh',
			'ChatGroup',
			{
				baseLiveAgentContentURL: 'https://c.la1-c1-hnd.salesforceliveagent.com/content',
				deploymentId: '5727F000000HGqQ',
				// 按扭的 ID，必需按 config 裏的 chatButtonId 輸入，不同語言對應相關的 Id
				buttonId: config.chatButtonId,
				baseLiveAgentURL: 'https://d.la1-c1-hnd.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'ChatGroup',
				isOfflineSupportEnabled: false
			}
		);
	};

	// 繁體中文參數
	var config = {
		//language: 'zh-TW',
		language: 'zh_TW',
		online: '尋求幫助',
		offline: '離線',
		chatButtonId: '5737F000000HCqZ',
		accountNoLabel: '賬戶號碼/賬戶名稱',
		firstNameLabel: '名字',
		lastNameLabel: '姓氏',
		loadingText: '連線中'
	};
	
	var sysLang="e";
	if(sysLang == "e"){
		config = {
			//language: 'en-US',
		    	language: 'en_US',
			online: 'Online Chat*',
			offline: 'Online Chat* (Offline)',
			chatButtonId: '5737F000000HCqa',
			accountNoLabel: 'Account No./ User Name',
			firstNameLabel: 'First Name',
			lastNameLabel: 'Last Name',
			loadingText: 'Connecting'
		};
	}
	
	var checkIE = isIE();
	//var checkPC = isPC();
	//console.log("checkIE: " + checkIE + ", checkPC: " + checkPC);
	/*
	if(!checkIE ){

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://hkbn.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function () {
			initESW(null, config);
		};
		document.body.appendChild(s);
	}
	else {
		initESW('https://service.force.com', config);
	}
	
	}*/
</script>


<!-- iswtt:  -->
<!-- null -->
	<!-- Loading script asynchronously -->


    <div id="main" class="pos_relative">
    	<div class="header">
        	<div id="logo"><img src="./myaccount/res/images/login/logo.jpg"></div>
    
            <div id="language" class="pos_absolute">
                <span id="language_button" class="text_button">
                    <a href="/myaccount/login.sc?lang=c" class="blue">中文</a>
                </span>
            </div>
            
            <div class="login_tools">
				
					
						<a href="https://www.hkbnes.com/web/contact-us/?utm_campaign=contact_us&utm_source=myaccount_landing&utm_medium=referral" target="_blank" class="text_button">
							<div class="login_tool"><img src="./myaccount/res/images/login/icon_contact.jpg">Contact Us</div>
						</a>
						<!--  
                		<a href="http://hkbnes.net/en/support/network-coverage.shtml?utm_campaign=coverage_check&utm_source=myaccount_landing&utm_medium=referral" class="text_button">
                			<div class="login_tool"><img src="../res/images/login/icon_coverage.jpg">COVERAGE CHECK</div>
                		</a>
                		-->
                		<a href="https://www.hkbnes.com/web/download-faq/?utm_campaign=support&utm_source=myaccount_landing&utm_medium=referral" class="text_button">
                			<div class="login_tool"><img src="./myaccount/res/images/login/icon_support.jpg">SUPPORT</div>
                		</a>
					
					
				
            </div>
        </div>
        
        <div class="main_content pos_relative">
        	<div class="login_banner_container">
        		
        		<div class="login_banner_4 login_banner">
            	
					
						<a href="https://www.hkbnes.com/web/sme/promotions/2409-2500m-lenovo/?utm_medium=display&utm_source=myaccount-landing&utm_campaign=es-pro-ec-2409-2500m-lenovo" target="_blank">
						<img  src="./myaccount/res/images/upload/ES_MyAccount_Homebanner4_EN.jpg">
						</a>
						
					
					
				
            	</div>
              <!--	  
            	<div class="login_banner_1 login_banner">
            	
					
					<a href="https://www.hkbnes.net/web/en/promotions/details/2205-is-esxsangfortotalprotectsolutions?utm_medium=display&utm_source=myaccount_banner_en&utm_campaign=es-pro-ec-2205-is-esxsangfortotalprotectsolutions" target="_blank">
						<img  src="./myaccount/res/images/upload/ES_MyAccount_Homebanner1_EN.jpg">
					</a>
					  
					
					
				
            	</div>
            	-->
            	<!-- 
            	<div class="login_banner_2 login_banner">
            	
					
					<a href="https://www.hkbnes.net/form/handset-en.jsp" target="_blank">
						<img  src="./myaccount/res/images/upload/ES_MyAccount_Homebanner2_EN.jpg">
					</a>
					  
					
					
				
            	
            	</div>
            	-->
            	<!--  div class="login_banner_3 login_banner">
            	
					
					
						<img usemap="#planetmap3" src="./myaccount/res/images/upload/ES_MyAccount_Homebanner3_EN.jpg">
					
					  
					<map name="planetmap3" id="planetmap3">
					    	
						<area shape="rect" coords="230,66,375,116" target="_blank" href="https://www.hkbnes.net/form/handset-en.jsp">
						<area shape="rect" coords="230,122,375,169" target="_blank" href="https://www.hkbnes.net/web/en/other/iphone-se">
					</map>
					
						
					
					
				
            	
            	</div -->
            	<!--  
            	<div class="login_banner_5 login_banner">
            	
					
						<a href="https://www.hkbnes.com/web/solutions/cybersecurity/aegisconnect/?utm_medium=display&utm_source=myaccount_login_banner&utm_campaign=es-pro-ec-2308-aegisconnect" target="_blank">
						<img  src="./myaccount/res/images/upload/ES_MyAccount_Homebanner5_EN.jpg">
						</a>
						
					
					
				
            	</div>
            	-->
                <div id="login_banner_dot_container"></div>
            </div>
        	
        	<div class="my_account_form">
        		<div class="my_account_form_title">
                	<img src="./myaccount/res/images/login/myaccount.png" />
                    <div class="my_account_subtitle">Manage your account with ease</div>
                    
                    <div class="my_account_more my_account_icons">
                    	<a href="#more_function_popup" id="more_function_popup_link" class="fancybox_more">
                    		
							<img src="./myaccount/res/images/login/myacc_more_en.png" />
							
							
                    	</a>
                    </div>
                        <div class="my_account_icon my_account_icons">
                            <img src="./myaccount/res/images/login/myacc_icon_account.png" />
                            <br />Account<br />management
                        </div>
                        <div class="my_account_icon my_account_icons">
                            <img src="./myaccount/res/images/login/myacc_icon_service.png" />
                            <br />Service<br />overview
                        </div>
                        <div class="my_account_icon my_account_icons">
                            <img src="./myaccount/res/images/login/myacc_icon_renew.png" />
                            <br />Renew<br />contract
                        </div>
                        <div class="my_account_icon my_account_icons">
                            <img src="./myaccount/res/images/login/myacc_icon_download.png" />
                            <br />Download<br />e-statement
                        </div>
                    
                    <div class="clear_both"></div>
                </div>
        		
                <div class="my_account_form_content">
                    <form id="loginform" name="loginform" class="loginform" action="j_spring_security_check" method="post" autocomplete="off">
                    

                    	<div class="input_title" id="wttdesc">If you are a customer of former WTT, please select "HKBN Enterprise Solutions HK Limited".</div>
                        <div class="input_title"><br>Account Type :</div>
                        
                        
                        
                        	<select id="account_type" name="account_type" type="text" value="" autocomplete="off" tabindex="4" class="has_selected" onchange="autodisplay(this.value);">
									<option value="10"  >Business Line/Broadband Services</option>
									<option value="20"  >IDD Services</option>
									<option value="30"  onclick="">eCS/ManagedBiz</option>
									<option value="WTT">HKBN Enterprise Solutions HK Limited </option>
	                        </select>
                        
                        
                        
								
									<a href="./myaccount/res/doc/Login_Guideline.pdf" target="_blank" class="orangle_link text_button fancybox_account fancybox two_line">
									Login Guideline</a>
								  
								
							 
                        
                        <div class="clear_both login_space"></div>
                        <div id="loginInfo">
						<div class="input_title" id="myAccount">
							
								  
								
									Account No. (<span style="color:#f37022;">9-digits Account Number</span>):
					   			
							 
						
						
						</div>
						<div class="input_title" id="eCSUsername" style="display: none;">User Name : (<span style="color:#f37022;">For 13-digit Account</span>):</div>
                        <div class="">
                        
                        
                        	
								  
								
									<input type="hidden" id="accountPlaceholder" value="HKBN Account No. ">
					   			
							 
                        	
                        	
							<input type="hidden" id="usernamePlaceholder" value="eCS Username. ">
							
							
							
							
								  
								
									<input id="username" name="username" type="text" value="" maxlength="80" autocomplete="off" tabindex="1" class="text-entry form-control" placeholder="HKBN Account No." style="height: 25px">
					   			
							 
							
							
							
                         </div>
                         
                         
                         
	                         
									
										<a href="#forget_account_menu" class="orangle_link text_button fancybox_account fancybox">
										<span id="forgotAccount">Forgot Account No. / Username</span>
	                         			</a>
									  
									
							  
						 
						 
						 
                         <div class="clear_both"></div>
                         
                         <div class="login_remember_container">
                         	<div class="login_remember_container_inside">
                                 <label for="remember" id="remember-label">
                                    <input tabindex="2" type="radio" name="remember" id="remember" checked="checked" value="true" style="vertical-align: middle; width: 18px; height: 18px" tabindex="4" autocomplete="off">
                                    <span id="rememberMeAccount">
                                    
                                    
										  
										
											Remember Account No.
							   			
									 
                                    
                                    </span>
                                    <span id="rememberMeUsername" style="display: none;">Remember Username</span>
                                 </label>
                             </div>
                         </div>
                          
                         <div class="clear_both login_space_small"></div>
                         
						<div class="input_title">Password :</div>
                         <div class="">
                          	<input id="password" name="password" type="password" tabindex="3" class="text-entry form-control" autocomplete="off" value="" placeholder="Password" style="height: 25px">
                         </div>
                         	
                         	
                         	
                         	
                         	
										  
										
											
												
													
														<a href="#forget_pwd_menu" class="orangle_link text_button fancybox_pw fancybox two_line">Forgot Password</a>
													  
													
												
											
							   			
									 
                         	
                         	
                         
                         	
                         
                         
                         
                         <div id="divSecCode" style="display: none">
                         
                         		<div class="clear_both login_space"></div>
                         
                                <div class="input_title">Verification Code :</div>
                                <input id="secCode" name="secCode" type="text" value="" autocomplete="off" tabindex="5" class="text-entry">
                                <a id="btnSendCode" href="javascript:sendMessage();" class="orangle_link text_button one_line">Obtain Code</a>
                         </div>
                         
                         <div class="clear_both login_space"></div>
                         <!--  
                         <a href="/myaccount/backToLoginSelection.sc" class="btn" id="submitBtn" tabindex="6" style="padding-top: 1px;width:100px !important;">
                           	 Back
                          </a>
                          -->
                         <a href="javascript:submitLogin();" class="btn" id="submitBtn" tabindex="6" style="padding-top: 1px;">
                             Login
                          </a>
        				</div>
        				<span id="wtt_msg" style="display: none">HKBN Enterprise Solutions HK Limited (formerly known as WTT) User<br></span>
        				
        				
        				
        				
        				<table id="wttBtn" style="display: none">
							<tr><td width="150" height="120" align="center" valign="middle">
							<table  width="90%" height="90%">
							<tr><td  onmouseover="setBgcolor('td1','#003865','res/images/login_w.png');" onmouseout="setBgcolor('td1','#ffffff','res/images/login.png');" bgcolor="#ff9030" align="center" valign="middle">
							
							<a style="text-decoration: none" href="https://esservice.hkbnes.net/esvcWeb/#/login" target="_blank">
							<img width="50" id="td1_ico" src="res/images/login.png"><br><font id="td1" style="font-weight:bolder;" color="#ffffff"><b>Customer Login</b></font>
							</a>
							
							</td></tr>
							</table>
							</td>
							<td width="150" height="120" align="center" valign="middle">
							<table width="90%" height="90%">
							<tr><td  onmouseover="setBgcolor('td4','#003865','res/images/fault_w.png')" onmouseout="setBgcolor('td4','#ffffff','res/images/fault.png');" bgcolor="#ff9030" align="center" valign="middle">
							
							<a style="text-decoration: none" href="https://esservice.hkbnes.net/esvcWeb/#/online-fault-public/register" target="_blank">
							<img width="50" id="td4_ico" src="res/images/fault.png"><br><font id="td4" style="font-weight:bolder;" color="#ffffff">Online Fault Reporting</font>
							</a>
							
							</td></tr>
							</table>
							<!--  
							<table  width="90%" height="90%">
							<tr><td  onmouseover="setBgcolor('td3','#003865','res/images/download_w.png');" onmouseout="setBgcolor('td3','#ffffff','res/images/download.png');" bgcolor="#ff9030" align="center" valign="middle">
							
								
									<a style="text-decoration: none" href="login.sc?lang=e&accountType=40" target="_blank">
								  
								
							
							
							
							<img width="50" id="td3_ico" src="res/images/download.png"><br><font id="td3" style="font-weight:bolder;" color="#ffffff">Online Renewal</font>
							</a>
							
							</td></tr>
							</table>
							-->
							
							
							</td></tr>
							<tr><td width="150" height="120" align="center" valign="middle">
							
							<!--  
							<table  width="90%" height="90%">
							<tr><td  onmouseover="setBgcolor('td2','#003865','res/images/onlinechat_w.png');" onmouseout="setBgcolor('td2','#ffffff','res/images/onlinechat.png');" bgcolor="#ff9030" align="center" valign="middle">
							
							<a style="text-decoration: none" href="https://esservice.hkbnes.net/esvcWeb/#/online-chat-public/login-chat" target="_blank">
							<img width="50" id="td2_ico" src="res/images/onlinechat.png"><br><font id="td2" style="font-weight:bolder;" color="#ffffff">Online Chat*</font>
							</a>
							
							
							</td></tr>
							</table>
							-->
							
							
							
							</td><td width="150" height="120" align="center" valign="middle">
							
							</td></tr>
							<!--  
							<tr><td colspan="2">*Service Hours 09:00 - 21:00</td></tr>
							-->
							</table>
							
							
							<script>
								function setBgcolor(ob,c,ico){
									$("#"+ob).css("color",c);
									$("#"+ob+"_ico")[0].src=ico;
								}
							</script>
           
                         
                         
                         
                    <input type="hidden" name="_csrf" value="c6e705d8-25f8-4e08-93c9-1a27ae0ab88e" />
</form>
                </div>
            </div>
        </div>
        
        <div class="important_notice"><b><font color="#0e3d6a" style="font-weight:bold;">Important Notice: </font></b>Please beware of any suspicious telephone call voice messages, websites or emails that seek to solicit personal information from you. HKBN does not make requests for personal data via interactive voice response system or third-party websites. Please exercise caution when you encounter suspicious email addresses and web domains, and contact us whenever such circumstances arise.</div>
        
        <div class="footer">
        	<div class="copyright">HKBN Enterprise Solutions is the brand / trading name of HKBN Enterprise Solutions Limited and/or HKBN Enterprise Solutions HK Limited<br>© HKBN Enterprise Solutions <script type="text/javascript">document.write(new Date().getFullYear());</script>. All Rights Reserved.</div>
        	
			
	            <div class="footer_link"><a href="https://www.hkbnes.com/web/personal-data-privacy-policy-statement/">Personal Data & Privacy Statement</a></div>
	            <div class="footer_link vert_line">|</div>
	            <div class="footer_link"><a href="https://www.hkbnes.com/web/disclaimer/">Disclaimers</a></div>
	            <div class="footer_link vert_line">|</div>
	            <div class="footer_link"><a href="https://www.hkbnes.com/web/terms-conditions">Legal Terms & Conditions</a></div>
	            <br>
	            <div class="footer_link"><a href="https://www.hkbnes.com/web/personal-data-collection-statement/">Personal Data Collection Statement</a></div>
	            <div class="footer_link vert_line">|</div>
	            <div class="footer_link"><a href="https://www.hkbnes.com/web/contact-us/?utm_campaign=contact_us&utm_source=myaccount_landing&utm_medium=referral">Contact Us</a></div>
            
            
            
        </div>
    </div>
    
<!-- Reset account menu Div Begin -->
	<div id="forget_account_menu" class="iframe_box" style="display: none; width:430px; ">
	   <div style=" margin:10px 12px;">
	     <table width="400" border="0" cellspacing="0" cellpadding="0" style="">
	       <tbody><tr>
	         <td colspan="3" class="balance">
	         <div class="iframe_title">Forgot Account No. / Username
	         </div></td>
	       </tr>
	       <tr>
           		<td height="55">&nbsp;</td> 
           </tr>
	       <tr>
	         <td height="140" style="vertical-align:top!important">
	         <div style="height:41px;margin-bottom:20px">
         		<a href="#forget_account" class="fancybox">
        			<div style="float:left;" class="renew_button nwt_large_button">MyAccount<br>(9-digit Account No.)</div>
         		</a>
         		<a href="https://ecsuat.hkbnes.net/ecs.registration/forgetpassword.html?siteLang=en">
					<div style="float:right;" class="renew_button nwt_large_button">eCS/ManagedBiz<br>(13-digit Account No.)</div>
				</a>
		     </div>
	         Should you have any queries, please contact your designated Account Manager or HKBN Enterprise Solutions Service Hotline on 128 180.
	         </td>
	         
	       </tr>
	     </tbody></table>
	      
	   </div>
	
	</div> 
	<!-- Reset account menu Div End -->

	<!-- Reset account Div Begin -->
	<div id="forget_account" class="iframe_box" style="display: none; width:400px; ">
    <form id="forgetLoginId" name="forgetLoginId" action="#" method="post">
    <div style=" margin:10px 12px;">
      <table width="370" border="0" cellspacing="0" cellpadding="0" style="">
        <tbody><tr>
          <td colspan="3" class="balance">
          <div class="iframe_title">Forgot Account No. / Username
          </div></td>
        </tr>
        <tr>
          <td colspan="3">Please enter the following account information (it should match with company records)</td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="iframe_field">Registered Email Address:</div>
            <div class="">
            	<input id="account_email_input" class="form-control" type="email" name="email_input" value="" style="width:70%;">
            </div>
          </td>
        </tr>
        <tr>
        	<td>
        		<div class="iframe_field">Account Type : </div>
	        	<select id="forgetAcountType" name="account_type" type="text" style="width:70%;">
						<option value="10">Business Line/Broadband Services</option>
						<option value="20">IDD Services</option>
				</select>
        	</td>
        </tr>
        <tr>
        <td height="20">
        	<div id="forgetAccount-alert" class="alert alert-danger alert-dismissable" style="width: 90%;display: none">
			     <a class="close warn-close">×</a>
				       <ul>
				       </ul>
			 </div>
        </td>
        </tr>
        <tr>
          <td colspan="3" align="right" style="text-align:right;"><a href="javascript:forgetAccount()" class="btn" id="forgetAccBtn">Submit</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="closepup();" class="btn_grey">Cancel</a></td>
          </tr>
      </tbody></table>
      
    </div>
<input type="hidden" name="_csrf" value="c6e705d8-25f8-4e08-93c9-1a27ae0ab88e" />
</form>
</div> 
	<!-- Reset account Div End -->
	

	<!-- Reset password menu Div Begin -->
	<div id="forget_pwd_menu" class="iframe_box" style="width: 430px; display: none;">
    <div style=" margin:10px 12px;">
      <table width="400" border="0" cellspacing="0" cellpadding="0" style="">
        <tbody><tr>
          <td colspan="3" class="balance">
          <div class="iframe_title">Forgot Password
          </div></td>
        </tr>
        <tr>
        <td height="55">&nbsp;</td> 
        </tr>
        <tr>
          <td height="140" style="vertical-align:top!important">
          	<div style="height:41px;margin-bottom:20px">
		    	<a href="#forget_pwd_step1" class="fancybox">
		    		<div style="float:left;" class="renew_button nwt_large_button">MyAccount<br>(9-digit Account No.)</div>
		        </a>
		        <a href="https://ecsuat.hkbnes.net/ecs.registration/forgetpassword.html?siteLang=en">
				<div style="float:right;" class="renew_button nwt_large_button">eCS/ManagedBiz<br>(13-digit Account No.)</div>
				</a>
		     </div>
          	 Should you have any queries, please contact your designated Account Manager or HKBN Enterprise Solutions Service Hotline on 128 180.
          </td>
        </tr>
      </tbody></table>
      
    </div>
</div>
	<!-- Reset password menu Div End -->
	
	<!-- Reset password Div Begin -->
	<div id="forget_pwd_step1" class="iframe_box" style="width: 400px; display: none;">
   <form id="forgetPwd" name="forgetPwd" action="#" method="post">
    <div style=" margin:10px 12px;">
      <table width="370" border="0" cellspacing="0" cellpadding="0" style="">
        <tbody><tr>
          <td colspan="3" class="balance">
          <div class="iframe_title">Forgot Password
          </div></td>
        </tr>
        <tr>
          <td colspan="3">Please enter the following account information (it should match with company records)</td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="iframe_field">Account No.</div>
            <div class="">
            <input id="account_no" class="form-control" type="text" maxlength="9" name="account_no" value="" style="width:70%;">
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="iframe_field">Registered Email Address: </div>
            <div class="">
            	<input id="email_input" class="form-control" type="text" name="email_input" value="" style="width:70%;">
            </div>
          </td>
        </tr>
        <tr>
        	<td colspan="3">
        		<div class="iframe_field">Account Type : </div>
	        	<select id="forgetPassAcountType" name="account_type" type="text" style="width:70%;">
						<option value="10">Business Line/Broadband Services</option>
						<option value="20">IDD Services</option>
				</select>
			</td>
        </tr>
        <tr>
        <td height="20">
        	 <input id="accoutEmailSendMasssage" type="hidden" value="Account number will be sent to your correspondence email address.">
             <input id="accountErrorMessage" type="hidden" value="Sorry, please input Account No.">
             <input id="emailErrorMessage" type="hidden" value="Sorry, please input Registered Email Address">
             <input id="formatEmailErrorMessage" type="hidden" value="The format of the e-mail address is incorrect. Please enter again. ">
             <input id="emailSendMessage" type="hidden" value="Change password email has been sent to your correspondence email address, please follow the instruction stated in the email to reset password.">

        	<div id="forgetPassword-alert" class="alert alert-danger alert-dismissable" style="width: 90%;display: none">
			      <a class="close warn-close">×</a>
				       <ul>
				       </ul>
			 </div>
        </td>
        </tr>
        <tr>
          <td colspan="3" align="right" style="text-align:right;"><a href="javascript:forgetPassword()" class="btn" id="forgetPassBtn">Submit</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="closepup();" class="btn_grey">Cancel</a></td>
          </tr>
      </tbody></table>
      
    </div>
<input type="hidden" name="_csrf" value="c6e705d8-25f8-4e08-93c9-1a27ae0ab88e" />
</form> 
    
</div>
	<!-- Reset password Div End -->

<!-- More Function -->

<div id="more_function_popup" class="iframe_box" style="display: none; width:780px; overflow:hidden;">
	<div class="popup_blue_title"><img src="./myaccount/res/images/login/myaccount.png" /></div>	
    
    <div class="more_function_boxs">
    	<div class="more_function_box">
        
        </div>
    	<div class="more_function_box">
            	<div>
                    <div class="more_function_box_icon"><img src="./myaccount/res/images/login/more_func_icon_renew.png" /></div>
                    Renew contract
                </div>
        </div>
    	<div class="more_function_box">
        
        </div>
    	<div class="more_function_box">
            	<div>
                    <div class="more_function_box_icon"><img src="./myaccount/res/images/login/more_func_icon_info.png" /></div>
                    Amend and check <br />account information
                </div>
        </div>
    	<div class="more_function_box">
            	<div>
                    <div class="more_function_box_icon"><img src="./myaccount/res/images/login/more_func_icon_estatement.png" /></div>
                   Check and download <br />e-statement from <br />previous 12 months
                </div>
        </div>
    	<div class="more_function_box">
            	<div>
                    <div class="more_function_box_icon"><img src="./myaccount/res/images/login/more_func_icon_payment.png" /></div>
                    Check previous 3 months <br />payment history <br />and account balance
                </div>
        </div>
    	<div class="more_function_box">
            	<div>
                    <div class="more_function_box_icon"><img src="./myaccount/res/images/login/more_func_icon_plan.png" /></div>
                    Check service <br />plan details 
                </div>
        </div>
    	<div class="more_function_box">
            	<div>
                    <div class="more_function_box_icon"><img src="./myaccount/res/images/login/more_func_icon_forms.png" /></div>
                    Download user <br />guides and forms
                </div>
        </div>
    	<div class="more_function_box">
            	<div>
                    <div class="more_function_box_icon"><img src="./myaccount/res/images/login/more_func_icon_idd.png" /></div>
                    Check IDD monthly <br />plan usage <br />and country rate
                </div>
        </div>
    
    </div>
    <div class="line_space"></div>
    <div class="line_space"></div>
</div>

<!-- More Function Div End -->

<style>
	.st_info{
		position: relative;
		/*left:76.5%;*/
		margin-left: 112.5%;
		white-space: nowrap;
		bottom: 130px !important;
		font-size:12px;
	}
@media (max-width: 768px) {
	.st_info{
		position: relative;
		/*left:76.5%;*/
		margin-left: 30%;
		bottom: -61px !important;
		font-size:12px;
	}
}
</style>
		
<script type="text/javascript">

if(checkIE){
	document.getElementById("servTimeInfo").style.display="none";
}
</script>
<!-- Popup for migrated account -->
<!-- loginMigrationFlag:  -->


<!-- Popup for migrated account -->

<br/><br/><br/><br/>
<h2>DEVMIAW Demo</h2>
<br/>
<fieldset>
    <legend>Is Login:</legend>
    <label for="isLoginSelect">Select Login Option:</label>
    <select id="isLoginSelect" name="isLogin" onchange="getIsAllowEdit()">
        <option value="true">True</option>
        <option value="false" selected>False</option>
    </select>
	<br/>
    <label for="languageSelect">Select Language:</label>
    <select id="languageSelect" name="isLogin" onchange="getLanguage()">
        <option value="en_US">English</option>
        <option value="tw" selected>Chinese</option>
    </select>
	<br/>
	<label for="isWithinBusinessHourSelect">Is Business Hour:</label>
    <select id="isWithinBusinessHourSelect" name="isBusinessHour" onchange="getIsBusinessHour()">
        <option value="true" selected>True</option>
        <option value="false">False</option>
    </select>
	<br/>
	<button id="checkAgentStatusButton" onclick="getAgentStatus()">Check Agent Status</button>
</fieldset>
<br/>

<fieldset>
    <legend>User Information:</legend>
    <label for="fnameInput">First name:</label>
    <input type="text" id="fnameInput" name="fnameInput" value="Holly"><br><br>
    <label for="lnameInput">Last name:</label>
    <input type="text" id="lnameInput" name="lnameInput" value="Wong"><br><br>
	<label for="AccNoInput">Account No./ User Name:</label>
    <input type="text" id="AccNoInput" name="AccNoInput" value="025114205"><br><br>
</fieldset>

<div id="chatButtonLegend">
	<div id="chatButton" onclick="handleChatClick()">
		<div onclick="handleChatClick()">
			<span id="chatStatus">Online Chat*</span>
		</div>
	</div>
		<div id="chatButtonAdditionalText" class="st_info">Service hours: 0900-2100<br>Or <a href="https://www.hkbnes.net/web/en/support/contact-us?utm_campaign=contact_us&utm_source=myaccount_landing&utm_medium=referral" target="_blank">click here</a> to contact us</div>
</div>

<style type='text/css'>
	.embeddedMessagingConversationButton {
		background-color: #F36F21;
		font-family: "Arial", sans-serif;
	}
	.embeddedMessagingConversationButton:focus {
		outline: 1px solid #F36F21;
    }
	#chatButton {
		width: 180px;
		height: 50px;
		border-radius: 8px 8px 0 0;
		background: #0e3d6a;
		cursor: pointer;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
    #chatButton:hover {
        background: #ff7a36;
    }
    #chatStatus {
	font-size: 14px;
    }
    #chatButton img {
	margin-right: 8px;
	height: 24px;
	border-radius: 50%;
    }
    #chatButtonLegend {
	position: fixed;
        bottom: 20px;
        right: 20px;
        cursor: pointer;
    }
    #chatButtonAdditionalText {
		font-size: 14px;
    }
    .st_info{
	position: relative;
	margin-left: 0%;
	white-space: nowrap;
	font-size:14px;
    }
</style>

<script type='text/javascript'>

	function getIsAllowEdit() {
		const selectElement = document.getElementById('isLoginSelect');
		const selectedValue = selectElement.value;
		console.log("getIsAllowEdit.isLogin: ", selectedValue);
		
		return !(selectedValue === 'true' || selectedValue === true);
	}

	function getLanguage() {
		const selectElement = document.getElementById('languageSelect');
		const selectedValue = selectElement.value;
		console.log("getLanguage.languageSelect: ", selectedValue);
		
		return selectedValue;
	}

	function getIsBusinessHour() {
		const selectElement = document.getElementById('isWithinBusinessHourSelect');
		const selectedValue = selectElement.value;
		console.log("getIsBusinessHour.isBusinessHour: ", selectedValue);
		
		return (selectedValue === 'true' || selectedValue === true);
	}

	function getAgentStatus(){
		const hasOnlineAgent = getOnlineAgentStatus();
		updateButtonWithOnlineAgentStatus(hasOnlineAgent);
	}
    
	function initEmbeddedMessaging() {
			window.addEventListener("onEmbeddedMessagingReady", async () => {
                const hasOnlineAgent = await getOnlineAgentStatus();
                updateButtonWithOnlineAgentStatus(hasOnlineAgent);
            });
		
			window.addEventListener("onEmbeddedMessagingPreChatLoaded", () => {
				console.log("prechat loaded");
				const isAllowEdit = getIsAllowEdit();
				embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
				"isLogin": !isAllowEdit,
				"PPSno": AccNoInput.value,
				});


				embeddedservice_bootstrap.prechatAPI.setVisiblePrechatFields({
				"_firstName": {
					"value": isAllowEdit?'':fnameInput.value,
					"isEditableByEndUser": isAllowEdit,
				},
				"_lastName": {
					"value": isAllowEdit?'':lnameInput.value,
					"isEditableByEndUser": isAllowEdit,
				},
				"Account No./ User Name": {
					"value": isAllowEdit?'':AccNoInput.value,
					"isEditableByEndUser": isAllowEdit,
				},
			});
			}
		);
	
	
		try {
			embeddedservice_bootstrap.settings.language = config.language;
			//embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
			//embeddedservice_bootstrap.settings.language = 'zh_TW';

			
			embeddedservice_bootstrap.settings.hideChatButtonOnLoad = true;

			embeddedservice_bootstrap.init(
				'00DHz0000003j20',
				'miawDemo',
				'https://hkbn--devmiaw.sandbox.my.site.com/ESWmiawDemo1728371866859',
				{
					scrt2URL: 'https://hkbn--devmiaw.sandbox.my.salesforce-scrt.com'
				}
			);

		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};

   async function updateButtonWithOnlineAgentStatus() {
		const hasOnlineAgent = await getOnlineAgentStatus();
	    if (!hasOnlineAgent) {
            displayOfflineMessage();
        }
    }
	
    function isWithinBusinessHours() {
        const now = new Date();
        const hours = now.getHours();
        //return hours >= 9 && hours < 21; // 9 AM to 9 PM
	    return getIsBusinessHour();
    }

    function handleChatClick() {
        if (isWithinBusinessHours()) {
            startChat(); // Call your chat function
        } else {
            displayOfflineMessage();
        }
    }

    function displayOfflineMessage() {
        const chatStatus = document.getElementById('chatStatus');
        //chatStatus.textContent = 'We are currently offline. Please check back later.';
		chatStatus.textContent = 'Online Chat* (Offline)';


		// Change the width of chatButton to fit the new message
		const chatButton = document.getElementById('chatButton');
		//chatButton.style.width = '230px'; // Set width to auto to fit content
		//chatButton.style.padding = '10px'; // Optional: add padding for better appearance
	    chatButton.style.pointerEvents = "none"; // Disable clicking
    }

	function startChat() {
		embeddedservice_bootstrap.utilAPI.launchChat()
			.then(() => {
				console.log(
					'Successfully launched Messaging'
				);
			}).catch(() => {
				console.log(
					'Some error occurred when launching Messaging'
				);
			}).finally(() => {
				console.log(
					'Successfully launched Messaging - Finally'
				);
			});
	}

    async function getOnlineAgentStatus() {
		// Define the API endpoint
		//const apiUrl = 'https://192.168.170.152:8082/api/sys/sfdc/v1/messaging/onlineAgentStatus';
		const apiUrl = 'https://muleapiuat.hkbn.com.hk/api/sys/sfdc/v1/messaging/onlineAgentStatus';
	    
		// Create the payload to send
		const payload = {
		"action":"SELECT",
			"parameter":{
				"start": 0,
				"size": 1000
			}
		};

		// Define your username and password for Basic Auth
		const username = '86c16a15c54e4f3db823f4d7b4126542';
		const password = 'c2F939d1b4864Fde9889235555AC18A4';
		// Encode the username and password in Base64
		const credentials = btoa(`${username}:${password}`);

		const headers= {
			'Content-Type': 'application/json',
			'Authorization': `Basic ${credentials}`
		};

		console.log("Request Method: POST");
		console.log("Request URL:", apiUrl);
		console.log("Request Headers:", headers);
		console.log("Request Payload:", JSON.stringify(payload));

		    try {
		        // Await the Axios call to ensure we get the response
		        const response = await axios.post(apiUrl, payload, { headers });
		        console.log("Response:", response.data);
		        
		        // Return the hasOnlineAgent status
		        return response.data.hasOnlineAgent; 
		        
		    } catch (error) {
		        console.error('Error:', error);
		        return false; // Return false in case of an error
		    }
	}
</script>
<script type='text/javascript' src='https://hkbn--devmiaw.sandbox.my.site.com/ESWmiawDemo1728371866859/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>





</body>

</html>
