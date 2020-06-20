declare namespace java {
    namespace security {
        /**
         * This class encapsulates information about a signed timestamp.
         * It is immutable.
         * It includes the timestamp's date and time as well as information about the
         * Timestamping Authority (TSA) which generated and signed the timestamp.
         * @since 1.5
         * @author Vincent Ryan
         */
        // @ts-ignore
        class Timestamp extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a Timestamp.
             * @param timestamp is the timestamp's date and time. It must not be null.
             * @param signerCertPath is the TSA's certificate path. It must not be null.
             * @throws NullPointerException if timestamp or signerCertPath is null.
             */
            // @ts-ignore
            constructor(timestamp: java.util.Date, signerCertPath: java.security.cert.CertPath)
            /**
             * Returns the date and time when the timestamp was generated.
             * @return The timestamp's date and time.
             */
            // @ts-ignore
            getTimestamp(): java.util.Date
            /**
             * Returns the certificate path for the Timestamping Authority.
             * @return The TSA's certificate path.
             */
            // @ts-ignore
            getSignerCertPath(): java.security.cert.CertPath
            /**
             * Returns the hash code value for this timestamp.
             * The hash code is generated using the date and time of the timestamp
             * and the TSA's certificate path.
             * @return a hash code value for this timestamp.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Tests for equality between the specified object and this
             * timestamp. Two timestamps are considered equal if the date and time of
             * their timestamp's and their signer's certificate paths are equal.
             * @param obj the object to test for equality with this timestamp.
             * @return true if the timestamp are considered equal, false otherwise.
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns a string describing this timestamp.
             * @return A string comprising the date and time of the timestamp and
             *          its signer's certificate.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
