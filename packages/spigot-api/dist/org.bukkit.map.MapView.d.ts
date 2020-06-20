declare namespace org {
    namespace bukkit {
        namespace map {
            /**
             * Represents a map item.
             */
            // @ts-ignore
            interface MapView {
                /**
                 * Get the ID of this map item for use with {@link MapMeta}.
                 * @return The ID of the map.
                 */
                // @ts-ignore
                getId(): int
                /**
                 * Check whether this map is virtual. A map is virtual if its lowermost
                 * MapRenderer is plugin-provided.
                 * @return Whether the map is virtual.
                 */
                // @ts-ignore
                isVirtual(): boolean
                /**
                 * Get the scale of this map.
                 * @return The scale of the map.
                 */
                // @ts-ignore
                getScale(): org.bukkit.map.MapView.Scale
                /**
                 * Set the scale of this map.
                 * @param scale The scale to set.
                 */
                // @ts-ignore
                setScale(scale: org.bukkit.map.MapView.Scale): void
                /**
                 * Get the center X position of this map.
                 * @return The center X position.
                 */
                // @ts-ignore
                getCenterX(): int
                /**
                 * Get the center Z position of this map.
                 * @return The center Z position.
                 */
                // @ts-ignore
                getCenterZ(): int
                /**
                 * Set the center X position of this map.
                 * @param x The center X position.
                 */
                // @ts-ignore
                setCenterX(x: number /*int*/): void
                /**
                 * Set the center Z position of this map.
                 * @param z The center Z position.
                 */
                // @ts-ignore
                setCenterZ(z: number /*int*/): void
                /**
                 * Get the world that this map is associated with. Primarily used by the
                 * internal renderer, but may be used by external renderers. May return
                 * null if the world the map is associated with is not loaded.
                 * @return The World this map is associated with.
                 */
                // @ts-ignore
                getWorld(): org.bukkit.World
                /**
                 * Set the world that this map is associated with. The world is used by
                 * the internal renderer, and may also be used by external renderers.
                 * @param world The World to associate this map with.
                 */
                // @ts-ignore
                setWorld(world: org.bukkit.World): void
                /**
                 * Get a list of MapRenderers currently in effect.
                 * @return A {#code List<MapRenderer>} containing each map renderer.
                 */
                // @ts-ignore
                getRenderers(): java.util.List<org.bukkit.map.MapRenderer>
                /**
                 * Add a renderer to this map.
                 * @param renderer The MapRenderer to add.
                 */
                // @ts-ignore
                addRenderer(renderer: org.bukkit.map.MapRenderer): void
                /**
                 * Remove a renderer from this map.
                 * @param renderer The MapRenderer to remove.
                 * @return True if the renderer was successfully removed.
                 */
                // @ts-ignore
                removeRenderer(renderer: org.bukkit.map.MapRenderer): boolean
                /**
                 * Gets whether a position cursor should be shown when the map is near its
                 * center.
                 * @return tracking status
                 */
                // @ts-ignore
                isTrackingPosition(): boolean
                /**
                 * Sets whether a position cursor should be shown when the map is near its
                 * center.
                 * @param trackingPosition tracking status
                 */
                // @ts-ignore
                setTrackingPosition(trackingPosition: boolean): void
                /**
                 * Whether the map will show a smaller position cursor (true), or no
                 * position cursor (false) when cursor is outside of map's range.
                 * @return unlimited tracking state
                 */
                // @ts-ignore
                isUnlimitedTracking(): boolean
                /**
                 * Whether the map will show a smaller position cursor (true), or no
                 * position cursor (false) when cursor is outside of map's range.
                 * @param unlimited tracking state
                 */
                // @ts-ignore
                setUnlimitedTracking(unlimited: boolean): void
                /**
                 * Gets whether the map is locked or not.
                 * A locked map may not be explored further.
                 * @return lock status
                 */
                // @ts-ignore
                isLocked(): boolean
                /**
                 * Gets whether the map is locked or not.
                 * A locked map may not be explored further.
                 * @param locked status
                 */
                // @ts-ignore
                setLocked(locked: boolean): void
            }
        }
    }
}
