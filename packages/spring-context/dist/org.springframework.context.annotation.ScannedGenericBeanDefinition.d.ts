declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Extension of the {@link org.springframework.beans.factory.support.GenericBeanDefinition}
                 * class, based on an ASM ClassReader, with support for annotation metadata exposed
                 * through the {@link AnnotatedBeanDefinition} interface.
                 * <p>This class does <i>not</i> load the bean {@code Class} early.
                 * It rather retrieves all relevant metadata from the ".class" file itself,
                 * parsed with the ASM ClassReader. It is functionally equivalent to
                 * {@link AnnotatedGenericBeanDefinition#AnnotatedGenericBeanDefinition(AnnotationMetadata)}
                 * but distinguishes by type beans that have been <em>scanned</em> vs those that have
                 * been otherwise registered or detected by other means.
                 * @author Juergen Hoeller
                 * @author Chris Beams
                 * @since 2.5
                 * @see #getMetadata()
                 * @see #getBeanClassName()
                 * @see org.springframework.core.type.classreading.MetadataReaderFactory
                 * @see AnnotatedGenericBeanDefinition
                 */
                // @ts-ignore
                class ScannedGenericBeanDefinition extends GenericBeanDefinition {
                    /**
                     * Create a new ScannedGenericBeanDefinition for the class that the
                     * given MetadataReader describes.
                     * @param metadataReader the MetadataReader for the scanned target class
                     */
                    // @ts-ignore
                    constructor(metadataReader: MetadataReader)
                    // @ts-ignore
                    getMetadata(): AnnotationMetadata
                    // @ts-ignore
                    getFactoryMethodMetadata(): MethodMetadata
                }
            }
        }
    }
}
