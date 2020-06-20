declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Parameter information.
             * This includes a parameter type and parameter name.
             * @author Robert Field
             */
            // @ts-ignore
            interface Parameter {
                /**
                 * Get the type of this parameter.
                 */
                // @ts-ignore
                type(): com.sun.javadoc.Type
                /**
                 * Get local name of this parameter.
                 * For example if parameter is the short 'index', returns "index".
                 */
                // @ts-ignore
                name(): java.lang.String
                /**
                 * Get type name of this parameter.
                 * For example if parameter is the short 'index', returns "short".
                 * <p>
                 * This method returns a complete string
                 * representation of the type, including the dimensions of arrays and
                 * the type arguments of parameterized types.  Names are qualified.
                 */
                // @ts-ignore
                typeName(): java.lang.String
                /**
                 * Returns a string representation of the parameter.
                 * <p>
                 * For example if parameter is the short 'index', returns "short index".
                 * @return type and parameter name of this parameter.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Get the annotations of this parameter.
                 * Return an empty array if there are none.
                 * @return the annotations of this parameter.
                 * @since 1.5
                 */
                // @ts-ignore
                annotations(): com.sun.javadoc.AnnotationDesc[]
            }
        }
    }
}
