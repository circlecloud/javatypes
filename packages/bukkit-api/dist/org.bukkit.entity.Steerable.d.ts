declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an entity which may be saddled, ridden and steered using an item.
             */
            // @ts-ignore
            interface Steerable extends org.bukkit.entity.Animals {
                /**
                 * Check if the pig has a saddle.
                 * @return if the pig has been saddled.
                 */
                // @ts-ignore
                hasSaddle(): boolean
                /**
                 * Sets if the pig has a saddle or not
                 * @param saddled set if the pig has a saddle or not.
                 */
                // @ts-ignore
                setSaddle(saddled: boolean): void
                /**
                 * Get the time in ticks this entity's movement is being increased.
                 * Movement speed is often increased as a result of using the
                 * {@link #getSteerMaterial()}.
                 * @return the current boost ticks
                 */
                // @ts-ignore
                getBoostTicks(): number /*int*/
                /**
                 * Set the time in ticks this entity's movement will be increased.
                 * This will reset the current boost ticks to 0
                 * ({@link #getCurrentBoostTicks()}).
                 * @param ticks the boost time
                 */
                // @ts-ignore
                setBoostTicks(ticks: number /*int*/): void
                /**
                 * Get the time in ticks this entity's movement has been increased as of the
                 * most recent boost.
                 * Current boost ticks will never be {@literal >} {@link #getBoostTicks()}.
                 * @return the current boost ticks
                 */
                // @ts-ignore
                getCurrentBoostTicks(): number /*int*/
                /**
                 * Set the time in ticks this entity's movement has been increased relative
                 * to the most recent boost.
                 * @param ticks the current boost ticks. Must be {#literal >=} 0 and {@literal <=}
                 *  {@link #getBoostTicks()}
                 */
                // @ts-ignore
                setCurrentBoostTicks(ticks: number /*int*/): void
                /**
                 * Get the material used to steer this entity when ridden by a player.
                 * @return the lure material
                 */
                // @ts-ignore
                getSteerMaterial(): org.bukkit.Material
            }
        }
    }
}
