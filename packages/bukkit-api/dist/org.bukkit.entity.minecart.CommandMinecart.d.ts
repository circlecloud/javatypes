declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace minecart {
                // @ts-ignore
                interface CommandMinecart extends org.bukkit.entity.Minecart {
                    /**
                     * Gets the command that this CommandMinecart will run when activated.
                     * This will never return null.  If the CommandMinecart does not have a
                     * command, an empty String will be returned instead.
                     * @return Command that this CommandMinecart will run when powered.
                     */
                    // @ts-ignore
                    getCommand(): string
                    /**
                     * Sets the command that this CommandMinecart will run when activated.
                     * Setting the command to null is the same as setting it to an empty
                     * String.
                     * @param command Command that this CommandMinecart will run when
                     *      activated.
                     */
                    // @ts-ignore
                    setCommand(command: java.lang.String | string): void
                    /**
                     * Sets the name of this CommandMinecart.  The name is used with commands
                     * that this CommandMinecart executes.  Setting the name to null is the
                     * same as setting it to "@".
                     * @param name New name for this CommandMinecart.
                     */
                    // @ts-ignore
                    setName(name: java.lang.String | string): void
                }
            }
        }
    }
}
