declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * {@code AnnotatedArrayType} represents the potentially annotated use of an
             * array type, whose component type may itself represent the annotated use of a
             * type.
             * @since 1.8
             */
            // @ts-ignore
            interface AnnotatedArrayType extends java.lang.reflect.AnnotatedType {
                /**
                 * Returns the potentially annotated generic component type of this array type.
                 * @return the potentially annotated generic component type of this array type
                 */
                // @ts-ignore
                getAnnotatedGenericComponentType(): java.lang.reflect.AnnotatedType
            }
        }
    }
}
