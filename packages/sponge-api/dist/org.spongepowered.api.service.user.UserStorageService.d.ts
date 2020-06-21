declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace user {
                    /**
                     * Stores the persistent {@link User} data of a {@link Player}.
                     */
                    // @ts-ignore
                    interface UserStorageService {
                        /**
                         * Gets the data of a {@link User} by their unique id.
                         * @param uniqueId The UUID of the user
                         * @return {#link User} or Optional.empty() if not found
                         */
                        // @ts-ignore
                        get(uniqueId: java.util.UUID): java.util.Optional<org.spongepowered.api.entity.living.player.User>
                        /**
                         * Gets the data of a {@link User} by their last known user name
                         * (case-insensitive).
                         * <p>To get the current name of a player, use the
                         * {@link GameProfileManager} service.</p>
                         * @param lastKnownName The user name
                         * @return {#link User} or Optional.empty() if not found
                         */
                        // @ts-ignore
                        get(lastKnownName: java.lang.String | string): java.util.Optional<org.spongepowered.api.entity.living.player.User>
                        /**
                         * Gets the data of a {@link User} by their {@link GameProfile}.
                         * @param profile The profile
                         * @return {#link User} or Optional.empty() if not found
                         */
                        // @ts-ignore
                        get(profile: org.spongepowered.api.profile.GameProfile): java.util.Optional<org.spongepowered.api.entity.living.player.User>
                        /**
                         * Gets or creates a persistent {@link User} associated with the given
                         * {@link GameProfile}.
                         * <p>To obtain a {@link GameProfile}, use the {@link GameProfileManager}.
                         * </p>
                         * @param profile The profile
                         * @return The user object
                         */
                        // @ts-ignore
                        getOrCreate(profile: org.spongepowered.api.profile.GameProfile): org.spongepowered.api.entity.living.player.User
                        /**
                         * Gets the collection of all {@link GameProfile}s with stored {@link User}
                         * data.
                         * <p>Note that this method is resource-intensive depending on the amount of
                         * stored data.</p>
                         * <p>Use {@link #get(GameProfile)} to get the {@link User} data
                         * corresponding to a {@link GameProfile}.</p>
                         * @return A {#link Collection} of {@link GameProfile}s
                         */
                        // @ts-ignore
                        getAll(): Array<org.spongepowered.api.profile.GameProfile>
                        /**
                         * Deletes the data associated with a {@link User}.
                         * <p>This may not work if the user is logged in.</p>
                         * @param profile The profile of the user to delete
                         * @return true if the deletion was successful
                         */
                        // @ts-ignore
                        delete(profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Deletes the data associated with a {@link User}.
                         * <p>This may not work if the user is logged in.</p>
                         * @param user The user to delete
                         * @return true if the deletion was successful
                         */
                        // @ts-ignore
                        delete(user: org.spongepowered.api.entity.living.player.User): boolean
                        /**
                         * Returns a collection of matching {@link GameProfile}s with stored
                         * {@link User} data whose last known user names start with the given string
                         * (case-insensitive).
                         * <p>Use {@link #get(GameProfile)} to get the {@link User} data
                         * corresponding to a {@link GameProfile}.</p>
                         * @param lastKnownName The user name
                         * @return The result of the request
                         */
                        // @ts-ignore
                        match(lastKnownName: java.lang.String | string): Array<org.spongepowered.api.profile.GameProfile>
                    }
                }
            }
        }
    }
}
