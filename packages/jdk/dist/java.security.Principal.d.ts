declare namespace java {
    namespace security {
        /**
         * This interface represents the abstract notion of a principal, which
         * can be used to represent any entity, such as an individual, a
         * corporation, and a login id.
         * @see java.security.cert.X509Certificate
         * @author Li Gong
         */
        // @ts-ignore
        interface Principal {
            /**
             * Compares this principal to the specified object.  Returns true
             * if the object passed in matches the principal represented by
             * the implementation of this interface.
             * @param another principal to compare with.
             * @return true if the principal passed in is the same as that
             *  encapsulated by this principal, and false otherwise.
             */
            // @ts-ignore
            equals(another: any): boolean
            /**
             * Returns a string representation of this principal.
             * @return a string representation of this principal.
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns a hashcode for this principal.
             * @return a hashcode for this principal.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns the name of this principal.
             * @return the name of this principal.
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Returns true if the specified subject is implied by this principal.
             * <p>The default implementation of this method returns true if
             * {@code subject} is non-null and contains at least one principal that
             * is equal to this principal.
             * <p>Subclasses may override this with a different implementation, if
             * necessary.
             * @param subject the {#code Subject}
             * @return true if {#code subject} is non-null and is
             *               implied by this principal, or false otherwise.
             * @since 1.8
             */
            // @ts-ignore
            implies(subject: javax.security.auth.Subject): boolean
        }
    }
}