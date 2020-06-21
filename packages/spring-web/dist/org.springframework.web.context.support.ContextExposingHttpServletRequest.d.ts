declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace support {
                    /**
                     * HttpServletRequest decorator that makes all Spring beans in a
                     * given WebApplicationContext accessible as request attributes,
                     * through lazy checking once an attribute gets accessed.
                     * @author Juergen Hoeller
                     * @since 2.5
                     */
                    // @ts-ignore
                    class ContextExposingHttpServletRequest extends HttpServletRequestWrapper {
                        /**
                         * Create a new ContextExposingHttpServletRequest for the given request.
                         * @param originalRequest the original HttpServletRequest
                         * @param context the WebApplicationContext that this request runs in
                         */
                        // @ts-ignore
                        constructor(originalRequest: HttpServletRequest, context: org.springframework.web.context.WebApplicationContext)
                        /**
                         * Create a new ContextExposingHttpServletRequest for the given request.
                         * @param originalRequest the original HttpServletRequest
                         * @param context the WebApplicationContext that this request runs in
                         * @param exposedContextBeanNames the names of beans in the context which
                         *  are supposed to be exposed (if this is non-null, only the beans in this
                         *  Set are eligible for exposure as attributes)
                         */
                        // @ts-ignore
                        constructor(originalRequest: HttpServletRequest, context: org.springframework.web.context.WebApplicationContext, exposedContextBeanNames: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>)
                        /**
                         * Return the WebApplicationContext that this request runs in.
                         */
                        // @ts-ignore
                        public getWebApplicationContext(): org.springframework.web.context.WebApplicationContext
                        // @ts-ignore
                        public getAttribute(name: java.lang.String | string): any
                        // @ts-ignore
                        public setAttribute(name: java.lang.String | string, value: java.lang.Object | any): void
                    }
                }
            }
        }
    }
}
