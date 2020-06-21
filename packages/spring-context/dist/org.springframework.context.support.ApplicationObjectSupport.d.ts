declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Convenient superclass for application objects that want to be aware of
                 * the application context, e.g. for custom lookup of collaborating beans
                 * or for context-specific resource access. It saves the application
                 * context reference and provides an initialization callback method.
                 * Furthermore, it offers numerous convenience methods for message lookup.
                 * <p>There is no requirement to subclass this class: It just makes things
                 * a little easier if you need access to the context, e.g. for access to
                 * file resources or to the message source. Note that many application
                 * objects do not need to be aware of the application context at all,
                 * as they can receive collaborating beans via bean references.
                 * <p>Many framework classes are derived from this class, particularly
                 * within the web support.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 * @see org.springframework.web.context.support.WebApplicationObjectSupport
                 */
                // @ts-ignore
                abstract class ApplicationObjectSupport extends java.lang.Object implements org.springframework.context.ApplicationContextAware {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger that is available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    // @ts-ignore
                    public setApplicationContext(context: org.springframework.context.ApplicationContext): void
                    /**
                     * Determine whether this application object needs to run in an ApplicationContext.
                     * <p>Default is "false". Can be overridden to enforce running in a context
                     * (i.e. to throw IllegalStateException on accessors if outside a context).
                     * @see #getApplicationContext
                     * @see #getMessageSourceAccessor
                     */
                    // @ts-ignore
                    isContextRequired(): boolean
                    /**
                     * Determine the context class that any context passed to
                     * {@code setApplicationContext} must be an instance of.
                     * Can be overridden in subclasses.
                     * @see #setApplicationContext
                     */
                    // @ts-ignore
                    requiredContextClass(): java.lang.Class<any>
                    /**
                     * Subclasses can override this for custom initialization behavior.
                     * Gets called by {@code setApplicationContext} after setting the context instance.
                     * <p>Note: Does <i>not</i> get called on re-initialization of the context
                     * but rather just on first initialization of this object's context reference.
                     * <p>The default implementation calls the overloaded {@link #initApplicationContext()}
                     * method without ApplicationContext reference.
                     * @param context the containing ApplicationContext
                     * @throws ApplicationContextException in case of initialization errors
                     * @throws BeansException if thrown by ApplicationContext methods
                     * @see #setApplicationContext
                     */
                    // @ts-ignore
                    initApplicationContext(context: org.springframework.context.ApplicationContext): void
                    /**
                     * Subclasses can override this for custom initialization behavior.
                     * <p>The default implementation is empty. Called by
                     * {@link #initApplicationContext(org.springframework.context.ApplicationContext)}.
                     * @throws ApplicationContextException in case of initialization errors
                     * @throws BeansException if thrown by ApplicationContext methods
                     * @see #setApplicationContext
                     */
                    // @ts-ignore
                    initApplicationContext(): void
                    /**
                     * Return the ApplicationContext that this object is associated with.
                     * @throws IllegalStateException if not running in an ApplicationContext
                     */
                    // @ts-ignore
                    public getApplicationContext(): org.springframework.context.ApplicationContext
                    /**
                     * Obtain the ApplicationContext for actual use.
                     * @return the ApplicationContext (never {#code null})
                     * @throws IllegalStateException in case of no ApplicationContext set
                     * @since 5.0
                     */
                    // @ts-ignore
                    obtainApplicationContext(): org.springframework.context.ApplicationContext
                    /**
                     * Return a MessageSourceAccessor for the application context
                     * used by this object, for easy message access.
                     * @throws IllegalStateException if not running in an ApplicationContext
                     */
                    // @ts-ignore
                    getMessageSourceAccessor(): org.springframework.context.support.MessageSourceAccessor
                }
            }
        }
    }
}
