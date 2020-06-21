declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * Thrown to indicate that a program has attempted to access an element of
             * an annotation type that was added to the annotation type definition after
             * the annotation was compiled (or serialized).  This exception will not be
             * thrown if the new element has a default value.
             * This exception can be thrown by the {@linkplain
             * java.lang.reflect.AnnotatedElement API used to read annotations
             * reflectively}.
             * @author Josh Bloch
             * @see java.lang.reflect.AnnotatedElement
             * @since 1.5
             */
            // @ts-ignore
            class IncompleteAnnotationException extends java.lang.RuntimeException {
                /**
                 * Constructs an IncompleteAnnotationException to indicate that
                 * the named element was missing from the specified annotation type.
                 * @param annotationType the Class object for the annotation type
                 * @param elementName the name of the missing element
                 * @throws NullPointerException if either parameter is {#code null}
                 */
                // @ts-ignore
                constructor(annotationType: java.lang.Class<any>, elementName: java.lang.String | string)
                /**
                 * Returns the Class object for the annotation type with the
                 * missing element.
                 * @return the Class object for the annotation type with the
                 *      missing element
                 */
                // @ts-ignore
                annotationType(): java.lang.Class<any>
                /**
                 * Returns the name of the missing element.
                 * @return the name of the missing element
                 */
                // @ts-ignore
                elementName(): string
            }
        }
    }
}
