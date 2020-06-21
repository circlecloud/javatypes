declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * Representation of a security constraint element for a web application,
                         * as represented in a <code>&lt;security-constraint&gt;</code> element in the
                         * deployment descriptor.
                         * <p>
                         * <b>WARNING</b>:  It is assumed that instances of this class will be created
                         * and modified only within the context of a single thread, before the instance
                         * is made visible to the remainder of the application.  After that, only read
                         * access is expected.  Therefore, none of the read and write access within
                         * this class is synchronized.
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class SecurityConstraint extends org.apache.tomcat.util.descriptor.web.XmlEncodingBase implements java.io.Serializable {
                            /**
                             * Construct a new security constraint instance with default values.
                             */
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static readonly ROLE_ALL_ROLES: java.lang.String | string
                            // @ts-ignore
                            public static readonly ROLE_ALL_AUTHENTICATED_USERS: java.lang.String | string
                            /**
                             * Was the "all roles" wildcard included in this authentication
                             * constraint?
                             * @return <code>true</code> if all roles
                             */
                            // @ts-ignore
                            public getAllRoles(): boolean
                            /**
                             * Was the "all authenticated users" wildcard included in this
                             * authentication constraint?
                             * @return <code>true</code> if all authenticated users
                             */
                            // @ts-ignore
                            public getAuthenticatedUsers(): boolean
                            /**
                             * Return the authorization constraint present flag for this security
                             * constraint.
                             * @return <code>true</code> if this needs authorization
                             */
                            // @ts-ignore
                            public getAuthConstraint(): boolean
                            /**
                             * Set the authorization constraint present flag for this security
                             * constraint.
                             * @param authConstraint The new value
                             */
                            // @ts-ignore
                            public setAuthConstraint(authConstraint: boolean): void
                            /**
                             * @return the display name of this security constraint.
                             */
                            // @ts-ignore
                            public getDisplayName(): string
                            /**
                             * Set the display name of this security constraint.
                             * @param displayName The new value
                             */
                            // @ts-ignore
                            public setDisplayName(displayName: java.lang.String | string): void
                            /**
                             * Return the user data constraint for this security constraint.
                             * @return the user constraint
                             */
                            // @ts-ignore
                            public getUserConstraint(): string
                            /**
                             * Set the user data constraint for this security constraint.
                             * @param userConstraint The new user data constraint
                             */
                            // @ts-ignore
                            public setUserConstraint(userConstraint: java.lang.String | string): void
                            /**
                             * Called in the unlikely event that an application defines a role named
                             * "**".
                             */
                            // @ts-ignore
                            public treatAllAuthenticatedUsersAsApplicationRole(): void
                            /**
                             * Add an authorization role, which is a role name that will be
                             * permitted access to the resources protected by this security constraint.
                             * @param authRole Role name to be added
                             */
                            // @ts-ignore
                            public addAuthRole(authRole: java.lang.String | string): void
                            /**
                             * Add a new web resource collection to those protected by this
                             * security constraint.
                             * @param collection The new web resource collection
                             */
                            // @ts-ignore
                            public addCollection(collection: org.apache.tomcat.util.descriptor.web.SecurityCollection): void
                            /**
                             * Check a role.
                             * @param role Role name to be checked
                             * @return <code>true</code> if the specified role is permitted access to
                             *  the resources protected by this security constraint.
                             */
                            // @ts-ignore
                            public findAuthRole(role: java.lang.String | string): boolean
                            /**
                             * Return the set of roles that are permitted access to the resources
                             * protected by this security constraint.  If none have been defined,
                             * a zero-length array is returned (which implies that all authenticated
                             * users are permitted access).
                             * @return the roles array
                             */
                            // @ts-ignore
                            public findAuthRoles(): string[]
                            /**
                             * Return the web resource collection for the specified name, if any;
                             * otherwise, return <code>null</code>.
                             * @param name Web resource collection name to return
                             * @return the collection
                             */
                            // @ts-ignore
                            public findCollection(name: java.lang.String | string): org.apache.tomcat.util.descriptor.web.SecurityCollection
                            /**
                             * Return all of the web resource collections protected by this
                             * security constraint.  If there are none, a zero-length array is
                             * returned.
                             * @return the collections array
                             */
                            // @ts-ignore
                            public findCollections(): org.apache.tomcat.util.descriptor.web.SecurityCollection[]
                            /**
                             * Check if the constraint applies to a URI and method.
                             * @param uri Context-relative URI to check
                             * @param method Request method being used
                             * @return <code>true</code> if the specified context-relative URI (and
                             *  associated HTTP method) are protected by this security constraint.
                             */
                            // @ts-ignore
                            public included(uri: java.lang.String | string, method: java.lang.String | string): boolean
                            /**
                             * Remove the specified role from the set of roles permitted to access
                             * the resources protected by this security constraint.
                             * @param authRole Role name to be removed
                             */
                            // @ts-ignore
                            public removeAuthRole(authRole: java.lang.String | string): void
                            /**
                             * Remove the specified web resource collection from those protected by
                             * this security constraint.
                             * @param collection Web resource collection to be removed
                             */
                            // @ts-ignore
                            public removeCollection(collection: org.apache.tomcat.util.descriptor.web.SecurityCollection): void
                            /**
                             * Return a String representation of this security constraint.
                             */
                            // @ts-ignore
                            public toString(): string
                            /**
                             * Convert a {@link ServletSecurityElement} to an array of
                             * {@link SecurityConstraint}(s).
                             * @param element       The element to be converted
                             * @param urlPattern    The url pattern that the element should be applied
                             *                       to
                             * @return The (possibly zero length) array of constraints that
                             *                       are the equivalent to the input
                             */
                            // @ts-ignore
                            public static createConstraints(element: javax.servlet.ServletSecurityElement, urlPattern: java.lang.String | string): org.apache.tomcat.util.descriptor.web.SecurityConstraint[]
                            // @ts-ignore
                            public static findUncoveredHttpMethods(constraints: org.apache.tomcat.util.descriptor.web.SecurityConstraint[], denyUncoveredHttpMethods: boolean, log: org.apache.juli.logging.Log): org.apache.tomcat.util.descriptor.web.SecurityConstraint[]
                        }
                    }
                }
            }
        }
    }
}
