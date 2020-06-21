declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * Thrown when {@link java.lang.reflect.Executable#getParameters the
             * java.lang.reflect package} attempts to read method parameters from
             * a class file and determines that one or more parameters are
             * malformed.
             * <p>The following is a list of conditions under which this exception
             * can be thrown:
             * <ul>
             * <li> The number of parameters (parameter_count) is wrong for the method
             * <li> A constant pool index is out of bounds.
             * <li> A constant pool index does not refer to a UTF-8 entry
             * <li> A parameter's name is "", or contains an illegal character
             * <li> The flags field contains an illegal flag (something other than
             * FINAL, SYNTHETIC, or MANDATED)
             * </ul>
             * See {@link java.lang.reflect.Executable#getParameters} for more
             * information.
             * @see java.lang.reflect.Executable#getParameters
             * @since 1.8
             */
            // @ts-ignore
            class MalformedParametersException extends java.lang.RuntimeException {
                /**
                 * Create a {@code MalformedParametersException} with an empty
                 * reason.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a {@code MalformedParametersException}.
                 * @param reason The reason for the exception.
                 */
                // @ts-ignore
                constructor(reason: java.lang.String | string)
            }
        }
    }
}
