class MechBuilder123 extends pc.ScriptType {
    // Add a mech part
    addPart(mount, partAssetName, offset) {
        const parent = this.entity.findByName(mount)
        const child = new pc.Entity(partAssetName)
        child.addComponent('model', {
            type: 'asset'
        })
        child.model.asset = this.app.assets.find(`${partAssetName}.json`, "model")

        parent.addChild(child)
        // TODO: Not sure why the scale is messed up
        child.setLocalScale(100, 100, 100)
        child.setPosition(offset)
        console.log(parent)
    }

    initialize() {
        if (this.cockpitMount && this.cockpitAssetName)
            this.addPart(this.cockpitMount, this.cockpitAssetName, this.cockpitOffset)

        if (this.weaponLMount && this.weaponLAssetName)
            this.addPart(this.weaponLMount, this.weaponLAssetName, this.weaponLOffset)

        if (this.weaponRMount && this.weaponRAssetName)
            this.addPart(this.weaponRMount, this.weaponRAssetName, this.weaponROffset)
    }

    update(dt) {
        // called each tick
        //this.entity.translate(0, 0, 1 * dt)
        //

    }
}

// register the class as a script
pc.registerScript(MechBuilder123)

// declare script attributes (Must be after pc.registerScript())
MechBuilder123.attributes.add('cockpitMount', { type: 'string' })
MechBuilder123.attributes.add('cockpitAssetName', { type: 'string' })
MechBuilder123.attributes.add('cockpitOffset', { type: 'vec3' })

MechBuilder123.attributes.add('weaponLMount', { type: 'string' })
MechBuilder123.attributes.add('weaponLAssetName', { type: 'string' })
MechBuilder123.attributes.add('weaponLOffset', { type: 'vec3' })

MechBuilder123.attributes.add('weaponRMount', { type: 'string' })
MechBuilder123.attributes.add('weaponRAssetName', { type: 'string' })
MechBuilder123.attributes.add('weaponROffset', { type: 'vec3' })