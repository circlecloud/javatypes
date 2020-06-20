declare namespace javax {
    namespace xml {
        namespace ws {
            /**
             * Holds a value of type <code>T</code>.
             * @since JAX-WS 2.0
             */
            // @ts-ignore
            class Holder<T> extends java.lang.Object implements java.io.Serializable {
                /**
                 * Creates a new holder with a <code>null</code> value.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new holder with the specified value.
                 * @param value The value to be stored in the holder.
                 */
                // @ts-ignore
                constructor(value: T)
                /**
                 * The value contained in the holder.
                 */
                // @ts-ignore
                value: T
            }
        }
    }
}
