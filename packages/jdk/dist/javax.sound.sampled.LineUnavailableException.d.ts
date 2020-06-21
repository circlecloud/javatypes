declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * A <code>LineUnavailableException</code> is an exception indicating that a
             * line cannot be opened because it is unavailable.  This situation
             * arises most commonly when a requested line is already in use
             * by another application.
             * @author Kara Kytle
             * @since 1.3
             */
            // @ts-ignore
            class LineUnavailableException extends java.lang.Exception {
                /**
                 * Constructs a <code>LineUnavailableException</code> that has
                 * <code>null</code> as its error detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a <code>LineUnavailableException</code> that has
                 * the specified detail message.
                 * @param message a string containing the error detail message
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
            }
        }
    }
}
