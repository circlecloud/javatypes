declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Default implementation of the {@link Errors} and {@link BindingResult}
             * interfaces, for the registration and evaluation of binding errors on
             * JavaBean objects.
             * <p>Performs standard JavaBean property access, also supporting nested
             * properties. Normally, application code will work with the
             * {@code Errors} interface or the {@code BindingResult} interface.
             * A {@link DataBinder} returns its {@code BindingResult} via
             * {@link DataBinder#getBindingResult()}.
             * @author Juergen Hoeller
             * @since 2.0
             * @see DataBinder#getBindingResult()
             * @see DataBinder#initBeanPropertyAccess()
             * @see DirectFieldBindingResult
             */
            // @ts-ignore
            class BeanPropertyBindingResult extends org.springframework.validation.AbstractPropertyBindingResult implements java.io.Serializable {
                /**
                 * Creates a new instance of the {@link BeanPropertyBindingResult} class.
                 * @param target the target bean to bind onto
                 * @param objectName the name of the target object
                 */
                // @ts-ignore
                constructor(target: java.lang.Object | any, objectName: java.lang.String | string)
                /**
                 * Creates a new instance of the {@link BeanPropertyBindingResult} class.
                 * @param target the target bean to bind onto
                 * @param objectName the name of the target object
                 * @param autoGrowNestedPaths whether to "auto-grow" a nested path that contains a null value
                 * @param autoGrowCollectionLimit the limit for array and collection auto-growing
                 */
                // @ts-ignore
                constructor(target: java.lang.Object | any, objectName: java.lang.String | string, autoGrowNestedPaths: boolean, autoGrowCollectionLimit: number /*int*/)
                // @ts-ignore
                public getTarget(): any
                /**
                 * Returns the {@link BeanWrapper} that this instance uses.
                 * Creates a new one if none existed before.
                 * @see #createBeanWrapper()
                 */
                // @ts-ignore
                public getPropertyAccessor(): ConfigurablePropertyAccessor
                /**
                 * Create a new {@link BeanWrapper} for the underlying target object.
                 * @see #getTarget()
                 */
                // @ts-ignore
                createBeanWrapper(): BeanWrapper
            }
        }
    }
}
