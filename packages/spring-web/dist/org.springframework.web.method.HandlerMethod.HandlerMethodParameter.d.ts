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
                        public getContainingClass(): java.lang.Class<any>
                        // @ts-ignore
                        public getMethodAnnotation<T extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<T>): T
                        // @ts-ignore
                        public hasMethodAnnotation<T extends java.lang.annotation.Annotation>(annotationType: java.lang.Class<T>): boolean
                        // @ts-ignore
                        public getParameterAnnotations(): java.lang.annotation.Annotation[]
                        // @ts-ignore
                        public clone(): org.springframework.web.method.HandlerMethod.HandlerMethodParameter
                    }
                }
            }
        }
    }
}
