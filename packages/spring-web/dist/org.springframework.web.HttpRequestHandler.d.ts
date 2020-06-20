declare namespace org {
    namespace springframework {
        namespace web {
            /**
             * Plain handler interface for components that process HTTP requests,
             * analogous to a Servlet. Only declares {@link javax.servlet.ServletException}
             * and {@link java.io.IOException}, to allow for usage within any
             * {@link javax.servlet.http.HttpServlet}. This interface is essentially the
             * direct equivalent of an HttpServlet, reduced to a central handle method.
             * <p>The easiest way to expose an HttpRequestHandler bean in Spring style
             * is to define it in Spring's root web application context and define
             * an {@link org.springframework.web.context.support.HttpRequestHandlerServlet}
             * in {@code web.xml}, pointing to the target HttpRequestHandler bean
             * through its {@code servlet-name} which needs to match the target bean name.
             * <p>Supported as a handler type within Spring's
             * {@link org.springframework.web.servlet.DispatcherServlet}, being able
             * to interact with the dispatcher's advanced mapping and interception
             * facilities. This is the recommended way of exposing an HttpRequestHandler,
             * while keeping the handler implementations free of direct dependencies
             * on a DispatcherServlet environment.
             * <p>Typically implemented to generate binary responses directly,
             * with no separate view resource involved. This differentiates it from a
             * {@link org.springframework.web.servlet.mvc.Controller} within Spring's Web MVC
             * framework. The lack of a {@link org.springframework.web.servlet.ModelAndView}
             * return value gives a clearer signature to callers other than the
             * DispatcherServlet, indicating that there will never be a view to render.
             * <p>As of Spring 2.0, Spring's HTTP-based remote exporters, such as
             * {@link org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter}
             * and {@link org.springframework.remoting.caucho.HessianServiceExporter},
             * implement this interface rather than the more extensive Controller interface,
             * for minimal dependencies on Spring-specific web infrastructure.
             * <p>Note that HttpRequestHandlers may optionally implement the
             * {@link org.springframework.web.servlet.mvc.LastModified} interface,
             * just like Controllers can, <i>provided that they run within Spring's
             * DispatcherServlet</i>. However, this is usually not necessary, since
             * HttpRequestHandlers typically only support POST requests to begin with.
             * Alternatively, a handler may implement the "If-Modified-Since" HTTP
             * header processing manually within its {@code handle} method.
             * @author Juergen Hoeller
             * @since 2.0
             * @see org.springframework.web.context.support.HttpRequestHandlerServlet
             * @see org.springframework.web.servlet.DispatcherServlet
             * @see org.springframework.web.servlet.ModelAndView
             * @see org.springframework.web.servlet.mvc.Controller
             * @see org.springframework.web.servlet.mvc.LastModified
             * @see org.springframework.web.servlet.mvc.HttpRequestHandlerAdapter
             * @see org.springframework.remoting.httpinvoker.HttpInvokerServiceExporter
             * @see org.springframework.remoting.caucho.HessianServiceExporter
             */
            // @ts-ignore
            interface HttpRequestHandler {
                /**
                 * Process the given request, generating a response.
                 * @param request current HTTP request
                 * @param response current HTTP response
                 * @throws ServletException in case of general errors
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                handleRequest(request: HttpServletRequest, response: HttpServletResponse): void
            }
        }
    }
}
