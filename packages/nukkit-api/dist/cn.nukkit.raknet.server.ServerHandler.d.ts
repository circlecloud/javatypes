declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class ServerHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor(server: cn.nukkit.raknet.server.RakNetServer, instance: cn.nukkit.raknet.server.ServerInstance)
                    // @ts-ignore
                    readonly server: cn.nukkit.raknet.server.RakNetServer
                    // @ts-ignore
                    readonly instance: cn.nukkit.raknet.server.ServerInstance
                    // @ts-ignore
                    public sendEncapsulated(identifier: java.lang.String | string, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket): void
                    // @ts-ignore
                    public sendEncapsulated(identifier: java.lang.String | string, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number /*int*/): void
                    // @ts-ignore
                    public sendRaw(address: java.lang.String | string, port: number /*int*/, payload: number /*byte*/[]): void
                    // @ts-ignore
                    public closeSession(identifier: java.lang.String | string, reason: java.lang.String | string): void
                    // @ts-ignore
                    public sendOption(name: java.lang.String | string, value: java.lang.String | string): void
                    // @ts-ignore
                    public blockAddress(address: java.lang.String | string, timeout: number /*int*/): void
                    // @ts-ignore
                    public unblockAddress(address: java.lang.String | string): void
                    // @ts-ignore
                    public shutdown(): void
                    // @ts-ignore
                    public emergencyShutdown(): void
                    // @ts-ignore
                    invalidSession(identifier: java.lang.String | string): void
                    // @ts-ignore
                    public handlePacket(): boolean
                }
            }
        }
    }
}
