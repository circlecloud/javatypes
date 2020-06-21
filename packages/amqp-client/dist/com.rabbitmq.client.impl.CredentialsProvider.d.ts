declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Provider interface for establishing credentials for connecting to the broker. Especially useful
                 * for situations where credentials might expire or change before a recovery takes place or where it is
                 * convenient to plug in an outside custom implementation.
                 * @see CredentialsRefreshService
                 * @since 5.2.0
                 */
                // @ts-ignore
                interface CredentialsProvider {
                    /**
                     * Username to use for authentication
                     * @return username
                     */
                    // @ts-ignore
                    getUsername(): string
                    /**
                     * Password/secret/token to use for authentication
                     * @return password/secret/token
                     */
                    // @ts-ignore
                    getPassword(): string
                    /**
                     * The time before the credentials expire, if they do expire.
                     * <p>
                     * If credentials do not expire, must return null. Default
                     * behavior is to return null, assuming credentials never
                     * expire.
                     * @return time before expiration
                     */
                    // @ts-ignore
                    getTimeBeforeExpiration(): java.time.Duration
                    /**
                     * Instructs the provider to refresh or renew credentials.
                     * <p>
                     * Default behavior is no-op.
                     */
                    // @ts-ignore
                    refresh(): void
                }
            }
        }
    }
}
