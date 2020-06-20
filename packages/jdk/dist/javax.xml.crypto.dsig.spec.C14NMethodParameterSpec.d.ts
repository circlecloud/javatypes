declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * A specification of algorithm parameters for a {@link CanonicalizationMethod}
                     * Algorithm. The purpose of this interface is to group (and provide type
                     * safety for) all canonicalization (C14N) parameter specifications. All
                     * canonicalization parameter specifications must implement this interface.
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see CanonicalizationMethod
                     */
                    // @ts-ignore
                    interface C14NMethodParameterSpec extends javax.xml.crypto.dsig.spec.TransformParameterSpec {
                    }
                }
            }
        }
    }
}
