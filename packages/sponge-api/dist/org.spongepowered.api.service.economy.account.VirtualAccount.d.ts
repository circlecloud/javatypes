declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace economy {
                    namespace account {
                        /**
                         * Represents an {@link Account} which is not tied to a particular {@link User}.
                         * <p>Examples of virtual accounts include:
                         * * A global server account
                         * * A 'bank account', shared among multiple users
                         * * A account for a non-player {@link Entity}.
                         * </p>
                         */
                        // @ts-ignore
                        interface VirtualAccount extends org.spongepowered.api.service.economy.account.Account {
                        }
                    }
                }
            }
        }
    }
}
