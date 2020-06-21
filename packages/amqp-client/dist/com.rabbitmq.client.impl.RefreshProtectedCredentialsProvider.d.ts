declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * An abstract {@link CredentialsProvider} that does not let token refresh happen concurrently.
                 * <p>
                 * A token is usually long-lived (several minutes or more), can be re-used inside the same application,
                 * and refreshing it is a costly operation. This base class lets a first call to {@link #refresh()}
                 * pass and block concurrent calls until the first call is over. Concurrent calls are then unblocked and
                 * can benefit from the refresh. This avoids unnecessary refresh operations to happen if a token
                 * is already being renewed.
                 * <p>
                 * Subclasses need to provide the actual token retrieval (whether is a first retrieval or a renewal is
                 * a implementation detail) and how to extract information (username, password, time before expiration)
                 * from the retrieved token.
                 * @param <T> the type of token (usually specified by the subclass)
                 */
                // @ts-ignore
                abstract class RefreshProtectedCredentialsProvider<T> extends java.lang.Object implements com.rabbitmq.client.impl.CredentialsProvider {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getUsername(): string
                    // @ts-ignore
                    public getPassword(): string
                    // @ts-ignore
                    public getTimeBeforeExpiration(): java.time.Duration
                    // @ts-ignore
                    public refresh(): void
                    // @ts-ignore
                    abstract retrieveToken(): T
                    // @ts-ignore
                    abstract usernameFromToken(token: T): string
                    // @ts-ignore
                    abstract passwordFromToken(token: T): string
                    // @ts-ignore
                    abstract timeBeforeExpiration(token: T): java.time.Duration
                }
            }
        }
    }
}
