declare namespace java {
    namespace util {
        namespace function$ {
            /**
             * Represents an operation that accepts an object-valued and a
             * {@code int}-valued argument, and returns no result.  This is the
             * {@code (reference, int)} specialization of {@link BiConsumer}.
             * Unlike most other functional interfaces, {@code ObjIntConsumer} is
             * expected to operate via side-effects.
             * <p>This is a <a href="package-summary.html">functional interface</a>
             * whose functional method is {@link #accept(Object, int)}.
             * @param <T> the type of the object argument to the operation
             * @see BiConsumer
             * @since 1.8
             */
            // @ts-ignore
            interface ObjIntConsumer<T> {
                /**
                 * Performs this operation on the given arguments.
                 * @param t the first input argument
                 * @param value the second input argument
                 */
                // @ts-ignore
                accept(t: T, value: number /*int*/): void
            }
        }
    }
}
