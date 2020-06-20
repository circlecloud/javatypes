declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                /**
                 * <p>A connection to a remote RMI connector.  Usually, such
                 * connections are made using {@link
                 * javax.management.remote.JMXConnectorFactory JMXConnectorFactory}.
                 * However, specialized applications can use this class directly, for
                 * example with an {@link RMIServer} stub obtained without going
                 * through JNDI.</p>
                 * @since 1.5
                 */
                // @ts-ignore
                class RMIConnector extends java.lang.Object implements javax.management.remote.JMXConnector, java.io.Serializable, javax.management.remote.JMXAddressable {
                    /**
                     * <p>Constructs an <code>RMIConnector</code> that will connect
                     * the RMI connector server with the given address.</p>
                     * <p>The address can refer directly to the connector server,
                     * using one of the following syntaxes:</p>
                     * <pre>
                     * service:jmx:rmi://<em>[host[:port]]</em>/stub/<em>encoded-stub</em>
                     * service:jmx:iiop://<em>[host[:port]]</em>/ior/<em>encoded-IOR</em>
                     * </pre>
                     * <p>(Here, the square brackets <code>[]</code> are not part of the
                     * address but indicate that the host and port are optional.)</p>
                     * <p>The address can instead indicate where to find an RMI stub
                     * through JNDI, using one of the following syntaxes:</p>
                     * <pre>
                     * service:jmx:rmi://<em>[host[:port]]</em>/jndi/<em>jndi-name</em>
                     * service:jmx:iiop://<em>[host[:port]]</em>/jndi/<em>jndi-name</em>
                     * </pre>
                     * <p>An implementation may also recognize additional address
                     * syntaxes, for example:</p>
                     * <pre>
                     * service:jmx:iiop://<em>[host[:port]]</em>/stub/<em>encoded-stub</em>
                     * </pre>
                     * @param url the address of the RMI connector server.
                     * @param environment additional attributes specifying how to make
                     *  the connection.  For JNDI-based addresses, these attributes can
                     *  usefully include JNDI attributes recognized by {#link
                     *  InitialContext#InitialContext(Hashtable) InitialContext}.  This
                     *  parameter can be null, which is equivalent to an empty Map.
                     * @exception IllegalArgumentException if <code>url</code>
                     *  is null.
                     */
                    // @ts-ignore
                    constructor(url: javax.management.remote.JMXServiceURL, environment: java.util.Map<java.lang.String, any>)
                    /**
                     * <p>Constructs an <code>RMIConnector</code> using the given RMI stub.
                     * @param rmiServer an RMI stub representing the RMI connector server.
                     * @param environment additional attributes specifying how to make
                     *  the connection.  This parameter can be null, which is
                     *  equivalent to an empty Map.
                     * @exception IllegalArgumentException if <code>rmiServer</code>
                     *  is null.
                     */
                    // @ts-ignore
                    constructor(rmiServer: javax.management.remote.rmi.RMIServer, environment: java.util.Map<java.lang.String, any>)
                    /**
                     * <p>Returns a string representation of this object.  In general,
                     * the <code>toString</code> method returns a string that
                     * "textually represents" this object. The result should be a
                     * concise but informative representation that is easy for a
                     * person to read.</p>
                     * @return a String representation of this object.
                     */
                    // @ts-ignore
                    toString(): java.lang.String
                    /**
                     * <p>The address of this connector.</p>
                     * @return the address of this connector, or null if it
                     *  does not have one.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getAddress(): javax.management.remote.JMXServiceURL
                    /**
                     * @throws IOException if the connection could not be made because of a
                     *    communication problem, or in the case of the {#code iiop} protocol,
                     *    that RMI/IIOP is not supported
                     */
                    // @ts-ignore
                    connect(): void
                    /**
                     * @throws IOException if the connection could not be made because of a
                     *    communication problem, or in the case of the {#code iiop} protocol,
                     *    that RMI/IIOP is not supported
                     */
                    // @ts-ignore
                    connect(environment: java.util.Map<java.lang.String, any>): void
                    // @ts-ignore
                    getConnectionId(): java.lang.String
                    // @ts-ignore
                    getMBeanServerConnection(): javax.management.MBeanServerConnection
                    // @ts-ignore
                    getMBeanServerConnection(delegationSubject: javax.security.auth.Subject): javax.management.MBeanServerConnection
                    // @ts-ignore
                    addConnectionNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void
                    // @ts-ignore
                    removeConnectionNotificationListener(listener: javax.management.NotificationListener): void
                    // @ts-ignore
                    removeConnectionNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void
                    // @ts-ignore
                    close(): void
                }
            }
        }
    }
}
