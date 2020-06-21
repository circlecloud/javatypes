declare namespace com {
    namespace rabbitmq {
        namespace utility {
            /**
             * Simple one-shot IPC mechanism. Essentially a one-place buffer that cannot be emptied once filled.
             */
            // @ts-ignore
            class BlockingCell<T> extends java.lang.Object {
                /**
                 * Instantiate a new BlockingCell waiting for a value of the specified type.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Wait for a value, and when one arrives, return it (without clearing it). If there's already a value present, there's no need to wait - the existing value
                 * is returned.
                 * @return the waited-for value
                 * @throws InterruptedException if this thread is interrupted
                 */
                // @ts-ignore
                public get(): T
                /**
                 * Wait for a value, and when one arrives, return it (without clearing it). If there's
                 * already a value present, there's no need to wait - the existing value is returned.
                 * If timeout is reached and value hasn't arrived, TimeoutException is thrown.
                 * @param timeout timeout in milliseconds. -1 effectively means infinity
                 * @return the waited-for value
                 * @throws InterruptedException if this thread is interrupted
                 */
                // @ts-ignore
                public get(timeout: number /*long*/): T
                /**
                 * As get(), but catches and ignores InterruptedException, retrying until a value appears.
                 * @return the waited-for value
                 */
                // @ts-ignore
                public uninterruptibleGet(): T
                /**
                 * As get(long timeout), but catches and ignores InterruptedException, retrying until
                 * a value appears or until specified timeout is reached. If timeout is reached,
                 * TimeoutException is thrown.
                 * We also use System.nanoTime() to behave correctly when system clock jumps around.
                 * @param timeout timeout in milliseconds. -1 means 'infinity': never time out
                 * @return the waited-for value
                 */
                // @ts-ignore
                public uninterruptibleGet(timeout: number /*int*/): T
                /**
                 * Store a value in this BlockingCell, throwing {@link IllegalStateException} if the cell already has a value.
                 * @param newValue the new value to store
                 */
                // @ts-ignore
                public set(newValue: T): void
                /**
                 * Store a value in this BlockingCell if it doesn't already have a value.
                 * @return true if this call to setIfUnset actually updated the BlockingCell; false if the cell already had a value.
                 * @param newValue the new value to store
                 */
                // @ts-ignore
                public setIfUnset(newValue: T): boolean
            }
        }
    }
}
