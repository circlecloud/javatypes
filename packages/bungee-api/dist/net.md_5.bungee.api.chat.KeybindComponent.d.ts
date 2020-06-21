declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    // @ts-ignore
                    class KeybindComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a keybind component from the original to clone it.
                         * @param original the original for the new keybind component.
                         */
                        // @ts-ignore
                        constructor(original: net.md_5.bungee.api.chat.KeybindComponent)
                        /**
                         * Creates a keybind component with the passed internal keybind value.
                         * @param keybind the keybind value
                         * @see Keybinds
                         */
                        // @ts-ignore
                        constructor(keybind: java.lang.String | string)
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.BaseComponent
                        // @ts-ignore
                        toPlainText(builder: java.lang.StringBuilder): void
                        // @ts-ignore
                        toLegacyText(builder: java.lang.StringBuilder): void
                        /**
                         * The keybind identifier to use.
                         * <br>
                         * Will be replaced with the actual key the client is using.
                         */
                        // @ts-ignore
                        public getKeybind(): string
                        /**
                         * The keybind identifier to use.
                         * <br>
                         * Will be replaced with the actual key the client is using.
                         */
                        // @ts-ignore
                        public setKeybind(keybind: java.lang.String | string): void
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
