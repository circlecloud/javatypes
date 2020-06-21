declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * {@link ThreadLocal} subclass that exposes a specified name
             * as {@link #toString()} result (allowing for introspection).
             * @author Juergen Hoeller
             * @since 2.5.2
             * @param <T> the value type
             * @see NamedInheritableThreadLocal
             */
            // @ts-ignore
            class NamedThreadLocal<T> extends java.lang.ThreadLocal<T> {
                /**
                 * Create a new NamedThreadLocal with the given name.
                 * @param name a descriptive name for this ThreadLocal
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string)
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
