declare namespace org {
    namespace springframework {
        namespace web {
            namespace jsf {
                /**
                 * Base class for JSF NavigationHandler implementations that want
                 * to be capable of decorating an original NavigationHandler.
                 * <p>Supports the standard JSF style of decoration (through a constructor argument)
                 * as well as an overloaded {@code handleNavigation} method with explicit
                 * NavigationHandler argument (passing in the original NavigationHandler). Subclasses
                 * are forced to implement this overloaded {@code handleNavigation} method.
                 * Standard JSF invocations will automatically delegate to the overloaded method,
                 * with the constructor-injected NavigationHandler as argument.
                 * @author Juergen Hoeller
                 * @since 1.2.7
                 * @see #handleNavigation(javax.faces.context.FacesContext, String, String, NavigationHandler)
                 * @see DelegatingNavigationHandlerProxy
                 */
                // @ts-ignore
                class DecoratingNavigationHandler extends NavigationHandler {
                    /**
                     * Create a DecoratingNavigationHandler without fixed original NavigationHandler.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a DecoratingNavigationHandler with fixed original NavigationHandler.
                     * @param originalNavigationHandler the original NavigationHandler to decorate
                     */
                    // @ts-ignore
                    constructor(originalNavigationHandler: NavigationHandler)
                    /**
                     * Return the fixed original NavigationHandler decorated by this handler, if any
                     * (that is, if passed in through the constructor).
                     */
                    // @ts-ignore
                    getDecoratedNavigationHandler(): NavigationHandler
                    /**
                     * This implementation of the standard JSF {@code handleNavigation} method
                     * delegates to the overloaded variant, passing in constructor-injected
                     * NavigationHandler as argument.
                     * @see #handleNavigation(javax.faces.context.FacesContext, String, String, javax.faces.application.NavigationHandler)
                     */
                    // @ts-ignore
                    handleNavigation(facesContext: FacesContext, fromAction: string, outcome: string): void
                    /**
                     * Special {@code handleNavigation} variant with explicit NavigationHandler
                     * argument. Either called directly, by code with an explicit original handler,
                     * or called from the standard {@code handleNavigation} method, as
                     * plain JSF-defined NavigationHandler.
                     * <p>Implementations should invoke {@code callNextHandlerInChain} to
                     * delegate to the next handler in the chain. This will always call the most
                     * appropriate next handler (see {@code callNextHandlerInChain} javadoc).
                     * Alternatively, the decorated NavigationHandler or the passed-in original
                     * NavigationHandler can also be called directly; however, this is not as
                     * flexible in terms of reacting to potential positions in the chain.
                     * @param facesContext the current JSF context
                     * @param fromAction the action binding expression that was evaluated to retrieve the
                     *  specified outcome, or {#code null} if the outcome was acquired by some other means
                     * @param outcome the logical outcome returned by a previous invoked application action
                     *  (which may be {#code null})
                     * @param originalNavigationHandler the original NavigationHandler,
                     *  or {#code null} if none
                     * @see #callNextHandlerInChain
                     */
                    // @ts-ignore
                    abstract handleNavigation(facesContext: FacesContext, fromAction: string, outcome: string, originalNavigationHandler: NavigationHandler): void
                    /**
                     * Method to be called by subclasses when intending to delegate to the next
                     * handler in the NavigationHandler chain. Will always call the most
                     * appropriate next handler, either the decorated NavigationHandler passed
                     * in as constructor argument or the original NavigationHandler as passed
                     * into this method - according to the position of this instance in the chain.
                     * <p>Will call the decorated NavigationHandler specified as constructor
                     * argument, if any. In case of a DecoratingNavigationHandler as target, the
                     * original NavigationHandler as passed into this method will be passed on to
                     * the next element in the chain: This ensures propagation of the original
                     * handler that the last element in the handler chain might delegate back to.
                     * In case of a standard NavigationHandler as target, the original handler
                     * will simply not get passed on; no delegating back to the original is
                     * possible further down the chain in that scenario.
                     * <p>If no decorated NavigationHandler specified as constructor argument,
                     * this instance is the last element in the chain. Hence, this method will
                     * call the original NavigationHandler as passed into this method. If no
                     * original NavigationHandler has been passed in (for example if this
                     * instance is the last element in a chain with standard NavigationHandlers
                     * as earlier elements), this method corresponds to a no-op.
                     * @param facesContext the current JSF context
                     * @param fromAction the action binding expression that was evaluated to retrieve the
                     *  specified outcome, or {#code null} if the outcome was acquired by some other means
                     * @param outcome the logical outcome returned by a previous invoked application action
                     *  (which may be {#code null})
                     * @param originalNavigationHandler the original NavigationHandler,
                     *  or {#code null} if none
                     */
                    // @ts-ignore
                    callNextHandlerInChain(facesContext: FacesContext, fromAction: string, outcome: string, originalNavigationHandler: NavigationHandler): void
                }
            }
        }
    }
}
