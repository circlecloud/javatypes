declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace spel {
                        /**
                         * The context for an {@link ExpressionNode} transformation.
                         * @author Thomas Darimont
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class ExpressionTransformationContextSupport<T extends org.springframework.data.mongodb.core.spel.ExpressionNode> extends java.lang.Object {
                            /**
                             * Creates a new {@link ExpressionTransformationContextSupport} for the given {@link ExpressionNode}s and an optional
                             * previous operation.
                             * @param currentNode must not be {#literal null}.
                             * @param parentNode may be {#literal null}.
                             * @param previousOperationObject may be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(currentNode: T, parentNode: org.springframework.data.mongodb.core.spel.ExpressionNode, previousOperationObject: Document)
                            /**
                             * Returns the current {@link ExpressionNode}.
                             * @return 
                             */
                            // @ts-ignore
                            public getCurrentNode(): T
                            /**
                             * Returns the parent {@link ExpressionNode} or {@literal null} if none available.
                             * @return 
                             */
                            // @ts-ignore
                            public getParentNode(): org.springframework.data.mongodb.core.spel.ExpressionNode
                            /**
                             * Returns the previously accumulated operation object or {@literal null} if none available. Rather than manually
                             * adding stuff to the object prefer using {@link #addToPreviousOrReturn(Object)} to transparently do if one is
                             * present.
                             * @see #hasPreviousOperation()
                             * @see #addToPreviousOrReturn(Object)
                             * @return 
                             */
                            // @ts-ignore
                            public getPreviousOperationObject(): Document
                            /**
                             * Returns whether a previous operation is present.
                             * @return 
                             */
                            // @ts-ignore
                            public hasPreviousOperation(): boolean
                            /**
                             * Returns whether the parent node is of the same operation as the current node.
                             * @return 
                             */
                            // @ts-ignore
                            public parentIsSameOperation(): boolean
                            /**
                             * Adds the given value to the previous operation and returns it.
                             * @param value
                             * @return 
                             */
                            // @ts-ignore
                            public addToPreviousOperation(value: java.lang.Object | any): Document
                            /**
                             * Adds the given value to the previous operation if one is present or returns the value to add as is.
                             * @param value
                             * @return 
                             */
                            // @ts-ignore
                            public addToPreviousOrReturn(value: java.lang.Object | any): any
                        }
                    }
                }
            }
        }
    }
}
