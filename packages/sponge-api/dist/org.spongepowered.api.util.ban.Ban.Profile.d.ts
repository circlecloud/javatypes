declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace ban {
                    namespace Ban {
                        /**
                         * Represents a ban made on a {@link GameProfile}.
                         */
                        // @ts-ignore
                        interface Profile extends org.spongepowered.api.util.ban.Ban {
                            /**
                             * Gets the {@link GameProfile} this ban applies to.
                             * @return The {#link GameProfile}
                             */
                            // @ts-ignore
                            getProfile(): org.spongepowered.api.profile.GameProfile
                        }
                    }
                }
            }
        }
    }
}
