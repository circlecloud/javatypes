declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Strider.
             */
            // @ts-ignore
            interface Strider extends org.bukkit.entity.Steerable, org.bukkit.entity.Vehicle {
                /**
                 * Check whether or not this strider is out of warm blocks and shivering.
                 * @return true if shivering, false otherwise
                 */
                // @ts-ignore
                isShivering(): boolean
                /**
                 * Set whether or not this strider is shivering.
                 * Note that the shivering state is updated frequently on the server,
                 * therefore this method may not affect the entity for long enough to have a
                 * noticeable difference.
                 * @param shivering its new shivering state
                 */
                // @ts-ignore
                setShivering(shivering: boolean): void
            }
        }
    }
}
