declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>IllegalPathStateException</code> represents an
             * exception that is thrown if an operation is performed on a path
             * that is in an illegal state with respect to the particular
             * operation being performed, such as appending a path segment
             * to a {@link GeneralPath} without an initial moveto.
             */
            // @ts-ignore
            class IllegalPathStateException extends java.lang.RuntimeException {
                /**
                 * Constructs an <code>IllegalPathStateException</code> with no
                 * detail message.
                 * @since 1.2
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs an <code>IllegalPathStateException</code> with the
                 * specified detail message.
                 * @param s   the detail message
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(s: string)
            }
        }
    }
}
