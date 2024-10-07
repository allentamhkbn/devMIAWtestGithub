<html>
  <body>
      <input type="text" id="accID" name="accID" value="112233"/>
      <label for="accID">112233</label>

	  <BR/><BR/><BR/>

	  <label for="largeAccount">Large Account:</label>
		<select id="largeAccount">
			<option value="GREY" selected>GREY</option>
			<option value="RED">RED</option>
			<option value="GREEN">GREEN</option>
			<option value="BROWN">BROWN</option>
		</select>
    
    <script type='text/javascript'>
      let isLogin = 'Y'; // Default value
      
      	function initEmbeddedMessaging() {
			console.log("isLogin="+isLogin);
			console.log("accID="+accID.value);
			console.log("largeAccount="+largeAccount.value);


			window.addEventListener(
				"onEmbeddedMessagingButtonClicked", () => {
					embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
						"isLogin": isLogin,
						"accID": accID.value,
						"largeAccount": largeAccount.value,
					});
				}
			);

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
