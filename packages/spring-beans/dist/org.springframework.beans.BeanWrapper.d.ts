declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * The central interface of Spring's low-level JavaBeans infrastructure.
             * <p>Typically not used directly but rather implicitly via a
             * {@link org.springframework.beans.factory.BeanFactory} or a
             * {@link org.springframework.validation.DataBinder}.
             * <p>Provides operations to analyze and manipulate standard JavaBeans:
             * the ability to get and set property values (individually or in bulk),
             * get property descriptors, and query the readability/writability of properties.
             * <p>This interface supports <b>nested properties</b> enabling the setting
             * of properties on subproperties to an unlimited depth.
             * <p>A BeanWrapper's default for the "extractOldValueForEditor" setting
             * is "false", to avoid side effects caused by getter method invocations.
             * Turn this to "true" to expose present property values to custom editors.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @since 13 April 2001
             * @see PropertyAccessor
             * @see PropertyEditorRegistry
             * @see PropertyAccessorFactory#forBeanPropertyAccess
             * @see org.springframework.beans.factory.BeanFactory
             * @see org.springframework.validation.BeanPropertyBindingResult
             * @see org.springframework.validation.DataBinder#initBeanPropertyAccess()
             */
            // @ts-ignore
            interface BeanWrapper extends org.springframework.beans.ConfigurablePropertyAccessor {
                /**
                 * Specify a limit for array and collection auto-growing.
                 * <p>Default is unlimited on a plain BeanWrapper.
                 * @since 4.1
                 */
                // @ts-ignore
                setAutoGrowCollectionLimit(autoGrowCollectionLimit: number /*int*/): void
                /**
                 * Return the limit for array and collection auto-growing.
                 * @since 4.1
                 */
                // @ts-ignore
                getAutoGrowCollectionLimit(): number /*int*/
                /**
                 * Return the bean instance wrapped by this object.
                 */
                // @ts-ignore
                getWrappedInstance(): any
                /**
                 * Return the type of the wrapped bean instance.
                 */
                // @ts-ignore
                getWrappedClass(): java.lang.Class<any>
                /**
                 * Obtain the PropertyDescriptors for the wrapped object
                 * (as determined by standard JavaBeans introspection).
                 * @return the PropertyDescriptors for the wrapped object
                 */
                // @ts-ignore
                getPropertyDescriptors(): java.beans.PropertyDescriptor[]
                /**
                 * Obtain the property descriptor for a specific property
                 * of the wrapped object.
                 * @param propertyName the property to obtain the descriptor for
                 *  (may be a nested path, but no indexed/mapped property)
                 * @return the property descriptor for the specified property
                 * @throws InvalidPropertyException if there is no such property
                 */
                // @ts-ignore
                getPropertyDescriptor(propertyName: java.lang.String | string): java.beans.PropertyDescriptor
            }
        }
    }
}
