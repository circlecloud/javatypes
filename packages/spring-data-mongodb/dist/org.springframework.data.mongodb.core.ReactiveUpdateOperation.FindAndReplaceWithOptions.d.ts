declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveUpdateOperation {
                        /**
                         * Define {@link FindAndReplaceOptions}.
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface FindAndReplaceWithOptions<T> extends org.springframework.data.mongodb.core.ReactiveUpdateOperation.TerminatingFindAndReplace<T> {
                            /**
                             * Explicitly define {@link FindAndReplaceOptions} for the {@link Update}.
                             * @param options must not be {#literal null}.
                             * @return new instance of {#link FindAndReplaceOptions}.
                             * @throws IllegalArgumentException if options is {#literal null}.
                             */
                            // @ts-ignore
                            withOptions(options: org.springframework.data.mongodb.core.FindAndReplaceOptions): org.springframework.data.mongodb.core.ReactiveUpdateOperation.FindAndReplaceWithProjection<T>
                        }
                    }
                }
            }
        }
    }
}
