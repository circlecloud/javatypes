declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace jsse {
                        /**
                         * RFC 1421 PEM file containing X509 certificates or private keys (PKCS#8 only,
                         * i.e. with boundaries containing "BEGIN PRIVATE KEY" or "BEGIN ENCRYPTED PRIVATE KEY",
                         * not "BEGIN RSA PRIVATE KEY" or other variations).
                         */
                        // @ts-ignore
                        class PEMFile extends java.lang.Object {
                            // @ts-ignore
                            constructor(filename: java.lang.String | string)
                            // @ts-ignore
                            constructor(filename: java.lang.String | string, password: java.lang.String | string)
                            // @ts-ignore
                            constructor(filename: java.lang.String | string, password: java.lang.String | string, keyAlgorithm: java.lang.String | string)
                            // @ts-ignore
                            public getCertificates(): Array<java.security.cert.X509Certificate>
                            // @ts-ignore
                            public getPrivateKey(): java.security.PrivateKey
                        }
                    }
                }
            }
        }
    }
}
