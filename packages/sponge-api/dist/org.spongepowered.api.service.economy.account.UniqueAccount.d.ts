declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace account {
                        /**
                         * Represents an {@link Account} identified by a {@link UUID}.
                         * <p>This is usually linked to a particular {@link User}'s {@link GameProfile},
                         * through {@link #getUniqueId()}.</p>.
                         */
                        // @ts-ignore
                        interface UniqueAccount extends org.spongepowered.api.service.economy.account.Account, org.spongepowered.api.util.Identifiable {
                        }
                    }
                }
            }
        }
    }
}
