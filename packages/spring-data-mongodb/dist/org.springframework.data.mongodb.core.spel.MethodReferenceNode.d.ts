declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace spel {
                        /**
                         * An {@link ExpressionNode} representing a method reference.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Sebastien Gerard
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MethodReferenceNode extends org.springframework.data.mongodb.core.spel.ExpressionNode {
                            /**
                             * Returns the name of the method.
                             * @Deprecated since 1.10. Please use {#link #getMethodReference()}.
                             */
                            // @ts-ignore
                            public getMethodName(): string
                            /**
                             * Return the {@link AggregationMethodReference}.
                             * @return can be {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public getMethodReference(): org.springframework.data.mongodb.core.spel.MethodReferenceNode.AggregationMethodReference
                        }
                    }
                }
            }
        }
    }
}
