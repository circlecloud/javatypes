declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    /**
                     * Abstract support class for RequestAttributes implementations,
                     * offering a request completion mechanism for request-specific destruction
                     * callbacks and for updating accessed session attributes.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see #requestCompleted()
                     */
                    // @ts-ignore
                    class AbstractRequestAttributes extends java.lang.Object implements org.springframework.web.context.request.RequestAttributes {
                        // @ts-ignore
                        constructor()
                        /**
                         * Map from attribute name String to destruction callback Runnable.
                         */
                        // @ts-ignore
                        readonly requestDestructionCallbacks: java.util.Map<java.lang.String, java.lang.Runnable>
                        /**
                         * Signal that the request has been completed.
                         * <p>Executes all request destruction callbacks and updates the
                         * session attributes that have been accessed during request processing.
                         */
                        // @ts-ignore
                        requestCompleted(): void
                        /**
                         * Determine whether the original request is still active.
                         * @see #requestCompleted()
                         */
                        // @ts-ignore
                        isRequestActive(): boolean
                        /**
                         * Register the given callback as to be executed after request completion.
                         * @param name the name of the attribute to register the callback for
                         * @param callback the callback to be executed for destruction
                         */
                        // @ts-ignore
                        registerRequestDestructionCallback(name: string, callback: java.lang.Runnable): void
                        /**
                         * Remove the request destruction callback for the specified attribute, if any.
                         * @param name the name of the attribute to remove the callback for
                         */
                        // @ts-ignore
                        removeRequestDestructionCallback(name: string): void
                        /**
                         * Update all session attributes that have been accessed during request processing,
                         * to expose their potentially updated state to the underlying session manager.
                         */
                        // @ts-ignore
                        abstract updateAccessedSessionAttributes(): void
                    }
                }
            }
        }
    }
}
