<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Option</title>
</head>
<body>

<h2>DEVMIAW Demo</h2>
<br/>
<fieldset>
    <legend>Is Login:</legend>
    <label for="isLoginSelect">Select Login Option:</label>
    <select id="isLoginSelect" name="isLogin" onchange="getIsAllowEdit()">
        <option value="true">True</option>
        <option value="false" selected>False</option>
    </select>
</fieldset>
<br/>

<fieldset>
    <legend>User Information:</legend>
    <label for="fnameInput">First name:</label>
    <input type="text" id="fnameInput" name="fnameInput" disabled="true" value="testFirstname"><br><br>
    <label for="lnameInput">Last name:</label>
    <input type="text" id="lnameInput" name="lnameInput" disabled="true" value="testLastname"><br><br>
    <label for="emailInput">Email:</label>
    <input type="email" id="emailInput" name="emailInput" disabled="true" value="testEmail@email.com"><br><br>
	<label for="AccNoInput">Account No./ User Name:</label>
    <input type="text" id="AccNoInput" name="AccNoInput" value="ABCD"><br><br>
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

	function getIsAllowEdit() {
		const selectElement = document.getElementById('isLoginSelect');
		const selectedValue = selectElement.value;
		console.log("getIsAllowEdit.isLogin: ", selectedValue);
		
		// Convert string to boolean
		return !(selectedValue === 'true' || selectedValue === true);
	}
    
	function initEmbeddedMessaging() {
		window.addEventListener(
			"onEmbeddedMessagingButtonClicked", () => {
				const isAllowEdit = getIsAllowEdit();
				embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
				"isLogin": !isAllowEdit,
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
				"_email": {
					"value": isAllowEdit?'':emailInput.value,
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
