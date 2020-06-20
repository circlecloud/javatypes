declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * {@code AnnotatedParameterizedType} represents the potentially annotated use
             * of a parameterized type, whose type arguments may themselves represent
             * annotated uses of types.
             * @since 1.8
             */
            // @ts-ignore
            interface AnnotatedParameterizedType extends java.lang.reflect.AnnotatedType {
                /**
                 * Returns the potentially annotated actual type arguments of this parameterized type.
                 * @return the potentially annotated actual type arguments of this parameterized type
                 */
                // @ts-ignore
                getAnnotatedActualTypeArguments(): java.lang.reflect.AnnotatedType[]
            }
        }
    }
}
