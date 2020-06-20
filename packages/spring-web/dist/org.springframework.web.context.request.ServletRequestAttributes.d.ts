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
                        readonly DESTRUCTION_CALLBACK_NAME_PREFIX: string
                        // @ts-ignore
                        readonly immutableValueTypes: Array<java.lang.Class<any>>
                        /**
                         * Exposes the native {@link HttpServletRequest} that we're wrapping.
                         */
                        // @ts-ignore
                        getRequest(): HttpServletRequest
                        /**
                         * Exposes the native {@link HttpServletResponse} that we're wrapping (if any).
                         */
                        // @ts-ignore
                        getResponse(): HttpServletResponse
                        /**
                         * Exposes the {@link HttpSession} that we're wrapping.
                         * @param allowCreate whether to allow creation of a new session if none exists yet
                         */
                        // @ts-ignore
                        getSession(allowCreate: boolean): HttpSession
                        // @ts-ignore
                        getAttribute(name: string, scope: number /*int*/): java.lang.Object
                        // @ts-ignore
                        setAttribute(name: string, value: any, scope: number /*int*/): void
                        // @ts-ignore
                        removeAttribute(name: string, scope: number /*int*/): void
                        // @ts-ignore
                        getAttributeNames(scope: number /*int*/): java.lang.String[]
                        // @ts-ignore
                        registerDestructionCallback(name: string, callback: java.lang.Runnable, scope: number /*int*/): void
                        // @ts-ignore
                        resolveReference(key: string): java.lang.Object
                        // @ts-ignore
                        getSessionId(): java.lang.String
                        // @ts-ignore
                        getSessionMutex(): java.lang.Object
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
                        isImmutableSessionAttribute(name: string, value: any): boolean
                        /**
                         * Register the given callback as to be executed after session termination.
                         * <p>Note: The callback object should be serializable in order to survive
                         * web app restarts.
                         * @param name the name of the attribute to register the callback for
                         * @param callback the callback to be executed for destruction
                         */
                        // @ts-ignore
                        registerSessionDestructionCallback(name: string, callback: java.lang.Runnable): void
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
