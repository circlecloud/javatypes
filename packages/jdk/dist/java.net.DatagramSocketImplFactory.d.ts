declare namespace java {
    namespace net {
        /**
         * This interface defines a factory for datagram socket implementations. It
         * is used by the classes {@code DatagramSocket} to create actual socket
         * implementations.
         * @author Yingxian Wang
         * @see java.net.DatagramSocket
         * @since 1.3
         */
        // @ts-ignore
        interface DatagramSocketImplFactory {
            /**
             * Creates a new {@code DatagramSocketImpl} instance.
             * @return a new instance of {#code DatagramSocketImpl}.
             * @see java.net.DatagramSocketImpl
             */
            // @ts-ignore
            createDatagramSocketImpl(): java.net.DatagramSocketImpl
        }
    }
}
