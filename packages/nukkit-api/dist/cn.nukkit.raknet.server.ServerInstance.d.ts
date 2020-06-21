declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                interface ServerInstance {
                    // @ts-ignore
                    openSession(identifier: java.lang.String | string, address: java.lang.String | string, port: number /*int*/, clientID: number /*long*/): void
                    // @ts-ignore
                    closeSession(identifier: java.lang.String | string, reason: java.lang.String | string): void
                    // @ts-ignore
                    handleEncapsulated(identifier: java.lang.String | string, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number /*int*/): void
                    // @ts-ignore
                    handleRaw(address: java.lang.String | string, port: number /*int*/, payload: number /*byte*/[]): void
                    // @ts-ignore
                    notifyACK(identifier: java.lang.String | string, identifierACK: number /*int*/): void
                    // @ts-ignore
                    handleOption(option: java.lang.String | string, value: java.lang.String | string): void
                }
            }
        }
    }
}
