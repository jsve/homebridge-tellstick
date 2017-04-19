## Making edits to the platform
### Manually add to config.json
### The platform configuration
There is soon a posibility to add sensors and remotes without making edits to the config yourself. This has som caveats though:
 - this is only found in some apps, and is not standard HomeKit stuff
 - https://github.com/devbobo/homebridge-lifx-lan/issues/15#issuecomment-259056730

## Example config for the platform
** Don't forget to add the name for the platform. This is whats shown in the debugger and other places.**


## Silly limitations of remotes
The ones I've tries has identified the "group" button as the same house and unit as button nr. 1. The group button has a "flag" / additional information sent on it showing that it is the group switch. Telldus doesn't recognize this though, which means we are limited to using this as a normal button.

If we had a rawDeviseListener running all the time, we could use this info. But I don't think we want that.


## Inspirations / other good homebridge projects
https://github.com/devbobo/homebridge-lifx-lan/
https://github.com/ThinkFlipp/homebridge-telldus-tdtool/
https://github.com/nfarina/homebridge/blob/master/example-plugins/homebridge-samplePlatform/
https://github.com/ilcato/homebridge-Fibaro-HC2/
https://github.com/ebaauw/homebridge-hue/

### Unofficial UUIDS
https://gist.github.com/gomfunkel/b1a046d729757120907c
