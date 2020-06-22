declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveUpdateOperation {
                        /**
                         * Define {@link FindAndModifyOptions} (optional).
                         */
                        // @ts-ignore
                        interface FindAndModifyWithOptions<T> {
                            /**
                             * Explicitly define {@link FindAndModifyOptions} for the
                             * {@link org.springframework.data.mongodb.core.query.Update}.
                             * @param options must not be {#literal null}.
                             * @return new instance of {#link TerminatingFindAndModify}. Never {@literal null}.
                             * @throws IllegalArgumentException if options is {#literal null}.
                             */
                            // @ts-ignore
                            withOptions(options: org.springframework.data.mongodb.core.FindAndModifyOptions): org.springframework.data.mongodb.core.ReactiveUpdateOperation.TerminatingFindAndModify<T>
                        }
                    }
                }
            }
        }
    }
}
