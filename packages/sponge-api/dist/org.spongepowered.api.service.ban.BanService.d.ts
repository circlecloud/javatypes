declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace ban {
                    /**
                     * Represents a service with which to ban things, such as {@link GameProfile}s or IP addresses.
                     * <p>Implementors of this service should treat expired bans as non-existent,
                     * even if they choose to retain them in a way not accessible through the ban
                     * service API (e.g. writing them to a database). In essence, expired bans
                     * should be treated the same as user-removed bans.
                     * <p>For example, {@link #getBans()} would not include any expired bans,
                     * and {@link #hasBan(Ban)} would return <code>false</code>.</p>
                     */
                    // @ts-ignore
                    interface BanService {
                        /**
                         * Gets all bans registered.
                         * @return All registered bans
                         */
                        // @ts-ignore
                        getBans(): java.util.Collection<? extends org.spongepowered.api.util.ban.Ban>
                        /**
                         * Gets all {@link GameProfile} bans registered.
                         * @return All registered {#link GameProfile} bans
                         */
                        // @ts-ignore
                        getProfileBans(): java.util.Collection<org.spongepowered.api.util.ban.Ban.Profile>
                        /**
                         * Gets all IP bans registered.
                         * @return All registered IP bans
                         */
                        // @ts-ignore
                        getIpBans(): java.util.Collection<org.spongepowered.api.util.ban.Ban.Ip>
                        /**
                         * Gets the ban for the given {@link GameProfile}, if available.
                         * @param profile The profile
                         * @return The ban, if available
                         */
                        // @ts-ignore
                        getBanFor(profile: org.spongepowered.api.profile.GameProfile): java.util.Optional<org.spongepowered.api.util.ban.Ban.Profile>
                        /**
                         * Gets the ban for the given address, if available.
                         * @param address The address.
                         * @return All registered IP bans
                         */
                        // @ts-ignore
                        getBanFor(address: java.net.InetAddress): java.util.Optional<org.spongepowered.api.util.ban.Ban.Ip>
                        /**
                         * Checks if a {@link GameProfile} has a ban.
                         * @param profile The profile
                         * @return True if the profile has a ban, false otherwise
                         */
                        // @ts-ignore
                        isBanned(profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Checks if an IP has a ban.
                         * @param address The address
                         * @return True if the address has a ban, false otherwise
                         */
                        // @ts-ignore
                        isBanned(address: java.net.InetAddress): boolean
                        /**
                         * Pardons a profile, or removes its ban, if present.
                         * @param profile The profile
                         * @return Whether the profile had a ban present
                         */
                        // @ts-ignore
                        pardon(profile: org.spongepowered.api.profile.GameProfile): boolean
                        /**
                         * Pardons an IP address, or removes its ban, if present.
                         * @param address The IP address
                         * @return Whether the address had a ban present
                         */
                        // @ts-ignore
                        pardon(address: java.net.InetAddress): boolean
                        /**
                         * Removes a ban.
                         * @param ban The ban
                         * @return Whether the ban was present in this ban service
                         */
                        // @ts-ignore
                        removeBan(ban: org.spongepowered.api.util.ban.Ban): boolean
                        /**
                         * Adds a ban.
                         * <p>If the GameProfile or IP address of the ban already has a ban set,
                         * the passed in ban will replace the existing ban.</p>
                         * @param ban The ban to add to this ban service
                         * @return The previous ban, if available
                         */
                        // @ts-ignore
                        addBan(ban: org.spongepowered.api.util.ban.Ban): java.util.Optional<? extends org.spongepowered.api.util.ban.Ban>
                        /**
                         * Checks if the specified ban is present.
                         * @param ban The ban
                         * @return True if the ban exists in this ban service, false otherwise
                         */
                        // @ts-ignore
                        hasBan(ban: org.spongepowered.api.util.ban.Ban): boolean
                    }
                }
            }
        }
    }
}
