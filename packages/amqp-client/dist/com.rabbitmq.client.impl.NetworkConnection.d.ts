declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                // @ts-ignore
                interface NetworkConnection {
                    /**
                     * Retrieve the local host.
                     * @return the client socket address.
                     */
                    // @ts-ignore
                    getLocalAddress(): java.net.InetAddress
                    /**
                     * Retrieve the local port number.
                     * @return the client socket port number
                     */
                    // @ts-ignore
                    getLocalPort(): number /*int*/
                    /**
                     * Retrieve address of peer.
                     */
                    // @ts-ignore
                    getAddress(): java.net.InetAddress
                    /**
                     * Retrieve port number of peer.
                     */
                    // @ts-ignore
                    getPort(): number /*int*/
                }
            }
        }
    }
}
