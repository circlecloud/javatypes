declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This is the base interface for JSSE key managers.
             * <P>
             * <code>KeyManager</code>s are responsible for managing the
             * key material which is used to authenticate the local SSLSocket
             * to its peer.  If no key material is available, the socket will
             * be unable to present authentication credentials.
             * <P>
             * <code>KeyManager</code>s are created by either
             * using a <code>KeyManagerFactory</code>,
             * or by implementing one of the <code>KeyManager</code> subclasses.
             * @since 1.4
             * @see KeyManagerFactory
             */
            // @ts-ignore
            interface KeyManager {
            }
        }
    }
}
