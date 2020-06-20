declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * An animal that can sit still.
             */
            // @ts-ignore
            interface Sittable {
                /**
                 * Checks if this animal is sitting
                 * @return true if sitting
                 */
                // @ts-ignore
                isSitting(): boolean
                /**
                 * Sets if this animal is sitting. Will remove any path that the animal
                 * was following beforehand.
                 * @param sitting true if sitting
                 */
                // @ts-ignore
                setSitting(sitting: boolean): void
            }
        }
    }
}
