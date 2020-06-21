declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * An <code>Operation</code> contains a description of a Java method.
             * <code>Operation</code> objects were used in JDK1.1 version stubs and
             * skeletons. The <code>Operation</code> class is not needed for 1.2 style
             * stubs (stubs generated with <code>rmic -v1.2</code>); hence, this class
             * is deprecated.
             * @since JDK1.1
             * @deprecated no replacement
             */
            // @ts-ignore
            class Operation extends java.lang.Object {
                /**
                 * Creates a new Operation object.
                 * @param op method name
                 * @deprecated no replacement
                 * @since JDK1.1
                 */
                // @ts-ignore
                constructor(op: java.lang.String | string)
                /**
                 * Returns the name of the method.
                 * @return method name
                 * @deprecated no replacement
                 * @since JDK1.1
                 */
                // @ts-ignore
                public getOperation(): string
                /**
                 * Returns the string representation of the operation.
                 * @deprecated no replacement
                 * @since JDK1.1
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
