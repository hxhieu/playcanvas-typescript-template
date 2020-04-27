# playcanvas-typescript-template

Minimal setup to set up a local PlayCanvas development using TypeScript.

This works with my other [parcel](https://parceljs.org/) plugin [parcel-plugin-playcanvas](https://github.com/hxhieu/parcel-plugin-playcanvas) for a seamless local <-> PlayCanvas Editor workflow.

# How to use
- Clone this repo
- `npm install` or `yarn install` to pull the dependencies
- `npm run serve` or `yarn serve` for development, `.ts` files are watched and rebundle and upload to PlayCanvas automatically
- `npm build` for a production build

## Example usage
```
import { createScript } from "../../extensions/create-script-decorator"
import { ScriptTypeBase } from "../../extensions/script-type-base"
import { IAttributeCollection } from "../../@types"

@createScript()
export class HelloWorld extends ScriptTypeBase implements pc.ScriptType {
  name = 'ABC'

  attributes: IAttributeCollection = {
    test: { type: 'string' }
  }

  initialize() {
    console.log(this.test)
  }
}
```

# Inspiration and credits
[https://github.com/whydoidoit/babel-playcanvas-template](https://github.com/whydoidoit/babel-playcanvas-template)

[https://github.com/snowfrogdev/typescript-playcanvas-template](https://github.com/snowfrogdev/typescript-playcanvas-template)

Thank you!
