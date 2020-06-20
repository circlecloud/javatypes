declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace HandlerMethod {
                    /**
                     * A MethodParameter with HandlerMethod-specific behavior.
                     */
                    // @ts-ignore
                    class HandlerMethodParameter extends SynthesizingMethodParameter {
                        // @ts-ignore
                        constructor(index: number /*int*/)
                        // @ts-ignore
                        constructor(original: org.springframework.web.method.HandlerMethod.HandlerMethodParameter)
                        // @ts-ignore
                        getContainingClass(): java.lang.Class<?>
                        // @ts-ignore
                        getMethodAnnotation<T extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<T>): T
                        // @ts-ignore
                        hasMethodAnnotation<T extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<T>): boolean
                        // @ts-ignore
                        getParameterAnnotations(): java.lang.annotation.Annotation[]
                        // @ts-ignore
                        clone(): org.springframework.web.method.HandlerMethod.HandlerMethodParameter
                    }
                }
            }
        }
    }
}
