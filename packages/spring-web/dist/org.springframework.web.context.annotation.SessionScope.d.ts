declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace annotation {
                    /**
                     * {@code @SessionScope} is a specialization of {@link Scope @Scope} for a
                     * component whose lifecycle is bound to the current web session.
                     * <p>Specifically, {@code @SessionScope} is a <em>composed annotation</em> that
                     * acts as a shortcut for {@code @Scope("session")} with the default
                     * {@link #proxyMode} set to {@link ScopedProxyMode#TARGET_CLASS TARGET_CLASS}.
                     * <p>{@code @SessionScope} may be used as a meta-annotation to create custom
                     * composed annotations.
                     * @author Sam Brannen
                     * @since 4.3
                     * @see RequestScope
                     * @see ApplicationScope
                     * @see org.springframework.context.annotation.Scope
                     * @see org.springframework.web.context.WebApplicationContext#SCOPE_SESSION
                     * @see org.springframework.web.context.request.SessionScope
                     * @see org.springframework.stereotype.Component
                     * @see org.springframework.context.annotation.Bean
                     */
                    // @ts-ignore
                    class SessionScope implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
