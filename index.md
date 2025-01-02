<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Option</title>
	<!--<script type='text/javascript' src='https://hkbn--devmiaw.sandbox.my.site.com/ESWmiawDemo1728371866859/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>-->
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

<div id="chatButtonLegend">
	<div id="chatButton" onclick="handleChatClick()">
		<div onclick="handleChatClick()">
			<span id="chatStatus">Online Chat*</span>
		</div>
	</div>
		<div id="chatButtonAdditionalText" class="st_info">Service hours: 0900-2100<br>Or <a href="https://www.hkbnes.net/web/en/support/contact-us?utm_campaign=contact_us&utm_source=myaccount_landing&utm_medium=referral" target="_blank">click here</a> to contact us</div>
</div>


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

	function getAgentStatus(){
		const hasOnlineAgent = getOnlineAgentStatus();
		updateButtonWithOnlineAgentStatus(hasOnlineAgent);
	}
    
	function initEmbeddedMessaging() {
		window.addEventListener(
			"onEmbeddedMessagingReady", () => {
				const hasOnlineAgent = getOnlineAgentStatus();
				updateButtonWithOnlineAgentStatus(hasOnlineAgent);
			},
		
			"onEmbeddedMessagingPreChatLoaded", () => {
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

    function updateButtonWithOnlineAgentStatus(status) {
	    if (!status) {
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

	function getOnlineAgentStatus() {
		// Define the API endpoint
		const apiUrl = 'https://192.168.170.152:8082/api/sys/sfdc/v1/messaging/onlineAgentStatus';

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

		/*// Send POST request using Fetch API
		fetch(apiUrl, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(payload)
		})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json(); // Parse JSON response
		})
		.then(data => {
			// Access the "hasOnlineAgent" value from the response
			console.log("Response:", data);
			console.log("hasOnlineAgent:", data.hasOnlineAgent);
		return data.hasOnlineAgent;
		})
		.catch(error => {
			console.error('Error:', error);
		});*/

		// Create an HTTPS agent that ignores SSL certificate errors
		
	
		// Send POST request using Axios with custom agent
		axios.post(apiUrl, payload, {
			headers: headers
		})
		.then(response => {
			console.log("Response:", response.data);
			console.log("hasOnlineAgent:", response.data.hasOnlineAgent);
			return response.data.hasOnlineAgent;
		})
		.catch(error => {
			console.error('Error:', error);
		});
	}
</script>
<script type='text/javascript' src='https://hkbn--devmiaw.sandbox.my.site.com/ESWmiawDemo1728371866859/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

</body>
</html>
