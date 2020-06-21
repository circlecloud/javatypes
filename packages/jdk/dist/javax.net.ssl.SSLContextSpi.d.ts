declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This class defines the <i>Service Provider Interface</i> (<b>SPI</b>)
             * for the <code>SSLContext</code> class.
             * <p> All the abstract methods in this class must be implemented by each
             * cryptographic service provider who wishes to supply the implementation
             * of a particular SSL context.
             * @since 1.4
             * @see SSLContext
             */
            // @ts-ignore
            abstract class SSLContextSpi extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Initializes this context.
                 * @param km the sources of authentication keys
                 * @param tm the sources of peer authentication trust decisions
                 * @param sr the source of randomness
                 * @throws KeyManagementException if this operation fails
                 * @see SSLContext#init(KeyManager [], TrustManager [], SecureRandom)
                 */
                // @ts-ignore
                abstract engineInit(km: javax.net.ssl.KeyManager[], tm: javax.net.ssl.TrustManager[], sr: java.security.SecureRandom): void
                /**
                 * Returns a <code>SocketFactory</code> object for this
                 * context.
                 * @return the <code>SocketFactory</code> object
                 * @throws IllegalStateException if the SSLContextImpl requires
                 *          initialization and the <code>engineInit()</code>
                 *          has not been called
                 * @see javax.net.ssl.SSLContext#getSocketFactory()
                 */
                // @ts-ignore
                abstract engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
                /**
                 * Returns a <code>ServerSocketFactory</code> object for
                 * this context.
                 * @return the <code>ServerSocketFactory</code> object
                 * @throws IllegalStateException if the SSLContextImpl requires
                 *          initialization and the <code>engineInit()</code>
                 *          has not been called
                 * @see javax.net.ssl.SSLContext#getServerSocketFactory()
                 */
                // @ts-ignore
                abstract engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                /**
                 * Creates a new <code>SSLEngine</code> using this context.
                 * <P>
                 * Applications using this factory method are providing no hints
                 * for an internal session reuse strategy. If hints are desired,
                 * {@link #engineCreateSSLEngine(String, int)} should be used
                 * instead.
                 * <P>
                 * Some cipher suites (such as Kerberos) require remote hostname
                 * information, in which case this factory method should not be used.
                 * @return the <code>SSLEngine</code> Object
                 * @throws IllegalStateException if the SSLContextImpl requires
                 *          initialization and the <code>engineInit()</code>
                 *          has not been called
                 * @see SSLContext#createSSLEngine()
                 * @since 1.5
                 */
                // @ts-ignore
                abstract engineCreateSSLEngine(): javax.net.ssl.SSLEngine
                /**
                 * Creates a <code>SSLEngine</code> using this context.
                 * <P>
                 * Applications using this factory method are providing hints
                 * for an internal session reuse strategy.
                 * <P>
                 * Some cipher suites (such as Kerberos) require remote hostname
                 * information, in which case peerHost needs to be specified.
                 * @param host the non-authoritative name of the host
                 * @param port the non-authoritative port
                 * @return the <code>SSLEngine</code> Object
                 * @throws IllegalStateException if the SSLContextImpl requires
                 *          initialization and the <code>engineInit()</code>
                 *          has not been called
                 * @see SSLContext#createSSLEngine(String, int)
                 * @since 1.5
                 */
                // @ts-ignore
                abstract engineCreateSSLEngine(host: java.lang.String | string, port: number /*int*/): javax.net.ssl.SSLEngine
                /**
                 * Returns a server <code>SSLSessionContext</code> object for
                 * this context.
                 * @return the <code>SSLSessionContext</code> object
                 * @see javax.net.ssl.SSLContext#getServerSessionContext()
                 */
                // @ts-ignore
                abstract engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext
                /**
                 * Returns a client <code>SSLSessionContext</code> object for
                 * this context.
                 * @return the <code>SSLSessionContext</code> object
                 * @see javax.net.ssl.SSLContext#getClientSessionContext()
                 */
                // @ts-ignore
                abstract engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext
                /**
                 * Returns a copy of the SSLParameters indicating the default
                 * settings for this SSL context.
                 * <p>The parameters will always have the ciphersuite and protocols
                 * arrays set to non-null values.
                 * <p>The default implementation obtains the parameters from an
                 * SSLSocket created by calling the
                 * {@linkplain javax.net.SocketFactory#createSocket
                 * SocketFactory.createSocket()} method of this context's SocketFactory.
                 * @return a copy of the SSLParameters object with the default settings
                 * @throws UnsupportedOperationException if the default SSL parameters
                 *    could not be obtained.
                 * @since 1.6
                 */
                // @ts-ignore
                engineGetDefaultSSLParameters(): javax.net.ssl.SSLParameters
                /**
                 * Returns a copy of the SSLParameters indicating the maximum supported
                 * settings for this SSL context.
                 * <p>The parameters will always have the ciphersuite and protocols
                 * arrays set to non-null values.
                 * <p>The default implementation obtains the parameters from an
                 * SSLSocket created by calling the
                 * {@linkplain javax.net.SocketFactory#createSocket
                 * SocketFactory.createSocket()} method of this context's SocketFactory.
                 * @return a copy of the SSLParameters object with the maximum supported
                 *    settings
                 * @throws UnsupportedOperationException if the supported SSL parameters
                 *    could not be obtained.
                 * @since 1.6
                 */
                // @ts-ignore
                engineGetSupportedSSLParameters(): javax.net.ssl.SSLParameters
            }
        }
    }
}
