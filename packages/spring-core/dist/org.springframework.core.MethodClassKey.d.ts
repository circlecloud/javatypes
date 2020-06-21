declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * A common key class for a method against a specific target class,
             * including {@link #toString()} representation and {@link Comparable}
             * support (as suggested for custom {@code HashMap} keys as of Java 8).
             * @author Juergen Hoeller
             * @since 4.3
             */
            // @ts-ignore
            class MethodClassKey extends java.lang.Object implements java.lang.Comparable<org.springframework.core.MethodClassKey> {
                /**
                 * Create a key object for the given method and target class.
                 * @param method the method to wrap (must not be {#code null})
                 * @param targetClass the target class that the method will be invoked
                 *  on (may be {#code null} if identical to the declaring class)
                 */
                // @ts-ignore
                constructor(method: java.lang.reflect.Method, targetClass: java.lang.Class<any>)
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public compareTo(other: org.springframework.core.MethodClassKey): number /*int*/
            }
        }
    }
}
