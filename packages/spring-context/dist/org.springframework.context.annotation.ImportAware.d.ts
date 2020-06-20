declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Interface to be implemented by any @{@link Configuration} class that wishes
                 * to be injected with the {@link AnnotationMetadata} of the @{@code Configuration}
                 * class that imported it. Useful in conjunction with annotations that
                 * use @{@link Import} as a meta-annotation.
                 * @author Chris Beams
                 * @since 3.1
                 */
                // @ts-ignore
                interface ImportAware {
                    /**
                     * Set the annotation metadata of the importing @{@code Configuration} class.
                     */
                    // @ts-ignore
                    setImportMetadata(importMetadata: AnnotationMetadata): void
                }
            }
        }
    }
}
