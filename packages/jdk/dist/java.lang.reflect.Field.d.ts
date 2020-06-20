declare namespace java {
    namespace lang {
        namespace reflect {
            /**
             * A {@code Field} provides information about, and dynamic access to, a
             * single field of a class or an interface.  The reflected field may
             * be a class (static) field or an instance field.
             * <p>A {@code Field} permits widening conversions to occur during a get or
             * set access operation, but throws an {@code IllegalArgumentException} if a
             * narrowing conversion would occur.
             * @see Member
             * @see java.lang.Class
             * @see java.lang.Class#getFields()
             * @see java.lang.Class#getField(String)
             * @see java.lang.Class#getDeclaredFields()
             * @see java.lang.Class#getDeclaredField(String)
             * @author Kenneth Russell
             * @author Nakul Saraiya
             */
            // @ts-ignore
            class Field extends java.lang.reflect.AccessibleObject implements java.lang.reflect.Member {
                /**
                 * Returns the {@code Class} object representing the class or interface
                 * that declares the field represented by this {@code Field} object.
                 */
                // @ts-ignore
                getDeclaringClass(): java.lang.Class<?>
                /**
                 * Returns the name of the field represented by this {@code Field} object.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Returns the Java language modifiers for the field represented
                 * by this {@code Field} object, as an integer. The {@code Modifier} class should
                 * be used to decode the modifiers.
                 * @see Modifier
                 */
                // @ts-ignore
                getModifiers(): int
                /**
                 * Returns {@code true} if this field represents an element of
                 * an enumerated type; returns {@code false} otherwise.
                 * @return {#code true} if and only if this field represents an element of
                 *  an enumerated type.
                 * @since 1.5
                 */
                // @ts-ignore
                isEnumConstant(): boolean
                /**
                 * Returns {@code true} if this field is a synthetic
                 * field; returns {@code false} otherwise.
                 * @return true if and only if this field is a synthetic
                 *  field as defined by the Java Language Specification.
                 * @since 1.5
                 */
                // @ts-ignore
                isSynthetic(): boolean
                /**
                 * Returns a {@code Class} object that identifies the
                 * declared type for the field represented by this
                 * {@code Field} object.
                 * @return a {#code Class} object identifying the declared
                 *  type of the field represented by this object
                 */
                // @ts-ignore
                getType(): java.lang.Class<?>
                /**
                 * Returns a {@code Type} object that represents the declared type for
                 * the field represented by this {@code Field} object.
                 * <p>If the {@code Type} is a parameterized type, the
                 * {@code Type} object returned must accurately reflect the
                 * actual type parameters used in the source code.
                 * <p>If the type of the underlying field is a type variable or a
                 * parameterized type, it is created. Otherwise, it is resolved.
                 * @return a {#code Type} object that represents the declared type for
                 *      the field represented by this {@code Field} object
                 * @throws GenericSignatureFormatError if the generic field
                 *      signature does not conform to the format specified in
                 *      <cite>The Java&trade; Virtual Machine Specification</cite>
                 * @throws TypeNotPresentException if the generic type
                 *      signature of the underlying field refers to a non-existent
                 *      type declaration
                 * @throws MalformedParameterizedTypeException if the generic
                 *      signature of the underlying field refers to a parameterized type
                 *      that cannot be instantiated for any reason
                 * @since 1.5
                 */
                // @ts-ignore
                getGenericType(): java.lang.reflect.Type
                /**
                 * Compares this {@code Field} against the specified object.  Returns
                 * true if the objects are the same.  Two {@code Field} objects are the same if
                 * they were declared by the same class and have the same name
                 * and type.
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a hashcode for this {@code Field}.  This is computed as the
                 * exclusive-or of the hashcodes for the underlying field's
                 * declaring class name and its name.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Returns a string describing this {@code Field}.  The format is
                 * the access modifiers for the field, if any, followed
                 * by the field type, followed by a space, followed by
                 * the fully-qualified name of the class declaring the field,
                 * followed by a period, followed by the name of the field.
                 * For example:
                 * <pre>
                 * public static final int java.lang.Thread.MIN_PRIORITY
                 * private int java.io.FileDescriptor.fd
                 * </pre>
                 * <p>The modifiers are placed in canonical order as specified by
                 * "The Java Language Specification".  This is {@code public},
                 * {@code protected} or {@code private} first, and then other
                 * modifiers in the following order: {@code static}, {@code final},
                 * {@code transient}, {@code volatile}.
                 * @return a string describing this {#code Field}
                 * @jls 8.3.1 Field Modifiers
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Returns a string describing this {@code Field}, including
                 * its generic type.  The format is the access modifiers for the
                 * field, if any, followed by the generic field type, followed by
                 * a space, followed by the fully-qualified name of the class
                 * declaring the field, followed by a period, followed by the name
                 * of the field.
                 * <p>The modifiers are placed in canonical order as specified by
                 * "The Java Language Specification".  This is {@code public},
                 * {@code protected} or {@code private} first, and then other
                 * modifiers in the following order: {@code static}, {@code final},
                 * {@code transient}, {@code volatile}.
                 * @return a string describing this {#code Field}, including
                 *  its generic type
                 * @since 1.5
                 * @jls 8.3.1 Field Modifiers
                 */
                // @ts-ignore
                toGenericString(): java.lang.String
                /**
                 * Returns the value of the field represented by this {@code Field}, on
                 * the specified object. The value is automatically wrapped in an
                 * object if it has a primitive type.
                 * <p>The underlying field's value is obtained as follows:
                 * <p>If the underlying field is a static field, the {@code obj} argument
                 * is ignored; it may be null.
                 * <p>Otherwise, the underlying field is an instance field.  If the
                 * specified {@code obj} argument is null, the method throws a
                 * {@code NullPointerException}. If the specified object is not an
                 * instance of the class or interface declaring the underlying
                 * field, the method throws an {@code IllegalArgumentException}.
                 * <p>If this {@code Field} object is enforcing Java language access control, and
                 * the underlying field is inaccessible, the method throws an
                 * {@code IllegalAccessException}.
                 * If the underlying field is static, the class that declared the
                 * field is initialized if it has not already been initialized.
                 * <p>Otherwise, the value is retrieved from the underlying instance
                 * or static field.  If the field has a primitive type, the value
                 * is wrapped in an object before being returned, otherwise it is
                 * returned as is.
                 * <p>If the field is hidden in the type of {@code obj},
                 * the field's value is obtained according to the preceding rules.
                 * @param obj object from which the represented field's value is
                 *  to be extracted
                 * @return the value of the represented field in object
                 *  {#code obj}; primitive values are wrapped in an appropriate
                 *  object before being returned
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof).
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 */
                // @ts-ignore
                get(obj: any): java.lang.Object
                /**
                 * Gets the value of a static or instance {@code boolean} field.
                 * @param obj the object to extract the {#code boolean} value
                 *  from
                 * @return the value of the {#code boolean} field
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not
                 *               an instance of the class or interface declaring the
                 *               underlying field (or a subclass or implementor
                 *               thereof), or if the field value cannot be
                 *               converted to the type {#code boolean} by a
                 *               widening conversion.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#get
                 */
                // @ts-ignore
                getBoolean(obj: any): boolean
                /**
                 * Gets the value of a static or instance {@code byte} field.
                 * @param obj the object to extract the {#code byte} value
                 *  from
                 * @return the value of the {#code byte} field
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not
                 *               an instance of the class or interface declaring the
                 *               underlying field (or a subclass or implementor
                 *               thereof), or if the field value cannot be
                 *               converted to the type {#code byte} by a
                 *               widening conversion.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#get
                 */
                // @ts-ignore
                getByte(obj: any): byte
                /**
                 * Gets the value of a static or instance field of type
                 * {@code char} or of another primitive type convertible to
                 * type {@code char} via a widening conversion.
                 * @param obj the object to extract the {#code char} value
                 *  from
                 * @return the value of the field converted to type {#code char}
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not
                 *               an instance of the class or interface declaring the
                 *               underlying field (or a subclass or implementor
                 *               thereof), or if the field value cannot be
                 *               converted to the type {#code char} by a
                 *               widening conversion.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#get
                 */
                // @ts-ignore
                getChar(obj: any): char
                /**
                 * Gets the value of a static or instance field of type
                 * {@code short} or of another primitive type convertible to
                 * type {@code short} via a widening conversion.
                 * @param obj the object to extract the {#code short} value
                 *  from
                 * @return the value of the field converted to type {#code short}
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not
                 *               an instance of the class or interface declaring the
                 *               underlying field (or a subclass or implementor
                 *               thereof), or if the field value cannot be
                 *               converted to the type {#code short} by a
                 *               widening conversion.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#get
                 */
                // @ts-ignore
                getShort(obj: any): short
                /**
                 * Gets the value of a static or instance field of type
                 * {@code int} or of another primitive type convertible to
                 * type {@code int} via a widening conversion.
                 * @param obj the object to extract the {#code int} value
                 *  from
                 * @return the value of the field converted to type {#code int}
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not
                 *               an instance of the class or interface declaring the
                 *               underlying field (or a subclass or implementor
                 *               thereof), or if the field value cannot be
                 *               converted to the type {#code int} by a
                 *               widening conversion.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#get
                 */
                // @ts-ignore
                getInt(obj: any): int
                /**
                 * Gets the value of a static or instance field of type
                 * {@code long} or of another primitive type convertible to
                 * type {@code long} via a widening conversion.
                 * @param obj the object to extract the {#code long} value
                 *  from
                 * @return the value of the field converted to type {#code long}
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not
                 *               an instance of the class or interface declaring the
                 *               underlying field (or a subclass or implementor
                 *               thereof), or if the field value cannot be
                 *               converted to the type {#code long} by a
                 *               widening conversion.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#get
                 */
                // @ts-ignore
                getLong(obj: any): long
                /**
                 * Gets the value of a static or instance field of type
                 * {@code float} or of another primitive type convertible to
                 * type {@code float} via a widening conversion.
                 * @param obj the object to extract the {#code float} value
                 *  from
                 * @return the value of the field converted to type {#code float}
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not
                 *               an instance of the class or interface declaring the
                 *               underlying field (or a subclass or implementor
                 *               thereof), or if the field value cannot be
                 *               converted to the type {#code float} by a
                 *               widening conversion.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#get
                 */
                // @ts-ignore
                getFloat(obj: any): float
                /**
                 * Gets the value of a static or instance field of type
                 * {@code double} or of another primitive type convertible to
                 * type {@code double} via a widening conversion.
                 * @param obj the object to extract the {#code double} value
                 *  from
                 * @return the value of the field converted to type {#code double}
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is inaccessible.
                 * @exception IllegalArgumentException  if the specified object is not
                 *               an instance of the class or interface declaring the
                 *               underlying field (or a subclass or implementor
                 *               thereof), or if the field value cannot be
                 *               converted to the type {#code double} by a
                 *               widening conversion.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#get
                 */
                // @ts-ignore
                getDouble(obj: any): double
                /**
                 * Sets the field represented by this {@code Field} object on the
                 * specified object argument to the specified new value. The new
                 * value is automatically unwrapped if the underlying field has a
                 * primitive type.
                 * <p>The operation proceeds as follows:
                 * <p>If the underlying field is static, the {@code obj} argument is
                 * ignored; it may be null.
                 * <p>Otherwise the underlying field is an instance field.  If the
                 * specified object argument is null, the method throws a
                 * {@code NullPointerException}.  If the specified object argument is not
                 * an instance of the class or interface declaring the underlying
                 * field, the method throws an {@code IllegalArgumentException}.
                 * <p>If this {@code Field} object is enforcing Java language access control, and
                 * the underlying field is inaccessible, the method throws an
                 * {@code IllegalAccessException}.
                 * <p>If the underlying field is final, the method throws an
                 * {@code IllegalAccessException} unless {@code setAccessible(true)}
                 * has succeeded for this {@code Field} object
                 * and the field is non-static. Setting a final field in this way
                 * is meaningful only during deserialization or reconstruction of
                 * instances of classes with blank final fields, before they are
                 * made available for access by other parts of a program. Use in
                 * any other context may have unpredictable effects, including cases
                 * in which other parts of a program continue to use the original
                 * value of this field.
                 * <p>If the underlying field is of a primitive type, an unwrapping
                 * conversion is attempted to convert the new value to a value of
                 * a primitive type.  If this attempt fails, the method throws an
                 * {@code IllegalArgumentException}.
                 * <p>If, after possible unwrapping, the new value cannot be
                 * converted to the type of the underlying field by an identity or
                 * widening conversion, the method throws an
                 * {@code IllegalArgumentException}.
                 * <p>If the underlying field is static, the class that declared the
                 * field is initialized if it has not already been initialized.
                 * <p>The field is set to the possibly unwrapped and widened new value.
                 * <p>If the field is hidden in the type of {@code obj},
                 * the field's value is set according to the preceding rules.
                 * @param obj the object whose field should be modified
                 * @param value the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 */
                // @ts-ignore
                set(obj: any, value: any): void
                /**
                 * Sets the value of a field as a {@code boolean} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, zObj)},
                 * where {@code zObj} is a {@code Boolean} object and
                 * {@code zObj.booleanValue() == z}.
                 * @param obj the object whose field should be modified
                 * @param z   the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#set
                 */
                // @ts-ignore
                setBoolean(obj: any, z: boolean): void
                /**
                 * Sets the value of a field as a {@code byte} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, bObj)},
                 * where {@code bObj} is a {@code Byte} object and
                 * {@code bObj.byteValue() == b}.
                 * @param obj the object whose field should be modified
                 * @param b   the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#set
                 */
                // @ts-ignore
                setByte(obj: any, b: number /*byte*/): void
                /**
                 * Sets the value of a field as a {@code char} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, cObj)},
                 * where {@code cObj} is a {@code Character} object and
                 * {@code cObj.charValue() == c}.
                 * @param obj the object whose field should be modified
                 * @param c   the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#set
                 */
                // @ts-ignore
                setChar(obj: any, c: string): void
                /**
                 * Sets the value of a field as a {@code short} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, sObj)},
                 * where {@code sObj} is a {@code Short} object and
                 * {@code sObj.shortValue() == s}.
                 * @param obj the object whose field should be modified
                 * @param s   the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#set
                 */
                // @ts-ignore
                setShort(obj: any, s: number /*short*/): void
                /**
                 * Sets the value of a field as an {@code int} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, iObj)},
                 * where {@code iObj} is a {@code Integer} object and
                 * {@code iObj.intValue() == i}.
                 * @param obj the object whose field should be modified
                 * @param i   the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#set
                 */
                // @ts-ignore
                setInt(obj: any, i: number /*int*/): void
                /**
                 * Sets the value of a field as a {@code long} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, lObj)},
                 * where {@code lObj} is a {@code Long} object and
                 * {@code lObj.longValue() == l}.
                 * @param obj the object whose field should be modified
                 * @param l   the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#set
                 */
                // @ts-ignore
                setLong(obj: any, l: number /*long*/): void
                /**
                 * Sets the value of a field as a {@code float} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, fObj)},
                 * where {@code fObj} is a {@code Float} object and
                 * {@code fObj.floatValue() == f}.
                 * @param obj the object whose field should be modified
                 * @param f   the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#set
                 */
                // @ts-ignore
                setFloat(obj: any, f: number /*float*/): void
                /**
                 * Sets the value of a field as a {@code double} on the specified object.
                 * This method is equivalent to
                 * {@code set(obj, dObj)},
                 * where {@code dObj} is a {@code Double} object and
                 * {@code dObj.doubleValue() == d}.
                 * @param obj the object whose field should be modified
                 * @param d   the new value for the field of {#code obj}
                 *  being modified
                 * @exception IllegalAccessException    if this {#code Field} object
                 *               is enforcing Java language access control and the underlying
                 *               field is either inaccessible or final.
                 * @exception IllegalArgumentException  if the specified object is not an
                 *               instance of the class or interface declaring the underlying
                 *               field (or a subclass or implementor thereof),
                 *               or if an unwrapping conversion fails.
                 * @exception NullPointerException      if the specified object is null
                 *               and the field is an instance field.
                 * @exception ExceptionInInitializerError if the initialization provoked
                 *               by this method fails.
                 * @see Field#set
                 */
                // @ts-ignore
                setDouble(obj: any, d: number /*double*/): void
                /**
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.5
                 */
                // @ts-ignore
                getAnnotation<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * {@inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                getAnnotationsByType<T extends java.lang.annotation.Annotation>(annotationClass: java.lang.Class<T>): T
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                getDeclaredAnnotations(): java.lang.annotation.Annotation[]
                /**
                 * Returns an AnnotatedType object that represents the use of a type to specify
                 * the declared type of the field represented by this Field.
                 * @return an object representing the declared type of the field
                 *  represented by this Field
                 * @since 1.8
                 */
                // @ts-ignore
                getAnnotatedType(): java.lang.reflect.AnnotatedType
            }
        }
    }
}
