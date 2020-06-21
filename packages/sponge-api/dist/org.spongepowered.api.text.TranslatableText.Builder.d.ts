declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace TranslatableText {
                    /**
                     * Represents a {@link Text.Builder} creating immutable
                     * {@link TranslatableText} instances.
                     * @see TranslatableText
                     */
                    // @ts-ignore
                    class Builder extends org.spongepowered.api.text.Text.Builder {
                        /**
                         * Returns the current translation of this builder.
                         * @return The current content
                         * @see TranslatableText#getTranslation()
                         */
                        // @ts-ignore
                        public getTranslation(): org.spongepowered.api.text.translation.Translation
                        /**
                         * Returns the current translation arguments of this builder.
                         * @return The current translation arguments
                         * @see TranslatableText#getArguments()
                         */
                        // @ts-ignore
                        public getArguments(): object
                        /**
                         * Sets the translation of the text.
                         * @param translation The translation to use for this builder
                         * @param args The arguments for the translation
                         * @return This text builder
                         */
                        // @ts-ignore
                        public translation(translation: org.spongepowered.api.text.translation.Translation, ...args: java.lang.Object[] | any[]): org.spongepowered.api.text.TranslatableText.Builder
                        /**
                         * Sets the translation of the text.
                         * @param translatable The translatable object to use for this builder
                         * @param args The arguments for the translation
                         * @return This text builder
                         */
                        // @ts-ignore
                        public translation(translatable: org.spongepowered.api.text.translation.Translatable, ...args: java.lang.Object[] | any[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public build(): org.spongepowered.api.text.TranslatableText
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public style(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public onClick(clickAction: org.spongepowered.api.text.action.ClickAction<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public onHover(hoverAction: org.spongepowered.api.text.action.HoverAction<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public append(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public append(children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public append(children: java.lang.Iterable<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public append(children: java.util.Iterator<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, ...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.lang.Iterable<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public insert(pos: number /*int*/, children: java.util.Iterator<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public remove(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public remove(children: java.util.Collection<any> | Array<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public remove(children: java.lang.Iterable<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public remove(children: java.util.Iterator<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        public removeAll(): org.spongepowered.api.text.TranslatableText.Builder
                    }
                }
            }
        }
    }
}
