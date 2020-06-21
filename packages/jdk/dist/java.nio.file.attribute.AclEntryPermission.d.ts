declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                /**
                 * Defines the permissions for use with the permissions component of an ACL
                 * {@link AclEntry entry}.
                 * @since 1.7
                 */
                // @ts-ignore
                class AclEntryPermission extends java.lang.Enum<java.nio.file.attribute.AclEntryPermission> {
                    /**
                     * Permission to read the data of the file.
                     */
                    // @ts-ignore
                    readonly READ_DATA: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to modify the file's data.
                     */
                    // @ts-ignore
                    readonly WRITE_DATA: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to append data to a file.
                     */
                    // @ts-ignore
                    readonly APPEND_DATA: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to read the named attributes of a file.
                     * <p> <a href="http://www.ietf.org/rfc/rfc3530.txt">RFC&nbsp;3530: Network
                     * File System (NFS) version 4 Protocol</a> defines <em>named attributes</em>
                     * as opaque files associated with a file in the file system.
                     */
                    // @ts-ignore
                    readonly READ_NAMED_ATTRS: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to write the named attributes of a file.
                     * <p> <a href="http://www.ietf.org/rfc/rfc3530.txt">RFC&nbsp;3530: Network
                     * File System (NFS) version 4 Protocol</a> defines <em>named attributes</em>
                     * as opaque files associated with a file in the file system.
                     */
                    // @ts-ignore
                    readonly WRITE_NAMED_ATTRS: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to execute a file.
                     */
                    // @ts-ignore
                    readonly EXECUTE: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to delete a file or directory within a directory.
                     */
                    // @ts-ignore
                    readonly DELETE_CHILD: java.nio.file.attribute.AclEntryPermission
                    /**
                     * The ability to read (non-acl) file attributes.
                     */
                    // @ts-ignore
                    readonly READ_ATTRIBUTES: java.nio.file.attribute.AclEntryPermission
                    /**
                     * The ability to write (non-acl) file attributes.
                     */
                    // @ts-ignore
                    readonly WRITE_ATTRIBUTES: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to delete the file.
                     */
                    // @ts-ignore
                    readonly DELETE: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to read the ACL attribute.
                     */
                    // @ts-ignore
                    readonly READ_ACL: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to write the ACL attribute.
                     */
                    // @ts-ignore
                    readonly WRITE_ACL: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to change the owner.
                     */
                    // @ts-ignore
                    readonly WRITE_OWNER: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to access file locally at the server with synchronous reads
                     * and writes.
                     */
                    // @ts-ignore
                    readonly SYNCHRONIZE: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to list the entries of a directory (equal to {@link #READ_DATA})
                     */
                    // @ts-ignore
                    readonly LIST_DIRECTORY: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to add a new file to a directory (equal to {@link #WRITE_DATA})
                     */
                    // @ts-ignore
                    readonly ADD_FILE: java.nio.file.attribute.AclEntryPermission
                    /**
                     * Permission to create a subdirectory to a directory (equal to {@link #APPEND_DATA})
                     */
                    // @ts-ignore
                    readonly ADD_SUBDIRECTORY: java.nio.file.attribute.AclEntryPermission
                    // @ts-ignore
                    values(): java.nio.file.attribute.AclEntryPermission[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): java.nio.file.attribute.AclEntryPermission
                }
            }
        }
    }
}
