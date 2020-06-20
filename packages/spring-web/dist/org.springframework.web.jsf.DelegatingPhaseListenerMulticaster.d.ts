declare namespace org {
    namespace springframework {
        namespace web {
            namespace jsf {
                /**
                 * JSF PhaseListener implementation that delegates to one or more Spring-managed
                 * PhaseListener beans coming from the Spring root WebApplicationContext.
                 * <p>Configure this listener multicaster in your {@code faces-config.xml} file
                 * as follows:
                 * <pre class="code">
                 * &lt;application&gt;
                 * ...
                 * &lt;phase-listener&gt;
                 * org.springframework.web.jsf.DelegatingPhaseListenerMulticaster
                 * &lt;/phase-listener&gt;
                 * ...
                 * &lt;/application&gt;</pre>
                 * The multicaster will delegate all {@code beforePhase} and {@code afterPhase}
                 * events to all target PhaseListener beans. By default, those will simply be obtained
                 * by type: All beans in the Spring root WebApplicationContext that implement the
                 * PhaseListener interface will be fetched and invoked.
                 * <p>Note: This multicaster's {@code getPhaseId()} method will always return
                 * {@code ANY_PHASE}. <b>The phase id exposed by the target listener beans
                 * will be ignored; all events will be propagated to all listeners.</b>
                 * <p>This multicaster may be subclassed to change the strategy used to obtain
                 * the listener beans, or to change the strategy used to access the ApplicationContext
                 * (normally obtained via {@link FacesContextUtils#getWebApplicationContext(FacesContext)}).
                 * @author Juergen Hoeller
                 * @author Colin Sampaleanu
                 * @since 1.2.7
                 */
                // @ts-ignore
                class DelegatingPhaseListenerMulticaster extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getPhaseId(): PhaseId
                    // @ts-ignore
                    beforePhase(event: PhaseEvent): void
                    // @ts-ignore
                    afterPhase(event: PhaseEvent): void
                    /**
                     * Obtain the delegate PhaseListener beans from the Spring root WebApplicationContext.
                     * @param facesContext the current JSF context
                     * @return a Collection of PhaseListener objects
                     * @see #getBeanFactory
                     * @see org.springframework.beans.factory.ListableBeanFactory#getBeansOfType(Class)
                     */
                    // @ts-ignore
                    getDelegates(facesContext: FacesContext): java.util.Collection<PhaseListener>
                    /**
                     * Retrieve the Spring BeanFactory to delegate bean name resolution to.
                     * <p>The default implementation delegates to {@code getWebApplicationContext}.
                     * Can be overridden to provide an arbitrary ListableBeanFactory reference to
                     * resolve against; usually, this will be a full Spring ApplicationContext.
                     * @param facesContext the current JSF context
                     * @return the Spring ListableBeanFactory (never {#code null})
                     * @see #getWebApplicationContext
                     */
                    // @ts-ignore
                    getBeanFactory(facesContext: FacesContext): ListableBeanFactory
                    /**
                     * Retrieve the web application context to delegate bean name resolution to.
                     * <p>The default implementation delegates to FacesContextUtils.
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
