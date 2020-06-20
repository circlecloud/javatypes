declare namespace java {
    namespace nio {
        namespace file {
            namespace spi {
                /**
                 * Service-provider class for file systems. The methods defined by the {@link
                 * java.nio.file.Files} class will typically delegate to an instance of this
                 * class.
                 * <p> A file system provider is a concrete implementation of this class that
                 * implements the abstract methods defined by this class. A provider is
                 * identified by a {@code URI} {@link #getScheme() scheme}. The default provider
                 * is identified by the URI scheme "file". It creates the {@link FileSystem} that
                 * provides access to the file systems accessible to the Java virtual machine.
                 * The {@link FileSystems} class defines how file system providers are located
                 * and loaded. The default provider is typically a system-default provider but
                 * may be overridden if the system property {@code
                 * java.nio.file.spi.DefaultFileSystemProvider} is set. In that case, the
                 * provider has a one argument constructor whose formal parameter type is {@code
                 * FileSystemProvider}. All other providers have a zero argument constructor
                 * that initializes the provider.
                 * <p> A provider is a factory for one or more {@link FileSystem} instances. Each
                 * file system is identified by a {@code URI} where the URI's scheme matches
                 * the provider's {@link #getScheme scheme}. The default file system, for example,
                 * is identified by the URI {@code "file:///"}. A memory-based file system,
                 * for example, may be identified by a URI such as {@code "memory:///?name=logfs"}.
                 * The {@link #newFileSystem newFileSystem} method may be used to create a file
                 * system, and the {@link #getFileSystem getFileSystem} method may be used to
                 * obtain a reference to an existing file system created by the provider. Where
                 * a provider is the factory for a single file system then it is provider dependent
                 * if the file system is created when the provider is initialized, or later when
                 * the {@code newFileSystem} method is invoked. In the case of the default
                 * provider, the {@code FileSystem} is created when the provider is initialized.
                 * <p> All of the methods in this class are safe for use by multiple concurrent
                 * threads.
                 * @since 1.7
                 */
                // @ts-ignore
                class FileSystemProvider extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     * <p> During construction a provider may safely access files associated
                     * with the default provider but care needs to be taken to avoid circular
                     * loading of other installed providers. If circular loading of installed
                     * providers is detected then an unspecified error is thrown.
                     * @throws SecurityException
                     *           If a security manager has been installed and it denies
                     *           {#link RuntimePermission}<tt>("fileSystemProvider")</tt>
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns a list of the installed file system providers.
                     * <p> The first invocation of this method causes the default provider to be
                     * initialized (if not already initialized) and loads any other installed
                     * providers as described by the {@link FileSystems} class.
                     * @return An unmodifiable list of the installed file system providers. The
                     *           list contains at least one element, that is the default file
                     *           system provider
                     * @throws ServiceConfigurationError
                     *           When an error occurs while loading a service provider
                     */
                    // @ts-ignore
                    installedProviders(): java.util.List<java.nio.file.spi.FileSystemProvider>
                    /**
                     * Returns the URI scheme that identifies this provider.
                     * @return The URI scheme
                     */
                    // @ts-ignore
                    abstract getScheme(): java.lang.String
                    /**
                     * Constructs a new {@code FileSystem} object identified by a URI. This
                     * method is invoked by the {@link FileSystems#newFileSystem(URI,Map)}
                     * method to open a new file system identified by a URI.
                     * <p> The {@code uri} parameter is an absolute, hierarchical URI, with a
                     * scheme equal (without regard to case) to the scheme supported by this
                     * provider. The exact form of the URI is highly provider dependent. The
                     * {@code env} parameter is a map of provider specific properties to configure
                     * the file system.
                     * <p> This method throws {@link FileSystemAlreadyExistsException} if the
                     * file system already exists because it was previously created by an
                     * invocation of this method. Once a file system is {@link
                     * java.nio.file.FileSystem#close closed} it is provider-dependent if the
                     * provider allows a new file system to be created with the same URI as a
                     * file system it previously created.
                     * @param uri
                     *           URI reference
                     * @param env
                     *           A map of provider specific properties to configure the file system;
                     *           may be empty
                     * @return A new file system
                     * @throws IllegalArgumentException
                     *           If the pre-conditions for the {#code uri} parameter aren't met,
                     *           or the {@code env} parameter does not contain properties required
                     *           by the provider, or a property value is invalid
                     * @throws IOException
                     *           An I/O error occurs creating the file system
                     * @throws SecurityException
                     *           If a security manager is installed and it denies an unspecified
                     *           permission required by the file system provider implementation
                     * @throws FileSystemAlreadyExistsException
                     *           If the file system has already been created
                     */
                    // @ts-ignore
                    abstract newFileSystem(uri: java.net.URI, env: java.util.Map<java.lang.String, any>): java.nio.file.FileSystem
                    /**
                     * Returns an existing {@code FileSystem} created by this provider.
                     * <p> This method returns a reference to a {@code FileSystem} that was
                     * created by invoking the {@link #newFileSystem(URI,Map) newFileSystem(URI,Map)}
                     * method. File systems created the {@link #newFileSystem(Path,Map)
                     * newFileSystem(Path,Map)} method are not returned by this method.
                     * The file system is identified by its {@code URI}. Its exact form
                     * is highly provider dependent. In the case of the default provider the URI's
                     * path component is {@code "/"} and the authority, query and fragment components
                     * are undefined (Undefined components are represented by {@code null}).
                     * <p> Once a file system created by this provider is {@link
                     * java.nio.file.FileSystem#close closed} it is provider-dependent if this
                     * method returns a reference to the closed file system or throws {@link
                     * FileSystemNotFoundException}. If the provider allows a new file system to
                     * be created with the same URI as a file system it previously created then
                     * this method throws the exception if invoked after the file system is
                     * closed (and before a new instance is created by the {@link #newFileSystem
                     * newFileSystem} method).
                     * <p> If a security manager is installed then a provider implementation
                     * may require to check a permission before returning a reference to an
                     * existing file system. In the case of the {@link FileSystems#getDefault
                     * default} file system, no permission check is required.
                     * @param uri
                     *           URI reference
                     * @return The file system
                     * @throws IllegalArgumentException
                     *           If the pre-conditions for the {#code uri} parameter aren't met
                     * @throws FileSystemNotFoundException
                     *           If the file system does not exist
                     * @throws SecurityException
                     *           If a security manager is installed and it denies an unspecified
                     *           permission.
                     */
                    // @ts-ignore
                    abstract getFileSystem(uri: java.net.URI): java.nio.file.FileSystem
                    /**
                     * Return a {@code Path} object by converting the given {@link URI}. The
                     * resulting {@code Path} is associated with a {@link FileSystem} that
                     * already exists or is constructed automatically.
                     * <p> The exact form of the URI is file system provider dependent. In the
                     * case of the default provider, the URI scheme is {@code "file"} and the
                     * given URI has a non-empty path component, and undefined query, and
                     * fragment components. The resulting {@code Path} is associated with the
                     * default {@link FileSystems#getDefault default} {@code FileSystem}.
                     * <p> If a security manager is installed then a provider implementation
                     * may require to check a permission. In the case of the {@link
                     * FileSystems#getDefault default} file system, no permission check is
                     * required.
                     * @param uri
                     *           The URI to convert
                     * @return The resulting {#code Path}
                     * @throws IllegalArgumentException
                     *           If the URI scheme does not identify this provider or other
                     *           preconditions on the uri parameter do not hold
                     * @throws FileSystemNotFoundException
                     *           The file system, identified by the URI, does not exist and
                     *           cannot be created automatically
                     * @throws SecurityException
                     *           If a security manager is installed and it denies an unspecified
                     *           permission.
                     */
                    // @ts-ignore
                    abstract getPath(uri: java.net.URI): java.nio.file.Path
                    /**
                     * Constructs a new {@code FileSystem} to access the contents of a file as a
                     * file system.
                     * <p> This method is intended for specialized providers of pseudo file
                     * systems where the contents of one or more files is treated as a file
                     * system. The {@code env} parameter is a map of provider specific properties
                     * to configure the file system.
                     * <p> If this provider does not support the creation of such file systems
                     * or if the provider does not recognize the file type of the given file then
                     * it throws {@code UnsupportedOperationException}. The default implementation
                     * of this method throws {@code UnsupportedOperationException}.
                     * @param path
                     *           The path to the file
                     * @param env
                     *           A map of provider specific properties to configure the file system;
                     *           may be empty
                     * @return A new file system
                     * @throws UnsupportedOperationException
                     *           If this provider does not support access to the contents as a
                     *           file system or it does not recognize the file type of the
                     *           given file
                     * @throws IllegalArgumentException
                     *           If the {#code env} parameter does not contain properties required
                     *           by the provider, or a property value is invalid
                     * @throws IOException
                     *           If an I/O error occurs
                     * @throws SecurityException
                     *           If a security manager is installed and it denies an unspecified
                     *           permission.
                     */
                    // @ts-ignore
                    newFileSystem(path: java.nio.file.Path, env: java.util.Map<java.lang.String, any>): java.nio.file.FileSystem
                    /**
                     * Opens a file, returning an input stream to read from the file. This
                     * method works in exactly the manner specified by the {@link
                     * Files#newInputStream} method.
                     * <p> The default implementation of this method opens a channel to the file
                     * as if by invoking the {@link #newByteChannel} method and constructs a
                     * stream that reads bytes from the channel. This method should be overridden
                     * where appropriate.
                     * @param path
                     *           the path to the file to open
                     * @param options
                     *           options specifying how the file is opened
                     * @return a new input stream
                     * @throws IllegalArgumentException
                     *           if an invalid combination of options is specified
                     * @throws UnsupportedOperationException
                     *           if an unsupported option is specified
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkRead(String) checkRead}
                     *           method is invoked to check read access to the file.
                     */
                    // @ts-ignore
                    newInputStream(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): java.io.InputStream
                    /**
                     * Opens or creates a file, returning an output stream that may be used to
                     * write bytes to the file. This method works in exactly the manner
                     * specified by the {@link Files#newOutputStream} method.
                     * <p> The default implementation of this method opens a channel to the file
                     * as if by invoking the {@link #newByteChannel} method and constructs a
                     * stream that writes bytes to the channel. This method should be overridden
                     * where appropriate.
                     * @param path
                     *           the path to the file to open or create
                     * @param options
                     *           options specifying how the file is opened
                     * @return a new output stream
                     * @throws IllegalArgumentException
                     *           if {#code options} contains an invalid combination of options
                     * @throws UnsupportedOperationException
                     *           if an unsupported option is specified
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkWrite(String) checkWrite}
                     *           method is invoked to check write access to the file. The {@link
                     *           SecurityManager#checkDelete(String) checkDelete} method is
                     *           invoked to check delete access if the file is opened with the
                     *           {@code DELETE_ON_CLOSE} option.
                     */
                    // @ts-ignore
                    newOutputStream(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): java.io.OutputStream
                    /**
                     * Opens or creates a file for reading and/or writing, returning a file
                     * channel to access the file. This method works in exactly the manner
                     * specified by the {@link FileChannel#open(Path,Set,FileAttribute[])
                     * FileChannel.open} method. A provider that does not support all the
                     * features required to construct a file channel throws {@code
                     * UnsupportedOperationException}. The default provider is required to
                     * support the creation of file channels. When not overridden, the default
                     * implementation throws {@code UnsupportedOperationException}.
                     * @param path
                     *           the path of the file to open or create
                     * @param options
                     *           options specifying how the file is opened
                     * @param attrs
                     *           an optional list of file attributes to set atomically when
                     *           creating the file
                     * @return a new file channel
                     * @throws IllegalArgumentException
                     *           If the set contains an invalid combination of options
                     * @throws UnsupportedOperationException
                     *           If this provider that does not support creating file channels,
                     *           or an unsupported open option or file attribute is specified
                     * @throws IOException
                     *           If an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default file system, the {#link
                     *           SecurityManager#checkRead(String)} method is invoked to check
                     *           read access if the file is opened for reading. The {@link
                     *           SecurityManager#checkWrite(String)} method is invoked to check
                     *           write access if the file is opened for writing
                     */
                    // @ts-ignore
                    newFileChannel(path: java.nio.file.Path, options: Array<java.nio.file.OpenOption>, ...attrs: java.nio.file.attribute.FileAttribute[]): java.nio.channels.FileChannel
                    /**
                     * Opens or creates a file for reading and/or writing, returning an
                     * asynchronous file channel to access the file. This method works in
                     * exactly the manner specified by the {@link
                     * AsynchronousFileChannel#open(Path,Set,ExecutorService,FileAttribute[])
                     * AsynchronousFileChannel.open} method.
                     * A provider that does not support all the features required to construct
                     * an asynchronous file channel throws {@code UnsupportedOperationException}.
                     * The default provider is required to support the creation of asynchronous
                     * file channels. When not overridden, the default implementation of this
                     * method throws {@code UnsupportedOperationException}.
                     * @param path
                     *           the path of the file to open or create
                     * @param options
                     *           options specifying how the file is opened
                     * @param executor
                     *           the thread pool or {#code null} to associate the channel with
                     *           the default thread pool
                     * @param attrs
                     *           an optional list of file attributes to set atomically when
                     *           creating the file
                     * @return a new asynchronous file channel
                     * @throws IllegalArgumentException
                     *           If the set contains an invalid combination of options
                     * @throws UnsupportedOperationException
                     *           If this provider that does not support creating asynchronous file
                     *           channels, or an unsupported open option or file attribute is
                     *           specified
                     * @throws IOException
                     *           If an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default file system, the {#link
                     *           SecurityManager#checkRead(String)} method is invoked to check
                     *           read access if the file is opened for reading. The {@link
                     *           SecurityManager#checkWrite(String)} method is invoked to check
                     *           write access if the file is opened for writing
                     */
                    // @ts-ignore
                    newAsynchronousFileChannel(path: java.nio.file.Path, options: Array<java.nio.file.OpenOption>, executor: java.util.concurrent.ExecutorService, ...attrs: java.nio.file.attribute.FileAttribute[]): java.nio.channels.AsynchronousFileChannel
                    /**
                     * Opens or creates a file, returning a seekable byte channel to access the
                     * file. This method works in exactly the manner specified by the {@link
                     * Files#newByteChannel(Path,Set,FileAttribute[])} method.
                     * @param path
                     *           the path to the file to open or create
                     * @param options
                     *           options specifying how the file is opened
                     * @param attrs
                     *           an optional list of file attributes to set atomically when
                     *           creating the file
                     * @return a new seekable byte channel
                     * @throws IllegalArgumentException
                     *           if the set contains an invalid combination of options
                     * @throws UnsupportedOperationException
                     *           if an unsupported open option is specified or the array contains
                     *           attributes that cannot be set atomically when creating the file
                     * @throws FileAlreadyExistsException
                     *           if a file of that name already exists and the {#link
                     *           StandardOpenOption#CREATE_NEW CREATE_NEW} option is specified
                     *           <i>(optional specific exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkRead(String) checkRead}
                     *           method is invoked to check read access to the path if the file is
                     *           opened for reading. The {@link SecurityManager#checkWrite(String)
                     *           checkWrite} method is invoked to check write access to the path
                     *           if the file is opened for writing. The {@link
                     *           SecurityManager#checkDelete(String) checkDelete} method is
                     *           invoked to check delete access if the file is opened with the
                     *           {@code DELETE_ON_CLOSE} option.
                     */
                    // @ts-ignore
                    abstract newByteChannel(path: java.nio.file.Path, options: Array<java.nio.file.OpenOption>, ...attrs: java.nio.file.attribute.FileAttribute[]): java.nio.channels.SeekableByteChannel
                    /**
                     * Opens a directory, returning a {@code DirectoryStream} to iterate over
                     * the entries in the directory. This method works in exactly the manner
                     * specified by the {@link
                     * Files#newDirectoryStream(java.nio.file.Path, java.nio.file.DirectoryStream.Filter)}
                     * method.
                     * @param dir
                     *           the path to the directory
                     * @param filter
                     *           the directory stream filter
                     * @return a new and open {#code DirectoryStream} object
                     * @throws NotDirectoryException
                     *           if the file could not otherwise be opened because it is not
                     *           a directory <i>(optional specific exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkRead(String) checkRead}
                     *           method is invoked to check read access to the directory.
                     */
                    // @ts-ignore
                    abstract newDirectoryStream(dir: java.nio.file.Path, filter: java.nio.file.DirectoryStream.Filter<any super java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>
                    /**
                     * Creates a new directory. This method works in exactly the manner
                     * specified by the {@link Files#createDirectory} method.
                     * @param dir
                     *           the directory to create
                     * @param attrs
                     *           an optional list of file attributes to set atomically when
                     *           creating the directory
                     * @throws UnsupportedOperationException
                     *           if the array contains an attribute that cannot be set atomically
                     *           when creating the directory
                     * @throws FileAlreadyExistsException
                     *           if a directory could not otherwise be created because a file of
                     *           that name already exists <i>(optional specific exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs or the parent directory does not exist
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkWrite(String) checkWrite}
                     *           method is invoked to check write access to the new directory.
                     */
                    // @ts-ignore
                    abstract createDirectory(dir: java.nio.file.Path, ...attrs: java.nio.file.attribute.FileAttribute[]): void
                    /**
                     * Creates a symbolic link to a target. This method works in exactly the
                     * manner specified by the {@link Files#createSymbolicLink} method.
                     * <p> The default implementation of this method throws {@code
                     * UnsupportedOperationException}.
                     * @param link
                     *           the path of the symbolic link to create
                     * @param target
                     *           the target of the symbolic link
                     * @param attrs
                     *           the array of attributes to set atomically when creating the
                     *           symbolic link
                     * @throws UnsupportedOperationException
                     *           if the implementation does not support symbolic links or the
                     *           array contains an attribute that cannot be set atomically when
                     *           creating the symbolic link
                     * @throws FileAlreadyExistsException
                     *           if a file with the name already exists <i>(optional specific
                     *           exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager
                     *           is installed, it denies {#link LinkPermission}<tt>("symbolic")</tt>
                     *           or its {@link SecurityManager#checkWrite(String) checkWrite}
                     *           method denies write access to the path of the symbolic link.
                     */
                    // @ts-ignore
                    createSymbolicLink(link: java.nio.file.Path, target: java.nio.file.Path, ...attrs: java.nio.file.attribute.FileAttribute[]): void
                    /**
                     * Creates a new link (directory entry) for an existing file. This method
                     * works in exactly the manner specified by the {@link Files#createLink}
                     * method.
                     * <p> The default implementation of this method throws {@code
                     * UnsupportedOperationException}.
                     * @param link
                     *           the link (directory entry) to create
                     * @param existing
                     *           a path to an existing file
                     * @throws UnsupportedOperationException
                     *           if the implementation does not support adding an existing file
                     *           to a directory
                     * @throws FileAlreadyExistsException
                     *           if the entry could not otherwise be created because a file of
                     *           that name already exists <i>(optional specific exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager
                     *           is installed, it denies {#link LinkPermission}<tt>("hard")</tt>
                     *           or its {@link SecurityManager#checkWrite(String) checkWrite}
                     *           method denies write access to either the  link or the
                     *           existing file.
                     */
                    // @ts-ignore
                    createLink(link: java.nio.file.Path, existing: java.nio.file.Path): void
                    /**
                     * Deletes a file. This method works in exactly the  manner specified by the
                     * {@link Files#delete} method.
                     * @param path
                     *           the path to the file to delete
                     * @throws NoSuchFileException
                     *           if the file does not exist <i>(optional specific exception)</i>
                     * @throws DirectoryNotEmptyException
                     *           if the file is a directory and could not otherwise be deleted
                     *           because the directory is not empty <i>(optional specific
                     *           exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkDelete(String)} method
                     *           is invoked to check delete access to the file
                     */
                    // @ts-ignore
                    abstract delete(path: java.nio.file.Path): void
                    /**
                     * Deletes a file if it exists. This method works in exactly the manner
                     * specified by the {@link Files#deleteIfExists} method.
                     * <p> The default implementation of this method simply invokes {@link
                     * #delete} ignoring the {@code NoSuchFileException} when the file does not
                     * exist. It may be overridden where appropriate.
                     * @param path
                     *           the path to the file to delete
                     * @return {#code true} if the file was deleted by this method; {@code
                     *           false} if the file could not be deleted because it did not
                     *           exist
                     * @throws DirectoryNotEmptyException
                     *           if the file is a directory and could not otherwise be deleted
                     *           because the directory is not empty <i>(optional specific
                     *           exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkDelete(String)} method
                     *           is invoked to check delete access to the file
                     */
                    // @ts-ignore
                    deleteIfExists(path: java.nio.file.Path): boolean
                    /**
                     * Reads the target of a symbolic link. This method works in exactly the
                     * manner specified by the {@link Files#readSymbolicLink} method.
                     * <p> The default implementation of this method throws {@code
                     * UnsupportedOperationException}.
                     * @param link
                     *           the path to the symbolic link
                     * @return The target of the symbolic link
                     * @throws UnsupportedOperationException
                     *           if the implementation does not support symbolic links
                     * @throws NotLinkException
                     *           if the target could otherwise not be read because the file
                     *           is not a symbolic link <i>(optional specific exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager
                     *           is installed, it checks that {#code FilePermission} has been
                     *           granted with the "{@code readlink}" action to read the link.
                     */
                    // @ts-ignore
                    readSymbolicLink(link: java.nio.file.Path): java.nio.file.Path
                    /**
                     * Copy a file to a target file. This method works in exactly the manner
                     * specified by the {@link Files#copy(Path,Path,CopyOption[])} method
                     * except that both the source and target paths must be associated with
                     * this provider.
                     * @param source
                     *           the path to the file to copy
                     * @param target
                     *           the path to the target file
                     * @param options
                     *           options specifying how the copy should be done
                     * @throws UnsupportedOperationException
                     *           if the array contains a copy option that is not supported
                     * @throws FileAlreadyExistsException
                     *           if the target file exists but cannot be replaced because the
                     *           {#code REPLACE_EXISTING} option is not specified <i>(optional
                     *           specific exception)</i>
                     * @throws DirectoryNotEmptyException
                     *           the {#code REPLACE_EXISTING} option is specified but the file
                     *           cannot be replaced because it is a non-empty directory
                     *           <i>(optional specific exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkRead(String) checkRead}
                     *           method is invoked to check read access to the source file, the
                     *           {@link SecurityManager#checkWrite(String) checkWrite} is invoked
                     *           to check write access to the target file. If a symbolic link is
                     *           copied the security manager is invoked to check {@link
                     *           LinkPermission}{@code ("symbolic")}.
                     */
                    // @ts-ignore
                    abstract copy(source: java.nio.file.Path, target: java.nio.file.Path, ...options: java.nio.file.CopyOption[]): void
                    /**
                     * Move or rename a file to a target file. This method works in exactly the
                     * manner specified by the {@link Files#move} method except that both the
                     * source and target paths must be associated with this provider.
                     * @param source
                     *           the path to the file to move
                     * @param target
                     *           the path to the target file
                     * @param options
                     *           options specifying how the move should be done
                     * @throws UnsupportedOperationException
                     *           if the array contains a copy option that is not supported
                     * @throws FileAlreadyExistsException
                     *           if the target file exists but cannot be replaced because the
                     *           {#code REPLACE_EXISTING} option is not specified <i>(optional
                     *           specific exception)</i>
                     * @throws DirectoryNotEmptyException
                     *           the {#code REPLACE_EXISTING} option is specified but the file
                     *           cannot be replaced because it is a non-empty directory
                     *           <i>(optional specific exception)</i>
                     * @throws AtomicMoveNotSupportedException
                     *           if the options array contains the {#code ATOMIC_MOVE} option but
                     *           the file cannot be moved as an atomic file system operation.
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkWrite(String) checkWrite}
                     *           method is invoked to check write access to both the source and
                     *           target file.
                     */
                    // @ts-ignore
                    abstract move(source: java.nio.file.Path, target: java.nio.file.Path, ...options: java.nio.file.CopyOption[]): void
                    /**
                     * Tests if two paths locate the same file. This method works in exactly the
                     * manner specified by the {@link Files#isSameFile} method.
                     * @param path
                     *           one path to the file
                     * @param path2
                     *           the other path
                     * @return {#code true} if, and only if, the two paths locate the same file
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkRead(String) checkRead}
                     *           method is invoked to check read access to both files.
                     */
                    // @ts-ignore
                    abstract isSameFile(path: java.nio.file.Path, path2: java.nio.file.Path): boolean
                    /**
                     * Tells whether or not a file is considered <em>hidden</em>. This method
                     * works in exactly the manner specified by the {@link Files#isHidden}
                     * method.
                     * <p> This method is invoked by the {@link Files#isHidden isHidden} method.
                     * @param path
                     *           the path to the file to test
                     * @return {#code true} if the file is considered hidden
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkRead(String) checkRead}
                     *           method is invoked to check read access to the file.
                     */
                    // @ts-ignore
                    abstract isHidden(path: java.nio.file.Path): boolean
                    /**
                     * Returns the {@link FileStore} representing the file store where a file
                     * is located. This method works in exactly the manner specified by the
                     * {@link Files#getFileStore} method.
                     * @param path
                     *           the path to the file
                     * @return the file store where the file is stored
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkRead(String) checkRead}
                     *           method is invoked to check read access to the file, and in
                     *           addition it checks {@link RuntimePermission}<tt>
                     *           ("getFileStoreAttributes")</tt>
                     */
                    // @ts-ignore
                    abstract getFileStore(path: java.nio.file.Path): java.nio.file.FileStore
                    /**
                     * Checks the existence, and optionally the accessibility, of a file.
                     * <p> This method may be used by the {@link Files#isReadable isReadable},
                     * {@link Files#isWritable isWritable} and {@link Files#isExecutable
                     * isExecutable} methods to check the accessibility of a file.
                     * <p> This method checks the existence of a file and that this Java virtual
                     * machine has appropriate privileges that would allow it access the file
                     * according to all of access modes specified in the {@code modes} parameter
                     * as follows:
                     * <table border=1 cellpadding=5 summary="">
                     * <tr> <th>Value</th> <th>Description</th> </tr>
                     * <tr>
                     * <td> {@link AccessMode#READ READ} </td>
                     * <td> Checks that the file exists and that the Java virtual machine has
                     * permission to read the file. </td>
                     * </tr>
                     * <tr>
                     * <td> {@link AccessMode#WRITE WRITE} </td>
                     * <td> Checks that the file exists and that the Java virtual machine has
                     * permission to write to the file, </td>
                     * </tr>
                     * <tr>
                     * <td> {@link AccessMode#EXECUTE EXECUTE} </td>
                     * <td> Checks that the file exists and that the Java virtual machine has
                     * permission to {@link Runtime#exec execute} the file. The semantics
                     * may differ when checking access to a directory. For example, on UNIX
                     * systems, checking for {@code EXECUTE} access checks that the Java
                     * virtual machine has permission to search the directory in order to
                     * access file or subdirectories. </td>
                     * </tr>
                     * </table>
                     * <p> If the {@code modes} parameter is of length zero, then the existence
                     * of the file is checked.
                     * <p> This method follows symbolic links if the file referenced by this
                     * object is a symbolic link. Depending on the implementation, this method
                     * may require to read file permissions, access control lists, or other
                     * file attributes in order to check the effective access to the file. To
                     * determine the effective access to a file may require access to several
                     * attributes and so in some implementations this method may not be atomic
                     * with respect to other file system operations.
                     * @param path
                     *           the path to the file to check
                     * @param modes
                     *           The access modes to check; may have zero elements
                     * @throws UnsupportedOperationException
                     *           an implementation is required to support checking for
                     *           {#code READ}, {@code WRITE}, and {@code EXECUTE} access. This
                     *           exception is specified to allow for the {@code Access} enum to
                     *           be extended in future releases.
                     * @throws NoSuchFileException
                     *           if a file does not exist <i>(optional specific exception)</i>
                     * @throws AccessDeniedException
                     *           the requested access would be denied or the access cannot be
                     *           determined because the Java virtual machine has insufficient
                     *           privileges or other reasons. <i>(optional specific exception)</i>
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, the {#link SecurityManager#checkRead(String) checkRead}
                     *           is invoked when checking read access to the file or only the
                     *           existence of the file, the {@link SecurityManager#checkWrite(String)
                     *           checkWrite} is invoked when checking write access to the file,
                     *           and {@link SecurityManager#checkExec(String) checkExec} is invoked
                     *           when checking execute access.
                     */
                    // @ts-ignore
                    abstract checkAccess(path: java.nio.file.Path, ...modes: java.nio.file.AccessMode[]): void
                    /**
                     * Returns a file attribute view of a given type. This method works in
                     * exactly the manner specified by the {@link Files#getFileAttributeView}
                     * method.
                     * @param <V>
                     *           The {#code FileAttributeView} type
                     * @param path
                     *           the path to the file
                     * @param type
                     *           the {#code Class} object corresponding to the file attribute view
                     * @param options
                     *           options indicating how symbolic links are handled
                     * @return a file attribute view of the specified type, or {#code null} if
                     *           the attribute view type is not available
                     */
                    // @ts-ignore
                    abstract getFileAttributeView<V extends java.nio.file.attribute.FileAttributeView>(path: java.nio.file.Path, type: java.lang.Class<V>, ...options: java.nio.file.LinkOption[]): V
                    /**
                     * Reads a file's attributes as a bulk operation. This method works in
                     * exactly the manner specified by the {@link
                     * Files#readAttributes(Path,Class,LinkOption[])} method.
                     * @param <A>
                     *           The {#code BasicFileAttributes} type
                     * @param path
                     *           the path to the file
                     * @param type
                     *           the {#code Class} of the file attributes required
                     *           to read
                     * @param options
                     *           options indicating how symbolic links are handled
                     * @return the file attributes
                     * @throws UnsupportedOperationException
                     *           if an attributes of the given type are not supported
                     * @throws IOException
                     *           if an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, a security manager is
                     *           installed, its {#link SecurityManager#checkRead(String) checkRead}
                     *           method is invoked to check read access to the file
                     */
                    // @ts-ignore
                    abstract readAttributes<A extends java.nio.file.attribute.BasicFileAttributes>(path: java.nio.file.Path, type: java.lang.Class<A>, ...options: java.nio.file.LinkOption[]): A
                    /**
                     * Reads a set of file attributes as a bulk operation. This method works in
                     * exactly the manner specified by the {@link
                     * Files#readAttributes(Path,String,LinkOption[])} method.
                     * @param path
                     *           the path to the file
                     * @param attributes
                     *           the attributes to read
                     * @param options
                     *           options indicating how symbolic links are handled
                     * @return a map of the attributes returned; may be empty. The map's keys
                     *           are the attribute names, its values are the attribute values
                     * @throws UnsupportedOperationException
                     *           if the attribute view is not available
                     * @throws IllegalArgumentException
                     *           if no attributes are specified or an unrecognized attributes is
                     *           specified
                     * @throws IOException
                     *           If an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, its {#link SecurityManager#checkRead(String) checkRead}
                     *           method denies read access to the file. If this method is invoked
                     *           to read security sensitive attributes then the security manager
                     *           may be invoke to check for additional permissions.
                     */
                    // @ts-ignore
                    abstract readAttributes(path: java.nio.file.Path, attributes: string, ...options: java.nio.file.LinkOption[]): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Sets the value of a file attribute. This method works in exactly the
                     * manner specified by the {@link Files#setAttribute} method.
                     * @param path
                     *           the path to the file
                     * @param attribute
                     *           the attribute to set
                     * @param value
                     *           the attribute value
                     * @param options
                     *           options indicating how symbolic links are handled
                     * @throws UnsupportedOperationException
                     *           if the attribute view is not available
                     * @throws IllegalArgumentException
                     *           if the attribute name is not specified, or is not recognized, or
                     *           the attribute value is of the correct type but has an
                     *           inappropriate value
                     * @throws ClassCastException
                     *           If the attribute value is not of the expected type or is a
                     *           collection containing elements that are not of the expected
                     *           type
                     * @throws IOException
                     *           If an I/O error occurs
                     * @throws SecurityException
                     *           In the case of the default provider, and a security manager is
                     *           installed, its {#link SecurityManager#checkWrite(String) checkWrite}
                     *           method denies write access to the file. If this method is invoked
                     *           to set security sensitive attributes then the security manager
                     *           may be invoked to check for additional permissions.
                     */
                    // @ts-ignore
                    abstract setAttribute(path: java.nio.file.Path, attribute: string, value: any, ...options: java.nio.file.LinkOption[]): void
                }
            }
        }
    }
}
