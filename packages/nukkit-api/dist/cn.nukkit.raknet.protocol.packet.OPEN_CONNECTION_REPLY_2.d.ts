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
                    class OPEN_CONNECTION_REPLY_2 extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly ID: number /*byte*/
                        // @ts-ignore
                        public serverID: number /*long*/
                        // @ts-ignore
                        public clientAddress: java.lang.String | string
                        // @ts-ignore
                        public clientPort: number /*int*/
                        // @ts-ignore
                        public mtuSize: number /*short*/
                        // @ts-ignore
                        public getID(): number /*byte*/
                        // @ts-ignore
                        public encode(): void
                        // @ts-ignore
                        public decode(): void
                    }
                }
            }
        }
    }
}
