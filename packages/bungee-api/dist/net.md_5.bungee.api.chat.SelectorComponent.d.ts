declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace chat {
                    /**
                     * This component processes a target selector into a pre-formatted set of
                     * discovered names.
                     * <br>
                     * Multiple targets may be obtained, and with commas separating each one and a
                     * final "and" for the last target. The resulting format cannot be overwritten.
                     * This includes all styling from team prefixes, insertions, click events, and
                     * hover events.
                     * <br>
                     * These values are filled in by the server-side implementation.
                     * <br>
                     * As of 1.12.2, a bug ( MC-56373 ) prevents full usage within hover events.
                     */
                    // @ts-ignore
                    class SelectorComponent extends net.md_5.bungee.api.chat.BaseComponent {
                        /**
                         * Creates a selector component from the original to clone it.
                         * @param original the original for the new selector component
                         */
                        // @ts-ignore
                        constructor(original: net.md_5.bungee.api.chat.SelectorComponent)
                        // @ts-ignore
                        constructor(selector: java.lang.String | string)
                        // @ts-ignore
                        public duplicate(): net.md_5.bungee.api.chat.SelectorComponent
                        // @ts-ignore
                        toPlainText(builder: java.lang.StringBuilder): void
                        // @ts-ignore
                        toLegacyText(builder: java.lang.StringBuilder): void
                        /**
                         * An entity target selector (@p, @a, @r, @e, or @s) and, optionally,
                         * selector arguments (e.g. @e[r=10,type=Creeper]).
                         */
                        // @ts-ignore
                        public getSelector(): string
                        /**
                         * An entity target selector (@p, @a, @r, @e, or @s) and, optionally,
                         * selector arguments (e.g. @e[r=10,type=Creeper]).
                         */
                        // @ts-ignore
                        public setSelector(selector: java.lang.String | string): void
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
