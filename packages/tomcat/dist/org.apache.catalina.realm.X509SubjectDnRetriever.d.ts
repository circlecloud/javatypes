declare namespace org {
    namespace apache {
        namespace catalina {
            namespace realm {
                /**
                 * An X509UsernameRetriever that returns a certificate's entire
                 * SubjectDN as the username.
                 */
                // @ts-ignore
                class X509SubjectDnRetriever extends java.lang.Object implements org.apache.catalina.realm.X509UsernameRetriever {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getUsername(clientCert: java.security.cert.X509Certificate): string
                }
            }
        }
    }
}
