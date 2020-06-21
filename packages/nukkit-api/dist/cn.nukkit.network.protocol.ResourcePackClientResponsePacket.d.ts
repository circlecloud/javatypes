declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class ResourcePackClientResponsePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public static readonly STATUS_REFUSED: number /*byte*/
                    // @ts-ignore
                    public static readonly STATUS_SEND_PACKS: number /*byte*/
                    // @ts-ignore
                    public static readonly STATUS_HAVE_ALL_PACKS: number /*byte*/
                    // @ts-ignore
                    public static readonly STATUS_COMPLETED: number /*byte*/
                    // @ts-ignore
                    public responseStatus: number /*byte*/
                    // @ts-ignore
                    public packEntries: cn.nukkit.network.protocol.ResourcePackClientResponsePacket.Entry[]
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public pid(): number /*byte*/
                }
            }
        }
    }
}
