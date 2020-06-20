declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents an element of an annotation type.
             * @author Scott Seligman
             * @since 1.5
             */
            // @ts-ignore
            interface AnnotationTypeElementDoc extends com.sun.javadoc.MethodDoc {
                /**
                 * Returns the default value of this element.
                 * Returns null if this element has no default.
                 * @return the default value of this element.
                 */
                // @ts-ignore
                defaultValue(): com.sun.javadoc.AnnotationValue
            }
        }
    }
}
