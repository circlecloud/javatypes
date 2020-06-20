declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>Factory to create JMX API connector clients.  There
             * are no instances of this class.</p>
             * <p>Connections are usually made using the {@link
             * #connect(JMXServiceURL) connect} method of this class.  More
             * advanced applications can separate the creation of the connector
             * client, using {@link #newJMXConnector(JMXServiceURL, Map)
             * newJMXConnector} and the establishment of the connection itself, using
             * {@link JMXConnector#connect(Map)}.</p>
             * <p>Each client is created by an instance of {@link
             * JMXConnectorProvider}.  This instance is found as follows.  Suppose
             * the given {@link JMXServiceURL} looks like
             * <code>"service:jmx:<em>protocol</em>:<em>remainder</em>"</code>.
             * Then the factory will attempt to find the appropriate {@link
             * JMXConnectorProvider} for <code><em>protocol</em></code>.  Each
             * occurrence of the character <code>+</code> or <code>-</code> in
             * <code><em>protocol</em></code> is replaced by <code>.</code> or
             * <code>_</code>, respectively.</p>
             * <p>A <em>provider package list</em> is searched for as follows:</p>
             * <ol>
             * <li>If the <code>environment</code> parameter to {@link
             * #newJMXConnector(JMXServiceURL, Map) newJMXConnector} contains the
             * key <code>jmx.remote.protocol.provider.pkgs</code> then the
             * associated value is the provider package list.
             * <li>Otherwise, if the system property
             * <code>jmx.remote.protocol.provider.pkgs</code> exists, then its value
             * is the provider package list.
             * <li>Otherwise, there is no provider package list.
             * </ol>
             * <p>The provider package list is a string that is interpreted as a
             * list of non-empty Java package names separated by vertical bars
             * (<code>|</code>).  If the string is empty, then so is the provider
             * package list.  If the provider package list is not a String, or if
             * it contains an element that is an empty string, a {@link
             * JMXProviderException} is thrown.</p>
             * <p>If the provider package list exists and is not empty, then for
             * each element <code><em>pkg</em></code> of the list, the factory
             * will attempt to load the class
             * <blockquote>
             * <code><em>pkg</em>.<em>protocol</em>.ClientProvider</code>
             * </blockquote>
             * <p>If the <code>environment</code> parameter to {@link
             * #newJMXConnector(JMXServiceURL, Map) newJMXConnector} contains the
             * key <code>jmx.remote.protocol.provider.class.loader</code> then the
             * associated value is the class loader to use to load the provider.
             * If the associated value is not an instance of {@link
             * java.lang.ClassLoader}, an {@link
             * java.lang.IllegalArgumentException} is thrown.</p>
             * <p>If the <code>jmx.remote.protocol.provider.class.loader</code>
             * key is not present in the <code>environment</code> parameter, the
             * calling thread's context class loader is used.</p>
             * <p>If the attempt to load this class produces a {@link
             * ClassNotFoundException}, the search for a handler continues with
             * the next element of the list.</p>
             * <p>Otherwise, a problem with the provider found is signalled by a
             * {@link JMXProviderException} whose {@link
             * JMXProviderException#getCause() <em>cause</em>} indicates the underlying
             * exception, as follows:</p>
             * <ul>
             * <li>if the attempt to load the class produces an exception other
             * than <code>ClassNotFoundException</code>, that is the
             * <em>cause</em>;
             * <li>if {@link Class#newInstance()} for the class produces an
             * exception, that is the <em>cause</em>.
             * </ul>
             * <p>If no provider is found by the above steps, including the
             * default case where there is no provider package list, then the
             * implementation will use its own provider for
             * <code><em>protocol</em></code>, or it will throw a
             * <code>MalformedURLException</code> if there is none.  An
             * implementation may choose to find providers by other means.  For
             * example, it may support the <a
             * href="{@docRoot}/../technotes/guides/jar/jar.html#Service Provider">
             * JAR conventions for service providers</a>, where the service
             * interface is <code>JMXConnectorProvider</code>.</p>
             * <p>Every implementation must support the RMI connector protocol with
             * the default RMI transport, specified with string <code>rmi</code>.
             * An implementation may optionally support the RMI connector protocol
             * with the RMI/IIOP transport, specified with the string
             * <code>iiop</code>.</p>
             * <p>Once a provider is found, the result of the
             * <code>newJMXConnector</code> method is the result of calling {@link
             * JMXConnectorProvider#newJMXConnector(JMXServiceURL,Map) newJMXConnector}
             * on the provider.</p>
             * <p>The <code>Map</code> parameter passed to the
             * <code>JMXConnectorProvider</code> is a new read-only
             * <code>Map</code> that contains all the entries that were in the
             * <code>environment</code> parameter to {@link
             * #newJMXConnector(JMXServiceURL,Map)
             * JMXConnectorFactory.newJMXConnector}, if there was one.
             * Additionally, if the
             * <code>jmx.remote.protocol.provider.class.loader</code> key is not
             * present in the <code>environment</code> parameter, it is added to
             * the new read-only <code>Map</code>.  The associated value is the
             * calling thread's context class loader.</p>
             * @since 1.5
             */
            // @ts-ignore
            class JMXConnectorFactory extends java.lang.Object {
                /**
                 * <p>Name of the attribute that specifies the default class
                 * loader. This class loader is used to deserialize return values and
                 * exceptions from remote <code>MBeanServerConnection</code>
                 * calls.  The value associated with this attribute is an instance
                 * of {@link ClassLoader}.</p>
                 */
                // @ts-ignore
                readonly DEFAULT_CLASS_LOADER: string
                /**
                 * <p>Name of the attribute that specifies the provider packages
                 * that are consulted when looking for the handler for a protocol.
                 * The value associated with this attribute is a string with
                 * package names separated by vertical bars (<code>|</code>).</p>
                 */
                // @ts-ignore
                readonly PROTOCOL_PROVIDER_PACKAGES: string
                /**
                 * <p>Name of the attribute that specifies the class
                 * loader for loading protocol providers.
                 * The value associated with this attribute is an instance
                 * of {@link ClassLoader}.</p>
                 */
                // @ts-ignore
                readonly PROTOCOL_PROVIDER_CLASS_LOADER: string
                /**
                 * <p>Creates a connection to the connector server at the given
                 * address.</p>
                 * <p>This method is equivalent to {@link
                 * #connect(JMXServiceURL,Map) connect(serviceURL, null)}.</p>
                 * @param serviceURL the address of the connector server to
                 *  connect to.
                 * @return a <code>JMXConnector</code> whose {#link
                 *  JMXConnector#connect connect} method has been called.
                 * @exception NullPointerException if <code>serviceURL</code> is null.
                 * @exception IOException if the connector client or the
                 *  connection cannot be made because of a communication problem.
                 * @exception SecurityException if the connection cannot be made
                 *  for security reasons.
                 */
                // @ts-ignore
                connect(serviceURL: javax.management.remote.JMXServiceURL): javax.management.remote.JMXConnector
                /**
                 * <p>Creates a connection to the connector server at the given
                 * address.</p>
                 * <p>This method is equivalent to:</p>
                 * <pre>
                 * JMXConnector conn = JMXConnectorFactory.newJMXConnector(serviceURL,
                 * environment);
                 * conn.connect(environment);
                 * </pre>
                 * @param serviceURL the address of the connector server to connect to.
                 * @param environment a set of attributes to determine how the
                 *  connection is made.  This parameter can be null.  Keys in this
                 *  map must be Strings.  The appropriate type of each associated
                 *  value depends on the attribute.  The contents of
                 *  <code>environment</code> are not changed by this call.
                 * @return a <code>JMXConnector</code> representing the newly-made
                 *  connection.  Each successful call to this method produces a
                 *  different object.
                 * @exception NullPointerException if <code>serviceURL</code> is null.
                 * @exception IOException if the connector client or the
                 *  connection cannot be made because of a communication problem.
                 * @exception SecurityException if the connection cannot be made
                 *  for security reasons.
                 */
                // @ts-ignore
                connect(serviceURL: javax.management.remote.JMXServiceURL, environment: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
                /**
                 * <p>Creates a connector client for the connector server at the
                 * given address.  The resultant client is not connected until its
                 * {@link JMXConnector#connect(Map) connect} method is called.</p>
                 * @param serviceURL the address of the connector server to connect to.
                 * @param environment a set of attributes to determine how the
                 *  connection is made.  This parameter can be null.  Keys in this
                 *  map must be Strings.  The appropriate type of each associated
                 *  value depends on the attribute.  The contents of
                 *  <code>environment</code> are not changed by this call.
                 * @return a <code>JMXConnector</code> representing the new
                 *  connector client.  Each successful call to this method produces
                 *  a different object.
                 * @exception NullPointerException if <code>serviceURL</code> is null.
                 * @exception IOException if the connector client cannot be made
                 *  because of a communication problem.
                 * @exception MalformedURLException if there is no provider for the
                 *  protocol in <code>serviceURL</code>.
                 * @exception JMXProviderException if there is a provider for the
                 *  protocol in <code>serviceURL</code> but it cannot be used for
                 *  some reason.
                 */
                // @ts-ignore
                newJMXConnector(serviceURL: javax.management.remote.JMXServiceURL, environment: java.util.Map<java.lang.String, any>): javax.management.remote.JMXConnector
            }
        }
    }
}
