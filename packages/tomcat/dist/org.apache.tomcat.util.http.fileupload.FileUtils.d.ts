declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * General file manipulation utilities.
                         * <p>
                         * Facilities are provided in the following areas:
                         * <ul>
                         * <li>writing to a file
                         * <li>reading from a file
                         * <li>make a directory including parent directories
                         * <li>copying files and directories
                         * <li>deleting files and directories
                         * <li>converting to and from a URL
                         * <li>listing files and directories by filter and extension
                         * <li>comparing file content
                         * <li>file last changed date
                         * <li>calculating a checksum
                         * </ul>
                         * <p>
                         * Note that a specific charset should be specified whenever possible.
                         * Relying on the platform default means that the code is Locale-dependent.
                         * Only use the default if the files are known to always use the platform default.
                         * <p>
                         * Origin of code: Excalibur, Alexandria, Commons-Utils
                         */
                        // @ts-ignore
                        class FileUtils extends java.lang.Object {
                            /**
                             * Instances should NOT be constructed in standard programming.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Deletes a directory recursively.
                             * @param directory directory to delete
                             * @throws IOException              in case deletion is unsuccessful
                             * @throws IllegalArgumentException if {#code directory} does not exist or is not a directory
                             */
                            // @ts-ignore
                            public static deleteDirectory(directory: java.io.File): void
                            /**
                             * Cleans a directory without deleting it.
                             * @param directory directory to clean
                             * @throws IOException              in case cleaning is unsuccessful
                             * @throws IllegalArgumentException if {#code directory} does not exist or is not a directory
                             */
                            // @ts-ignore
                            public static cleanDirectory(directory: java.io.File): void
                            /**
                             * Deletes a file. If file is a directory, delete it and all sub-directories.
                             * <p>
                             * The difference between File.delete() and this method are:
                             * <ul>
                             * <li>A directory to be deleted does not have to be empty.</li>
                             * <li>You get exceptions when a file or directory cannot be deleted.
                             * (java.io.File methods returns a boolean)</li>
                             * </ul>
                             * @param file file or directory to delete, must not be {#code null}
                             * @throws NullPointerException  if the directory is {#code null}
                             * @throws FileNotFoundException if the file was not found
                             * @throws IOException           in case deletion is unsuccessful
                             */
                            // @ts-ignore
                            public static forceDelete(file: java.io.File): void
                            /**
                             * Schedules a file to be deleted when JVM exits.
                             * If file is directory delete it and all sub-directories.
                             * @param file file or directory to delete, must not be {#code null}
                             * @throws NullPointerException if the file is {#code null}
                             * @throws IOException          in case deletion is unsuccessful
                             */
                            // @ts-ignore
                            public static forceDeleteOnExit(file: java.io.File): void
                            /**
                             * Makes a directory, including any necessary but nonexistent parent
                             * directories. If a file already exists with specified name but it is
                             * not a directory then an IOException is thrown.
                             * If the directory cannot be created (or does not already exist)
                             * then an IOException is thrown.
                             * @param directory directory to create, must not be {#code null}
                             * @throws NullPointerException if the directory is {#code null}
                             * @throws IOException          if the directory cannot be created or the file already exists but is not a directory
                             */
                            // @ts-ignore
                            public static forceMkdir(directory: java.io.File): void
                            /**
                             * Makes any necessary but nonexistent parent directories for a given File. If the parent directory cannot be
                             * created then an IOException is thrown.
                             * @param file file with parent to create, must not be {#code null}
                             * @throws NullPointerException if the file is {#code null}
                             * @throws IOException          if the parent directory cannot be created
                             * @since 2.5
                             */
                            // @ts-ignore
                            public static forceMkdirParent(file: java.io.File): void
                            /**
                             * Determines whether the specified file is a Symbolic Link rather than an actual file.
                             * <p>
                             * Will not return true if there is a Symbolic Link anywhere in the path,
                             * only if the specific file is.
                             * <p>
                             * <b>Note:</b> the current implementation always returns {@code false} if
                             * the system is detected as Windows using
                             * {@link File#separatorChar} == '\\'
                             * @param file the file to check
                             * @return true if the file is a Symbolic Link
                             * @throws IOException if an IO error occurs while checking the file
                             * @since 2.0
                             */
                            // @ts-ignore
                            public static isSymlink(file: java.io.File): boolean
                        }
                    }
                }
            }
        }
    }
}
