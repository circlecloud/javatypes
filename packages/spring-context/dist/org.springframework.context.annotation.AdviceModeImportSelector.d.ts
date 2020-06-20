declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * Convenient base class for {@link ImportSelector} implementations that select imports
                 * based on an {@link AdviceMode} value from an annotation (such as the {@code @Enable*}
                 * annotations).
                 * @author Chris Beams
                 * @since 3.1
                 * @param <A> annotation containing {#linkplain #getAdviceModeAttributeName() AdviceMode attribute}
                 */
                // @ts-ignore
                class AdviceModeImportSelector<A extends java.lang.annotation.Annotation> extends java.lang.Object implements org.springframework.context.annotation.ImportSelector {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default advice mode attribute name.
                     */
                    // @ts-ignore
                    readonly DEFAULT_ADVICE_MODE_ATTRIBUTE_NAME: string
                    /**
                     * The name of the {@link AdviceMode} attribute for the annotation specified by the
                     * generic type {@code A}. The default is {@value #DEFAULT_ADVICE_MODE_ATTRIBUTE_NAME},
                     * but subclasses may override in order to customize.
                     */
                    // @ts-ignore
                    getAdviceModeAttributeName(): java.lang.String
                    /**
                     * This implementation resolves the type of annotation from generic metadata and
                     * validates that (a) the annotation is in fact present on the importing
                     * {@code @Configuration} class and (b) that the given annotation has an
                     * {@linkplain #getAdviceModeAttributeName() advice mode attribute} of type
                     * {@link AdviceMode}.
                     * <p>The {@link #selectImports(AdviceMode)} method is then invoked, allowing the
                     * concrete implementation to choose imports in a safe and convenient fashion.
                     * @throws IllegalArgumentException if expected annotation {#code A} is not present
                     *  on the importing {@code @Configuration} class or if {@link #selectImports(AdviceMode)}
                     *  returns {@code null}
                     */
                    // @ts-ignore
                    selectImports(importingClassMetadata: AnnotationMetadata): java.lang.String[]
                }
            }
        }
    }
}
