declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents an annotation.
             * An annotation associates a value with each element of an annotation type.
             * @author Scott Seligman
             * @since 1.5
             */
            // @ts-ignore
            interface AnnotationDesc {
                /**
                 * Returns the annotation type of this annotation.
                 * @return the annotation type of this annotation.
                 */
                // @ts-ignore
                annotationType(): com.sun.javadoc.AnnotationTypeDoc
                /**
                 * Returns this annotation's elements and their values.
                 * Only those explicitly present in the annotation are
                 * included, not those assuming their default values.
                 * Returns an empty array if there are none.
                 * @return this annotation's elements and their values.
                 */
                // @ts-ignore
                elementValues(): com.sun.javadoc.AnnotationDesc.ElementValuePair[]
                /**
                 * Check for the synthesized bit on the annotation.
                 * @return true if the annotation is synthesized.
                 */
                // @ts-ignore
                isSynthesized(): boolean
            }
        }
    }
}
