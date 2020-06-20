declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * Type is the common superinterface for all types in the Java
             * programming language. These include raw types, parameterized types,
             * array types, type variables and primitive types.
             * @since 1.5
             */
            // @ts-ignore
            interface Type {
                /**
                 * Returns a string describing this type, including information
                 * about any type parameters.
                 * @implSpec The default implementation calls {#code toString}.
                 * @return a string describing this type
                 * @since 1.8
                 */
                // @ts-ignore
                getTypeName(): java.lang.String
            }
        }
    }
}
