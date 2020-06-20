declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * <code>SSLServerSocketFactory</code>s create
             * <code>SSLServerSocket</code>s.
             * @since 1.4
             * @see SSLSocket
             * @see SSLServerSocket
             * @author David Brownell
             */
            // @ts-ignore
            class SSLServerSocketFactory extends javax.net.ServerSocketFactory {
                /**
                 * Constructor is used only by subclasses.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the default SSL server socket factory.
                 * <p>The first time this method is called, the security property
                 * "ssl.ServerSocketFactory.provider" is examined. If it is non-null, a
                 * class by that name is loaded and instantiated. If that is successful and
                 * the object is an instance of SSLServerSocketFactory, it is made the
                 * default SSL server socket factory.
                 * <p>Otherwise, this method returns
                 * <code>SSLContext.getDefault().getServerSocketFactory()</code>. If that
                 * call fails, an inoperative factory is returned.
                 * @return the default <code>ServerSocketFactory</code>
                 * @see SSLContext#getDefault
                 */
                // @ts-ignore
                getDefault(): javax.net.ServerSocketFactory
                /**
                 * Returns the list of cipher suites which are enabled by default.
                 * Unless a different list is enabled, handshaking on an SSL connection
                 * will use one of these cipher suites.  The minimum quality of service
                 * for these defaults requires confidentiality protection and server
                 * authentication (that is, no anonymous cipher suites).
                 * @see #getSupportedCipherSuites()
                 * @return array of the cipher suites enabled by default
                 */
                // @ts-ignore
                abstract getDefaultCipherSuites(): java.lang.String[]
                /**
                 * Returns the names of the cipher suites which could be enabled for use
                 * on an SSL connection created by this factory.
                 * Normally, only a subset of these will actually
                 * be enabled by default, since this list may include cipher suites which
                 * do not meet quality of service requirements for those defaults.  Such
                 * cipher suites are useful in specialized applications.
                 * @return an array of cipher suite names
                 * @see #getDefaultCipherSuites()
                 */
                // @ts-ignore
                abstract getSupportedCipherSuites(): java.lang.String[]
            }
        }
    }
}
