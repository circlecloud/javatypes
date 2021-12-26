declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a command block.
             */
            // @ts-ignore
            interface CommandBlock extends org.bukkit.block.TileState {
                /**
                 * Gets the command that this CommandBlock will run when powered.
                 * This will never return null.  If the CommandBlock does not have a
                 * command, an empty String will be returned instead.
                 * @return Command that this CommandBlock will run when powered.
                 */
                // @ts-ignore
                getCommand(): string
                /**
                 * Sets the command that this CommandBlock will run when powered.
                 * Setting the command to null is the same as setting it to an empty
                 * String.
                 * @param command Command that this CommandBlock will run when powered.
                 */
                // @ts-ignore
                setCommand(command: java.lang.String | string): void
                /**
                 * Gets the name of this CommandBlock.  The name is used with commands
                 * that this CommandBlock executes.  This name will never be null, and
                 * by default is "@".
                 * @return Name of this CommandBlock.
                 */
                // @ts-ignore
                getName(): string
                /**
                 * Sets the name of this CommandBlock.  The name is used with commands
                 * that this CommandBlock executes.  Setting the name to null is the
                 * same as setting it to "@".
                 * @param name New name for this CommandBlock.
                 */
                // @ts-ignore
                setName(name: java.lang.String | string): void
            }
        }
    }
}
