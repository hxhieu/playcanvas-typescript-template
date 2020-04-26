import { IAttributeCollection } from "../@types"

/**
 * Dumb extend of pc.EventHandler
 */
class NullEventHandler extends pc.EventHandler { }

/**
 * Base class for all script types
 * @exports
 * @class ScriptTypeBase
 * @see {@link https://github.com/snowfrogdev/typescript-playcanvas-template}
 */
export abstract class ScriptTypeBase {
  /**
   * Default NULL event handler
   * @type {pc.EventHandler}
   * @memberof ScriptTypeBase
   */
  eventHandler: pc.EventHandler = new NullEventHandler()

  /**
   * The pc.Application that the instance of this type belongs to.
   * @type {pc.Application}
   * @memberof ScriptType
   */
  app: pc.Application

  /**
   * 	The pc.Entity that the instance of this type belongs to.
   * @type {pc.Entity}
   * @memberof ScriptType
   */
  entity: pc.Entity

  /**
   * True if the instance of this type is in running state.
   * @type {boolean}
   * @memberof ScriptType
   */
  enabled: boolean

  /**
   * The attributes collection definition when define the script instance
   * @type {IAttributeDef}
   * @memberof ScriptTypeBase
   */
  attributes: IAttributeCollection = {}

  /**
   * @see {@type pc.EventHandler}
   * @param name 
   * @param callback 
   * @param scope 
   */
  on(name: string, callback: pc.callbacks.HandleEvent, scope?: any): pc.EventHandler {
    return this.eventHandler.on(name, callback, scope)
  }

  /**
   * @see {@type pc.EventHandler}
   * @param name 
   * @param callback 
   * @param scope 
   */
  off(name?: string | undefined, callback?: pc.callbacks.HandleEvent | undefined, scope?: any): pc.EventHandler {
    return this.eventHandler.off(name, callback, scope)
  }

  /**
   * @see {@type pc.EventHandler}
   * @param name 
   * @param arg1 
   * @param arg2 
   * @param arg3 
   * @param arg4 
   * @param arg5 
   * @param arg6 
   * @param arg7 
   * @param arg8 
   */
  fire(name: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): pc.EventHandler {
    return this.eventHandler.fire(name, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)
  }

  /**
   * @see {@type pc.EventHandler}
   * @param name 
   * @param callback 
   * @param scope 
   */
  once(name: string, callback: pc.callbacks.HandleEvent, scope?: any): pc.EventHandler {
    return this.eventHandler.once(name, callback, scope)
  }

  /**
   * @see {@type pc.EventHandler}
   * @param name 
   */
  hasEvent(name: string): boolean {
    return this.eventHandler.hasEvent(name)
  }

  /**
   * Generic access to PlayCanvas dynamic properties
   * @type {any}
   * @memberof ScriptTypeBase
   */
  [key: string]: any
}