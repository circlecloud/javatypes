declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                /**
                 * This class provides translations for strings within SpongeAPI. Plugins
                 * should consult an implementation of Translation for help.
                 * <p>THIS IS AN API-INTERNAL CLASS -- DO NOT USE OUTSIDE OF API OR YOU WILL
                 * LIVE A SAD AND LONELY LIFE</p>
                 */
                // @ts-ignore
                class SpongeApiTranslationHelper extends java.lang.Object {
                    /**
                     * Gets the translated text for a given string.
                     * @param key The translation key
                     * @param args Translation parameters
                     * @return The translatable text
                     */
                    // @ts-ignore
                    t(key: string, ...args: any[]): org.spongepowered.api.text.Text
                }
            }
        }
    }
}
