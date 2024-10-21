<html>
<body>

<input type="text" id="PPSno" name="PPSno" value="">PPSno

<form>
        <fieldset>
            <legend>Is Login:</legend>
            <div>
                <input type="radio" id="loginTrue" name="isLogin" value="true">
                <label for="loginTrue">True</label>
            </div>
            <div>
                <input type="radio" id="loginFalse" name="isLogin" value="false">
                <label for="loginFalse">False</label>
            </div>
        </fieldset>
        <button type="submit">Submit</button>
    </form>

<script type='text/javascript'>
	function initEmbeddedMessaging() {
	
		window.addEventListener(
		 "onEmbeddedMessagingButtonClicked", () => {
		  embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
		   "PPSno": PPSno.value,
		  });

		embeddedservice_bootstrap.prechatAPI.setVisiblePrechatFields({
		   "_email": {
		      "value": "Jane@asd.sdsd",
		      "isEditableByEndUser": isLogin
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
