declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Simple factory facade for obtaining {@link PropertyAccessor} instances,
             * in particular for {@link BeanWrapper} instances. Conceals the actual
             * target implementation classes and their extended public signature.
             * @author Juergen Hoeller
             * @since 2.5.2
             */
            // @ts-ignore
            class PropertyAccessorFactory extends java.lang.Object {
                /**
                 * Obtain a BeanWrapper for the given target object,
                 * accessing properties in JavaBeans style.
                 * @param target the target object to wrap
                 * @return the property accessor
                 * @see BeanWrapperImpl
                 */
                // @ts-ignore
                forBeanPropertyAccess(target: any): org.springframework.beans.BeanWrapper
                /**
                 * Obtain a PropertyAccessor for the given target object,
                 * accessing properties in direct field style.
                 * @param target the target object to wrap
                 * @return the property accessor
                 * @see DirectFieldAccessor
                 */
                // @ts-ignore
                forDirectFieldAccess(target: any): org.springframework.beans.ConfigurablePropertyAccessor
            }
        }
    }
}
