declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace access {
                /**
                 * Creates a proxy to a managed resource running either locally or remotely.
                 * The "proxyInterface" property defines the interface that the generated
                 * proxy is supposed to implement. This interface should define methods and
                 * properties that correspond to operations and attributes in the management
                 * interface of the resource you wish to proxy.
                 * <p>There is no need for the managed resource to implement the proxy interface,
                 * although you may find it convenient to do. It is not required that every
                 * operation and attribute in the management interface is matched by a
                 * corresponding property or method in the proxy interface.
                 * <p>Attempting to invoke or access any method or property on the proxy
                 * interface that does not correspond to the management interface will lead
                 * to an {@code InvalidInvocationException}.
                 * @author Rob Harrop
                 * @author Juergen Hoeller
                 * @since 1.2
                 * @see MBeanClientInterceptor
                 * @see InvalidInvocationException
                 */
                // @ts-ignore
                class MBeanProxyFactoryBean extends org.springframework.jmx.access.MBeanClientInterceptor {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set the interface that the generated proxy will implement.
                     * <p>This will usually be a management interface that matches the target MBean,
                     * exposing bean property setters and getters for MBean attributes and
                     * conventional Java methods for MBean operations.
                     * @see #setObjectName
                     */
                    // @ts-ignore
                    public setProxyInterface(proxyInterface: java.lang.Class<any>): void
                    // @ts-ignore
                    public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                    /**
                     * Checks that the {@code proxyInterface} has been specified and then
                     * generates the proxy for the target MBean.
                     */
                    // @ts-ignore
                    public afterPropertiesSet(): void
                    // @ts-ignore
                    public getObject(): any
                    // @ts-ignore
                    public getObjectType(): java.lang.Class<any>
                    // @ts-ignore
                    public isSingleton(): boolean
                }
            }
        }
    }
}
