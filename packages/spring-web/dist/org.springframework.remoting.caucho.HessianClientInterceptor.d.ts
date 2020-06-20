declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace caucho {
                /**
                 * {@link org.aopalliance.intercept.MethodInterceptor} for accessing a Hessian service.
                 * Supports authentication via username and password.
                 * The service URL must be an HTTP URL exposing a Hessian service.
                 * <p>Hessian is a slim, binary RPC protocol.
                 * For information on Hessian, see the
                 * <a href="http://hessian.caucho.com">Hessian website</a>
                 * <b>Note: As of Spring 4.0, this client requires Hessian 4.0 or above.</b>
                 * <p>Note: There is no requirement for services accessed with this proxy factory
                 * to have been exported using Spring's {@link HessianServiceExporter}, as there is
                 * no special handling involved. As a consequence, you can also access services that
                 * have been exported using Caucho's {@link com.caucho.hessian.server.HessianServlet}.
                 * @author Juergen Hoeller
                 * @since 29.09.2003
                 * @see #setServiceInterface
                 * @see #setServiceUrl
                 * @see #setUsername
                 * @see #setPassword
                 * @see HessianServiceExporter
                 * @see HessianProxyFactoryBean
                 * @see com.caucho.hessian.client.HessianProxyFactory
                 * @see com.caucho.hessian.server.HessianServlet
                 */
                // @ts-ignore
                class HessianClientInterceptor extends UrlBasedRemoteAccessor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the HessianProxyFactory instance to use.
                     * If not specified, a default HessianProxyFactory will be created.
                     * <p>Allows to use an externally configured factory instance,
                     * in particular a custom HessianProxyFactory subclass.
                     */
                    // @ts-ignore
                    setProxyFactory(proxyFactory: HessianProxyFactory): void
                    /**
                     * Specify the Hessian SerializerFactory to use.
                     * <p>This will typically be passed in as an inner bean definition
                     * of type {@code com.caucho.hessian.io.SerializerFactory},
                     * with custom bean property values applied.
                     */
                    // @ts-ignore
                    setSerializerFactory(serializerFactory: SerializerFactory): void
                    /**
                     * Set whether to send the Java collection type for each serialized
                     * collection. Default is "true".
                     */
                    // @ts-ignore
                    setSendCollectionType(sendCollectionType: boolean): void
                    /**
                     * Set whether to allow non-serializable types as Hessian arguments
                     * and return values. Default is "true".
                     */
                    // @ts-ignore
                    setAllowNonSerializable(allowNonSerializable: boolean): void
                    /**
                     * Set whether overloaded methods should be enabled for remote invocations.
                     * Default is "false".
                     * @see com.caucho.hessian.client.HessianProxyFactory#setOverloadEnabled
                     */
                    // @ts-ignore
                    setOverloadEnabled(overloadEnabled: boolean): void
                    /**
                     * Set the username that this factory should use to access the remote service.
                     * Default is none.
                     * <p>The username will be sent by Hessian via HTTP Basic Authentication.
                     * @see com.caucho.hessian.client.HessianProxyFactory#setUser
                     */
                    // @ts-ignore
                    setUsername(username: string): void
                    /**
                     * Set the password that this factory should use to access the remote service.
                     * Default is none.
                     * <p>The password will be sent by Hessian via HTTP Basic Authentication.
                     * @see com.caucho.hessian.client.HessianProxyFactory#setPassword
                     */
                    // @ts-ignore
                    setPassword(password: string): void
                    /**
                     * Set whether Hessian's debug mode should be enabled.
                     * Default is "false".
                     * @see com.caucho.hessian.client.HessianProxyFactory#setDebug
                     */
                    // @ts-ignore
                    setDebug(debug: boolean): void
                    /**
                     * Set whether to use a chunked post for sending a Hessian request.
                     * @see com.caucho.hessian.client.HessianProxyFactory#setChunkedPost
                     */
                    // @ts-ignore
                    setChunkedPost(chunkedPost: boolean): void
                    /**
                     * Specify a custom HessianConnectionFactory to use for the Hessian client.
                     */
                    // @ts-ignore
                    setConnectionFactory(connectionFactory: HessianConnectionFactory): void
                    /**
                     * Set the socket connect timeout to use for the Hessian client.
                     * @see com.caucho.hessian.client.HessianProxyFactory#setConnectTimeout
                     */
                    // @ts-ignore
                    setConnectTimeout(timeout: number /*long*/): void
                    /**
                     * Set the timeout to use when waiting for a reply from the Hessian service.
                     * @see com.caucho.hessian.client.HessianProxyFactory#setReadTimeout
                     */
                    // @ts-ignore
                    setReadTimeout(timeout: number /*long*/): void
                    /**
                     * Set whether version 2 of the Hessian protocol should be used for
                     * parsing requests and replies. Default is "false".
                     * @see com.caucho.hessian.client.HessianProxyFactory#setHessian2Request
                     */
                    // @ts-ignore
                    setHessian2(hessian2: boolean): void
                    /**
                     * Set whether version 2 of the Hessian protocol should be used for
                     * parsing requests. Default is "false".
                     * @see com.caucho.hessian.client.HessianProxyFactory#setHessian2Request
                     */
                    // @ts-ignore
                    setHessian2Request(hessian2: boolean): void
                    /**
                     * Set whether version 2 of the Hessian protocol should be used for
                     * parsing replies. Default is "false".
                     * @see com.caucho.hessian.client.HessianProxyFactory#setHessian2Reply
                     */
                    // @ts-ignore
                    setHessian2Reply(hessian2: boolean): void
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Initialize the Hessian proxy for this interceptor.
                     * @throws RemoteLookupFailureException if the service URL is invalid
                     */
                    // @ts-ignore
                    prepare(): void
                    /**
                     * Create the Hessian proxy that is wrapped by this interceptor.
                     * @param proxyFactory the proxy factory to use
                     * @return the Hessian proxy
                     * @throws MalformedURLException if thrown by the proxy factory
                     * @see com.caucho.hessian.client.HessianProxyFactory#create
                     */
                    // @ts-ignore
                    createHessianProxy(proxyFactory: HessianProxyFactory): java.lang.Object
                    // @ts-ignore
                    invoke(invocation: MethodInvocation): java.lang.Object
                    /**
                     * Convert the given Hessian access exception to an appropriate
                     * Spring RemoteAccessException.
                     * @param ex the exception to convert
                     * @return the RemoteAccessException to throw
                     */
                    // @ts-ignore
                    convertHessianAccessException(ex: Error): RemoteAccessException
                }
            }
        }
    }
}
