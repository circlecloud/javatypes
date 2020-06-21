declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace access {
                /**
                 * {@link org.aopalliance.intercept.MethodInterceptor} that routes calls to an
                 * MBean running on the supplied {@code MBeanServerConnection}.
                 * Works for both local and remote {@code MBeanServerConnection}s.
                 * <p>By default, the {@code MBeanClientInterceptor} will connect to the
                 * {@code MBeanServer} and cache MBean metadata at startup. This can
                 * be undesirable when running against a remote {@code MBeanServer}
                 * that may not be running when the application starts. Through setting the
                 * {@link #setConnectOnStartup(boolean) connectOnStartup} property to "false",
                 * you can defer this process until the first invocation against the proxy.
                 * <p>This functionality is usually used through {@link MBeanProxyFactoryBean}.
                 * See the javadoc of that class for more information.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see MBeanProxyFactoryBean
                 * @see #setConnectOnStartup
                 */
                // @ts-ignore
                class MBeanClientInterceptor extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set the {@code MBeanServerConnection} used to connect to the
                     * MBean which all invocations are routed to.
                     */
                    // @ts-ignore
                    public setServer(server: javax.management.MBeanServerConnection): void
                    /**
                     * Set the service URL of the remote {@code MBeanServer}.
                     */
                    // @ts-ignore
                    public setServiceUrl(url: java.lang.String | string): void
                    /**
                     * Specify the environment for the JMX connector.
                     * @see javax.management.remote.JMXConnectorFactory#connect(javax.management.remote.JMXServiceURL, java.util.Map)
                     */
                    // @ts-ignore
                    public setEnvironment(environment: java.util.Map<java.lang.String | string, any>): void
                    /**
                     * Allow Map access to the environment to be set for the connector,
                     * with the option to add or override specific entries.
                     * <p>Useful for specifying entries directly, for example via
                     * "environment[myKey]". This is particularly useful for
                     * adding or overriding entries in child bean definitions.
                     */
                    // @ts-ignore
                    public getEnvironment(): java.util.Map<java.lang.String | string, any>
                    /**
                     * Set the agent id of the {@code MBeanServer} to locate.
                     * <p>Default is none. If specified, this will result in an
                     * attempt being made to locate the attendant MBeanServer, unless
                     * the {@link #setServiceUrl "serviceUrl"} property has been set.
                     * @see javax.management.MBeanServerFactory#findMBeanServer(String)
                     *  <p>Specifying the empty String indicates the platform MBeanServer.
                     */
                    // @ts-ignore
                    public setAgentId(agentId: java.lang.String | string): void
                    /**
                     * Set whether or not the proxy should connect to the {@code MBeanServer}
                     * at creation time ("true") or the first time it is invoked ("false").
                     * Default is "true".
                     */
                    // @ts-ignore
                    public setConnectOnStartup(connectOnStartup: boolean): void
                    /**
                     * Set whether to refresh the MBeanServer connection on connect failure.
                     * Default is "false".
                     * <p>Can be turned on to allow for hot restart of the JMX server,
                     * automatically reconnecting and retrying in case of an IOException.
                     */
                    // @ts-ignore
                    public setRefreshOnConnectFailure(refreshOnConnectFailure: boolean): void
                    /**
                     * Set the {@code ObjectName} of the MBean which calls are routed to,
                     * as {@code ObjectName} instance or as {@code String}.
                     */
                    // @ts-ignore
                    public setObjectName(objectName: java.lang.Object | any): void
                    /**
                     * Set whether to use strict casing for attributes. Enabled by default.
                     * <p>When using strict casing, a JavaBean property with a getter such as
                     * {@code getFoo()} translates to an attribute called {@code Foo}.
                     * With strict casing disabled, {@code getFoo()} would translate to just
                     * {@code foo}.
                     */
                    // @ts-ignore
                    public setUseStrictCasing(useStrictCasing: boolean): void
                    /**
                     * Set the management interface of the target MBean, exposing bean property
                     * setters and getters for MBean attributes and conventional Java methods
                     * for MBean operations.
                     */
                    // @ts-ignore
                    public setManagementInterface(managementInterface: java.lang.Class<any>): void
                    /**
                     * Return the management interface of the target MBean,
                     * or {@code null} if none specified.
                     */
                    // @ts-ignore
                    getManagementInterface(): java.lang.Class<any>
                    // @ts-ignore
                    public setBeanClassLoader(beanClassLoader: java.lang.ClassLoader): void
                    /**
                     * Prepares the {@code MBeanServerConnection} if the "connectOnStartup"
                     * is turned on (which it is by default).
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    /**
                     * Ensures that an {@code MBeanServerConnection} is configured and attempts
                     * to detect a local connection if one is not supplied.
                     */
                    // @ts-ignore
                    public prepare(): void
                    /**
                     * Return whether this client interceptor has already been prepared,
                     * i.e. has already looked up the server and cached all metadata.
                     */
                    // @ts-ignore
                    isPrepared(): boolean
                    /**
                     * Route the invocation to the configured managed resource..
                     * @param invocation the {#code MethodInvocation} to re-route
                     * @return the value returned as a result of the re-routed invocation
                     * @throws Throwable an invocation error propagated to the user
                     * @see #doInvoke
                     * @see #handleConnectFailure
                     */
                    // @ts-ignore
                    public invoke(invocation: MethodInvocation): any
                    /**
                     * Refresh the connection and retry the MBean invocation if possible.
                     * <p>If not configured to refresh on connect failure, this method
                     * simply rethrows the original exception.
                     * @param invocation the invocation that failed
                     * @param ex the exception raised on remote invocation
                     * @return the result value of the new invocation, if succeeded
                     * @throws Throwable an exception raised by the new invocation,
                     *  if it failed as well
                     * @see #setRefreshOnConnectFailure
                     * @see #doInvoke
                     */
                    // @ts-ignore
                    handleConnectFailure(invocation: MethodInvocation, ex: java.lang.Exception): any
                    /**
                     * Route the invocation to the configured managed resource. Correctly routes JavaBean property
                     * access to {@code MBeanServerConnection.get/setAttribute} and method invocation to
                     * {@code MBeanServerConnection.invoke}.
                     * @param invocation the {#code MethodInvocation} to re-route
                     * @return the value returned as a result of the re-routed invocation
                     * @throws Throwable an invocation error propagated to the user
                     */
                    // @ts-ignore
                    doInvoke(invocation: MethodInvocation): any
                    /**
                     * Convert the given result object (from attribute access or operation invocation)
                     * to the specified target class for returning from the proxy method.
                     * @param result the result object as returned by the {#code MBeanServer}
                     * @param parameter the method parameter of the proxy method that's been invoked
                     * @return the converted result object, or the passed-in object if no conversion
                     *  is necessary
                     */
                    // @ts-ignore
                    convertResultValueIfNecessary(result: java.lang.Object | any, parameter: MethodParameter): any
                    // @ts-ignore
                    public destroy(): void
                }
            }
        }
    }
}
