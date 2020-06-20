declare namespace java {
    namespace io {
        /**
         * An ObjectInputStream deserializes primitive data and objects previously
         * written using an ObjectOutputStream.
         * <p>ObjectOutputStream and ObjectInputStream can provide an application with
         * persistent storage for graphs of objects when used with a FileOutputStream
         * and FileInputStream respectively.  ObjectInputStream is used to recover
         * those objects previously serialized. Other uses include passing objects
         * between hosts using a socket stream or for marshaling and unmarshaling
         * arguments and parameters in a remote communication system.
         * <p>ObjectInputStream ensures that the types of all objects in the graph
         * created from the stream match the classes present in the Java Virtual
         * Machine.  Classes are loaded as required using the standard mechanisms.
         * <p>Only objects that support the java.io.Serializable or
         * java.io.Externalizable interface can be read from streams.
         * <p>The method <code>readObject</code> is used to read an object from the
         * stream.  Java's safe casting should be used to get the desired type.  In
         * Java, strings and arrays are objects and are treated as objects during
         * serialization. When read they need to be cast to the expected type.
         * <p>Primitive data types can be read from the stream using the appropriate
         * method on DataInput.
         * <p>The default deserialization mechanism for objects restores the contents
         * of each field to the value and type it had when it was written.  Fields
         * declared as transient or static are ignored by the deserialization process.
         * References to other objects cause those objects to be read from the stream
         * as necessary.  Graphs of objects are restored correctly using a reference
         * sharing mechanism.  New objects are always allocated when deserializing,
         * which prevents existing objects from being overwritten.
         * <p>Reading an object is analogous to running the constructors of a new
         * object.  Memory is allocated for the object and initialized to zero (NULL).
         * No-arg constructors are invoked for the non-serializable classes and then
         * the fields of the serializable classes are restored from the stream starting
         * with the serializable class closest to java.lang.object and finishing with
         * the object's most specific class.
         * <p>For example to read from a stream as written by the example in
         * ObjectOutputStream:
         * <br>
         * <pre>
         * FileInputStream fis = new FileInputStream("t.tmp");
         * ObjectInputStream ois = new ObjectInputStream(fis);
         * int i = ois.readInt();
         * String today = (String) ois.readObject();
         * Date date = (Date) ois.readObject();
         * ois.close();
         * </pre>
         * <p>Classes control how they are serialized by implementing either the
         * java.io.Serializable or java.io.Externalizable interfaces.
         * <p>Implementing the Serializable interface allows object serialization to
         * save and restore the entire state of the object and it allows classes to
         * evolve between the time the stream is written and the time it is read.  It
         * automatically traverses references between objects, saving and restoring
         * entire graphs.
         * <p>Serializable classes that require special handling during the
         * serialization and deserialization process should implement the following
         * methods:
         * <pre>
         * private void writeObject(java.io.ObjectOutputStream stream)
         * throws IOException;
         * private void readObject(java.io.ObjectInputStream stream)
         * throws IOException, ClassNotFoundException;
         * private void readObjectNoData()
         * throws ObjectStreamException;
         * </pre>
         * <p>The readObject method is responsible for reading and restoring the state
         * of the object for its particular class using data written to the stream by
         * the corresponding writeObject method.  The method does not need to concern
         * itself with the state belonging to its superclasses or subclasses.  State is
         * restored by reading data from the ObjectInputStream for the individual
         * fields and making assignments to the appropriate fields of the object.
         * Reading primitive data types is supported by DataInput.
         * <p>Any attempt to read object data which exceeds the boundaries of the
         * custom data written by the corresponding writeObject method will cause an
         * OptionalDataException to be thrown with an eof field value of true.
         * Non-object reads which exceed the end of the allotted data will reflect the
         * end of data in the same way that they would indicate the end of the stream:
         * bytewise reads will return -1 as the byte read or number of bytes read, and
         * primitive reads will throw EOFExceptions.  If there is no corresponding
         * writeObject method, then the end of default serialized data marks the end of
         * the allotted data.
         * <p>Primitive and object read calls issued from within a readExternal method
         * behave in the same manner--if the stream is already positioned at the end of
         * data written by the corresponding writeExternal method, object reads will
         * throw OptionalDataExceptions with eof set to true, bytewise reads will
         * return -1, and primitive reads will throw EOFExceptions.  Note that this
         * behavior does not hold for streams written with the old
         * <code>ObjectStreamConstants.PROTOCOL_VERSION_1</code> protocol, in which the
         * end of data written by writeExternal methods is not demarcated, and hence
         * cannot be detected.
         * <p>The readObjectNoData method is responsible for initializing the state of
         * the object for its particular class in the event that the serialization
         * stream does not list the given class as a superclass of the object being
         * deserialized.  This may occur in cases where the receiving party uses a
         * different version of the deserialized instance's class than the sending
         * party, and the receiver's version extends classes that are not extended by
         * the sender's version.  This may also occur if the serialization stream has
         * been tampered; hence, readObjectNoData is useful for initializing
         * deserialized objects properly despite a "hostile" or incomplete source
         * stream.
         * <p>Serialization does not read or assign values to the fields of any object
         * that does not implement the java.io.Serializable interface.  Subclasses of
         * Objects that are not serializable can be serializable. In this case the
         * non-serializable class must have a no-arg constructor to allow its fields to
         * be initialized.  In this case it is the responsibility of the subclass to
         * save and restore the state of the non-serializable class. It is frequently
         * the case that the fields of that class are accessible (public, package, or
         * protected) or that there are get and set methods that can be used to restore
         * the state.
         * <p>Any exception that occurs while deserializing an object will be caught by
         * the ObjectInputStream and abort the reading process.
         * <p>Implementing the Externalizable interface allows the object to assume
         * complete control over the contents and format of the object's serialized
         * form.  The methods of the Externalizable interface, writeExternal and
         * readExternal, are called to save and restore the objects state.  When
         * implemented by a class they can write and read their own state using all of
         * the methods of ObjectOutput and ObjectInput.  It is the responsibility of
         * the objects to handle any versioning that occurs.
         * <p>Enum constants are deserialized differently than ordinary serializable or
         * externalizable objects.  The serialized form of an enum constant consists
         * solely of its name; field values of the constant are not transmitted.  To
         * deserialize an enum constant, ObjectInputStream reads the constant name from
         * the stream; the deserialized constant is then obtained by calling the static
         * method <code>Enum.valueOf(Class, String)</code> with the enum constant's
         * base type and the received constant name as arguments.  Like other
         * serializable or externalizable objects, enum constants can function as the
         * targets of back references appearing subsequently in the serialization
         * stream.  The process by which enum constants are deserialized cannot be
         * customized: any class-specific readObject, readObjectNoData, and readResolve
         * methods defined by enum types are ignored during deserialization.
         * Similarly, any serialPersistentFields or serialVersionUID field declarations
         * are also ignored--all enum types have a fixed serialVersionUID of 0L.
         * @author Mike Warres
         * @author Roger Riggs
         * @see java.io.DataInput
         * @see java.io.ObjectOutputStream
         * @see java.io.Serializable
         * @see <a href="../../../platform/serialization/spec/input.html"> Object Serialization Specification, Section 3, Object Input Classes</a>
         * @since JDK1.1
         */
        // @ts-ignore
        class ObjectInputStream extends java.io.InputStream implements java.io.ObjectInput, java.io.ObjectStreamConstants {
            /**
             * Creates an ObjectInputStream that reads from the specified InputStream.
             * A serialization stream header is read from the stream and verified.
             * This constructor will block until the corresponding ObjectOutputStream
             * has written and flushed the header.
             * <p>If a security manager is installed, this constructor will check for
             * the "enableSubclassImplementation" SerializablePermission when invoked
             * directly or indirectly by the constructor of a subclass which overrides
             * the ObjectInputStream.readFields or ObjectInputStream.readUnshared
             * methods.
             * @param in input stream to read from
             * @throws StreamCorruptedException if the stream header is incorrect
             * @throws IOException if an I/O error occurs while reading stream header
             * @throws SecurityException if untrusted subclass illegally overrides
             *           security-sensitive methods
             * @throws NullPointerException if <code>in</code> is <code>null</code>
             * @see ObjectInputStream#ObjectInputStream()
             * @see ObjectInputStream#readFields()
             * @see ObjectOutputStream#ObjectOutputStream(OutputStream)
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Provide a way for subclasses that are completely reimplementing
             * ObjectInputStream to not have to allocate private data just used by this
             * implementation of ObjectInputStream.
             * <p>If there is a security manager installed, this method first calls the
             * security manager's <code>checkPermission</code> method with the
             * <code>SerializablePermission("enableSubclassImplementation")</code>
             * permission to ensure it's ok to enable subclassing.
             * @throws SecurityException if a security manager exists and its
             *           <code>checkPermission</code> method denies enabling
             *           subclassing.
             * @throws IOException if an I/O error occurs while creating this stream
             * @see SecurityManager#checkPermission
             * @see java.io.SerializablePermission
             */
            // @ts-ignore
            constructor()
            /**
             * Read an object from the ObjectInputStream.  The class of the object, the
             * signature of the class, and the values of the non-transient and
             * non-static fields of the class and all of its supertypes are read.
             * Default deserializing for a class can be overridden using the writeObject
             * and readObject methods.  Objects referenced by this object are read
             * transitively so that a complete equivalent graph of objects is
             * reconstructed by readObject.
             * <p>The root object is completely restored when all of its fields and the
             * objects it references are completely restored.  At this point the object
             * validation callbacks are executed in order based on their registered
             * priorities. The callbacks are registered by objects (in the readObject
             * special methods) as they are individually restored.
             * <p>Exceptions are thrown for problems with the InputStream and for
             * classes that should not be deserialized.  All exceptions are fatal to
             * the InputStream and leave it in an indeterminate state; it is up to the
             * caller to ignore or recover the stream state.
             * @throws ClassNotFoundException Class of a serialized object cannot be
             *           found.
             * @throws InvalidClassException Something is wrong with a class used by
             *           serialization.
             * @throws StreamCorruptedException Control information in the
             *           stream is inconsistent.
             * @throws OptionalDataException Primitive data was found in the
             *           stream instead of objects.
             * @throws IOException Any of the usual Input/Output related exceptions.
             */
            // @ts-ignore
            readObject(): java.lang.Object
            /**
             * This method is called by trusted subclasses of ObjectOutputStream that
             * constructed ObjectOutputStream using the protected no-arg constructor.
             * The subclass is expected to provide an override method with the modifier
             * "final".
             * @return the Object read from the stream.
             * @throws ClassNotFoundException Class definition of a serialized object
             *           cannot be found.
             * @throws OptionalDataException Primitive data was found in the stream
             *           instead of objects.
             * @throws IOException if I/O errors occurred while reading from the
             *           underlying stream
             * @see #ObjectInputStream()
             * @see #readObject()
             * @since 1.2
             */
            // @ts-ignore
            readObjectOverride(): java.lang.Object
            /**
             * Reads an "unshared" object from the ObjectInputStream.  This method is
             * identical to readObject, except that it prevents subsequent calls to
             * readObject and readUnshared from returning additional references to the
             * deserialized instance obtained via this call.  Specifically:
             * <ul>
             * <li>If readUnshared is called to deserialize a back-reference (the
             * stream representation of an object which has been written
             * previously to the stream), an ObjectStreamException will be
             * thrown.
             * <li>If readUnshared returns successfully, then any subsequent attempts
             * to deserialize back-references to the stream handle deserialized
             * by readUnshared will cause an ObjectStreamException to be thrown.
             * </ul>
             * Deserializing an object via readUnshared invalidates the stream handle
             * associated with the returned object.  Note that this in itself does not
             * always guarantee that the reference returned by readUnshared is unique;
             * the deserialized object may define a readResolve method which returns an
             * object visible to other parties, or readUnshared may return a Class
             * object or enum constant obtainable elsewhere in the stream or through
             * external means. If the deserialized object defines a readResolve method
             * and the invocation of that method returns an array, then readUnshared
             * returns a shallow clone of that array; this guarantees that the returned
             * array object is unique and cannot be obtained a second time from an
             * invocation of readObject or readUnshared on the ObjectInputStream,
             * even if the underlying data stream has been manipulated.
             * <p>ObjectInputStream subclasses which override this method can only be
             * constructed in security contexts possessing the
             * "enableSubclassImplementation" SerializablePermission; any attempt to
             * instantiate such a subclass without this permission will cause a
             * SecurityException to be thrown.
             * @return reference to deserialized object
             * @throws ClassNotFoundException if class of an object to deserialize
             *           cannot be found
             * @throws StreamCorruptedException if control information in the stream
             *           is inconsistent
             * @throws ObjectStreamException if object to deserialize has already
             *           appeared in stream
             * @throws OptionalDataException if primitive data is next in stream
             * @throws IOException if an I/O error occurs during deserialization
             * @since 1.4
             */
            // @ts-ignore
            readUnshared(): java.lang.Object
            /**
             * Read the non-static and non-transient fields of the current class from
             * this stream.  This may only be called from the readObject method of the
             * class being deserialized. It will throw the NotActiveException if it is
             * called otherwise.
             * @throws ClassNotFoundException if the class of a serialized object
             *           could not be found.
             * @throws IOException if an I/O error occurs.
             * @throws NotActiveException if the stream is not currently reading
             *           objects.
             */
            // @ts-ignore
            defaultReadObject(): void
            /**
             * Reads the persistent fields from the stream and makes them available by
             * name.
             * @return the <code>GetField</code> object representing the persistent
             *           fields of the object being deserialized
             * @throws ClassNotFoundException if the class of a serialized object
             *           could not be found.
             * @throws IOException if an I/O error occurs.
             * @throws NotActiveException if the stream is not currently reading
             *           objects.
             * @since 1.2
             */
            // @ts-ignore
            readFields(): java.io.ObjectInputStream.GetField
            /**
             * Register an object to be validated before the graph is returned.  While
             * similar to resolveObject these validations are called after the entire
             * graph has been reconstituted.  Typically, a readObject method will
             * register the object with the stream so that when all of the objects are
             * restored a final set of validations can be performed.
             * @param obj the object to receive the validation callback.
             * @param prio controls the order of callbacks;zero is a good default.
             *           Use higher numbers to be called back earlier, lower numbers for
             *           later callbacks. Within a priority, callbacks are processed in
             *           no particular order.
             * @throws NotActiveException The stream is not currently reading objects
             *           so it is invalid to register a callback.
             * @throws InvalidObjectException The validation object is null.
             */
            // @ts-ignore
            registerValidation(obj: java.io.ObjectInputValidation, prio: number /*int*/): void
            /**
             * Load the local class equivalent of the specified stream class
             * description.  Subclasses may implement this method to allow classes to
             * be fetched from an alternate source.
             * <p>The corresponding method in <code>ObjectOutputStream</code> is
             * <code>annotateClass</code>.  This method will be invoked only once for
             * each unique class in the stream.  This method can be implemented by
             * subclasses to use an alternate loading mechanism but must return a
             * <code>Class</code> object. Once returned, if the class is not an array
             * class, its serialVersionUID is compared to the serialVersionUID of the
             * serialized class, and if there is a mismatch, the deserialization fails
             * and an {@link InvalidClassException} is thrown.
             * <p>The default implementation of this method in
             * <code>ObjectInputStream</code> returns the result of calling
             * <pre>
             * Class.forName(desc.getName(), false, loader)
             * </pre>
             * where <code>loader</code> is determined as follows: if there is a
             * method on the current thread's stack whose declaring class was
             * defined by a user-defined class loader (and was not a generated to
             * implement reflective invocations), then <code>loader</code> is class
             * loader corresponding to the closest such method to the currently
             * executing frame; otherwise, <code>loader</code> is
             * <code>null</code>. If this call results in a
             * <code>ClassNotFoundException</code> and the name of the passed
             * <code>ObjectStreamClass</code> instance is the Java language keyword
             * for a primitive type or void, then the <code>Class</code> object
             * representing that primitive type or void will be returned
             * (e.g., an <code>ObjectStreamClass</code> with the name
             * <code>"int"</code> will be resolved to <code>Integer.TYPE</code>).
             * Otherwise, the <code>ClassNotFoundException</code> will be thrown to
             * the caller of this method.
             * @param desc an instance of class <code>ObjectStreamClass</code>
             * @return a <code>Class</code> object corresponding to <code>desc</code>
             * @throws IOException any of the usual Input/Output exceptions.
             * @throws ClassNotFoundException if class of a serialized object cannot
             *           be found.
             */
            // @ts-ignore
            resolveClass(desc: java.io.ObjectStreamClass): java.lang.Class<?>
            /**
             * Returns a proxy class that implements the interfaces named in a proxy
             * class descriptor; subclasses may implement this method to read custom
             * data from the stream along with the descriptors for dynamic proxy
             * classes, allowing them to use an alternate loading mechanism for the
             * interfaces and the proxy class.
             * <p>This method is called exactly once for each unique proxy class
             * descriptor in the stream.
             * <p>The corresponding method in <code>ObjectOutputStream</code> is
             * <code>annotateProxyClass</code>.  For a given subclass of
             * <code>ObjectInputStream</code> that overrides this method, the
             * <code>annotateProxyClass</code> method in the corresponding subclass of
             * <code>ObjectOutputStream</code> must write any data or objects read by
             * this method.
             * <p>The default implementation of this method in
             * <code>ObjectInputStream</code> returns the result of calling
             * <code>Proxy.getProxyClass</code> with the list of <code>Class</code>
             * objects for the interfaces that are named in the <code>interfaces</code>
             * parameter.  The <code>Class</code> object for each interface name
             * <code>i</code> is the value returned by calling
             * <pre>
             * Class.forName(i, false, loader)
             * </pre>
             * where <code>loader</code> is that of the first non-<code>null</code>
             * class loader up the execution stack, or <code>null</code> if no
             * non-<code>null</code> class loaders are on the stack (the same class
             * loader choice used by the <code>resolveClass</code> method).  Unless any
             * of the resolved interfaces are non-public, this same value of
             * <code>loader</code> is also the class loader passed to
             * <code>Proxy.getProxyClass</code>; if non-public interfaces are present,
             * their class loader is passed instead (if more than one non-public
             * interface class loader is encountered, an
             * <code>IllegalAccessError</code> is thrown).
             * If <code>Proxy.getProxyClass</code> throws an
             * <code>IllegalArgumentException</code>, <code>resolveProxyClass</code>
             * will throw a <code>ClassNotFoundException</code> containing the
             * <code>IllegalArgumentException</code>.
             * @param interfaces the list of interface names that were
             *                 deserialized in the proxy class descriptor
             * @return a proxy class for the specified interfaces
             * @throws IOException any exception thrown by the underlying
             *                 <code>InputStream</code>
             * @throws ClassNotFoundException if the proxy class or any of the
             *                 named interfaces could not be found
             * @see ObjectOutputStream#annotateProxyClass(Class)
             * @since 1.3
             */
            // @ts-ignore
            resolveProxyClass(interfaces: string[]): java.lang.Class<?>
            /**
             * This method will allow trusted subclasses of ObjectInputStream to
             * substitute one object for another during deserialization. Replacing
             * objects is disabled until enableResolveObject is called. The
             * enableResolveObject method checks that the stream requesting to resolve
             * object can be trusted. Every reference to serializable objects is passed
             * to resolveObject.  To insure that the private state of objects is not
             * unintentionally exposed only trusted streams may use resolveObject.
             * <p>This method is called after an object has been read but before it is
             * returned from readObject.  The default resolveObject method just returns
             * the same object.
             * <p>When a subclass is replacing objects it must insure that the
             * substituted object is compatible with every field where the reference
             * will be stored.  Objects whose type is not a subclass of the type of the
             * field or array element abort the serialization by raising an exception
             * and the object is not be stored.
             * <p>This method is called only once when each object is first
             * encountered.  All subsequent references to the object will be redirected
             * to the new object.
             * @param obj object to be substituted
             * @return the substituted object
             * @throws IOException Any of the usual Input/Output exceptions.
             */
            // @ts-ignore
            resolveObject(obj: any): java.lang.Object
            /**
             * Enable the stream to allow objects read from the stream to be replaced.
             * When enabled, the resolveObject method is called for every object being
             * deserialized.
             * <p>If <i>enable</i> is true, and there is a security manager installed,
             * this method first calls the security manager's
             * <code>checkPermission</code> method with the
             * <code>SerializablePermission("enableSubstitution")</code> permission to
             * ensure it's ok to enable the stream to allow objects read from the
             * stream to be replaced.
             * @param enable true for enabling use of <code>resolveObject</code> for
             *           every object being deserialized
             * @return the previous setting before this method was invoked
             * @throws SecurityException if a security manager exists and its
             *           <code>checkPermission</code> method denies enabling the stream
             *           to allow objects read from the stream to be replaced.
             * @see SecurityManager#checkPermission
             * @see java.io.SerializablePermission
             */
            // @ts-ignore
            enableResolveObject(enable: boolean): boolean
            /**
             * The readStreamHeader method is provided to allow subclasses to read and
             * verify their own stream headers. It reads and verifies the magic number
             * and version number.
             * @throws IOException if there are I/O errors while reading from the
             *           underlying <code>InputStream</code>
             * @throws StreamCorruptedException if control information in the stream
             *           is inconsistent
             */
            // @ts-ignore
            readStreamHeader(): void
            /**
             * Read a class descriptor from the serialization stream.  This method is
             * called when the ObjectInputStream expects a class descriptor as the next
             * item in the serialization stream.  Subclasses of ObjectInputStream may
             * override this method to read in class descriptors that have been written
             * in non-standard formats (by subclasses of ObjectOutputStream which have
             * overridden the <code>writeClassDescriptor</code> method).  By default,
             * this method reads class descriptors according to the format defined in
             * the Object Serialization specification.
             * @return the class descriptor read
             * @throws IOException If an I/O error has occurred.
             * @throws ClassNotFoundException If the Class of a serialized object used
             *           in the class descriptor representation cannot be found
             * @see java.io.ObjectOutputStream#writeClassDescriptor(java.io.ObjectStreamClass)
             * @since 1.3
             */
            // @ts-ignore
            readClassDescriptor(): java.io.ObjectStreamClass
            /**
             * Reads a byte of data. This method will block if no input is available.
             * @return the byte read, or -1 if the end of the stream is reached.
             * @throws IOException If an I/O error has occurred.
             */
            // @ts-ignore
            read(): int
            /**
             * Reads into an array of bytes.  This method will block until some input
             * is available. Consider using java.io.DataInputStream.readFully to read
             * exactly 'length' bytes.
             * @param buf the buffer into which the data is read
             * @param off the start offset of the data
             * @param len the maximum number of bytes read
             * @return the actual number of bytes read, -1 is returned when the end of
             *           the stream is reached.
             * @throws IOException If an I/O error has occurred.
             * @see java.io.DataInputStream#readFully(byte[],int,int)
             */
            // @ts-ignore
            read(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
            /**
             * Returns the number of bytes that can be read without blocking.
             * @return the number of available bytes.
             * @throws IOException if there are I/O errors while reading from the
             *           underlying <code>InputStream</code>
             */
            // @ts-ignore
            available(): int
            /**
             * Closes the input stream. Must be called to release any resources
             * associated with the stream.
             * @throws IOException If an I/O error has occurred.
             */
            // @ts-ignore
            close(): void
            /**
             * Reads in a boolean.
             * @return the boolean read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readBoolean(): boolean
            /**
             * Reads an 8 bit byte.
             * @return the 8 bit byte read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readByte(): byte
            /**
             * Reads an unsigned 8 bit byte.
             * @return the 8 bit byte read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readUnsignedByte(): int
            /**
             * Reads a 16 bit char.
             * @return the 16 bit char read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readChar(): char
            /**
             * Reads a 16 bit short.
             * @return the 16 bit short read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readShort(): short
            /**
             * Reads an unsigned 16 bit short.
             * @return the 16 bit short read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readUnsignedShort(): int
            /**
             * Reads a 32 bit int.
             * @return the 32 bit integer read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readInt(): int
            /**
             * Reads a 64 bit long.
             * @return the read 64 bit long.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readLong(): long
            /**
             * Reads a 32 bit float.
             * @return the 32 bit float read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readFloat(): float
            /**
             * Reads a 64 bit double.
             * @return the 64 bit double read.
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readDouble(): double
            /**
             * Reads bytes, blocking until all bytes are read.
             * @param buf the buffer into which the data is read
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readFully(buf: number /*byte*/[]): void
            /**
             * Reads bytes, blocking until all bytes are read.
             * @param buf the buffer into which the data is read
             * @param off the start offset of the data
             * @param len the maximum number of bytes to read
             * @throws EOFException If end of file is reached.
             * @throws IOException If other I/O error has occurred.
             */
            // @ts-ignore
            readFully(buf: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
            /**
             * Skips bytes.
             * @param len the number of bytes to be skipped
             * @return the actual number of bytes skipped.
             * @throws IOException If an I/O error has occurred.
             */
            // @ts-ignore
            skipBytes(len: number /*int*/): int
            /**
             * Reads in a line that has been terminated by a \n, \r, \r\n or EOF.
             * @return a String copy of the line.
             * @throws IOException if there are I/O errors while reading from the
             *           underlying <code>InputStream</code>
             * @deprecated This method does not properly convert bytes to characters.
             *           see DataInputStream for the details and alternatives.
             */
            // @ts-ignore
            readLine(): java.lang.String
            /**
             * Reads a String in
             * <a href="DataInput.html#modified-utf-8">modified UTF-8</a>
             * format.
             * @return the String.
             * @throws IOException if there are I/O errors while reading from the
             *           underlying <code>InputStream</code>
             * @throws UTFDataFormatException if read bytes do not represent a valid
             *           modified UTF-8 encoding of a string
             */
            // @ts-ignore
            readUTF(): java.lang.String
        }
    }
}
