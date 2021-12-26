declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an entity that can age and breed.
             */
            // @ts-ignore
            interface Breedable extends org.bukkit.entity.Ageable {
                /**
                 * Lock the age of the animal, setting this will prevent the animal from
                 * maturing or getting ready for mating.
                 * @param lock new lock
                 */
                // @ts-ignore
                setAgeLock(lock: boolean): void
                /**
                 * Gets the current agelock.
                 * @return the current agelock
                 */
                // @ts-ignore
                getAgeLock(): boolean
                /**
                 * Return the ability to breed of the animal.
                 * @return the ability to breed of the animal
                 */
                // @ts-ignore
                canBreed(): boolean
                /**
                 * Set breedability of the animal, if the animal is a baby and set to
                 * breed it will instantly grow up.
                 * @param breed breedability of the animal
                 */
                // @ts-ignore
                setBreed(breed: boolean): void
            }
        }
    }
}
