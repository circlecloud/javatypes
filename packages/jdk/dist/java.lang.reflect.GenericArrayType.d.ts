declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * {@code GenericArrayType} represents an array type whose component
             * type is either a parameterized type or a type variable.
             * @since 1.5
             */
            // @ts-ignore
            interface GenericArrayType extends java.lang.reflect.Type {
                /**
                 * Returns a {@code Type} object representing the component type
                 * of this array. This method creates the component type of the
                 * array.  See the declaration of {@link
                 * java.lang.reflect.ParameterizedType ParameterizedType} for the
                 * semantics of the creation process for parameterized types and
                 * see {@link java.lang.reflect.TypeVariable TypeVariable} for the
                 * creation process for type variables.
                 * @return a {#code Type} object representing the component type
                 *      of this array
                 * @throws TypeNotPresentException if the underlying array type's
                 *      component type refers to a non-existent type declaration
                 * @throws MalformedParameterizedTypeException if  the
                 *      underlying array type's component type refers to a
                 *      parameterized type that cannot be instantiated for any reason
                 */
                // @ts-ignore
                getGenericComponentType(): java.lang.reflect.Type
            }
        }
    }
}
