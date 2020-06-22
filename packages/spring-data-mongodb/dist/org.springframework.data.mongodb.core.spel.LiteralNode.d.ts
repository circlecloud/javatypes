declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace spel {
                        /**
                         * A node representing a literal in an expression.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class LiteralNode extends org.springframework.data.mongodb.core.spel.ExpressionNode {
                            /**
                             * Returns whether the given {@link ExpressionNode} is a unary minus.
                             * @param parent
                             * @return 
                             */
                            // @ts-ignore
                            public isUnaryMinus(parent: org.springframework.data.mongodb.core.spel.ExpressionNode): boolean
                            // @ts-ignore
                            public isLiteral(): boolean
                        }
                    }
                }
            }
        }
    }
}
