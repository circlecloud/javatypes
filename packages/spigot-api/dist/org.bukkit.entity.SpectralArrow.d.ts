declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a spectral arrow.
             */
            // @ts-ignore
            interface SpectralArrow extends org.bukkit.entity.AbstractArrow {
                /**
                 * Returns the amount of time that this arrow will apply
                 * the glowing effect for.
                 * @return the glowing effect ticks
                 */
                // @ts-ignore
                getGlowingTicks(): int
                /**
                 * Sets the amount of time to apply the glowing effect for.
                 * @param duration the glowing effect ticks
                 */
                // @ts-ignore
                setGlowingTicks(duration: number /*int*/): void
            }
        }
    }
}
