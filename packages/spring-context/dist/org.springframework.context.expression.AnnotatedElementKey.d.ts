declare namespace org {
    namespace springframework {
        namespace context {
            namespace expression {
                /**
                 * Represent an {@link AnnotatedElement} on a particular {@link Class}
                 * and is suitable as a key.
                 * @author Costin Leau
                 * @author Stephane Nicoll
                 * @since 4.2
                 * @see CachedExpressionEvaluator
                 */
                // @ts-ignore
                class AnnotatedElementKey extends java.lang.Object implements java.lang.Comparable<org.springframework.context.expression.AnnotatedElementKey> {
                    /**
                     * Create a new instance with the specified {@link AnnotatedElement} and
                     * optional target {@link Class}.
                     */
                    // @ts-ignore
                    constructor(element: java.lang.reflect.AnnotatedElement, targetClass: java.lang.Class<any>)
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                    // @ts-ignore
                    compareTo(other: org.springframework.context.expression.AnnotatedElementKey): int
                }
            }
        }
    }
}
