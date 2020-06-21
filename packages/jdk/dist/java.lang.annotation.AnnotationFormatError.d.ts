declare namespace java {
    namespace lang {
        namespace annotation {
            /**
             * Thrown when the annotation parser attempts to read an annotation
             * from a class file and determines that the annotation is malformed.
             * This error can be thrown by the {@linkplain
             * java.lang.reflect.AnnotatedElement API used to read annotations
             * reflectively}.
             * @author Josh Bloch
             * @see java.lang.reflect.AnnotatedElement
             * @since 1.5
             */
            // @ts-ignore
            class AnnotationFormatError extends java.lang.Error {
                /**
                 * Constructs a new <tt>AnnotationFormatError</tt> with the specified
                 * detail message.
                 * @param message   the detail message.
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string)
                /**
                 * Constructs a new <tt>AnnotationFormatError</tt> with the specified
                 * detail message and cause.  Note that the detail message associated
                 * with <code>cause</code> is <i>not</i> automatically incorporated in
                 * this error's detail message.
                 * @param message the detail message
                 * @param cause the cause (A <tt>null</tt> value is permitted, and
                 *      indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error)
                /**
                 * Constructs a new <tt>AnnotationFormatError</tt> with the specified
                 * cause and a detail message of
                 * <tt>(cause == null ? null : cause.toString())</tt> (which
                 * typically contains the class and detail message of <tt>cause</tt>).
                 * @param cause the cause (A <tt>null</tt> value is permitted, and
                 *      indicates that the cause is nonexistent or unknown.)
                 */
                // @ts-ignore
                constructor(cause: java.lang.Throwable | Error)
            }
        }
    }
}
