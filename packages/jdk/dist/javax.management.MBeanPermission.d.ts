declare namespace javax {
    namespace management {
        /**
         * <p>Permission controlling access to MBeanServer operations.  If a
         * security manager has been set using {@link
         * System#setSecurityManager}, most operations on the MBean Server
         * require that the caller's permissions imply an MBeanPermission
         * appropriate for the operation.  This is described in detail in the
         * documentation for the {@link MBeanServer} interface.</p>
         * <p>As with other {@link Permission} objects, an MBeanPermission can
         * represent either a permission that you <em>have</em> or a
         * permission that you <em>need</em>.  When a sensitive operation is
         * being checked for permission, an MBeanPermission is constructed
         * representing the permission you need.  The operation is only
         * allowed if the permissions you have {@linkplain #implies imply} the
         * permission you need.</p>
         * <p>An MBeanPermission contains four items of information:</p>
         * <ul>
         * <li><p>The <em>action</em>.  For a permission you need,
         * this is one of the actions in the list <a
         * href="#action-list">below</a>.  For a permission you have, this is
         * a comma-separated list of those actions, or <code>*</code>,
         * representing all actions.</p>
         * <p>The action is returned by {@link #getActions()}.</p>
         * <li><p>The <em>class name</em>.</p>
         * <p>For a permission you need, this is the class name of an MBean
         * you are accessing, as returned by {@link
         * MBeanServer#getMBeanInfo(ObjectName)
         * MBeanServer.getMBeanInfo(name)}.{@link MBeanInfo#getClassName()
         * getClassName()}.  Certain operations do not reference a class name,
         * in which case the class name is null.</p>
         * <p>For a permission you have, this is either empty or a <em>class
         * name pattern</em>.  A class name pattern is a string following the
         * Java conventions for dot-separated class names.  It may end with
         * "<code>.*</code>" meaning that the permission grants access to any
         * class that begins with the string preceding "<code>.*</code>".  For
         * instance, "<code>javax.management.*</code>" grants access to
         * <code>javax.management.MBeanServerDelegate</code> and
         * <code>javax.management.timer.Timer</code>, among other classes.</p>
         * <p>A class name pattern can also be empty or the single character
         * "<code>*</code>", both of which grant access to any class.</p>
         * <li><p>The <em>member</em>.</p>
         * <p>For a permission you need, this is the name of the attribute or
         * operation you are accessing.  For operations that do not reference
         * an attribute or operation, the member is null.</p>
         * <p>For a permission you have, this is either the name of an attribute
         * or operation you can access, or it is empty or the single character
         * "<code>*</code>", both of which grant access to any member.</p>
         * <li id="MBeanName"><p>The <em>object name</em>.</p>
         * <p>For a permission you need, this is the {@link ObjectName} of the
         * MBean you are accessing.  For operations that do not reference a
         * single MBean, it is null.  It is never an object name pattern.</p>
         * <p>For a permission you have, this is the {@link ObjectName} of the
         * MBean or MBeans you can access.  It may be an object name pattern
         * to grant access to all MBeans whose names match the pattern.  It
         * may also be empty, which grants access to all MBeans whatever their
         * name.</p>
         * </ul>
         * <p>If you have an MBeanPermission, it allows operations only if all
         * four of the items match.</p>
         * <p>The class name, member, and object name can be written together
         * as a single string, which is the <em>name</em> of this permission.
         * The name of the permission is the string returned by {@link
         * Permission#getName() getName()}.  The format of the string is:</p>
         * <blockquote>
         * <code>className#member[objectName]</code>
         * </blockquote>
         * <p>The object name is written using the usual syntax for {@link
         * ObjectName}.  It may contain any legal characters, including
         * <code>]</code>.  It is terminated by a <code>]</code> character
         * that is the last character in the string.</p>
         * <p>One or more of the <code>className</code>, <code>member</code>,
         * or <code>objectName</code> may be omitted.  If the
         * <code>member</code> is omitted, the <code>#</code> may be too (but
         * does not have to be).  If the <code>objectName</code> is omitted,
         * the <code>[]</code> may be too (but does not have to be).  It is
         * not legal to omit all three items, that is to have a <em>name</em>
         * that is the empty string.</p>
         * <p>One or more of the <code>className</code>, <code>member</code>,
         * or <code>objectName</code> may be the character "<code>-</code>",
         * which is equivalent to a null value.  A null value is implied by
         * any value (including another null value) but does not imply any
         * other value.</p>
         * <p><a name="action-list">The possible actions are these:</a></p>
         * <ul>
         * <li>addNotificationListener</li>
         * <li>getAttribute</li>
         * <li>getClassLoader</li>
         * <li>getClassLoaderFor</li>
         * <li>getClassLoaderRepository</li>
         * <li>getDomains</li>
         * <li>getMBeanInfo</li>
         * <li>getObjectInstance</li>
         * <li>instantiate</li>
         * <li>invoke</li>
         * <li>isInstanceOf</li>
         * <li>queryMBeans</li>
         * <li>queryNames</li>
         * <li>registerMBean</li>
         * <li>removeNotificationListener</li>
         * <li>setAttribute</li>
         * <li>unregisterMBean</li>
         * </ul>
         * <p>In a comma-separated list of actions, spaces are allowed before
         * and after each action.</p>
         * @since 1.5
         */
        // @ts-ignore
        class MBeanPermission extends java.security.Permission {
            /**
             * <p>Create a new MBeanPermission object with the specified target name
             * and actions.</p>
             * <p>The target name is of the form
             * "<code>className#member[objectName]</code>" where each part is
             * optional.  It must not be empty or null.</p>
             * <p>The actions parameter contains a comma-separated list of the
             * desired actions granted on the target name.  It must not be
             * empty or null.</p>
             * @param name the triplet "className#member[objectName]".
             * @param actions the action string.
             * @exception IllegalArgumentException if the <code>name</code> or
             *  <code>actions</code> is invalid.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
            /**
             * <p>Create a new MBeanPermission object with the specified target name
             * (class name, member, object name) and actions.</p>
             * <p>The class name, member and object name parameters define a
             * target name of the form
             * "<code>className#member[objectName]</code>" where each part is
             * optional.  This will be the result of {@link #getName()} on the
             * resultant MBeanPermission.</p>
             * <p>The actions parameter contains a comma-separated list of the
             * desired actions granted on the target name.  It must not be
             * empty or null.</p>
             * @param className the class name to which this permission applies.
             *  May be null or <code>"-"</code>, which represents a class name
             *  that is implied by any class name but does not imply any other
             *  class name.
             * @param member the member to which this permission applies.  May
             *  be null or <code>"-"</code>, which represents a member that is
             *  implied by any member but does not imply any other member.
             * @param objectName the object name to which this permission
             *  applies.  May be null, which represents an object name that is
             *  implied by any object name but does not imply any other object
             *  name.
             * @param actions the action string.
             */
            // @ts-ignore
            constructor(className: string, member: string, objectName: javax.management.ObjectName, actions: string)
            /**
             * Returns the "canonical string representation" of the actions. That is,
             * this method always returns present actions in alphabetical order.
             * @return the canonical string representation of the actions.
             */
            // @ts-ignore
            getActions(): java.lang.String
            /**
             * Returns the hash code value for this object.
             * @return a hash code value for this object.
             */
            // @ts-ignore
            hashCode(): int
            /**
             * <p>Checks if this MBeanPermission object "implies" the
             * specified permission.</p>
             * <p>More specifically, this method returns true if:</p>
             * <ul>
             * <li> <i>p</i> is an instance of MBeanPermission; and</li>
             * <li> <i>p</i> has a null className or <i>p</i>'s className
             * matches this object's className; and</li>
             * <li> <i>p</i> has a null member or <i>p</i>'s member matches this
             * object's member; and</li>
             * <li> <i>p</i> has a null object name or <i>p</i>'s
             * object name matches this object's object name; and</li>
             * <li> <i>p</i>'s actions are a subset of this object's actions</li>
             * </ul>
             * <p>If this object's className is "<code>*</code>", <i>p</i>'s
             * className always matches it.  If it is "<code>a.*</code>", <i>p</i>'s
             * className matches it if it begins with "<code>a.</code>".</p>
             * <p>If this object's member is "<code>*</code>", <i>p</i>'s
             * member always matches it.</p>
             * <p>If this object's objectName <i>n1</i> is an object name pattern,
             * <i>p</i>'s objectName <i>n2</i> matches it if
             * {@link ObjectName#equals <i>n1</i>.equals(<i>n2</i>)} or if
             * {@link ObjectName#apply <i>n1</i>.apply(<i>n2</i>)}.</p>
             * <p>A permission that includes the <code>queryMBeans</code> action
             * is considered to include <code>queryNames</code> as well.</p>
             * @param p the permission to check against.
             * @return true if the specified permission is implied by this object,
             *  false if not.
             */
            // @ts-ignore
            implies(p: java.security.Permission): boolean
            /**
             * Checks two MBeanPermission objects for equality. Checks
             * that <i>obj</i> is an MBeanPermission, and has the same
             * name and actions as this object.
             * <P>
             * @param obj the object we are testing for equality with this object.
             * @return true if obj is an MBeanPermission, and has the
             *  same name and actions as this MBeanPermission object.
             */
            // @ts-ignore
            equals(obj: any): boolean
        }
    }
}
