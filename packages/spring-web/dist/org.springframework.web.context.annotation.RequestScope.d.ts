declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace annotation {
                    /**
                     * {@code @RequestScope} is a specialization of {@link Scope @Scope} for a
                     * component whose lifecycle is bound to the current web request.
                     * <p>Specifically, {@code @RequestScope} is a <em>composed annotation</em> that
                     * acts as a shortcut for {@code @Scope("request")} with the default
                     * {@link #proxyMode} set to {@link ScopedProxyMode#TARGET_CLASS TARGET_CLASS}.
                     * <p>{@code @RequestScope} may be used as a meta-annotation to create custom
                     * composed annotations.
                     * @author Sam Brannen
                     * @since 4.3
                     * @see SessionScope
                     * @see ApplicationScope
                     * @see org.springframework.context.annotation.Scope
                     * @see org.springframework.web.context.WebApplicationContext#SCOPE_REQUEST
                     * @see org.springframework.web.context.request.RequestScope
                     * @see org.springframework.stereotype.Component
                     * @see org.springframework.context.annotation.Bean
                     */
                    // @ts-ignore
                    abstract class RequestScope implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
