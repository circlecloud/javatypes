declare namespace javax {
    namespace security {
        namespace auth {
            /**
             * This class is used to protect access to private Credentials
             * belonging to a particular {@code Subject}.  The {@code Subject}
             * is represented by a Set of Principals.
             * <p> The target name of this {@code Permission} specifies
             * a Credential class name, and a Set of Principals.
             * The only valid value for this Permission's actions is, "read".
             * The target name must abide by the following syntax:
             * <pre>
             * CredentialClass {PrincipalClass "PrincipalName"}*
             * </pre>
             * For example, the following permission grants access to the
             * com.sun.PrivateCredential owned by Subjects which have
             * a com.sun.Principal with the name, "duke".  Note that although
             * this example, as well as all the examples below, do not contain
             * Codebase, SignedBy, or Principal information in the grant statement
             * (for simplicity reasons), actual policy configurations should
             * specify that information when appropriate.
             * <pre>
             * grant {
             * permission javax.security.auth.PrivateCredentialPermission
             * "com.sun.PrivateCredential com.sun.Principal \"duke\"",
             * "read";
             * };
             * </pre>
             * If CredentialClass is "*", then access is granted to
             * all private Credentials belonging to the specified
             * {@code Subject}.
             * If "PrincipalName" is "*", then access is granted to the
             * specified Credential owned by any {@code Subject} that has the
             * specified {@code Principal} (the actual PrincipalName doesn't matter).
             * For example, the following grants access to the
             * a.b.Credential owned by any {@code Subject} that has
             * an a.b.Principal.
             * <pre>
             * grant {
             * permission javax.security.auth.PrivateCredentialPermission
             * "a.b.Credential a.b.Principal "*"",
             * "read";
             * };
             * </pre>
             * If both the PrincipalClass and "PrincipalName" are "*",
             * then access is granted to the specified Credential owned by
             * any {@code Subject}.
             * <p> In addition, the PrincipalClass/PrincipalName pairing may be repeated:
             * <pre>
             * grant {
             * permission javax.security.auth.PrivateCredentialPermission
             * "a.b.Credential a.b.Principal "duke" c.d.Principal "dukette"",
             * "read";
             * };
             * </pre>
             * The above grants access to the private Credential, "a.b.Credential",
             * belonging to a {@code Subject} with at least two associated Principals:
             * "a.b.Principal" with the name, "duke", and "c.d.Principal", with the name,
             * "dukette".
             */
            // @ts-ignore
            class PrivateCredentialPermission extends java.security.Permission {
                /**
                 * Creates a new {@code PrivateCredentialPermission}
                 * with the specified {@code name}.  The {@code name}
                 * specifies both a Credential class and a {@code Principal} Set.
                 * <p>
                 * @param name the name specifying the Credential class and
                 *           {#code Principal} Set. <p>
                 * @param actions the actions specifying that the Credential can be read.
                 * @throws IllegalArgumentException if {#code name} does not conform
                 *           to the correct syntax or if {@code actions} is not "read".
                 */
                // @ts-ignore
                constructor(name: java.lang.String | string, actions: java.lang.String | string)
                /**
                 * Returns the Class name of the Credential associated with this
                 * {@code PrivateCredentialPermission}.
                 * <p>
                 * @return the Class name of the Credential associated with this
                 *           {#code PrivateCredentialPermission}.
                 */
                // @ts-ignore
                public getCredentialClass(): string
                /**
                 * Returns the {@code Principal} classes and names
                 * associated with this {@code PrivateCredentialPermission}.
                 * The information is returned as a two-dimensional array (array[x][y]).
                 * The 'x' value corresponds to the number of {@code Principal}
                 * class and name pairs.  When (y==0), it corresponds to
                 * the {@code Principal} class value, and when (y==1),
                 * it corresponds to the {@code Principal} name value.
                 * For example, array[0][0] corresponds to the class name of
                 * the first {@code Principal} in the array.  array[0][1]
                 * corresponds to the {@code Principal} name of the
                 * first {@code Principal} in the array.
                 * <p>
                 * @return the {#code Principal} class and names associated
                 *           with this {@code PrivateCredentialPermission}.
                 */
                // @ts-ignore
                public getPrincipals(): string[][]
                /**
                 * Checks if this {@code PrivateCredentialPermission} implies
                 * the specified {@code Permission}.
                 * <p>
                 * This method returns true if:
                 * <ul>
                 * <li> <i>p</i> is an instanceof PrivateCredentialPermission and
                 * <li> the target name for <i>p</i> is implied by this object's
                 * target name.  For example:
                 * <pre>
                 * [* P1 "duke"] implies [a.b.Credential P1 "duke"].
                 * [C1 P1 "duke"] implies [C1 P1 "duke" P2 "dukette"].
                 * [C1 P2 "dukette"] implies [C1 P1 "duke" P2 "dukette"].
                 * </pre>
                 * </ul>
                 * <p>
                 * @param p the {#code Permission} to check against.
                 * @return true if this {#code PrivateCredentialPermission} implies
                 *  the specified {@code Permission}, false if not.
                 */
                // @ts-ignore
                public implies(p: java.security.Permission): boolean
                /**
                 * Checks two {@code PrivateCredentialPermission} objects for
                 * equality.  Checks that <i>obj</i> is a
                 * {@code PrivateCredentialPermission},
                 * and has the same credential class as this object,
                 * as well as the same Principals as this object.
                 * The order of the Principals in the respective Permission's
                 * target names is not relevant.
                 * <p>
                 * @param obj the object we are testing for equality with this object.
                 * @return true if obj is a {#code PrivateCredentialPermission},
                 *           has the same credential class as this object,
                 *           and has the same Principals as this object.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Returns the hash code value for this object.
                 * @return a hash code value for this object.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns the "canonical string representation" of the actions.
                 * This method always returns the String, "read".
                 * <p>
                 * @return the actions (always returns "read").
                 */
                // @ts-ignore
                public getActions(): string
                /**
                 * Return a homogeneous collection of PrivateCredentialPermissions
                 * in a {@code PermissionCollection}.
                 * No such {@code PermissionCollection} is defined,
                 * so this method always returns {@code null}.
                 * <p>
                 * @return null in all cases.
                 */
                // @ts-ignore
                public newPermissionCollection(): java.security.PermissionCollection
            }
        }
    }
}
