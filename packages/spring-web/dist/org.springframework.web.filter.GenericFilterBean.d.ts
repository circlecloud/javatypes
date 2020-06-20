declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Simple base implementation of {@link javax.servlet.Filter} which treats
                 * its config parameters ({@code init-param} entries within the
                 * {@code filter} tag in {@code web.xml}) as bean properties.
                 * <p>A handy superclass for any type of filter. Type conversion of config
                 * parameters is automatic, with the corresponding setter method getting
                 * invoked with the converted value. It is also possible for subclasses to
                 * specify required properties. Parameters without matching bean property
                 * setter will simply be ignored.
                 * <p>This filter leaves actual filtering to subclasses, which have to
                 * implement the {@link javax.servlet.Filter#doFilter} method.
                 * <p>This generic filter base class has no dependency on the Spring
                 * {@link org.springframework.context.ApplicationContext} concept.
                 * Filters usually don't load their own context but rather access service
                 * beans from the Spring root application context, accessible via the
                 * filter's {@link #getServletContext() ServletContext} (see
                 * {@link org.springframework.web.context.support.WebApplicationContextUtils}).
                 * @author Juergen Hoeller
                 * @since 06.12.2003
                 * @see #addRequiredProperty
                 * @see #initFilterBean
                 * @see #doFilter
                 */
                // @ts-ignore
                class GenericFilterBean extends java.lang.Object implements org.springframework.web.context.ServletContextAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Stores the bean name as defined in the Spring bean factory.
                     * <p>Only relevant in case of initialization as bean, to have a name as
                     * fallback to the filter name usually provided by a FilterConfig instance.
                     * @see org.springframework.beans.factory.BeanNameAware
                     * @see #getFilterName()
                     */
                    // @ts-ignore
                    setBeanName(beanName: string): void
                    /**
                     * Set the {@code Environment} that this filter runs in.
                     * <p>Any environment set here overrides the {@link StandardServletEnvironment}
                     * provided by default.
                     * <p>This {@code Environment} object is used only for resolving placeholders in
                     * resource paths passed into init-parameters for this filter. If no init-params are
                     * used, this {@code Environment} can be essentially ignored.
                     */
                    // @ts-ignore
                    setEnvironment(environment: Environment): void
                    /**
                     * Return the {@link Environment} associated with this filter.
                     * <p>If none specified, a default environment will be initialized via
                     * {@link #createEnvironment()}.
                     * @since 4.3.9
                     */
                    // @ts-ignore
                    getEnvironment(): Environment
                    /**
                     * Create and return a new {@link StandardServletEnvironment}.
                     * <p>Subclasses may override this in order to configure the environment or
                     * specialize the environment type returned.
                     * @since 4.3.9
                     */
                    // @ts-ignore
                    createEnvironment(): Environment
                    /**
                     * Stores the ServletContext that the bean factory runs in.
                     * <p>Only relevant in case of initialization as bean, to have a ServletContext
                     * as fallback to the context usually provided by a FilterConfig instance.
                     * @see org.springframework.web.context.ServletContextAware
                     * @see #getServletContext()
                     */
                    // @ts-ignore
                    setServletContext(servletContext: ServletContext): void
                    /**
                     * Calls the {@code initFilterBean()} method that might
                     * contain custom initialization of a subclass.
                     * <p>Only relevant in case of initialization as bean, where the
                     * standard {@code init(FilterConfig)} method won't be called.
                     * @see #initFilterBean()
                     * @see #init(javax.servlet.FilterConfig)
                     */
                    // @ts-ignore
                    afterPropertiesSet(): void
                    /**
                     * Subclasses may override this to perform custom filter shutdown.
                     * <p>Note: This method will be called from standard filter destruction
                     * as well as filter bean destruction in a Spring application context.
                     * <p>This default implementation is empty.
                     */
                    // @ts-ignore
                    destroy(): void
                    /**
                     * Subclasses can invoke this method to specify that this property
                     * (which must match a JavaBean property they expose) is mandatory,
                     * and must be supplied as a config parameter. This should be called
                     * from the constructor of a subclass.
                     * <p>This method is only relevant in case of traditional initialization
                     * driven by a FilterConfig instance.
                     * @param property name of the required property
                     */
                    // @ts-ignore
                    addRequiredProperty(property: string): void
                    /**
                     * Standard way of initializing this filter.
                     * Map config parameters onto bean properties of this filter, and
                     * invoke subclass initialization.
                     * @param filterConfig the configuration for this filter
                     * @throws ServletException if bean properties are invalid (or required
                     *  properties are missing), or if subclass initialization fails.
                     * @see #initFilterBean
                     */
                    // @ts-ignore
                    init(filterConfig: FilterConfig): void
                    /**
                     * Initialize the BeanWrapper for this GenericFilterBean,
                     * possibly with custom editors.
                     * <p>This default implementation is empty.
                     * @param bw the BeanWrapper to initialize
                     * @throws BeansException if thrown by BeanWrapper methods
                     * @see org.springframework.beans.BeanWrapper#registerCustomEditor
                     */
                    // @ts-ignore
                    initBeanWrapper(bw: BeanWrapper): void
                    /**
                     * Subclasses may override this to perform custom initialization.
                     * All bean properties of this filter will have been set before this
                     * method is invoked.
                     * <p>Note: This method will be called from standard filter initialization
                     * as well as filter bean initialization in a Spring application context.
                     * Filter name and ServletContext will be available in both cases.
                     * <p>This default implementation is empty.
                     * @throws ServletException if subclass initialization fails
                     * @see #getFilterName()
                     * @see #getServletContext()
                     */
                    // @ts-ignore
                    initFilterBean(): void
                    /**
                     * Make the FilterConfig of this filter available, if any.
                     * Analogous to GenericServlet's {@code getServletConfig()}.
                     * <p>Public to resemble the {@code getFilterConfig()} method
                     * of the Servlet Filter version that shipped with WebLogic 6.1.
                     * @return the FilterConfig instance, or {#code null} if none available
                     * @see javax.servlet.GenericServlet#getServletConfig()
                     */
                    // @ts-ignore
                    getFilterConfig(): FilterConfig
                    /**
                     * Make the name of this filter available to subclasses.
                     * Analogous to GenericServlet's {@code getServletName()}.
                     * <p>Takes the FilterConfig's filter name by default.
                     * If initialized as bean in a Spring application context,
                     * it falls back to the bean name as defined in the bean factory.
                     * @return the filter name, or {#code null} if none available
                     * @see javax.servlet.GenericServlet#getServletName()
                     * @see javax.servlet.FilterConfig#getFilterName()
                     * @see #setBeanName
                     */
                    // @ts-ignore
                    getFilterName(): java.lang.String
                    /**
                     * Make the ServletContext of this filter available to subclasses.
                     * Analogous to GenericServlet's {@code getServletContext()}.
                     * <p>Takes the FilterConfig's ServletContext by default.
                     * If initialized as bean in a Spring application context,
                     * it falls back to the ServletContext that the bean factory runs in.
                     * @return the ServletContext instance
                     * @throws IllegalStateException if no ServletContext is available
                     * @see javax.servlet.GenericServlet#getServletContext()
                     * @see javax.servlet.FilterConfig#getServletContext()
                     * @see #setServletContext
                     */
                    // @ts-ignore
                    getServletContext(): ServletContext
                }
            }
        }
    }
}
