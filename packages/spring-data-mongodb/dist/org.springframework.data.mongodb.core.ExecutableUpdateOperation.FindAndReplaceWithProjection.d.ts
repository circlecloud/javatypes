declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableUpdateOperation {
                        /**
                         * Result type override (Optional).
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface FindAndReplaceWithProjection<T> extends org.springframework.data.mongodb.core.ExecutableUpdateOperation.FindAndReplaceWithOptions<T> {
                            /**
                             * Define the target type fields should be mapped to. <br />
                             * Skip this step if you are anyway only interested in the original domain type.
                             * @param resultType must not be {#literal null}.
                             * @param <R> result type.
                             * @return new instance of {#link FindAndReplaceWithProjection}.
                             * @throws IllegalArgumentException if resultType is {#literal null}.
                             */
                            // @ts-ignore
                            as<R>(resultType: java.lang.Class<R>): org.springframework.data.mongodb.core.ExecutableUpdateOperation.FindAndReplaceWithOptions<R>
                        }
                    }
                }
            }
        }
    }
}
