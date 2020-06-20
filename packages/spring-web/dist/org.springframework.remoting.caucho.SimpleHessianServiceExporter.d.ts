declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace caucho {
                /**
                 * HTTP request handler that exports the specified service bean as
                 * Hessian service endpoint, accessible via a Hessian proxy.
                 * Designed for Sun's JRE 1.6 HTTP server, implementing the
                 * {@link com.sun.net.httpserver.HttpHandler} interface.
                 * <p>Hessian is a slim, binary RPC protocol.
                 * For information on Hessian, see the
                 * <a href="http://hessian.caucho.com">Hessian website</a>.
                 * <b>Note: As of Spring 4.0, this exporter requires Hessian 4.0 or above.</b>
                 * <p>Hessian services exported with this class can be accessed by
                 * any Hessian client, as there isn't any special handling involved.
                 * @author Juergen Hoeller
                 * @since 2.5.1
                 * @see org.springframework.remoting.caucho.HessianClientInterceptor
                 * @see org.springframework.remoting.caucho.HessianProxyFactoryBean
                 * @deprecated as of Spring Framework 5.1, in favor of {#link HessianServiceExporter}
                 */
                // @ts-ignore
                class SimpleHessianServiceExporter extends org.springframework.remoting.caucho.HessianExporter implements com.sun.net.httpserver.HttpHandler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Processes the incoming Hessian request and creates a Hessian response.
                     */
                    // @ts-ignore
                    handle(exchange: com.sun.net.httpserver.HttpExchange): void
                }
            }
        }
    }
}
