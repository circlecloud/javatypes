declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an entity that can age and breed.
             */
            // @ts-ignore
            interface Ageable extends org.bukkit.entity.Creature {
                /**
                 * Gets the age of this animal.
                 * @return Age
                 */
                // @ts-ignore
                getAge(): int
                /**
                 * Sets the age of this animal.
                 * @param age New age
                 */
                // @ts-ignore
                setAge(age: number /*int*/): void
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
                 * Sets the age of the animal to a baby
                 */
                // @ts-ignore
                setBaby(): void
                /**
                 * Sets the age of the animal to an adult
                 */
                // @ts-ignore
                setAdult(): void
                /**
                 * Returns true if the animal is an adult.
                 * @return return true if the animal is an adult
                 */
                // @ts-ignore
                isAdult(): boolean
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
