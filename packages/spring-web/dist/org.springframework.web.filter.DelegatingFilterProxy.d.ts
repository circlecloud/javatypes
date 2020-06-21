declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Proxy for a standard Servlet Filter, delegating to a Spring-managed bean that
                 * implements the Filter interface. Supports a "targetBeanName" filter init-param
                 * in {@code web.xml}, specifying the name of the target bean in the Spring
                 * application context.
                 * <p>{@code web.xml} will usually contain a {@code DelegatingFilterProxy} definition,
                 * with the specified {@code filter-name} corresponding to a bean name in
                 * Spring's root application context. All calls to the filter proxy will then
                 * be delegated to that bean in the Spring context, which is required to implement
                 * the standard Servlet Filter interface.
                 * <p>This approach is particularly useful for Filter implementation with complex
                 * setup needs, allowing to apply the full Spring bean definition machinery to
                 * Filter instances. Alternatively, consider standard Filter setup in combination
                 * with looking up service beans from the Spring root application context.
                 * <p><b>NOTE:</b> The lifecycle methods defined by the Servlet Filter interface
                 * will by default <i>not</i> be delegated to the target bean, relying on the
                 * Spring application context to manage the lifecycle of that bean. Specifying
                 * the "targetFilterLifecycle" filter init-param as "true" will enforce invocation
                 * of the {@code Filter.init} and {@code Filter.destroy} lifecycle methods
                 * on the target bean, letting the servlet container manage the filter lifecycle.
                 * <p>As of Spring 3.1, {@code DelegatingFilterProxy} has been updated to optionally accept
                 * constructor parameters when using Servlet 3.0's instance-based filter registration
                 * methods, usually in conjunction with Spring 3.1's
                 * {@link org.springframework.web.WebApplicationInitializer} SPI. These constructors allow
                 * for providing the delegate Filter bean directly, or providing the application context
                 * and bean name to fetch, avoiding the need to look up the application context from the
                 * ServletContext.
                 * <p>This class was originally inspired by Spring Security's {@code FilterToBeanProxy}
                 * class, written by Ben Alex.
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @author Chris Beams
                 * @since 1.2
                 * @see #setTargetBeanName
                 * @see #setTargetFilterLifecycle
                 * @see javax.servlet.Filter#doFilter
                 * @see javax.servlet.Filter#init
                 * @see javax.servlet.Filter#destroy
                 * @see #DelegatingFilterProxy(Filter)
                 * @see #DelegatingFilterProxy(String)
                 * @see #DelegatingFilterProxy(String, WebApplicationContext)
                 * @see javax.servlet.ServletContext#addFilter(String, Filter)
                 * @see org.springframework.web.WebApplicationInitializer
                 */
                // @ts-ignore
                class DelegatingFilterProxy extends org.springframework.web.filter.GenericFilterBean {
                    /**
                     * Create a new {@code DelegatingFilterProxy}. For traditional (pre-Servlet 3.0) use
                     * in {@code web.xml}.
                     * @see #setTargetBeanName(String)
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code DelegatingFilterProxy} with the given {@link Filter} delegate.
                     * Bypasses entirely the need for interacting with a Spring application context,
                     * specifying the {@linkplain #setTargetBeanName target bean name}, etc.
                     * <p>For use in Servlet 3.0+ environments where instance-based registration of
                     * filters is supported.
                     * @param delegate the {#code Filter} instance that this proxy will delegate to and
                     *  manage the lifecycle for (must not be {@code null}).
                     * @see #doFilter(ServletRequest, ServletResponse, FilterChain)
                     * @see #invokeDelegate(Filter, ServletRequest, ServletResponse, FilterChain)
                     * @see #destroy()
                     * @see #setEnvironment(org.springframework.core.env.Environment)
                     */
                    // @ts-ignore
                    constructor(delegate: Filter)
                    /**
                     * Create a new {@code DelegatingFilterProxy} that will retrieve the named target
                     * bean from the given Spring {@code WebApplicationContext}.
                     * <p>For use in Servlet 3.0+ environments where instance-based registration of
                     * filters is supported.
                     * <p>The target bean must implement the standard Servlet Filter interface.
                     * <p>The given {@code WebApplicationContext} may or may not be refreshed when passed
                     * in. If it has not, and if the context implements {@link ConfigurableApplicationContext},
                     * a {@link ConfigurableApplicationContext#refresh() refresh()} will be attempted before
                     * retrieving the named target bean.
                     * <p>This proxy's {@code Environment} will be inherited from the given
                     * {@code WebApplicationContext}.
                     * @param targetBeanName name of the target filter bean in the Spring application
                     *  context (must not be {#code null}).
                     * @param wac the application context from which the target filter will be retrieved;
                     *  if {#code null}, an application context will be looked up from {@code ServletContext}
                     *  as a fallback.
                     * @see #findWebApplicationContext()
                     * @see #setEnvironment(org.springframework.core.env.Environment)
                     */
                    // @ts-ignore
                    constructor(targetBeanName: java.lang.String | string, wac: org.springframework.web.context.WebApplicationContext)
                    /**
                     * Set the name of the ServletContext attribute which should be used to retrieve the
                     * {@link WebApplicationContext} from which to load the delegate {@link Filter} bean.
                     */
                    // @ts-ignore
                    public setContextAttribute(contextAttribute: java.lang.String | string): void
                    /**
                     * Return the name of the ServletContext attribute which should be used to retrieve the
                     * {@link WebApplicationContext} from which to load the delegate {@link Filter} bean.
                     */
                    // @ts-ignore
                    public getContextAttribute(): string
                    /**
                     * Set the name of the target bean in the Spring application context.
                     * The target bean must implement the standard Servlet Filter interface.
                     * <p>By default, the {@code filter-name} as specified for the
                     * DelegatingFilterProxy in {@code web.xml} will be used.
                     */
                    // @ts-ignore
                    public setTargetBeanName(targetBeanName: java.lang.String | string): void
                    /**
                     * Return the name of the target bean in the Spring application context.
                     */
                    // @ts-ignore
                    getTargetBeanName(): string
                    /**
                     * Set whether to invoke the {@code Filter.init} and
                     * {@code Filter.destroy} lifecycle methods on the target bean.
                     * <p>Default is "false"; target beans usually rely on the Spring application
                     * context for managing their lifecycle. Setting this flag to "true" means
                     * that the servlet container will control the lifecycle of the target
                     * Filter, with this proxy delegating the corresponding calls.
                     */
                    // @ts-ignore
                    public setTargetFilterLifecycle(targetFilterLifecycle: boolean): void
                    /**
                     * Return whether to invoke the {@code Filter.init} and
                     * {@code Filter.destroy} lifecycle methods on the target bean.
                     */
                    // @ts-ignore
                    isTargetFilterLifecycle(): boolean
                    // @ts-ignore
                    initFilterBean(): void
                    // @ts-ignore
                    public doFilter(request: ServletRequest, response: ServletResponse, filterChain: FilterChain): void
                    // @ts-ignore
                    public destroy(): void
                    /**
                     * Return the {@code WebApplicationContext} passed in at construction time, if available.
                     * Otherwise, attempt to retrieve a {@code WebApplicationContext} from the
                     * {@code ServletContext} attribute with the {@linkplain #setContextAttribute
                     * configured name} if set. Otherwise look up a {@code WebApplicationContext} under
                     * the well-known "root" application context attribute. The
                     * {@code WebApplicationContext} must have already been loaded and stored in the
                     * {@code ServletContext} before this filter gets initialized (or invoked).
                     * <p>Subclasses may override this method to provide a different
                     * {@code WebApplicationContext} retrieval strategy.
                     * @return the {#code WebApplicationContext} for this proxy, or {@code null} if not found
                     * @see #DelegatingFilterProxy(String, WebApplicationContext)
                     * @see #getContextAttribute()
                     * @see WebApplicationContextUtils#getWebApplicationContext(javax.servlet.ServletContext)
                     * @see WebApplicationContext#ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE
                     */
                    // @ts-ignore
                    findWebApplicationContext(): org.springframework.web.context.WebApplicationContext
                    /**
                     * Initialize the Filter delegate, defined as bean the given Spring
                     * application context.
                     * <p>The default implementation fetches the bean from the application context
                     * and calls the standard {@code Filter.init} method on it, passing
                     * in the FilterConfig of this Filter proxy.
                     * @param wac the root application context
                     * @return the initialized delegate Filter
                     * @throws ServletException if thrown by the Filter
                     * @see #getTargetBeanName()
                     * @see #isTargetFilterLifecycle()
                     * @see #getFilterConfig()
                     * @see javax.servlet.Filter#init(javax.servlet.FilterConfig)
                     */
                    // @ts-ignore
                    initDelegate(wac: org.springframework.web.context.WebApplicationContext): Filter
                    /**
                     * Actually invoke the delegate Filter with the given request and response.
                     * @param delegate the delegate Filter
                     * @param request the current HTTP request
                     * @param response the current HTTP response
                     * @param filterChain the current FilterChain
                     * @throws ServletException if thrown by the Filter
                     * @throws IOException if thrown by the Filter
                     */
                    // @ts-ignore
                    invokeDelegate(delegate: Filter, request: ServletRequest, response: ServletResponse, filterChain: FilterChain): void
                    /**
                     * Destroy the Filter delegate.
                     * Default implementation simply calls {@code Filter.destroy} on it.
                     * @param delegate the Filter delegate (never {#code null})
                     * @see #isTargetFilterLifecycle()
                     * @see javax.servlet.Filter#destroy()
                     */
                    // @ts-ignore
                    destroyDelegate(delegate: Filter): void
                }
            }
        }
    }
}
