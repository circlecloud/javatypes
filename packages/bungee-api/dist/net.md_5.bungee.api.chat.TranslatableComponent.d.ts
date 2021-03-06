declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                    class TranslatableComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a translatable component from the original to clone it.
                         * @param original the original for the new translatable component.
                         */
                        // @ts-ignore
                        constructor(original: net.md_5.bungee.api.chat.TranslatableComponent)
                        /**
                         * Creates a translatable component with the passed substitutions
                         * @param translate the translation key
                         * @param with the {#link java.lang.String}s and
                         *  {@link net.md_5.bungee.api.chat.BaseComponent}s to use into the
                         *  translation
                         * @see #translate
                         * @see #setWith(java.util.List)
                         */
                        // @ts-ignore
                        constructor(translate: java.lang.String | string, ...jwith: java.lang.Object[] | any[])
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a duplicate of this TranslatableComponent.
                         * @return the duplicate of this TranslatableComponent.
                         */
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.BaseComponent
                        /**
                         * Sets the translation substitutions to be used in this component. Removes
                         * any previously set substitutions
                         * @param components the components to substitute
                         */
                        // @ts-ignore
                        public setWith(components: java.util.List<net.md_5.bungee.api.chat.BaseComponent> | Array<net.md_5.bungee.api.chat.BaseComponent>): void
                        /**
                         * Adds a text substitution to the component. The text will inherit this
                         * component's formatting
                         * @param text the text to substitute
                         */
                        // @ts-ignore
                        public addWith(text: java.lang.String | string): void
                        /**
                         * Adds a component substitution to the component. The text will inherit
                         * this component's formatting
                         * @param component the component to substitute
                         */
                        // @ts-ignore
                        public addWith(component: net.md_5.bungee.api.chat.BaseComponent): void
                        // @ts-ignore
                        toPlainText(builder: java.lang.StringBuilder): void
                        // @ts-ignore
                        toLegacyText(builder: java.lang.StringBuilder): void
                        // @ts-ignore
                        public getFormat(): java.util.regex.Pattern
                        /**
                         * The key into the Minecraft locale files to use for the translation. The
                         * text depends on the client's locale setting. The console is always en_US
                         */
                        // @ts-ignore
                        public getTranslate(): string
                        /**
                         * The components to substitute into the translation
                         */
                        // @ts-ignore
                        public getWith(): Array<net.md_5.bungee.api.chat.BaseComponent>
                        /**
                         * The key into the Minecraft locale files to use for the translation. The
                         * text depends on the client's locale setting. The console is always en_US
                         */
                        // @ts-ignore
                        public setTranslate(translate: java.lang.String | string): void
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
