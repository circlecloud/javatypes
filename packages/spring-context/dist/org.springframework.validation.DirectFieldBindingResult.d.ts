declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Special implementation of the Errors and BindingResult interfaces,
             * supporting registration and evaluation of binding errors on value objects.
             * Performs direct field access instead of going through JavaBean getters.
             * <p>Since Spring 4.1 this implementation is able to traverse nested fields.
             * @author Juergen Hoeller
             * @since 2.0
             * @see DataBinder#getBindingResult()
             * @see DataBinder#initDirectFieldAccess()
             * @see BeanPropertyBindingResult
             */
            // @ts-ignore
            class DirectFieldBindingResult extends org.springframework.validation.AbstractPropertyBindingResult {
                /**
                 * Create a new DirectFieldBindingResult instance.
                 * @param target the target object to bind onto
                 * @param objectName the name of the target object
                 */
                // @ts-ignore
                constructor(target: java.lang.Object | any, objectName: java.lang.String | string)
                /**
                 * Create a new DirectFieldBindingResult instance.
                 * @param target the target object to bind onto
                 * @param objectName the name of the target object
                 * @param autoGrowNestedPaths whether to "auto-grow" a nested path that contains a null value
                 */
                // @ts-ignore
                constructor(target: java.lang.Object | any, objectName: java.lang.String | string, autoGrowNestedPaths: boolean)
                // @ts-ignore
                public getTarget(): any
                /**
                 * Returns the DirectFieldAccessor that this instance uses.
                 * Creates a new one if none existed before.
                 * @see #createDirectFieldAccessor()
                 */
                // @ts-ignore
                public getPropertyAccessor(): ConfigurablePropertyAccessor
                /**
                 * Create a new DirectFieldAccessor for the underlying target object.
                 * @see #getTarget()
                 */
                // @ts-ignore
                createDirectFieldAccessor(): ConfigurablePropertyAccessor
            }
        }
    }
}
