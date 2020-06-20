declare namespace java {
    namespace lang {
        namespace instrument {
            /**
             * Thrown by an implementation of
             * {@link java.lang.instrument.Instrumentation#redefineClasses Instrumentation.redefineClasses}
             * when one of the specified classes cannot be modified.
             * @see java.lang.instrument.Instrumentation#redefineClasses
             * @since 1.5
             */
            // @ts-ignore
            class UnmodifiableClassException extends java.lang.Exception {
                /**
                 * Constructs an <code>UnmodifiableClassException</code> with no
                 * detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an <code>UnmodifiableClassException</code> with the
                 * specified detail message.
                 * @param s   the detail message.
                 */
                // @ts-ignore
                constructor(s: string)
            }
        }
    }
}
