declare namespace org {
    namespace springframework {
        namespace core {
            namespace annotation {
                /**
                 * Strategy used to determine annotations that act as containers for other
                 * annotations. The {@link #standardRepeatables()} method provides a default
                 * strategy that respects Java's {@link Repeatable @Repeatable} support and
                 * should be suitable for most situations.
                 * <p>The {@link #of} method can be used to register relationships for
                 * annotations that do not wish to use {@link Repeatable @Repeatable}.
                 * <p>To completely disable repeatable support use {@link #none()}.
                 * @author Phillip Webb
                 * @since 5.2
                 */
                // @ts-ignore
                class RepeatableContainers extends java.lang.Object {
                    /**
                     * Add an additional explicit relationship between a contained and
                     * repeatable annotation.
                     * @param container the container type
                     * @param repeatable the contained repeatable type
                     * @return a new {#link RepeatableContainers} instance
                     */
                    // @ts-ignore
                    and(container: java.lang.Class<java.lang.annotation.Annotation>, repeatable: java.lang.Class<java.lang.annotation.Annotation>): org.springframework.core.annotation.RepeatableContainers
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    /**
                     * Create a {@link RepeatableContainers} instance that searches using Java's
                     * {@link Repeatable @Repeatable} annotation.
                     * @return a {#link RepeatableContainers} instance
                     */
                    // @ts-ignore
                    standardRepeatables(): org.springframework.core.annotation.RepeatableContainers
                    /**
                     * Create a {@link RepeatableContainers} instance that uses a defined
                     * container and repeatable type.
                     * @param repeatable the contained repeatable annotation
                     * @param container the container annotation or {#code null}. If specified,
                     *  this annotation must declare a {@code value} attribute returning an array
                     *  of repeatable annotations. If not specified, the container will be
                     *  deduced by inspecting the {@code @Repeatable} annotation on
                     *  {@code repeatable}.
                     * @return a {#link RepeatableContainers} instance
                     */
                    // @ts-ignore
                    of(repeatable: java.lang.Class<java.lang.annotation.Annotation>, container: java.lang.Class<java.lang.annotation.Annotation>): org.springframework.core.annotation.RepeatableContainers
                    /**
                     * Create a {@link RepeatableContainers} instance that does not expand any
                     * repeatable annotations.
                     * @return a {#link RepeatableContainers} instance
                     */
                    // @ts-ignore
                    none(): org.springframework.core.annotation.RepeatableContainers
                }
            }
        }
    }
}
