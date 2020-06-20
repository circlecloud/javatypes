declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Servlet Filter that exposes the request to the current thread,
                 * through both {@link org.springframework.context.i18n.LocaleContextHolder} and
                 * {@link RequestContextHolder}. To be registered as filter in {@code web.xml}.
                 * <p>Alternatively, Spring's {@link org.springframework.web.context.request.RequestContextListener}
                 * and Spring's {@link org.springframework.web.servlet.DispatcherServlet} also expose
                 * the same request context to the current thread.
                 * <p>This filter is mainly for use with third-party servlets, e.g. the JSF FacesServlet.
                 * Within Spring's own web support, DispatcherServlet's processing is perfectly sufficient.
                 * @author Juergen Hoeller
                 * @author Rod Johnson
                 * @author Rossen Stoyanchev
                 * @since 2.0
                 * @see org.springframework.context.i18n.LocaleContextHolder
                 * @see org.springframework.web.context.request.RequestContextHolder
                 * @see org.springframework.web.context.request.RequestContextListener
                 * @see org.springframework.web.servlet.DispatcherServlet
                 */
                // @ts-ignore
                class RequestContextFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    // @ts-ignore
                    constructor()
                    /**
                     * Set whether to expose the LocaleContext and RequestAttributes as inheritable
                     * for child threads (using an {@link java.lang.InheritableThreadLocal}).
                     * <p>Default is "false", to avoid side effects on spawned background threads.
                     * Switch this to "true" to enable inheritance for custom child threads which
                     * are spawned during request processing and only used for this request
                     * (that is, ending after their initial task, without reuse of the thread).
                     * <p><b>WARNING:</b> Do not use inheritance for child threads if you are
                     * accessing a thread pool which is configured to potentially add new threads
                     * on demand (e.g. a JDK {@link java.util.concurrent.ThreadPoolExecutor}),
                     * since this will expose the inherited context to such a pooled thread.
                     */
                    // @ts-ignore
                    setThreadContextInheritable(threadContextInheritable: boolean): void
                    /**
                     * Returns "false" so that the filter may set up the request context in each
                     * asynchronously dispatched thread.
                     */
                    // @ts-ignore
                    shouldNotFilterAsyncDispatch(): boolean
                    /**
                     * Returns "false" so that the filter may set up the request context in an
                     * error dispatch.
                     */
                    // @ts-ignore
                    shouldNotFilterErrorDispatch(): boolean
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                }
            }
        }
    }
}
