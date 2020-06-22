declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace UnwindOperation {
                            /**
                             * Builder for fluent {@link UnwindOperation} creation.
                             * @author Mark Paluch
                             * @since 1.10
                             */
                            // @ts-ignore
                            class UnwindOperationBuilder extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.UnwindOperation.PathBuilder, org.springframework.data.mongodb.core.aggregation.UnwindOperation.IndexBuilder, org.springframework.data.mongodb.core.aggregation.UnwindOperation.EmptyArraysBuilder {
                                /**
                                 * Creates new builder for {@link UnwindOperation}.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public static newBuilder(): org.springframework.data.mongodb.core.aggregation.UnwindOperation.PathBuilder
                                // @ts-ignore
                                public preserveNullAndEmptyArrays(): org.springframework.data.mongodb.core.aggregation.UnwindOperation
                                // @ts-ignore
                                public skipNullAndEmptyArrays(): org.springframework.data.mongodb.core.aggregation.UnwindOperation
                                // @ts-ignore
                                public arrayIndex(field: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.UnwindOperation.EmptyArraysBuilder
                                // @ts-ignore
                                public noArrayIndex(): org.springframework.data.mongodb.core.aggregation.UnwindOperation.EmptyArraysBuilder
                                // @ts-ignore
                                public path(path: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.UnwindOperation.UnwindOperationBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
