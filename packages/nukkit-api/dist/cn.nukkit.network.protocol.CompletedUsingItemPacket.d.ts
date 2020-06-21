declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class CompletedUsingItemPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly ACTION_UNKNOWN: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_EQUIP_ARMOR: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_EAT: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_ATTACK: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_CONSUME: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_THROW: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_SHOOT: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_PLACE: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_FILL_BOTTLE: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_FILL_BUCKET: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_POUR_BUCKET: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_USE_TOOL: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_INTERACT: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_RETRIEVE: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_DYED: number /*int*/
                    // @ts-ignore
                    public static readonly ACTION_TRADED: number /*int*/
                    // @ts-ignore
                    public itemId: number /*int*/
                    // @ts-ignore
                    public action: number /*int*/
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
