declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class Session extends java.lang.Object {
                    // @ts-ignore
                    constructor(sessionManager: cn.nukkit.raknet.server.SessionManager, address: java.lang.String | string, port: number /*int*/)
                    // @ts-ignore
                    public static readonly STATE_UNCONNECTED: number /*int*/
                    // @ts-ignore
                    public static readonly STATE_CONNECTING_1: number /*int*/
                    // @ts-ignore
                    public static readonly STATE_CONNECTING_2: number /*int*/
                    // @ts-ignore
                    public static readonly STATE_CONNECTED: number /*int*/
                    // @ts-ignore
                    public static readonly MAX_SPLIT_SIZE: number /*int*/
                    // @ts-ignore
                    public static readonly MAX_SPLIT_COUNT: number /*int*/
                    // @ts-ignore
                    public static readonly WINDOW_SIZE: number /*int*/
                    // @ts-ignore
                    public getAddress(): string
                    // @ts-ignore
                    public getPort(): number /*int*/
                    // @ts-ignore
                    public getID(): number /*long*/
                    // @ts-ignore
                    public update(time: number /*long*/): void
                    // @ts-ignore
                    public disconnect(): void
                    // @ts-ignore
                    public disconnect(reason: java.lang.String | string): void
                    // @ts-ignore
                    public sendQueue(): void
                    // @ts-ignore
                    public addEncapsulatedToQueue(packet: cn.nukkit.raknet.protocol.EncapsulatedPacket): void
                    // @ts-ignore
                    public addEncapsulatedToQueue(packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number /*int*/): void
                    // @ts-ignore
                    public getState(): number /*int*/
                    // @ts-ignore
                    public isTemporal(): boolean
                    // @ts-ignore
                    public handlePacket(packet: cn.nukkit.raknet.protocol.Packet): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
