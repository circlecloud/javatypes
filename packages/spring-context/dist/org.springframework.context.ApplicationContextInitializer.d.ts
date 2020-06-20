declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Callback interface for initializing a Spring {@link ConfigurableApplicationContext}
             * prior to being {@linkplain ConfigurableApplicationContext#refresh() refreshed}.
             * <p>Typically used within web applications that require some programmatic initialization
             * of the application context. For example, registering property sources or activating
             * profiles against the {@linkplain ConfigurableApplicationContext#getEnvironment()
             * context's environment}. See {@code ContextLoader} and {@code FrameworkServlet} support
             * for declaring a "contextInitializerClasses" context-param and init-param, respectively.
             * <p>{@code ApplicationContextInitializer} processors are encouraged to detect
             * whether Spring's {@link org.springframework.core.Ordered Ordered} interface has been
             * implemented or if the @{@link org.springframework.core.annotation.Order Order}
             * annotation is present and to sort instances accordingly if so prior to invocation.
             * @author Chris Beams
             * @since 3.1
             * @param <C> the application context type
             * @see org.springframework.web.context.ContextLoader#customizeContext
             * @see org.springframework.web.context.ContextLoader#CONTEXT_INITIALIZER_CLASSES_PARAM
             * @see org.springframework.web.servlet.FrameworkServlet#setContextInitializerClasses
             * @see org.springframework.web.servlet.FrameworkServlet#applyInitializers
             */
            // @ts-ignore
            interface ApplicationContextInitializer<C extends org.springframework.context.ConfigurableApplicationContext> {
                /**
                 * Initialize the given application context.
                 * @param applicationContext the application to configure
                 */
                // @ts-ignore
                initialize(applicationContext: C extends org.springframework.context.ConfigurableApplicationContext): void
            }
        }
    }
}
