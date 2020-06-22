declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ExecutableUpdateOperation {
                        /**
                         * Define {@link FindAndModifyOptions}.
                         * @author Christoph Strobl
                         * @since 2.0
                         */
                        // @ts-ignore
                        interface FindAndModifyWithOptions<T> {
                            /**
                             * Explicitly define {@link FindAndModifyOptions} for the {@link Update}.
                             * @param options must not be {#literal null}.
                             * @return new instance of {#link FindAndModifyWithOptions}.
                             * @throws IllegalArgumentException if options is {#literal null}.
                             */
                            // @ts-ignore
                            withOptions(options: org.springframework.data.mongodb.core.FindAndModifyOptions): org.springframework.data.mongodb.core.ExecutableUpdateOperation.TerminatingFindAndModify<T>
                        }
                    }
                }
            }
        }
    }
}
