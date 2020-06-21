declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                namespace json {
                    /**
                     * A simple holder for the POJO to serialize via
                     * {@link MappingJackson2HttpMessageConverter} along with further
                     * serialization instructions to be passed in to the converter.
                     * <p>On the server side this wrapper is added with a
                     * {@code ResponseBodyInterceptor} after content negotiation selects the
                     * converter to use but before the write.
                     * <p>On the client side, simply wrap the POJO and pass it in to the
                     * {@code RestTemplate}.
                     * @author Rossen Stoyanchev
                     * @since 4.1
                     */
                    // @ts-ignore
                    class MappingJacksonValue extends java.lang.Object {
                        /**
                         * Create a new instance wrapping the given POJO to be serialized.
                         * @param value the Object to be serialized
                         */
                        // @ts-ignore
                        constructor(value: java.lang.Object | any)
                        /**
                         * Modify the POJO to serialize.
                         */
                        // @ts-ignore
                        public setValue(value: java.lang.Object | any): void
                        /**
                         * Return the POJO that needs to be serialized.
                         */
                        // @ts-ignore
                        public getValue(): any
                        /**
                         * Set the serialization view to serialize the POJO with.
                         * @see com.fasterxml.jackson.databind.ObjectMapper#writerWithView(Class)
                         * @see com.fasterxml.jackson.annotation.JsonView
                         */
                        // @ts-ignore
                        public setSerializationView(serializationView: java.lang.Class<any>): void
                        /**
                         * Return the serialization view to use.
                         * @see com.fasterxml.jackson.databind.ObjectMapper#writerWithView(Class)
                         * @see com.fasterxml.jackson.annotation.JsonView
                         */
                        // @ts-ignore
                        public getSerializationView(): java.lang.Class<any>
                        /**
                         * Set the Jackson filter provider to serialize the POJO with.
                         * @since 4.2
                         * @see com.fasterxml.jackson.databind.ObjectMapper#writer(FilterProvider)
                         * @see com.fasterxml.jackson.annotation.JsonFilter
                         * @see Jackson2ObjectMapperBuilder#filters(FilterProvider)
                         */
                        // @ts-ignore
                        public setFilters(filters: FilterProvider): void
                        /**
                         * Return the Jackson filter provider to use.
                         * @since 4.2
                         * @see com.fasterxml.jackson.databind.ObjectMapper#writer(FilterProvider)
                         * @see com.fasterxml.jackson.annotation.JsonFilter
                         */
                        // @ts-ignore
                        public getFilters(): FilterProvider
                    }
                }
            }
        }
    }
}
