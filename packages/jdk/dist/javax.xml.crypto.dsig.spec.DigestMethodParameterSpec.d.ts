declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * A specification of algorithm parameters for a {@link DigestMethod}
                     * algorithm. The purpose of this interface is to group (and provide type
                     * safety for) all digest method parameter specifications. All digest method
                     * parameter specifications must implement this interface.
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see DigestMethod
                     */
                    // @ts-ignore
                    interface DigestMethodParameterSpec extends java.security.spec.AlgorithmParameterSpec {
                    }
                }
            }
        }
    }
}
