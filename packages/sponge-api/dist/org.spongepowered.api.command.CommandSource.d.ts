declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                /**
                 * Something that can execute commands.
                 * <p>Examples of potential implementations include players, the server console,
                 * Rcon clients, web-based clients, command blocks, and so on.</p>
                 */
                // @ts-ignore
                interface CommandSource extends org.spongepowered.api.text.channel.MessageReceiver, org.spongepowered.api.service.permission.Subject {
                    /**
                     * Gets the name identifying this command source.
                     * @return The name of this command source
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Gets the locale used by this command source. If this
                     * {@link CommandSource} does have a {@link Locale} configured or does not
                     * support configuring a {@link Locale}, {@link Locales#DEFAULT} is used.
                     * @return The locale used by this command source
                     */
                    // @ts-ignore
                    getLocale(): java.util.Locale
                }
            }
        }
    }
}
