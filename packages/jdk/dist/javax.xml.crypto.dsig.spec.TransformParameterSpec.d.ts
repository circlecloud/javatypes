declare namespace javax {
    namespace xml {
        namespace crypto {
            namespace dsig {
                namespace spec {
                    /**
                     * A specification of algorithm parameters for a {@link Transform}
                     * algorithm. The purpose of this interface is to group (and provide type
                     * safety for) all transform parameter specifications. All transform parameter
                     * specifications must implement this interface.
                     * @author Sean Mullan
                     * @author JSR 105 Expert Group
                     * @since 1.6
                     * @see Transform
                     */
                    // @ts-ignore
                    interface TransformParameterSpec extends java.security.spec.AlgorithmParameterSpec {
                    }
                }
            }
        }
    }
}
