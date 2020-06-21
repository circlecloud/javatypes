declare namespace java {
    namespace lang {
        namespace management {
            /**
             * The management and monitoring interface for the virtual machine's class
             * loading functionality.
             * <p>
             * Precisely one instance of this interface will be made
             * available to management clients.
             * </p>
             * <p>
             * Accessing this <code>MXBean</code> can be done in one of three ways.
             * <ol>
             * <li>Invoking the static ManagementFactory.getClassLoadingMXBean() method.</li>
             * <li>Using a javax.management.MBeanServerConnection.</li>
             * <li>Obtaining a proxy MXBean from the static
             * {@code ManagementFactory.newPlatformMXBeanProxy(MBeanServerConnection connection,
             * String mxbeanName, Class<T> mxbeanInterface())} method, passing in
             * &quot;java.lang:type=ClassLoading&quot; for the value of the mxbeanName
             * parameter.</li>
             * </ol>
             */
            // @ts-ignore
            interface ClassLoadingMXBean extends java.lang.management.PlatformManagedObject {
                /**
                 * Returns the number of classes currently loaded by the virtual machine.
                 * @return the number of loaded classes
                 */
                // @ts-ignore
                getLoadedClassCount(): number /*int*/
                /**
                 * Returns a figure for the total number of classes that have been
                 * loaded by the virtual machine during its lifetime.
                 * @return the total number of classes that have been loaded
                 */
                // @ts-ignore
                getTotalLoadedClassCount(): number /*long*/
                /**
                 * Returns a figure for the total number of classes that have
                 * been unloaded by the virtual machine over its lifetime.
                 * @return the total number of unloaded classes
                 */
                // @ts-ignore
                getUnloadedClassCount(): number /*long*/
                /**
                 * Returns a boolean indication of whether the virtual
                 * machine's class loading system is producing verbose output.
                 * @return true if running in verbose mode
                 */
                // @ts-ignore
                isVerbose(): boolean
                /**
                 * Updates the virtual machine's class loading system to
                 * operate in verbose or non-verbose mode.
                 * @param value true to put the class loading system into verbose
                 *  mode, false to take the class loading system out of verbose mode.
                 */
                // @ts-ignore
                setVerbose(value: boolean): void
            }
        }
    }
}
