declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    /**
                     * A basic implementation of {@link TextFormatter} backed by an
                     * {@link ArrayList}.
                     */
                    // @ts-ignore
                    class SimpleTextFormatter extends java.lang.Object implements org.spongepowered.api.text.transform.TextFormatter<org.spongepowered.api.text.transform.SimpleTextTemplateApplier> {
                        /**
                         * Constructs a new {@link SimpleTextFormatter} with the specified amount
                         * of initial {@link TextTemplateApplier}s.
                         * @param initialSize Initial amount of Parts
                         */
                        // @ts-ignore
                        constructor(initialSize: number /*int*/)
                        /**
                         * Constructs an empty text formatter.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly parts: Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>
                        // @ts-ignore
                        getAll(): <any>
                        // @ts-ignore
                        get(i: number /*int*/): org.spongepowered.api.text.transform.SimpleTextTemplateApplier
                        // @ts-ignore
                        set(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): org.spongepowered.api.text.transform.SimpleTextTemplateApplier
                        // @ts-ignore
                        size(): int
                        // @ts-ignore
                        isEmpty(): boolean
                        // @ts-ignore
                        contains(element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): boolean
                        // @ts-ignore
                        clear(): void
                        // @ts-ignore
                        add(element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): boolean
                        // @ts-ignore
                        add(elements: Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>): boolean
                        // @ts-ignore
                        insert(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): void
                        // @ts-ignore
                        insert(i: number /*int*/, elements: Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>): void
                        // @ts-ignore
                        remove(element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): boolean
                        // @ts-ignore
                        remove(elements: Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>): boolean
                        // @ts-ignore
                        retain(elements: Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>): boolean
                    }
                }
            }
        }
    }
}
