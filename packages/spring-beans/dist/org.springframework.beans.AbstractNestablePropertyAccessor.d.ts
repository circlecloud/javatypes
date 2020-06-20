declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * A basic {@link ConfigurablePropertyAccessor} that provides the necessary
             * infrastructure for all typical use cases.
             * <p>This accessor will convert collection and array values to the corresponding
             * target collections or arrays, if necessary. Custom property editors that deal
             * with collections or arrays can either be written via PropertyEditor's
             * {@code setValue}, or against a comma-delimited String via {@code setAsText},
             * as String arrays are converted in such a format if the array itself is not
             * assignable.
             * @author Juergen Hoeller
             * @author Stephane Nicoll
             * @author Rod Johnson
             * @author Rob Harrop
             * @since 4.2
             * @see #registerCustomEditor
             * @see #setPropertyValues
             * @see #setPropertyValue
             * @see #getPropertyValue
             * @see #getPropertyType
             * @see BeanWrapper
             * @see PropertyEditorRegistrySupport
             */
            // @ts-ignore
            class AbstractNestablePropertyAccessor extends org.springframework.beans.AbstractPropertyAccessor {
                /**
                 * Create a new empty accessor. Wrapped instance needs to be set afterwards.
                 * Registers default editors.
                 * @see #setWrappedInstance
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new empty accessor. Wrapped instance needs to be set afterwards.
                 * @param registerDefaultEditors whether to register default editors
                 *  (can be suppressed if the accessor won't need any type conversion)
                 * @see #setWrappedInstance
                 */
                // @ts-ignore
                constructor(registerDefaultEditors: boolean)
                /**
                 * Create a new accessor for the given object.
                 * @param object the object wrapped by this accessor
                 */
                // @ts-ignore
                constructor(object: any)
                /**
                 * Create a new accessor, wrapping a new instance of the specified class.
                 * @param clazz class to instantiate and wrap
                 */
                // @ts-ignore
                constructor(clazz: java.lang.Class<any>)
                /**
                 * Create a new accessor for the given object,
                 * registering a nested path that the object is in.
                 * @param object the object wrapped by this accessor
                 * @param nestedPath the nested path of the object
                 * @param rootObject the root object at the top of the path
                 */
                // @ts-ignore
                constructor(object: any, nestedPath: string, rootObject: any)
                /**
                 * Create a new accessor for the given object,
                 * registering a nested path that the object is in.
                 * @param object the object wrapped by this accessor
                 * @param nestedPath the nested path of the object
                 * @param parent the containing accessor (must not be {#code null})
                 */
                // @ts-ignore
                constructor(object: any, nestedPath: string, parent: org.springframework.beans.AbstractNestablePropertyAccessor)
                /**
                 * Specify a limit for array and collection auto-growing.
                 * <p>Default is unlimited on a plain accessor.
                 */
                // @ts-ignore
                setAutoGrowCollectionLimit(autoGrowCollectionLimit: number /*int*/): void
                /**
                 * Return the limit for array and collection auto-growing.
                 */
                // @ts-ignore
                getAutoGrowCollectionLimit(): int
                /**
                 * Switch the target object, replacing the cached introspection results only
                 * if the class of the new object is different to that of the replaced object.
                 * @param object the new target object
                 */
                // @ts-ignore
                setWrappedInstance(object: any): void
                /**
                 * Switch the target object, replacing the cached introspection results only
                 * if the class of the new object is different to that of the replaced object.
                 * @param object the new target object
                 * @param nestedPath the nested path of the object
                 * @param rootObject the root object at the top of the path
                 */
                // @ts-ignore
                setWrappedInstance(object: any, nestedPath: string, rootObject: any): void
                // @ts-ignore
                getWrappedInstance(): java.lang.Object
                // @ts-ignore
                getWrappedClass(): java.lang.Class<?>
                /**
                 * Return the nested path of the object wrapped by this accessor.
                 */
                // @ts-ignore
                getNestedPath(): java.lang.String
                /**
                 * Return the root object at the top of the path of this accessor.
                 * @see #getNestedPath
                 */
                // @ts-ignore
                getRootInstance(): java.lang.Object
                /**
                 * Return the class of the root object at the top of the path of this accessor.
                 * @see #getNestedPath
                 */
                // @ts-ignore
                getRootClass(): java.lang.Class<?>
                // @ts-ignore
                setPropertyValue(propertyName: string, value: any): void
                // @ts-ignore
                setPropertyValue(pv: org.springframework.beans.PropertyValue): void
                // @ts-ignore
                setPropertyValue(tokens: org.springframework.beans.AbstractNestablePropertyAccessor.PropertyTokenHolder, pv: org.springframework.beans.PropertyValue): void
                // @ts-ignore
                getPropertyType(propertyName: string): java.lang.Class<?>
                // @ts-ignore
                getPropertyTypeDescriptor(propertyName: string): TypeDescriptor
                // @ts-ignore
                isReadableProperty(propertyName: string): boolean
                // @ts-ignore
                isWritableProperty(propertyName: string): boolean
                // @ts-ignore
                convertForProperty(propertyName: string, oldValue: any, newValue: any, td: TypeDescriptor): java.lang.Object
                // @ts-ignore
                getPropertyValue(propertyName: string): java.lang.Object
                // @ts-ignore
                getPropertyValue(tokens: org.springframework.beans.AbstractNestablePropertyAccessor.PropertyTokenHolder): java.lang.Object
                /**
                 * Return the {@link PropertyHandler} for the specified {@code propertyName}, navigating
                 * if necessary. Return {@code null} if not found rather than throwing an exception.
                 * @param propertyName the property to obtain the descriptor for
                 * @return the property descriptor for the specified property,
                 *  or {#code null} if not found
                 * @throws BeansException in case of introspection failure
                 */
                // @ts-ignore
                getPropertyHandler(propertyName: string): org.springframework.beans.AbstractNestablePropertyAccessor.PropertyHandler
                /**
                 * Return a {@link PropertyHandler} for the specified local {@code propertyName}.
                 * Only used to reach a property available in the current context.
                 * @param propertyName the name of a local property
                 * @return the handler for that property, or {#code null} if it has not been found
                 */
                // @ts-ignore
                abstract getLocalPropertyHandler(propertyName: string): org.springframework.beans.AbstractNestablePropertyAccessor.PropertyHandler
                /**
                 * Create a new nested property accessor instance.
                 * Can be overridden in subclasses to create a PropertyAccessor subclass.
                 * @param object the object wrapped by this PropertyAccessor
                 * @param nestedPath the nested path of the object
                 * @return the nested PropertyAccessor instance
                 */
                // @ts-ignore
                abstract newNestedPropertyAccessor(object: any, nestedPath: string): org.springframework.beans.AbstractNestablePropertyAccessor
                /**
                 * Create a {@link NotWritablePropertyException} for the specified property.
                 */
                // @ts-ignore
                abstract createNotWritablePropertyException(propertyName: string): org.springframework.beans.NotWritablePropertyException
                /**
                 * Get the last component of the path. Also works if not nested.
                 * @param pa property accessor to work on
                 * @param nestedPath property path we know is nested
                 * @return last component of the path (the property on the target bean)
                 */
                // @ts-ignore
                getFinalPath(pa: org.springframework.beans.AbstractNestablePropertyAccessor, nestedPath: string): java.lang.String
                /**
                 * Recursively navigate to return a property accessor for the nested property path.
                 * @param propertyPath property path, which may be nested
                 * @return a property accessor for the target bean
                 */
                // @ts-ignore
                getPropertyAccessorForPropertyPath(propertyPath: string): org.springframework.beans.AbstractNestablePropertyAccessor
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
