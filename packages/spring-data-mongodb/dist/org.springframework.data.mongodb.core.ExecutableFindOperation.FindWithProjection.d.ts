declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableFindOperation {
                        /**
                         * Result type override (Optional).
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface FindWithProjection<T> extends org.springframework.data.mongodb.core.ExecutableFindOperation.FindWithQuery<T>, org.springframework.data.mongodb.core.ExecutableFindOperation.FindDistinct {
                            /**
                             * Define the target type fields should be mapped to. <br />
                             * Skip this step if you are anyway only interested in the original domain type.
                             * @param resultType must not be {#literal null}.
                             * @param <R> result type.
                             * @return new instance of {#link FindWithProjection}.
                             * @throws IllegalArgumentException if resultType is {#literal null}.
                             */
                            // @ts-ignore
                            as<R>(resultType: java.lang.Class<R>): org.springframework.data.mongodb.core.ExecutableFindOperation.FindWithQuery<R>
                        }
                    }
                }
            }
        }
    }
}
