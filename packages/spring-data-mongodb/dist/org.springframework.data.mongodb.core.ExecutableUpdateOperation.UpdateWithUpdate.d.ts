declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableUpdateOperation {
                        /**
                         * Declare the {@link Update} to apply.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface UpdateWithUpdate<T> {
                            /**
                             * Set the {@link Update} to be applied.
                             * @param update must not be {#literal null}.
                             * @return new instance of {#link TerminatingUpdate}.
                             * @throws IllegalArgumentException if update is {#literal null}.
                             */
                            // @ts-ignore
                            apply(update: org.springframework.data.mongodb.core.query.Update): org.springframework.data.mongodb.core.ExecutableUpdateOperation.TerminatingUpdate<T>
                            /**
                             * Specify {@code replacement} object.
                             * @param replacement must not be {#literal null}.
                             * @return new instance of {#link FindAndReplaceOptions}.
                             * @throws IllegalArgumentException if options is {#literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            replaceWith(replacement: T): org.springframework.data.mongodb.core.ExecutableUpdateOperation.FindAndReplaceWithProjection<T>
                        }
                    }
                }
            }
        }
    }
}
