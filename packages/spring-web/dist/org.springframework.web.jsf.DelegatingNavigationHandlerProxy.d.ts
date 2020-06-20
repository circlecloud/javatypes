declare namespace org {
    namespace springframework {
        namespace web {
            namespace jsf {
                /**
                 * JSF NavigationHandler implementation that delegates to a NavigationHandler
                 * bean obtained from the Spring root WebApplicationContext.
                 * <p>Configure this handler proxy in your {@code faces-config.xml} file
                 * as follows:
                 * <pre class="code">
                 * &lt;application&gt;
                 * ...
                 * &lt;navigation-handler&gt;
                 * org.springframework.web.jsf.DelegatingNavigationHandlerProxy
                 * &lt;/navigation-handler&gt;
                 * ...
                 * &lt;/application&gt;</pre>
                 * By default, the Spring ApplicationContext will be searched for the NavigationHandler
                 * under the bean name "jsfNavigationHandler". In the simplest case, this is a plain
                 * Spring bean definition like the following. However, all of Spring's bean configuration
                 * power can be applied to such a bean, in particular all flavors of dependency injection.
                 * <pre class="code">
                 * &lt;bean name="jsfNavigationHandler" class="mypackage.MyNavigationHandler"&gt;
                 * &lt;property name="myProperty" ref="myOtherBean"/&gt;
                 * &lt;/bean&gt;</pre>
                 * The target NavigationHandler bean will typically extend the standard JSF
                 * NavigationHandler class. However, note that decorating the original
                 * NavigationHandler (the JSF provider's default handler) is <i>not</i> supported
                 * in such a scenario, since we can't inject the original handler in standard
                 * JSF style (that is, as constructor argument).
                 * <p>For <b>decorating the original NavigationHandler</b>, make sure that your
                 * target bean extends Spring's <b>DecoratingNavigationHandler</b> class. This
                 * allows to pass in the original handler as method argument, which this proxy
                 * automatically detects. Note that a DecoratingNavigationHandler subclass
                 * will still work as standard JSF NavigationHandler as well!
                 * <p>This proxy may be subclassed to change the bean name used to search for the
                 * navigation handler, change the strategy used to obtain the target handler,
                 * or change the strategy used to access the ApplicationContext (normally obtained
                 * via {@link FacesContextUtils#getWebApplicationContext(FacesContext)}).
                 * @author Juergen Hoeller
                 * @author Colin Sampaleanu
                 * @since 1.2.7
                 * @see DecoratingNavigationHandler
                 */
                // @ts-ignore
                class DelegatingNavigationHandlerProxy extends NavigationHandler {
                    /**
                     * Create a new DelegatingNavigationHandlerProxy.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new DelegatingNavigationHandlerProxy.
                     * @param originalNavigationHandler the original NavigationHandler
                     */
                    // @ts-ignore
                    constructor(originalNavigationHandler: NavigationHandler)
                    /**
                     * Default name of the target bean in the Spring application context:
                     * "jsfNavigationHandler".
                     */
                    // @ts-ignore
                    readonly DEFAULT_TARGET_BEAN_NAME: string
                    /**
                     * Handle the navigation request implied by the specified parameters,
                     * through delegating to the target bean in the Spring application context.
                     * <p>The target bean needs to extend the JSF NavigationHandler class.
                     * If it extends Spring's DecoratingNavigationHandler, the overloaded
                     * {@code handleNavigation} method with the original NavigationHandler
                     * as argument will be used. Else, the standard {@code handleNavigation}
                     * method will be called.
                     */
                    // @ts-ignore
                    handleNavigation(facesContext: FacesContext, fromAction: string, outcome: string): void
                    /**
                     * Return the target NavigationHandler to delegate to.
                     * <p>By default, a bean with the name "jsfNavigationHandler" is obtained
                     * from the Spring root WebApplicationContext, for every invocation.
                     * @param facesContext the current JSF context
                     * @return the target NavigationHandler to delegate to
                     * @see #getTargetBeanName
                     * @see #getBeanFactory
                     */
                    // @ts-ignore
                    getDelegate(facesContext: FacesContext): NavigationHandler
                    /**
                     * Return the name of the target NavigationHandler bean in the BeanFactory.
                     * Default is "jsfNavigationHandler".
                     * @param facesContext the current JSF context
                     * @return the name of the target bean
                     */
                    // @ts-ignore
                    getTargetBeanName(facesContext: FacesContext): java.lang.String
                    /**
                     * Retrieve the Spring BeanFactory to delegate bean name resolution to.
                     * <p>Default implementation delegates to {@code getWebApplicationContext}.
                     * Can be overridden to provide an arbitrary BeanFactory reference to resolve
                     * against; usually, this will be a full Spring ApplicationContext.
                     * @param facesContext the current JSF context
                     * @return the Spring BeanFactory (never {#code null})
                     * @see #getWebApplicationContext
                     */
                    // @ts-ignore
                    getBeanFactory(facesContext: FacesContext): BeanFactory
                    /**
                     * Retrieve the web application context to delegate bean name resolution to.
                     * <p>Default implementation delegates to FacesContextUtils.
                     * @param facesContext the current JSF context
                     * @return the Spring web application context (never {#code null})
                     * @see FacesContextUtils#getRequiredWebApplicationContext
                     */
                    // @ts-ignore
                    getWebApplicationContext(facesContext: FacesContext): org.springframework.web.context.WebApplicationContext
                }
            }
        }
    }
}
