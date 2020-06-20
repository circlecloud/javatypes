declare namespace java {
    namespace net {
        /**
         * This interface defines a factory for socket implementations. It
         * is used by the classes {@code Socket} and
         * {@code ServerSocket} to create actual socket
         * implementations.
         * @author Arthur van Hoff
         * @see java.net.Socket
         * @see java.net.ServerSocket
         * @since JDK1.0
         */
        // @ts-ignore
        interface SocketImplFactory {
            /**
             * Creates a new {@code SocketImpl} instance.
             * @return a new instance of {#code SocketImpl}.
             * @see java.net.SocketImpl
             */
            // @ts-ignore
            createSocketImpl(): java.net.SocketImpl
        }
    }
}
