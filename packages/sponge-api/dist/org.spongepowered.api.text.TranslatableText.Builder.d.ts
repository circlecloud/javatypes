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
                        getTranslation(): org.spongepowered.api.text.translation.Translation
                        /**
                         * Returns the current translation arguments of this builder.
                         * @return The current translation arguments
                         * @see TranslatableText#getArguments()
                         */
                        // @ts-ignore
                        getArguments(): <any>
                        /**
                         * Sets the translation of the text.
                         * @param translation The translation to use for this builder
                         * @param args The arguments for the translation
                         * @return This text builder
                         */
                        // @ts-ignore
                        translation(translation: org.spongepowered.api.text.translation.Translation, ...args: any[]): org.spongepowered.api.text.TranslatableText.Builder
                        /**
                         * Sets the translation of the text.
                         * @param translatable The translatable object to use for this builder
                         * @param args The arguments for the translation
                         * @return This text builder
                         */
                        // @ts-ignore
                        translation(translatable: org.spongepowered.api.text.translation.Translatable, ...args: any[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        build(): org.spongepowered.api.text.TranslatableText
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        style(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        onClick(clickAction: org.spongepowered.api.text.action.ClickAction<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        onHover(hoverAction: org.spongepowered.api.text.action.HoverAction<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        onShiftClick(shiftClickAction: org.spongepowered.api.text.action.ShiftClickAction<any>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        append(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        append(children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        append(children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        append(children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, ...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        insert(pos: number /*int*/, children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        remove(...children: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        remove(children: Array<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        remove(children: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        remove(children: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.TranslatableText.Builder
                        // @ts-ignore
                        removeAll(): org.spongepowered.api.text.TranslatableText.Builder
                    }
                }
            }
        }
    }
}
