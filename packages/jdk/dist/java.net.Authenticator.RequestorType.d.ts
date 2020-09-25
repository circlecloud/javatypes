declare namespace java {
    namespace net {
        namespace Authenticator {
            /**
             * The type of the entity requesting authentication.
             * @since 1.5
             */
            // @ts-ignore
            class RequestorType extends java.lang.Enum<java.net.Authenticator.RequestorType> {
                /**
                 * Entity requesting authentication is a HTTP proxy server.
                 */
                // @ts-ignore
                public static readonly PROXY: java.net.Authenticator.RequestorType
                /**
                 * Entity requesting authentication is a HTTP origin server.
                 */
                // @ts-ignore
                public static readonly SERVER: java.net.Authenticator.RequestorType
                // @ts-ignore
                public static values(): java.net.Authenticator.RequestorType[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.net.Authenticator.RequestorType
            }
        }
    }
}
