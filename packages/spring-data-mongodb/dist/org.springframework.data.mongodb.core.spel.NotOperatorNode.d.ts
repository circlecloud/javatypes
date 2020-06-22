declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace spel {
                        /**
                         * @author Christoph Strobl
                         * @since 1.10
                         */
                        // @ts-ignore
                        class NotOperatorNode extends org.springframework.data.mongodb.core.spel.ExpressionNode {
                            /**
                             * Creates a new {@link ExpressionNode} from the given {@link OperatorNot} and {@link ExpressionState}.
                             * @param node must not be {#literal null}.
                             * @param state must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(node: OperatorNot, state: ExpressionState)
                            // @ts-ignore
                            public getMongoOperator(): string
                        }
                    }
                }
            }
        }
    }
}
