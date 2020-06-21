declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace profile {
                /**
                 * Manages {@link GameProfile} creation and data population.
                 * <p>The manager may cache the data of a request for faster lookups. Note that
                 * the cached data may not always be up to date.</p>
                 */
                // @ts-ignore
                interface GameProfileManager {
                    /**
                     * Creates a {@link GameProfile} from the provided ID and name.
                     * @param uniqueId The unique ID
                     * @param name The name
                     * @return The created profile
                     * @see GameProfile#of(UUID, String)
                     */
                    // @ts-ignore
                    createProfile(uniqueId: java.util.UUID, name: java.lang.String | string): org.spongepowered.api.profile.GameProfile
                    /**
                     * Creates a {@link ProfileProperty} from the provided name, value,
                     * and optional signature.
                     * @param name The name for the property
                     * @param value The value of the property
                     * @param signature The signature of the property
                     * @return The created profile property
                     * @see ProfileProperty#of(String, String)
                     * @see ProfileProperty#of(String, String, String)
                     */
                    // @ts-ignore
                    createProfileProperty(name: java.lang.String | string, value: java.lang.String | string, signature: java.lang.String | string): org.spongepowered.api.profile.property.ProfileProperty
                    /**
                     * Looks up a {@link GameProfile} by its unique ID.
                     * <p>This method checks the local profile cache before contacting the
                     * profile servers. Use {@link #get(UUID, boolean)} to disable the cache
                     * lookup.</p>
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param uniqueId The unique ID
                     * @return The result of the request
                     */
                    // @ts-ignore
                    get(uniqueId: java.util.UUID): java.util.concurrent.CompletableFuture<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Looks up a {@link GameProfile} by its user name (case-insensitive).
                     * <p>This method checks the local profile cache before contacting the
                     * profile servers. Use {@link #get(String, boolean)} to disable the cache
                     * lookup.</p>
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param name The username
                     * @return The result of the request
                     */
                    // @ts-ignore
                    get(name: java.lang.String | string): java.util.concurrent.CompletableFuture<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Looks up a {@link GameProfile} by its unique ID.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param uniqueId The unique ID
                     * @param useCache true to perform a cache lookup first
                     * @return The result of the request
                     */
                    // @ts-ignore
                    get(uniqueId: java.util.UUID, useCache: boolean): java.util.concurrent.CompletableFuture<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Looks up a {@link GameProfile} by its user name (case-insensitive).
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param name The username
                     * @param useCache true to perform a cache lookup first
                     * @return The result of the request
                     */
                    // @ts-ignore
                    get(name: java.lang.String | string, useCache: boolean): java.util.concurrent.CompletableFuture<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Gets a collection of {@link GameProfile}s by their unique IDs.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param uniqueIds The UUIDs
                     * @param useCache true to perform a cache lookup first
                     * @return The result of the request
                     */
                    // @ts-ignore
                    getAllById(uniqueIds: java.lang.Iterable<java.util.UUID>, useCache: boolean): java.util.concurrent.CompletableFuture<java.util.Collection<org.spongepowered.api.profile.GameProfile> | Array<org.spongepowered.api.profile.GameProfile>>
                    /**
                     * Gets a collection of {@link GameProfile}s by their user names
                     * (case-insensitive).
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param names The user names
                     * @param useCache true to perform a cache lookup first
                     * @return The result of the request
                     */
                    // @ts-ignore
                    getAllByName(names: java.lang.Iterable<java.lang.String | string>, useCache: boolean): java.util.concurrent.CompletableFuture<java.util.Collection<org.spongepowered.api.profile.GameProfile> | Array<org.spongepowered.api.profile.GameProfile>>
                    /**
                     * Fills a {@link GameProfile}.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param profile The profile to fill
                     * @return The result of the request
                     */
                    // @ts-ignore
                    fill(profile: org.spongepowered.api.profile.GameProfile): java.util.concurrent.CompletableFuture<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Fills a {@link GameProfile}.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param profile The profile to fill
                     * @param signed true if we should request that the profile data be signed
                     * @return The result of the request
                     */
                    // @ts-ignore
                    fill(profile: org.spongepowered.api.profile.GameProfile, signed: boolean): java.util.concurrent.CompletableFuture<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Fills a {@link GameProfile}.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     * @param profile The profile to fill
                     * @param signed true if we should request that the profile data be signed
                     * @param useCache true to perform a cache lookup first
                     * @return The result of the request
                     */
                    // @ts-ignore
                    fill(profile: org.spongepowered.api.profile.GameProfile, signed: boolean, useCache: boolean): java.util.concurrent.CompletableFuture<org.spongepowered.api.profile.GameProfile>
                    /**
                     * Gets the active {@link GameProfile} cache.
                     * @return The active cache
                     */
                    // @ts-ignore
                    getCache(): org.spongepowered.api.profile.GameProfileCache
                    /**
                     * Sets the {@link GameProfile} cache.
                     * <p>To restore the original cache, pass the result of {@link #getDefaultCache()}.</p>
                     * @param cache The new cache
                     */
                    // @ts-ignore
                    setCache(cache: org.spongepowered.api.profile.GameProfileCache): void
                    /**
                     * Gets the default cache.
                     * @return The default cache.
                     */
                    // @ts-ignore
                    getDefaultCache(): org.spongepowered.api.profile.GameProfileCache
                }
            }
        }
    }
}
