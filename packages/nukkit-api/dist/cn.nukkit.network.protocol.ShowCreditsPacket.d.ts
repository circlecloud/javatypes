declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class ShowCreditsPacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly STATUS_START_CREDITS: number /*int*/
                    // @ts-ignore
                    public static readonly STATUS_END_CREDITS: number /*int*/
                    // @ts-ignore
                    public eid: number /*long*/
                    // @ts-ignore
                    public status: number /*int*/
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
