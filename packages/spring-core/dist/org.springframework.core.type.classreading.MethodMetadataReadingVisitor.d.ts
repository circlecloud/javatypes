declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace classreading {
                    /**
                     * ASM method visitor which looks for the annotations defined on a method,
                     * exposing them through the {@link org.springframework.core.type.MethodMetadata}
                     * interface.
                     * @author Juergen Hoeller
                     * @author Mark Pollack
                     * @author Costin Leau
                     * @author Chris Beams
                     * @author Phillip Webb
                     * @since 3.0
                     * @deprecated As of Spring Framework 5.2, this class and related classes in this
                     *  package have been replaced by {#link SimpleAnnotationMetadataReadingVisitor}
                     *  and related classes for internal use within the framework.
                     */
                    // @ts-ignore
                    class MethodMetadataReadingVisitor extends org.springframework.asm.MethodVisitor implements org.springframework.core.type.MethodMetadata {
                        // @ts-ignore
                        constructor(methodName: java.lang.String | string, access: number /*int*/, declaringClassName: java.lang.String | string, returnTypeName: java.lang.String | string, classLoader: java.lang.ClassLoader, methodMetadataSet: java.util.Set<org.springframework.core.type.MethodMetadata> | Array<org.springframework.core.type.MethodMetadata>)
                        // @ts-ignore
                        readonly methodName: java.lang.String | string
                        // @ts-ignore
                        readonly access: number /*int*/
                        // @ts-ignore
                        readonly declaringClassName: java.lang.String | string
                        // @ts-ignore
                        readonly returnTypeName: java.lang.String | string
                        // @ts-ignore
                        readonly classLoader: java.lang.ClassLoader
                        // @ts-ignore
                        readonly methodMetadataSet: java.util.Set<org.springframework.core.type.MethodMetadata> | Array<org.springframework.core.type.MethodMetadata>
                        // @ts-ignore
                        readonly metaAnnotationMap: java.util.Map<java.lang.String | string, java.util.Set<java.lang.String | string> | Array<java.lang.String | string>>
                        // @ts-ignore
                        readonly attributesMap: org.springframework.util.LinkedMultiValueMap<java.lang.String | string, org.springframework.core.annotation.AnnotationAttributes>
                        // @ts-ignore
                        public getAnnotations(): org.springframework.core.annotation.MergedAnnotations
                        // @ts-ignore
                        public visitAnnotation(desc: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                        // @ts-ignore
                        public getMethodName(): string
                        // @ts-ignore
                        public isAbstract(): boolean
                        // @ts-ignore
                        public isStatic(): boolean
                        // @ts-ignore
                        public isFinal(): boolean
                        // @ts-ignore
                        public isOverridable(): boolean
                        // @ts-ignore
                        public isAnnotated(annotationName: java.lang.String | string): boolean
                        // @ts-ignore
                        public getAnnotationAttributes(annotationName: java.lang.String | string, classValuesAsString: boolean): org.springframework.core.annotation.AnnotationAttributes
                        // @ts-ignore
                        public getAllAnnotationAttributes(annotationName: java.lang.String | string, classValuesAsString: boolean): org.springframework.util.MultiValueMap<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public getDeclaringClassName(): string
                        // @ts-ignore
                        public getReturnTypeName(): string
                    }
                }
            }
        }
    }
}
