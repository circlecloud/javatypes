declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Request-backed {@link org.springframework.beans.factory.config.Scope}
                     * implementation.
                     * <p>Relies on a thread-bound {@link RequestAttributes} instance, which
                     * can be exported through {@link RequestContextListener},
                     * {@link org.springframework.web.filter.RequestContextFilter} or
                     * {@link org.springframework.web.servlet.DispatcherServlet}.
                     * @author Rod Johnson
                     * @author Juergen Hoeller
                     * @author Rob Harrop
                     * @since 2.0
                     * @see RequestContextHolder#currentRequestAttributes()
                     * @see RequestAttributes#SCOPE_REQUEST
                     * @see RequestContextListener
                     * @see org.springframework.web.filter.RequestContextFilter
                     * @see org.springframework.web.servlet.DispatcherServlet
                     */
                    // @ts-ignore
                    class RequestScope extends org.springframework.web.context.request.AbstractRequestAttributesScope {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getScope(): int
                        /**
                         * There is no conversation id concept for a request, so this method
                         * returns {@code null}.
                         */
                        // @ts-ignore
                        getConversationId(): java.lang.String
                    }
                }
            }
        }
    }
}
