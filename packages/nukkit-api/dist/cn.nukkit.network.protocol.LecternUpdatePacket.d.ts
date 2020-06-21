declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class LecternUpdatePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*byte*/
                    // @ts-ignore
                    public page: number /*int*/
                    // @ts-ignore
                    public totalPages: number /*int*/
                    // @ts-ignore
                    public blockPosition: cn.nukkit.math.BlockVector3
                    // @ts-ignore
                    public dropBook: boolean
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
