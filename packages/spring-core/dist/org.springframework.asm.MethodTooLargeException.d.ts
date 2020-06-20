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
                constructor(className: string, methodName: string, descriptor: string, codeSize: number /*int*/)
                /**
                 * Returns the internal name of the owner class.
                 * @return the internal name of the owner class.
                 */
                // @ts-ignore
                getClassName(): java.lang.String
                /**
                 * Returns the name of the method.
                 * @return the name of the method.
                 */
                // @ts-ignore
                getMethodName(): java.lang.String
                /**
                 * Returns the descriptor of the method.
                 * @return the descriptor of the method.
                 */
                // @ts-ignore
                getDescriptor(): java.lang.String
                /**
                 * Returns the size of the method's Code attribute, in bytes.
                 * @return the size of the method's Code attribute, in bytes.
                 */
                // @ts-ignore
                getCodeSize(): int
            }
        }
    }
}
