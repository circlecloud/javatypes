declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents how a block or entity will react when interacting with a piston
             * when it is extending or retracting.
             */
            // @ts-ignore
            class PistonMoveReaction extends java.lang.Enum<org.bukkit.block.PistonMoveReaction> {
                /**
                 * Indicates that the block can be pushed or pulled.
                 */
                // @ts-ignore
                readonly MOVE: org.bukkit.block.PistonMoveReaction
                /**
                 * Indicates the block is fragile and will break if pushed on.
                 */
                // @ts-ignore
                readonly BREAK: org.bukkit.block.PistonMoveReaction
                /**
                 * Indicates that the block will resist being pushed or pulled.
                 */
                // @ts-ignore
                readonly BLOCK: org.bukkit.block.PistonMoveReaction
                /**
                 * Indicates that the entity will ignore any interaction(s) with
                 * pistons.
                 * <br>
                 * Blocks should use {@link PistonMoveReaction#BLOCK}.
                 */
                // @ts-ignore
                readonly IGNORE: org.bukkit.block.PistonMoveReaction
                /**
                 * Indicates that the block can only be pushed by pistons, not pulled.
                 */
                // @ts-ignore
                readonly PUSH_ONLY: org.bukkit.block.PistonMoveReaction
                // @ts-ignore
                values(): org.bukkit.block.PistonMoveReaction[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): org.bukkit.block.PistonMoveReaction
                /**
                 * @return The ID of the move reaction
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getId(): number /*int*/
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
