declare namespace javax {
    namespace swing {
        namespace filechooser {
            /**
             * FileSystemView is JFileChooser's gateway to the
             * file system. Since the JDK1.1 File API doesn't allow
             * access to such information as root partitions, file type
             * information, or hidden file bits, this class is designed
             * to intuit as much OS-specific file system information as
             * possible.
             * <p>
             * Java Licensees may want to provide a different implementation of
             * FileSystemView to better handle a given operating system.
             * @author Jeff Dinkins
             */
            // @ts-ignore
            abstract class FileSystemView extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static getFileSystemView(): javax.swing.filechooser.FileSystemView
                /**
                 * Determines if the given file is a root in the navigable tree(s).
                 * Examples: Windows 98 has one root, the Desktop folder. DOS has one root
                 * per drive letter, <code>C:\</code>, <code>D:\</code>, etc. Unix has one root,
                 * the <code>"/"</code> directory.
                 * The default implementation gets information from the <code>ShellFolder</code> class.
                 * @param f a <code>File</code> object representing a directory
                 * @return <code>true</code> if <code>f</code> is a root in the navigable tree.
                 * @see #isFileSystemRoot
                 */
                // @ts-ignore
                public isRoot(f: java.io.File): boolean
                /**
                 * Returns true if the file (directory) can be visited.
                 * Returns false if the directory cannot be traversed.
                 * @param f the <code>File</code>
                 * @return <code>true</code> if the file/directory can be traversed, otherwise <code>false</code>
                 * @see JFileChooser#isTraversable
                 * @see FileView#isTraversable
                 * @since 1.4
                 */
                // @ts-ignore
                public isTraversable(f: java.io.File): java.lang.Boolean
                /**
                 * Name of a file, directory, or folder as it would be displayed in
                 * a system file browser. Example from Windows: the "M:\" directory
                 * displays as "CD-ROM (M:)"
                 * The default implementation gets information from the ShellFolder class.
                 * @param f a <code>File</code> object
                 * @return the file name as it would be displayed by a native file chooser
                 * @see JFileChooser#getName
                 * @since 1.4
                 */
                // @ts-ignore
                public getSystemDisplayName(f: java.io.File): string
                /**
                 * Type description for a file, directory, or folder as it would be displayed in
                 * a system file browser. Example from Windows: the "Desktop" folder
                 * is described as "Desktop".
                 * Override for platforms with native ShellFolder implementations.
                 * @param f a <code>File</code> object
                 * @return the file type description as it would be displayed by a native file chooser
                 *  or null if no native information is available.
                 * @see JFileChooser#getTypeDescription
                 * @since 1.4
                 */
                // @ts-ignore
                public getSystemTypeDescription(f: java.io.File): string
                /**
                 * Icon for a file, directory, or folder as it would be displayed in
                 * a system file browser. Example from Windows: the "M:\" directory
                 * displays a CD-ROM icon.
                 * The default implementation gets information from the ShellFolder class.
                 * @param f a <code>File</code> object
                 * @return an icon as it would be displayed by a native file chooser
                 * @see JFileChooser#getIcon
                 * @since 1.4
                 */
                // @ts-ignore
                public getSystemIcon(f: java.io.File): javax.swing.Icon
                /**
                 * On Windows, a file can appear in multiple folders, other than its
                 * parent directory in the filesystem. Folder could for example be the
                 * "Desktop" folder which is not the same as file.getParentFile().
                 * @param folder a <code>File</code> object representing a directory or special folder
                 * @param file a <code>File</code> object
                 * @return <code>true</code> if <code>folder</code> is a directory or special folder and contains <code>file</code>.
                 * @since 1.4
                 */
                // @ts-ignore
                public isParent(folder: java.io.File, file: java.io.File): boolean
                /**
                 * @param parent a <code>File</code> object representing a directory or special folder
                 * @param fileName a name of a file or folder which exists in <code>parent</code>
                 * @return a File object. This is normally constructed with <code>new
                 *  File(parent, fileName)</code> except when parent and child are both
                 *  special folders, in which case the <code>File</code> is a wrapper containing
                 *  a <code>ShellFolder</code> object.
                 * @since 1.4
                 */
                // @ts-ignore
                public getChild(parent: java.io.File, fileName: java.lang.String | string): java.io.File
                /**
                 * Checks if <code>f</code> represents a real directory or file as opposed to a
                 * special folder such as <code>"Desktop"</code>. Used by UI classes to decide if
                 * a folder is selectable when doing directory choosing.
                 * @param f a <code>File</code> object
                 * @return <code>true</code> if <code>f</code> is a real file or directory.
                 * @since 1.4
                 */
                // @ts-ignore
                public isFileSystem(f: java.io.File): boolean
                /**
                 * Creates a new folder with a default folder name.
                 */
                // @ts-ignore
                public abstract createNewFolder(containingDir: java.io.File): java.io.File
                /**
                 * Returns whether a file is hidden or not.
                 */
                // @ts-ignore
                public isHiddenFile(f: java.io.File): boolean
                /**
                 * Is dir the root of a tree in the file system, such as a drive
                 * or partition. Example: Returns true for "C:\" on Windows 98.
                 * @param dir a <code>File</code> object representing a directory
                 * @return <code>true</code> if <code>f</code> is a root of a filesystem
                 * @see #isRoot
                 * @since 1.4
                 */
                // @ts-ignore
                public isFileSystemRoot(dir: java.io.File): boolean
                /**
                 * Used by UI classes to decide whether to display a special icon
                 * for drives or partitions, e.g. a "hard disk" icon.
                 * The default implementation has no way of knowing, so always returns false.
                 * @param dir a directory
                 * @return <code>false</code> always
                 * @since 1.4
                 */
                // @ts-ignore
                public isDrive(dir: java.io.File): boolean
                /**
                 * Used by UI classes to decide whether to display a special icon
                 * for a floppy disk. Implies isDrive(dir).
                 * The default implementation has no way of knowing, so always returns false.
                 * @param dir a directory
                 * @return <code>false</code> always
                 * @since 1.4
                 */
                // @ts-ignore
                public isFloppyDrive(dir: java.io.File): boolean
                /**
                 * Used by UI classes to decide whether to display a special icon
                 * for a computer node, e.g. "My Computer" or a network server.
                 * The default implementation has no way of knowing, so always returns false.
                 * @param dir a directory
                 * @return <code>false</code> always
                 * @since 1.4
                 */
                // @ts-ignore
                public isComputerNode(dir: java.io.File): boolean
                /**
                 * Returns all root partitions on this system. For example, on
                 * Windows, this would be the "Desktop" folder, while on DOS this
                 * would be the A: through Z: drives.
                 */
                // @ts-ignore
                public getRoots(): java.io.File[]
                // @ts-ignore
                public getHomeDirectory(): java.io.File
                /**
                 * Return the user's default starting directory for the file chooser.
                 * @return a <code>File</code> object representing the default
                 *          starting folder
                 * @since 1.4
                 */
                // @ts-ignore
                public getDefaultDirectory(): java.io.File
                /**
                 * Returns a File object constructed in dir from the given filename.
                 */
                // @ts-ignore
                public createFileObject(dir: java.io.File, filename: java.lang.String | string): java.io.File
                /**
                 * Returns a File object constructed from the given path string.
                 */
                // @ts-ignore
                public createFileObject(path: java.lang.String | string): java.io.File
                /**
                 * Gets the list of shown (i.e. not hidden) files.
                 */
                // @ts-ignore
                public getFiles(dir: java.io.File, useFileHiding: boolean): java.io.File[]
                /**
                 * Returns the parent directory of <code>dir</code>.
                 * @param dir the <code>File</code> being queried
                 * @return the parent directory of <code>dir</code>, or
                 *    <code>null</code> if <code>dir</code> is <code>null</code>
                 */
                // @ts-ignore
                public getParentDirectory(dir: java.io.File): java.io.File
                /**
                 * Creates a new <code>File</code> object for <code>f</code> with correct
                 * behavior for a file system root directory.
                 * @param f a <code>File</code> object representing a file system root
                 *           directory, for example "/" on Unix or "C:\" on Windows.
                 * @return a new <code>File</code> object
                 * @since 1.4
                 */
                // @ts-ignore
                createFileSystemRoot(f: java.io.File): java.io.File
            }
        }
    }
}
