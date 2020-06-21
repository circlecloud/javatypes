declare namespace org {
    namespace springframework {
        namespace web {
            namespace server {
                namespace handler {
                    /**
                     * Handle {@link ResponseStatusException} by setting the response status.
                     * <p>By default exception stack traces are not shown for successfully resolved
                     * exceptions. Use {@link #setWarnLogCategory(String)} to enable logging with
                     * stack traces.
                     * @author Rossen Stoyanchev
                     * @author Sebastien Deleuze
                     * @since 5.0
                     */
                    // @ts-ignore
                    class ResponseStatusExceptionHandler extends java.lang.Object implements org.springframework.web.server.WebExceptionHandler {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the log category for warn logging.
                         * <p>Default is no warn logging. Specify this setting to activate warn
                         * logging into a specific category.
                         * @since 5.1
                         * @see org.apache.commons.logging.LogFactory#getLog(String)
                         * @see java.util.logging.Logger#getLogger(String)
                         */
                        // @ts-ignore
                        public setWarnLogCategory(loggerName: java.lang.String | string): void
                        // @ts-ignore
                        public handle(exchange: org.springframework.web.server.ServerWebExchange, ex: java.lang.Throwable | Error): object
                        /**
                         * Determine the HTTP status implied by the given exception.
                         * @param ex the exception to introspect
                         * @return the associated HTTP status, if any
                         * @since 5.0.5
                         */
                        // @ts-ignore
                        determineStatus(ex: java.lang.Throwable | Error): org.springframework.http.HttpStatus
                    }
                }
            }
        }
    }
}
