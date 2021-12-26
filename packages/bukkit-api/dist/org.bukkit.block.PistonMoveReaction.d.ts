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
                public static readonly MOVE: org.bukkit.block.PistonMoveReaction
                /**
                 * Indicates the block is fragile and will break if pushed on.
                 */
                // @ts-ignore
                public static readonly BREAK: org.bukkit.block.PistonMoveReaction
                /**
                 * Indicates that the block will resist being pushed or pulled.
                 */
                // @ts-ignore
                public static readonly BLOCK: org.bukkit.block.PistonMoveReaction
                /**
                 * Indicates that the entity will ignore any interaction(s) with
                 * pistons.
                 * <br>
                 * Blocks should use {@link PistonMoveReaction#BLOCK}.
                 */
                // @ts-ignore
                public static readonly IGNORE: org.bukkit.block.PistonMoveReaction
                /**
                 * Indicates that the block can only be pushed by pistons, not pulled.
                 */
                // @ts-ignore
                public static readonly PUSH_ONLY: org.bukkit.block.PistonMoveReaction
                // @ts-ignore
                public static values(): org.bukkit.block.PistonMoveReaction[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): org.bukkit.block.PistonMoveReaction
                /**
                 * @return The ID of the move reaction
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public getId(): number /*int*/
                /**
                 * @param id An ID
                 * @return The move reaction with that ID
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static getById(id: number /*int*/): org.bukkit.block.PistonMoveReaction
            }
        }
    }
}
