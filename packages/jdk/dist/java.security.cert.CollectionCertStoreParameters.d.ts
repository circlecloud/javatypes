declare namespace java {
    namespace security {
        namespace cert {
            /**
             * Parameters used as input for the Collection {@code CertStore}
             * algorithm.
             * <p>
             * This class is used to provide necessary configuration parameters
             * to implementations of the Collection {@code CertStore}
             * algorithm. The only parameter included in this class is the
             * {@code Collection} from which the {@code CertStore} will
             * retrieve certificates and CRLs.
             * <p>
             * <b>Concurrent Access</b>
             * <p>
             * Unless otherwise specified, the methods defined in this class are not
             * thread-safe. Multiple threads that need to access a single
             * object concurrently should synchronize amongst themselves and
             * provide the necessary locking. Multiple threads each manipulating
             * separate objects need not synchronize.
             * @since 1.4
             * @author Steve Hanna
             * @see java.util.Collection
             * @see CertStore
             */
            // @ts-ignore
            class CollectionCertStoreParameters extends java.lang.Object implements java.security.cert.CertStoreParameters {
                /**
                 * Creates an instance of {@code CollectionCertStoreParameters}
                 * which will allow certificates and CRLs to be retrieved from the
                 * specified {@code Collection}. If the specified
                 * {@code Collection} contains an object that is not a
                 * {@code Certificate} or {@code CRL}, that object will be
                 * ignored by the Collection {@code CertStore}.
                 * <p>
                 * The {@code Collection} is <b>not</b> copied. Instead, a
                 * reference is used. This allows the caller to subsequently add or
                 * remove {@code Certificates} or {@code CRL}s from the
                 * {@code Collection}, thus changing the set of
                 * {@code Certificates} or {@code CRL}s available to the
                 * Collection {@code CertStore}. The Collection {@code CertStore}
                 * will not modify the contents of the {@code Collection}.
                 * <p>
                 * If the {@code Collection} will be modified by one thread while
                 * another thread is calling a method of a Collection {@code CertStore}
                 * that has been initialized with this {@code Collection}, the
                 * {@code Collection} must have fail-fast iterators.
                 * @param collection a {#code Collection} of
                 *         {@code Certificate}s and {@code CRL}s
                 * @exception NullPointerException if {#code collection} is
                 *  {@code null}
                 */
                // @ts-ignore
                constructor(collection: Array<any>)
                /**
                 * Creates an instance of {@code CollectionCertStoreParameters} with
                 * the default parameter values (an empty and immutable
                 * {@code Collection}).
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the {@code Collection} from which {@code Certificate}s
                 * and {@code CRL}s are retrieved. This is <b>not</b> a copy of the
                 * {@code Collection}, it is a reference. This allows the caller to
                 * subsequently add or remove {@code Certificates} or
                 * {@code CRL}s from the {@code Collection}.
                 * @return the {#code Collection} (never null)
                 */
                // @ts-ignore
                getCollection(): java.util.Collection<?>
                /**
                 * Returns a copy of this object. Note that only a reference to the
                 * {@code Collection} is copied, and not the contents.
                 * @return the copy
                 */
                // @ts-ignore
                clone(): java.lang.Object
                /**
                 * Returns a formatted string describing the parameters.
                 * @return a formatted string describing the parameters
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
