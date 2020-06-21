declare namespace java {
    namespace lang {
        namespace management {
            /**
             * This class provides access to platform management interfaces.
             */
            // @ts-ignore
            class ManagementFactory extends java.lang.Object {
                /**
                 * The unique <code>ObjectName</code> string identifier for the virtual
                 * machine's singleton {@link ClassLoadingMXBean}.
                 */
                // @ts-ignore
                public static readonly CLASS_LOADING_MXBEAN_NAME: java.lang.String | string
                /**
                 * The unique <code>ObjectName</code> string identifier for the virtual
                 * machine's singleton {@link CompilationMXBean}.
                 */
                // @ts-ignore
                public static readonly COMPILATION_MXBEAN_NAME: java.lang.String | string
                /**
                 * The prefix for all <code>ObjectName</code> strings which represent a
                 * {@link GarbageCollectorMXBean}. The unique <code>ObjectName</code> for
                 * a <code>GarbageCollectorMXBean</code> can be formed by adding
                 * &quot;,name= <i>collector name </i>&quot; to this constant.
                 */
                // @ts-ignore
                public static readonly GARBAGE_COLLECTOR_MXBEAN_DOMAIN_TYPE: java.lang.String | string
                /**
                 * The prefix for all <code>ObjectName</code> strings which represent a
                 * {@link MemoryManagerMXBean}. The unique <code>ObjectName</code> for a
                 * <code>MemoryManagerMXBean</code> can be formed by adding
                 * &quot;,name=<i>manager name</i>&quot; to this constant.
                 */
                // @ts-ignore
                public static readonly MEMORY_MANAGER_MXBEAN_DOMAIN_TYPE: java.lang.String | string
                /**
                 * The unique <code>ObjectName</code> string identifier for the virtual
                 * machine's singleton {@link MemoryMXBean}.
                 */
                // @ts-ignore
                public static readonly MEMORY_MXBEAN_NAME: java.lang.String | string
                /**
                 * The prefix for all <code>ObjectName</code> strings which represent a
                 * {@link MemoryPoolMXBean}. The unique <code>ObjectName</code> for a
                 * <code>MemoryPoolMXBean</code> can be formed by adding &quot;,name=
                 * <i>memory pool name </i>&quot; to this constant.
                 */
                // @ts-ignore
                public static readonly MEMORY_POOL_MXBEAN_DOMAIN_TYPE: java.lang.String | string
                /**
                 * The unique <code>ObjectName</code> string identifier for the virtual
                 * machine's singleton {@link OperatingSystemMXBean}.
                 */
                // @ts-ignore
                public static readonly OPERATING_SYSTEM_MXBEAN_NAME: java.lang.String | string
                /**
                 * The unique <code>ObjectName</code> string identifier for the virtual
                 * machine's singleton {@link RuntimeMXBean}.
                 */
                // @ts-ignore
                public static readonly RUNTIME_MXBEAN_NAME: java.lang.String | string
                /**
                 * The unique <code>ObjectName</code> string identifier for the virtual
                 * machine's singleton {@link ThreadMXBean}.
                 */
                // @ts-ignore
                public static readonly THREAD_MXBEAN_NAME: java.lang.String | string
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * class loading system.
                 * @return the virtual machine's {#link ClassLoadingMXBean}
                 */
                // @ts-ignore
                public static getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * compilation system <i>if and only if the virtual machine has a
                 * compilation system enabled</i>. If no compilation exists for this
                 * virtual machine, a <code>null</code> is returned.
                 * @return the virtual machine's {#link CompilationMXBean} or
                 *          <code>null</code> if there is no compilation system for this
                 *          virtual machine.
                 */
                // @ts-ignore
                public static getCompilationMXBean(): java.lang.management.CompilationMXBean
                /**
                 * Returns a list of all of the instances of {@link GarbageCollectorMXBean}
                 * in this virtual machine. Owing to the dynamic nature of this kind of
                 * <code>MXBean</code>, it is possible that instances may be created or
                 * destroyed between the invocation and return of this method.
                 * @return a list of all known <code>GarbageCollectorMXBean</code>s in
                 *          this virtual machine.
                 */
                // @ts-ignore
                public static getGarbageCollectorMXBeans(): Array<java.lang.management.GarbageCollectorMXBean>
                /**
                 * Returns a list of all of the instances of {@link MemoryManagerMXBean} in
                 * this virtual machine. Owing to the dynamic nature of this kind of
                 * <code>MXBean</code>, it is possible that instances may be created or
                 * destroyed between the invocation and return of this method.
                 * <p>
                 * Note that the list of <code>MemoryManagerMXBean</code> instances will
                 * include instances of <code>MemoryManagerMXBean</code> sub-types such as
                 * <code>GarbageCollectorMXBean</code>.
                 * </p>
                 * @return a list of all known <code>MemoryManagerMXBean</code>s in this
                 *          virtual machine.
                 */
                // @ts-ignore
                public static getMemoryManagerMXBeans(): Array<java.lang.management.MemoryManagerMXBean>
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * memory system.
                 * @return the virtual machine's {#link MemoryMXBean}
                 */
                // @ts-ignore
                public static getMemoryMXBean(): java.lang.management.MemoryMXBean
                /**
                 * Returns a list of all of the instances of {@link MemoryPoolMXBean} in
                 * this virtual machine. Owing to the dynamic nature of this kind of
                 * <code>MXBean</code>, it is possible that instances may be created or
                 * destroyed between the invocation and return of this method.
                 * @return a list of all known <code>MemoryPoolMXBean</code>s in this
                 *          virtual machine.
                 */
                // @ts-ignore
                public static getMemoryPoolMXBeans(): Array<java.lang.management.MemoryPoolMXBean>
                /**
                 * Returns the singleton <code>MXBean</code> for the operating system
                 * which the virtual machine runs on.
                 * @return the virtual machine's {#link OperatingSystemMXBean}
                 */
                // @ts-ignore
                public static getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean
                /**
                 * Returns the virtual machine's platform
                 * <code>MBeanServer</code>. This <code>MBeanServer</code> will have
                 * all of the platform <code>MXBean</code>s registered with it including
                 * any dynamic <code>MXBean</code>s (e.g. instances of
                 * {@link GarbageCollectorMXBean} that may be unregistered and destroyed at
                 * a later time.
                 * <p>
                 * In order to simplify the process of distribution and discovery of managed
                 * beans it is good practice to register all managed beans (in addition to
                 * the platform <code>MXBean</code>s) with this server.
                 * </p>
                 * <p>
                 * A custom <code>MBeanServer</code> can be created by this method if the
                 * System property <code>javax.management.builder.initial</code> has been
                 * set with the fully qualified name of a subclass of
                 * {@link javax.management.MBeanServerBuilder}.
                 * </p>
                 * @return the platform <code>MBeanServer</code>.
                 * @throws SecurityException
                 *              if there is a Java security manager in operation and the
                 *              caller of this method does not have
                 *              &quot;createMBeanServer&quot;
                 *              <code>MBeanServerPermission</code>.
                 * @see MBeanServer
                 * @see javax.management.MBeanServerPermission
                 */
                // @ts-ignore
                public static getPlatformMBeanServer(): javax.management.MBeanServer
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * runtime system.
                 * @return the virtual machine's {#link RuntimeMXBean}
                 */
                // @ts-ignore
                public static getRuntimeMXBean(): java.lang.management.RuntimeMXBean
                /**
                 * Returns the singleton <code>MXBean</code> for the virtual machine's
                 * threading system.
                 * @return the virtual machine's {#link ThreadMXBean}
                 */
                // @ts-ignore
                public static getThreadMXBean(): java.lang.management.ThreadMXBean
                /**
                 * Return a proxy for the named <code>MXBean</code>.
                 * @param <T> the type of the platform <code>MXBean</code>
                 * @param connection the connection to the server
                 * @param mxbeanName the name of the <code>MXBean</code>
                 * @param mxbeanInterface a management interface for a platform <code>MXBean</code>
                 * @return a new proxy object representing the named <code>MXBean</code>.
                 *          All subsequent method invocations on the proxy will be routed
                 *          through the supplied {#link MBeanServerConnection} object.
                 * @throws IOException if a communication problem
                 *  occurs with the {#code MBeanServerConnection}
                 */
                // @ts-ignore
                public static newPlatformMXBeanProxy<T>(connection: javax.management.MBeanServerConnection, mxbeanName: java.lang.String | string, mxbeanInterface: java.lang.Class<T>): T
                /**
                 * Returns the platform MXBean implementing
                 * the given {@code mxbeanInterface} which is specified
                 * to have one single instance in the Java virtual machine.
                 * This method may return {@code null} if the management interface
                 * is not implemented in the Java virtual machine (for example,
                 * a Java virtual machine with no compilation system does not
                 * implement {@link CompilationMXBean});
                 * otherwise, this method is equivalent to calling:
                 * <pre>
                 * {@link #getPlatformMXBeans(Class)
                 * getPlatformMXBeans(mxbeanInterface)}.get(0);
                 * </pre>
                 * @param <T> the type of the platform <code>MXBean</code>
                 * @param mxbeanInterface a management interface for a platform <code>MXBean</code>
                 *      with one single instance in the Java virtual machine if implemented.
                 * @return the platform MXBean that implements
                 *  {#code mxbeanInterface}, or {@code null} if it does not exist.
                 * @throws IllegalArgumentException if {#code mxbeanInterface}
                 *  is not a platform management interface or
                 *  not a singleton platform MXBean.
                 * @since 1.7
                 */
                // @ts-ignore
                public static getPlatformMXBean<T extends java.lang.management.PlatformManagedObject>(mxbeanInterface: java.lang.Class<T>): T
                /**
                 * Returns a list of all of the platform <code>MXBean</code>
                 * objects which implement the specified management interface.
                 * @param <T> the type of the platform <code>MXBean</code>s
                 * @param mxbeanInterface a management interface for the platform <code>MXBean</code>s
                 * @return list of MXBean objects implementing the <code>mxbeanInterface</code>
                 * @throws IllegalArgumentException if {#code mxbeanInterface}
                 *  is not a platform management interface
                 * @since 1.7
                 */
                // @ts-ignore
                public static getPlatformMXBeans<T extends java.lang.management.PlatformManagedObject>(mxbeanInterface: java.lang.Class<T>): Array<T>
                /**
                 * Returns the platform MXBean proxy for
                 * {@code mxbeanInterface} which is specified to have one single
                 * instance in a Java virtual machine and the proxy will
                 * forward the method calls through the given {@code MBeanServerConnection}.
                 * This method may return {@code null} if the management interface
                 * is not implemented in the Java virtual machine being monitored
                 * (for example, a Java virtual machine with no compilation system
                 * does not implement {@link CompilationMXBean});
                 * otherwise, this method is equivalent to calling:
                 * <pre>
                 * {@link #getPlatformMXBeans(MBeanServerConnection, Class)
                 * getPlatformMXBeans(connection, mxbeanInterface)}.get(0);
                 * </pre>
                 * @param <T> the type of the platform <code>MXBean</code>s
                 * @param connection the {#code MBeanServerConnection} to forward to.
                 * @param mxbeanInterface a management interface for a platform
                 *      MXBean with one single instance in the Java virtual machine
                 *      being monitored, if implemented.
                 * @return the platform MXBean proxy for
                 *  forwarding the method calls of the {#code mxbeanInterface}
                 *  through the given {@code MBeanServerConnection},
                 *  or {@code null} if not exist.
                 * @throws IllegalArgumentException if {#code mxbeanInterface}
                 *  is not a platform management interface or
                 *  not a singleton platform MXBean.
                 * @throws IOException if a communication problem
                 *  occurred when accessing the {#code MBeanServerConnection}.
                 * @see #newPlatformMXBeanProxy
                 * @since 1.7
                 */
                // @ts-ignore
                public static getPlatformMXBean<T extends java.lang.management.PlatformManagedObject>(connection: javax.management.MBeanServerConnection, mxbeanInterface: java.lang.Class<T>): T
                /**
                 * Return a list of MXBean proxies that can proxy the <code>mxbeanInterface</code>
                 * using the specified <code>MBeanServerConnection</code>.
                 * @param <T> the type of the platform <code>MXBean</code>s
                 * @param connection the {#code MBeanServerConnection} to forward to
                 * @param mxbeanInterface a management interface for the platform <code>MXBean</code>s
                 * @return list of MXBean proxies that can proxy the <code>mxbeanInterface</code>
                 *          using the specified <code>MBeanServerConnection</code>.
                 * @throws IllegalArgumentException if {#code mxbeanInterface} is not a platform management interface
                 * @throws IOException if a communication problem occurs with the {#code MBeanServerConnection}
                 * @since 1.7
                 */
                // @ts-ignore
                public static getPlatformMXBeans<T extends java.lang.management.PlatformManagedObject>(connection: javax.management.MBeanServerConnection, mxbeanInterface: java.lang.Class<T>): Array<T>
                /**
                 * Return the set of all platform <code>MXBean</code> interface classes.
                 * @return Set of all platform <code>MXBean</code> interface classes.
                 * @since 1.7
                 */
                // @ts-ignore
                public static getPlatformManagementInterfaces(): Array<java.lang.Class<any>>
            }
        }
    }
}
