declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Exception thrown when a message can't be resolved.
             * @author Rod Johnson
             */
            // @ts-ignore
            class NoSuchMessageException extends java.lang.RuntimeException {
                /**
                 * Create a new exception.
                 * @param code the code that could not be resolved for given locale
                 * @param locale the locale that was used to search for the code within
                 */
                // @ts-ignore
                constructor(code: java.lang.String | string, locale: java.util.Locale)
                /**
                 * Create a new exception.
                 * @param code the code that could not be resolved for given locale
                 */
                // @ts-ignore
                constructor(code: java.lang.String | string)
            }
        }
    }
}
