declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class UpdateTradePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public windowId: number /*byte*/
                    // @ts-ignore
                    public windowType: number /*byte*/
                    // @ts-ignore
                    public unknownVarInt1: number /*int*/
                    // @ts-ignore
                    public tradeTier: number /*int*/
                    // @ts-ignore
                    public trader: number /*long*/
                    // @ts-ignore
                    public player: number /*long*/
                    // @ts-ignore
                    public displayName: java.lang.String | string
                    // @ts-ignore
                    public screen2: boolean
                    // @ts-ignore
                    public isWilling: boolean
                    // @ts-ignore
                    public offers: number /*byte*/[]
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
