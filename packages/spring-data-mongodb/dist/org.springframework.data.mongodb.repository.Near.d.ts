declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    /**
                     * Annotation to be used for disambiguing method parameters that shall be used to trigger geo near queries. By default
                     * those parameters are found without the need for additional annotation if they are the only parameters of the
                     * according type (e.g. {@link Point}, {@code double[]}, {@link Distance}).
                     * @author Oliver Gierke
                     */
                    // @ts-ignore
                    abstract class Near implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
