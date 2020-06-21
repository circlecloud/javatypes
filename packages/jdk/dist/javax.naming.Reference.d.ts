declare namespace javax {
    namespace naming {
        /**
         * This class represents a reference to an object that is found outside of
         * the naming/directory system.
         * <p>
         * Reference provides a way of recording address information about
         * objects which themselves are not directly bound to the naming/directory system.
         * <p>
         * A Reference consists of an ordered list of addresses and class information
         * about the object being referenced.
         * Each address in the list identifies a communications endpoint
         * for the same conceptual object.  The "communications endpoint"
         * is information that indicates how to contact the object. It could
         * be, for example, a network address, a location in memory on the
         * local machine, another process on the same machine, etc.
         * The order of the addresses in the list may be of significance
         * to object factories that interpret the reference.
         * <p>
         * Multiple addresses may arise for
         * various reasons, such as replication or the object offering interfaces
         * over more than one communication mechanism.  The addresses are indexed
         * starting with zero.
         * <p>
         * A Reference also contains information to assist in creating an instance
         * of the object to which this Reference refers.  It contains the class name
         * of that object, and the class name and location of the factory to be used
         * to create the object.
         * The class factory location is a space-separated list of URLs representing
         * the class path used to load the factory.  When the factory class (or
         * any class or resource upon which it depends) needs to be loaded,
         * each URL is used (in order) to attempt to load the class.
         * <p>
         * A Reference instance is not synchronized against concurrent access by multiple
         * threads. Threads that need to access a single Reference concurrently should
         * synchronize amongst themselves and provide the necessary locking.
         * @author Rosanna Lee
         * @author Scott Seligman
         * @see RefAddr
         * @see StringRefAddr
         * @see BinaryRefAddr
         * @since 1.3
         */
        // @ts-ignore
        class Reference extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
            /**
             * Constructs a new reference for an object with class name 'className'.
             * Class factory and class factory location are set to null.
             * The newly created reference contains zero addresses.
             * @param className The non-null class name of the object to which
             *  this reference refers.
             */
            // @ts-ignore
            constructor(className: java.lang.String | string)
            /**
             * Constructs a new reference for an object with class name 'className' and
             * an address.
             * Class factory and class factory location are set to null.
             * @param className The non-null class name of the object to
             *  which this reference refers.
             * @param addr The non-null address of the object.
             */
            // @ts-ignore
            constructor(className: java.lang.String | string, addr: javax.naming.RefAddr)
            /**
             * Constructs a new reference for an object with class name 'className',
             * and the class name and location of the object's factory.
             * @param className The non-null class name of the object to which
             *                          this reference refers.
             * @param factory  The possibly null class name of the object's factory.
             * @param factoryLocation
             *          The possibly null location from which to load
             *          the factory (e.g. URL)
             * @see javax.naming.spi.ObjectFactory
             * @see javax.naming.spi.NamingManager#getObjectInstance
             */
            // @ts-ignore
            constructor(className: java.lang.String | string, factory: java.lang.String | string, factoryLocation: java.lang.String | string)
            /**
             * Constructs a new reference for an object with class name 'className',
             * the class name and location of the object's factory, and the address for
             * the object.
             * @param className The non-null class name of the object to
             *          which this reference refers.
             * @param factory  The possibly null class name of the object's factory.
             * @param factoryLocation  The possibly null location from which
             *                          to load the factory (e.g. URL)
             * @param addr     The non-null address of the object.
             * @see javax.naming.spi.ObjectFactory
             * @see javax.naming.spi.NamingManager#getObjectInstance
             */
            // @ts-ignore
            constructor(className: java.lang.String | string, addr: javax.naming.RefAddr, factory: java.lang.String | string, factoryLocation: java.lang.String | string)
            /**
             * Contains the fully-qualified name of the class of the object to which
             * this Reference refers.
             * @serial 
             * @see java.lang.Class#getName
             */
            // @ts-ignore
            className: java.lang.String | string
            /**
             * Contains the addresses contained in this Reference.
             * Initialized by constructor.
             * @serial 
             */
            // @ts-ignore
            addrs: java.util.Vector<javax.naming.RefAddr>
            /**
             * Contains the name of the factory class for creating
             * an instance of the object to which this Reference refers.
             * Initialized to null.
             * @serial 
             */
            // @ts-ignore
            classFactory: java.lang.String | string
            /**
             * Contains the location of the factory class.
             * Initialized to null.
             * @serial 
             */
            // @ts-ignore
            classFactoryLocation: java.lang.String | string
            /**
             * Retrieves the class name of the object to which this reference refers.
             * @return The non-null fully-qualified class name of the object.
             *          (e.g. "java.lang.String")
             */
            // @ts-ignore
            public getClassName(): string
            /**
             * Retrieves the class name of the factory of the object
             * to which this reference refers.
             * @return The possibly null fully-qualified class name of the factory.
             *          (e.g. "java.lang.String")
             */
            // @ts-ignore
            public getFactoryClassName(): string
            /**
             * Retrieves the location of the factory of the object
             * to which this reference refers.
             * If it is a codebase, then it is an ordered list of URLs,
             * separated by spaces, listing locations from where the factory
             * class definition should be loaded.
             * @return The possibly null string containing the
             *                  location for loading in the factory's class.
             */
            // @ts-ignore
            public getFactoryClassLocation(): string
            /**
             * Retrieves the first address that has the address type 'addrType'.
             * String.compareTo() is used to test the equality of the address types.
             * @param addrType The non-null address type for which to find the address.
             * @return The address in this reference with address type 'addrType;
             *          null if no such address exist.
             */
            // @ts-ignore
            public get(addrType: java.lang.String | string): javax.naming.RefAddr
            /**
             * Retrieves the address at index posn.
             * @param posn The index of the address to retrieve.
             * @return The address at the 0-based index posn. It must be in the
             *          range [0,getAddressCount()).
             * @exception ArrayIndexOutOfBoundsException If posn not in the specified
             *          range.
             */
            // @ts-ignore
            public get(posn: number /*int*/): javax.naming.RefAddr
            /**
             * Retrieves an enumeration of the addresses in this reference.
             * When addresses are added, changed or removed from this reference,
             * its effects on this enumeration are undefined.
             * @return An non-null enumeration of the addresses
             *          (<tt>RefAddr</tt>) in this reference.
             *          If this reference has zero addresses, an enumeration with
             *          zero elements is returned.
             */
            // @ts-ignore
            public getAll(): java.util.Enumeration<javax.naming.RefAddr>
            /**
             * Retrieves the number of addresses in this reference.
             * @return The nonnegative number of addresses in this reference.
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Adds an address to the end of the list of addresses.
             * @param addr The non-null address to add.
             */
            // @ts-ignore
            public add(addr: javax.naming.RefAddr): void
            /**
             * Adds an address to the list of addresses at index posn.
             * All addresses at index posn or greater are shifted up
             * the list by one (away from index 0).
             * @param posn The 0-based index of the list to insert addr.
             * @param addr The non-null address to add.
             * @exception ArrayIndexOutOfBoundsException If posn not in the specified
             *          range.
             */
            // @ts-ignore
            public add(posn: number /*int*/, addr: javax.naming.RefAddr): void
            /**
             * Deletes the address at index posn from the list of addresses.
             * All addresses at index greater than posn are shifted down
             * the list by one (towards index 0).
             * @param posn The 0-based index of in address to delete.
             * @return The address removed.
             * @exception ArrayIndexOutOfBoundsException If posn not in the specified
             *          range.
             */
            // @ts-ignore
            public remove(posn: number /*int*/): any
            /**
             * Deletes all addresses from this reference.
             */
            // @ts-ignore
            public clear(): void
            /**
             * Determines whether obj is a reference with the same addresses
             * (in same order) as this reference.
             * The addresses are checked using RefAddr.equals().
             * In addition to having the same addresses, the Reference also needs to
             * have the same class name as this reference.
             * The class factory and class factory location are not checked.
             * If obj is null or not an instance of Reference, null is returned.
             * @param obj The possibly null object to check.
             * @return true if obj is equal to this reference; false otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Computes the hash code of this reference.
             * The hash code is the sum of the hash code of its addresses.
             * @return A hash code of this reference as an int.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Generates the string representation of this reference.
             * The string consists of the class name to which this reference refers,
             * and the string representation of each of its addresses.
             * This representation is intended for display only and not to be parsed.
             * @return The non-null string representation of this reference.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Makes a copy of this reference using its class name
             * list of addresses, class factory name and class factory location.
             * Changes to the newly created copy does not affect this Reference
             * and vice versa.
             */
            // @ts-ignore
            public clone(): any
        }
    }
}
