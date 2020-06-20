declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents how a block or entity will react when interacting with a piston
             * when it is extending or retracting.
             */
            // @ts-ignore
            class PistonMoveReaction extends java.lang.Enum<org.bukkit.block.PistonMoveReaction> {
                // @ts-ignore
                values(): org.bukkit.block.PistonMoveReaction[]
                // @ts-ignore
                valueOf(name: string): org.bukkit.block.PistonMoveReaction
                /**
                 * @return The ID of the move reaction
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getId(): int
                /**
                 * @param id An ID
                 * @return The move reaction with that ID
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getById(id: number /*int*/): org.bukkit.block.PistonMoveReaction
            }
        }
    }
}
