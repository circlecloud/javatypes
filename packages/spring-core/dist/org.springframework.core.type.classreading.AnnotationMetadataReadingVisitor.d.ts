declare namespace org {
    namespace springframework {
        namespace core {
            namespace type {
                namespace classreading {
                    /**
                     * ASM class visitor which looks for the class name and implemented types as
                     * well as for the annotations defined on the class, exposing them through
                     * the {@link org.springframework.core.type.AnnotationMetadata} interface.
                     * @author Juergen Hoeller
                     * @author Mark Fisher
                     * @author Costin Leau
                     * @author Phillip Webb
                     * @author Sam Brannen
                     * @since 2.5
                     * @deprecated As of Spring Framework 5.2, this class has been replaced by
                     *  {#link SimpleAnnotationMetadataReadingVisitor} for internal use within the
                     *  framework, but there is no public replacement for
                     *  {@code AnnotationMetadataReadingVisitor}.
                     */
                    // @ts-ignore
                    class AnnotationMetadataReadingVisitor extends org.springframework.core.type.classreading.ClassMetadataReadingVisitor implements org.springframework.core.type.AnnotationMetadata {
                        // @ts-ignore
                        constructor(classLoader: java.lang.ClassLoader)
                        // @ts-ignore
                        readonly classLoader: java.lang.ClassLoader
                        // @ts-ignore
                        readonly annotationSet: Array<java.lang.String>
                        // @ts-ignore
                        readonly metaAnnotationMap: java.util.Map<java.lang.String, java.util.Set<java.lang.String>>
                        /**
                         * Declared as a {@link LinkedMultiValueMap} instead of a {@link MultiValueMap}
                         * to ensure that the hierarchical ordering of the entries is preserved.
                         * @see AnnotationReadingVisitorUtils#getMergedAnnotationAttributes
                         */
                        // @ts-ignore
                        readonly attributesMap: org.springframework.util.LinkedMultiValueMap<java.lang.String, org.springframework.core.annotation.AnnotationAttributes>
                        // @ts-ignore
                        readonly methodMetadataSet: Array<org.springframework.core.type.MethodMetadata>
                        // @ts-ignore
                        getAnnotations(): org.springframework.core.annotation.MergedAnnotations
                        // @ts-ignore
                        visitMethod(access: number /*int*/, name: string, desc: string, signature: string, exceptions: string[]): org.springframework.asm.MethodVisitor
                        // @ts-ignore
                        visitAnnotation(desc: string, visible: boolean): org.springframework.asm.AnnotationVisitor
                        // @ts-ignore
                        getAnnotationTypes(): java.util.Set<java.lang.String>
                        // @ts-ignore
                        getMetaAnnotationTypes(annotationName: string): java.util.Set<java.lang.String>
                        // @ts-ignore
                        hasMetaAnnotation(metaAnnotationType: string): boolean
                        // @ts-ignore
                        isAnnotated(annotationName: string): boolean
                        // @ts-ignore
                        hasAnnotation(annotationName: string): boolean
                        // @ts-ignore
                        getAnnotationAttributes(annotationName: string, classValuesAsString: boolean): org.springframework.core.annotation.AnnotationAttributes
                        // @ts-ignore
                        getAllAnnotationAttributes(annotationName: string, classValuesAsString: boolean): org.springframework.util.MultiValueMap<java.lang.String, java.lang.Object>
                        // @ts-ignore
                        hasAnnotatedMethods(annotationName: string): boolean
                        // @ts-ignore
                        getAnnotatedMethods(annotationName: string): java.util.Set<org.springframework.core.type.MethodMetadata>
                    }
                }
            }
        }
    }
}
