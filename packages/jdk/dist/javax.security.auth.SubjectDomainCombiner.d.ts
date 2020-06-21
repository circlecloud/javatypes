declare namespace javax {
    namespace security {
        namespace auth {
            /**
             * A {@code SubjectDomainCombiner} updates ProtectionDomains
             * with Principals from the {@code Subject} associated with this
             * {@code SubjectDomainCombiner}.
             */
            // @ts-ignore
            class SubjectDomainCombiner extends java.lang.Object implements java.security.DomainCombiner {
                /**
                 * Associate the provided {@code Subject} with this
                 * {@code SubjectDomainCombiner}.
                 * <p>
                 * @param subject the {#code Subject} to be associated with
                 *           with this {@code SubjectDomainCombiner}.
                 */
                // @ts-ignore
                constructor(subject: javax.security.auth.Subject)
                /**
                 * Get the {@code Subject} associated with this
                 * {@code SubjectDomainCombiner}.
                 * <p>
                 * @return the {#code Subject} associated with this
                 *           {@code SubjectDomainCombiner}, or {@code null}
                 *           if no {@code Subject} is associated with this
                 *           {@code SubjectDomainCombiner}.
                 * @exception SecurityException if the caller does not have permission
                 *           to get the {#code Subject} associated with this
                 *           {@code SubjectDomainCombiner}.
                 */
                // @ts-ignore
                public getSubject(): javax.security.auth.Subject
                /**
                 * Update the relevant ProtectionDomains with the Principals
                 * from the {@code Subject} associated with this
                 * {@code SubjectDomainCombiner}.
                 * <p> A new {@code ProtectionDomain} instance is created
                 * for each {@code ProtectionDomain} in the
                 * <i>currentDomains</i> array.  Each new {@code ProtectionDomain}
                 * instance is created using the {@code CodeSource},
                 * {@code Permission}s and {@code ClassLoader}
                 * from the corresponding {@code ProtectionDomain} in
                 * <i>currentDomains</i>, as well as with the Principals from
                 * the {@code Subject} associated with this
                 * {@code SubjectDomainCombiner}.
                 * <p> All of the newly instantiated ProtectionDomains are
                 * combined into a new array.  The ProtectionDomains from the
                 * <i>assignedDomains</i> array are appended to this new array,
                 * and the result is returned.
                 * <p> Note that optimizations such as the removal of duplicate
                 * ProtectionDomains may have occurred.
                 * In addition, caching of ProtectionDomains may be permitted.
                 * <p>
                 * @param currentDomains the ProtectionDomains associated with the
                 *           current execution Thread, up to the most recent
                 *           privileged {#code ProtectionDomain}.
                 *           The ProtectionDomains are are listed in order of execution,
                 *           with the most recently executing {@code ProtectionDomain}
                 *           residing at the beginning of the array. This parameter may
                 *           be {@code null} if the current execution Thread
                 *           has no associated ProtectionDomains.<p>
                 * @param assignedDomains the ProtectionDomains inherited from the
                 *           parent Thread, or the ProtectionDomains from the
                 *           privileged <i>context</i>, if a call to
                 *           AccessController.doPrivileged(..., <i>context</i>)
                 *           had occurred  This parameter may be {#code null}
                 *           if there were no ProtectionDomains inherited from the
                 *           parent Thread, or from the privileged <i>context</i>.
                 * @return a new array consisting of the updated ProtectionDomains,
                 *           or {#code null}.
                 */
                // @ts-ignore
                public combine(currentDomains: java.security.ProtectionDomain[], assignedDomains: java.security.ProtectionDomain[]): java.security.ProtectionDomain[]
            }
        }
    }
}
