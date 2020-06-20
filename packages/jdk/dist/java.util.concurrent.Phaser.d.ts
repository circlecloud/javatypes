declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A reusable synchronization barrier, similar in functionality to
             * {@link java.util.concurrent.CyclicBarrier CyclicBarrier} and
             * {@link java.util.concurrent.CountDownLatch CountDownLatch}
             * but supporting more flexible usage.
             * <p><b>Registration.</b> Unlike the case for other barriers, the
             * number of parties <em>registered</em> to synchronize on a phaser
             * may vary over time.  Tasks may be registered at any time (using
             * methods {@link #register}, {@link #bulkRegister}, or forms of
             * constructors establishing initial numbers of parties), and
             * optionally deregistered upon any arrival (using {@link
             * #arriveAndDeregister}).  As is the case with most basic
             * synchronization constructs, registration and deregistration affect
             * only internal counts; they do not establish any further internal
             * bookkeeping, so tasks cannot query whether they are registered.
             * (However, you can introduce such bookkeeping by subclassing this
             * class.)
             * <p><b>Synchronization.</b> Like a {@code CyclicBarrier}, a {@code
             * Phaser} may be repeatedly awaited.  Method {@link
             * #arriveAndAwaitAdvance} has effect analogous to {@link
             * java.util.concurrent.CyclicBarrier#await CyclicBarrier.await}. Each
             * generation of a phaser has an associated phase number. The phase
             * number starts at zero, and advances when all parties arrive at the
             * phaser, wrapping around to zero after reaching {@code
             * Integer.MAX_VALUE}. The use of phase numbers enables independent
             * control of actions upon arrival at a phaser and upon awaiting
             * others, via two kinds of methods that may be invoked by any
             * registered party:
             * <ul>
             * <li> <b>Arrival.</b> Methods {@link #arrive} and
             * {@link #arriveAndDeregister} record arrival.  These methods
             * do not block, but return an associated <em>arrival phase
             * number</em>; that is, the phase number of the phaser to which
             * the arrival applied. When the final party for a given phase
             * arrives, an optional action is performed and the phase
             * advances.  These actions are performed by the party
             * triggering a phase advance, and are arranged by overriding
             * method {@link #onAdvance(int, int)}, which also controls
             * termination. Overriding this method is similar to, but more
             * flexible than, providing a barrier action to a {@code
             * CyclicBarrier}.
             * <li> <b>Waiting.</b> Method {@link #awaitAdvance} requires an
             * argument indicating an arrival phase number, and returns when
             * the phaser advances to (or is already at) a different phase.
             * Unlike similar constructions using {@code CyclicBarrier},
             * method {@code awaitAdvance} continues to wait even if the
             * waiting thread is interrupted. Interruptible and timeout
             * versions are also available, but exceptions encountered while
             * tasks wait interruptibly or with timeout do not change the
             * state of the phaser. If necessary, you can perform any
             * associated recovery within handlers of those exceptions,
             * often after invoking {@code forceTermination}.  Phasers may
             * also be used by tasks executing in a {@link ForkJoinPool},
             * which will ensure sufficient parallelism to execute tasks
             * when others are blocked waiting for a phase to advance.
             * </ul>
             * <p><b>Termination.</b> A phaser may enter a <em>termination</em>
             * state, that may be checked using method {@link #isTerminated}. Upon
             * termination, all synchronization methods immediately return without
             * waiting for advance, as indicated by a negative return value.
             * Similarly, attempts to register upon termination have no effect.
             * Termination is triggered when an invocation of {@code onAdvance}
             * returns {@code true}. The default implementation returns {@code
             * true} if a deregistration has caused the number of registered
             * parties to become zero.  As illustrated below, when phasers control
             * actions with a fixed number of iterations, it is often convenient
             * to override this method to cause termination when the current phase
             * number reaches a threshold. Method {@link #forceTermination} is
             * also available to abruptly release waiting threads and allow them
             * to terminate.
             * <p><b>Tiering.</b> Phasers may be <em>tiered</em> (i.e.,
             * constructed in tree structures) to reduce contention. Phasers with
             * large numbers of parties that would otherwise experience heavy
             * synchronization contention costs may instead be set up so that
             * groups of sub-phasers share a common parent.  This may greatly
             * increase throughput even though it incurs greater per-operation
             * overhead.
             * <p>In a tree of tiered phasers, registration and deregistration of
             * child phasers with their parent are managed automatically.
             * Whenever the number of registered parties of a child phaser becomes
             * non-zero (as established in the {@link #Phaser(Phaser,int)}
             * constructor, {@link #register}, or {@link #bulkRegister}), the
             * child phaser is registered with its parent.  Whenever the number of
             * registered parties becomes zero as the result of an invocation of
             * {@link #arriveAndDeregister}, the child phaser is deregistered
             * from its parent.
             * <p><b>Monitoring.</b> While synchronization methods may be invoked
             * only by registered parties, the current state of a phaser may be
             * monitored by any caller.  At any given moment there are {@link
             * #getRegisteredParties} parties in total, of which {@link
             * #getArrivedParties} have arrived at the current phase ({@link
             * #getPhase}).  When the remaining ({@link #getUnarrivedParties})
             * parties arrive, the phase advances.  The values returned by these
             * methods may reflect transient states and so are not in general
             * useful for synchronization control.  Method {@link #toString}
             * returns snapshots of these state queries in a form convenient for
             * informal monitoring.
             * <p><b>Sample usages:</b>
             * <p>A {@code Phaser} may be used instead of a {@code CountDownLatch}
             * to control a one-shot action serving a variable number of parties.
             * The typical idiom is for the method setting this up to first
             * register, then start the actions, then deregister, as in:
             * <pre> {@code
             * void runTasks(List<Runnable> tasks) {
             * final Phaser phaser = new Phaser(1); // "1" to register self
             * // create and start threads
             * for (final Runnable task : tasks) {
             * phaser.register();
             * new Thread() {
             * public void run() {
             * phaser.arriveAndAwaitAdvance(); // await all creation
             * task.run();
             * }
             * }.start();
             * }
             * // allow threads to start and deregister self
             * phaser.arriveAndDeregister();
             * }}</pre>
             * <p>One way to cause a set of threads to repeatedly perform actions
             * for a given number of iterations is to override {@code onAdvance}:
             * <pre> {@code
             * void startTasks(List<Runnable> tasks, final int iterations) {
             * final Phaser phaser = new Phaser() {
             * protected boolean onAdvance(int phase, int registeredParties) {
             * return phase >= iterations || registeredParties == 0;
             * }
             * };
             * phaser.register();
             * for (final Runnable task : tasks) {
             * phaser.register();
             * new Thread() {
             * public void run() {
             * do {
             * task.run();
             * phaser.arriveAndAwaitAdvance();
             * } while (!phaser.isTerminated());
             * }
             * }.start();
             * }
             * phaser.arriveAndDeregister(); // deregister self, don't wait
             * }}</pre>
             * If the main task must later await termination, it
             * may re-register and then execute a similar loop:
             * <pre> {@code
             * // ...
             * phaser.register();
             * while (!phaser.isTerminated())
             * phaser.arriveAndAwaitAdvance();}</pre>
             * <p>Related constructions may be used to await particular phase numbers
             * in contexts where you are sure that the phase will never wrap around
             * {@code Integer.MAX_VALUE}. For example:
             * <pre> {@code
             * void awaitPhase(Phaser phaser, int phase) {
             * int p = phaser.register(); // assumes caller not already registered
             * while (p < phase) {
             * if (phaser.isTerminated())
             * // ... deal with unexpected termination
             * else
             * p = phaser.arriveAndAwaitAdvance();
             * }
             * phaser.arriveAndDeregister();
             * }}</pre>
             * <p>To create a set of {@code n} tasks using a tree of phasers, you
             * could use code of the following form, assuming a Task class with a
             * constructor accepting a {@code Phaser} that it registers with upon
             * construction. After invocation of {@code build(new Task[n], 0, n,
             * new Phaser())}, these tasks could then be started, for example by
             * submitting to a pool:
             * <pre> {@code
             * void build(Task[] tasks, int lo, int hi, Phaser ph) {
             * if (hi - lo > TASKS_PER_PHASER) {
             * for (int i = lo; i < hi; i += TASKS_PER_PHASER) {
             * int j = Math.min(i + TASKS_PER_PHASER, hi);
             * build(tasks, i, j, new Phaser(ph));
             * }
             * } else {
             * for (int i = lo; i < hi; ++i)
             * tasks[i] = new Task(ph);
             * // assumes new Task(ph) performs ph.register()
             * }
             * }}</pre>
             * The best value of {@code TASKS_PER_PHASER} depends mainly on
             * expected synchronization rates. A value as low as four may
             * be appropriate for extremely small per-phase task bodies (thus
             * high rates), or up to hundreds for extremely large ones.
             * <p><b>Implementation notes</b>: This implementation restricts the
             * maximum number of parties to 65535. Attempts to register additional
             * parties result in {@code IllegalStateException}. However, you can and
             * should create tiered phasers to accommodate arbitrarily large sets
             * of participants.
             * @since 1.7
             * @author Doug Lea
             */
            // @ts-ignore
            class Phaser extends java.lang.Object {
                /**
                 * Creates a new phaser with no initially registered parties, no
                 * parent, and initial phase number 0. Any thread using this
                 * phaser will need to first register for it.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new phaser with the given number of registered
                 * unarrived parties, no parent, and initial phase number 0.
                 * @param parties the number of parties required to advance to the
                 *  next phase
                 * @throws IllegalArgumentException if parties less than zero
                 *  or greater than the maximum number of parties supported
                 */
                // @ts-ignore
                constructor(parties: number /*int*/)
                /**
                 * Equivalent to {@link #Phaser(Phaser, int) Phaser(parent, 0)}.
                 * @param parent the parent phaser
                 */
                // @ts-ignore
                constructor(parent: java.util.concurrent.Phaser)
                /**
                 * Creates a new phaser with the given parent and number of
                 * registered unarrived parties.  When the given parent is non-null
                 * and the given number of parties is greater than zero, this
                 * child phaser is registered with its parent.
                 * @param parent the parent phaser
                 * @param parties the number of parties required to advance to the
                 *  next phase
                 * @throws IllegalArgumentException if parties less than zero
                 *  or greater than the maximum number of parties supported
                 */
                // @ts-ignore
                constructor(parent: java.util.concurrent.Phaser, parties: number /*int*/)
                /**
                 * Adds a new unarrived party to this phaser.  If an ongoing
                 * invocation of {@link #onAdvance} is in progress, this method
                 * may await its completion before returning.  If this phaser has
                 * a parent, and this phaser previously had no registered parties,
                 * this child phaser is also registered with its parent. If
                 * this phaser is terminated, the attempt to register has
                 * no effect, and a negative value is returned.
                 * @return the arrival phase number to which this registration
                 *  applied.  If this value is negative, then this phaser has
                 *  terminated, in which case registration has no effect.
                 * @throws IllegalStateException if attempting to register more
                 *  than the maximum supported number of parties
                 */
                // @ts-ignore
                register(): int
                /**
                 * Adds the given number of new unarrived parties to this phaser.
                 * If an ongoing invocation of {@link #onAdvance} is in progress,
                 * this method may await its completion before returning.  If this
                 * phaser has a parent, and the given number of parties is greater
                 * than zero, and this phaser previously had no registered
                 * parties, this child phaser is also registered with its parent.
                 * If this phaser is terminated, the attempt to register has no
                 * effect, and a negative value is returned.
                 * @param parties the number of additional parties required to
                 *  advance to the next phase
                 * @return the arrival phase number to which this registration
                 *  applied.  If this value is negative, then this phaser has
                 *  terminated, in which case registration has no effect.
                 * @throws IllegalStateException if attempting to register more
                 *  than the maximum supported number of parties
                 * @throws IllegalArgumentException if {#code parties < 0}
                 */
                // @ts-ignore
                bulkRegister(parties: number /*int*/): int
                /**
                 * Arrives at this phaser, without waiting for others to arrive.
                 * <p>It is a usage error for an unregistered party to invoke this
                 * method.  However, this error may result in an {@code
                 * IllegalStateException} only upon some subsequent operation on
                 * this phaser, if ever.
                 * @return the arrival phase number, or a negative value if terminated
                 * @throws IllegalStateException if not terminated and the number
                 *  of unarrived parties would become negative
                 */
                // @ts-ignore
                arrive(): int
                /**
                 * Arrives at this phaser and deregisters from it without waiting
                 * for others to arrive. Deregistration reduces the number of
                 * parties required to advance in future phases.  If this phaser
                 * has a parent, and deregistration causes this phaser to have
                 * zero parties, this phaser is also deregistered from its parent.
                 * <p>It is a usage error for an unregistered party to invoke this
                 * method.  However, this error may result in an {@code
                 * IllegalStateException} only upon some subsequent operation on
                 * this phaser, if ever.
                 * @return the arrival phase number, or a negative value if terminated
                 * @throws IllegalStateException if not terminated and the number
                 *  of registered or unarrived parties would become negative
                 */
                // @ts-ignore
                arriveAndDeregister(): int
                /**
                 * Arrives at this phaser and awaits others. Equivalent in effect
                 * to {@code awaitAdvance(arrive())}.  If you need to await with
                 * interruption or timeout, you can arrange this with an analogous
                 * construction using one of the other forms of the {@code
                 * awaitAdvance} method.  If instead you need to deregister upon
                 * arrival, use {@code awaitAdvance(arriveAndDeregister())}.
                 * <p>It is a usage error for an unregistered party to invoke this
                 * method.  However, this error may result in an {@code
                 * IllegalStateException} only upon some subsequent operation on
                 * this phaser, if ever.
                 * @return the arrival phase number, or the (negative)
                 *  {#linkplain #getPhase() current phase} if terminated
                 * @throws IllegalStateException if not terminated and the number
                 *  of unarrived parties would become negative
                 */
                // @ts-ignore
                arriveAndAwaitAdvance(): int
                /**
                 * Awaits the phase of this phaser to advance from the given phase
                 * value, returning immediately if the current phase is not equal
                 * to the given phase value or this phaser is terminated.
                 * @param phase an arrival phase number, or negative value if
                 *  terminated; this argument is normally the value returned by a
                 *  previous call to {#code arrive} or {@code arriveAndDeregister}.
                 * @return the next arrival phase number, or the argument if it is
                 *  negative, or the (negative) {#linkplain #getPhase() current phase}
                 *  if terminated
                 */
                // @ts-ignore
                awaitAdvance(phase: number /*int*/): int
                /**
                 * Awaits the phase of this phaser to advance from the given phase
                 * value, throwing {@code InterruptedException} if interrupted
                 * while waiting, or returning immediately if the current phase is
                 * not equal to the given phase value or this phaser is
                 * terminated.
                 * @param phase an arrival phase number, or negative value if
                 *  terminated; this argument is normally the value returned by a
                 *  previous call to {#code arrive} or {@code arriveAndDeregister}.
                 * @return the next arrival phase number, or the argument if it is
                 *  negative, or the (negative) {#linkplain #getPhase() current phase}
                 *  if terminated
                 * @throws InterruptedException if thread interrupted while waiting
                 */
                // @ts-ignore
                awaitAdvanceInterruptibly(phase: number /*int*/): int
                /**
                 * Awaits the phase of this phaser to advance from the given phase
                 * value or the given timeout to elapse, throwing {@code
                 * InterruptedException} if interrupted while waiting, or
                 * returning immediately if the current phase is not equal to the
                 * given phase value or this phaser is terminated.
                 * @param phase an arrival phase number, or negative value if
                 *  terminated; this argument is normally the value returned by a
                 *  previous call to {#code arrive} or {@code arriveAndDeregister}.
                 * @param timeout how long to wait before giving up, in units of
                 *         {#code unit}
                 * @param unit a {#code TimeUnit} determining how to interpret the
                 *         {@code timeout} parameter
                 * @return the next arrival phase number, or the argument if it is
                 *  negative, or the (negative) {#linkplain #getPhase() current phase}
                 *  if terminated
                 * @throws InterruptedException if thread interrupted while waiting
                 * @throws TimeoutException if timed out while waiting
                 */
                // @ts-ignore
                awaitAdvanceInterruptibly(phase: number /*int*/, timeout: number /*long*/, unit: java.util.concurrent.TimeUnit): int
                /**
                 * Forces this phaser to enter termination state.  Counts of
                 * registered parties are unaffected.  If this phaser is a member
                 * of a tiered set of phasers, then all of the phasers in the set
                 * are terminated.  If this phaser is already terminated, this
                 * method has no effect.  This method may be useful for
                 * coordinating recovery after one or more tasks encounter
                 * unexpected exceptions.
                 */
                // @ts-ignore
                forceTermination(): void
                /**
                 * Returns the current phase number. The maximum phase number is
                 * {@code Integer.MAX_VALUE}, after which it restarts at
                 * zero. Upon termination, the phase number is negative,
                 * in which case the prevailing phase prior to termination
                 * may be obtained via {@code getPhase() + Integer.MIN_VALUE}.
                 * @return the phase number, or a negative value if terminated
                 */
                // @ts-ignore
                getPhase(): int
                /**
                 * Returns the number of parties registered at this phaser.
                 * @return the number of parties
                 */
                // @ts-ignore
                getRegisteredParties(): int
                /**
                 * Returns the number of registered parties that have arrived at
                 * the current phase of this phaser. If this phaser has terminated,
                 * the returned value is meaningless and arbitrary.
                 * @return the number of arrived parties
                 */
                // @ts-ignore
                getArrivedParties(): int
                /**
                 * Returns the number of registered parties that have not yet
                 * arrived at the current phase of this phaser. If this phaser has
                 * terminated, the returned value is meaningless and arbitrary.
                 * @return the number of unarrived parties
                 */
                // @ts-ignore
                getUnarrivedParties(): int
                /**
                 * Returns the parent of this phaser, or {@code null} if none.
                 * @return the parent of this phaser, or {#code null} if none
                 */
                // @ts-ignore
                getParent(): java.util.concurrent.Phaser
                /**
                 * Returns the root ancestor of this phaser, which is the same as
                 * this phaser if it has no parent.
                 * @return the root ancestor of this phaser
                 */
                // @ts-ignore
                getRoot(): java.util.concurrent.Phaser
                /**
                 * Returns {@code true} if this phaser has been terminated.
                 * @return {#code true} if this phaser has been terminated
                 */
                // @ts-ignore
                isTerminated(): boolean
                /**
                 * Overridable method to perform an action upon impending phase
                 * advance, and to control termination. This method is invoked
                 * upon arrival of the party advancing this phaser (when all other
                 * waiting parties are dormant).  If this method returns {@code
                 * true}, this phaser will be set to a final termination state
                 * upon advance, and subsequent calls to {@link #isTerminated}
                 * will return true. Any (unchecked) Exception or Error thrown by
                 * an invocation of this method is propagated to the party
                 * attempting to advance this phaser, in which case no advance
                 * occurs.
                 * <p>The arguments to this method provide the state of the phaser
                 * prevailing for the current transition.  The effects of invoking
                 * arrival, registration, and waiting methods on this phaser from
                 * within {@code onAdvance} are unspecified and should not be
                 * relied on.
                 * <p>If this phaser is a member of a tiered set of phasers, then
                 * {@code onAdvance} is invoked only for its root phaser on each
                 * advance.
                 * <p>To support the most common use cases, the default
                 * implementation of this method returns {@code true} when the
                 * number of registered parties has become zero as the result of a
                 * party invoking {@code arriveAndDeregister}.  You can disable
                 * this behavior, thus enabling continuation upon future
                 * registrations, by overriding this method to always return
                 * {@code false}:
                 * <pre> {@code
                 * Phaser phaser = new Phaser() {
                 * protected boolean onAdvance(int phase, int parties) { return false; }
                 * }}</pre>
                 * @param phase the current phase number on entry to this method,
                 *  before this phaser is advanced
                 * @param registeredParties the current number of registered parties
                 * @return {#code true} if this phaser should terminate
                 */
                // @ts-ignore
                onAdvance(phase: number /*int*/, registeredParties: number /*int*/): boolean
                /**
                 * Returns a string identifying this phaser, as well as its
                 * state.  The state, in brackets, includes the String {@code
                 * "phase = "} followed by the phase number, {@code "parties = "}
                 * followed by the number of registered parties, and {@code
                 * "arrived = "} followed by the number of arrived parties.
                 * @return a string identifying this phaser, as well as its state
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
