declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    /**
                     * A basic implementation of {@link TextTemplateApplier} backed by a {@link HashMap} and
                     * an empty {@link TextTemplate} by default.
                     */
                    // @ts-ignore
                    class SimpleTextTemplateApplier extends java.lang.Object implements org.spongepowered.api.text.transform.TextTemplateApplier {
                        /**
                         * Creates a new {@link SimpleTextTemplateApplier} with the provided
                         * {@link TextTemplate}.
                         * @param template The template to use
                         */
                        // @ts-ignore
                        constructor(template: org.spongepowered.api.text.TextTemplate)
                        /**
                         * Creates a new {@link SimpleTextTemplateApplier} with an empty
                         * {@link TextTemplate}.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly params: java.util.Map<java.lang.String | string, org.spongepowered.api.text.TextElement>
                        // @ts-ignore
                        template: org.spongepowered.api.text.TextTemplate
                        // @ts-ignore
                        public getParameters(): object
                        // @ts-ignore
                        public setParameter(key: java.lang.String | string, value: org.spongepowered.api.text.TextElement): void
                        // @ts-ignore
                        public getTemplate(): org.spongepowered.api.text.TextTemplate
                        // @ts-ignore
                        public setTemplate(template: org.spongepowered.api.text.TextTemplate): void
                    }
                }
            }
        }
    }
}
