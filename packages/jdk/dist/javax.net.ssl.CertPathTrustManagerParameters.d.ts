declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * A wrapper for CertPathParameters. This class is used to pass validation
             * settings to CertPath based {@link TrustManager}s using the
             * {@link TrustManagerFactory#init(ManagerFactoryParameters)
             * TrustManagerFactory.init()} method.
             * <p>Instances of this class are immutable.
             * @see X509TrustManager
             * @see TrustManagerFactory
             * @see java.security.cert.CertPathParameters
             * @since 1.5
             * @author Andreas Sterbenz
             */
            // @ts-ignore
            class CertPathTrustManagerParameters extends java.lang.Object implements javax.net.ssl.ManagerFactoryParameters {
                /**
                 * Construct new CertPathTrustManagerParameters from the specified
                 * parameters. The parameters are cloned to protect against subsequent
                 * modification.
                 * @param parameters the CertPathParameters to be used
                 * @throws NullPointerException if parameters is null
                 */
                // @ts-ignore
                constructor(parameters: java.security.cert.CertPathParameters)
                /**
                 * Return a clone of the CertPathParameters encapsulated by this class.
                 * @return a clone of the CertPathParameters encapsulated by this class.
                 */
                // @ts-ignore
                public getParameters(): java.security.cert.CertPathParameters
            }
        }
    }
}
