<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Option</title>
</head>
<body>

<h2>DEVALLEN Demo</h2>
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
    <input type="text" id="accNoInput" name="accNoInput" disabled="true" value="ABCD"><br><br>
    <label for="PPSno">PPSno:</label>
    <input type="text" id="PPSno" name="PPSno" disabled="true" value="123456"><br><br>
</fieldset>


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
				"PPSno": PPSno.value,
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
					"value": isAllowEdit?'':accNoInput.value,
					"isEditableByEndUser": isAllowEdit,
				},
				});
			}
		);
	
	
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00D1e0000000pRK',
				'Test20241128',
				'https://hkbn--devallen.sandbox.my.site.com/ESWTest202411281732760340131',
				{
					scrt2URL: 'https://hkbn--devallen.sandbox.my.salesforce-scrt.com'
				}
			);

		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};
</script>
<script type='text/javascript' src='https://hkbn--devallen.sandbox.my.site.com/ESWTest202411281732760340131/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>

</body>
</html>
