declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * The AccessibleObject class is the base class for Field, Method and
             * Constructor objects.  It provides the ability to flag a reflected
             * object as suppressing default Java language access control checks
             * when it is used.  The access checks--for public, default (package)
             * access, protected, and private members--are performed when Fields,
             * Methods or Constructors are used to set or get fields, to invoke
             * methods, or to create and initialize new instances of classes,
             * respectively.
             * <p>Setting the {@code accessible} flag in a reflected object
             * permits sophisticated applications with sufficient privilege, such
             * as Java Object Serialization or other persistence mechanisms, to
             * manipulate objects in a manner that would normally be prohibited.
             * <p>By default, a reflected object is <em>not</em> accessible.
             * @see Field
             * @see Method
             * @see Constructor
             * @see ReflectPermission
             * @since 1.2
             */
            // @ts-ignore
            class AccessibleObject extends java.lang.Object implements java.lang.reflect.AnnotatedElement {
                /**
                 * Constructor: only used by the Java Virtual Machine.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Convenience method to set the {@code accessible} flag for an
                 * array of objects with a single security check (for efficiency).
                 * <p>First, if there is a security manager, its
                 * {@code checkPermission} method is called with a
                 * {@code ReflectPermission("suppressAccessChecks")} permission.
                 * <p>A {@code SecurityException} is raised if {@code flag} is
                 * {@code true} but accessibility of any of the elements of the input
                 * {@code array} may not be changed (for example, if the element
                 * object is a {@link Constructor} object for the class {@link
                 * java.lang.Class}).  In the event of such a SecurityException, the
                 * accessibility of objects is set to {@code flag} for array elements
                 * upto (and excluding) the element for which the exception occurred; the
                 * accessibility of elements beyond (and including) the element for which
                 * the exception occurred is unchanged.
                 * @param array the array of AccessibleObjects
                 * @param flag  the new value for the {#code accessible} flag
                 *               in each object
                 * @throws SecurityException if the request is denied.
                 * @see SecurityManager#checkPermission
                 * @see java.lang.RuntimePermission
                 */
                // @ts-ignore
                public static setAccessible(array: java.lang.reflect.AccessibleObject[], flag: boolean): void
                /**
                 * Set the {@code accessible} flag for this object to
                 * the indicated boolean value.  A value of {@code true} indicates that
                 * the reflected object should suppress Java language access
                 * checking when it is used.  A value of {@code false} indicates
                 * that the reflected object should enforce Java language access checks.
                 * <p>First, if there is a security manager, its
                 * {@code checkPermission} method is called with a
                 * {@code ReflectPermission("suppressAccessChecks")} permission.
                 * <p>A {@code SecurityException} is raised if {@code flag} is
                 * {@code true} but accessibility of this object may not be changed
                 * (for example, if this element object is a {@link Constructor} object for
                 * the class {@link java.lang.Class}).
                 * <p>A {@code SecurityException} is raised if this object is a {@link
                 * java.lang.reflect.Constructor} object for the class
                 * {@code java.lang.Class}, and {@code flag} is true.
                 * @param flag the new value for the {#code accessible} flag
                 * @throws SecurityException if the request is denied.
                 * @see SecurityManager#checkPermission
                 * @see java.lang.RuntimePermission
                 */
                // @ts-ignore
                public setAccessible(flag: boolean): void
                /**
                 * Get the value of the {@code accessible} flag for this object.
                 * @return the value of the object's {#code accessible} flag
                 */
                // @ts-ignore
                public isAccessible(): boolean
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.5
                 */
                // @ts-ignore
                public getAnnotation<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * {@inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.5
                 */
                // @ts-ignore
                public isAnnotationPresent(annotationClass: java.lang.Class<any>): boolean
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                public getAnnotationsByType<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * @since 1.5
                 */
                // @ts-ignore
                public getAnnotations(): java.lang.annotation.Annotation[]
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                public getDeclaredAnnotation<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                public getDeclaredAnnotationsByType<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * @since 1.5
                 */
                // @ts-ignore
                public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
            }
        }
    }
}
