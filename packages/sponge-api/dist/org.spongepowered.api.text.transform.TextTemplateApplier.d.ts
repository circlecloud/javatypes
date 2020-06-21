declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    /**
                     * Wrapper class to hold {@link TextTemplate} parameters and a TextTemplate.
                     */
                    // @ts-ignore
                    interface TextTemplateApplier extends org.spongepowered.api.text.TextRepresentable {
                        /**
                         * Returns an {@link ImmutableList} of this applier's parameters.
                         * @return Applier parameters
                         */
                        // @ts-ignore
                        getParameters(): object
                        /**
                         * Returns the current value of the parameter with the specified key.
                         * @param key Parameter key
                         * @return Parameter value
                         */
                        // @ts-ignore
                        getParameter(key: java.lang.String | string): org.spongepowered.api.text.TextElement
                        /**
                         * Sets the value of the specified parameter key within this applier.
                         * @param key Parameter key
                         * @param value Parameter value
                         */
                        // @ts-ignore
                        setParameter(key: java.lang.String | string, value: org.spongepowered.api.text.TextElement): void
                        /**
                         * Returns the current {@link TextTemplate} for this applier.
                         * @return TextTemplate
                         */
                        // @ts-ignore
                        getTemplate(): org.spongepowered.api.text.TextTemplate
                        /**
                         * Sets the {@link TextTemplate} to use for this applier.
                         * @param template TextTemplate to use
                         */
                        // @ts-ignore
                        setTemplate(template: org.spongepowered.api.text.TextTemplate): void
                        // @ts-ignore
                        toText(): org.spongepowered.api.text.Text
                    }
                }
            }
        }
    }
}
