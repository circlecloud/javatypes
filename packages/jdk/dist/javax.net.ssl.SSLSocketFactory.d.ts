declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * <code>SSLSocketFactory</code>s create <code>SSLSocket</code>s.
             * @since 1.4
             * @see SSLSocket
             * @author David Brownell
             */
            // @ts-ignore
            abstract class SSLSocketFactory extends javax.net.SocketFactory {
                /**
                 * Constructor is used only by subclasses.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the default SSL socket factory.
                 * <p>The first time this method is called, the security property
                 * "ssl.SocketFactory.provider" is examined. If it is non-null, a class by
                 * that name is loaded and instantiated. If that is successful and the
                 * object is an instance of SSLSocketFactory, it is made the default SSL
                 * socket factory.
                 * <p>Otherwise, this method returns
                 * <code>SSLContext.getDefault().getSocketFactory()</code>. If that
                 * call fails, an inoperative factory is returned.
                 * @return the default <code>SocketFactory</code>
                 * @see SSLContext#getDefault
                 */
                // @ts-ignore
                public static getDefault(): javax.net.SocketFactory
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
                public abstract getDefaultCipherSuites(): string[]
                /**
                 * Returns the names of the cipher suites which could be enabled for use
                 * on an SSL connection.  Normally, only a subset of these will actually
                 * be enabled by default, since this list may include cipher suites which
                 * do not meet quality of service requirements for those defaults.  Such
                 * cipher suites are useful in specialized applications.
                 * @see #getDefaultCipherSuites()
                 * @return an array of cipher suite names
                 */
                // @ts-ignore
                public abstract getSupportedCipherSuites(): string[]
                /**
                 * Returns a socket layered over an existing socket connected to the named
                 * host, at the given port.  This constructor can be used when tunneling SSL
                 * through a proxy or when negotiating the use of SSL over an existing
                 * socket. The host and port refer to the logical peer destination.
                 * This socket is configured using the socket options established for
                 * this factory.
                 * @param s the existing socket
                 * @param host the server host
                 * @param port the server port
                 * @param autoClose close the underlying socket when this socket is closed
                 * @return a socket connected to the specified host and port
                 * @throws IOException if an I/O error occurs when creating the socket
                 * @throws NullPointerException if the parameter s is null
                 */
                // @ts-ignore
                public abstract createSocket(s: java.net.Socket, host: java.lang.String | string, port: number /*int*/, autoClose: boolean): java.net.Socket
                /**
                 * Creates a server mode {@link Socket} layered over an
                 * existing connected socket, and is able to read data which has
                 * already been consumed/removed from the {@link Socket}'s
                 * underlying {@link InputStream}.
                 * <p>
                 * This method can be used by a server application that needs to
                 * observe the inbound data but still create valid SSL/TLS
                 * connections: for example, inspection of Server Name Indication
                 * (SNI) extensions (See section 3 of <A
                 * HREF="http://www.ietf.org/rfc/rfc6066.txt">TLS Extensions
                 * (RFC6066)</A>).  Data that has been already removed from the
                 * underlying {@link InputStream} should be loaded into the
                 * {@code consumed} stream before this method is called, perhaps
                 * using a {@link java.io.ByteArrayInputStream}.  When this
                 * {@link Socket} begins handshaking, it will read all of the data in
                 * {@code consumed} until it reaches {@code EOF}, then all further
                 * data is read from the underlying {@link InputStream} as
                 * usual.
                 * <p>
                 * The returned socket is configured using the socket options
                 * established for this factory, and is set to use server mode when
                 * handshaking (see {@link SSLSocket#setUseClientMode(boolean)}).
                 * @param s
                 *          the existing socket
                 * @param consumed
                 *          the consumed inbound network data that has already been
                 *          removed from the existing {#link Socket}
                 *          {@link InputStream}.  This parameter may be
                 *          {@code null} if no data has been removed.
                 * @param autoClose close the underlying socket when this socket is closed.
                 * @return the {#link Socket} compliant with the socket options
                 *          established for this factory
                 * @throws IOException if an I/O error occurs when creating the socket
                 * @throws UnsupportedOperationException if the underlying provider
                 *          does not implement the operation
                 * @throws NullPointerException if {#code s} is {@code null}
                 * @since 1.8
                 */
                // @ts-ignore
                public createSocket(s: java.net.Socket, consumed: java.io.InputStream, autoClose: boolean): java.net.Socket
            }
        }
    }
}
