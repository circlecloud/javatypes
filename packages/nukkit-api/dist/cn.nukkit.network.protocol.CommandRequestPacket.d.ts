declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class CommandRequestPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly TYPE_PLAYER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_COMMAND_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_MINECART_COMMAND_BLOCK: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_DEV_CONSOLE: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_AUTOMATION_PLAYER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_CLIENT_AUTOMATION: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_DEDICATED_SERVER: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_ENTITY: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_VIRTUAL: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_GAME_ARGUMENT: number /*int*/
                    // @ts-ignore
                    public static readonly TYPE_INTERNAL: number /*int*/
                    // @ts-ignore
                    public command: java.lang.String | string
                    // @ts-ignore
                    public data: cn.nukkit.network.protocol.types.CommandOriginData
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
