declare namespace javax {
    namespace management {
        namespace remote {
            /**
             * <p>The identity of a remote client of the JMX Remote API.</p>
             * <p>Principals such as this <code>JMXPrincipal</code>
             * may be associated with a particular <code>Subject</code>
             * to augment that <code>Subject</code> with an additional
             * identity.  Refer to the {@link javax.security.auth.Subject}
             * class for more information on how to achieve this.
             * Authorization decisions can then be based upon
             * the Principals associated with a <code>Subject</code>.
             * @see java.security.Principal
             * @see javax.security.auth.Subject
             * @since 1.5
             */
            // @ts-ignore
            class JMXPrincipal extends java.lang.Object implements java.security.Principal, java.io.Serializable {
                /**
                 * <p>Creates a JMXPrincipal for a given identity.</p>
                 * @param name the JMX Remote API name for this identity.
                 * @exception NullPointerException if the <code>name</code> is
                 *  <code>null</code>.
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Returns the name of this principal.
                 * <p>
                 * @return the name of this <code>JMXPrincipal</code>.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns a string representation of this <code>JMXPrincipal</code>.
                 * <p>
                 * @return a string representation of this <code>JMXPrincipal</code>.
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Compares the specified Object with this <code>JMXPrincipal</code>
                 * for equality.  Returns true if the given object is also a
                 * <code>JMXPrincipal</code> and the two JMXPrincipals
                 * have the same name.
                 * <p>
                 * @param o Object to be compared for equality with this
                 *  <code>JMXPrincipal</code>.
                 * @return true if the specified Object is equal to this
                 *  <code>JMXPrincipal</code>.
                 */
                // @ts-ignore
                equals(o: any): boolean
                /**
                 * Returns a hash code for this <code>JMXPrincipal</code>.
                 * <p>
                 * @return a hash code for this <code>JMXPrincipal</code>.
                 */
                // @ts-ignore
                hashCode(): int
            }
        }
    }
}
