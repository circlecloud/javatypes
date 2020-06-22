declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace spel {
                        /**
                         * A value object for nodes in an expression. Allows iterating ove potentially available child {@link ExpressionNode}s.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class ExpressionNode extends java.lang.Object implements java.lang.Iterable<org.springframework.data.mongodb.core.spel.ExpressionNode> {
                            /**
                             * Creates a new {@link ExpressionNode} from the given {@link SpelNode} and {@link ExpressionState}.
                             * @param node must not be {#literal null}.
                             * @param state must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(node: SpelNode, state: ExpressionState)
                            /**
                             * Factory method to create {@link ExpressionNode}'s according to the given {@link SpelNode} and
                             * {@link ExpressionState}.
                             * @param node
                             * @param state must not be {#literal null}.
                             * @return an {#link ExpressionNode} for the given {@link SpelNode} or {@literal null} if {@literal null} was given
                             *          for the {@link SpelNode}.
                             */
                            // @ts-ignore
                            public static from(node: SpelNode, state: ExpressionState): org.springframework.data.mongodb.core.spel.ExpressionNode
                            /**
                             * Returns the name of the {@link ExpressionNode}.
                             * @return 
                             */
                            // @ts-ignore
                            public getName(): string
                            /**
                             * Returns whether the current {@link ExpressionNode} is backed by the given type.
                             * @param type must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public isOfType(type: java.lang.Class<any>): boolean
                            /**
                             * Returns whether the {@link ExpressionNode} is a mathematical operation.
                             * @return 
                             */
                            // @ts-ignore
                            public isMathematicalOperation(): boolean
                            /**
                             * Returns whether the {@link ExpressionNode} is a logical conjunction operation like {@code &&, ||}.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public isLogicalOperator(): boolean
                            /**
                             * Returns whether the {@link ExpressionNode} is a literal.
                             * @return 
                             */
                            // @ts-ignore
                            public isLiteral(): boolean
                            /**
                             * Returns the value of the current node.
                             * @return 
                             */
                            // @ts-ignore
                            public getValue(): any
                            /**
                             * Returns whether the current node has child nodes.
                             * @return 
                             */
                            // @ts-ignore
                            public hasChildren(): boolean
                            /**
                             * Returns the child {@link ExpressionNode} with the given index.
                             * @param index must not be negative.
                             * @return 
                             */
                            // @ts-ignore
                            public getChild(index: number /*int*/): org.springframework.data.mongodb.core.spel.ExpressionNode
                            /**
                             * Returns whether the {@link ExpressionNode} has a first child node that is not of the given type.
                             * @param type must not be {#literal null}.
                             * @return 
                             */
                            // @ts-ignore
                            public hasfirstChildNotOfType(type: java.lang.Class<any>): boolean
                            /**
                             * Creates a new {@link ExpressionNode} from the given {@link SpelNode}.
                             * @param node
                             * @return 
                             */
                            // @ts-ignore
                            from(node: SpelNode): org.springframework.data.mongodb.core.spel.ExpressionNode
                            // @ts-ignore
                            public iterator(): java.util.Iterator<org.springframework.data.mongodb.core.spel.ExpressionNode>
                        }
                    }
                }
            }
        }
    }
}
