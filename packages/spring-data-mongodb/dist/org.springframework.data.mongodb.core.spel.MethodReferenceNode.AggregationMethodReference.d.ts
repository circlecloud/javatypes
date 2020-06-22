declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace spel {
                        namespace MethodReferenceNode {
                            /**
                             * @author Christoph Strobl
                             * @since 1.10
                             */
                            // @ts-ignore
                            class AggregationMethodReference extends java.lang.Object {
                                /**
                                 * Get the MongoDB specific operator.
                                 * @return can be {#literal null}.
                                 */
                                // @ts-ignore
                                public getMongoOperator(): string
                                /**
                                 * Get the {@link ArgumentType} used by the MongoDB.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public getArgumentType(): org.springframework.data.mongodb.core.spel.MethodReferenceNode.AggregationMethodReference.ArgumentType
                                /**
                                 * Get the property names in order order of appearance in resulting operation.
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public getArgumentMap(): string[]
                            }
                        }
                    }
                }
            }
        }
    }
}
