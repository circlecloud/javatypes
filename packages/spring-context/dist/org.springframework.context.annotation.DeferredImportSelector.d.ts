declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                /**
                 * A variation of {@link ImportSelector} that runs after all {@code @Configuration} beans
                 * have been processed. This type of selector can be particularly useful when the selected
                 * imports are {@code @Conditional}.
                 * <p>Implementations can also extend the {@link org.springframework.core.Ordered}
                 * interface or use the {@link org.springframework.core.annotation.Order} annotation to
                 * indicate a precedence against other {@link DeferredImportSelector DeferredImportSelectors}.
                 * <p>Implementations may also provide an {@link #getImportGroup() import group} which
                 * can provide additional sorting and filtering logic across different selectors.
                 * @author Phillip Webb
                 * @author Stephane Nicoll
                 * @since 4.0
                 */
                // @ts-ignore
                interface DeferredImportSelector extends org.springframework.context.annotation.ImportSelector {
                    /**
                     * Return a specific import group.
                     * <p>The default implementations return {@code null} for no grouping required.
                     * @return the import group class, or {#code null} if none
                     * @since 5.0
                     */
                    // @ts-ignore
                    getImportGroup(): java.lang.Class<any>
                }
            }
        }
    }
}
