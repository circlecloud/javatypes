declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace SSLHostConfigCertificate {
                        // @ts-ignore
                        class Type extends java.lang.Enum<org.apache.tomcat.util.net.SSLHostConfigCertificate.Type> {
                            // @ts-ignore
                            public static readonly UNDEFINED: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            public static readonly RSA: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            public static readonly DSA: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            public static readonly EC: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            public static values(): org.apache.tomcat.util.net.SSLHostConfigCertificate.Type[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            public isCompatibleWith(au: org.apache.tomcat.util.net.openssl.ciphers.Authentication): boolean
                        }
                    }
                }
            }
        }
    }
}
