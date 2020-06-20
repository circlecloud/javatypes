declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This interface is implemented by any class which wants to receive
             * notifications about the completion of an SSL protocol handshake
             * on a given SSL connection.
             * <P> When an SSL handshake completes, new security parameters will
             * have been established.  Those parameters always include the security
             * keys used to protect messages.  They may also include parameters
             * associated with a new <em>session</em> such as authenticated
             * peer identity and a new SSL cipher suite.
             * @since 1.4
             * @author David Brownell
             */
            // @ts-ignore
            interface HandshakeCompletedListener extends java.util.EventListener {
                /**
                 * This method is invoked on registered objects
                 * when a SSL handshake is completed.
                 * @param event the event identifying when the SSL Handshake
                 *           completed on a given SSL connection
                 */
                // @ts-ignore
                handshakeCompleted(event: javax.net.ssl.HandshakeCompletedEvent): void
            }
        }
    }
}
