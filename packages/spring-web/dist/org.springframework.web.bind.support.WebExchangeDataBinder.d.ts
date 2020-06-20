declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * Specialized {@link org.springframework.validation.DataBinder} to perform data
                     * binding from URL query params or form data in the request data to Java objects.
                     * @author Rossen Stoyanchev
                     * @since 5.0
                     */
                    // @ts-ignore
                    class WebExchangeDataBinder extends org.springframework.web.bind.WebDataBinder {
                        /**
                         * Create a new instance, with default object name.
                         * @param target the target object to bind onto (or {#code null} if the
                         *  binder is just used to convert a plain parameter value)
                         * @see #DEFAULT_OBJECT_NAME
                         */
                        // @ts-ignore
                        constructor(target: any)
                        /**
                         * Create a new instance.
                         * @param target the target object to bind onto (or {#code null} if the
                         *  binder is just used to convert a plain parameter value)
                         * @param objectName the name of the target object
                         */
                        // @ts-ignore
                        constructor(target: any, objectName: string)
                        /**
                         * Bind query params, form data, and or multipart form data to the binder target.
                         * @param exchange the current exchange.
                         * @return a {#code Mono<Void>} when binding is complete
                         */
                        // @ts-ignore
                        bind(exchange: org.springframework.web.server.ServerWebExchange): <any>
                        /**
                         * Protected method to obtain the values for data binding. By default this
                         * method delegates to {@link #extractValuesToBind(ServerWebExchange)}.
                         */
                        // @ts-ignore
                        getValuesToBind(exchange: org.springframework.web.server.ServerWebExchange): <any>
                        /**
                         * Combine query params and form data for multipart form data from the body
                         * of the request into a {@code Map<String, Object>} of values to use for
                         * data binding purposes.
                         * @param exchange the current exchange
                         * @return a {#code Mono} with the values to bind
                         * @see org.springframework.http.server.reactive.ServerHttpRequest#getQueryParams()
                         * @see ServerWebExchange#getFormData()
                         * @see ServerWebExchange#getMultipartData()
                         */
                        // @ts-ignore
                        extractValuesToBind(exchange: org.springframework.web.server.ServerWebExchange): <any>
                    }
                }
            }
        }
    }
}
