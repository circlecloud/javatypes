declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace translation {
                    /**
                     * A translation providing a fixed value.
                     */
                    // @ts-ignore
                    class FixedTranslation extends java.lang.Object implements org.spongepowered.api.text.translation.Translation {
                        /**
                         * Create a new translation with an id and value that are the same.
                         * @param value The id and value
                         */
                        // @ts-ignore
                        constructor(value: java.lang.String | string)
                        // @ts-ignore
                        public getId(): string
                        // @ts-ignore
                        public get(locale: java.util.Locale): string
                        // @ts-ignore
                        public get(locale: java.util.Locale, ...args: java.lang.Object[] | any[]): string
                    }
                }
            }
        }
    }
}
