declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * A ConversionNotSupportedException raised while resolving a method argument.
                     * Provides access to the target {@link org.springframework.core.MethodParameter
                     * MethodParameter}.
                     * @author Rossen Stoyanchev
                     * @since 4.2
                     */
                    // @ts-ignore
                    class MethodArgumentConversionNotSupportedException extends ConversionNotSupportedException {
                        // @ts-ignore
                        constructor(value: any, requiredType: java.lang.Class<any>, name: string, param: MethodParameter, cause: Error)
                        /**
                         * Return the name of the method argument.
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Return the target method parameter.
                         */
                        // @ts-ignore
                        getParameter(): MethodParameter
                    }
                }
            }
        }
    }
}
