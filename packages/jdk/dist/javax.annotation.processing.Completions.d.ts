declare namespace javax {
    namespace annotation {
        namespace processing {
            /**
             * Utility class for assembling {@link Completion} objects.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @since 1.6
             */
            // @ts-ignore
            class Completions extends java.lang.Object {
                /**
                 * Returns a completion of the value and message.
                 * @param value the text of the completion
                 * @param message a message about the completion
                 * @return a completion of the provided value and message
                 */
                // @ts-ignore
                public static of(value: java.lang.String | string, message: java.lang.String | string): javax.annotation.processing.Completion
                /**
                 * Returns a completion of the value and an empty message
                 * @param value the text of the completion
                 * @return a completion of the value and an empty message
                 */
                // @ts-ignore
                public static of(value: java.lang.String | string): javax.annotation.processing.Completion
            }
        }
    }
}
