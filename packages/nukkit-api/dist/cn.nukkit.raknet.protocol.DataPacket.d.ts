declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class DataPacket extends cn.nukkit.raknet.protocol.Packet {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public packets: java.util.concurrent.ConcurrentLinkedQueue<java.lang.Object | any>
                    // @ts-ignore
                    public seqNumber: java.lang.Integer | number
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public length(): number /*int*/
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public clean(): cn.nukkit.raknet.protocol.Packet
                    // @ts-ignore
                    public clone(): cn.nukkit.raknet.protocol.DataPacket
                }
            }
        }
    }
}
