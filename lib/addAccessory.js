module.exports = addAccessory

// Sample function to show how developer can add accessory
// dynamically from outside event
function addAccessory (accessoryName) {
	this.log('Add Accessory')
	var platform = this
	var uuid

	// Accessory must be created from
	// PlatformAccessory Constructor
	var Accessory = platform.api.platformAccessory

	// Service and Characteristic are from hap-nodejs
	var Service = platform.api.hap.Service
	var UUIDGen = platform.api.hap.uuid
	var Characteristic = platform.api.hap.Characteristic

	uuid = UUIDGen.generate(accessoryName)

	var newAccessory = new Accessory(accessoryName, uuid)
	newAccessory.on('identify', function (paired, callback) {
		platform.log(accessory.displayName, 'Identify!!!')
		callback()
	})
	// Plugin can save context on accessory
	// To help restore accessory in configureAccessory()
	// newAccessory.context.something = 'Something'

	// Make sure you provided a name for service otherwise it
	// may not visible in some HomeKit apps.
	newAccessory
		.addService(Service.Lightbulb, 'Test Light')
		.getCharacteristic(Characteristic.On)
		.on('set', function (value, callback) {
			platform.log(this)
			platform.log(accessory)
			platform.log(accessory.displayName, 'Light -> ' + value)
			callback()
		})

	this.accessories.push(newAccessory)
	this.api.registerPlatformAccessories(
		'homebridge-tellstick',
		'TelldusTellstick',
		[newAccessory]
	)
}