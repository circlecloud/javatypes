declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * Finds safe {@link Location}s for {@link Entity}s (typically ones that won't
                 * hurt them).
                 * <p>Typically, the teleport helper will first determine whether the requested
                 * location is a safe one. If not, it will investigate locations close by,
                 * favouring spots closer, and favouring a location above or below over the
                 * x-z plane if two locations are equidistant.</p>
                 */
                // @ts-ignore
                interface TeleportHelper {
                    /**
                     * The default height radius to scan for safe locations.
                     */
                    // @ts-ignore
                    readonly DEFAULT_HEIGHT: number /*int*/
                    /**
                     * The default width radius to scan for safe locations.
                     */
                    // @ts-ignore
                    readonly DEFAULT_WIDTH: number /*int*/
                    /**
                     * The default distance to check for a suitable floor below any candidate
                     * location.
                     */
                    // @ts-ignore
                    readonly DEFAULT_FLOOR_CHECK_DISTANCE: number /*int*/
                    /**
                     * Gets the next safe {@link Location} around the given location.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}. This method will use the default height and
                     * width for a search area, and will check for a suitable floor up to two
                     * blocks below any selected block.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     * @param location The location to search nearby.
                     * @return A safe location near the original location or the original
                     *          location if it is deemed safe. If no safe location can be found,
                     *          {#link Optional#empty()} will be returned.
                     */
                    // @ts-ignore
                    getSafeLocation(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    /**
                     * Gets the next safe {@link Location} around the given location with a
                     * given tolerance and search radius.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     * <p>This method will check for a suitable floor up to two blocks below
                     * any selected block.</p>
                     * <p>This method will use the default {@link TeleportHelperFilter}</p>
                     * @param location The location to search nearby.
                     * @param height The radius of blocks on the y-axis to search.
                     * @param width The radius of blocks on the x and z-axis to search.
                     * @return A safe location near the original location or the original
                     *          location if it is deemed safe. If no safe location can be found,
                     *          {#link Optional#empty()} will be returned
                     */
                    // @ts-ignore
                    getSafeLocation(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, height: number /*int*/, width: number /*int*/): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    /**
                     * Gets the next safe {@link Location} around the given location with a
                     * given tolerance and search radius.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     * <p>This method will use the default {@link TeleportHelperFilter} and will
                     * respect the blacklist.</p>
                     * @param location The location to search nearby.
                     * @param height The radius of blocks on the y-axis to search.
                     * @param width The radius of blocks on the x and z-axis to search.
                     * @param floorDistance The number of blocks below a selected block to
                     *                       search for a suitable floor, that is, the
                     *                       maximum distance to a floor that the selected
                     *                       point can be. If this is zero or negative, a floor
                     *                       check will not be performed.
                     * @return A safe location near the original location or the original
                     *          location if it is deemed safe. If no safe location can be found,
                     *          {#link Optional#empty()} will be returned
                     */
                    // @ts-ignore
                    getSafeLocation(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, height: number /*int*/, width: number /*int*/, floorDistance: number /*int*/): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    /**
                     * Gets the next safe {@link Location} around the given location with a
                     * given tolerance and search radius.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     * @param location The location to search nearby.
                     * @param height The radius of blocks on the y-axis to search.
                     * @param width The radius of blocks on the x and z-axis to search.
                     * @param floorDistance The number of blocks below a selected block to
                     *                       search for a suitable floor, that is, the
                     *                       maximum distance to a floor that the selected
                     *                       point can be. If this is zero or negative, a floor
                     *                       check will not be performed.
                     * @param filter The {#link TeleportHelperFilter} to use to determine if a
                     *                location is safe.
                     * @param additionalFilters Additional {#link TeleportHelperFilter}s to
                     *                           check. All filters must match for a location to
                     *                           be marked as safe.
                     * @return A safe location near the original location or the original
                     *          location if it is deemed safe. If no safe location can be found,
                     *          {#link Optional#empty()} will be returned
                     */
                    // @ts-ignore
                    getSafeLocation(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, height: number /*int*/, width: number /*int*/, floorDistance: number /*int*/, filter: org.spongepowered.api.world.teleport.TeleportHelperFilter, ...additionalFilters: org.spongepowered.api.world.teleport.TeleportHelperFilter[]): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                    /**
                     * Gets the next safe {@link Location} around the given location with a
                     * given tolerance and search radius.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     * <p>This method will use the defined blacklist, effectively an equivalent
                     * to adding {@link TeleportHelperFilters#CONFIG} to the filter set.</p>
                     * @param location The location to search nearby.
                     * @param height The radius of blocks on the y-axis to search.
                     * @param width The radius of blocks on the x and z-axis to search.
                     * @param floorDistance The number of blocks below a selected block to
                     *                       search for a suitable floor, that is, the
                     *                       maximum distance to a floor that the selected
                     *                       point can be. If this is zero or negative, a floor
                     *                       check will not be performed.
                     * @param filters The {#link TeleportHelperFilter}s to check, in addition
                     *                 to {@link TeleportHelperFilters#CONFIG}. All filters must
                     *                 match for a location to be marked as safe.
                     * @return A safe location near the original location or the original
                     *          location if it is deemed safe. If no safe location can be found,
                     *          {#link Optional#empty()} will be returned
                     */
                    // @ts-ignore
                    getSafeLocationWithBlacklist(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, height: number /*int*/, width: number /*int*/, floorDistance: number /*int*/, ...filters: org.spongepowered.api.world.teleport.TeleportHelperFilter[]): java.util.Optional<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                }
            }
        }
    }
}
