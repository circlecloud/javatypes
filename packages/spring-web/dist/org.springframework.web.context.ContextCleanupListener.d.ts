declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                /**
                 * Web application listener that cleans up remaining disposable attributes
                 * in the ServletContext, i.e. attributes which implement {@link DisposableBean}
                 * and haven't been removed before. This is typically used for destroying objects
                 * in "application" scope, for which the lifecycle implies destruction at the
                 * very end of the web application's shutdown phase.
                 * @author Juergen Hoeller
                 * @since 3.0
                 * @see org.springframework.web.context.support.ServletContextScope
                 * @see ContextLoaderListener
                 */
                // @ts-ignore
                class ContextCleanupListener extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    contextInitialized(event: ServletContextEvent): void
                    // @ts-ignore
                    contextDestroyed(event: ServletContextEvent): void
                }
            }
        }
    }
}
