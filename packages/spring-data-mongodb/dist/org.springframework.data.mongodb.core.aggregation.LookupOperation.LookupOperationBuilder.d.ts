declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace aggregation {
                        namespace LookupOperation {
                            /**
                             * Builder for fluent {@link LookupOperation} creation.
                             * @author Christoph Strobl
                             * @since 1.9
                             */
                            // @ts-ignore
                            class LookupOperationBuilder extends java.lang.Object implements org.springframework.data.mongodb.core.aggregation.LookupOperation.FromBuilder, org.springframework.data.mongodb.core.aggregation.LookupOperation.LocalFieldBuilder, org.springframework.data.mongodb.core.aggregation.LookupOperation.ForeignFieldBuilder, org.springframework.data.mongodb.core.aggregation.LookupOperation.AsBuilder {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Creates new builder for {@link LookupOperation}.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public static newBuilder(): org.springframework.data.mongodb.core.aggregation.LookupOperation.FromBuilder
                                // @ts-ignore
                                public from(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.LookupOperation.LocalFieldBuilder
                                // @ts-ignore
                                public as(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.LookupOperation
                                // @ts-ignore
                                public foreignField(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.LookupOperation.AsBuilder
                                // @ts-ignore
                                public localField(name: java.lang.String | string): org.springframework.data.mongodb.core.aggregation.LookupOperation.ForeignFieldBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
