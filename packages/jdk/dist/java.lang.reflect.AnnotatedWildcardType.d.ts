declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * {@code AnnotatedWildcardType} represents the potentially annotated use of a
             * wildcard type argument, whose upper or lower bounds may themselves represent
             * annotated uses of types.
             * @since 1.8
             */
            // @ts-ignore
            interface AnnotatedWildcardType extends java.lang.reflect.AnnotatedType {
                /**
                 * Returns the potentially annotated lower bounds of this wildcard type.
                 * @return the potentially annotated lower bounds of this wildcard type
                 */
                // @ts-ignore
                getAnnotatedLowerBounds(): java.lang.reflect.AnnotatedType[]
                /**
                 * Returns the potentially annotated upper bounds of this wildcard type.
                 * @return the potentially annotated upper bounds of this wildcard type
                 */
                // @ts-ignore
                getAnnotatedUpperBounds(): java.lang.reflect.AnnotatedType[]
            }
        }
    }
}
