declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Servlet listener that exposes the request to the current thread,
                     * through both {@link org.springframework.context.i18n.LocaleContextHolder} and
                     * {@link RequestContextHolder}. To be registered as listener in {@code web.xml}.
                     * <p>Alternatively, Spring's {@link org.springframework.web.filter.RequestContextFilter}
                     * and Spring's {@link org.springframework.web.servlet.DispatcherServlet} also expose
                     * the same request context to the current thread. In contrast to this listener,
                     * advanced options are available there (e.g. "threadContextInheritable").
                     * <p>This listener is mainly for use with third-party servlets, e.g. the JSF FacesServlet.
                     * Within Spring's own web support, DispatcherServlet's processing is perfectly sufficient.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see javax.servlet.ServletRequestListener
                     * @see org.springframework.context.i18n.LocaleContextHolder
                     * @see RequestContextHolder
                     * @see org.springframework.web.filter.RequestContextFilter
                     * @see org.springframework.web.servlet.DispatcherServlet
                     */
                    // @ts-ignore
                    class RequestContextListener extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public requestInitialized(requestEvent: ServletRequestEvent): void
                        // @ts-ignore
                        public requestDestroyed(requestEvent: ServletRequestEvent): void
                    }
                }
            }
        }
    }
}
