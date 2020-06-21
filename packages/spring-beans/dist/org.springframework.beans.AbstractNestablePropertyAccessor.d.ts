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
            abstract class AbstractNestablePropertyAccessor extends org.springframework.beans.AbstractPropertyAccessor {
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
                constructor(object: java.lang.Object | any)
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
                constructor(object: java.lang.Object | any, nestedPath: java.lang.String | string, rootObject: java.lang.Object | any)
                /**
                 * Create a new accessor for the given object,
                 * registering a nested path that the object is in.
                 * @param object the object wrapped by this accessor
                 * @param nestedPath the nested path of the object
                 * @param parent the containing accessor (must not be {#code null})
                 */
                // @ts-ignore
                constructor(object: java.lang.Object | any, nestedPath: java.lang.String | string, parent: org.springframework.beans.AbstractNestablePropertyAccessor)
                /**
                 * Specify a limit for array and collection auto-growing.
                 * <p>Default is unlimited on a plain accessor.
                 */
                // @ts-ignore
                public setAutoGrowCollectionLimit(autoGrowCollectionLimit: number /*int*/): void
                /**
                 * Return the limit for array and collection auto-growing.
                 */
                // @ts-ignore
                public getAutoGrowCollectionLimit(): number /*int*/
                /**
                 * Switch the target object, replacing the cached introspection results only
                 * if the class of the new object is different to that of the replaced object.
                 * @param object the new target object
                 */
                // @ts-ignore
                public setWrappedInstance(object: java.lang.Object | any): void
                /**
                 * Switch the target object, replacing the cached introspection results only
                 * if the class of the new object is different to that of the replaced object.
                 * @param object the new target object
                 * @param nestedPath the nested path of the object
                 * @param rootObject the root object at the top of the path
                 */
                // @ts-ignore
                public setWrappedInstance(object: java.lang.Object | any, nestedPath: java.lang.String | string, rootObject: java.lang.Object | any): void
                // @ts-ignore
                public getWrappedInstance(): any
                // @ts-ignore
                public getWrappedClass(): java.lang.Class<any>
                /**
                 * Return the nested path of the object wrapped by this accessor.
                 */
                // @ts-ignore
                public getNestedPath(): string
                /**
                 * Return the root object at the top of the path of this accessor.
                 * @see #getNestedPath
                 */
                // @ts-ignore
                public getRootInstance(): any
                /**
                 * Return the class of the root object at the top of the path of this accessor.
                 * @see #getNestedPath
                 */
                // @ts-ignore
                public getRootClass(): java.lang.Class<any>
                // @ts-ignore
                public setPropertyValue(propertyName: java.lang.String | string, value: java.lang.Object | any): void
                // @ts-ignore
                public setPropertyValue(pv: org.springframework.beans.PropertyValue): void
                // @ts-ignore
                setPropertyValue(tokens: org.springframework.beans.AbstractNestablePropertyAccessor.PropertyTokenHolder, pv: org.springframework.beans.PropertyValue): void
                // @ts-ignore
                public getPropertyType(propertyName: java.lang.String | string): java.lang.Class<any>
                // @ts-ignore
                public getPropertyTypeDescriptor(propertyName: java.lang.String | string): TypeDescriptor
                // @ts-ignore
                public isReadableProperty(propertyName: java.lang.String | string): boolean
                // @ts-ignore
                public isWritableProperty(propertyName: java.lang.String | string): boolean
                // @ts-ignore
                convertForProperty(propertyName: java.lang.String | string, oldValue: java.lang.Object | any, newValue: java.lang.Object | any, td: TypeDescriptor): any
                // @ts-ignore
                public getPropertyValue(propertyName: java.lang.String | string): any
                // @ts-ignore
                getPropertyValue(tokens: org.springframework.beans.AbstractNestablePropertyAccessor.PropertyTokenHolder): any
                /**
                 * Return the {@link PropertyHandler} for the specified {@code propertyName}, navigating
                 * if necessary. Return {@code null} if not found rather than throwing an exception.
                 * @param propertyName the property to obtain the descriptor for
                 * @return the property descriptor for the specified property,
                 *  or {#code null} if not found
                 * @throws BeansException in case of introspection failure
                 */
                // @ts-ignore
                getPropertyHandler(propertyName: java.lang.String | string): org.springframework.beans.AbstractNestablePropertyAccessor.PropertyHandler
                /**
                 * Return a {@link PropertyHandler} for the specified local {@code propertyName}.
                 * Only used to reach a property available in the current context.
                 * @param propertyName the name of a local property
                 * @return the handler for that property, or {#code null} if it has not been found
                 */
                // @ts-ignore
                abstract getLocalPropertyHandler(propertyName: java.lang.String | string): org.springframework.beans.AbstractNestablePropertyAccessor.PropertyHandler
                /**
                 * Create a new nested property accessor instance.
                 * Can be overridden in subclasses to create a PropertyAccessor subclass.
                 * @param object the object wrapped by this PropertyAccessor
                 * @param nestedPath the nested path of the object
                 * @return the nested PropertyAccessor instance
                 */
                // @ts-ignore
                abstract newNestedPropertyAccessor(object: java.lang.Object | any, nestedPath: java.lang.String | string): org.springframework.beans.AbstractNestablePropertyAccessor
                /**
                 * Create a {@link NotWritablePropertyException} for the specified property.
                 */
                // @ts-ignore
                abstract createNotWritablePropertyException(propertyName: java.lang.String | string): org.springframework.beans.NotWritablePropertyException
                /**
                 * Get the last component of the path. Also works if not nested.
                 * @param pa property accessor to work on
                 * @param nestedPath property path we know is nested
                 * @return last component of the path (the property on the target bean)
                 */
                // @ts-ignore
                getFinalPath(pa: org.springframework.beans.AbstractNestablePropertyAccessor, nestedPath: java.lang.String | string): string
                /**
                 * Recursively navigate to return a property accessor for the nested property path.
                 * @param propertyPath property path, which may be nested
                 * @return a property accessor for the target bean
                 */
                // @ts-ignore
                getPropertyAccessorForPropertyPath(propertyPath: java.lang.String | string): org.springframework.beans.AbstractNestablePropertyAccessor
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
