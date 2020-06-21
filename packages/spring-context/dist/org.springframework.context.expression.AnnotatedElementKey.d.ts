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
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public compareTo(other: org.springframework.context.expression.AnnotatedElementKey): number /*int*/
                }
            }
        }
    }
}
