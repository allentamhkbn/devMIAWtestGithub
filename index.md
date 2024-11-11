<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Option</title>
</head>
<body>

<h2>Demo</h2>
<br/>
<fieldset>
    <legend>Is Login:</legend>
    <label for="isLoginSelect">Select Login Option:</label>
    <select id="isLoginSelect" name="isLogin" onchange="readLoginValue()">
        <option value="true">True</option>
        <option value="false" selected>False</option>
    </select>
</fieldset>
<br/>

<fieldset>
    <legend>User Information:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname" disabled="true" value="testFirstname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" disabled="true" value="testLastname"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" disabled="true" value="testEmail@email.com"><br><br>
    <label for="PPSno">PPSno:</label>
    <input type="text" id="PPSno" name="PPSno" disabled="true" value="123456"><br><br>
</fieldset>


<style type='text/css'>
	.embeddedMessagingConversationButton {
		background-color: #F36F21;
		font-family: "Arial", sans-serif;
	}
	.embeddedMessagingConversationButton:focus {
		outline: 1px solid #F36F21;
    }
</style>


<script type='text/javascript'>

	function readLoginValue() {
		const selectElement = document.getElementById('isLoginSelect');
		const selectedValue = selectElement.value;
		console.log("readLoginValue.isLogin: ", selectedValue);
		
		// Find LWC component and update directly
		const lwcComponent = document.querySelector('c-custom-pre-chat-form');
		if (lwcComponent) {
			lwcComponent.updateLoginValue(selectedValue);
		}
		
		return selectedValue;
	}
    
	function initEmbeddedMessaging() {
		window.addEventListener(
			"onEmbeddedMessagingButtonClicked", () => {
				const loginValue = readLoginValue();
				embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
				"PPSno": PPSno.value,
				"isLogin": loginValue,
				});


				embeddedservice_bootstrap.prechatAPI.setVisiblePrechatFields({
				"_email": {
					"value": "testEmail1234@email.com",
					"isEditableByEndUser": loginValue,
				},});
			}
		);
	
	
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

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
</script>
<script type='text/javascript' src='https://hkbn--devmiaw.sandbox.my.site.com/ESWmiawDemo1728371866859/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>

</body>
</html>
