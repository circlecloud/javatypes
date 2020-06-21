declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Session-backed {@link org.springframework.beans.factory.config.Scope}
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
                     * @see RequestAttributes#SCOPE_SESSION
                     * @see RequestContextListener
                     * @see org.springframework.web.filter.RequestContextFilter
                     * @see org.springframework.web.servlet.DispatcherServlet
                     */
                    // @ts-ignore
                    class SessionScope extends org.springframework.web.context.request.AbstractRequestAttributesScope {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        getScope(): number /*int*/
                        // @ts-ignore
                        public getConversationId(): string
                        // @ts-ignore
                        public get(name: java.lang.String | string, objectFactory: object): any
                        // @ts-ignore
                        public remove(name: java.lang.String | string): any
                    }
                }
            }
        }
    }
}
