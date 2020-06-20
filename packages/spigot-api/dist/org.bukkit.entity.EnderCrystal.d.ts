declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * A crystal that heals nearby EnderDragons
             */
            // @ts-ignore
            interface EnderCrystal extends org.bukkit.entity.Entity {
                /**
                 * Return whether or not this end crystal is showing the
                 * bedrock slate underneath it.
                 * @return true if the bottom is being shown
                 */
                // @ts-ignore
                isShowingBottom(): boolean
                /**
                 * Sets whether or not this end crystal is showing the
                 * bedrock slate underneath it.
                 * @param showing whether the bedrock slate should be shown
                 */
                // @ts-ignore
                setShowingBottom(showing: boolean): void
                /**
                 * Gets the location that this end crystal is pointing its beam to.
                 * @return the location that the beam is pointed to, or null if the beam is not shown
                 */
                // @ts-ignore
                getBeamTarget(): org.bukkit.Location
                /**
                 * Sets the location that this end crystal is pointing to. Passing a null
                 * value will remove the current beam.
                 * @param location the location to point the beam to
                 * @throws IllegalArgumentException for differing worlds
                 */
                // @ts-ignore
                setBeamTarget(location: org.bukkit.Location): void
            }
        }
    }
}
