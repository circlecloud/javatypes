declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Contract for generating universally unique identifiers {@link UUID (UUIDs)}.
             * @author Rossen Stoyanchev
             * @since 4.0
             */
            // @ts-ignore
            interface IdGenerator {
                /**
                 * Generate a new identifier.
                 * @return the generated identifier
                 */
                // @ts-ignore
                generateId(): java.util.UUID
            }
        }
    }
}
