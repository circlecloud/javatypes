declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * A common interface for all entities that declare type variables.
             * @since 1.5
             */
            // @ts-ignore
            interface GenericDeclaration extends java.lang.reflect.AnnotatedElement {
                /**
                 * Returns an array of {@code TypeVariable} objects that
                 * represent the type variables declared by the generic
                 * declaration represented by this {@code GenericDeclaration}
                 * object, in declaration order.  Returns an array of length 0 if
                 * the underlying generic declaration declares no type variables.
                 * @return an array of {#code TypeVariable} objects that represent
                 *      the type variables declared by this generic declaration
                 * @throws GenericSignatureFormatError if the generic
                 *      signature of this generic declaration does not conform to
                 *      the format specified in
                 *      <cite>The Java&trade; Virtual Machine Specification</cite>
                 */
                // @ts-ignore
                getTypeParameters(): java.lang.reflect.TypeVariable[]
            }
        }
    }
}
