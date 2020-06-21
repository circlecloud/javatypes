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
                        readonly annotationSet: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>
                        // @ts-ignore
                        readonly metaAnnotationMap: java.util.Map<java.lang.String | string, java.util.Set<java.lang.String | string> | Array<java.lang.String | string>>
                        /**
                         * Declared as a {@link LinkedMultiValueMap} instead of a {@link MultiValueMap}
                         * to ensure that the hierarchical ordering of the entries is preserved.
                         * @see AnnotationReadingVisitorUtils#getMergedAnnotationAttributes
                         */
                        // @ts-ignore
                        readonly attributesMap: org.springframework.util.LinkedMultiValueMap<java.lang.String | string, org.springframework.core.annotation.AnnotationAttributes>
                        // @ts-ignore
                        readonly methodMetadataSet: java.util.Set<org.springframework.core.type.MethodMetadata> | Array<org.springframework.core.type.MethodMetadata>
                        // @ts-ignore
                        public getAnnotations(): org.springframework.core.annotation.MergedAnnotations
                        // @ts-ignore
                        public visitMethod(access: number /*int*/, name: java.lang.String | string, desc: java.lang.String | string, signature: java.lang.String | string, exceptions: java.lang.String[] | string[]): org.springframework.asm.MethodVisitor
                        // @ts-ignore
                        public visitAnnotation(desc: java.lang.String | string, visible: boolean): org.springframework.asm.AnnotationVisitor
                        // @ts-ignore
                        public getAnnotationTypes(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getMetaAnnotationTypes(annotationName: java.lang.String | string): Array<java.lang.String | string>
                        // @ts-ignore
                        public hasMetaAnnotation(metaAnnotationType: java.lang.String | string): boolean
                        // @ts-ignore
                        public isAnnotated(annotationName: java.lang.String | string): boolean
                        // @ts-ignore
                        public hasAnnotation(annotationName: java.lang.String | string): boolean
                        // @ts-ignore
                        public getAnnotationAttributes(annotationName: java.lang.String | string, classValuesAsString: boolean): org.springframework.core.annotation.AnnotationAttributes
                        // @ts-ignore
                        public getAllAnnotationAttributes(annotationName: java.lang.String | string, classValuesAsString: boolean): org.springframework.util.MultiValueMap<java.lang.String | string, java.lang.Object | any>
                        // @ts-ignore
                        public hasAnnotatedMethods(annotationName: java.lang.String | string): boolean
                        // @ts-ignore
                        public getAnnotatedMethods(annotationName: java.lang.String | string): Array<org.springframework.core.type.MethodMetadata>
                    }
                }
            }
        }
    }
}
