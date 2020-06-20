declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Discovers {@linkplain ExceptionHandler @ExceptionHandler} methods in a given class,
                     * including all of its superclasses, and helps to resolve a given {@link Exception}
                     * to the exception types supported by a given {@link Method}.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     */
                    // @ts-ignore
                    class ExceptionHandlerMethodResolver extends java.lang.Object {
                        /**
                         * A constructor that finds {@link ExceptionHandler} methods in the given type.
                         * @param handlerType the type to introspect
                         */
                        // @ts-ignore
                        constructor(handlerType: java.lang.Class<any>)
                        /**
                         * A filter for selecting {@code @ExceptionHandler} methods.
                         */
                        // @ts-ignore
                        readonly EXCEPTION_HANDLER_METHODS: MethodFilter
                        /**
                         * Whether the contained type has any exception mappings.
                         */
                        // @ts-ignore
                        hasExceptionMappings(): boolean
                        /**
                         * Find a {@link Method} to handle the given exception.
                         * Use {@link ExceptionDepthComparator} if more than one match is found.
                         * @param exception the exception
                         * @return a Method to handle the exception, or {#code null} if none found
                         */
                        // @ts-ignore
                        resolveMethod(exception: java.lang.Exception): java.lang.reflect.Method
                        /**
                         * Find a {@link Method} to handle the given Throwable.
                         * Use {@link ExceptionDepthComparator} if more than one match is found.
                         * @param exception the exception
                         * @return a Method to handle the exception, or {#code null} if none found
                         * @since 5.0
                         */
                        // @ts-ignore
                        resolveMethodByThrowable(exception: Error): java.lang.reflect.Method
                        /**
                         * Find a {@link Method} to handle the given exception type. This can be
                         * useful if an {@link Exception} instance is not available (e.g. for tools).
                         * @param exceptionType the exception type
                         * @return a Method to handle the exception, or {#code null} if none found
                         */
                        // @ts-ignore
                        resolveMethodByExceptionType(exceptionType: java.lang.Class<java.lang.Throwable>): java.lang.reflect.Method
                    }
                }
            }
        }
    }
}
