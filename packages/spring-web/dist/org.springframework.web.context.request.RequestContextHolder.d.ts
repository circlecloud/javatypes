declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Holder class to expose the web request in the form of a thread-bound
                     * {@link RequestAttributes} object. The request will be inherited
                     * by any child threads spawned by the current thread if the
                     * {@code inheritable} flag is set to {@code true}.
                     * <p>Use {@link RequestContextListener} or
                     * {@link org.springframework.web.filter.RequestContextFilter} to expose
                     * the current web request. Note that
                     * {@link org.springframework.web.servlet.DispatcherServlet}
                     * already exposes the current request by default.
                     * @author Juergen Hoeller
                     * @author Rod Johnson
                     * @since 2.0
                     * @see RequestContextListener
                     * @see org.springframework.web.filter.RequestContextFilter
                     * @see org.springframework.web.servlet.DispatcherServlet
                     */
                    // @ts-ignore
                    abstract class RequestContextHolder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Reset the RequestAttributes for the current thread.
                         */
                        // @ts-ignore
                        public static resetRequestAttributes(): void
                        /**
                         * Bind the given RequestAttributes to the current thread,
                         * <i>not</i> exposing it as inheritable for child threads.
                         * @param attributes the RequestAttributes to expose
                         * @see #setRequestAttributes(RequestAttributes, boolean)
                         */
                        // @ts-ignore
                        public static setRequestAttributes(attributes: org.springframework.web.context.request.RequestAttributes): void
                        /**
                         * Bind the given RequestAttributes to the current thread.
                         * @param attributes the RequestAttributes to expose,
                         *  or {#code null} to reset the thread-bound context
                         * @param inheritable whether to expose the RequestAttributes as inheritable
                         *  for child threads (using an {#link InheritableThreadLocal})
                         */
                        // @ts-ignore
                        public static setRequestAttributes(attributes: org.springframework.web.context.request.RequestAttributes, inheritable: boolean): void
                        /**
                         * Return the RequestAttributes currently bound to the thread.
                         * @return the RequestAttributes currently bound to the thread,
                         *  or {#code null} if none bound
                         */
                        // @ts-ignore
                        public static getRequestAttributes(): org.springframework.web.context.request.RequestAttributes
                        /**
                         * Return the RequestAttributes currently bound to the thread.
                         * <p>Exposes the previously bound RequestAttributes instance, if any.
                         * Falls back to the current JSF FacesContext, if any.
                         * @return the RequestAttributes currently bound to the thread
                         * @throws IllegalStateException if no RequestAttributes object
                         *  is bound to the current thread
                         * @see #setRequestAttributes
                         * @see ServletRequestAttributes
                         * @see FacesRequestAttributes
                         * @see javax.faces.context.FacesContext#getCurrentInstance()
                         */
                        // @ts-ignore
                        public static currentRequestAttributes(): org.springframework.web.context.request.RequestAttributes
                    }
                }
            }
        }
    }
}
