declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Allows direct interaction with the underlying {@link LazyLoadingInterceptor}.
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @since 1.5
                         */
                        // @ts-ignore
                        interface LazyLoadingProxy {
                            /**
                             * Initializes the proxy and returns the wrapped value.
                             * @return 
                             * @since 1.5
                             */
                            // @ts-ignore
                            getTarget(): any
                            /**
                             * Returns the {@link DBRef} represented by this {@link LazyLoadingProxy}, may be null.
                             * @return 
                             * @since 1.5
                             */
                            // @ts-ignore
                            toDBRef(): DBRef
                        }
                    }
                }
            }
        }
    }
}
