declare namespace java {
    namespace security {
        /**
         * This class represents a heterogeneous collection of Permissions. That is,
         * it contains different types of Permission objects, organized into
         * PermissionCollections. For example, if any
         * {@code java.io.FilePermission} objects are added to an instance of
         * this class, they are all stored in a single
         * PermissionCollection. It is the PermissionCollection returned by a call to
         * the {@code newPermissionCollection} method in the FilePermission class.
         * Similarly, any {@code java.lang.RuntimePermission} objects are
         * stored in the PermissionCollection returned by a call to the
         * {@code newPermissionCollection} method in the
         * RuntimePermission class. Thus, this class represents a collection of
         * PermissionCollections.
         * <p>When the {@code add} method is called to add a Permission, the
         * Permission is stored in the appropriate PermissionCollection. If no such
         * collection exists yet, the Permission object's class is determined and the
         * {@code newPermissionCollection} method is called on that class to create
         * the PermissionCollection and add it to the Permissions object. If
         * {@code newPermissionCollection} returns null, then a default
         * PermissionCollection that uses a hashtable will be created and used. Each
         * hashtable entry stores a Permission object as both the key and the value.
         * <p> Enumerations returned via the {@code elements} method are
         * not <em>fail-fast</em>.  Modifications to a collection should not be
         * performed while enumerating over that collection.
         * @see Permission
         * @see PermissionCollection
         * @see AllPermission
         * @author Marianne Mueller
         * @author Roland Schemers
         * @serial exclude
         */
        // @ts-ignore
        class Permissions extends java.security.PermissionCollection implements java.io.Serializable {
            /**
             * Creates a new Permissions object containing no PermissionCollections.
             */
            // @ts-ignore
            constructor()
            /**
             * Adds a permission object to the PermissionCollection for the class the
             * permission belongs to. For example, if <i>permission</i> is a
             * FilePermission, it is added to the FilePermissionCollection stored
             * in this Permissions object.
             * This method creates
             * a new PermissionCollection object (and adds the permission to it)
             * if an appropriate collection does not yet exist. <p>
             * @param permission the Permission object to add.
             * @exception SecurityException if this Permissions object is
             *  marked as readonly.
             * @see PermissionCollection#isReadOnly()
             */
            // @ts-ignore
            add(permission: java.security.Permission): void
            /**
             * Checks to see if this object's PermissionCollection for permissions of
             * the specified permission's class implies the permissions
             * expressed in the <i>permission</i> object. Returns true if the
             * combination of permissions in the appropriate PermissionCollection
             * (e.g., a FilePermissionCollection for a FilePermission) together
             * imply the specified permission.
             * <p>For example, suppose there is a FilePermissionCollection in this
             * Permissions object, and it contains one FilePermission that specifies
             * "read" access for  all files in all subdirectories of the "/tmp"
             * directory, and another FilePermission that specifies "write" access
             * for all files in the "/tmp/scratch/foo" directory.
             * Then if the {@code implies} method
             * is called with a permission specifying both "read" and "write" access
             * to files in the "/tmp/scratch/foo" directory, {@code true} is
             * returned.
             * <p>Additionally, if this PermissionCollection contains the
             * AllPermission, this method will always return true.
             * <p>
             * @param permission the Permission object to check.
             * @return true if "permission" is implied by the permissions in the
             *  PermissionCollection it
             *  belongs to, false if not.
             */
            // @ts-ignore
            implies(permission: java.security.Permission): boolean
            /**
             * Returns an enumeration of all the Permission objects in all the
             * PermissionCollections in this Permissions object.
             * @return an enumeration of all the Permissions.
             */
            // @ts-ignore
            elements(): java.util.Enumeration<java.security.Permission>
        }
    }
}
