declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace SSLHostConfigCertificate {
                        // @ts-ignore
                        class Type extends java.lang.Enum<org.apache.tomcat.util.net.SSLHostConfigCertificate.Type> {
                            // @ts-ignore
                            readonly UNDEFINED: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            readonly RSA: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            readonly DSA: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            readonly EC: org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            values(): org.apache.tomcat.util.net.SSLHostConfigCertificate.Type[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.SSLHostConfigCertificate.Type
                            // @ts-ignore
                            isCompatibleWith(au: org.apache.tomcat.util.net.openssl.ciphers.Authentication): boolean
                        }
                    }
                }
            }
        }
    }
}
