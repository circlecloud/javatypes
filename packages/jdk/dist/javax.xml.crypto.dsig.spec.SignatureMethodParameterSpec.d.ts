declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * A specification of algorithm parameters for an XML {@link SignatureMethod}
                     * algorithm. The purpose of this interface is to group (and provide type
                     * safety for) all signature method parameter specifications. All signature
                     * method parameter specifications must implement this interface.
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see SignatureMethod
                     */
                    // @ts-ignore
                    interface SignatureMethodParameterSpec extends java.security.spec.AlgorithmParameterSpec {
                    }
                }
            }
        }
    }
}
