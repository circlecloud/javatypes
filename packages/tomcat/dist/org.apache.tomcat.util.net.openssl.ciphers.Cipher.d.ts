declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace net {
                    namespace openssl {
                        namespace ciphers {
                            /**
                             * All the standard cipher suites for SSL/TSL.
                             * @see <a href="https://github.com/openssl/openssl/blob/master/ssl/s3_lib.c"
                             *       >OpenSSL cipher definitions</a>
                             * @see <a href="http://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-4"
                             *       >The cipher suite registry</a>
                             * @see <a href="https://www.thesprawl.org/research/tls-and-ssl-cipher-suites/"
                             *       >Another list of cipher suites with some non-standard IDs</a>
                             * @see <a href="http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites"
                             *       >Oracle standard names for cipher suites</a>
                             * @see <a href="https://www.openssl.org/docs/apps/ciphers.html"
                             *       >Mapping of OpenSSL cipher suites names to registry names</a>
                             * @see <a href="https://github.com/ssllabs/sslhaf/blob/0.1.x/suites.csv"
                             *       >SSL Labs tool - list of ciphers</a>
                             * @see <a href="http://hg.openjdk.java.net/jdk9/jdk9/jdk/file/e30cd0d37abf/src/java.base/share/classes/sun/security/ssl/CipherSuite.java"
                             *       >OpenJDK source code</a>
                             */
                            // @ts-ignore
                            class Cipher extends java.lang.Enum<org.apache.tomcat.util.net.openssl.ciphers.Cipher> {
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_NULL_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_EXPORT_WITH_RC4_40_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_RC4_128_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_IDEA_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_DES_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_DES_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_DES_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_DES_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_DES_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_RC4_128_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_DES_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_NULL_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_EXPORT1024_WITH_RC4_56_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_EXPORT1024_WITH_RC2_CBC_56_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_EXPORT1024_WITH_DES_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_EXPORT1024_WITH_DES_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_EXPORT1024_WITH_RC4_56_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_EXPORT1024_WITH_RC4_56_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_AES_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_AES_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_AES_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_SEED_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_SEED_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_SEED_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_SEED_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_SEED_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_SEED_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_NULL_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_NULL_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_AES_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_NULL_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_NULL_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_AES_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_NULL_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_NULL_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_CHACHA20_POLY1305_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_AES_128_CCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_AES_128_CCM_8_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_anon_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_anon_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_anon_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_anon_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_RC4_128_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_NULL_SHA: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_NULL_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_NULL_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_ARIA_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_ARIA_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_ARIA_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_ARIA_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_128_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_256_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_128_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_256_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_128_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_WITH_AES_256_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_128_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_AES_256_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_128_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_256_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_AES_128_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_AES_256_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_128_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_AES_256_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_DHE_WITH_AES_128_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_DHE_WITH_AES_256_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_128_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_256_CCM: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_PSK_WITH_CHACHA20_POLY1305_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly SSL_CK_RC4_128_WITH_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly SSL2_RC4_128_EXPORT40_WITH_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly SSL_CK_RC2_128_CBC_WITH_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly SSL_CK_RC2_128_CBC_EXPORT40_WITH_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly SSL2_IDEA_128_CBC_WITH_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly SSL2_DES_64_CBC_WITH_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static readonly SSL2_DES_192_EDE3_CBC_WITH_MD5: org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public static values(): org.apache.tomcat.util.net.openssl.ciphers.Cipher[]
                                // @ts-ignore
                                public static valueOf(name: java.lang.String | string): org.apache.tomcat.util.net.openssl.ciphers.Cipher
                                // @ts-ignore
                                public getId(): number /*int*/
                                // @ts-ignore
                                public getOpenSSLAlias(): string
                                // @ts-ignore
                                public getOpenSSLAltNames(): Array<java.lang.String | string>
                                // @ts-ignore
                                public getJsseNames(): Array<java.lang.String | string>
                                // @ts-ignore
                                public getKx(): org.apache.tomcat.util.net.openssl.ciphers.KeyExchange
                                // @ts-ignore
                                public getAu(): org.apache.tomcat.util.net.openssl.ciphers.Authentication
                                // @ts-ignore
                                public getEnc(): org.apache.tomcat.util.net.openssl.ciphers.Encryption
                                // @ts-ignore
                                public getMac(): org.apache.tomcat.util.net.openssl.ciphers.MessageDigest
                                // @ts-ignore
                                public getProtocol(): org.apache.tomcat.util.net.openssl.ciphers.Protocol
                                // @ts-ignore
                                public isExport(): boolean
                                // @ts-ignore
                                public getLevel(): org.apache.tomcat.util.net.openssl.ciphers.EncryptionLevel
                                // @ts-ignore
                                public isFipsCompatible(): boolean
                                // @ts-ignore
                                public getStrength_bits(): number /*int*/
                                // @ts-ignore
                                public getAlg_bits(): number /*int*/
                                // @ts-ignore
                                public static valueOf(cipherId: number /*int*/): org.apache.tomcat.util.net.openssl.ciphers.Cipher
                            }
                        }
                    }
                }
            }
        }
    }
}
