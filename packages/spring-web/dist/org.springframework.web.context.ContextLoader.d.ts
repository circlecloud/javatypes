declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                /**
                 * Performs the actual initialization work for the root application context.
                 * Called by {@link ContextLoaderListener}.
                 * <p>Looks for a {@link #CONTEXT_CLASS_PARAM "contextClass"} parameter at the
                 * {@code web.xml} context-param level to specify the context class type, falling
                 * back to {@link org.springframework.web.context.support.XmlWebApplicationContext}
                 * if not found. With the default ContextLoader implementation, any context class
                 * specified needs to implement the {@link ConfigurableWebApplicationContext} interface.
                 * <p>Processes a {@link #CONFIG_LOCATION_PARAM "contextConfigLocation"} context-param
                 * and passes its value to the context instance, parsing it into potentially multiple
                 * file paths which can be separated by any number of commas and spaces, e.g.
                 * "WEB-INF/applicationContext1.xml, WEB-INF/applicationContext2.xml".
                 * Ant-style path patterns are supported as well, e.g.
                 * "WEB-INF/*Context.xml,WEB-INF/spring*.xml" or "WEB-INF/&#42;&#42;/*Context.xml".
                 * If not explicitly specified, the context implementation is supposed to use a
                 * default location (with XmlWebApplicationContext: "/WEB-INF/applicationContext.xml").
                 * <p>Note: In case of multiple config locations, later bean definitions will
                 * override ones defined in previously loaded files, at least when using one of
                 * Spring's default ApplicationContext implementations. This can be leveraged
                 * to deliberately override certain bean definitions via an extra XML file.
                 * <p>Above and beyond loading the root application context, this class can optionally
                 * load or obtain and hook up a shared parent context to the root application context.
                 * See the {@link #loadParentContext(ServletContext)} method for more information.
                 * <p>As of Spring 3.1, {@code ContextLoader} supports injecting the root web
                 * application context via the {@link #ContextLoader(WebApplicationContext)}
                 * constructor, allowing for programmatic configuration in Servlet 3.0+ environments.
                 * See {@link org.springframework.web.WebApplicationInitializer} for usage examples.
                 * @author Juergen Hoeller
                 * @author Colin Sampaleanu
                 * @author Sam Brannen
                 * @since 17.02.2003
                 * @see ContextLoaderListener
                 * @see ConfigurableWebApplicationContext
                 * @see org.springframework.web.context.support.XmlWebApplicationContext
                 */
                // @ts-ignore
                class ContextLoader extends java.lang.Object {
                    /**
                     * Create a new {@code ContextLoader} that will create a web application context
                     * based on the "contextClass" and "contextConfigLocation" servlet context-params.
                     * See class-level documentation for details on default values for each.
                     * <p>This constructor is typically used when declaring the {@code
                     * ContextLoaderListener} subclass as a {@code <listener>} within {@code web.xml}, as
                     * a no-arg constructor is required.
                     * <p>The created application context will be registered into the ServletContext under
                     * the attribute name {@link WebApplicationContext#ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE}
                     * and subclasses are free to call the {@link #closeWebApplicationContext} method on
                     * container shutdown to close the application context.
                     * @see #ContextLoader(WebApplicationContext)
                     * @see #initWebApplicationContext(ServletContext)
                     * @see #closeWebApplicationContext(ServletContext)
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new {@code ContextLoader} with the given application context. This
                     * constructor is useful in Servlet 3.0+ environments where instance-based
                     * registration of listeners is possible through the {@link ServletContext#addListener}
                     * API.
                     * <p>The context may or may not yet be {@linkplain
                     * ConfigurableApplicationContext#refresh() refreshed}. If it (a) is an implementation
                     * of {@link ConfigurableWebApplicationContext} and (b) has <strong>not</strong>
                     * already been refreshed (the recommended approach), then the following will occur:
                     * <ul>
                     * <li>If the given context has not already been assigned an {@linkplain
                     * ConfigurableApplicationContext#setId id}, one will be assigned to it</li>
                     * <li>{@code ServletContext} and {@code ServletConfig} objects will be delegated to
                     * the application context</li>
                     * <li>{@link #customizeContext} will be called</li>
                     * <li>Any {@link ApplicationContextInitializer ApplicationContextInitializers} specified through the
                     * "contextInitializerClasses" init-param will be applied.</li>
                     * <li>{@link ConfigurableApplicationContext#refresh refresh()} will be called</li>
                     * </ul>
                     * If the context has already been refreshed or does not implement
                     * {@code ConfigurableWebApplicationContext}, none of the above will occur under the
                     * assumption that the user has performed these actions (or not) per his or her
                     * specific needs.
                     * <p>See {@link org.springframework.web.WebApplicationInitializer} for usage examples.
                     * <p>In any case, the given application context will be registered into the
                     * ServletContext under the attribute name {@link
                     * WebApplicationContext#ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE} and subclasses are
                     * free to call the {@link #closeWebApplicationContext} method on container shutdown
                     * to close the application context.
                     * @param context the application context to manage
                     * @see #initWebApplicationContext(ServletContext)
                     * @see #closeWebApplicationContext(ServletContext)
                     */
                    // @ts-ignore
                    constructor(context: org.springframework.web.context.WebApplicationContext)
                    /**
                     * Config param for the root WebApplicationContext id,
                     * to be used as serialization id for the underlying BeanFactory: {@value}.
                     */
                    // @ts-ignore
                    public static readonly CONTEXT_ID_PARAM: java.lang.String | string
                    /**
                     * Name of servlet context parameter (i.e., {@value}) that can specify the
                     * config location for the root context, falling back to the implementation's
                     * default otherwise.
                     * @see org.springframework.web.context.support.XmlWebApplicationContext#DEFAULT_CONFIG_LOCATION
                     */
                    // @ts-ignore
                    public static readonly CONFIG_LOCATION_PARAM: java.lang.String | string
                    /**
                     * Config param for the root WebApplicationContext implementation class to use: {@value}.
                     * @see #determineContextClass(ServletContext)
                     */
                    // @ts-ignore
                    public static readonly CONTEXT_CLASS_PARAM: java.lang.String | string
                    /**
                     * Config param for {@link ApplicationContextInitializer} classes to use
                     * for initializing the root web application context: {@value}.
                     * @see #customizeContext(ServletContext, ConfigurableWebApplicationContext)
                     */
                    // @ts-ignore
                    public static readonly CONTEXT_INITIALIZER_CLASSES_PARAM: java.lang.String | string
                    /**
                     * Config param for global {@link ApplicationContextInitializer} classes to use
                     * for initializing all web application contexts in the current application: {@value}.
                     * @see #customizeContext(ServletContext, ConfigurableWebApplicationContext)
                     */
                    // @ts-ignore
                    public static readonly GLOBAL_INITIALIZER_CLASSES_PARAM: java.lang.String | string
                    /**
                     * Specify which {@link ApplicationContextInitializer} instances should be used
                     * to initialize the application context used by this {@code ContextLoader}.
                     * @since 4.2
                     * @see #configureAndRefreshWebApplicationContext
                     * @see #customizeContext
                     */
                    // @ts-ignore
                    public setContextInitializers(...initializers: object[]): void
                    /**
                     * Initialize Spring's web application context for the given servlet context,
                     * using the application context provided at construction time, or creating a new one
                     * according to the "{@link #CONTEXT_CLASS_PARAM contextClass}" and
                     * "{@link #CONFIG_LOCATION_PARAM contextConfigLocation}" context-params.
                     * @param servletContext current servlet context
                     * @return the new WebApplicationContext
                     * @see #ContextLoader(WebApplicationContext)
                     * @see #CONTEXT_CLASS_PARAM
                     * @see #CONFIG_LOCATION_PARAM
                     */
                    // @ts-ignore
                    public initWebApplicationContext(servletContext: ServletContext): org.springframework.web.context.WebApplicationContext
                    /**
                     * Instantiate the root WebApplicationContext for this loader, either the
                     * default context class or a custom context class if specified.
                     * <p>This implementation expects custom contexts to implement the
                     * {@link ConfigurableWebApplicationContext} interface.
                     * Can be overridden in subclasses.
                     * <p>In addition, {@link #customizeContext} gets called prior to refreshing the
                     * context, allowing subclasses to perform custom modifications to the context.
                     * @param sc current servlet context
                     * @return the root WebApplicationContext
                     * @see ConfigurableWebApplicationContext
                     */
                    // @ts-ignore
                    createWebApplicationContext(sc: ServletContext): org.springframework.web.context.WebApplicationContext
                    /**
                     * Return the WebApplicationContext implementation class to use, either the
                     * default XmlWebApplicationContext or a custom context class if specified.
                     * @param servletContext current servlet context
                     * @return the WebApplicationContext implementation class to use
                     * @see #CONTEXT_CLASS_PARAM
                     * @see org.springframework.web.context.support.XmlWebApplicationContext
                     */
                    // @ts-ignore
                    determineContextClass(servletContext: ServletContext): java.lang.Class<any>
                    // @ts-ignore
                    configureAndRefreshWebApplicationContext(wac: org.springframework.web.context.ConfigurableWebApplicationContext, sc: ServletContext): void
                    /**
                     * Customize the {@link ConfigurableWebApplicationContext} created by this
                     * ContextLoader after config locations have been supplied to the context
                     * but before the context is <em>refreshed</em>.
                     * <p>The default implementation {@linkplain #determineContextInitializerClasses(ServletContext)
                     * determines} what (if any) context initializer classes have been specified through
                     * {@linkplain #CONTEXT_INITIALIZER_CLASSES_PARAM context init parameters} and
                     * {@linkplain ApplicationContextInitializer#initialize invokes each} with the
                     * given web application context.
                     * <p>Any {@code ApplicationContextInitializers} implementing
                     * {@link org.springframework.core.Ordered Ordered} or marked with @{@link
                     * org.springframework.core.annotation.Order Order} will be sorted appropriately.
                     * @param sc the current servlet context
                     * @param wac the newly created application context
                     * @see #CONTEXT_INITIALIZER_CLASSES_PARAM
                     * @see ApplicationContextInitializer#initialize(ConfigurableApplicationContext)
                     */
                    // @ts-ignore
                    customizeContext(sc: ServletContext, wac: org.springframework.web.context.ConfigurableWebApplicationContext): void
                    /**
                     * Return the {@link ApplicationContextInitializer} implementation classes to use
                     * if any have been specified by {@link #CONTEXT_INITIALIZER_CLASSES_PARAM}.
                     * @param servletContext current servlet context
                     * @see #CONTEXT_INITIALIZER_CLASSES_PARAM
                     */
                    // @ts-ignore
                    determineContextInitializerClasses(servletContext: ServletContext): Array<java.lang.Class<object>>
                    /**
                     * Template method with default implementation (which may be overridden by a
                     * subclass), to load or obtain an ApplicationContext instance which will be
                     * used as the parent context of the root WebApplicationContext. If the
                     * return value from the method is null, no parent context is set.
                     * <p>The main reason to load a parent context here is to allow multiple root
                     * web application contexts to all be children of a shared EAR context, or
                     * alternately to also share the same parent context that is visible to
                     * EJBs. For pure web applications, there is usually no need to worry about
                     * having a parent context to the root web application context.
                     * <p>The default implementation simply returns {@code null}, as of 5.0.
                     * @param servletContext current servlet context
                     * @return the parent application context, or {#code null} if none
                     */
                    // @ts-ignore
                    loadParentContext(servletContext: ServletContext): ApplicationContext
                    /**
                     * Close Spring's web application context for the given servlet context.
                     * <p>If overriding {@link #loadParentContext(ServletContext)}, you may have
                     * to override this method as well.
                     * @param servletContext the ServletContext that the WebApplicationContext runs in
                     */
                    // @ts-ignore
                    public closeWebApplicationContext(servletContext: ServletContext): void
                    /**
                     * Obtain the Spring root web application context for the current thread
                     * (i.e. for the current thread's context ClassLoader, which needs to be
                     * the web application's ClassLoader).
                     * @return the current root web application context, or {#code null}
                     *  if none found
                     * @see org.springframework.web.context.support.SpringBeanAutowiringSupport
                     */
                    // @ts-ignore
                    public static getCurrentWebApplicationContext(): org.springframework.web.context.WebApplicationContext
                }
            }
        }
    }
}
