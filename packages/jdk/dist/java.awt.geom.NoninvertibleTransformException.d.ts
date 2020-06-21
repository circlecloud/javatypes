declare namespace java {
    namespace awt {
        namespace geom {
            /**
             * The <code>NoninvertibleTransformException</code> class represents
             * an exception that is thrown if an operation is performed requiring
             * the inverse of an {@link AffineTransform} object but the
             * <code>AffineTransform</code> is in a non-invertible state.
             */
            // @ts-ignore
            class NoninvertibleTransformException extends java.lang.Exception {
                /**
                 * Constructs an instance of
                 * <code>NoninvertibleTransformException</code>
                 * with the specified detail message.
                 * @param s     the detail message
                 * @since 1.2
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string)
            }
        }
    }
}
