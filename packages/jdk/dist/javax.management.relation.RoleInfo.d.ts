declare namespace javax {
    namespace management {
        namespace relation {
            /**
             * A RoleInfo object summarises a role in a relation type.
             * <p>The <b>serialVersionUID</b> of this class is <code>2504952983494636987L</code>.
             * @since 1.5
             */
            // @ts-ignore
            class RoleInfo extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructor.
                 * @param roleName  name of the role.
                 * @param mbeanClassName  name of the class of MBean(s) expected to
                 *  be referenced in corresponding role.  If an MBean <em>M</em> is in
                 *  this role, then the MBean server must return true for
                 *  {#link MBeanServer#isInstanceOf isInstanceOf(M, mbeanClassName)}.
                 * @param read  flag to indicate if the corresponding role
                 *  can be read
                 * @param write  flag to indicate if the corresponding role
                 *  can be set
                 * @param min  minimum degree for role, i.e. minimum number of
                 *  MBeans to provide in corresponding role
                 *  Must be less than or equal to <tt>max</tt>.
                 *  (ROLE_CARDINALITY_INFINITY for unlimited)
                 * @param max  maximum degree for role, i.e. maximum number of
                 *  MBeans to provide in corresponding role
                 *  Must be greater than or equal to <tt>min</tt>
                 *  (ROLE_CARDINALITY_INFINITY for unlimited)
                 * @param descr  description of the role (can be null)
                 * @exception IllegalArgumentException  if null parameter
                 * @exception InvalidRoleInfoException  if the minimum degree is
                 *  greater than the maximum degree.
                 * @exception ClassNotFoundException As of JMX 1.2, this exception
                 *  can no longer be thrown.  It is retained in the declaration of
                 *  this class for compatibility with existing code.
                 * @exception NotCompliantMBeanException  if the class mbeanClassName
                 *  is not a MBean class.
                 */
                // @ts-ignore
                constructor(roleName: java.lang.String | string, mbeanClassName: java.lang.String | string, read: boolean, write: boolean, min: number /*int*/, max: number /*int*/, descr: java.lang.String | string)
                /**
                 * Constructor.
                 * @param roleName  name of the role
                 * @param mbeanClassName  name of the class of MBean(s) expected to
                 *  be referenced in corresponding role.  If an MBean <em>M</em> is in
                 *  this role, then the MBean server must return true for
                 *  {#link MBeanServer#isInstanceOf isInstanceOf(M, mbeanClassName)}.
                 * @param read  flag to indicate if the corresponding role
                 *  can be read
                 * @param write  flag to indicate if the corresponding role
                 *  can be set
                 * 
                 *  <P>Minimum and maximum degrees defaulted to 1.
                 *  <P>Description of role defaulted to null.
                 * @exception IllegalArgumentException  if null parameter
                 * @exception ClassNotFoundException As of JMX 1.2, this exception
                 *  can no longer be thrown.  It is retained in the declaration of
                 *  this class for compatibility with existing code.
                 * @exception NotCompliantMBeanException As of JMX 1.2, this
                 *  exception can no longer be thrown.  It is retained in the
                 *  declaration of this class for compatibility with existing code.
                 */
                // @ts-ignore
                constructor(roleName: java.lang.String | string, mbeanClassName: java.lang.String | string, read: boolean, write: boolean)
                /**
                 * Constructor.
                 * @param roleName  name of the role
                 * @param mbeanClassName  name of the class of MBean(s) expected to
                 *  be referenced in corresponding role.  If an MBean <em>M</em> is in
                 *  this role, then the MBean server must return true for
                 *  {#link MBeanServer#isInstanceOf isInstanceOf(M, mbeanClassName)}.
                 * 
                 *  <P>IsReadable and IsWritable defaulted to true.
                 *  <P>Minimum and maximum degrees defaulted to 1.
                 *  <P>Description of role defaulted to null.
                 * @exception IllegalArgumentException  if null parameter
                 * @exception ClassNotFoundException As of JMX 1.2, this exception
                 *  can no longer be thrown.  It is retained in the declaration of
                 *  this class for compatibility with existing code.
                 * @exception NotCompliantMBeanException As of JMX 1.2, this
                 *  exception can no longer be thrown.  It is retained in the
                 *  declaration of this class for compatibility with existing code.
                 */
                // @ts-ignore
                constructor(roleName: java.lang.String | string, mbeanClassName: java.lang.String | string)
                /**
                 * Copy constructor.
                 * @param roleInfo the <tt>RoleInfo</tt> instance to be copied.
                 * @exception IllegalArgumentException  if null parameter
                 */
                // @ts-ignore
                constructor(roleInfo: javax.management.relation.RoleInfo)
                /**
                 * To specify an unlimited cardinality.
                 */
                // @ts-ignore
                public static readonly ROLE_CARDINALITY_INFINITY: number /*int*/
                /**
                 * Returns the name of the role.
                 * @return the name of the role.
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Returns read access mode for the role (true if it is readable).
                 * @return true if the role is readable.
                 */
                // @ts-ignore
                public isReadable(): boolean
                /**
                 * Returns write access mode for the role (true if it is writable).
                 * @return true if the role is writable.
                 */
                // @ts-ignore
                public isWritable(): boolean
                /**
                 * Returns description text for the role.
                 * @return the description of the role.
                 */
                // @ts-ignore
                public getDescription(): string
                /**
                 * Returns minimum degree for corresponding role reference.
                 * @return the minimum degree.
                 */
                // @ts-ignore
                public getMinDegree(): number /*int*/
                /**
                 * Returns maximum degree for corresponding role reference.
                 * @return the maximum degree.
                 */
                // @ts-ignore
                public getMaxDegree(): number /*int*/
                /**
                 * <p>Returns name of type of MBean expected to be referenced in
                 * corresponding role.</p>
                 * @return the name of the referenced type.
                 */
                // @ts-ignore
                public getRefMBeanClassName(): string
                /**
                 * Returns true if the <tt>value</tt> parameter is greater than or equal to
                 * the expected minimum degree, false otherwise.
                 * @param value  the value to be checked
                 * @return true if greater than or equal to minimum degree, false otherwise.
                 */
                // @ts-ignore
                public checkMinDegree(value: number /*int*/): boolean
                /**
                 * Returns true if the <tt>value</tt> parameter is lower than or equal to
                 * the expected maximum degree, false otherwise.
                 * @param value  the value to be checked
                 * @return true if lower than or equal to maximum degree, false otherwise.
                 */
                // @ts-ignore
                public checkMaxDegree(value: number /*int*/): boolean
                /**
                 * Returns a string describing the role info.
                 * @return a description of the role info.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
