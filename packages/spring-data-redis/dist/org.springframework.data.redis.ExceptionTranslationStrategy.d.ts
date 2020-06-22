declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                /**
                 * Potentially translates an {@link Exception} into appropriate {@link DataAccessException}.
                 * @author Christoph Strobl
                 * @author Thomas Darimont
                 * @since 1.4
                 */
                // @ts-ignore
                interface ExceptionTranslationStrategy {
                    /**
                     * Potentially translate the given {@link Exception} into {@link DataAccessException}.
                     * @param e must not be {#literal null}.
                     * @return can be {#literal null} if given {@link Exception} cannot be translated.
                     */
                    // @ts-ignore
                    translate(e: java.lang.Exception): DataAccessException
                }
            }
        }
    }
}
