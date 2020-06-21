declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * Thrown to indicate that a program has attempted to access an element of
             * an annotation whose type has changed after the annotation was compiled
             * (or serialized).
             * This exception can be thrown by the {@linkplain
             * java.lang.reflect.AnnotatedElement API used to read annotations
             * reflectively}.
             * @author Josh Bloch
             * @see java.lang.reflect.AnnotatedElement
             * @since 1.5
             */
            // @ts-ignore
            class AnnotationTypeMismatchException extends java.lang.RuntimeException {
                /**
                 * Constructs an AnnotationTypeMismatchException for the specified
                 * annotation type element and found data type.
                 * @param element the <tt>Method</tt> object for the annotation element
                 * @param foundType the (erroneous) type of data found in the annotation.
                 *         This string may, but is not required to, contain the value
                 *         as well.  The exact format of the string is unspecified.
                 */
                // @ts-ignore
                constructor(element: java.lang.reflect.Method, foundType: java.lang.String | string)
                /**
                 * Returns the <tt>Method</tt> object for the incorrectly typed element.
                 * @return the <tt>Method</tt> object for the incorrectly typed element
                 */
                // @ts-ignore
                element(): java.lang.reflect.Method
                /**
                 * Returns the type of data found in the incorrectly typed element.
                 * The returned string may, but is not required to, contain the value
                 * as well.  The exact format of the string is unspecified.
                 * @return the type of data found in the incorrectly typed element
                 */
                // @ts-ignore
                foundType(): string
            }
        }
    }
}
