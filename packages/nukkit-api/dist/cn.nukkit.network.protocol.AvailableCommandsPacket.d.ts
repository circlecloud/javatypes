declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class AvailableCommandsPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly ARG_FLAG_VALID: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_FLAG_ENUM: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_FLAG_POSTFIX: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_FLAG_SOFT_ENUM: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_INT: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_FLOAT: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_VALUE: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_WILDCARD_INT: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_OPERATOR: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_TARGET: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_WILDCARD_TARGET: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_FILE_PATH: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_STRING: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_POSITION: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_MESSAGE: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_RAWTEXT: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_JSON: number /*int*/
                    // @ts-ignore
                    public static readonly ARG_TYPE_COMMAND: number /*int*/
                    // @ts-ignore
                    public commands: java.util.Map<java.lang.String | string, cn.nukkit.command.data.CommandDataVersions>
                    // @ts-ignore
                    public readonly softEnums: java.util.Map<java.lang.String | string, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>
                    // @ts-ignore
                    public pid(): number /*byte*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                }
            }
        }
    }
}
