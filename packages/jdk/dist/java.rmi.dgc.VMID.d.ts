declare namespace java {
    namespace rmi {
        namespace dgc {
            /**
             * A VMID is a identifier that is unique across all Java virtual
             * machines.  VMIDs are used by the distributed garbage collector
             * to identify client VMs.
             * @author Ann Wollrath
             * @author Peter Jones
             */
            // @ts-ignore
            class VMID extends java.lang.Object implements java.io.Serializable {
                /**
                 * Create a new VMID.  Each new VMID returned from this constructor
                 * is unique for all Java virtual machines under the following
                 * conditions: a) the conditions for uniqueness for objects of
                 * the class <code>java.rmi.server.UID</code> are satisfied, and b) an
                 * address can be obtained for this host that is unique and constant
                 * for the lifetime of this object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Return true if an accurate address can be determined for this
                 * host.  If false, reliable VMID cannot be generated from this host
                 * @return true if host address can be determined, false otherwise
                 * @deprecated 
                 */
                // @ts-ignore
                public static isUnique(): boolean
                /**
                 * Compute hash code for this VMID.
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Compare this VMID to another, and return true if they are the
                 * same identifier.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Return string representation of this VMID.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
