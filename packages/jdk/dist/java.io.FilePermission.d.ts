declare namespace java {
    namespace io {
        /**
         * This class represents access to a file or directory.  A FilePermission consists
         * of a pathname and a set of actions valid for that pathname.
         * <P>
         * Pathname is the pathname of the file or directory granted the specified
         * actions. A pathname that ends in "/*" (where "/" is
         * the file separator character, <code>File.separatorChar</code>) indicates
         * all the files and directories contained in that directory. A pathname
         * that ends with "/-" indicates (recursively) all files
         * and subdirectories contained in that directory. A pathname consisting of
         * the special token "&lt;&lt;ALL FILES&gt;&gt;" matches <b>any</b> file.
         * <P>
         * Note: A pathname consisting of a single "*" indicates all the files
         * in the current directory, while a pathname consisting of a single "-"
         * indicates all the files in the current directory and
         * (recursively) all files and subdirectories contained in the current
         * directory.
         * <P>
         * The actions to be granted are passed to the constructor in a string containing
         * a list of one or more comma-separated keywords. The possible keywords are
         * "read", "write", "execute", "delete", and "readlink". Their meaning is
         * defined as follows:
         * <DL>
         * <DT> read <DD> read permission
         * <DT> write <DD> write permission
         * <DT> execute
         * <DD> execute permission. Allows <code>Runtime.exec</code> to
         * be called. Corresponds to <code>SecurityManager.checkExec</code>.
         * <DT> delete
         * <DD> delete permission. Allows <code>File.delete</code> to
         * be called. Corresponds to <code>SecurityManager.checkDelete</code>.
         * <DT> readlink
         * <DD> read link permission. Allows the target of a
         * <a href="../nio/file/package-summary.html#links">symbolic link</a>
         * to be read by invoking the {@link java.nio.file.Files#readSymbolicLink
         * readSymbolicLink } method.
         * </DL>
         * <P>
         * The actions string is converted to lowercase before processing.
         * <P>
         * Be careful when granting FilePermissions. Think about the implications
         * of granting read and especially write access to various files and
         * directories. The "&lt;&lt;ALL FILES&gt;&gt;" permission with write action is
         * especially dangerous. This grants permission to write to the entire
         * file system. One thing this effectively allows is replacement of the
         * system binary, including the JVM runtime environment.
         * <p>Please note: Code can always read a file from the same
         * directory it's in (or a subdirectory of that directory); it does not
         * need explicit permission to do so.
         * @see java.security.Permission
         * @see java.security.Permissions
         * @see java.security.PermissionCollection
         * @author Marianne Mueller
         * @author Roland Schemers
         * @since 1.2
         * @serial exclude
         */
        // @ts-ignore
        class FilePermission extends java.security.Permission implements java.io.Serializable {
            /**
             * Creates a new FilePermission object with the specified actions.
             * <i>path</i> is the pathname of a file or directory, and <i>actions</i>
             * contains a comma-separated list of the desired actions granted on the
             * file or directory. Possible actions are
             * "read", "write", "execute", "delete", and "readlink".
             * <p>A pathname that ends in "/*" (where "/" is
             * the file separator character, <code>File.separatorChar</code>)
             * indicates all the files and directories contained in that directory.
             * A pathname that ends with "/-" indicates (recursively) all files and
             * subdirectories contained in that directory. The special pathname
             * "&lt;&lt;ALL FILES&gt;&gt;" matches any file.
             * <p>A pathname consisting of a single "*" indicates all the files
             * in the current directory, while a pathname consisting of a single "-"
             * indicates all the files in the current directory and
             * (recursively) all files and subdirectories contained in the current
             * directory.
             * <p>A pathname containing an empty string represents an empty path.
             * @param path the pathname of the file/directory.
             * @param actions the action string.
             * @throws IllegalArgumentException
             *           If actions is <code>null</code>, empty or contains an action
             *           other than the specified possible actions.
             */
            // @ts-ignore
            constructor(path: string, actions: string)
            /**
             * Checks if this FilePermission object "implies" the specified permission.
             * <P>
             * More specifically, this method returns true if:
             * <ul>
             * <li> <i>p</i> is an instanceof FilePermission,
             * <li> <i>p</i>'s actions are a proper subset of this
             * object's actions, and
             * <li> <i>p</i>'s pathname is implied by this object's
             * pathname. For example, "/tmp/*" implies "/tmp/foo", since
             * "/tmp/*" encompasses all files in the "/tmp" directory,
             * including the one named "foo".
             * </ul>
             * @param p the permission to check against.
             * @return <code>true</code> if the specified permission is not
             *                   <code>null</code> and is implied by this object,
             *                   <code>false</code> otherwise.
             */
            // @ts-ignore
            implies(p: java.security.Permission): boolean
            /**
             * Checks two FilePermission objects for equality. Checks that <i>obj</i> is
             * a FilePermission, and has the same pathname and actions as this object.
             * @param obj the object we are testing for equality with this object.
             * @return <code>true</code> if obj is a FilePermission, and has the same
             *           pathname and actions as this FilePermission object,
             *           <code>false</code> otherwise.
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Returns the hash code value for this object.
             * @return a hash code value for this object.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Returns the "canonical string representation" of the actions.
             * That is, this method always returns present actions in the following order:
             * read, write, execute, delete, readlink. For example, if this FilePermission
             * object allows both write and read actions, a call to <code>getActions</code>
             * will return the string "read,write".
             * @return the canonical string representation of the actions.
             */
            // @ts-ignore
            getActions(): java.lang.String
            /**
             * Returns a new PermissionCollection object for storing FilePermission
             * objects.
             * <p>
             * FilePermission objects must be stored in a manner that allows them
             * to be inserted into the collection in any order, but that also enables the
             * PermissionCollection <code>implies</code>
             * method to be implemented in an efficient (and consistent) manner.
             * <p>For example, if you have two FilePermissions:
             * <OL>
             * <LI>  <code>"/tmp/-", "read"</code>
             * <LI>  <code>"/tmp/scratch/foo", "write"</code>
             * </OL>
             * <p>and you are calling the <code>implies</code> method with the FilePermission:
             * <pre>
             * "/tmp/scratch/foo", "read,write",
             * </pre>
             * then the <code>implies</code> function must
             * take into account both the "/tmp/-" and "/tmp/scratch/foo"
             * permissions, so the effective permission is "read,write",
             * and <code>implies</code> returns true. The "implies" semantics for
             * FilePermissions are handled properly by the PermissionCollection object
             * returned by this <code>newPermissionCollection</code> method.
             * @return a new PermissionCollection object suitable for storing
             *  FilePermissions.
             */
            // @ts-ignore
            newPermissionCollection(): java.security.PermissionCollection
        }
    }
}
