declare namespace java {
    namespace security {
        /**
         * This class encapsulates information about a code signer.
         * It is immutable.
         * @since 1.5
         * @author Vincent Ryan
         */
        // @ts-ignore
        class CodeSigner extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a CodeSigner object.
             * @param signerCertPath The signer's certificate path.
             *                        It must not be {#code null}.
             * @param timestamp A signature timestamp.
             *                   If {#code null} then no timestamp was generated
             *                   for the signature.
             * @throws NullPointerException if {#code signerCertPath} is
             *                               {@code null}.
             */
            // @ts-ignore
            constructor(signerCertPath: java.security.cert.CertPath, timestamp: java.security.Timestamp)
            /**
             * Returns the signer's certificate path.
             * @return A certificate path.
             */
            // @ts-ignore
            public getSignerCertPath(): java.security.cert.CertPath
            /**
             * Returns the signature timestamp.
             * @return The timestamp or {#code null} if none is present.
             */
            // @ts-ignore
            public getTimestamp(): java.security.Timestamp
            /**
             * Returns the hash code value for this code signer.
             * The hash code is generated using the signer's certificate path and the
             * timestamp, if present.
             * @return a hash code value for this code signer.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Tests for equality between the specified object and this
             * code signer. Two code signers are considered equal if their
             * signer certificate paths are equal and if their timestamps are equal,
             * if present in both.
             * @param obj the object to test for equality with this object.
             * @return true if the objects are considered equal, false otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns a string describing this code signer.
             * @return A string comprising the signer's certificate and a timestamp,
             *          if present.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
