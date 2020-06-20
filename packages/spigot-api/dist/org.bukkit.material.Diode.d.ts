declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a diode/repeater in the on or off state, with a delay and facing
             * in a specific direction.
             * @see Material#LEGACY_DIODE_BLOCK_OFF
             * @see Material#LEGACY_DIODE_BLOCK_ON
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Diode extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Redstone {
                /**
                 * Constructs a diode switched on, with a delay of 1 and facing the default
                 * direction (north).
                 * By default this constructor creates a diode that is switched on for
                 * backwards compatibility with past implementations.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a diode switched off, with a delay of 1 and facing the
                 * specified direction.
                 * @param facingDirection the direction the diode is facing
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace)
                /**
                 * Constructs a diode switched off, with the specified delay and facing the
                 * specified direction.
                 * @param facingDirection the direction the diode is facing
                 * @param delay The number of ticks (1-4) before the diode turns on after
                 *  being powered
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, delay: number /*int*/)
                /**
                 * Constructs a diode switched on or off, with the specified delay and
                 * facing the specified direction.
                 * @param facingDirection the direction the diode is facing
                 * @param delay The number of ticks (1-4) before the diode turns on after
                 *  being powered
                 * @param state True if the diode is in the on state
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(facingDirection: org.bukkit.block.BlockFace, delay: number /*int*/, state: boolean)
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                readonly DEFAULT_DIRECTION: org.bukkit.block.BlockFace
                // @ts-ignore
                readonly DEFAULT_DELAY: number /*int*/
                // @ts-ignore
                readonly DEFAULT_STATE: boolean
                /**
                 * Sets the delay of the repeater.
                 * @param delay The new delay (1-4)
                 */
                // @ts-ignore
                setDelay(delay: number /*int*/): void
                /**
                 * Gets the delay of the repeater in ticks.
                 * @return The delay (1-4)
                 */
                // @ts-ignore
                getDelay(): int
                /**
                 * Sets the direction this diode is facing.
                 * @param face The direction to set this diode to
                 * @see BlockFace
                 */
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                /**
                 * Gets the direction this diode is facing
                 * @return The direction this diode is facing
                 * @see BlockFace
                 */
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Diode
                /**
                 * Checks if the diode is powered.
                 * @return true if the diode is powered
                 */
                // @ts-ignore
                isPowered(): boolean
            }
        }
    }
}
