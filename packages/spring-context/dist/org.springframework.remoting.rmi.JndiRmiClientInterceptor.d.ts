declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace rmi {
                /**
                 * {@link org.aopalliance.intercept.MethodInterceptor} for accessing RMI services
                 * from JNDI. Typically used for RMI-IIOP but can also be used for EJB home objects
                 * (for example, a Stateful Session Bean home). In contrast to a plain JNDI lookup,
                 * this accessor also performs narrowing through PortableRemoteObject.
                 * <p>With conventional RMI services, this invoker is typically used with the RMI
                 * service interface. Alternatively, this invoker can also proxy a remote RMI service
                 * with a matching non-RMI business interface, i.e. an interface that mirrors the RMI
                 * service methods but does not declare RemoteExceptions. In the latter case,
                 * RemoteExceptions thrown by the RMI stub will automatically get converted to
                 * Spring's unchecked RemoteAccessException.
                 * <p>The JNDI environment can be specified as "jndiEnvironment" property,
                 * or be configured in a {@code jndi.properties} file or as system properties.
                 * For example:
                 * <pre class="code">&lt;property name="jndiEnvironment"&gt;
                 * &lt;props>
                 * &lt;prop key="java.naming.factory.initial"&gt;com.sun.jndi.cosnaming.CNCtxFactory&lt;/prop&gt;
                 * &lt;prop key="java.naming.provider.url"&gt;iiop://localhost:1050&lt;/prop&gt;
                 * &lt;/props&gt;
                 * &lt;/property&gt;</pre>
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see #setJndiTemplate
                 * @see #setJndiEnvironment
                 * @see #setJndiName
                 * @see JndiRmiServiceExporter
                 * @see JndiRmiProxyFactoryBean
                 * @see org.springframework.remoting.RemoteAccessException
                 * @see java.rmi.RemoteException
                 * @see java.rmi.Remote
                 */
                // @ts-ignore
                class JndiRmiClientInterceptor extends org.springframework.jndi.JndiObjectLocator {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the interface of the service to access.
                     * The interface must be suitable for the particular service and remoting tool.
                     * <p>Typically required to be able to create a suitable service proxy,
                     * but can also be optional if the lookup returns a typed stub.
                     */
                    // @ts-ignore
                    setServiceInterface(serviceInterface: java.lang.Class<any>): void
                    /**
                     * Return the interface of the service to access.
                     */
                    // @ts-ignore
                    getServiceInterface(): java.lang.Class<?>
                    /**
                     * Set the RemoteInvocationFactory to use for this accessor.
                     * Default is a {@link DefaultRemoteInvocationFactory}.
                     * <p>A custom invocation factory can add further context information
                     * to the invocation, for example user credentials.
                     */
                    // @ts-ignore
                    setRemoteInvocationFactory(remoteInvocationFactory: org.springframework.remoting.support.RemoteInvocationFactory): void
                    /**
                     * Return the RemoteInvocationFactory used by this accessor.
                     */
                    // @ts-ignore
                    getRemoteInvocationFactory(): org.springframework.remoting.support.RemoteInvocationFactory
                    /**
                     * Set whether to look up the RMI stub on startup. Default is "true".
                     * <p>Can be turned off to allow for late start of the RMI server.
                     * In this case, the RMI stub will be fetched on first access.
                     * @see #setCacheStub
                     */
                    // @ts-ignore
                    setLookupStubOnStartup(lookupStubOnStartup: boolean): void
                    /**
                     * Set whether to cache the RMI stub once it has been located.
                     * Default is "true".
                     * <p>Can be turned off to allow for hot restart of the RMI server.
                     * In this case, the RMI stub will be fetched for each invocation.
                     * @see #setLookupStubOnStartup
                     */
                    // @ts-ignore
                    setCacheStub(cacheStub: boolean): void
                    /**
                     * Set whether to refresh the RMI stub on connect failure.
                     * Default is "false".
                     * <p>Can be turned on to allow for hot restart of the RMI server.
                     * If a cached RMI stub throws an RMI exception that indicates a
                     * remote connect failure, a fresh proxy will be fetched and the
                     * invocation will be retried.
                     * @see java.rmi.ConnectException
                     * @see java.rmi.ConnectIOException
                     * @see java.rmi.NoSuchObjectException
                     */
                    // @ts-ignore
                    setRefreshStubOnConnectFailure(refreshStubOnConnectFailure: boolean): void
                    /**
                     * Set whether to expose the JNDI environment context for all access to the target
                     * RMI stub, i.e. for all method invocations on the exposed object reference.
                     * <p>Default is "false", i.e. to only expose the JNDI context for object lookup.
                     * Switch this flag to "true" in order to expose the JNDI environment (including
                     * the authorization context) for each RMI invocation, as needed by WebLogic
                     * for RMI stubs with authorization requirements.
                     */
                    // @ts-ignore
                    setExposeAccessContext(exposeAccessContext: boolean): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Fetches the RMI stub on startup, if necessary.
                     * @throws RemoteLookupFailureException if RMI stub creation failed
                     * @see #setLookupStubOnStartup
                     * @see #lookupStub
                     */
                    // @ts-ignore
                    prepare(): void
                    /**
                     * Create the RMI stub, typically by looking it up.
                     * <p>Called on interceptor initialization if "cacheStub" is "true";
                     * else called for each invocation by {@link #getStub()}.
                     * <p>The default implementation retrieves the service from the
                     * JNDI environment. This can be overridden in subclasses.
                     * @return the RMI stub to store in this interceptor
                     * @throws RemoteLookupFailureException if RMI stub creation failed
                     * @see #setCacheStub
                     * @see #lookup
                     */
                    // @ts-ignore
                    lookupStub(): java.lang.Object
                    /**
                     * Return the RMI stub to use. Called for each invocation.
                     * <p>The default implementation returns the stub created on initialization,
                     * if any. Else, it invokes {@link #lookupStub} to get a new stub for
                     * each invocation. This can be overridden in subclasses, for example in
                     * order to cache a stub for a given amount of time before recreating it,
                     * or to test the stub whether it is still alive.
                     * @return the RMI stub to use for an invocation
                     * @throws NamingException if stub creation failed
                     * @throws RemoteLookupFailureException if RMI stub creation failed
                     */
                    // @ts-ignore
                    getStub(): java.lang.Object
                    /**
                     * Fetches an RMI stub and delegates to {@link #doInvoke}.
                     * If configured to refresh on connect failure, it will call
                     * {@link #refreshAndRetry} on corresponding RMI exceptions.
                     * @see #getStub
                     * @see #doInvoke
                     * @see #refreshAndRetry
                     * @see java.rmi.ConnectException
                     * @see java.rmi.ConnectIOException
                     * @see java.rmi.NoSuchObjectException
                     */
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Determine whether the given RMI exception indicates a connect failure.
                     * <p>The default implementation delegates to
                     * {@link RmiClientInterceptorUtils#isConnectFailure}.
                     * @param ex the RMI exception to check
                     * @return whether the exception should be treated as connect failure
                     */
                    // @ts-ignore
                    isConnectFailure(ex: java.rmi.RemoteException): boolean
                    /**
                     * Refresh the RMI stub and retry the given invocation.
                     * Called by invoke on connect failure.
                     * @param invocation the AOP method invocation
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     * @see #invoke
                     */
                    // @ts-ignore
                    refreshAndRetry(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Perform the given invocation on the given RMI stub.
                     * @param invocation the AOP method invocation
                     * @param stub the RMI stub to invoke
                     * @return the invocation result, if any
                     * @throws Throwable in case of invocation failure
                     */
                    // @ts-ignore
                    doInvoke(invocation: MethodInvocation, stub: any): java.lang.Object
                    /**
                     * Apply the given AOP method invocation to the given {@link RmiInvocationHandler}.
                     * <p>The default implementation delegates to {@link #createRemoteInvocation}.
                     * @param methodInvocation the current AOP method invocation
                     * @param invocationHandler the RmiInvocationHandler to apply the invocation to
                     * @return the invocation result
                     * @throws RemoteException in case of communication errors
                     * @throws NoSuchMethodException if the method name could not be resolved
                     * @throws IllegalAccessException if the method could not be accessed
                     * @throws InvocationTargetException if the method invocation resulted in an exception
                     * @see org.springframework.remoting.support.RemoteInvocation
                     */
                    // @ts-ignore
                    doInvoke(methodInvocation: MethodInvocation, invocationHandler: org.springframework.remoting.rmi.RmiInvocationHandler): java.lang.Object
                    /**
                     * Create a new RemoteInvocation object for the given AOP method invocation.
                     * <p>The default implementation delegates to the configured
                     * {@link #setRemoteInvocationFactory RemoteInvocationFactory}.
                     * This can be overridden in subclasses in order to provide custom RemoteInvocation
                     * subclasses, containing additional invocation parameters (e.g. user credentials).
                     * <p>Note that it is preferable to build a custom RemoteInvocationFactory
                     * as a reusable strategy, instead of overriding this method.
                     * @param methodInvocation the current AOP method invocation
                     * @return the RemoteInvocation object
                     * @see RemoteInvocationFactory#createRemoteInvocation
                     */
                    // @ts-ignore
                    createRemoteInvocation(methodInvocation: MethodInvocation): org.springframework.remoting.support.RemoteInvocation
                }
            }
        }
    }
}
