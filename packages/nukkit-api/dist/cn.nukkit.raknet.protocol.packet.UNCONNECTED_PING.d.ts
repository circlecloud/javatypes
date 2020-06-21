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
                    class UNCONNECTED_PING extends cn.nukkit.raknet.protocol.Packet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static readonly ID: number /*byte*/
                        // @ts-ignore
                        public pingID: number /*long*/
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
