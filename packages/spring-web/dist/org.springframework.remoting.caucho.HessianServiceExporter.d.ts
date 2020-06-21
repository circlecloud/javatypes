declare namespace org {
    namespace springframework {
        namespace remoting {
            namespace caucho {
                /**
                 * Servlet-API-based HTTP request handler that exports the specified service bean
                 * as Hessian service endpoint, accessible via a Hessian proxy.
                 * <p>Hessian is a slim, binary RPC protocol.
                 * For information on Hessian, see the
                 * <a href="http://hessian.caucho.com">Hessian website</a>.
                 * <b>Note: As of Spring 4.0, this exporter requires Hessian 4.0 or above.</b>
                 * <p>Hessian services exported with this class can be accessed by
                 * any Hessian client, as there isn't any special handling involved.
                 * @author Juergen Hoeller
                 * @since 13.05.2003
                 * @see HessianClientInterceptor
                 * @see HessianProxyFactoryBean
                 * @see org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter
                 * @see org.springframework.remoting.rmi.RmiServiceExporter
                 */
                // @ts-ignore
                class HessianServiceExporter extends org.springframework.remoting.caucho.HessianExporter implements org.springframework.web.HttpRequestHandler {
                    // @ts-ignore
                    constructor()
                    /**
                     * Processes the incoming Hessian request and creates a Hessian response.
                     */
                    // @ts-ignore
                    public handleRequest(request: HttpServletRequest, response: HttpServletResponse): void
                }
            }
        }
    }
}
