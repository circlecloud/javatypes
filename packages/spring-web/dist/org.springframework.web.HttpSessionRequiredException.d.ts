declare namespace org {
    namespace springframework {
        namespace web {
            /**
             * Exception thrown when an HTTP request handler requires a pre-existing session.
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            class HttpSessionRequiredException extends ServletException {
                /**
                 * Create a new HttpSessionRequiredException.
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(msg: string)
                /**
                 * Create a new HttpSessionRequiredException.
                 * @param msg the detail message
                 * @param expectedAttribute the name of the expected session attribute
                 * @since 4.3
                 */
                // @ts-ignore
                constructor(msg: string, expectedAttribute: string)
                /**
                 * Return the name of the expected session attribute, if any.
                 * @since 4.3
                 */
                // @ts-ignore
                getExpectedAttribute(): java.lang.String
            }
        }
    }
}
