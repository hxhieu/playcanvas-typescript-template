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