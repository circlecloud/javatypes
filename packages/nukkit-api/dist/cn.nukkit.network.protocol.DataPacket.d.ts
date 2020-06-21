declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class DataPacket extends cn.nukkit.utils.BinaryStream implements java.lang.Cloneable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public isEncoded: boolean
                    // @ts-ignore
                    public encapsulatedPacket: cn.nukkit.raknet.protocol.EncapsulatedPacket
                    // @ts-ignore
                    public reliability: number /*byte*/
                    // @ts-ignore
                    public orderIndex: java.lang.Integer | number
                    // @ts-ignore
                    public orderChannel: java.lang.Integer | number
                    // @ts-ignore
                    public abstract pid(): number /*byte*/
                    // @ts-ignore
                    public abstract decode(): void
                    // @ts-ignore
                    public abstract encode(): void
                    // @ts-ignore
                    public reset(): cn.nukkit.network.protocol.DataPacket
                    // @ts-ignore
                    public setChannel(channel: number /*int*/): void
                    // @ts-ignore
                    public getChannel(): number /*int*/
                    // @ts-ignore
                    public clean(): cn.nukkit.network.protocol.DataPacket
                    // @ts-ignore
                    public clone(): cn.nukkit.network.protocol.DataPacket
                    // @ts-ignore
                    public compress(): cn.nukkit.network.protocol.BatchPacket
                    // @ts-ignore
                    public compress(level: number /*int*/): cn.nukkit.network.protocol.BatchPacket
                }
            }
        }
    }
}
