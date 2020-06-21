declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class SessionManager extends java.lang.Object {
                    // @ts-ignore
                    constructor(server: cn.nukkit.raknet.server.RakNetServer, socket: cn.nukkit.raknet.server.UDPServerSocket)
                    // @ts-ignore
                    readonly packetPool: cn.nukkit.raknet.protocol.Packet.PacketFactory[]
                    // @ts-ignore
                    readonly server: cn.nukkit.raknet.server.RakNetServer
                    // @ts-ignore
                    readonly socket: cn.nukkit.raknet.server.UDPServerSocket
                    // @ts-ignore
                    receiveBytes: number /*int*/
                    // @ts-ignore
                    sendBytes: number /*int*/
                    // @ts-ignore
                    readonly sessions: java.util.Map<java.lang.String | string, cn.nukkit.raknet.server.Session>
                    // @ts-ignore
                    name: java.lang.String | string
                    // @ts-ignore
                    packetLimit: number /*int*/
                    // @ts-ignore
                    shutdown: boolean
                    // @ts-ignore
                    ticks: number /*long*/
                    // @ts-ignore
                    lastMeasure: number /*long*/
                    // @ts-ignore
                    readonly block: java.util.Map<java.lang.String | string, java.lang.Long | number>
                    // @ts-ignore
                    readonly ipSec: java.util.Map<java.lang.String | string, java.lang.Integer | number>
                    // @ts-ignore
                    public portChecking: boolean
                    // @ts-ignore
                    public readonly serverId: number /*long*/
                    // @ts-ignore
                    currentSource: java.lang.String | string
                    // @ts-ignore
                    public getPort(): number /*int*/
                    // @ts-ignore
                    public getLogger(): cn.nukkit.utils.ThreadedLogger
                    // @ts-ignore
                    public run(): void
                    // @ts-ignore
                    public sendPacket(packet: cn.nukkit.raknet.protocol.Packet, dest: java.lang.String | string, port: number /*int*/): void
                    // @ts-ignore
                    public sendPacket(packet: cn.nukkit.raknet.protocol.Packet, dest: java.net.InetSocketAddress): void
                    // @ts-ignore
                    public streamEncapsulated(session: cn.nukkit.raknet.server.Session, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket): void
                    // @ts-ignore
                    public streamEncapsulated(session: cn.nukkit.raknet.server.Session, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number /*int*/): void
                    // @ts-ignore
                    public streamRAW(address: java.lang.String | string, port: number /*int*/, payload: number /*byte*/[]): void
                    // @ts-ignore
                    streamClose(identifier: java.lang.String | string, reason: java.lang.String | string): void
                    // @ts-ignore
                    streamInvalid(identifier: java.lang.String | string): void
                    // @ts-ignore
                    streamOpen(session: cn.nukkit.raknet.server.Session): void
                    // @ts-ignore
                    streamACK(identifier: java.lang.String | string, identifierACK: number /*int*/): void
                    // @ts-ignore
                    streamOption(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    public receiveStream(): boolean
                    // @ts-ignore
                    public blockAddress(address: java.lang.String | string): void
                    // @ts-ignore
                    public blockAddress(address: java.lang.String | string, timeout: number /*int*/): void
                    // @ts-ignore
                    public unblockAddress(address: java.lang.String | string): void
                    // @ts-ignore
                    public getSession(ip: java.lang.String | string, port: number /*int*/): cn.nukkit.raknet.server.Session
                    // @ts-ignore
                    public removeSession(session: cn.nukkit.raknet.server.Session): void
                    // @ts-ignore
                    public removeSession(session: cn.nukkit.raknet.server.Session, reason: java.lang.String | string): void
                    // @ts-ignore
                    public openSession(session: cn.nukkit.raknet.server.Session): void
                    // @ts-ignore
                    public notifyACK(session: cn.nukkit.raknet.server.Session, identifierACK: number /*int*/): void
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getID(): number /*long*/
                    // @ts-ignore
                    public getPacketFromPool(id: number /*byte*/): cn.nukkit.raknet.protocol.Packet
                }
            }
        }
    }
}
