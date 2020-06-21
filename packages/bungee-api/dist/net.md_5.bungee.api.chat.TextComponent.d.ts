declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                    class TextComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a TextComponent with blank text.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a TextComponent with formatting and text from the passed
                         * component
                         * @param textComponent the component to copy from
                         */
                        // @ts-ignore
                        constructor(textComponent: net.md_5.bungee.api.chat.TextComponent)
                        /**
                         * Creates a TextComponent with blank text and the extras set to the passed
                         * array
                         * @param extras the extras to set
                         */
                        // @ts-ignore
                        constructor(...extras: net.md_5.bungee.api.chat.BaseComponent[])
                        // @ts-ignore
                        constructor(text: java.lang.String | string)
                        /**
                         * Converts the old formatting system that used
                         * {@link net.md_5.bungee.api.ChatColor#COLOR_CHAR} into the new json based
                         * system.
                         * @param message the text to convert
                         * @return the components needed to print the message to the client
                         */
                        // @ts-ignore
                        public static fromLegacyText(message: java.lang.String | string): net.md_5.bungee.api.chat.BaseComponent[]
                        /**
                         * Converts the old formatting system that used
                         * {@link net.md_5.bungee.api.ChatColor#COLOR_CHAR} into the new json based
                         * system.
                         * @param message the text to convert
                         * @param defaultColor color to use when no formatting is to be applied
                         *  (i.e. after ChatColor.RESET).
                         * @return the components needed to print the message to the client
                         */
                        // @ts-ignore
                        public static fromLegacyText(message: java.lang.String | string, defaultColor: net.md_5.bungee.api.ChatColor): net.md_5.bungee.api.chat.BaseComponent[]
                        /**
                         * Creates a duplicate of this TextComponent.
                         * @return the duplicate of this TextComponent.
                         */
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.BaseComponent
                        // @ts-ignore
                        toPlainText(builder: java.lang.StringBuilder): void
                        // @ts-ignore
                        toLegacyText(builder: java.lang.StringBuilder): void
                        // @ts-ignore
                        public toString(): string
                        /**
                         * The text of the component that will be displayed to the client
                         */
                        // @ts-ignore
                        public getText(): string
                        /**
                         * The text of the component that will be displayed to the client
                         */
                        // @ts-ignore
                        public setText(text: java.lang.String | string): void
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
