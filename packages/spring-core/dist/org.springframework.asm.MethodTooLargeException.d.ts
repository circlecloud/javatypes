declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * Exception thrown when the Code attribute of a method produced by a {@link ClassWriter} is too
             * large.
             * @author Jason Zaugg
             */
            // @ts-ignore
            class MethodTooLargeException extends java.lang.IndexOutOfBoundsException {
                /**
                 * Constructs a new {@link MethodTooLargeException}.
                 * @param className the internal name of the owner class.
                 * @param methodName the name of the method.
                 * @param descriptor the descriptor of the method.
                 * @param codeSize the size of the method's Code attribute, in bytes.
                 */
                // @ts-ignore
                constructor(className: java.lang.String | string, methodName: java.lang.String | string, descriptor: java.lang.String | string, codeSize: number /*int*/)
                /**
                 * Returns the internal name of the owner class.
                 * @return the internal name of the owner class.
                 */
                // @ts-ignore
                getClassName(): string
                /**
                 * Returns the name of the method.
                 * @return the name of the method.
                 */
                // @ts-ignore
                getMethodName(): string
                /**
                 * Returns the descriptor of the method.
                 * @return the descriptor of the method.
                 */
                // @ts-ignore
                getDescriptor(): string
                /**
                 * Returns the size of the method's Code attribute, in bytes.
                 * @return the size of the method's Code attribute, in bytes.
                 */
                // @ts-ignore
                getCodeSize(): number /*int*/
            }
        }
    }
}
