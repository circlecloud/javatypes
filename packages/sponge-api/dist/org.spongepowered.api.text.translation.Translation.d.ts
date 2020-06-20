declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace translation {
                    /**
                     * Represents an identifier for text that can be translated into multiple
                     * languages. Minecraft-included translations are generally translated
                     * clientside. Translations not included in Minecraft are generally expected to
                     * be translated server-side, for example using Gettext or a
                     * {@link ResourceBundle}
                     * <p>Some translations require parameters to be sent together with them, if
                     * they're not given they will be filled with empty text.</p>
                     * <p>While the client has multiple locales available, server-side vanilla
                     * translations usually support only {@link NamedLocales#AMERICAN_ENGLISH}.</p>
                     */
                    // @ts-ignore
                    interface Translation {
                        /**
                         * Gets the identifier for this {@link Translation}.
                         * @return The translation identifier of this translation
                         */
                        // @ts-ignore
                        getId(): java.lang.String
                        /**
                         * Gets the default translation without extra parameters.
                         * @return The default translation
                         */
                        // @ts-ignore
                        get(): java.lang.String
                        /**
                         * Gets the default translation format with the specified parameters.
                         * @param args The parameters for this translation
                         * @return The default translation with the specified parameters
                         */
                        // @ts-ignore
                        get(...args: any[]): java.lang.String
                        /**
                         * Gets the translation without any parameters replaced.
                         * @param locale The language to get the translated format string for
                         * @return The translation without any parameters
                         */
                        // @ts-ignore
                        get(locale: java.util.Locale): java.lang.String
                        /**
                         * Gets the translation format with the specified parameters.
                         * @param locale The language to get the translated string for
                         * @param args The parameters for this translation
                         * @return The translation with the specified parameters
                         */
                        // @ts-ignore
                        get(locale: java.util.Locale, ...args: any[]): java.lang.String
                    }
                }
            }
        }
    }
}
