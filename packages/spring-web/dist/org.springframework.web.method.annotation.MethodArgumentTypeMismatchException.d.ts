declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * A TypeMismatchException raised while resolving a controller method argument.
                     * Provides access to the target {@link org.springframework.core.MethodParameter
                     * MethodParameter}.
                     * @author Rossen Stoyanchev
                     * @since 4.2
                     */
                    // @ts-ignore
                    class MethodArgumentTypeMismatchException extends TypeMismatchException {
                        // @ts-ignore
                        constructor(value: java.lang.Object | any, requiredType: java.lang.Class<any>, name: java.lang.String | string, param: MethodParameter, cause: java.lang.Throwable | Error)
                        /**
                         * Return the name of the method argument.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Return the target method parameter.
                         */
                        // @ts-ignore
                        public getParameter(): MethodParameter
                    }
                }
            }
        }
    }
}
