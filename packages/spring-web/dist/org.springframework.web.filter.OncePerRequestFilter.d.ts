declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Filter base class that aims to guarantee a single execution per request
                 * dispatch, on any servlet container. It provides a {@link #doFilterInternal}
                 * method with HttpServletRequest and HttpServletResponse arguments.
                 * <p>As of Servlet 3.0, a filter may be invoked as part of a
                 * {@link javax.servlet.DispatcherType#REQUEST REQUEST} or
                 * {@link javax.servlet.DispatcherType#ASYNC ASYNC} dispatches that occur in
                 * separate threads. A filter can be configured in {@code web.xml} whether it
                 * should be involved in async dispatches. However, in some cases servlet
                 * containers assume different default configuration. Therefore sub-classes can
                 * override the method {@link #shouldNotFilterAsyncDispatch()} to declare
                 * statically if they should indeed be invoked, <em>once</em>, during both types
                 * of dispatches in order to provide thread initialization, logging, security,
                 * and so on. This mechanism complements and does not replace the need to
                 * configure a filter in {@code web.xml} with dispatcher types.
                 * <p>Subclasses may use {@link #isAsyncDispatch(HttpServletRequest)} to
                 * determine when a filter is invoked as part of an async dispatch, and use
                 * {@link #isAsyncStarted(HttpServletRequest)} to determine when the request
                 * has been placed in async mode and therefore the current dispatch won't be
                 * the last one for the given request.
                 * <p>Yet another dispatch type that also occurs in its own thread is
                 * {@link javax.servlet.DispatcherType#ERROR ERROR}. Subclasses can override
                 * {@link #shouldNotFilterErrorDispatch()} if they wish to declare statically
                 * if they should be invoked <em>once</em> during error dispatches.
                 * <p>The {@link #getAlreadyFilteredAttributeName} method determines how to
                 * identify that a request is already filtered. The default implementation is
                 * based on the configured name of the concrete filter instance.
                 * @author Juergen Hoeller
                 * @author Rossen Stoyanchev
                 * @since 06.12.2003
                 */
                // @ts-ignore
                class OncePerRequestFilter extends org.springframework.web.filter.GenericFilterBean {
                    // @ts-ignore
                    constructor()
                    /**
                     * Suffix that gets appended to the filter name for the
                     * "already filtered" request attribute.
                     * @see #getAlreadyFilteredAttributeName
                     */
                    // @ts-ignore
                    readonly ALREADY_FILTERED_SUFFIX: string
                    /**
                     * This {@code doFilter} implementation stores a request attribute for
                     * "already filtered", proceeding without filtering again if the
                     * attribute is already there.
                     * @see #getAlreadyFilteredAttributeName
                     * @see #shouldNotFilter
                     * @see #doFilterInternal
                     */
                    // @ts-ignore
                    doFilter(request: ServletRequest, response: ServletResponse, filterChain: FilterChain): void
                    /**
                     * The dispatcher type {@code javax.servlet.DispatcherType.ASYNC} introduced
                     * in Servlet 3.0 means a filter can be invoked in more than one thread over
                     * the course of a single request. This method returns {@code true} if the
                     * filter is currently executing within an asynchronous dispatch.
                     * @param request the current request
                     * @since 3.2
                     * @see WebAsyncManager#hasConcurrentResult()
                     */
                    // @ts-ignore
                    isAsyncDispatch(request: HttpServletRequest): boolean
                    /**
                     * Whether request processing is in asynchronous mode meaning that the
                     * response will not be committed after the current thread is exited.
                     * @param request the current request
                     * @since 3.2
                     * @see WebAsyncManager#isConcurrentHandlingStarted()
                     */
                    // @ts-ignore
                    isAsyncStarted(request: HttpServletRequest): boolean
                    /**
                     * Return the name of the request attribute that identifies that a request
                     * is already filtered.
                     * <p>The default implementation takes the configured name of the concrete filter
                     * instance and appends ".FILTERED". If the filter is not fully initialized,
                     * it falls back to its class name.
                     * @see #getFilterName
                     * @see #ALREADY_FILTERED_SUFFIX
                     */
                    // @ts-ignore
                    getAlreadyFilteredAttributeName(): java.lang.String
                    /**
                     * Can be overridden in subclasses for custom filtering control,
                     * returning {@code true} to avoid filtering of the given request.
                     * <p>The default implementation always returns {@code false}.
                     * @param request current HTTP request
                     * @return whether the given request should <i>not</i> be filtered
                     * @throws ServletException in case of errors
                     */
                    // @ts-ignore
                    shouldNotFilter(request: HttpServletRequest): boolean
                    /**
                     * The dispatcher type {@code javax.servlet.DispatcherType.ASYNC} introduced
                     * in Servlet 3.0 means a filter can be invoked in more than one thread
                     * over the course of a single request. Some filters only need to filter
                     * the initial thread (e.g. request wrapping) while others may need
                     * to be invoked at least once in each additional thread for example for
                     * setting up thread locals or to perform final processing at the very end.
                     * <p>Note that although a filter can be mapped to handle specific dispatcher
                     * types via {@code web.xml} or in Java through the {@code ServletContext},
                     * servlet containers may enforce different defaults with regards to
                     * dispatcher types. This flag enforces the design intent of the filter.
                     * <p>The default return value is "true", which means the filter will not be
                     * invoked during subsequent async dispatches. If "false", the filter will
                     * be invoked during async dispatches with the same guarantees of being
                     * invoked only once during a request within a single thread.
                     * @since 3.2
                     */
                    // @ts-ignore
                    shouldNotFilterAsyncDispatch(): boolean
                    /**
                     * Whether to filter error dispatches such as when the servlet container
                     * processes and error mapped in {@code web.xml}. The default return value
                     * is "true", which means the filter will not be invoked in case of an error
                     * dispatch.
                     * @since 3.2
                     */
                    // @ts-ignore
                    shouldNotFilterErrorDispatch(): boolean
                    /**
                     * Same contract as for {@code doFilter}, but guaranteed to be
                     * just invoked once per request within a single request thread.
                     * See {@link #shouldNotFilterAsyncDispatch()} for details.
                     * <p>Provides HttpServletRequest and HttpServletResponse arguments instead of the
                     * default ServletRequest and ServletResponse ones.
                     */
                    // @ts-ignore
                    abstract doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                    /**
                     * Typically an ERROR dispatch happens after the REQUEST dispatch completes,
                     * and the filter chain starts anew. On some servers however the ERROR
                     * dispatch may be nested within the REQUEST dispatch, e.g. as a result of
                     * calling {@code sendError} on the response. In that case we are still in
                     * the filter chain, on the same thread, but the request and response have
                     * been switched to the original, unwrapped ones.
                     * <p>Sub-classes may use this method to filter such nested ERROR dispatches
                     * and re-apply wrapping on the request or response. {@code ThreadLocal}
                     * context, if any, should still be active as we are still nested within
                     * the filter chain.
                     * @since 5.1.9
                     */
                    // @ts-ignore
                    doFilterNestedErrorDispatch(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                }
            }
        }
    }
}
