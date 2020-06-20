declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * A queue of text layout tasks.
             * @author Timothy Prinzing
             * @see AsyncBoxView
             * @since 1.3
             */
            // @ts-ignore
            class LayoutQueue extends java.lang.Object {
                /**
                 * Construct a layout queue.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Fetch the default layout queue.
                 */
                // @ts-ignore
                getDefaultQueue(): javax.swing.text.LayoutQueue
                /**
                 * Set the default layout queue.
                 * @param q the new queue.
                 */
                // @ts-ignore
                setDefaultQueue(q: javax.swing.text.LayoutQueue): void
                /**
                 * Add a task that is not needed immediately because
                 * the results are not believed to be visible.
                 */
                // @ts-ignore
                addTask(task: java.lang.Runnable): void
                /**
                 * Used by the worker thread to get a new task to execute
                 */
                // @ts-ignore
                waitForWork(): java.lang.Runnable
            }
        }
    }
}
