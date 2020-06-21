declare namespace java {
    namespace lang {
        namespace management {
            /**
             * This class represents information about objects locked via
             * a synchronized method or block.
             * @since 1.6
             */
            // @ts-ignore
            class MonitorInfo extends java.lang.management.LockInfo {
                /**
                 * Creates a new <code>MonitorInfo</code> instance.
                 * @param className
                 *             the name (including the package prefix) of the associated
                 *             monitor lock object's class
                 * @param identityHashCode
                 *             the value of the associated monitor lock object's identity
                 *             hash code. This amounts to the result of calling
                 *             {#link System#identityHashCode(Object)} with the monitor lock
                 *             object as the sole argument.
                 * @param stackDepth
                 *             the number of frames deep in the stack where the locking of
                 *             the monitor took place
                 * @param stackFrame
                 *             the complete stack frame at which the locking of the monitor
                 *             occurred
                 * @throws IllegalArgumentException
                 *              if either of the following two conditions apply:
                 *              <ul>
                 *              <li>the supplied <code>stackFrame</code> is non-<code>null</code>
                 *              yet the value of <code>stackDepth</code> is less than zero
                 *              <li>the supplied <code>stackFrame</code> is
                 *              <code>null</code> yet the value of <code>stackDepth</code>
                 *              is zero or greater
                 *              </ul>
                 */
                // @ts-ignore
                constructor(className: java.lang.String | string, identityHashCode: number /*int*/, stackDepth: number /*int*/, stackFrame: java.lang.StackTraceElement)
                /**
                 * Returns an integer which is the number of frames deep into the stack
                 * where the monitor locking took place.
                 * @return the number of frames into the stack trace at which point the
                 *          monitor object locking too place
                 */
                // @ts-ignore
                public getLockedStackDepth(): number /*int*/
                /**
                 * The complete {@link StackTraceElement} in which the monitor was locked.
                 * @return the <code>StackTraceElement</code> in which the associated
                 *          monitor was locked
                 */
                // @ts-ignore
                public getLockedStackFrame(): java.lang.StackTraceElement
                /**
                 * Receives a {@link CompositeData} representing a <code>MonitorInfo</code>
                 * object and attempts to return the root <code>MonitorInfo</code>
                 * instance.
                 * @param cd
                 *             a <code>CompositeData</code> that represents a
                 *             <code>MonitorInfo</code>.
                 * @return if <code>cd</code> is non- <code>null</code>, returns a new
                 *          instance of <code>MonitorInfo</code>. If <code>cd</code> is
                 *          <code>null</code>, returns <code>null</code>.
                 * @throws IllegalArgumentException
                 *              if argument <code>cd</code> does not correspond to a
                 *              <code>MonitorInfo</code> with the expected attributes of a
                 *              {#link LockInfo}&nbsp;-&nbsp;<code>className</code>(<code>java.lang.String</code>)
                 *              and <code>identityHashCode</code>(<code>java.lang.Integer</code>)&nbsp;-&nbsp;
                 *              plus the following:
                 *              <ul>
                 *              <li><code>lockedStackFrame</code>(<code>javax.management.openmbean.CompositeData</code>)
                 *              <li><code>lockedStackDepth</code>(
                 *              <code>java.lang.Integer</code>)
                 *              </ul>
                 *              The <code>lockedStackFrame</code> attribute must correspond
                 *              to a <code>java.lang.StackTraceElement</code> which has the
                 *              following attributes:
                 *              <ul>
                 *              <li><code>className</code> (<code>java.lang.String</code>)
                 *              <li><code>methodName</code> (<code>java.lang.String</code>)
                 *              <li><code>fileName</code> (<code>java.lang.String</code>)
                 *              <li><code>lineNumber</code> (<code>java.lang.Integer</code>)
                 *              <li><code>nativeMethod</code> (<code>java.lang.Boolean</code>)
                 *              </ul>
                 */
                // @ts-ignore
                public static from(cd: javax.management.openmbean.CompositeData): java.lang.management.MonitorInfo
            }
        }
    }
}
