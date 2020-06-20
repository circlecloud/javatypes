declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an Ender Dragon
             */
            // @ts-ignore
            interface EnderDragon extends org.bukkit.entity.ComplexLivingEntity, org.bukkit.entity.Boss {
                /**
                 * Gets the current phase that the dragon is performing.
                 * @return the current phase
                 */
                // @ts-ignore
                getPhase(): org.bukkit.entity.EnderDragon.Phase
                /**
                 * Sets the next phase for the dragon to perform.
                 * @param phase the next phase
                 */
                // @ts-ignore
                setPhase(phase: org.bukkit.entity.EnderDragon.Phase): void
                /**
                 * Get the {@link DragonBattle} associated with this EnderDragon.
                 * This will return null if the EnderDragon is not in the End dimension.
                 * @return the dragon battle
                 * @see World#getEnderDragonBattle()
                 */
                // @ts-ignore
                getDragonBattle(): org.bukkit.boss.DragonBattle
                /**
                 * Get the current time in ticks relative to the start of this dragon's
                 * death animation.
                 * If this dragon is alive, 0 will be returned. This value will never exceed
                 * 200 (the length of the animation).
                 * @return this dragon's death animation ticks
                 */
                // @ts-ignore
                getDeathAnimationTicks(): int
            }
        }
    }
}
