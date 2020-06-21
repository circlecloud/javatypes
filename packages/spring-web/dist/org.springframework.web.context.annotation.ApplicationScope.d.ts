declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace annotation {
                    /**
                     * {@code @ApplicationScope} is a specialization of {@link Scope @Scope} for a
                     * component whose lifecycle is bound to the current web application.
                     * <p>Specifically, {@code @ApplicationScope} is a <em>composed annotation</em> that
                     * acts as a shortcut for {@code @Scope("application")} with the default
                     * {@link #proxyMode} set to {@link ScopedProxyMode#TARGET_CLASS TARGET_CLASS}.
                     * <p>{@code @ApplicationScope} may be used as a meta-annotation to create custom
                     * composed annotations.
                     * @author Sam Brannen
                     * @since 4.3
                     * @see RequestScope
                     * @see SessionScope
                     * @see org.springframework.context.annotation.Scope
                     * @see org.springframework.web.context.WebApplicationContext#SCOPE_APPLICATION
                     * @see org.springframework.web.context.support.ServletContextScope
                     * @see org.springframework.stereotype.Component
                     * @see org.springframework.context.annotation.Bean
                     */
                    // @ts-ignore
                    abstract class ApplicationScope implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
