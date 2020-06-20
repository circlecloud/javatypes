declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a puffer fish.
             */
            // @ts-ignore
            interface PufferFish extends org.bukkit.entity.Fish {
                /**
                 * Returns the current puff state of this fish (i.e. how inflated it is).
                 * @return current puff state
                 */
                // @ts-ignore
                getPuffState(): int
                /**
                 * Sets the current puff state of this fish (i.e. how inflated it is).
                 * @param state new puff state
                 */
                // @ts-ignore
                setPuffState(state: number /*int*/): void
            }
        }
    }
}
