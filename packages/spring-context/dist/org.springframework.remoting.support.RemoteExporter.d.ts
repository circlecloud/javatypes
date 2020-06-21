declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace support {
                /**
                 * Abstract base class for classes that export a remote service.
                 * Provides "service" and "serviceInterface" bean properties.
                 * <p>Note that the service interface being used will show some signs of
                 * remotability, like the granularity of method calls that it offers.
                 * Furthermore, it has to have serializable arguments etc.
                 * @author Juergen Hoeller
                 * @since 26.12.2003
                 */
                // @ts-ignore
                abstract class RemoteExporter extends org.springframework.remoting.support.RemotingSupport {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the service to export.
                     * Typically populated via a bean reference.
                     */
                    // @ts-ignore
                    public setService(service: java.lang.Object | any): void
                    /**
                     * Return the service to export.
                     */
                    // @ts-ignore
                    public getService(): any
                    /**
                     * Set the interface of the service to export.
                     * The interface must be suitable for the particular service and remoting strategy.
                     */
                    // @ts-ignore
                    public setServiceInterface(serviceInterface: java.lang.Class<any>): void
                    /**
                     * Return the interface of the service to export.
                     */
                    // @ts-ignore
                    public getServiceInterface(): java.lang.Class<any>
                    /**
                     * Set whether to register a RemoteInvocationTraceInterceptor for exported
                     * services. Only applied when a subclass uses {@code getProxyForService}
                     * for creating the proxy to expose.
                     * <p>Default is "true". RemoteInvocationTraceInterceptor's most important value
                     * is that it logs exception stacktraces on the server, before propagating an
                     * exception to the client. Note that RemoteInvocationTraceInterceptor will <i>not</i>
                     * be registered by default if the "interceptors" property has been specified.
                     * @see #setInterceptors
                     * @see #getProxyForService
                     * @see RemoteInvocationTraceInterceptor
                     */
                    // @ts-ignore
                    public setRegisterTraceInterceptor(registerTraceInterceptor: boolean): void
                    /**
                     * Set additional interceptors (or advisors) to be applied before the
                     * remote endpoint, e.g. a PerformanceMonitorInterceptor.
                     * <p>You may specify any AOP Alliance MethodInterceptors or other
                     * Spring AOP Advices, as well as Spring AOP Advisors.
                     * @see #getProxyForService
                     * @see org.springframework.aop.interceptor.PerformanceMonitorInterceptor
                     */
                    // @ts-ignore
                    public setInterceptors(interceptors: java.lang.Object[] | any[]): void
                    /**
                     * Check whether the service reference has been set.
                     * @see #setService
                     */
                    // @ts-ignore
                    checkService(): void
                    /**
                     * Check whether a service reference has been set,
                     * and whether it matches the specified service.
                     * @see #setServiceInterface
                     * @see #setService
                     */
                    // @ts-ignore
                    checkServiceInterface(): void
                    /**
                     * Get a proxy for the given service object, implementing the specified
                     * service interface.
                     * <p>Used to export a proxy that does not expose any internals but just
                     * a specific interface intended for remote access. Furthermore, a
                     * {@link RemoteInvocationTraceInterceptor} will be registered (by default).
                     * @return the proxy
                     * @see #setServiceInterface
                     * @see #setRegisterTraceInterceptor
                     * @see RemoteInvocationTraceInterceptor
                     */
                    // @ts-ignore
                    getProxyForService(): any
                    /**
                     * Return a short name for this exporter.
                     * Used for tracing of remote invocations.
                     * <p>Default is the unqualified class name (without package).
                     * Can be overridden in subclasses.
                     * @see #getProxyForService
                     * @see RemoteInvocationTraceInterceptor
                     * @see org.springframework.util.ClassUtils#getShortName
                     */
                    // @ts-ignore
                    getExporterName(): string
                }
            }
        }
    }
}
