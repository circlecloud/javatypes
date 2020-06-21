declare namespace org {
    namespace springframework {
        namespace validation {
            /**
             * Map-based implementation of the BindingResult interface,
             * supporting registration and evaluation of binding errors on
             * Map attributes.
             * <p>Can be used as errors holder for custom binding onto a
             * Map, for example when invoking a Validator for a Map object.
             * @author Juergen Hoeller
             * @since 2.0
             * @see java.util.Map
             */
            // @ts-ignore
            class MapBindingResult extends org.springframework.validation.AbstractBindingResult implements java.io.Serializable {
                /**
                 * Create a new MapBindingResult instance.
                 * @param target the target Map to bind onto
                 * @param objectName the name of the target object
                 */
                // @ts-ignore
                constructor(target: java.util.Map<any, any>, objectName: java.lang.String | string)
                // @ts-ignore
                public getTargetMap(): java.util.Map<any, any>
                // @ts-ignore
                public getTarget(): any
                // @ts-ignore
                getActualFieldValue(field: java.lang.String | string): any
            }
        }
    }
}
