declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This class is the base interface for providing
             * algorithm-specific information to a KeyManagerFactory or
             * TrustManagerFactory.
             * <P>
             * In some cases, initialization parameters other than keystores
             * may be needed by a provider.  Users of that particular provider
             * are expected to pass an implementation of the appropriate
             * sub-interface of this class as defined by the
             * provider.  The provider can then call the specified methods in
             * the <CODE>ManagerFactoryParameters</CODE> implementation to obtain the
             * needed information.
             * @author Brad R. Wetmore
             * @since 1.4
             */
            // @ts-ignore
            interface ManagerFactoryParameters {
            }
        }
    }
}
