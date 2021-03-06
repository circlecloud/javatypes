declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of an end gateway.
             */
            // @ts-ignore
            interface EndGateway extends org.bukkit.block.TileState {
                /**
                 * Gets the location that entities are teleported to when
                 * entering the gateway portal.
                 * <p>
                 * If this block state is not placed the location's world will be null.
                 * @return the gateway exit location
                 */
                // @ts-ignore
                getExitLocation(): org.bukkit.Location
                /**
                 * Sets the exit location that entities are teleported to when
                 * they enter the gateway portal.
                 * <p>
                 * If this block state is not placed the location's world has to be null.
                 * @param location the new exit location
                 * @throws IllegalArgumentException for differing worlds
                 */
                // @ts-ignore
                setExitLocation(location: org.bukkit.Location): void
                /**
                 * Gets whether this gateway will teleport entities directly to
                 * the exit location instead of finding a nearby location.
                 * @return true if the gateway is teleporting to the exact location
                 */
                // @ts-ignore
                isExactTeleport(): boolean
                /**
                 * Sets whether this gateway will teleport entities directly to
                 * the exit location instead of finding a nearby location.
                 * @param exact whether to teleport to the exact location
                 */
                // @ts-ignore
                setExactTeleport(exact: boolean): void
                /**
                 * Gets the age in ticks of the gateway.
                 * <br>
                 * If the age is less than 200 ticks a magenta beam will be emitted, whilst
                 * if it is a multiple of 2400 ticks a purple beam will be emitted.
                 * @return age in ticks
                 */
                // @ts-ignore
                getAge(): number /*long*/
                /**
                 * Sets the age in ticks of the gateway.
                 * <br>
                 * If the age is less than 200 ticks a magenta beam will be emitted, whilst
                 * if it is a multiple of 2400 ticks a purple beam will be emitted.
                 * @param age new age in ticks
                 */
                // @ts-ignore
                setAge(age: number /*long*/): void
            }
        }
    }
}
