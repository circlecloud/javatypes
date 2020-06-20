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
                        constructor(methodName: string, access: number /*int*/, declaringClassName: string, returnTypeName: string, classLoader: java.lang.ClassLoader, methodMetadataSet: Array<org.springframework.core.type.MethodMetadata>)
                        // @ts-ignore
                        readonly methodName: string
                        // @ts-ignore
                        readonly access: number /*int*/
                        // @ts-ignore
                        readonly declaringClassName: string
                        // @ts-ignore
                        readonly returnTypeName: string
                        // @ts-ignore
                        readonly classLoader: java.lang.ClassLoader
                        // @ts-ignore
                        readonly methodMetadataSet: Array<org.springframework.core.type.MethodMetadata>
                        // @ts-ignore
                        readonly metaAnnotationMap: java.util.Map<java.lang.String, java.util.Set<java.lang.String>>
                        // @ts-ignore
                        readonly attributesMap: org.springframework.util.LinkedMultiValueMap<java.lang.String, org.springframework.core.annotation.AnnotationAttributes>
                        // @ts-ignore
                        getAnnotations(): org.springframework.core.annotation.MergedAnnotations
                        // @ts-ignore
                        visitAnnotation(desc: string, visible: boolean): org.springframework.asm.AnnotationVisitor
                        // @ts-ignore
                        getMethodName(): java.lang.String
                        // @ts-ignore
                        isAbstract(): boolean
                        // @ts-ignore
                        isStatic(): boolean
                        // @ts-ignore
                        isFinal(): boolean
                        // @ts-ignore
                        isOverridable(): boolean
                        // @ts-ignore
                        isAnnotated(annotationName: string): boolean
                        // @ts-ignore
                        getAnnotationAttributes(annotationName: string, classValuesAsString: boolean): org.springframework.core.annotation.AnnotationAttributes
                        // @ts-ignore
                        getAllAnnotationAttributes(annotationName: string, classValuesAsString: boolean): org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>
                        // @ts-ignore
                        getDeclaringClassName(): java.lang.String
                        // @ts-ignore
                        getReturnTypeName(): java.lang.String
                    }
                }
            }
        }
    }
}
