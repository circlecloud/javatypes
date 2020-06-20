declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents an annotated type.
             * For example:
             * <pre>
             * {@code @NonNull String}
             * {@code @Positive int}
             * </pre>
             * @author Mahmood Ali
             * @since 1.8
             */
            // @ts-ignore
            interface AnnotatedType extends com.sun.javadoc.Type {
                // @ts-ignore
                annotations(): com.sun.javadoc.AnnotationDesc[]
                // @ts-ignore
                underlyingType(): com.sun.javadoc.Type
            }
        }
    }
}
