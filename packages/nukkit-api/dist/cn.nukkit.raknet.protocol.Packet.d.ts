declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class Packet extends java.lang.Object implements java.lang.Cloneable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    offset: number /*int*/
                    // @ts-ignore
                    public buffer: number /*byte*/[]
                    // @ts-ignore
                    public sendTime: java.lang.Long | number
                    // @ts-ignore
                    public abstract getID(): number /*byte*/
                    // @ts-ignore
                    get(len: number /*int*/): number /*byte*/[]
                    // @ts-ignore
                    getAll(): number /*byte*/[]
                    // @ts-ignore
                    get(): number /*byte*/[]
                    // @ts-ignore
                    getLong(): number /*long*/
                    // @ts-ignore
                    getInt(): number /*int*/
                    // @ts-ignore
                    getSignedShort(): number /*short*/
                    // @ts-ignore
                    getShort(): number /*int*/
                    // @ts-ignore
                    getTriad(): number /*int*/
                    // @ts-ignore
                    getLTriad(): number /*int*/
                    // @ts-ignore
                    getByte(): number /*byte*/
                    // @ts-ignore
                    getString(): string
                    // @ts-ignore
                    getAddress(): java.net.InetSocketAddress
                    // @ts-ignore
                    feof(): boolean
                    // @ts-ignore
                    put(b: number /*byte*/[]): void
                    // @ts-ignore
                    putLong(v: number /*long*/): void
                    // @ts-ignore
                    putInt(v: number /*int*/): void
                    // @ts-ignore
                    putShort(v: number /*int*/): void
                    // @ts-ignore
                    putSignedShort(v: number /*short*/): void
                    // @ts-ignore
                    putTriad(v: number /*int*/): void
                    // @ts-ignore
                    putLTriad(v: number /*int*/): void
                    // @ts-ignore
                    putByte(b: number /*byte*/): void
                    // @ts-ignore
                    putString(str: java.lang.String | string): void
                    // @ts-ignore
                    putAddress(addr: java.lang.String | string, port: number /*int*/): void
                    // @ts-ignore
                    putAddress(addr: java.lang.String | string, port: number /*int*/, version: number /*byte*/): void
                    // @ts-ignore
                    putAddress(address: java.net.InetSocketAddress): void
                    // @ts-ignore
                    public encode(): void
                    // @ts-ignore
                    public decode(): void
                    // @ts-ignore
                    public clean(): cn.nukkit.raknet.protocol.Packet
                    // @ts-ignore
                    public clone(): cn.nukkit.raknet.protocol.Packet
                }
            }
        }
    }
}
