declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple stop watch, allowing for timing of a number of tasks, exposing total
             * running time and running time for each named task.
             * <p>Conceals use of {@link System#nanoTime()}, improving the readability of
             * application code and reducing the likelihood of calculation errors.
             * <p>Note that this object is not designed to be thread-safe and does not use
             * synchronization.
             * <p>This class is normally used to verify performance during proof-of-concept
             * work and in development, rather than as part of production applications.
             * <p>As of Spring Framework 5.2, running time is tracked and reported in
             * nanoseconds.
             * @author Rod Johnson
             * @author Juergen Hoeller
             * @author Sam Brannen
             * @since May 2, 2001
             */
            // @ts-ignore
            class StopWatch extends java.lang.Object {
                /**
                 * Construct a new {@code StopWatch}.
                 * <p>Does not start any task.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Construct a new {@code StopWatch} with the given ID.
                 * <p>The ID is handy when we have output from multiple stop watches and need
                 * to distinguish between them.
                 * <p>Does not start any task.
                 * @param id identifier for this stop watch
                 */
                // @ts-ignore
                constructor(id: string)
                /**
                 * Get the ID of this {@code StopWatch}, as specified on construction.
                 * @return the ID (empty String by default)
                 * @since 4.2.2
                 * @see #StopWatch(String)
                 */
                // @ts-ignore
                getId(): java.lang.String
                /**
                 * Configure whether the {@link TaskInfo} array is built over time.
                 * <p>Set this to {@code false} when using a {@code StopWatch} for millions
                 * of intervals; otherwise, the {@code TaskInfo} structure will consume
                 * excessive memory.
                 * <p>Default is {@code true}.
                 */
                // @ts-ignore
                setKeepTaskList(keepTaskList: boolean): void
                /**
                 * Start an unnamed task.
                 * <p>The results are undefined if {@link #stop()} or timing methods are
                 * called without invoking this method first.
                 * @see #start(String)
                 * @see #stop()
                 */
                // @ts-ignore
                start(): void
                /**
                 * Start a named task.
                 * <p>The results are undefined if {@link #stop()} or timing methods are
                 * called without invoking this method first.
                 * @param taskName the name of the task to start
                 * @see #start()
                 * @see #stop()
                 */
                // @ts-ignore
                start(taskName: string): void
                /**
                 * Stop the current task.
                 * <p>The results are undefined if timing methods are called without invoking
                 * at least one pair of {@code start()} / {@code stop()} methods.
                 * @see #start()
                 * @see #start(String)
                 */
                // @ts-ignore
                stop(): void
                /**
                 * Determine whether this {@code StopWatch} is currently running.
                 * @see #currentTaskName()
                 */
                // @ts-ignore
                isRunning(): boolean
                /**
                 * Get the name of the currently running task, if any.
                 * @since 4.2.2
                 * @see #isRunning()
                 */
                // @ts-ignore
                currentTaskName(): java.lang.String
                /**
                 * Get the time taken by the last task in nanoseconds.
                 * @since 5.2
                 * @see #getLastTaskTimeMillis()
                 */
                // @ts-ignore
                getLastTaskTimeNanos(): long
                /**
                 * Get the time taken by the last task in milliseconds.
                 * @see #getLastTaskTimeNanos()
                 */
                // @ts-ignore
                getLastTaskTimeMillis(): long
                /**
                 * Get the name of the last task.
                 */
                // @ts-ignore
                getLastTaskName(): java.lang.String
                /**
                 * Get the last task as a {@link TaskInfo} object.
                 */
                // @ts-ignore
                getLastTaskInfo(): org.springframework.util.StopWatch.TaskInfo
                /**
                 * Get the total time in nanoseconds for all tasks.
                 * @since 5.2
                 * @see #getTotalTimeMillis()
                 * @see #getTotalTimeSeconds()
                 */
                // @ts-ignore
                getTotalTimeNanos(): long
                /**
                 * Get the total time in milliseconds for all tasks.
                 * @see #getTotalTimeNanos()
                 * @see #getTotalTimeSeconds()
                 */
                // @ts-ignore
                getTotalTimeMillis(): long
                /**
                 * Get the total time in seconds for all tasks.
                 * @see #getTotalTimeNanos()
                 * @see #getTotalTimeMillis()
                 */
                // @ts-ignore
                getTotalTimeSeconds(): double
                /**
                 * Get the number of tasks timed.
                 */
                // @ts-ignore
                getTaskCount(): int
                /**
                 * Get an array of the data for tasks performed.
                 */
                // @ts-ignore
                getTaskInfo(): org.springframework.util.StopWatch.TaskInfo[]
                /**
                 * Get a short description of the total running time.
                 */
                // @ts-ignore
                shortSummary(): java.lang.String
                /**
                 * Generate a string with a table describing all tasks performed.
                 * <p>For custom reporting, call {@link #getTaskInfo()} and use the task info
                 * directly.
                 */
                // @ts-ignore
                prettyPrint(): java.lang.String
                /**
                 * Generate an informative string describing all tasks performed
                 * <p>For custom reporting, call {@link #getTaskInfo()} and use the task info
                 * directly.
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
