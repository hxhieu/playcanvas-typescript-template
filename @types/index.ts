/**
 * Supported attribute types
 */
export type AttributeType = "boolean" | "number" | "string" | "json" | "asset" | "entity" | "rgb" | "rgba" | "vec2" | "vec3" | "vec4" | "curve"

/**
 * PlayCanvas attribute definition
 */
export interface IAttributeDef {
  type: AttributeType
  default?: any
  title?: string
  description?: string
  placeholder?: string | string[]
  array?: boolean
  size?: number
  min?: number
  max?: number
  precision?: number
  step?: number
  assetType?: string
  curves?: string[]
  color?: string
  enum?: object[]
}

/**
 * Attributes collection definition when define a script class
 * @exports
 */
export interface IAttributeCollection {
  [key: string]: IAttributeDef
}
