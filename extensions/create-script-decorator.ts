import { IAttributeCollection } from "../@types"

/**
 * Class decorator allowing the use of ES6 classes  
 * to define and create PlayCanvas script types. 
 * @param {pc.Application} [app]
 */
export const createScript = function (app?: pc.Application) {
  return function (obj: any) {
    const instance = new obj()
    const script = pc.createScript(instance.name, app)
    const attributes = instance.attributes as IAttributeCollection

    // Add public attributes accessible in the editor
    if (attributes) {
      for (let attr in attributes) {
        script.attributes.add(attr, attributes[attr])
      }
    }
    // Add intance properties and methods to prototype
    for (let prop in instance) {
      if (prop !== 'attributes' && prop !== 'name' && !attributes[prop]) {
        (script as any).prototype[prop] = instance[prop]
      }
    }

    // Add getters and setters to prototype
    const prototypePropertyDescriptors = Object.getOwnPropertyDescriptors(
      obj.prototype
    );
    for (const prop in prototypePropertyDescriptors) {
      if (prop !== "constructor") {
        const descriptors = prototypePropertyDescriptors[prop];
        const { get, set } = descriptors;

        if (get || set) {
          const scriptDescriptor = {
            get,
            set,
            enumerable: false,
            configurable: true,
          };

          Object.defineProperty(script.prototype, prop, scriptDescriptor);
        }
      }
    }
    
    // Add static properties
    for (let prop in obj) {
      (script as any)[prop] = obj[prop]
    }
  }
}
