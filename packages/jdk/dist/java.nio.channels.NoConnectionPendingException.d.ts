declare namespace java {
    namespace nio {
        namespace channels {
            /**
             * Unchecked exception thrown when the {@link SocketChannel#finishConnect
             * finishConnect} method of a {@link SocketChannel} is invoked without first
             * successfully invoking its {@link SocketChannel#connect connect} method.
             * @since 1.4
             */
            // @ts-ignore
            class NoConnectionPendingException extends java.lang.IllegalStateException {
                /**
                 * Constructs an instance of this class.
                 */
                // @ts-ignore
                constructor()
            }
        }
    }
}
