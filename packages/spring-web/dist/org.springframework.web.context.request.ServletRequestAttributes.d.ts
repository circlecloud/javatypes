declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Servlet-based implementation of the {@link RequestAttributes} interface.
                     * <p>Accesses objects from servlet request and HTTP session scope,
                     * with no distinction between "session" and "global session".
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see javax.servlet.ServletRequest#getAttribute
                     * @see javax.servlet.http.HttpSession#getAttribute
                     */
                    // @ts-ignore
                    class ServletRequestAttributes extends org.springframework.web.context.request.AbstractRequestAttributes {
                        /**
                         * Create a new ServletRequestAttributes instance for the given request.
                         * @param request current HTTP request
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest)
                        /**
                         * Create a new ServletRequestAttributes instance for the given request.
                         * @param request current HTTP request
                         * @param response current HTTP response (for optional exposure)
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest, response: HttpServletResponse)
                        /**
                         * Constant identifying the {@link String} prefixed to the name of a
                         * destruction callback when it is stored in a {@link HttpSession}.
                         */
                        // @ts-ignore
                        public static readonly DESTRUCTION_CALLBACK_NAME_PREFIX: java.lang.String | string
                        // @ts-ignore
                        static readonly immutableValueTypes: java.util.Set<java.lang.Class<any>> | Array<java.lang.Class<any>>
                        /**
                         * Exposes the native {@link HttpServletRequest} that we're wrapping.
                         */
                        // @ts-ignore
                        public getRequest(): HttpServletRequest
                        /**
                         * Exposes the native {@link HttpServletResponse} that we're wrapping (if any).
                         */
                        // @ts-ignore
                        public getResponse(): HttpServletResponse
                        /**
                         * Exposes the {@link HttpSession} that we're wrapping.
                         * @param allowCreate whether to allow creation of a new session if none exists yet
                         */
                        // @ts-ignore
                        getSession(allowCreate: boolean): HttpSession
                        // @ts-ignore
                        public getAttribute(name: java.lang.String | string, scope: number /*int*/): any
                        // @ts-ignore
                        public setAttribute(name: java.lang.String | string, value: java.lang.Object | any, scope: number /*int*/): void
                        // @ts-ignore
                        public removeAttribute(name: java.lang.String | string, scope: number /*int*/): void
                        // @ts-ignore
                        public getAttributeNames(scope: number /*int*/): string[]
                        // @ts-ignore
                        public registerDestructionCallback(name: java.lang.String | string, callback: java.lang.Runnable, scope: number /*int*/): void
                        // @ts-ignore
                        public resolveReference(key: java.lang.String | string): any
                        // @ts-ignore
                        public getSessionId(): string
                        // @ts-ignore
                        public getSessionMutex(): any
                        /**
                         * Update all accessed session attributes through {@code session.setAttribute}
                         * calls, explicitly indicating to the container that they might have been modified.
                         */
                        // @ts-ignore
                        updateAccessedSessionAttributes(): void
                        /**
                         * Determine whether the given value is to be considered as an immutable session
                         * attribute, that is, doesn't have to be re-set via {@code session.setAttribute}
                         * since its value cannot meaningfully change internally.
                         * <p>The default implementation returns {@code true} for {@code String},
                         * {@code Character}, {@code Boolean} and standard {@code Number} values.
                         * @param name the name of the attribute
                         * @param value the corresponding value to check
                         * @return {#code true} if the value is to be considered as immutable for the
                         *  purposes of session attribute management; {@code false} otherwise
                         * @see #updateAccessedSessionAttributes()
                         */
                        // @ts-ignore
                        isImmutableSessionAttribute(name: java.lang.String | string, value: java.lang.Object | any): boolean
                        /**
                         * Register the given callback as to be executed after session termination.
                         * <p>Note: The callback object should be serializable in order to survive
                         * web app restarts.
                         * @param name the name of the attribute to register the callback for
                         * @param callback the callback to be executed for destruction
                         */
                        // @ts-ignore
                        registerSessionDestructionCallback(name: java.lang.String | string, callback: java.lang.Runnable): void
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
