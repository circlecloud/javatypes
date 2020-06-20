declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * Callback interface for initializing a {@link WebDataBinder} for performing
                     * data binding in the context of a specific web request.
                     * @author Juergen Hoeller
                     * @author Rossen Stoyanchev
                     * @since 2.5
                     */
                    // @ts-ignore
                    interface WebBindingInitializer {
                        /**
                         * Initialize the given DataBinder.
                         * @param binder the DataBinder to initialize
                         * @since 5.0
                         */
                        // @ts-ignore
                        initBinder(binder: org.springframework.web.bind.WebDataBinder): void
                        /**
                         * Initialize the given DataBinder for the given (Servlet) request.
                         * @param binder the DataBinder to initialize
                         * @param request the web request that the data binding happens within
                         * @deprecated as of 5.0 in favor of {#link #initBinder(WebDataBinder)}
                         */
                        // @ts-ignore
                        initBinder(binder: org.springframework.web.bind.WebDataBinder, request: org.springframework.web.context.request.WebRequest): void
                    }
                }
            }
        }
    }
}
