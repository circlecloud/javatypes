declare namespace java {
    namespace lang {
        namespace management {
            /**
             * The management and monitoring interface for the runtime system of the virtual
             * machine.
             * <p>
             * Precisely one instance of this interface will be made available to management
             * clients.
             * </p>
             * <p>
             * Accessing this <code>MXBean</code> can be done in one of three ways.
             * <ol>
             * <li>Invoking the static ManagementFactory.getRuntimeMXBean() method.</li>
             * <li>Using a javax.management.MBeanServerConnection.</li>
             * <li>Obtaining a proxy MXBean from the static
             * {@link ManagementFactory#newPlatformMXBeanProxy} method, passing in
             * &quot;java.lang:type=Runtime&quot; for the value of the second parameter.
             * </li>
             * </ol>
             * @since 1.5
             */
            // @ts-ignore
            interface RuntimeMXBean extends java.lang.management.PlatformManagedObject {
                /**
                 * If bootstrap class loading is supported by the virtual machine, returns a
                 * string containing the full bootstrap class path used by the boot class
                 * loader to locate and load class files.
                 * <p>
                 * An indication of whether or not the virtual machine supports a boot class
                 * loader mechanism can be found from invoking the
                 * {@link #isBootClassPathSupported()} method.
                 * </p>
                 * @return the bootstrap classpath with each entry separated by the path
                 *          separator character corresponding to the underlying operating
                 *          system.
                 * @throws UnsupportedOperationException
                 *              if the virtual machine does not support boot class loading.
                 * @throws SecurityException
                 *              if there is a security manager in effect and the caller does
                 *              not have {#link ManagementPermission} of &quot;monitor&quot;.
                 */
                // @ts-ignore
                getBootClassPath(): java.lang.String
                /**
                 * Returns the class path string used by the system class loader to locate
                 * and load class files. The value is identical to that which would be
                 * obtained from a call to {@link System#getProperty(java.lang.String)}
                 * supplying the value &quot;java.class.path&quot; for the key.
                 * @return the system classpath with each entry separated by the path
                 *          separator character corresponding to the underlying operating
                 *          system.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 * @see System#getProperty(java.lang.String)
                 */
                // @ts-ignore
                getClassPath(): java.lang.String
                /**
                 * Returns a list of all of the input arguments passed to the virtual
                 * machine on start-up. This will <i>not </i> include any input arguments
                 * that are passed into the application's <code>main(String[] args)</code>
                 * method.
                 * @return a list of strings, each one containing an argument to the virtual
                 *          machine. If no virtual machine arguments were passed in at
                 *          start-up time then this will be an empty list.
                 */
                // @ts-ignore
                getInputArguments(): java.util.List<java.lang.String>
                /**
                 * Returns the Java library path that will be used by the virtual machine to
                 * locate and load libraries. The value is identical to that which would be
                 * obtained from a call to {@link System#getProperty(java.lang.String)}
                 * supplying the value &quot;java.library.path&quot; for the key.
                 * @return the Java library path with each entry separated by the path
                 *          separator character corresponding to the underlying operating
                 *          system.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 * @see System#getProperty(java.lang.String)
                 */
                // @ts-ignore
                getLibraryPath(): java.lang.String
                /**
                 * Returns a string containing the management interface specification
                 * version that the virtual machine meets.
                 * @return the version of the management interface specification adhered to
                 *          by the virtual machine.
                 */
                // @ts-ignore
                getManagementSpecVersion(): java.lang.String
                /**
                 * Returns the string name of this virtual machine. This value may be
                 * different for each particular running virtual machine.
                 * @return the name of this running virtual machine.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns the name of the Java virtual machine specification followed by
                 * this virtual machine. The value is identical to that which would be
                 * obtained from a call to {@link System#getProperty(java.lang.String)}
                 * supplying the value &quot;java.vm.specification.name&quot; for the key.
                 * @return the name of the Java virtual machine specification.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 * @see System#getProperty(java.lang.String)
                 */
                // @ts-ignore
                getSpecName(): java.lang.String
                /**
                 * Returns the name of the Java virtual machine specification vendor. The
                 * value is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.specification.vendor&quot; for the key.
                 * @return the name of the Java virtual machine specification vendor.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 * @see System#getProperty(java.lang.String)
                 */
                // @ts-ignore
                getSpecVendor(): java.lang.String
                /**
                 * Returns the name of the Java virtual machine specification version. The
                 * value is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.specification.version&quot; for the key.
                 * @return the Java virtual machine specification version.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 * @see System#getProperty(java.lang.String)
                 */
                // @ts-ignore
                getSpecVersion(): java.lang.String
                /**
                 * Returns the time, in milliseconds, when the virtual machine was started.
                 * @return the virtual machine start time in milliseconds.
                 */
                // @ts-ignore
                getStartTime(): long
                /**
                 * Returns a map of the names and values of every system property known to
                 * the virtual machine.
                 * @return a map containing the names and values of every system property.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 */
                // @ts-ignore
                getSystemProperties(): java.util.Map<java.lang.String, java.lang.String>
                /**
                 * Returns the lifetime of the virtual machine in milliseconds.
                 * @return the number of milliseconds the virtual machine has been running.
                 */
                // @ts-ignore
                getUptime(): long
                /**
                 * Returns the name of the Java virtual machine implementation. The value is
                 * identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.name&quot; for the key.
                 * @return the name of the Java virtual machine implementation.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 * @see System#getProperty(java.lang.String)
                 */
                // @ts-ignore
                getVmName(): java.lang.String
                /**
                 * Returns the name of the Java virtual machine implementation vendor. The
                 * value is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.vendor&quot; for the key.
                 * @return the name of the Java virtual machine implementation vendor.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 * @see System#getProperty(java.lang.String)
                 */
                // @ts-ignore
                getVmVendor(): java.lang.String
                /**
                 * Returns the version of the Java virtual machine implementation. The value
                 * is identical to that which would be obtained from a call to
                 * {@link System#getProperty(java.lang.String)} supplying the value
                 * &quot;java.vm.version&quot; for the key.
                 * @return the version of the Java virtual machine implementation.
                 * @throws SecurityException
                 *              if there is a security manager in operation and the caller
                 *              does not have permission to check system properties.
                 * @see System#getProperty(java.lang.String)
                 */
                // @ts-ignore
                getVmVersion(): java.lang.String
                /**
                 * Returns a boolean indication of whether or not the virtual machine
                 * supports a bootstrap class loading mechanism.
                 * @return <code>true</code> if supported, <code>false</code> otherwise.
                 */
                // @ts-ignore
                isBootClassPathSupported(): boolean
            }
        }
    }
}
