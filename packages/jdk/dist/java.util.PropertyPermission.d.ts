declare namespace java {
    namespace util {
        /**
         * This class is for property permissions.
         * <P>
         * The name is the name of the property ("java.home",
         * "os.name", etc). The naming
         * convention follows the  hierarchical property naming convention.
         * Also, an asterisk
         * may appear at the end of the name, following a ".", or by itself, to
         * signify a wildcard match. For example: "java.*" and "*" signify a wildcard
         * match, while "*java" and "a*b" do not.
         * <P>
         * The actions to be granted are passed to the constructor in a string containing
         * a list of one or more comma-separated keywords. The possible keywords are
         * "read" and "write". Their meaning is defined as follows:
         * <DL>
         * <DT> read
         * <DD> read permission. Allows <code>System.getProperty</code> to
         * be called.
         * <DT> write
         * <DD> write permission. Allows <code>System.setProperty</code> to
         * be called.
         * </DL>
         * <P>
         * The actions string is converted to lowercase before processing.
         * <P>
         * Care should be taken before granting code permission to access
         * certain system properties.  For example, granting permission to
         * access the "java.home" system property gives potentially malevolent
         * code sensitive information about the system environment (the Java
         * installation directory).  Also, granting permission to access
         * the "user.name" and "user.home" system properties gives potentially
         * malevolent code sensitive information about the user environment
         * (the user's account name and home directory).
         * @see java.security.BasicPermission
         * @see java.security.Permission
         * @see java.security.Permissions
         * @see java.security.PermissionCollection
         * @see java.lang.SecurityManager
         * @author Roland Schemers
         * @since 1.2
         * @serial exclude
         */
        // @ts-ignore
        class PropertyPermission extends java.security.BasicPermission {
            /**
             * Creates a new PropertyPermission object with the specified name.
             * The name is the name of the system property, and
             * <i>actions</i> contains a comma-separated list of the
             * desired actions granted on the property. Possible actions are
             * "read" and "write".
             * @param name the name of the PropertyPermission.
             * @param actions the actions string.
             * @throws NullPointerException if <code>name</code> is <code>null</code>.
             * @throws IllegalArgumentException if <code>name</code> is empty or if
             *  <code>actions</code> is invalid.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
            /**
             * Checks if this PropertyPermission object "implies" the specified
             * permission.
             * <P>
             * More specifically, this method returns true if:
             * <ul>
             * <li> <i>p</i> is an instanceof PropertyPermission,
             * <li> <i>p</i>'s actions are a subset of this
             * object's actions, and
             * <li> <i>p</i>'s name is implied by this object's
             * name. For example, "java.*" implies "java.home".
             * </ul>
             * @param p the permission to check against.
             * @return true if the specified permission is implied by this object,
             *  false if not.
             */
            // @ts-ignore
            implies(p: java.security.Permission): boolean
            /**
             * Checks two PropertyPermission objects for equality. Checks that <i>obj</i> is
             * a PropertyPermission, and has the same name and actions as this object.
             * <P>
             * @param obj the object we are testing for equality with this object.
             * @return true if obj is a PropertyPermission, and has the same name and
             *  actions as this PropertyPermission object.
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns the hash code value for this object.
             * The hash code used is the hash code of this permissions name, that is,
             * <code>getName().hashCode()</code>, where <code>getName</code> is
             * from the Permission superclass.
             * @return a hash code value for this object.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns the "canonical string representation" of the actions.
             * That is, this method always returns present actions in the following order:
             * read, write. For example, if this PropertyPermission object
             * allows both write and read actions, a call to <code>getActions</code>
             * will return the string "read,write".
             * @return the canonical string representation of the actions.
             */
            // @ts-ignore
            getActions(): java.lang.String
            /**
             * Returns a new PermissionCollection object for storing
             * PropertyPermission objects.
             * <p>
             * @return a new PermissionCollection object suitable for storing
             *  PropertyPermissions.
             */
            // @ts-ignore
            newPermissionCollection(): java.security.PermissionCollection
        }
    }
}
