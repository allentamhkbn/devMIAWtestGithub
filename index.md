<html>
  <body>
      <input type="text" id="accID" name="accID" value="112233"/>
      <label for="accID">112233</label>
    
    <script type='text/javascript'>
      let isLogin = 'Y'; // Default value
      
      	function initEmbeddedMessaging() {
			console.log("isLogin="+isLogin);
			console.log("accID="+accID);

      		try {
      			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

  			// Add extra pre-chat form details here
			embeddedservice_bootstrap.settings.extraPrechatFormDetails = [{
			    "label": "isLogin",
			    "value": isLogin,
			    "displayToAgent": true
			}, {
			  "label": "accID",
			  "value": accID,
			  "displayToAgent": true
			}];
      
      			embeddedservice_bootstrap.init(
      				'00D1e0000000pRK',
      				'devMIAWtestGithub1',
      				'https://hkbn--devallen.sandbox.my.site.com/ESWdevMIAWtestGithub11727688209169',
      				{
      					scrt2URL: 'https://hkbn--devallen.sandbox.my.salesforce-scrt.com'
      				}
      			);
      		} catch (err) {
      			console.error('Error loading Embedded Messaging: ', err);
      		}
      	};

      </script>
      <script type='text/javascript' src='https://hkbn--devallen.sandbox.my.site.com/ESWdevMIAWtestGithub11727688209169/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
  </body>
</html>
