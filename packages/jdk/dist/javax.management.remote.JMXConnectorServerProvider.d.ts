declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>A provider for creating JMX API connector servers using a given
             * protocol.  Instances of this interface are created by {@link
             * JMXConnectorServerFactory} as part of its {@link
             * JMXConnectorServerFactory#newJMXConnectorServer(JMXServiceURL,Map,MBeanServer)
             * newJMXConnectorServer} method.</p>
             * @since 1.5
             */
            // @ts-ignore
            interface JMXConnectorServerProvider {
                /**
                 * <p>Creates a new connector server at the given address.  Each
                 * successful call to this method produces a different
                 * <code>JMXConnectorServer</code> object.</p>
                 * @param serviceURL the address of the new connector server.  The
                 *  actual address of the new connector server, as returned by its
                 *  {#link JMXConnectorServer#getAddress() getAddress} method, will
                 *  not necessarily be exactly the same.  For example, it might
                 *  include a port number if the original address did not.
                 * @param environment a read-only Map containing named attributes
                 *  to control the new connector server's behavior.  Keys in this
                 *  map must be Strings.  The appropriate type of each associated
                 *  value depends on the attribute.
                 * @param mbeanServer the MBean server that this connector server
                 *  is attached to.  Null if this connector server will be attached
                 *  to an MBean server by being registered in it.
                 * @return a <code>JMXConnectorServer</code> representing the new
                 *  connector server.  Each successful call to this method produces
                 *  a different object.
                 * @exception NullPointerException if <code>serviceURL</code> or
                 *  <code>environment</code> is null.
                 * @exception IOException It is recommended for a provider
                 *  implementation to throw {#code MalformedURLException} if the
                 *  protocol in the {@code serviceURL} is not recognized by this
                 *  provider, {@code JMXProviderException} if this is a provider
                 *  for the protocol in {@code serviceURL} but it cannot be used
                 *  for some reason or any other {@code IOException} if the
                 *  connector server cannot be created.
                 */
                // @ts-ignore
                newJMXConnectorServer(serviceURL: javax.management.remote.JMXServiceURL, environment: java.util.Map<java.lang.String | string, any>, mbeanServer: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
            }
        }
    }
}
