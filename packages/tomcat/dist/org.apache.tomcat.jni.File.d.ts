declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * File
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class File extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Open the file for reading
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_READ: number /*int*/
                    /**
                     * Open the file for writing
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_WRITE: number /*int*/
                    /**
                     * Create the file if not there
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_CREATE: number /*int*/
                    /**
                     * Append to the end of the file
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_APPEND: number /*int*/
                    /**
                     * Open the file and truncate to 0 length
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_TRUNCATE: number /*int*/
                    /**
                     * Open the file in binary mode
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_BINARY: number /*int*/
                    /**
                     * Open should fail if APR_CREATE and file exists.
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_EXCL: number /*int*/
                    /**
                     * Open the file for buffered I/O
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_BUFFERED: number /*int*/
                    /**
                     * Delete the file after close
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_DELONCLOSE: number /*int*/
                    /**
                     * Platform dependent tag to open the file for
                     * use across multiple threads
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_XTHREAD: number /*int*/
                    /**
                     * Platform dependent support for higher level locked read/write
                     * access to support writes across process/machines
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_SHARELOCK: number /*int*/
                    /**
                     * Do not register a cleanup when the file is opened
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_NOCLEANUP: number /*int*/
                    /**
                     * Advisory flag that this file should support
                     * apr_socket_sendfile operation
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_SENDFILE_ENABLED: number /*int*/
                    /**
                     * Platform dependent flag to enable large file support;
                     * <br><b>Warning :</b> The APR_LARGEFILE flag only has effect on some platforms
                     * where sizeof(apr_off_t) == 4.  Where implemented, it allows opening
                     * and writing to a file which exceeds the size which can be
                     * represented by apr_off_t (2 gigabytes).  When a file's size does
                     * exceed 2Gb, apr_file_info_get() will fail with an error on the
                     * descriptor, likewise apr_stat()/apr_lstat() will fail on the
                     * filename.  apr_dir_read() will fail with APR_INCOMPLETE on a
                     * directory entry for a large file depending on the particular
                     * APR_FINFO_* flags.  Generally, it is not recommended to use this
                     * flag.
                     */
                    // @ts-ignore
                    public static readonly APR_FOPEN_LARGEFILE: number /*int*/
                    /**
                     * Set the file position
                     */
                    // @ts-ignore
                    public static readonly APR_SET: number /*int*/
                    /**
                     * Current
                     */
                    // @ts-ignore
                    public static readonly APR_CUR: number /*int*/
                    /**
                     * Go to end of file
                     */
                    // @ts-ignore
                    public static readonly APR_END: number /*int*/
                    /**
                     * File is read-only
                     */
                    // @ts-ignore
                    public static readonly APR_FILE_ATTR_READONLY: number /*int*/
                    /**
                     * File is executable
                     */
                    // @ts-ignore
                    public static readonly APR_FILE_ATTR_EXECUTABLE: number /*int*/
                    /**
                     * File is hidden
                     */
                    // @ts-ignore
                    public static readonly APR_FILE_ATTR_HIDDEN: number /*int*/
                    /**
                     * Shared lock. More than one process or thread can hold a shared lock
                     * at any given time. Essentially, this is a "read lock", preventing
                     * writers from establishing an exclusive lock.
                     */
                    // @ts-ignore
                    public static readonly APR_FLOCK_SHARED: number /*int*/
                    /**
                     * Exclusive lock. Only one process may hold an exclusive lock at any
                     * given time. This is analogous to a "write lock".
                     */
                    // @ts-ignore
                    public static readonly APR_FLOCK_EXCLUSIVE: number /*int*/
                    /**
                     * mask to extract lock type
                     */
                    // @ts-ignore
                    public static readonly APR_FLOCK_TYPEMASK: number /*int*/
                    /**
                     * do not block while acquiring the file lock
                     */
                    // @ts-ignore
                    public static readonly APR_FLOCK_NONBLOCK: number /*int*/
                    /**
                     * no file type determined
                     */
                    // @ts-ignore
                    public static readonly APR_NOFILE: number /*int*/
                    /**
                     * a regular file
                     */
                    // @ts-ignore
                    public static readonly APR_REG: number /*int*/
                    /**
                     * a directory
                     */
                    // @ts-ignore
                    public static readonly APR_DIR: number /*int*/
                    /**
                     * a character device
                     */
                    // @ts-ignore
                    public static readonly APR_CHR: number /*int*/
                    /**
                     * a block device
                     */
                    // @ts-ignore
                    public static readonly APR_BLK: number /*int*/
                    /**
                     * a FIFO / pipe
                     */
                    // @ts-ignore
                    public static readonly APR_PIPE: number /*int*/
                    /**
                     * a symbolic link
                     */
                    // @ts-ignore
                    public static readonly APR_LNK: number /*int*/
                    /**
                     * a [unix domain] socket
                     */
                    // @ts-ignore
                    public static readonly APR_SOCK: number /*int*/
                    /**
                     * a file of some other unknown type
                     */
                    // @ts-ignore
                    public static readonly APR_UNKFILE: number /*int*/
                    // @ts-ignore
                    public static readonly APR_FPROT_USETID: number /*int*/
                    /**
                     * Set user id
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_UREAD: number /*int*/
                    /**
                     * Read by user
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_UWRITE: number /*int*/
                    /**
                     * Write by user
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_UEXECUTE: number /*int*/
                    /**
                     * Execute by user
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_GSETID: number /*int*/
                    /**
                     * Set group id
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_GREAD: number /*int*/
                    /**
                     * Read by group
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_GWRITE: number /*int*/
                    /**
                     * Write by group
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_GEXECUTE: number /*int*/
                    /**
                     * Execute by group
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_WSTICKY: number /*int*/
                    /**
                     * Sticky bit
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_WREAD: number /*int*/
                    /**
                     * Read by others
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_WWRITE: number /*int*/
                    /**
                     * Write by others
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_WEXECUTE: number /*int*/
                    /**
                     * Execute by others
                     */
                    // @ts-ignore
                    public static readonly APR_FPROT_OS_DEFAULT: number /*int*/
                    /**
                     * use OS's default permissions
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_LINK: number /*int*/
                    /**
                     * Stat the link not the file itself if it is a link
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_MTIME: number /*int*/
                    /**
                     * Modification Time
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_CTIME: number /*int*/
                    /**
                     * Creation or inode-changed time
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_ATIME: number /*int*/
                    /**
                     * Access Time
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_SIZE: number /*int*/
                    /**
                     * Size of the file
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_CSIZE: number /*int*/
                    /**
                     * Storage size consumed by the file
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_DEV: number /*int*/
                    /**
                     * Device
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_INODE: number /*int*/
                    /**
                     * Inode
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_NLINK: number /*int*/
                    /**
                     * Number of links
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_TYPE: number /*int*/
                    /**
                     * Type
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_USER: number /*int*/
                    /**
                     * User
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_GROUP: number /*int*/
                    /**
                     * Group
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_UPROT: number /*int*/
                    /**
                     * User protection bits
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_GPROT: number /*int*/
                    /**
                     * Group protection bits
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_WPROT: number /*int*/
                    /**
                     * World protection bits
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_ICASE: number /*int*/
                    /**
                     * if dev is case insensitive
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_NAME: number /*int*/
                    /**
                     * -&gt;name in proper case
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_MIN: number /*int*/
                    /**
                     * type, mtime, ctime, atime, size
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_IDENT: number /*int*/
                    /**
                     * dev and inode
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_OWNER: number /*int*/
                    /**
                     * user and group
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_PROT: number /*int*/
                    /**
                     * all protections
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_NORM: number /*int*/
                    /**
                     * an atomic unix apr_stat()
                     */
                    // @ts-ignore
                    public static readonly APR_FINFO_DIRENT: number /*int*/
                    /**
                     * Open the specified file.
                     * @param fname The full path to the file (using / on all systems)
                     * @param flag Or'ed value of:
                     *  <PRE>
                     *  APR_FOPEN_READ              open for reading
                     *  APR_FOPEN_WRITE             open for writing
                     *  APR_FOPEN_CREATE            create the file if not there
                     *  APR_FOPEN_APPEND            file ptr is set to end prior to all writes
                     *  APR_FOPEN_TRUNCATE          set length to zero if file exists
                     *  APR_FOPEN_BINARY            not a text file (This flag is ignored on
                     *                              UNIX because it has no meaning)
                     *  APR_FOPEN_BUFFERED          buffer the data.  Default is non-buffered
                     *  APR_FOPEN_EXCL              return error if APR_CREATE and file exists
                     *  APR_FOPEN_DELONCLOSE        delete the file after closing.
                     *  APR_FOPEN_XTHREAD           Platform dependent tag to open the file
                     *                              for use across multiple threads
                     *  APR_FOPEN_SHARELOCK         Platform dependent support for higher
                     *                              level locked read/write access to support
                     *                              writes across process/machines
                     *  APR_FOPEN_NOCLEANUP         Do not register a cleanup with the pool
                     *                              passed in on the <EM>pool</EM> argument (see below).
                     *                              The apr_os_file_t handle in apr_file_t will not
                     *                              be closed when the pool is destroyed.
                     *  APR_FOPEN_SENDFILE_ENABLED  Open with appropriate platform semantics
                     *                              for sendfile operations.  Advisory only,
                     *                              apr_socket_sendfile does not check this flag.
                     *  </PRE>
                     * @param perm Access permissions for file.
                     * @param pool The pool to use.
                     *  If perm is APR_OS_DEFAULT and the file is being created,
                     *  appropriate default permissions will be used.
                     * @return The opened file descriptor.
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static open(fname: java.lang.String | string, flag: number /*int*/, perm: number /*int*/, pool: number /*long*/): number /*long*/
                    /**
                     * Close the specified file.
                     * @param file The file descriptor to close.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static close(file: number /*long*/): number /*int*/
                    /**
                     * Flush the file's buffer.
                     * @param thefile The file descriptor to flush
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static flush(thefile: number /*long*/): number /*int*/
                    /**
                     * Open a temporary file
                     * @param templ The template to use when creating a temp file.
                     * @param flags The flags to open the file with. If this is zero,
                     *               the file is opened with
                     *               APR_CREATE | APR_READ | APR_WRITE | APR_EXCL | APR_DELONCLOSE
                     * @param pool The pool to allocate the file out of.
                     * @return The apr file to use as a temporary file.
                     * 
                     *  This function  generates  a unique temporary file name from template.
                     *  The last six characters of template must be XXXXXX and these are replaced
                     *  with a string that makes the filename unique. Since it will  be  modified,
                     *  template must not be a string constant, but should be declared as a character
                     *  array.
                     * @throws Error An error occurred
                     */
                    // @ts-ignore
                    public static mktemp(templ: java.lang.String | string, flags: number /*int*/, pool: number /*long*/): number /*long*/
                    /**
                     * Delete the specified file.
                     * @param path The full path to the file (using / on all systems)
                     * @param pool The pool to use.
                     *  If the file is open, it won't be removed until all
                     *  instances are closed.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static remove(path: java.lang.String | string, pool: number /*long*/): number /*int*/
                    /**
                     * Rename the specified file.
                     * <br><b>Warning :</b> If a file exists at the new location, then it will be
                     * overwritten.  Moving files or directories across devices may not be
                     * possible.
                     * @param fromPath The full path to the original file (using / on all systems)
                     * @param toPath The full path to the new file (using / on all systems)
                     * @param pool The pool to use.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static rename(fromPath: java.lang.String | string, toPath: java.lang.String | string, pool: number /*long*/): number /*int*/
                    /**
                     * Copy the specified file to another file.
                     * The new file does not need to exist, it will be created if required.
                     * <br><b>Warning :</b> If the new file already exists, its contents will be overwritten.
                     * @param fromPath The full path to the original file (using / on all systems)
                     * @param toPath The full path to the new file (using / on all systems)
                     * @param perms Access permissions for the new file if it is created.
                     *      In place of the usual or'd combination of file permissions, the
                     *      value APR_FILE_SOURCE_PERMS may be given, in which case the source
                     *      file's permissions are copied.
                     * @param pool The pool to use.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static copy(fromPath: java.lang.String | string, toPath: java.lang.String | string, perms: number /*int*/, pool: number /*long*/): number /*int*/
                    /**
                     * Append the specified file to another file.
                     * The new file does not need to exist, it will be created if required.
                     * @param fromPath The full path to the source file (use / on all systems)
                     * @param toPath The full path to the destination file (use / on all systems)
                     * @param perms Access permissions for the destination file if it is created.
                     *      In place of the usual or'd combination of file permissions, the
                     *      value APR_FILE_SOURCE_PERMS may be given, in which case the source
                     *      file's permissions are copied.
                     * @param pool The pool to use.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static append(fromPath: java.lang.String | string, toPath: java.lang.String | string, perms: number /*int*/, pool: number /*long*/): number /*int*/
                    /**
                     * Write the string into the specified file.
                     * @param str The string to write. Must be NUL terminated!
                     * @param thefile The file descriptor to write to
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static puts(str: number /*byte*/[], thefile: number /*long*/): number /*int*/
                    /**
                     * Move the read/write file offset to a specified byte within a file.
                     * @param thefile The file descriptor
                     * @param where How to move the pointer, one of:
                     *  <PRE>
                     *  APR_SET  --  set the offset to offset
                     *  APR_CUR  --  add the offset to the current position
                     *  APR_END  --  add the offset to the current file size
                     *  </PRE>
                     * @param offset The offset to move the pointer to.
                     * @return Offset the pointer was actually moved to.
                     * @throws Error If an error occurs reading the file
                     */
                    // @ts-ignore
                    public static seek(thefile: number /*long*/, where: number /*int*/, offset: number /*long*/): number /*long*/
                    /**
                     * Write a character into the specified file.
                     * @param ch The character to write.
                     * @param thefile The file descriptor to write to
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static putc(ch: number /*byte*/, thefile: number /*long*/): number /*int*/
                    /**
                     * Put a character back onto a specified stream.
                     * @param ch The character to write.
                     * @param thefile The file descriptor to write to
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static ungetc(ch: number /*byte*/, thefile: number /*long*/): number /*int*/
                    /**
                     * Write data to the specified file.
                     * Write will write up to the specified number of
                     * bytes, but never more.  If the OS cannot write that many bytes, it
                     * will write as many as it can.  The third argument is modified to
                     * reflect the * number of bytes written.
                     * It is possible for both bytes to be written and an error to
                     * be returned.  APR_EINTR is never returned.
                     * @param thefile The file descriptor to write to.
                     * @param buf The buffer which contains the data.
                     * @param offset Start offset in buf
                     * @param nbytes The number of bytes to write
                     * @return The number of bytes written.
                     */
                    // @ts-ignore
                    public static write(thefile: number /*long*/, buf: number /*byte*/[], offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Write data to the specified file.
                     * Write will write up to the specified number of
                     * bytes, but never more.  If the OS cannot write that many bytes, it
                     * will write as many as it can.  The third argument is modified to
                     * reflect the * number of bytes written.
                     * It is possible for both bytes to be written and an error to
                     * be returned.  APR_EINTR is never returned.
                     * @param thefile The file descriptor to write to.
                     * @param buf The direct Byte buffer which contains the data.
                     * @param offset Start offset in buf
                     * @param nbytes The number of bytes to write
                     * @return The number of bytes written.
                     */
                    // @ts-ignore
                    public static writeb(thefile: number /*long*/, buf: java.nio.ByteBuffer, offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Write data to the specified file, ensuring that all of the data is
                     * written before returning.
                     * Write will write up to the specified number of
                     * bytes, but never more.  If the OS cannot write that many bytes, the
                     * process/thread will block until they can be written. Exceptional
                     * error such as "out of space" or "pipe closed" will terminate with
                     * an error.
                     * It is possible for both bytes to be written and an error to
                     * be returned.  And if *bytes_written is less than nbytes, an
                     * accompanying error is _always_ returned.
                     * APR_EINTR is never returned.
                     * @param thefile The file descriptor to write to.
                     * @param buf The buffer which contains the data.
                     * @param offset Start offset in buf
                     * @param nbytes The number of bytes to write
                     * @return The number of bytes written.
                     */
                    // @ts-ignore
                    public static writeFull(thefile: number /*long*/, buf: number /*byte*/[], offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Write data to the specified file, ensuring that all of the data is
                     * written before returning.
                     * Write will write up to the specified number of
                     * bytes, but never more.  If the OS cannot write that many bytes, the
                     * process/thread will block until they can be written. Exceptional
                     * error such as "out of space" or "pipe closed" will terminate with
                     * an error.
                     * It is possible for both bytes to be written and an error to
                     * be returned.  And if *bytes_written is less than nbytes, an
                     * accompanying error is _always_ returned.
                     * APR_EINTR is never returned.
                     * @param thefile The file descriptor to write to.
                     * @param buf The direct ByteBuffer which contains the data.
                     * @param offset Start offset in buf
                     * @param nbytes The number of bytes to write.
                     * @return The number of bytes written.
                     */
                    // @ts-ignore
                    public static writeFullb(thefile: number /*long*/, buf: java.nio.ByteBuffer, offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Write data from array of byte arrays to the specified file.
                     * It is possible for both bytes to be written and an error to
                     * be returned.  APR_EINTR is never returned.
                     * apr_file_writev is available even if the underlying
                     * operating system doesn't provide writev().
                     * @param thefile The file descriptor to write to.
                     * @param vec The array from which to get the data to write to the file.
                     * @return The number of bytes written.
                     */
                    // @ts-ignore
                    public static writev(thefile: number /*long*/, vec: number /*byte*/[][]): number /*int*/
                    /**
                     * Write data from array of byte arrays to the specified file,
                     * ensuring that all of the data is written before returning.
                     * writevFull is available even if the underlying
                     * operating system doesn't provide writev().
                     * @param thefile The file descriptor to write to.
                     * @param vec The array from which to get the data to write to the file.
                     * @return The number of bytes written.
                     */
                    // @ts-ignore
                    public static writevFull(thefile: number /*long*/, vec: number /*byte*/[][]): number /*int*/
                    /**
                     * Read data from the specified file.
                     * apr_file_read will read up to the specified number of
                     * bytes, but never more.  If there isn't enough data to fill that
                     * number of bytes, all of the available data is read.  The third
                     * argument is modified to reflect the number of bytes read.  If a
                     * char was put back into the stream via ungetc, it will be the first
                     * character returned.
                     * It is not possible for both bytes to be read and an APR_EOF
                     * or other error to be returned.  APR_EINTR is never returned.
                     * @param thefile The file descriptor to read from.
                     * @param buf The buffer to store the data to.
                     * @param offset Start offset in buf
                     * @param nbytes The number of bytes to read
                     * @return the number of bytes read.
                     */
                    // @ts-ignore
                    public static read(thefile: number /*long*/, buf: number /*byte*/[], offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Read data from the specified file.
                     * apr_file_read will read up to the specified number of
                     * bytes, but never more.  If there isn't enough data to fill that
                     * number of bytes, all of the available data is read.  The third
                     * argument is modified to reflect the number of bytes read.  If a
                     * char was put back into the stream via ungetc, it will be the first
                     * character returned.
                     * It is not possible for both bytes to be read and an APR_EOF
                     * or other error to be returned.  APR_EINTR is never returned.
                     * @param thefile The file descriptor to read from.
                     * @param buf The direct Byte buffer to store the data to.
                     * @param offset Start offset in buf
                     * @param nbytes The number of bytes to read.
                     * @return the number of bytes read.
                     */
                    // @ts-ignore
                    public static readb(thefile: number /*long*/, buf: java.nio.ByteBuffer, offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Read data from the specified file, ensuring that the buffer is filled
                     * before returning.
                     * Read will read up to the specified number of
                     * bytes, but never more.  If there isn't enough data to fill that
                     * number of bytes, then the process/thread will block until it is
                     * available or EOF is reached.  If a char was put back into the
                     * stream via ungetc, it will be the first character returned.
                     * It is possible for both bytes to be read and an error to be
                     * returned.  And if *bytes_read is less than nbytes, an accompanying
                     * error is _always_ returned.
                     * APR_EINTR is never returned.
                     * @param thefile The file descriptor to read from.
                     * @param buf The buffer to store the data to.
                     * @param offset Start offset in buf
                     * @param nbytes The number of bytes to read
                     * @return the number of bytes read.
                     */
                    // @ts-ignore
                    public static readFull(thefile: number /*long*/, buf: number /*byte*/[], offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Read data from the specified file, ensuring that the buffer is filled
                     * before returning.
                     * Read will read up to the specified number of
                     * bytes, but never more.  If there isn't enough data to fill that
                     * number of bytes, then the process/thread will block until it is
                     * available or EOF is reached.  If a char was put back into the
                     * stream via ungetc, it will be the first character returned.
                     * It is possible for both bytes to be read and an error to be
                     * returned.  And if *bytes_read is less than nbytes, an accompanying
                     * error is _always_ returned.
                     * APR_EINTR is never returned.
                     * @param thefile The file descriptor to read from.
                     * @param buf The direct ByteBuffer to store the data to.
                     * @param offset Start offset in buf
                     * @param nbytes The number of bytes to read.
                     * @return the number of bytes read.
                     */
                    // @ts-ignore
                    public static readFullb(thefile: number /*long*/, buf: java.nio.ByteBuffer, offset: number /*int*/, nbytes: number /*int*/): number /*int*/
                    /**
                     * Read a string from the specified file.
                     * The buffer will be NUL-terminated if any characters are stored.
                     * @param buf The buffer to store the string in.
                     * @param offset Start offset in buf
                     * @param thefile The file descriptor to read from
                     * @return the number of bytes read.
                     */
                    // @ts-ignore
                    public static gets(buf: number /*byte*/[], offset: number /*int*/, thefile: number /*long*/): number /*int*/
                    /**
                     * Read a character from the specified file.
                     * @param thefile The file descriptor to read from
                     * @return The read character
                     * @throws Error If an error occurs reading the file
                     */
                    // @ts-ignore
                    public static getc(thefile: number /*long*/): number /*int*/
                    /**
                     * Are we at the end of the file
                     * @param fptr The apr file we are testing.
                     * @return Returns APR_EOF if we are at the end of file, APR_SUCCESS otherwise.
                     */
                    // @ts-ignore
                    public static eof(fptr: number /*long*/): number /*int*/
                    /**
                     * Return the file name of the current file.
                     * @param thefile The currently open file.
                     * @return the name
                     */
                    // @ts-ignore
                    public static nameGet(thefile: number /*long*/): string
                    /**
                     * Set the specified file's permission bits.
                     * <br><b>Warning :</b> Some platforms may not be able to apply all of the
                     * available permission bits; APR_INCOMPLETE will be returned if some
                     * permissions are specified which could not be set.
                     * <br><b>Warning :</b> Platforms which do not implement this feature will return
                     * APR_ENOTIMPL.
                     * @param fname The file (name) to apply the permissions to.
                     * @param perms The permission bits to apply to the file.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static permsSet(fname: java.lang.String | string, perms: number /*int*/): number /*int*/
                    /**
                     * Set attributes of the specified file.
                     * This function should be used in preference to explicit manipulation
                     * of the file permissions, because the operations to provide these
                     * attributes are platform specific and may involve more than simply
                     * setting permission bits.
                     * <br><b>Warning :</b> Platforms which do not implement this feature will return
                     * APR_ENOTIMPL.
                     * @param fname The full path to the file (using / on all systems)
                     * @param attributes Or'd combination of
                     *  <PRE>
                     *             APR_FILE_ATTR_READONLY   - make the file readonly
                     *             APR_FILE_ATTR_EXECUTABLE - make the file executable
                     *             APR_FILE_ATTR_HIDDEN     - make the file hidden
                     *  </PRE>
                     * @param mask Mask of valid bits in attributes.
                     * @param pool the pool to use.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static attrsSet(fname: java.lang.String | string, attributes: number /*int*/, mask: number /*int*/, pool: number /*long*/): number /*int*/
                    /**
                     * Set the mtime of the specified file.
                     * <br><b>Warning :</b> Platforms which do not implement this feature will return
                     * APR_ENOTIMPL.
                     * @param fname The full path to the file (using / on all systems)
                     * @param mtime The mtime to apply to the file in microseconds
                     * @param pool The pool to use.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static mtimeSet(fname: java.lang.String | string, mtime: number /*long*/, pool: number /*long*/): number /*int*/
                    /**
                     * Establish a lock on the specified, open file. The lock may be advisory
                     * or mandatory, at the discretion of the platform. The lock applies to
                     * the file as a whole, rather than a specific range. Locks are established
                     * on a per-thread/process basis; a second lock by the same thread will not
                     * block.
                     * @param thefile The file to lock.
                     * @param type The type of lock to establish on the file.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static lock(thefile: number /*long*/, type: number /*int*/): number /*int*/
                    /**
                     * Remove any outstanding locks on the file.
                     * @param thefile The file to unlock.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static unlock(thefile: number /*long*/): number /*int*/
                    /**
                     * Retrieve the flags that were passed into apr_file_open()
                     * when the file was opened.
                     * @param file The file to retrieve flags.
                     * @return the flags
                     */
                    // @ts-ignore
                    public static flagsGet(file: number /*long*/): number /*int*/
                    /**
                     * Truncate the file's length to the specified offset
                     * @param fp The file to truncate
                     * @param offset The offset to truncate to.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static trunc(fp: number /*long*/, offset: number /*long*/): number /*int*/
                    /**
                     * Create an anonymous pipe.
                     * @param io io[0] The file descriptors to use as input to the pipe.
                     *            io[1] The file descriptor to use as output from the pipe.
                     * @param pool The pool to operate on.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static pipeCreate(io: number /*long*/[], pool: number /*long*/): number /*int*/
                    /**
                     * Get the timeout value for a pipe or manipulate the blocking state.
                     * @param thepipe The pipe we are getting a timeout for.
                     * @return The current timeout value in microseconds.
                     * @throws Error If an error occurs
                     */
                    // @ts-ignore
                    public static pipeTimeoutGet(thepipe: number /*long*/): number /*long*/
                    /**
                     * Set the timeout value for a pipe or manipulate the blocking state.
                     * @param thepipe The pipe we are setting a timeout on.
                     * @param timeout The timeout value in microseconds.  Values &lt; 0 mean
                     *         wait forever, 0 means do not wait at all.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static pipeTimeoutSet(thepipe: number /*long*/, timeout: number /*long*/): number /*int*/
                    /**
                     * Duplicate the specified file descriptor.
                     * @param newFile The file to duplicate.
                     *  newFile must point to a valid apr_file_t, or point to NULL.
                     * @param oldFile The file to duplicate.
                     * @param pool The pool to use for the new file.
                     * @return Duplicated file structure.
                     * @throws Error If an error occurs reading the file descriptor
                     */
                    // @ts-ignore
                    public static dup(newFile: number /*long*/, oldFile: number /*long*/, pool: number /*long*/): number /*long*/
                    /**
                     * Duplicate the specified file descriptor and close the original.
                     * @param newFile The old file that is to be closed and reused.
                     *  newFile MUST point at a valid apr_file_t. It cannot be NULL.
                     * @param oldFile The file to duplicate.
                     * @param pool The pool to use for the new file.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static dup2(newFile: number /*long*/, oldFile: number /*long*/, pool: number /*long*/): number /*int*/
                    /**
                     * Get the specified file's stats.  The file is specified by filename,
                     * instead of using a pre-opened file.
                     * @param finfo Where to store the information about the file, which is
                     *  never touched if the call fails.
                     * @param fname The name of the file to stat.
                     * @param wanted The desired apr_finfo_t fields, as a bit flag of APR_FINFO_ values
                     * @param pool the pool to use to allocate the new file.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static stat(finfo: org.apache.tomcat.jni.FileInfo, fname: java.lang.String | string, wanted: number /*int*/, pool: number /*long*/): number /*int*/
                    /**
                     * Get the specified file's stats.  The file is specified by filename,
                     * instead of using a pre-opened file.
                     * @param fname The name of the file to stat.
                     * @param wanted The desired apr_finfo_t fields, as a bit flag of APR_FINFO_ values
                     * @param pool the pool to use to allocate the new file.
                     * @return FileInfo object.
                     */
                    // @ts-ignore
                    public static getStat(fname: java.lang.String | string, wanted: number /*int*/, pool: number /*long*/): org.apache.tomcat.jni.FileInfo
                    /**
                     * Get the specified file's stats.
                     * @param finfo Where to store the information about the file.
                     * @param wanted The desired apr_finfo_t fields, as a bit flag of APR_FINFO_ values
                     * @param thefile The file to get information about.
                     * @return the operation status
                     */
                    // @ts-ignore
                    public static infoGet(finfo: org.apache.tomcat.jni.FileInfo, wanted: number /*int*/, thefile: number /*long*/): number /*int*/
                    /**
                     * Get the specified file's stats.
                     * @param wanted The desired apr_finfo_t fields, as a bit flag of APR_FINFO_ values
                     * @param thefile The file to get information about.
                     * @return FileInfo object.
                     */
                    // @ts-ignore
                    public static getInfo(wanted: number /*int*/, thefile: number /*long*/): org.apache.tomcat.jni.FileInfo
                }
            }
        }
    }
}
