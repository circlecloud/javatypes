declare namespace javax {
    namespace annotation {
        namespace processing {
            /**
             * A suggested {@linkplain Processor#getCompletions <em>completion</em>} for an
             * annotation.  A completion is text meant to be inserted into a
             * program as part of an annotation.
             * @author Joseph D. Darcy
             * @author Scott Seligman
             * @author Peter von der Ah&eacute;
             * @since 1.6
             */
            // @ts-ignore
            interface Completion {
                /**
                 * Returns the text of the suggested completion.
                 * @return the text of the suggested completion.
                 */
                // @ts-ignore
                getValue(): java.lang.String
                /**
                 * Returns an informative message about the completion.
                 * @return an informative message about the completion.
                 */
                // @ts-ignore
                getMessage(): java.lang.String
            }
        }
    }
}
