declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                namespace packet {
                    /**
                     * author: MagicDroidX
                     * Nukkit Project
                     */
                    // @ts-ignore
                    class SERVER_HANDSHAKE_DataPacket extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly ID: number /*byte*/
                        // @ts-ignore
                        public address: java.lang.String | string
                        // @ts-ignore
                        public port: number /*int*/
                        // @ts-ignore
                        public readonly systemAddresses: java.net.InetSocketAddress[]
                        // @ts-ignore
                        public sendPing: number /*long*/
                        // @ts-ignore
                        public sendPong: number /*long*/
                        // @ts-ignore
                        public getID(): number /*byte*/
                        // @ts-ignore
                        public encode(): void
                    }
                }
            }
        }
    }
}
