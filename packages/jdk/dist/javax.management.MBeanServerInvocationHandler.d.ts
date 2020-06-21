declare namespace javax {
    namespace management {
        /**
         * <p>{@link InvocationHandler} that forwards methods in an MBean's
         * management interface through the MBean server to the MBean.</p>
         * <p>Given an {@link MBeanServerConnection}, the {@link ObjectName}
         * of an MBean within that MBean server, and a Java interface
         * <code>Intf</code> that describes the management interface of the
         * MBean using the patterns for a Standard MBean or an MXBean, this
         * class can be used to construct a proxy for the MBean.  The proxy
         * implements the interface <code>Intf</code> such that all of its
         * methods are forwarded through the MBean server to the MBean.</p>
         * <p>If the {@code InvocationHandler} is for an MXBean, then the parameters of
         * a method are converted from the type declared in the MXBean
         * interface into the corresponding mapped type, and the return value
         * is converted from the mapped type into the declared type.  For
         * example, with the method<br>
         * {@code public List<String> reverse(List<String> list);}<br>
         * and given that the mapped type for {@code List<String>} is {@code
         * String[]}, a call to {@code proxy.reverse(someList)} will convert
         * {@code someList} from a {@code List<String>} to a {@code String[]},
         * call the MBean operation {@code reverse}, then convert the returned
         * {@code String[]} into a {@code List<String>}.</p>
         * <p>The method Object.toString(), Object.hashCode(), or
         * Object.equals(Object), when invoked on a proxy using this
         * invocation handler, is forwarded to the MBean server as a method on
         * the proxied MBean only if it appears in one of the proxy's
         * interfaces.  For a proxy created with {@link
         * JMX#newMBeanProxy(MBeanServerConnection, ObjectName, Class)
         * JMX.newMBeanProxy} or {@link
         * JMX#newMXBeanProxy(MBeanServerConnection, ObjectName, Class)
         * JMX.newMXBeanProxy}, this means that the method must appear in the
         * Standard MBean or MXBean interface.  Otherwise these methods have
         * the following behavior:
         * <ul>
         * <li>toString() returns a string representation of the proxy
         * <li>hashCode() returns a hash code for the proxy such
         * that two equal proxies have the same hash code
         * <li>equals(Object)
         * returns true if and only if the Object argument is of the same
         * proxy class as this proxy, with an MBeanServerInvocationHandler
         * that has the same MBeanServerConnection and ObjectName; if one
         * of the {@code MBeanServerInvocationHandler}s was constructed with
         * a {@code Class} argument then the other must have been constructed
         * with the same {@code Class} for {@code equals} to return true.
         * </ul>
         * @since 1.5
         */
        // @ts-ignore
        class MBeanServerInvocationHandler extends java.lang.Object implements java.lang.reflect.InvocationHandler {
            /**
             * <p>Invocation handler that forwards methods through an MBean
             * server to a Standard MBean.  This constructor may be called
             * instead of relying on {@link
             * JMX#newMBeanProxy(MBeanServerConnection, ObjectName, Class)
             * JMX.newMBeanProxy}, for instance if you need to supply a
             * different {@link ClassLoader} to {@link Proxy#newProxyInstance
             * Proxy.newProxyInstance}.</p>
             * <p>This constructor is not appropriate for an MXBean.  Use
             * {@link #MBeanServerInvocationHandler(MBeanServerConnection,
             * ObjectName, boolean)} for that.  This constructor is equivalent
             * to {@code new MBeanServerInvocationHandler(connection,
             * objectName, false)}.</p>
             * @param connection the MBean server connection through which all
             *  methods of a proxy using this handler will be forwarded.
             * @param objectName the name of the MBean within the MBean server
             *  to which methods will be forwarded.
             */
            // @ts-ignore
            constructor(connection: javax.management.MBeanServerConnection, objectName: javax.management.ObjectName)
            /**
             * <p>Invocation handler that can forward methods through an MBean
             * server to a Standard MBean or MXBean.  This constructor may be called
             * instead of relying on {@link
             * JMX#newMXBeanProxy(MBeanServerConnection, ObjectName, Class)
             * JMX.newMXBeanProxy}, for instance if you need to supply a
             * different {@link ClassLoader} to {@link Proxy#newProxyInstance
             * Proxy.newProxyInstance}.</p>
             * @param connection the MBean server connection through which all
             *  methods of a proxy using this handler will be forwarded.
             * @param objectName the name of the MBean within the MBean server
             *  to which methods will be forwarded.
             * @param isMXBean if true, the proxy is for an {#link MXBean}, and
             *  appropriate mappings will be applied to method parameters and return
             *  values.
             * @since 1.6
             */
            // @ts-ignore
            constructor(connection: javax.management.MBeanServerConnection, objectName: javax.management.ObjectName, isMXBean: boolean)
            /**
             * <p>The MBean server connection through which the methods of
             * a proxy using this handler are forwarded.</p>
             * @return the MBean server connection.
             * @since 1.6
             */
            // @ts-ignore
            public getMBeanServerConnection(): javax.management.MBeanServerConnection
            /**
             * <p>The name of the MBean within the MBean server to which methods
             * are forwarded.
             * @return the object name.
             * @since 1.6
             */
            // @ts-ignore
            public getObjectName(): javax.management.ObjectName
            /**
             * <p>If true, the proxy is for an MXBean, and appropriate mappings
             * are applied to method parameters and return values.
             * @return whether the proxy is for an MXBean.
             * @since 1.6
             */
            // @ts-ignore
            public isMXBean(): boolean
            /**
             * <p>Return a proxy that implements the given interface by
             * forwarding its methods through the given MBean server to the
             * named MBean.  As of 1.6, the methods {@link
             * JMX#newMBeanProxy(MBeanServerConnection, ObjectName, Class)} and
             * {@link JMX#newMBeanProxy(MBeanServerConnection, ObjectName, Class,
             * boolean)} are preferred to this method.</p>
             * <p>This method is equivalent to {@link Proxy#newProxyInstance
             * Proxy.newProxyInstance}<code>(interfaceClass.getClassLoader(),
             * interfaces, handler)</code>.  Here <code>handler</code> is the
             * result of {@link #MBeanServerInvocationHandler new
             * MBeanServerInvocationHandler(connection, objectName)}, and
             * <code>interfaces</code> is an array that has one element if
             * <code>notificationBroadcaster</code> is false and two if it is
             * true.  The first element of <code>interfaces</code> is
             * <code>interfaceClass</code> and the second, if present, is
             * <code>NotificationEmitter.class</code>.
             * @param connection the MBean server to forward to.
             * @param objectName the name of the MBean within
             *  <code>connection</code> to forward to.
             * @param interfaceClass the management interface that the MBean
             *  exports, which will also be implemented by the returned proxy.
             * @param notificationBroadcaster make the returned proxy
             *  implement {#link NotificationEmitter} by forwarding its methods
             *  via <code>connection</code>. A call to {@link
             *  NotificationBroadcaster#addNotificationListener} on the proxy will
             *  result in a call to {@link
             *  MBeanServerConnection#addNotificationListener(ObjectName,
             *  NotificationListener, NotificationFilter, Object)}, and likewise
             *  for the other methods of {@link NotificationBroadcaster} and {@link
             *  NotificationEmitter}.
             * @param <T> allows the compiler to know that if the {#code
             *  interfaceClass} parameter is {@code MyMBean.class}, for example,
             *  then the return type is {@code MyMBean}.
             * @return the new proxy instance.
             * @see JMX#newMBeanProxy(MBeanServerConnection, ObjectName, Class, boolean)
             */
            // @ts-ignore
            public static newProxyInstance<T>(connection: javax.management.MBeanServerConnection, objectName: javax.management.ObjectName, interfaceClass: java.lang.Class<T>, notificationBroadcaster: boolean): T
            // @ts-ignore
            public invoke(proxy: java.lang.Object | any, method: java.lang.reflect.Method, args: java.lang.Object[] | any[]): any
        }
    }
}
