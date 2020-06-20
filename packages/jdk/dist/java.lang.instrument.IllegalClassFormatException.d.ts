declare namespace java {
    namespace lang {
        namespace instrument {
            /**
             * Thrown by an implementation of
             * {@link java.lang.instrument.ClassFileTransformer#transform ClassFileTransformer.transform}
             * when its input parameters are invalid.
             * This may occur either because the initial class file bytes were
             * invalid or a previously applied transform corrupted the bytes.
             * @see java.lang.instrument.ClassFileTransformer#transform
             * @since 1.5
             */
            // @ts-ignore
            class IllegalClassFormatException extends java.lang.Exception {
                /**
                 * Constructs an <code>IllegalClassFormatException</code> with no
                 * detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an <code>IllegalClassFormatException</code> with the
                 * specified detail message.
                 * @param s   the detail message.
                 */
                // @ts-ignore
                constructor(s: string)
            }
        }
    }
}
