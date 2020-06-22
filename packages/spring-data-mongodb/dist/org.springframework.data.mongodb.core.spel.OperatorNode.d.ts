declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace spel {
                        /**
                         * An {@link ExpressionNode} representing an operator.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class OperatorNode extends org.springframework.data.mongodb.core.spel.ExpressionNode {
                            // @ts-ignore
                            public isMathematicalOperation(): boolean
                            // @ts-ignore
                            public isLogicalOperator(): boolean
                            /**
                             * Returns whether the operator is unary.
                             * @return 
                             */
                            // @ts-ignore
                            public isUnaryOperator(): boolean
                            /**
                             * Returns the Mongo expression of the operator.
                             * @return 
                             */
                            // @ts-ignore
                            public getMongoOperator(): string
                            /**
                             * Returns whether the operator is a unary minus, e.g. -1.
                             * @return 
                             */
                            // @ts-ignore
                            public isUnaryMinus(): boolean
                            /**
                             * Returns the left operand as {@link ExpressionNode}.
                             * @return 
                             */
                            // @ts-ignore
                            public getLeft(): org.springframework.data.mongodb.core.spel.ExpressionNode
                            /**
                             * Returns the right operand as {@link ExpressionNode}.
                             * @return 
                             */
                            // @ts-ignore
                            public getRight(): org.springframework.data.mongodb.core.spel.ExpressionNode
                        }
                    }
                }
            }
        }
    }
}
