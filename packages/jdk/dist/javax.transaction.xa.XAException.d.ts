declare namespace javax {
    namespace transaction {
        namespace xa {
            /**
             * The XAException is thrown by the Resource Manager (RM) to inform the
             * Transaction Manager of an error encountered by the involved transaction.
             */
            // @ts-ignore
            class XAException extends java.lang.Exception {
                /**
                 * Create an XAException.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create an XAException with a given string.
                 * @param s The <code>String</code> object containing the exception
                 *           message.
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string)
                /**
                 * Create an XAException with a given error code.
                 * @param errcode The error code identifying the exception.
                 */
                // @ts-ignore
                constructor(errcode: number /*int*/)
                /**
                 * The error code with which to create the SystemException.
                 * @serial The error code for the exception
                 */
                // @ts-ignore
                errorCode: number /*int*/
                /**
                 * The inclusive lower bound of the rollback codes.
                 */
                // @ts-ignore
                readonly XA_RBBASE: number /*int*/
                /**
                 * Indicates that the rollback was caused by an unspecified reason.
                 */
                // @ts-ignore
                readonly XA_RBROLLBACK: number /*int*/
                /**
                 * Indicates that the rollback was caused by a communication failure.
                 */
                // @ts-ignore
                readonly XA_RBCOMMFAIL: number /*int*/
                /**
                 * A deadlock was detected.
                 */
                // @ts-ignore
                readonly XA_RBDEADLOCK: number /*int*/
                /**
                 * A condition that violates the integrity of the resource was detected.
                 */
                // @ts-ignore
                readonly XA_RBINTEGRITY: number /*int*/
                /**
                 * The resource manager rolled back the transaction branch for a reason
                 * not on this list.
                 */
                // @ts-ignore
                readonly XA_RBOTHER: number /*int*/
                /**
                 * A protocol error occurred in the resource manager.
                 */
                // @ts-ignore
                readonly XA_RBPROTO: number /*int*/
                /**
                 * A transaction branch took too long.
                 */
                // @ts-ignore
                readonly XA_RBTIMEOUT: number /*int*/
                /**
                 * May retry the transaction branch.
                 */
                // @ts-ignore
                readonly XA_RBTRANSIENT: number /*int*/
                /**
                 * The inclusive upper bound of the rollback error code.
                 */
                // @ts-ignore
                readonly XA_RBEND: number /*int*/
                /**
                 * Resumption must occur where the suspension occurred.
                 */
                // @ts-ignore
                readonly XA_NOMIGRATE: number /*int*/
                /**
                 * The transaction branch may have been heuristically completed.
                 */
                // @ts-ignore
                readonly XA_HEURHAZ: number /*int*/
                /**
                 * The transaction branch has been heuristically committed.
                 */
                // @ts-ignore
                readonly XA_HEURCOM: number /*int*/
                /**
                 * The transaction branch has been heuristically rolled back.
                 */
                // @ts-ignore
                readonly XA_HEURRB: number /*int*/
                /**
                 * The transaction branch has been heuristically committed and
                 * rolled back.
                 */
                // @ts-ignore
                readonly XA_HEURMIX: number /*int*/
                /**
                 * Routine returned with no effect and may be reissued.
                 */
                // @ts-ignore
                readonly XA_RETRY: number /*int*/
                /**
                 * The transaction branch was read-only and has been committed.
                 */
                // @ts-ignore
                readonly XA_RDONLY: number /*int*/
                /**
                 * There is an asynchronous operation already outstanding.
                 */
                // @ts-ignore
                readonly XAER_ASYNC: number /*int*/
                /**
                 * A resource manager error has occurred in the transaction branch.
                 */
                // @ts-ignore
                readonly XAER_RMERR: number /*int*/
                /**
                 * The XID is not valid.
                 */
                // @ts-ignore
                readonly XAER_NOTA: number /*int*/
                /**
                 * Invalid arguments were given.
                 */
                // @ts-ignore
                readonly XAER_INVAL: number /*int*/
                /**
                 * Routine was invoked in an inproper context.
                 */
                // @ts-ignore
                readonly XAER_PROTO: number /*int*/
                /**
                 * Resource manager is unavailable.
                 */
                // @ts-ignore
                readonly XAER_RMFAIL: number /*int*/
                /**
                 * The XID already exists.
                 */
                // @ts-ignore
                readonly XAER_DUPID: number /*int*/
                /**
                 * The resource manager is doing work outside a global transaction.
                 */
                // @ts-ignore
                readonly XAER_OUTSIDE: number /*int*/
            }
        }
    }
}
