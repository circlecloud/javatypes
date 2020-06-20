declare namespace java {
    namespace rmi {
        namespace dgc {
            /**
             * A lease contains a unique VM identifier and a lease duration. A
             * Lease object is used to request and grant leases to remote object
             * references.
             */
            // @ts-ignore
            class Lease extends java.lang.Object implements java.io.Serializable {
                /**
                 * Constructs a lease with a specific VMID and lease duration. The
                 * vmid may be null.
                 * @param id VMID associated with this lease
                 * @param duration lease duration
                 */
                // @ts-ignore
                constructor(id: java.rmi.dgc.VMID, duration: number /*long*/)
                /**
                 * Returns the client VMID associated with the lease.
                 * @return client VMID
                 */
                // @ts-ignore
                getVMID(): java.rmi.dgc.VMID
                /**
                 * Returns the lease duration.
                 * @return lease duration
                 */
                // @ts-ignore
                getValue(): long
            }
        }
    }
}
