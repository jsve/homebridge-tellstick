module.exports = homebridge => {
	console.log('homebridge API version: ' + homebridge.version)

	// For platform plugin to be considered as
	// dynamic platform plugin, then in:
	// registerPlatform(
	//							pluginName,
	// 						platformName,
	//							constructor,
	//							dynamic
	// )
	// dynamic must be true
	homebridge.registerPlatform(
		'homebridge-tellstick',
		'TelldusTellstick',
		TelldusTellstickPlatform,
		true
	)
}

class TelldusTellstickPlatform {
	constructor (log, config, api) {
		log('TelldusTellstick Init')
		var platform = this
		this.log = log
		this.config = config
		// platform.log(this)
		// platform.log(this.config)
		// platform.log(api)

		this.accessories = []

		// require in all the homebridge-needed methods for the
		// platform-class
		// .bind(platform) means that this in the required file
		// will be this (TelldusTellstick) platform.
		this.configureAccessory = require(
			'./lib/configureAccessory').bind(platform)
		this.configurationRequestHandler = require(
			'./lib/configurationRequestHandler').bind(platform)
		this.addAccessory = require(
			'./lib/addAccessory').bind(platform)
		this.updateAccessoriesReachability = require(
			'./lib/updateAccessoriesReachability').bind(platform)

		if (api) { // not sure why api would not exist...
			// Save the API object as plugin needs to register
			// new accessory via this object.
			this.api = api

			// Listen to event 'didFinishLaunching', this means
			// homebridge already finished loading cached
			// accessories Platform Plugin should only
			// register new accessory that doesn't exist
			// in homebridge after this event.
			// Or start discover new accessories
			this.api.on(
				'didFinishLaunching',
				function () {
					platform.log('DidFinishLaunching')
					platform.log(api.user.configPath())
					platform.log(platform.accessories)
					// this.log(api.user.cachedAccessoryPath())
				}
			)
		}
	}
}
