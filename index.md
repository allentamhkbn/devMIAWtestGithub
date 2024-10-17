<html>
	<body>
		<input type="text" id="PPSno" name="PPSno" placeholder="Enter PPS Number"/>
		<button id="startChat">Start Chat</button>
		
		<script type='text/javascript'>
			function initEmbeddedMessaging() {
				document.getElementById('startChat').addEventListener('click', () => {
					const ppsValue = document.getElementById('PPSno').value;

					validatePreChatForm(ppsValue).then(isValid => {
						if (isValid) {
							embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
								"PPSno": ppsValue,
							});
							startConversation();
						} else {
							alert('Invalid PPS Number. Please check and try again.');
						}
					}).catch(error => {
						console.error('Error validating PPS Number: ', error);
						alert('An error occurred while validating your input. Please try again.');
					});
				})
			}

			function validatePreChatForm(ppsValue) {
				return new Promise((resolve, reject) => {
					const query = `SELECT Id FROM Account WHERE PPS__c = '${ppsValue}'`;
					const url = `/services/data/v58.0/query?q=${encodeURIComponent(query)}`; // Replace XX.X with your API version

					fetch(url, {
						method: 'GET',
						headers: {
							'Authorization': 'Bearer ' + YOUR_ACCESS_TOKEN, // Use a valid access token
							'Content-Type': 'application/json'
						}
					})
						.then(response => {
							if (!response.ok) {
								throw new Error('Network response was not ok');
							}
							return response.json();
						})
						.then(data => {
							if (data.totalSize > 0) {  // Check if any records were found
								resolve(true);
							} else {
								resolve(false);
							}
						})
						.catch(error => reject(error));
				});
			}

			function startConversation() {
				try {
					embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
		
					embeddedservice_bootstrap.init(
                        '00D1e0000000pRK',
                        'github2',
                        'https://hkbn--devallen.sandbox.my.site.com/ESWgithub21727943898368',
                        {
                            scrt2URL: 'https://hkbn--devallen.sandbox.my.salesforce-scrt.com'
                        }
                    );
				} catch (err) {
					console.error('Error loading Embedded Messaging: ', err);
				}
			};

		</script>
        <script type='text/javascript' src='https://hkbn--devallen.sandbox.my.site.com/ESWgithub21727943898368/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
    </body>
</html>
