declare namespace org {
    namespace bukkit {
        namespace util {
            /**
             * Represents an operation that accepts a single input argument and returns no
             * result.
             * @param <T> the type of the input to the operation
             */
            // @ts-ignore
            interface Consumer<T> {
                /**
                 * Performs this operation on the given argument.
                 * @param t the input argument
                 */
                // @ts-ignore
                accept(t: T): void
            }
        }
    }
}
