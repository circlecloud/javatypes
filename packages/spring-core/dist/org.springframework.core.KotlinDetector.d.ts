declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * A common delegate for detecting Kotlin's presence and for identifying Kotlin types.
             * @author Juergen Hoeller
             * @author Sebastien Deleuze
             * @since 5.0
             */
            // @ts-ignore
            abstract class KotlinDetector extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Determine whether Kotlin is present in general.
                 */
                // @ts-ignore
                public static isKotlinPresent(): boolean
                /**
                 * Determine whether Kotlin reflection is present.
                 * @since 5.1
                 */
                // @ts-ignore
                public static isKotlinReflectPresent(): boolean
                /**
                 * Determine whether the given {@code Class} is a Kotlin type
                 * (with Kotlin metadata present on it).
                 */
                // @ts-ignore
                public static isKotlinType(clazz: java.lang.Class<any>): boolean
            }
        }
    }
}
