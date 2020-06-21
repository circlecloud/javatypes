declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace protocol {
                namespace Packet {
                    /**
                     * A factory to create new packet instances
                     */
                    // @ts-ignore
                    interface PacketFactory {
                        /**
                         * Creates the packet
                         */
                        // @ts-ignore
                        create(): cn.nukkit.raknet.protocol.Packet
                    }
                }
            }
        }
    }
}
