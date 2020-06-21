declare namespace java {
    namespace net {
        /**
         * This class represents a Socket Address with no protocol attachment.
         * As an abstract class, it is meant to be subclassed with a specific,
         * protocol dependent, implementation.
         * <p>
         * It provides an immutable object used by sockets for binding, connecting, or
         * as returned values.
         * @see java.net.Socket
         * @see java.net.ServerSocket
         * @since 1.4
         */
        // @ts-ignore
        abstract class SocketAddress extends java.lang.Object implements java.io.Serializable {
            // @ts-ignore
            constructor()
        }
    }
}
