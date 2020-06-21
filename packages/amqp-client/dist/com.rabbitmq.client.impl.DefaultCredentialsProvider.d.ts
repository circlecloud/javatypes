declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Default implementation of a CredentialsProvider which simply holds a static
                 * username and password.
                 * @since 4.5.0
                 */
                // @ts-ignore
                class DefaultCredentialsProvider extends java.lang.Object implements com.rabbitmq.client.impl.CredentialsProvider {
                    // @ts-ignore
                    constructor(username: java.lang.String | string, password: java.lang.String | string)
                    // @ts-ignore
                    public getUsername(): string
                    // @ts-ignore
                    public getPassword(): string
                }
            }
        }
    }
}
