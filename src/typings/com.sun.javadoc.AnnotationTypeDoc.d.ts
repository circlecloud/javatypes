declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents an annotation type.
             * @author Scott Seligman
             * @since 1.5
             */
            // @ts-ignore
            interface AnnotationTypeDoc extends com.sun.javadoc.ClassDoc {
                /**
                 * Returns the elements of this annotation type.
                 * Returns an empty array if there are none.
                 * @return the elements of this annotation type.
                 */
                // @ts-ignore
                elements(): com.sun.javadoc.AnnotationTypeElementDoc[]
            }
        }
    }
}
