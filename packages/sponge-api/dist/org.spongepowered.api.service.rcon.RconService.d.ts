declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace rcon {
                    /**
                     * Manages Rcon-related settings.
                     */
                    // @ts-ignore
                    interface RconService {
                        /**
                         * Tests whether Rcon is enabled for this service.
                         * <p>Rcon allows commands to be remotely run on the server, after Rcon
                         * client have authenticated with a password.</p>
                         * @return Where Rcon is enabled
                         */
                        // @ts-ignore
                        isRconEnabled(): boolean
                        /**
                         * Gets the Rcon password for this service.
                         * <p>This password is used by Rcon clients to authenticate.</p>
                         * @return The Rcon password for this service
                         */
                        // @ts-ignore
                        getRconPassword(): string
                    }
                }
            }
        }
    }
}
