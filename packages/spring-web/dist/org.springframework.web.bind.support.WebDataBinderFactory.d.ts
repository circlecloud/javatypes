declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * A factory for creating a {@link WebDataBinder} instance for a named target object.
                     * @author Arjen Poutsma
                     * @since 3.1
                     */
                    // @ts-ignore
                    interface WebDataBinderFactory {
                        /**
                         * Create a {@link WebDataBinder} for the given object.
                         * @param webRequest the current request
                         * @param target the object to create a data binder for,
                         *  or {#code null} if creating a binder for a simple type
                         * @param objectName the name of the target object
                         * @return the created {#link WebDataBinder} instance, never null
                         * @throws Exception raised if the creation and initialization of the data binder fails
                         */
                        // @ts-ignore
                        createBinder(webRequest: org.springframework.web.context.request.NativeWebRequest, target: java.lang.Object | any, objectName: java.lang.String | string): org.springframework.web.bind.WebDataBinder
                    }
                }
            }
        }
    }
}
