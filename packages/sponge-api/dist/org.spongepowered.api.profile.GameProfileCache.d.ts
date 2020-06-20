declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace profile {
                /**
                 * Represents a cache of {@link GameProfile}s.
                 */
                // @ts-ignore
                interface GameProfileCache {
                    /**
                     * Add an entry to this cache.
                     * @param profile The profile to cache
                     * @return {#code true} if the profile was successfully cached,
                     *      otherwise {@code false}
                     */
                    // @ts-ignore
                    add(profile: org.spongepowered.api.profile.GameProfile): boolean
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     * @param profile The profile to cache
                     * @param expiry The expiration date
                     * @return {#code true} if the profile was successfully cached,
                     *      otherwise {@code false}
                     * @deprecated Use {#link #add(GameProfile, Instant)}
                     */
                    // @ts-ignore
                    add(profile: org.spongepowered.api.profile.GameProfile, expiry: java.util.Date): boolean
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     * @param profile The profile to cache
                     * @param expiry The expiration date
                     * @return {#code true} if the profile was successfully cached,
                     *      otherwise {@code false}
                     */
                    // @ts-ignore
                    add(profile: org.spongepowered.api.profile.GameProfile, expiry: java.time.Instant): boolean
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     * @param profile The profile to cache
                     * @param overwrite If we should overwrite the cache entry for
                     *       the provided profile
                     * @param expiry The expiration date
                     * @return {#code true} if the profile was successfully cached,
                     *      otherwise {@code false}
                     * @deprecated Use {#link #add(GameProfile, boolean, Instant)}
                     */
                    // @ts-ignore
                    add(profile: org.spongepowered.api.profile.GameProfile, overwrite: boolean, expiry: java.util.Date): boolean
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     * @param profile The profile to cache
                     * @param overwrite If we should overwrite the cache entry for
                     *       the provided profile
                     * @param expiry The expiration date
                     * @return {#code true} if the profile was successfully cached,
                     *      otherwise {@code false}
                     */
                    // @ts-ignore
                    add(profile: org.spongepowered.api.profile.GameProfile, overwrite: boolean, expiry: java.time.Instant): boolean
                    /**
                     * Remove an entry from this cache.
                     * @param profile The profile to remove from the cache
                     * @return {#code true} if the profile was successfully removed,
                     *      otherwise {@code false}
                     */
                    // @ts-ignore
                    remove(profile: org.spongepowered.api.profile.GameProfile): boolean
                    /**
                     * Remove entries from this cache in bulk.
                     * @param profiles The profiles to remove from the cache
                     * @return A collection of profiles successfully removed
                     */
                    // @ts-ignore
                    remove(profiles: java.lang.Iterable<org.spongepowered.api.profile.GameProfile>): java.util.Collection<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Clear all entries from this cache.
                     */
                    // @ts-ignore
                    clear(): void
                    /**
                     * Gets a {@link GameProfile} from this cache by its unique id.
                     * @param uniqueId The unique id of the profile
                     * @return The profile, if present, or {#link Optional#empty()} if
                     *      the cache did not contain a profile with the provided id
                     */
                    // @ts-ignore
                    getById(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Gets {@link GameProfile}s in bulk by their unique id.
                     * @param uniqueIds The unique ids
                     * @return A collection of successfully found up profiles
                     */
                    // @ts-ignore
                    getByIds(uniqueIds: java.lang.Iterable<java.util.UUID>): java.util.Map<java.util.UUID, java.util.Optional<org.spongepowered.api.profile.GameProfile>>
                    /**
                     * Looks a {@link GameProfile} up by its unique id and
                     * loads it into this cache.
                     * @param uniqueId The unique id of the profile
                     * @return The profile, if present, or {#link Optional#empty()} if
                     *      we couldn't find a profile with the provided id
                     */
                    // @ts-ignore
                    lookupById(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Looks up {@link GameProfile}s in bulk by their unique id and
                     * loads them into this cache.
                     * @param uniqueIds The unique ids
                     * @return A collection of successfully looked up profiles
                     */
                    // @ts-ignore
                    lookupByIds(uniqueIds: java.lang.Iterable<java.util.UUID>): java.util.Map<java.util.UUID, java.util.Optional<org.spongepowered.api.profile.GameProfile>>
                    /**
                     * Gets a {@link GameProfile} from this cache by its id if available,
                     * or lookups the profile by its unique id.
                     * @param uniqueId The unique id of the profile
                     * @return The profile, if present, or {#link Optional#empty()} if
                     *      the cache did not contain a profile with the provided id and
                     *      we couldn't lookup a profile with the provided id
                     */
                    // @ts-ignore
                    getOrLookupById(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Gets {@link GameProfile}s in bulk from this cache by when available,
                     * and lookups the profiles by their unique id when not cached.
                     * @param uniqueIds The unique ids of the profiles
                     * @return A collection of successfully found profiles
                     */
                    // @ts-ignore
                    getOrLookupByIds(uniqueIds: java.lang.Iterable<java.util.UUID>): java.util.Map<java.util.UUID, java.util.Optional<org.spongepowered.api.profile.GameProfile>>
                    /**
                     * Gets a {@link GameProfile} from this cache by its name.
                     * @param name The name of the profile
                     * @return The profile, if present, or {#link Optional#empty()} if
                     *      the cache did not contain a profile with the provided name
                     */
                    // @ts-ignore
                    getByName(name: string): java.util.Optional<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Gets {@link GameProfile}s in bulk by their name.
                     * @param names The names
                     * @return A collection of successfully found up profiles
                     */
                    // @ts-ignore
                    getByNames(names: java.lang.Iterable<java.lang.String>): java.util.Map<java.lang.String, java.util.Optional<org.spongepowered.api.profile.GameProfile>>
                    /**
                     * Looks a {@link GameProfile} up by its name and
                     * loads it into this cache.
                     * @param name The name of the profile
                     * @return The profile, if present, or {#link Optional#empty()} if
                     *      we couldn't find a profile with the provided name
                     */
                    // @ts-ignore
                    lookupByName(name: string): java.util.Optional<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Looks up {@link GameProfile}s in bulk by their name  and
                     * loads them into this cache.
                     * @param names The names
                     * @return A collection of successfully looked up profiles
                     */
                    // @ts-ignore
                    lookupByNames(names: java.lang.Iterable<java.lang.String>): java.util.Map<java.lang.String, java.util.Optional<org.spongepowered.api.profile.GameProfile>>
                    /**
                     * Gets a {@link GameProfile} from this cache by its if available,
                     * or lookups the profile by its name.
                     * @param name The name of the profile
                     * @return The profile, if present, or {#link Optional#empty()} if
                     *      the cache did not contain a profile with the provided name and
                     *      we couldn't lookup a profile with the provided name
                     */
                    // @ts-ignore
                    getOrLookupByName(name: string): java.util.Optional<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Gets {@link GameProfile}s in bulk from this cache by when available,
                     * and lookups the profiles by their unique id when not cached.
                     * @param names The names of the profiles
                     * @return A collection of successfully found profiles
                     */
                    // @ts-ignore
                    getOrLookupByNames(names: java.lang.Iterable<java.lang.String>): java.util.Map<java.lang.String, java.util.Optional<org.spongepowered.api.profile.GameProfile>>
                    /**
                     * Fills a {@link GameProfile} from cached values.
                     * @param profile The profile to fill
                     * @return The filled profile, if present, or {#link Optional#empty()} if
                     *      we were unable to fill the profile
                     */
                    // @ts-ignore
                    fillProfile(profile: org.spongepowered.api.profile.GameProfile): java.util.Optional<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Fills a {@link GameProfile} from cached values.
                     * @param profile The profile to fill
                     * @param signed true if we should request that the profile data be signed
                     * @return The filled profile, if present, or {#link Optional#empty()} if
                     *      we were unable to fill the profile
                     */
                    // @ts-ignore
                    fillProfile(profile: org.spongepowered.api.profile.GameProfile, signed: boolean): java.util.Optional<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Gets a collection of all cached {@link GameProfile}s.
                     * @return A {#link Collection} of cached {@link GameProfile}s
                     */
                    // @ts-ignore
                    getProfiles(): java.util.Collection<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Returns a collection of matching cached {@link GameProfile}s whose last
                     * known names start with the given string (case-insensitive).
                     * <p>This collection may also contain profiles of players who never played
                     * on the server!</p>
                     * <p>Use {@link UserStorageService#match(String)} for a collection that
                     * only contains {@link GameProfile}s with attached {@link User} data.</p>
                     * <p>This method only searches the local cache, so the data may not be up
                     * to date.</p>
                     * @param name The name
                     * @return A {#link Collection} of matching {@link GameProfile}s
                     */
                    // @ts-ignore
                    match(name: string): java.util.Collection<org.spongepowered.api.profile.GameProfile>
                }
            }
        }
    }
}
