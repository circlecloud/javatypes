declare namespace cn {
    namespace nukkit {
        namespace command {
            namespace data {
                // @ts-ignore
                class CommandParameter extends java.lang.Object {
                    // @ts-ignore
                    constructor(name: java.lang.String | string, type: java.lang.String | string, optional: boolean)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, type: cn.nukkit.command.data.CommandParamType, optional: boolean)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, optional: boolean)
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, optional: boolean, enumType: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, optional: boolean, enumValues: java.lang.String[] | string[])
                    // @ts-ignore
                    constructor(name: java.lang.String | string, enumType: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, enumValues: java.lang.String[] | string[])
                    // @ts-ignore
                    public static readonly ARG_TYPE_STRING: java.lang.String | string
                    // @ts-ignore
                    public static readonly ARG_TYPE_STRING_ENUM: java.lang.String | string
                    // @ts-ignore
                    public static readonly ARG_TYPE_BOOL: java.lang.String | string
                    // @ts-ignore
                    public static readonly ARG_TYPE_TARGET: java.lang.String | string
                    // @ts-ignore
                    public static readonly ARG_TYPE_PLAYER: java.lang.String | string
                    // @ts-ignore
                    public static readonly ARG_TYPE_BLOCK_POS: java.lang.String | string
                    // @ts-ignore
                    public static readonly ARG_TYPE_RAW_TEXT: java.lang.String | string
                    // @ts-ignore
                    public static readonly ARG_TYPE_INT: java.lang.String | string
                    // @ts-ignore
                    public static readonly ENUM_TYPE_ITEM_LIST: java.lang.String | string
                    // @ts-ignore
                    public static readonly ENUM_TYPE_BLOCK_LIST: java.lang.String | string
                    // @ts-ignore
                    public static readonly ENUM_TYPE_COMMAND_LIST: java.lang.String | string
                    // @ts-ignore
                    public static readonly ENUM_TYPE_ENCHANTMENT_LIST: java.lang.String | string
                    // @ts-ignore
                    public static readonly ENUM_TYPE_ENTITY_LIST: java.lang.String | string
                    // @ts-ignore
                    public static readonly ENUM_TYPE_EFFECT_LIST: java.lang.String | string
                    // @ts-ignore
                    public static readonly ENUM_TYPE_PARTICLE_LIST: java.lang.String | string
                    // @ts-ignore
                    public name: java.lang.String | string
                    // @ts-ignore
                    public type: cn.nukkit.command.data.CommandParamType
                    // @ts-ignore
                    public optional: boolean
                    // @ts-ignore
                    public options: number /*byte*/
                    // @ts-ignore
                    public enumData: cn.nukkit.command.data.CommandEnum
                    // @ts-ignore
                    public postFix: java.lang.String | string
                    // @ts-ignore
                    static fromString(param: java.lang.String | string): cn.nukkit.command.data.CommandParamType
                }
            }
        }
    }
}
