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
	<br/>
	<label for="isWithinBusinessHourSelect">Is Business Hour:</label>
    <select id="isWithinBusinessHourSelect" name="isBusinessHour" onchange="getIsBusinessHour()">
        <option value="true" selected>True</option>
        <option value="false">False</option>
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
    <input type="text" id="AccNoInput" name="AccNoInput" value="123456"><br><br>
</fieldset>


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
		
		// Convert string to boolean
		return !(selectedValue === 'true' || selectedValue === true);
	}

	function getIsBusinessHour() {
		const selectElement = document.getElementById('isWithinBusinessHourSelect');
		const selectedValue = selectElement.value;
		console.log("getIsBusinessHour.isBusinessHour: ", selectedValue);
		
		// Convert string to boolean
		return (selectedValue === 'true' || selectedValue === true);
	}

	function setPf() {
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
    
	function initEmbeddedMessaging() {
		window.addEventListener(
			"onEmbeddedMessagingButtonClicked", () => {
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

			embeddedservice_bootstrap.settings.hideChatButtonOnLoad = true;

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

<div id="chatButtonLegend">
<div id="chatButton" onclick="handleChatClick()">
    <div onclick="handleChatClick()">
		<span id="chatStatus">Online Chat*</span>
    </div>
</div>
	<div id="chatButtonAdditionalText" class="st_info">Service hours: 0900-2100<br>Or <a href="https://www.hkbnes.net/web/en/support/contact-us?utm_campaign=contact_us&utm_source=myaccount_landing&utm_medium=referral" target="_blank">click here</a> to contact us</div>
</div>


<script>
    function isWithinBusinessHours() {
        const now = new Date();
        const hours = now.getHours();
        //return hours >= 9 && hours < 21; // 9 AM to 9 PM
	    //return getIsBusinessHour();
	    return true;
    }

    function handleChatClick() {
        if (isWithinBusinessHours()) {
            //startChat(); // Call your chat function
	//20252012 1532
		setPf();
		startChat();
        } else {
            displayOfflineMessage();
        }
    }

    function displayOfflineMessage() {
        const chatStatus = document.getElementById('chatStatus');
        chatStatus.textContent = 'We are currently offline. Please check back later.';

		// Change the width of chatButton to fit the new message
		const chatButton = document.getElementById('chatButton');
		chatButton.style.width = '230px'; // Set width to auto to fit content
		chatButton.style.padding = '10px'; // Optional: add padding for better appearance
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
</script>

</body>
</html>
