declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * {@code AnnotatedType} represents the potentially annotated use of a type in
             * the program currently running in this VM. The use may be of any type in the
             * Java programming language, including an array type, a parameterized type, a
             * type variable, or a wildcard type.
             * @since 1.8
             */
            // @ts-ignore
            interface AnnotatedType extends java.lang.reflect.AnnotatedElement {
                /**
                 * Returns the underlying type that this annotated type represents.
                 * @return the type this annotated type represents
                 */
                // @ts-ignore
                getType(): java.lang.reflect.Type
            }
        }
    }
}
