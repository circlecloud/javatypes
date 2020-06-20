declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace ban {
                    namespace Ban {
                        /**
                         * Represents a ban made on an IP.
                         */
                        // @ts-ignore
                        interface Ip extends org.spongepowered.api.util.ban.Ban {
                            /**
                             * Gets the address this ban applies to.
                             * @return The address
                             */
                            // @ts-ignore
                            getAddress(): java.net.InetAddress
                        }
                    }
                }
            }
        }
    }
}
