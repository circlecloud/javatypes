declare namespace java {
    namespace security {
        /**
         * <p>This class extends the concept of a codebase to
         * encapsulate not only the location (URL) but also the certificate chains
         * that were used to verify signed code originating from that location.
         * @author Li Gong
         * @author Roland Schemers
         */
        // @ts-ignore
        class CodeSource extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a CodeSource and associates it with the specified
             * location and set of certificates.
             * @param url the location (URL).
             * @param certs the certificate(s). It may be null. The contents of the
             *  array are copied to protect against subsequent modification.
             */
            // @ts-ignore
            constructor(url: java.net.URL, certs: java.security.cert.Certificate[])
            /**
             * Constructs a CodeSource and associates it with the specified
             * location and set of code signers.
             * @param url the location (URL).
             * @param signers the code signers. It may be null. The contents of the
             *  array are copied to protect against subsequent modification.
             * @since 1.5
             */
            // @ts-ignore
            constructor(url: java.net.URL, signers: java.security.CodeSigner[])
            /**
             * Returns the hash code value for this object.
             * @return a hash code value for this object.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Tests for equality between the specified object and this
             * object. Two CodeSource objects are considered equal if their
             * locations are of identical value and if their signer certificate
             * chains are of identical value. It is not required that
             * the certificate chains be in the same order.
             * @param obj the object to test for equality with this object.
             * @return true if the objects are considered equal, false otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the location associated with this CodeSource.
             * @return the location (URL).
             */
            // @ts-ignore
            public getLocation(): java.net.URL
            /**
             * Returns the certificates associated with this CodeSource.
             * <p>
             * If this CodeSource object was created using the
             * {@link #CodeSource(URL url, CodeSigner[] signers)}
             * constructor then its certificate chains are extracted and used to
             * create an array of Certificate objects. Each signer certificate is
             * followed by its supporting certificate chain (which may be empty).
             * Each signer certificate and its supporting certificate chain is ordered
             * bottom-to-top (i.e., with the signer certificate first and the (root)
             * certificate authority last).
             * @return A copy of the certificates array, or null if there is none.
             */
            // @ts-ignore
            public getCertificates(): java.security.cert.Certificate[]
            /**
             * Returns the code signers associated with this CodeSource.
             * <p>
             * If this CodeSource object was created using the
             * {@link #CodeSource(URL url, java.security.cert.Certificate[] certs)}
             * constructor then its certificate chains are extracted and used to
             * create an array of CodeSigner objects. Note that only X.509 certificates
             * are examined - all other certificate types are ignored.
             * @return A copy of the code signer array, or null if there is none.
             * @since 1.5
             */
            // @ts-ignore
            public getCodeSigners(): java.security.CodeSigner[]
            /**
             * Returns true if this CodeSource object "implies" the specified CodeSource.
             * <p>
             * More specifically, this method makes the following checks.
             * If any fail, it returns false. If they all succeed, it returns true.
             * <ul>
             * <li> <i>codesource</i> must not be null.
             * <li> If this object's certificates are not null, then all
             * of this object's certificates must be present in <i>codesource</i>'s
             * certificates.
             * <li> If this object's location (getLocation()) is not null, then the
             * following checks are made against this object's location and
             * <i>codesource</i>'s:
             * <ul>
             * <li>  <i>codesource</i>'s location must not be null.
             * <li>  If this object's location
             * equals <i>codesource</i>'s location, then return true.
             * <li>  This object's protocol (getLocation().getProtocol()) must be
             * equal to <i>codesource</i>'s protocol, ignoring case.
             * <li>  If this object's host (getLocation().getHost()) is not null,
             * then the SocketPermission
             * constructed with this object's host must imply the
             * SocketPermission constructed with <i>codesource</i>'s host.
             * <li>  If this object's port (getLocation().getPort()) is not
             * equal to -1 (that is, if a port is specified), it must equal
             * <i>codesource</i>'s port or default port
             * (codesource.getLocation().getDefaultPort()).
             * <li>  If this object's file (getLocation().getFile()) doesn't equal
             * <i>codesource</i>'s file, then the following checks are made:
             * If this object's file ends with "/-",
             * then <i>codesource</i>'s file must start with this object's
             * file (exclusive the trailing "-").
             * If this object's file ends with a "/*",
             * then <i>codesource</i>'s file must start with this object's
             * file and must not have any further "/" separators.
             * If this object's file doesn't end with a "/",
             * then <i>codesource</i>'s file must match this object's
             * file with a '/' appended.
             * <li>  If this object's reference (getLocation().getRef()) is
             * not null, it must equal <i>codesource</i>'s reference.
             * </ul>
             * </ul>
             * <p>
             * For example, the codesource objects with the following locations
             * and null certificates all imply
             * the codesource with the location "http://java.sun.com/classes/foo.jar"
             * and null certificates:
             * <pre>
             * http:
             * http://*.sun.com/classes/*
             * http://java.sun.com/classes/-
             * http://java.sun.com/classes/foo.jar
             * </pre>
             * Note that if this CodeSource has a null location and a null
             * certificate chain, then it implies every other CodeSource.
             * @param codesource CodeSource to compare against.
             * @return true if the specified codesource is implied by this codesource,
             *  false if not.
             */
            // @ts-ignore
            public implies(codesource: java.security.CodeSource): boolean
            /**
             * Returns a string describing this CodeSource, telling its
             * URL and certificates.
             * @return information about this CodeSource.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
