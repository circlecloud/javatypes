declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Convenience class providing a default implementation of {@link javax.net.ssl.X509TrustManager}.
             * Trusts every single certificate presented to it. This implementation does not perform peer
             * verification and <strong>provides no protection against Man-in-the-Middle (MITM) attacks</strong> and therefore
             * <strong>only suitable for some development and QA environments</strong>.
             */
            // @ts-ignore
            class TrustEverythingTrustManager extends java.lang.Object implements javax.net.ssl.X509TrustManager {
                // @ts-ignore
                constructor()
                /**
                 * Doesn't even bother looking at its arguments, simply returns,
                 * which makes the check succeed.
                 */
                // @ts-ignore
                public checkClientTrusted(chain: java.security.cert.X509Certificate[], authType: java.lang.String | string): void
                /**
                 * Doesn't even bother looking at its arguments, simply returns,
                 * which makes the check succeed.
                 */
                // @ts-ignore
                public checkServerTrusted(chain: java.security.cert.X509Certificate[], authType: java.lang.String | string): void
                /**
                 * Always returns an empty array of X509Certificates.
                 */
                // @ts-ignore
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
            }
        }
    }
}
