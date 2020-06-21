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
                    class OPEN_CONNECTION_REQUEST_1 extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly ID: number /*byte*/
                        // @ts-ignore
                        public protocol: number /*byte*/
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
