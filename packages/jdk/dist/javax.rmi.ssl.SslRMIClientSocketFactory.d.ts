declare namespace javax {
    namespace rmi {
        namespace ssl {
            /**
             * <p>An <code>SslRMIClientSocketFactory</code> instance is used by the RMI
             * runtime in order to obtain client sockets for RMI calls via SSL.</p>
             * <p>This class implements <code>RMIClientSocketFactory</code> over
             * the Secure Sockets Layer (SSL) or Transport Layer Security (TLS)
             * protocols.</p>
             * <p>This class creates SSL sockets using the default
             * <code>SSLSocketFactory</code> (see {@link
             * SSLSocketFactory#getDefault}).  All instances of this class are
             * functionally equivalent.  In particular, they all share the same
             * truststore, and the same keystore when client authentication is
             * required by the server.  This behavior can be modified in
             * subclasses by overriding the {@link #createSocket(String,int)}
             * method; in that case, {@link #equals(Object) equals} and {@link
             * #hashCode() hashCode} may also need to be overridden.</p>
             * <p>If the system property
             * <code>javax.rmi.ssl.client.enabledCipherSuites</code> is specified,
             * the {@link #createSocket(String,int)} method will call {@link
             * SSLSocket#setEnabledCipherSuites(String[])} before returning the
             * socket.  The value of this system property is a string that is a
             * comma-separated list of SSL/TLS cipher suites to enable.</p>
             * <p>If the system property
             * <code>javax.rmi.ssl.client.enabledProtocols</code> is specified,
             * the {@link #createSocket(String,int)} method will call {@link
             * SSLSocket#setEnabledProtocols(String[])} before returning the
             * socket.  The value of this system property is a string that is a
             * comma-separated list of SSL/TLS protocol versions to enable.</p>
             * @see javax.net.ssl.SSLSocketFactory
             * @see javax.rmi.ssl.SslRMIServerSocketFactory
             * @since 1.5
             */
            // @ts-ignore
            class SslRMIClientSocketFactory extends java.lang.Object implements java.rmi.server.RMIClientSocketFactory, java.io.Serializable {
                /**
                 * <p>Creates a new <code>SslRMIClientSocketFactory</code>.</p>
                 */
                // @ts-ignore
                constructor()
                /**
                 * <p>Creates an SSL socket.</p>
                 * <p>If the system property
                 * <code>javax.rmi.ssl.client.enabledCipherSuites</code> is
                 * specified, this method will call {@link
                 * SSLSocket#setEnabledCipherSuites(String[])} before returning
                 * the socket. The value of this system property is a string that
                 * is a comma-separated list of SSL/TLS cipher suites to
                 * enable.</p>
                 * <p>If the system property
                 * <code>javax.rmi.ssl.client.enabledProtocols</code> is
                 * specified, this method will call {@link
                 * SSLSocket#setEnabledProtocols(String[])} before returning the
                 * socket. The value of this system property is a string that is a
                 * comma-separated list of SSL/TLS protocol versions to
                 * enable.</p>
                 */
                // @ts-ignore
                public createSocket(host: java.lang.String | string, port: number /*int*/): java.net.Socket
                /**
                 * <p>Indicates whether some other object is "equal to" this one.</p>
                 * <p>Because all instances of this class are functionally equivalent
                 * (they all use the default
                 * <code>SSLSocketFactory</code>), this method simply returns
                 * <code>this.getClass().equals(obj.getClass())</code>.</p>
                 * <p>A subclass should override this method (as well
                 * as {@link #hashCode()}) if its instances are not all
                 * functionally equivalent.</p>
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * <p>Returns a hash code value for this
                 * <code>SslRMIClientSocketFactory</code>.</p>
                 * @return a hash code value for this
                 *  <code>SslRMIClientSocketFactory</code>.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
            }
        }
    }
}
