declare namespace org {
    namespace springframework {
        namespace context {
            namespace annotation {
                namespace DeferredImportSelector {
                    /**
                     * Interface used to group results from different import selectors.
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface Group {
                        /**
                         * Process the {@link AnnotationMetadata} of the importing @{@link Configuration}
                         * class using the specified {@link DeferredImportSelector}.
                         */
                        // @ts-ignore
                        process(metadata: AnnotationMetadata, selector: org.springframework.context.annotation.DeferredImportSelector): void
                        /**
                         * Return the {@link Entry entries} of which class(es) should be imported
                         * for this group.
                         */
                        // @ts-ignore
                        selectImports(): java.lang.Iterable<org.springframework.context.annotation.DeferredImportSelector.Group.Entry>
                    }
                }
            }
        }
    }
}
