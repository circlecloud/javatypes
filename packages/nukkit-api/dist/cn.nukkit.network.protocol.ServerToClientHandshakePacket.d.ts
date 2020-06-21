declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                // @ts-ignore
                class ServerToClientHandshakePacket extends cn.nukkit.network.protocol.DataPacket {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public publicKey: java.lang.String | string
                    // @ts-ignore
                    public serverToken: java.lang.String | string
                    // @ts-ignore
                    public privateKey: java.lang.String | string
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