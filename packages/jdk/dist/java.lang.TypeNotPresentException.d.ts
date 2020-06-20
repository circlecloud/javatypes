declare namespace java {
    namespace lang {
        /**
         * Thrown when an application tries to access a type using a string
         * representing the type's name, but no definition for the type with
         * the specified name can be found.   This exception differs from
         * {@link ClassNotFoundException} in that <tt>ClassNotFoundException</tt> is a
         * checked exception, whereas this exception is unchecked.
         * <p>Note that this exception may be used when undefined type variables
         * are accessed as well as when types (e.g., classes, interfaces or
         * annotation types) are loaded.
         * In particular, this exception can be thrown by the {@linkplain
         * java.lang.reflect.AnnotatedElement API used to read annotations
         * reflectively}.
         * @author Josh Bloch
         * @see java.lang.reflect.AnnotatedElement
         * @since 1.5
         */
        // @ts-ignore
        class TypeNotPresentException extends java.lang.RuntimeException {
            /**
             * Constructs a <tt>TypeNotPresentException</tt> for the named type
             * with the specified cause.
             * @param typeName the fully qualified name of the unavailable type
             * @param cause the exception that was thrown when the system attempted to
             *     load the named type, or <tt>null</tt> if unavailable or inapplicable
             */
            // @ts-ignore
            constructor(typeName: string, cause: Error)
            /**
             * Returns the fully qualified name of the unavailable type.
             * @return the fully qualified name of the unavailable type
             */
            // @ts-ignore
            typeName(): java.lang.String
        }
    }
}
