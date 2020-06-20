declare namespace java {
    namespace lang {
        /**
         * ClassLoaders are used to dynamically load, link and install
         * classes into a running image.
         * @version initial
         */
        // @ts-ignore
        class ClassLoader extends java.lang.Object {
            /**
             * Constructs a new instance of this class with the system
             * class loader as its parent.
             * @exception SecurityException
             * 					if a security manager exists and it does not
             * 					allow the creation of new ClassLoaders.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new instance of this class with the given
             * class loader as its parent.
             * @param parentLoader ClassLoader
             * 					the ClassLoader to use as the new class
             * 					loaders parent.
             * @exception SecurityException
             * 					if a security manager exists and it does not
             * 					allow the creation of new ClassLoaders.
             */
            // @ts-ignore
            constructor(parentLoader: java.lang.ClassLoader)
            /**
             * Constructs a new class from an array of bytes containing a
             * class definition in class file format.
             * @param classRep byte[]
             * 					a memory image of a class file.
             * @param offset int
             * 					the offset into the classRep.
             * @param length int
             * 					the length of the class file.
             * @return the newly defined Class
             * @throws ClassFormatError when the bytes are invalid
             * @deprecated Use defineClass(String, byte[], int, int)
             */
            // @ts-ignore
            defineClass(classRep: number /*byte*/[], offset: number /*int*/, length: number /*int*/): java.lang.Class<?>
            /**
             * Constructs a new class from an array of bytes containing a
             * class definition in class file format.
             * @param className java.lang.String
             * 					the name of the new class
             * @param classRep byte[]
             * 					a memory image of a class file
             * @param offset int
             * 					the offset into the classRep
             * @param length int
             * 					the length of the class file
             * @return the newly defined Class
             * @throws ClassFormatError when the bytes are invalid
             */
            // @ts-ignore
            defineClass(className: string, classRep: number /*byte*/[], offset: number /*int*/, length: number /*int*/): java.lang.Class<?>
            /**
             * Constructs a new class from an array of bytes containing a
             * class definition in class file format and assigns the new
             * class to the specified protection domain.
             * @param className java.lang.String
             * 					the name of the new class.
             * @param classRep byte[]
             * 					a memory image of a class file.
             * @param offset int
             * 					the offset into the classRep.
             * @param length int
             * 					the length of the class file.
             * @param protectionDomain ProtectionDomain
             * 					the protection domain this class should
             * 					belong to.
             * @return the newly defined Class
             * @throws ClassFormatError when the bytes are invalid
             */
            // @ts-ignore
            defineClass(className: string, classRep: number /*byte*/[], offset: number /*int*/, length: number /*int*/, protectionDomain: java.security.ProtectionDomain): java.lang.Class<?>
            /**
             * Overridden by subclasses, by default throws ClassNotFoundException.
             * This method is called by loadClass() after the parent ClassLoader
             * has failed to find a loaded class of the same name.
             * @return java.lang.Class
             * 					the class or null.
             * @param className String
             * 					the name of the class to search for.
             * @exception ClassNotFoundException
             * 					always, unless overridden.
             */
            // @ts-ignore
            findClass(className: string): java.lang.Class<?>
            /**
             * Attempts to find and return a class which has already
             * been loaded by the virtual machine. Note that the class
             * may not have been linked and the caller should call
             * resolveClass() on the result if necessary.
             * @return java.lang.Class
             * 					the class or null.
             * @param className String
             * 					the name of the class to search for.
             */
            // @ts-ignore
            findLoadedClass(className: string): java.lang.Class<?>
            /**
             * Attempts to load a class using the system class loader.
             * Note that the class has already been been linked.
             * @return java.lang.Class
             * 					the class which was loaded.
             * @param className String
             * 					the name of the class to search for.
             * @exception ClassNotFoundException
             * 					if the class can not be found.
             */
            // @ts-ignore
            findSystemClass(className: string): java.lang.Class<?>
            /**
             * Returns the specified ClassLoader's parent.
             * @return java.lang.ClassLoader
             * 					the class or null.
             * @exception SecurityException
             * 					if a security manager exists and it does not
             * 					allow the parent loader to be retrieved.
             */
            // @ts-ignore
            getParent(): java.lang.ClassLoader
            /**
             * Answers an URL which can be used to access the resource
             * described by resName, using the class loader's resource lookup
             * algorithm. The default behavior is just to return null.
             * @return URL
             * 					the location of the resource.
             * @param resName String
             * 					the name of the resource to find.
             * @see Class#getResource
             */
            // @ts-ignore
            getResource(resName: string): java.net.URL
            /**
             * Answers an Enumeration of URL which can be used to access the resources
             * described by resName, using the class loader's resource lookup
             * algorithm.
             * @param resName String
             * 					the name of the resource to find.
             * @return Enumeration
             * 					the locations of the resources.
             * @throws IOException when an error occurs
             */
            // @ts-ignore
            getResources(resName: string): java.util.Enumeration<java.net.URL>
            /**
             * Answers a stream on a resource found by looking up
             * resName using the class loader's resource lookup
             * algorithm. The default behavior is just to return null.
             * @return InputStream
             * 					a stream on the resource or null.
             * @param resName	String
             * 					the name of the resource to find.
             * @see Class#getResourceAsStream
             */
            // @ts-ignore
            getResourceAsStream(resName: string): java.io.InputStream
            /**
             * Convenience operation to obtain a reference to the system class loader.
             * The system class loader is the parent of any new <code>ClassLoader</code>
             * objects created in the course of an application and will normally be the
             * same <code>ClassLoader</code> as that used to launch an application.
             * @return java.lang.ClassLoader the system classLoader.
             * @exception SecurityException
             *                 if a security manager exists and it does not permit the
             *                 caller to access the system class loader.
             */
            // @ts-ignore
            getSystemClassLoader(): java.lang.ClassLoader
            /**
             * Answers an URL specifying a resource which can be found by
             * looking up resName using the system class loader's resource
             * lookup algorithm.
             * @return URL
             * 					a URL specifying a system resource or null.
             * @param resName String
             * 					the name of the resource to find.
             * @see Class#getResource
             */
            // @ts-ignore
            getSystemResource(resName: string): java.net.URL
            /**
             * Answers an Enumeration of URL containing all resources which can be
             * found by looking up resName using the system class loader's resource
             * lookup algorithm.
             * @param resName String
             * 					the name of the resource to find.
             * @return Enumeration
             * 					an Enumeration of URL containing the system resources
             * @throws IOException when an error occurs
             */
            // @ts-ignore
            getSystemResources(resName: string): java.util.Enumeration<java.net.URL>
            /**
             * Answers a stream on a resource found by looking up
             * resName using the system class loader's resource lookup
             * algorithm. Basically, the contents of the java.class.path
             * are searched in order, looking for a path which matches
             * the specified resource.
             * @return a stream on the resource or null.
             * @param resName		the name of the resource to find.
             * @see Class#getResourceAsStream
             */
            // @ts-ignore
            getSystemResourceAsStream(resName: string): java.io.InputStream
            /**
             * Invoked by the Virtual Machine when resolving class references.
             * Equivalent to loadClass(className, false);
             * @return java.lang.Class
             * 					the Class object.
             * @param className String
             * 					the name of the class to search for.
             * @exception ClassNotFoundException
             * 					If the class could not be found.
             */
            // @ts-ignore
            loadClass(className: string): java.lang.Class<?>
            /**
             * Attempts to load the type <code>className</code> in the running VM,
             * optionally linking the type after a successful load.
             * @return java.lang.Class
             * 					the Class object.
             * @param className String
             * 					the name of the class to search for.
             * @param resolveClass boolean
             * 					indicates if class should be resolved after loading.
             * @exception ClassNotFoundException
             * 					If the class could not be found.
             */
            // @ts-ignore
            loadClass(className: string, resolveClass: boolean): java.lang.Class<?>
            /**
             * Attempts to register the  the ClassLoader as being capable of
             * parallel class loading.  This requires that all superclasses must
             * also be parallel capable.
             * @return True if the ClassLoader successfully registers as 
             *  				parallel capable, false otherwise.
             * @see java.lang.ClassLoader
             */
            // @ts-ignore
            registerAsParallelCapable(): boolean
            /**
             * Answers the lock object for class loading in parallel.
             * If this ClassLoader object has been registered as parallel capable,
             * a dedicated object associated with this specified class name is returned.
             * Otherwise, current ClassLoader object is returned.
             * @param className String
             * 					name of the to be loaded class
             * @return the lock for class loading operations
             * @exception NullPointerException
             * 					if registered as parallel capable and className is null
             * @see java.lang.ClassLoader
             */
            // @ts-ignore
            getClassLoadingLock(className: string): java.lang.Object
            /**
             * Forces a class to be linked (initialized).  If the class has
             * already been linked this operation has no effect.
             * @param clazz Class
             * 					the Class to link.
             * @exception NullPointerException
             * 					if clazz is null.
             * @see Class#getResource
             */
            // @ts-ignore
            resolveClass(clazz: java.lang.Class<any>): void
            /**
             * Answers an URL which can be used to access the resource
             * described by resName, using the class loader's resource lookup
             * algorithm. The default behavior is just to return null.
             * This should be implemented by a ClassLoader.
             * @return URL
             * 					the location of the resource.
             * @param resName String
             * 					the name of the resource to find.
             */
            // @ts-ignore
            findResource(resName: string): java.net.URL
            /**
             * Answers an Enumeration of URL which can be used to access the resources
             * described by resName, using the class loader's resource lookup
             * algorithm. The default behavior is just to return an empty Enumeration.
             * @param resName String
             * 					the name of the resource to find.
             * @return Enumeration
             * 					the locations of the resources.
             * @throws IOException when an error occurs
             */
            // @ts-ignore
            findResources(resName: string): java.util.Enumeration<java.net.URL>
            /**
             * Answers the absolute path of the file containing the library
             * associated with the given name, or null. If null is answered,
             * the system searches the directories specified by the system
             * property "java.library.path".
             * @return String
             * 					the library file name or null.
             * @param libName	String
             * 					the name of the library to find.
             */
            // @ts-ignore
            findLibrary(libName: string): java.lang.String
            /**
             * Attempt to locate the requested package. If no package information
             * can be located, null is returned.
             * @param name		The name of the package to find
             * @return The package requested, or null
             */
            // @ts-ignore
            getPackage(name: string): java.lang.Package
            /**
             * Answers all the packages known to this class loader.
             * @return All the packages known to this classloader
             */
            // @ts-ignore
            getPackages(): java.lang.Package[]
            /**
             * Define a new Package using the specified information.
             * @param name		The name of the package
             * @param specTitle	The title of the specification for the Package
             * @param specVersion	The version of the specification for the Package
             * @param specVendor	The vendor of the specification for the Package
             * @param implTitle	The implementation title of the Package
             * @param implVersion	The implementation version of the Package
             * @param implVendor	The specification vendor of the Package
             * @param sealBase	The URL used to seal the Package, if null the Package is not sealed
             * @return The Package created
             * @exception IllegalArgumentException if the Package already exists
             */
            // @ts-ignore
            definePackage(name: string, specTitle: string, specVersion: string, specVendor: string, implTitle: string, implVersion: string, implVendor: string, sealBase: java.net.URL): java.lang.Package
            /**
             * Sets the signers of a class.
             * @param c		The Class object
             * @param signers	The signers for the class
             */
            // @ts-ignore
            setSigners(c: java.lang.Class<any>, signers: any[]): void
            /**
             * Sets the assertion status of a class.
             * @param cname		Class name
             * @param enable		Enable or disable assertion
             * @since 1.4
             */
            // @ts-ignore
            setClassAssertionStatus(cname: string, enable: boolean): void
            /**
             * Sets the assertion status of a package.
             * @param pname		Package name
             * @param enable		Enable or disable assertion
             * @since 1.4
             */
            // @ts-ignore
            setPackageAssertionStatus(pname: string, enable: boolean): void
            /**
             * Sets the default assertion status of a classloader
             * @param enable		Enable or disable assertion
             * @since 1.4
             */
            // @ts-ignore
            setDefaultAssertionStatus(enable: boolean): void
            /**
             * Clears the default, package and class assertion status of a classloader
             * @since 1.4
             */
            // @ts-ignore
            clearAssertionStatus(): void
            /**
             * Constructs a new class from an array of bytes containing a
             * class definition in class file format and assigns the new
             * class to the specified protection domain.
             * @param name java.lang.String
             * 					the name of the new class.
             * @param buffer
             * 					a memory image of a class file.
             * @param domain
             * 					the protection domain this class should
             * 					belong to.
             * @return the newly defined Class
             * @throws ClassFormatError when the bytes are invalid
             * @since 1.5
             */
            // @ts-ignore
            defineClass(name: string, buffer: java.nio.ByteBuffer, domain: java.security.ProtectionDomain): java.lang.Class<?>
            // @ts-ignore
            clone(): java.lang.Object
        }
    }
}
