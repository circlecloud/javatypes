declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Default {@link BeanWrapper} implementation that should be sufficient
             * for all typical use cases. Caches introspection results for efficiency.
             * <p>Note: Auto-registers default property editors from the
             * {@code org.springframework.beans.propertyeditors} package, which apply
             * in addition to the JDK's standard PropertyEditors. Applications can call
             * the {@link #registerCustomEditor(Class, java.beans.PropertyEditor)} method
             * to register an editor for a particular instance (i.e. they are not shared
             * across the application). See the base class
             * {@link PropertyEditorRegistrySupport} for details.
             * <p><b>NOTE: As of Spring 2.5, this is - for almost all purposes - an
             * internal class.</b> It is just public in order to allow for access from
             * other framework packages. For standard application access purposes, use the
             * {@link PropertyAccessorFactory#forBeanPropertyAccess} factory method instead.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Stephane Nicoll
             * @since 15 April 2001
             * @see #registerCustomEditor
             * @see #setPropertyValues
             * @see #setPropertyValue
             * @see #getPropertyValue
             * @see #getPropertyType
             * @see BeanWrapper
             * @see PropertyEditorRegistrySupport
             */
            // @ts-ignore
            class BeanWrapperImpl extends org.springframework.beans.AbstractNestablePropertyAccessor implements org.springframework.beans.BeanWrapper {
                /**
                 * Create a new empty BeanWrapperImpl. Wrapped instance needs to be set afterwards.
                 * Registers default editors.
                 * @see #setWrappedInstance
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new empty BeanWrapperImpl. Wrapped instance needs to be set afterwards.
                 * @param registerDefaultEditors whether to register default editors
                 *  (can be suppressed if the BeanWrapper won't need any type conversion)
                 * @see #setWrappedInstance
                 */
                // @ts-ignore
                constructor(registerDefaultEditors: boolean)
                /**
                 * Create a new BeanWrapperImpl for the given object.
                 * @param object the object wrapped by this BeanWrapper
                 */
                // @ts-ignore
                constructor(object: any)
                /**
                 * Create a new BeanWrapperImpl, wrapping a new instance of the specified class.
                 * @param clazz class to instantiate and wrap
                 */
                // @ts-ignore
                constructor(clazz: java.lang.Class<any>)
                /**
                 * Create a new BeanWrapperImpl for the given object,
                 * registering a nested path that the object is in.
                 * @param object the object wrapped by this BeanWrapper
                 * @param nestedPath the nested path of the object
                 * @param rootObject the root object at the top of the path
                 */
                // @ts-ignore
                constructor(object: any, nestedPath: string, rootObject: any)
                /**
                 * Set a bean instance to hold, without any unwrapping of {@link java.util.Optional}.
                 * @param object the actual target object
                 * @since 4.3
                 * @see #setWrappedInstance(Object)
                 */
                // @ts-ignore
                setBeanInstance(object: any): void
                // @ts-ignore
                setWrappedInstance(object: any, nestedPath: string, rootObject: any): void
                /**
                 * Set the class to introspect.
                 * Needs to be called when the target object changes.
                 * @param clazz the class to introspect
                 */
                // @ts-ignore
                setIntrospectionClass(clazz: java.lang.Class<any>): void
                /**
                 * Set the security context used during the invocation of the wrapped instance methods.
                 * Can be null.
                 */
                // @ts-ignore
                setSecurityContext(acc: java.security.AccessControlContext): void
                /**
                 * Return the security context used during the invocation of the wrapped instance methods.
                 * Can be null.
                 */
                // @ts-ignore
                getSecurityContext(): java.security.AccessControlContext
                /**
                 * Convert the given value for the specified property to the latter's type.
                 * <p>This method is only intended for optimizations in a BeanFactory.
                 * Use the {@code convertIfNecessary} methods for programmatic conversion.
                 * @param value the value to convert
                 * @param propertyName the target property
                 *  (note that nested or indexed properties are not supported here)
                 * @return the new value, possibly the result of type conversion
                 * @throws TypeMismatchException if type conversion failed
                 */
                // @ts-ignore
                convertForProperty(value: any, propertyName: string): java.lang.Object
                // @ts-ignore
                getLocalPropertyHandler(propertyName: string): org.springframework.beans.BeanWrapperImpl.BeanPropertyHandler
                // @ts-ignore
                newNestedPropertyAccessor(object: any, nestedPath: string): org.springframework.beans.BeanWrapperImpl
                // @ts-ignore
                createNotWritablePropertyException(propertyName: string): org.springframework.beans.NotWritablePropertyException
                // @ts-ignore
                getPropertyDescriptors(): java.beans.PropertyDescriptor[]
                // @ts-ignore
                getPropertyDescriptor(propertyName: string): java.beans.PropertyDescriptor
            }
        }
    }
}
