declare namespace com {
    namespace sun {
        namespace javadoc {
            namespace AnnotationDesc {
                /**
                 * Represents an association between an annotation type element
                 * and one of its values.
                 * @author Scott Seligman
                 * @since 1.5
                 */
                // @ts-ignore
                interface ElementValuePair {
                    /**
                     * Returns the annotation type element.
                     * @return the annotation type element.
                     */
                    // @ts-ignore
                    element(): com.sun.javadoc.AnnotationTypeElementDoc
                    /**
                     * Returns the value associated with the annotation type element.
                     * @return the value associated with the annotation type element.
                     */
                    // @ts-ignore
                    value(): com.sun.javadoc.AnnotationValue
                }
            }
        }
    }
}
