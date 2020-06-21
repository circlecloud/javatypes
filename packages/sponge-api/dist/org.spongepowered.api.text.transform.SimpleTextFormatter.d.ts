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
                        readonly parts: java.util.List<org.spongepowered.api.text.transform.SimpleTextTemplateApplier> | Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>
                        // @ts-ignore
                        public getAll(): object
                        // @ts-ignore
                        public get(i: number /*int*/): org.spongepowered.api.text.transform.SimpleTextTemplateApplier
                        // @ts-ignore
                        public set(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): org.spongepowered.api.text.transform.SimpleTextTemplateApplier
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public contains(element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): boolean
                        // @ts-ignore
                        public clear(): void
                        // @ts-ignore
                        public add(element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): boolean
                        // @ts-ignore
                        public add(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextTemplateApplier> | Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>): boolean
                        // @ts-ignore
                        public insert(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): void
                        // @ts-ignore
                        public insert(i: number /*int*/, elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextTemplateApplier> | Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>): void
                        // @ts-ignore
                        public remove(element: org.spongepowered.api.text.transform.SimpleTextTemplateApplier): boolean
                        // @ts-ignore
                        public remove(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextTemplateApplier> | Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>): boolean
                        // @ts-ignore
                        public retain(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextTemplateApplier> | Array<org.spongepowered.api.text.transform.SimpleTextTemplateApplier>): boolean
                    }
                }
            }
        }
    }
}
