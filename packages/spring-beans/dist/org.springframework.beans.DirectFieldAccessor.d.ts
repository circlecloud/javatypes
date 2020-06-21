declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * {@link ConfigurablePropertyAccessor} implementation that directly accesses
             * instance fields. Allows for direct binding to fields instead of going through
             * JavaBean setters.
             * <p>As of Spring 4.2, the vast majority of the {@link BeanWrapper} features have
             * been merged to {@link AbstractPropertyAccessor}, which means that property
             * traversal as well as collections and map access is now supported here as well.
             * <p>A DirectFieldAccessor's default for the "extractOldValueForEditor" setting
             * is "true", since a field can always be read without side effects.
             * @author Juergen Hoeller
             * @author Stephane Nicoll
             * @since 2.0
             * @see #setExtractOldValueForEditor
             * @see BeanWrapper
             * @see org.springframework.validation.DirectFieldBindingResult
             * @see org.springframework.validation.DataBinder#initDirectFieldAccess()
             */
            // @ts-ignore
            class DirectFieldAccessor extends org.springframework.beans.AbstractNestablePropertyAccessor {
                /**
                 * Create a new DirectFieldAccessor for the given object.
                 * @param object the object wrapped by this DirectFieldAccessor
                 */
                // @ts-ignore
                constructor(object: java.lang.Object | any)
                /**
                 * Create a new DirectFieldAccessor for the given object,
                 * registering a nested path that the object is in.
                 * @param object the object wrapped by this DirectFieldAccessor
                 * @param nestedPath the nested path of the object
                 * @param parent the containing DirectFieldAccessor (must not be {#code null})
                 */
                // @ts-ignore
                constructor(object: java.lang.Object | any, nestedPath: java.lang.String | string, parent: org.springframework.beans.DirectFieldAccessor)
                // @ts-ignore
                getLocalPropertyHandler(propertyName: java.lang.String | string): org.springframework.beans.DirectFieldAccessor.FieldPropertyHandler
                // @ts-ignore
                newNestedPropertyAccessor(object: java.lang.Object | any, nestedPath: java.lang.String | string): org.springframework.beans.DirectFieldAccessor
                // @ts-ignore
                createNotWritablePropertyException(propertyName: java.lang.String | string): org.springframework.beans.NotWritablePropertyException
            }
        }
    }
}
