declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Pig Zombie.
             */
            // @ts-ignore
            interface PigZombie extends org.bukkit.entity.Zombie {
                /**
                 * Get the pig zombie's current anger level.
                 * @return The anger level.
                 */
                // @ts-ignore
                getAnger(): int
                /**
                 * Set the pig zombie's current anger level.
                 * @param level The anger level. Higher levels of anger take longer to
                 *      wear off.
                 */
                // @ts-ignore
                setAnger(level: number /*int*/): void
                /**
                 * Shorthand; sets to either 0 or the default level.
                 * @param angry Whether the zombie should be angry.
                 */
                // @ts-ignore
                setAngry(angry: boolean): void
                /**
                 * Shorthand; gets whether the zombie is angry.
                 * @return True if the zombie is angry, otherwise false.
                 */
                // @ts-ignore
                isAngry(): boolean
                /**
                 * <b>Not applicable to this entity</b>
                 * @return false
                 */
                // @ts-ignore
                isConverting(): boolean
                /**
                 * <b>Not applicable to this entity</b>
                 * @return UnsuppotedOperationException
                 */
                // @ts-ignore
                getConversionTime(): int
                /**
                 * <b>Not applicable to this entity</b>
                 * @param time unused
                 */
                // @ts-ignore
                setConversionTime(time: number /*int*/): void
            }
        }
    }
}
