declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveFindOperation {
                        /**
                         * Result type override (optional).
                         */
                        // @ts-ignore
                        interface FindWithProjection<T> extends org.springframework.data.mongodb.core.ReactiveFindOperation.FindWithQuery<T>, org.springframework.data.mongodb.core.ReactiveFindOperation.FindDistinct {
                            /**
                             * Define the target type fields should be mapped to. <br />
                             * Skip this step if you are anyway only interested in the original domain type.
                             * @param resultType must not be {#literal null}.
                             * @param <R> result type.
                             * @return new instance of {#link FindWithProjection}.
                             * @throws IllegalArgumentException if resultType is {#literal null}.
                             */
                            // @ts-ignore
                            as<R>(resultType: java.lang.Class<R>): org.springframework.data.mongodb.core.ReactiveFindOperation.FindWithQuery<R>
                        }
                    }
                }
            }
        }
    }
}
