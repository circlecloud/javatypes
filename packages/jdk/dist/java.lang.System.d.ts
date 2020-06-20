declare namespace java {
    namespace lang {
        /**
         * Class System provides a standard place for programs
         * to find system related information. All System API
         * is static.
         * @author OTI
         * @version initial
         */
        // @ts-ignore
        class System extends java.lang.Object {
            /**
             * Default input stream
             */
            // @ts-ignore
            readonly in: java.io.InputStream
            /**
             * Default output stream
             */
            // @ts-ignore
            readonly out: java.io.PrintStream
            /**
             * Default error output stream
             */
            // @ts-ignore
            readonly err: java.io.PrintStream
            /**
             * Sets the value of the static slot "in" in the receiver
             * to the passed in argument.
             * @param newIn 		the new value for in.
             */
            // @ts-ignore
            setIn(newIn: java.io.InputStream): void
            /**
             * Sets the value of the static slot "out" in the receiver
             * to the passed in argument.
             * @param newOut 		the new value for out.
             */
            // @ts-ignore
            setOut(newOut: java.io.PrintStream): void
            /**
             * Sets the value of the static slot "err" in the receiver
             * to the passed in argument.
             * @param newErr  	the new value for err.
             */
            // @ts-ignore
            setErr(newErr: java.io.PrintStream): void
            /**
             * Copies the contents of <code>array1</code> starting at offset <code>start1</code>
             * into <code>array2</code> starting at offset <code>start2</code> for
             * <code>length</code> elements.
             * @param array1 		the array to copy out of
             * @param start1 		the starting index in array1
             * @param array2 		the array to copy into
             * @param start2 		the starting index in array2
             * @param length 		the number of elements in the array to copy
             */
            // @ts-ignore
            arraycopy(array1: any, start1: number /*int*/, array2: any, start2: number /*int*/, length: number /*int*/): void
            /**
             * Answers the current time expressed as milliseconds since
             * the time 00:00:00 UTC on January 1, 1970.
             * @return the time in milliseconds.
             */
            // @ts-ignore
            currentTimeMillis(): long
            /**
             * Causes the virtual machine to stop running, and the
             * program to exit. If runFinalizersOnExit(true) has been
             * invoked, then all finalizers will be run first.
             * @param code		the return code.
             * @throws SecurityException 	if the running thread is not allowed to cause the vm to exit.
             * @see SecurityManager#checkExit
             */
            // @ts-ignore
            exit(code: number /*int*/): void
            /**
             * Indicate to the virtual machine that it would be a
             * good time to collect available memory. Note that, this
             * is a hint only.
             */
            // @ts-ignore
            gc(): void
            /**
             * Returns an environment variable.
             * @param var			the name of the environment variable
             * @return the value of the specified environment variable
             */
            // @ts-ignore
            getenv(variable: string): java.lang.String
            /**
             * Answers the system properties. Note that this is
             * not a copy, so that changes made to the returned
             * Properties object will be reflected in subsequent
             * calls to getProperty and getProperties.
             * <p>
             * Security managers should restrict access to this
             * API if possible.
             * @return the system properties
             */
            // @ts-ignore
            getProperties(): java.util.Properties
            /**
             * Answers the value of a particular system property.
             * Answers null if no such property exists,
             * <p>
             * The properties currently provided by the virtual
             * machine are:
             * <pre>
             * java.vendor.url
             * java.class.path
             * user.home
             * java.class.version
             * os.version
             * java.vendor
             * user.dir
             * user.timezone
             * path.separator
             * os.name
             * os.arch
             * line.separator
             * file.separator
             * user.name
             * java.version
             * java.home
             * </pre>
             * @param prop		the system property to look up
             * @return the value of the specified system property, or null if the property doesn't exist
             */
            // @ts-ignore
            getProperty(prop: string): java.lang.String
            /**
             * Answers the value of a particular system property.
             * If no such property is found, answers the defaultValue.
             * @param prop			the system property to look up
             * @param defaultValue	return value if system property is not found
             * @return the value of the specified system property, or defaultValue if the property doesn't exist
             */
            // @ts-ignore
            getProperty(prop: string, defaultValue: string): java.lang.String
            /**
             * Sets the value of a particular system property.
             * @param prop		the system property to change
             * @param value		the value to associate with prop
             * @return the old value of the property, or null
             */
            // @ts-ignore
            setProperty(prop: string, value: string): java.lang.String
            /**
             * Answers the active security manager.
             * @return the system security manager object.
             */
            // @ts-ignore
            getSecurityManager(): java.lang.SecurityManager
            /**
             * Answers an integer hash code for the parameter.
             * The hash code returned is the same one that would
             * be returned by java.lang.Object.hashCode(), whether
             * or not the object's class has overridden hashCode().
             * The hash code for null is 0.
             * @param anObject	the object
             * @return the hash code for the object
             * @see java.lang.Object#hashCode
             */
            // @ts-ignore
            identityHashCode(anObject: any): int
            /**
             * Loads the specified file as a dynamic library.
             * @param pathName	the path of the file to be loaded
             */
            // @ts-ignore
            load(pathName: string): void
            /**
             * Loads and links the library specified by the argument.
             * @param libName		the name of the library to load
             * @throws UnsatisfiedLinkError	if the library could not be loaded
             * @throws SecurityException 		if the library was not allowed to be loaded
             */
            // @ts-ignore
            loadLibrary(libName: string): void
            /**
             * Provides a hint to the virtual machine that it would
             * be useful to attempt to perform any outstanding
             * object finalizations.
             */
            // @ts-ignore
            runFinalization(): void
            /**
             * Ensure that, when the virtual machine is about to exit,
             * all objects are finalized. Note that all finalization
             * which occurs when the system is exiting is performed
             * after all running threads have been terminated.
             * @param flag 		true means finalize all on exit.
             * @deprecated This method is unsafe.
             */
            // @ts-ignore
            runFinalizersOnExit(flag: boolean): void
            /**
             * Answers the system properties. Note that the object
             * which is passed in not copied, so that subsequent
             * changes made to the object will be reflected in
             * calls to getProperty and getProperties.
             * <p>
             * Security managers should restrict access to this
             * API if possible.
             * @param p			the property to set
             */
            // @ts-ignore
            setProperties(p: java.util.Properties): void
            /**
             * Sets the active security manager. Note that once
             * the security manager has been set, it can not be
             * changed. Attempts to do so will cause a security
             * exception.
             * @param s			the new security manager
             * @throws SecurityException 	if the security manager has already been set.
             */
            // @ts-ignore
            setSecurityManager(s: java.lang.SecurityManager): void
            /**
             * Answers the platform specific file name format for the shared
             * library named by the argument.
             * @param userLibName 	the name of the library to look up.
             * @return the platform specific filename for the library
             */
            // @ts-ignore
            mapLibraryName(userLibName: string): java.lang.String
            /**
             * Return the channel inherited by the invocation of the running vm. The channel is
             * obtained by calling SelectorProvider.inheritedChannel().
             * @return the inherited channel or null
             * @throws IOException if an IO error occurs getting the inherited channel
             */
            // @ts-ignore
            inheritedChannel(): java.nio.channels.Channel
            /**
             * Returns the current tick count in nanoseconds. The tick count
             * only reflects elapsed time.
             * @return the current nanosecond tick count, which may be negative
             */
            // @ts-ignore
            nanoTime(): long
            /**
             * Removes the property.
             * @param prop		the name of the property to remove
             * @return the value of the property removed
             */
            // @ts-ignore
            clearProperty(prop: string): java.lang.String
            /**
             * Returns all of the system environment variables in an unmodifiable Map.
             * @return an unmodifiable Map containing all of the system environment variables.
             */
            // @ts-ignore
            getenv(): java.util.Map<java.lang.String, java.lang.String>
            /**
             * Return the Console or null.
             * @return the Console or null
             */
            // @ts-ignore
            console(): java.io.Console
            /**
             * Return platform specific line separator character(s)
             * Unix is \n while Windows is \r\n as per the prop set by the VM
             * Refer to Jazz 30875
             * @return platform specific line separator character(s)
             */
            // @ts-ignore
            lineSeparator(): java.lang.String
        }
    }
}
