declare namespace org {
    namespace springframework {
        namespace asm {
            /**
             * Exception thrown when the constant pool of a class produced by a {@link ClassWriter} is too
             * large.
             * @author Jason Zaugg
             */
            // @ts-ignore
            class ClassTooLargeException extends java.lang.IndexOutOfBoundsException {
                /**
                 * Constructs a new {@link ClassTooLargeException}.
                 * @param className the internal name of the class.
                 * @param constantPoolCount the number of constant pool items of the class.
                 */
                // @ts-ignore
                constructor(className: java.lang.String | string, constantPoolCount: number /*int*/)
                /**
                 * Returns the internal name of the class.
                 * @return the internal name of the class.
                 */
                // @ts-ignore
                getClassName(): string
                /**
                 * Returns the number of constant pool items of the class.
                 * @return the number of constant pool items of the class.
                 */
                // @ts-ignore
                getConstantPoolCount(): number /*int*/
            }
        }
    }
}
