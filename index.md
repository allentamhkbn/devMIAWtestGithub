<html>
  <body>
      <input type="radio" id="isLoginY" name="isLogin" value="Y" onclick="updateIsLogin(this.value)" checked>
      <label for="isLoginY">Y</label>
  
      <input type="radio" id="isLoginN" name="isLogin" value="N" onclick="updateIsLogin(this.value)">
      <label for="isLoginN">N</label>
    
    <script type='text/javascript'>
      let isLogin = 'N'; // Default value

      function updateIsLogin(value) {
        isLogin = value;
        console.log("isLogin="+isLogin);
      }
      
      	function initEmbeddedMessaging() {
      		try {
      			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
      
      			embeddedservice_bootstrap.init(
      				'00D1e0000000pRK',
      				'devMIAWtestGithub1',
      				'https://hkbn--devallen.sandbox.my.site.com/ESWdevMIAWtestGithub11727688209169',
      				{
      					scrt2URL: 'https://hkbn--devallen.sandbox.my.salesforce-scrt.com',
                prechat: {
                 settings: {
                   custom: {
                     isLogin: isLogin // Pass the isLogin parameter here
                   }
                 }
                }
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
