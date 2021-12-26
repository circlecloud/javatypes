declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an Experience Orb.
             */
            // @ts-ignore
            interface ExperienceOrb extends org.bukkit.entity.Entity {
                /**
                 * Gets how much experience is contained within this orb
                 * @return Amount of experience
                 */
                // @ts-ignore
                getExperience(): number /*int*/
                /**
                 * Sets how much experience is contained within this orb
                 * @param value Amount of experience
                 */
                // @ts-ignore
                setExperience(value: number /*int*/): void
            }
        }
    }
}
