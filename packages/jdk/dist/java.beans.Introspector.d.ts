declare namespace java {
    namespace beans {
        /**
         * The Introspector class provides a standard way for tools to learn about
         * the properties, events, and methods supported by a target Java Bean.
         * <p>
         * For each of those three kinds of information, the Introspector will
         * separately analyze the bean's class and superclasses looking for
         * either explicit or implicit information and use that information to
         * build a BeanInfo object that comprehensively describes the target bean.
         * <p>
         * For each class "Foo", explicit information may be available if there exists
         * a corresponding "FooBeanInfo" class that provides a non-null value when
         * queried for the information.   We first look for the BeanInfo class by
         * taking the full package-qualified name of the target bean class and
         * appending "BeanInfo" to form a new class name.  If this fails, then
         * we take the final classname component of this name, and look for that
         * class in each of the packages specified in the BeanInfo package search
         * path.
         * <p>
         * Thus for a class such as "sun.xyz.OurButton" we would first look for a
         * BeanInfo class called "sun.xyz.OurButtonBeanInfo" and if that failed we'd
         * look in each package in the BeanInfo search path for an OurButtonBeanInfo
         * class.  With the default search path, this would mean looking for
         * "sun.beans.infos.OurButtonBeanInfo".
         * <p>
         * If a class provides explicit BeanInfo about itself then we add that to
         * the BeanInfo information we obtained from analyzing any derived classes,
         * but we regard the explicit information as being definitive for the current
         * class and its base classes, and do not proceed any further up the superclass
         * chain.
         * <p>
         * If we don't find explicit BeanInfo on a class, we use low-level
         * reflection to study the methods of the class and apply standard design
         * patterns to identify property accessors, event sources, or public
         * methods.  We then proceed to analyze the class's superclass and add
         * in the information from it (and possibly on up the superclass chain).
         * <p>
         * For more information about introspection and design patterns, please
         * consult the
         * <a href="http://www.oracle.com/technetwork/java/javase/documentation/spec-136004.html">JavaBeans&trade; specification</a>.
         */
        // @ts-ignore
        class Introspector extends java.lang.Object {
            /**
             * Flag to indicate to use of all beaninfo.
             */
            // @ts-ignore
            public static readonly USE_ALL_BEANINFO: number /*int*/
            /**
             * Flag to indicate to ignore immediate beaninfo.
             */
            // @ts-ignore
            public static readonly IGNORE_IMMEDIATE_BEANINFO: number /*int*/
            /**
             * Flag to indicate to ignore all beaninfo.
             */
            // @ts-ignore
            public static readonly IGNORE_ALL_BEANINFO: number /*int*/
            /**
             * Introspect on a Java Bean and learn about all its properties, exposed
             * methods, and events.
             * <p>
             * If the BeanInfo class for a Java Bean has been previously Introspected
             * then the BeanInfo class is retrieved from the BeanInfo cache.
             * @param beanClass  The bean class to be analyzed.
             * @return A BeanInfo object describing the target bean.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             * @see #flushCaches
             * @see #flushFromCaches
             */
            // @ts-ignore
            public static getBeanInfo(beanClass: java.lang.Class<any>): java.beans.BeanInfo
            /**
             * Introspect on a Java bean and learn about all its properties, exposed
             * methods, and events, subject to some control flags.
             * <p>
             * If the BeanInfo class for a Java Bean has been previously Introspected
             * based on the same arguments then the BeanInfo class is retrieved
             * from the BeanInfo cache.
             * @param beanClass  The bean class to be analyzed.
             * @param flags  Flags to control the introspection.
             *      If flags == USE_ALL_BEANINFO then we use all of the BeanInfo
             *           classes we can discover.
             *      If flags == IGNORE_IMMEDIATE_BEANINFO then we ignore any
             *            BeanInfo associated with the specified beanClass.
             *      If flags == IGNORE_ALL_BEANINFO then we ignore all BeanInfo
             *            associated with the specified beanClass or any of its
             *            parent classes.
             * @return A BeanInfo object describing the target bean.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            public static getBeanInfo(beanClass: java.lang.Class<any>, flags: number /*int*/): java.beans.BeanInfo
            /**
             * Introspect on a Java bean and learn all about its properties, exposed
             * methods, below a given "stop" point.
             * <p>
             * If the BeanInfo class for a Java Bean has been previously Introspected
             * based on the same arguments, then the BeanInfo class is retrieved
             * from the BeanInfo cache.
             * @return the BeanInfo for the bean
             * @param beanClass The bean class to be analyzed.
             * @param stopClass The baseclass at which to stop the analysis.  Any
             *     methods/properties/events in the stopClass or in its baseclasses
             *     will be ignored in the analysis.
             * @exception IntrospectionException if an exception occurs during
             *               introspection.
             */
            // @ts-ignore
            public static getBeanInfo(beanClass: java.lang.Class<any>, stopClass: java.lang.Class<any>): java.beans.BeanInfo
            /**
             * Introspect on a Java Bean and learn about all its properties,
             * exposed methods and events, below a given {@code stopClass} point
             * subject to some control {@code flags}.
             * <dl>
             * <dt>USE_ALL_BEANINFO</dt>
             * <dd>Any BeanInfo that can be discovered will be used.</dd>
             * <dt>IGNORE_IMMEDIATE_BEANINFO</dt>
             * <dd>Any BeanInfo associated with the specified {@code beanClass} will be ignored.</dd>
             * <dt>IGNORE_ALL_BEANINFO</dt>
             * <dd>Any BeanInfo associated with the specified {@code beanClass}
             * or any of its parent classes will be ignored.</dd>
             * </dl>
             * Any methods/properties/events in the {@code stopClass}
             * or in its parent classes will be ignored in the analysis.
             * <p>
             * If the BeanInfo class for a Java Bean has been
             * previously introspected based on the same arguments then
             * the BeanInfo class is retrieved from the BeanInfo cache.
             * @param beanClass  the bean class to be analyzed
             * @param stopClass  the parent class at which to stop the analysis
             * @param flags      flags to control the introspection
             * @return a BeanInfo object describing the target bean
             * @exception IntrospectionException if an exception occurs during introspection
             * @since 1.7
             */
            // @ts-ignore
            public static getBeanInfo(beanClass: java.lang.Class<any>, stopClass: java.lang.Class<any>, flags: number /*int*/): java.beans.BeanInfo
            /**
             * Utility method to take a string and convert it to normal Java variable
             * name capitalization.  This normally means converting the first
             * character from upper case to lower case, but in the (unusual) special
             * case when there is more than one character and both the first and
             * second characters are upper case, we leave it alone.
             * <p>
             * Thus "FooBah" becomes "fooBah" and "X" becomes "x", but "URL" stays
             * as "URL".
             * @param name The string to be decapitalized.
             * @return The decapitalized version of the string.
             */
            // @ts-ignore
            public static decapitalize(name: java.lang.String | string): string
            /**
             * Gets the list of package names that will be used for
             * finding BeanInfo classes.
             * @return The array of package names that will be searched in
             *           order to find BeanInfo classes. The default value
             *           for this array is implementation-dependent; e.g.
             *           Sun implementation initially sets to {"sun.beans.infos"}.
             */
            // @ts-ignore
            public static getBeanInfoSearchPath(): string[]
            /**
             * Change the list of package names that will be used for
             * finding BeanInfo classes.  The behaviour of
             * this method is undefined if parameter path
             * is null.
             * <p>First, if there is a security manager, its <code>checkPropertiesAccess</code>
             * method is called. This could result in a SecurityException.
             * @param path  Array of package names.
             * @exception SecurityException  if a security manager exists and its
             *              <code>checkPropertiesAccess</code> method doesn't allow setting
             *               of system properties.
             * @see SecurityManager#checkPropertiesAccess
             */
            // @ts-ignore
            public static setBeanInfoSearchPath(path: java.lang.String[] | string[]): void
            /**
             * Flush all of the Introspector's internal caches.  This method is
             * not normally required.  It is normally only needed by advanced
             * tools that update existing "Class" objects in-place and need
             * to make the Introspector re-analyze existing Class objects.
             */
            // @ts-ignore
            public static flushCaches(): void
            /**
             * Flush the Introspector's internal cached information for a given class.
             * This method is not normally required.  It is normally only needed
             * by advanced tools that update existing "Class" objects in-place
             * and need to make the Introspector re-analyze an existing Class object.
             * Note that only the direct state associated with the target Class
             * object is flushed.  We do not flush state for other Class objects
             * with the same name, nor do we flush state for any related Class
             * objects (such as subclasses), even though their state may include
             * information indirectly obtained from the target Class object.
             * @param clz  Class object to be flushed.
             * @throws NullPointerException If the Class object is null.
             */
            // @ts-ignore
            public static flushFromCaches(clz: java.lang.Class<any>): void
        }
    }
}
