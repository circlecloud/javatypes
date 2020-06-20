declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * Simple HttpServlet that delegates to an {@link HttpRequestHandler} bean defined
                     * in Spring's root web application context. The target bean name must match the
                     * HttpRequestHandlerServlet servlet-name as defined in {@code web.xml}.
                     * <p>This can for example be used to expose a single Spring remote exporter,
                     * such as {@link org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter}
                     * or {@link org.springframework.remoting.caucho.HessianServiceExporter},
                     * per HttpRequestHandlerServlet definition. This is a minimal alternative
                     * to defining remote exporters as beans in a DispatcherServlet context
                     * (with advanced mapping and interception facilities being available there).
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see org.springframework.web.HttpRequestHandler
                     * @see org.springframework.web.servlet.DispatcherServlet
                     */
                    // @ts-ignore
                    class HttpRequestHandlerServlet extends HttpServlet {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        init(): void
                        // @ts-ignore
                        service(request: HttpServletRequest, response: HttpServletResponse): void
                    }
                }
            }
        }
    }
}
