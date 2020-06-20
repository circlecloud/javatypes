declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * A strategy interface for formatting message codes.
             * @author Chris Beams
             * @since 3.2
             * @see DefaultMessageCodesResolver
             * @see DefaultMessageCodesResolver.Format
             */
            // @ts-ignore
            interface MessageCodeFormatter {
                /**
                 * Build and return a message code consisting of the given fields,
                 * usually delimited by {@link DefaultMessageCodesResolver#CODE_SEPARATOR}.
                 * @param errorCode e.g.: "typeMismatch"
                 * @param objectName e.g.: "user"
                 * @param field e.g. "age"
                 * @return concatenated message code, e.g.: "typeMismatch.user.age"
                 * @see DefaultMessageCodesResolver.Format
                 */
                // @ts-ignore
                format(errorCode: string, objectName: string, field: string): java.lang.String
            }
        }
    }
}
