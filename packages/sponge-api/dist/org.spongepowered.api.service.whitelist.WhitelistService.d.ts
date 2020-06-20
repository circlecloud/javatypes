declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace whitelist {
                    /**
                     * Represents the service for managing a whitelist of {@link GameProfile}s.
                     * <p>In Vanilla, the service is controlled by {@link Server#hasWhitelist()}.
                     * Additionally, operators are always allowed to join, regardless of their
                     * absence or presence on the whitelist service.</p>
                     */
                    // @ts-ignore
                    interface WhitelistService {
                        /**
                         * Gets the collection of {@link GameProfile}s present on this whitelist.
                         * @return The {#link GameProfile}s present on this whitelist
                         */
                        // @ts-ignore
                        getWhitelistedProfiles(): java.util.Collection<org.spongepowered.api.profile.GameProfile>
                        /**
                         * Gets whether the specified {@link GameProfile} is present on this
                         * whitelist.
                         * @param profile The game profile to check for
                         * @return Whether the specified {#link GameProfile} is present on this
                         *          whitelist
                         */
                        // @ts-ignore
                        isWhitelisted(profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Adds the specified {@link GameProfile} to this whitelist.
                         * @param profile The game profile to add
                         * @return Whether the specified {#link GameProfile} was already present on
                         *          this whitelist
                         */
                        // @ts-ignore
                        addProfile(profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Removes the specified {@link GameProfile} from this whitelist, if present.
                         * @param profile The game profile to remove
                         * @return Whether the specified {#link GameProfile} was present before
                         *          removal
                         */
                        // @ts-ignore
                        removeProfile(profile: org.spongepowered.api.profile.GameProfile): boolean
                    }
                }
            }
        }
    }
}
