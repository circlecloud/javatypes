declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace httpinvoker {
                /**
                 * {@link FactoryBean} for HTTP invoker proxies. Exposes the proxied service
                 * for use as a bean reference, using the specified service interface.
                 * <p>The service URL must be an HTTP URL exposing an HTTP invoker service.
                 * Optionally, a codebase URL can be specified for on-demand dynamic code download
                 * from a remote location. For details, see HttpInvokerClientInterceptor docs.
                 * <p>Serializes remote invocation objects and deserializes remote invocation
                 * result objects. Uses Java serialization just like RMI, but provides the
                 * same ease of setup as Caucho's HTTP-based Hessian protocol.
                 * <p><b>HTTP invoker is the recommended protocol for Java-to-Java remoting.</b>
                 * It is more powerful and more extensible than Hessian, at the expense of
                 * being tied to Java. Nevertheless, it is as easy to set up as Hessian,
                 * which is its main advantage compared to RMI.
                 * <p><b>WARNING: Be aware of vulnerabilities due to unsafe Java deserialization:
                 * Manipulated input streams could lead to unwanted code execution on the server
                 * during the deserialization step. As a consequence, do not expose HTTP invoker
                 * endpoints to untrusted clients but rather just between your own services.</b>
                 * In general, we strongly recommend any other message format (e.g. JSON) instead.
                 * @author Juergen Hoeller
                 * @since 1.1
                 * @see #setServiceInterface
                 * @see #setServiceUrl
                 * @see #setCodebaseUrl
                 * @see HttpInvokerClientInterceptor
                 * @see HttpInvokerServiceExporter
                 * @see org.springframework.remoting.rmi.RmiProxyFactoryBean
                 * @see org.springframework.remoting.caucho.HessianProxyFactoryBean
                 */
                // @ts-ignore
                class HttpInvokerProxyFactoryBean extends org.springframework.remoting.httpinvoker.HttpInvokerClientInterceptor {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    afterPropertiesSet(): void
                    // @ts-ignore
                    getObject(): java.lang.Object
                    // @ts-ignore
                    getObjectType(): java.lang.Class<?>
                    // @ts-ignore
                    isSingleton(): boolean
                }
            }
        }
    }
}
