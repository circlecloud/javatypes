declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * {@code AnnotatedTypeVariable} represents the potentially annotated use of a
             * type variable, whose declaration may have bounds which themselves represent
             * annotated uses of types.
             * @since 1.8
             */
            // @ts-ignore
            interface AnnotatedTypeVariable extends java.lang.reflect.AnnotatedType {
                /**
                 * Returns the potentially annotated bounds of this type variable.
                 * @return the potentially annotated bounds of this type variable
                 */
                // @ts-ignore
                getAnnotatedBounds(): java.lang.reflect.AnnotatedType[]
            }
        }
    }
}
