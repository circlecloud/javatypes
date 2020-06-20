declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@link java.util.Map} providing thread safety and atomicity
             * guarantees.
             * <p>Memory consistency effects: As with other concurrent
             * collections, actions in a thread prior to placing an object into a
             * {@code ConcurrentMap} as a key or value
             * <a href="package-summary.html#MemoryVisibility"><i>happen-before</i></a>
             * actions subsequent to the access or removal of that object from
             * the {@code ConcurrentMap} in another thread.
             * <p>This interface is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @since 1.5
             * @author Doug Lea
             * @param <K> the type of keys maintained by this map
             * @param <V> the type of mapped values
             */
            // @ts-ignore
            interface ConcurrentMap<K, V> extends java.util.Map<K, V> {
                /**
                 * {@inheritDoc}
                 * @implNote This implementation assumes that the ConcurrentMap cannot
                 *  contain null values and {#code get()} returning null unambiguously means
                 *  the key is absent. Implementations which support null values
                 *  <strong>must</strong> override this default implementation.
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                getOrDefault(key: any, defaultValue: V): V
                /**
                 * {@inheritDoc}
                 * @implSpec The default implementation is equivalent to, for this
                 *  {#code map}:
                 *  <pre> {@code
                 *  for ((Map.Entry<K, V> entry : map.entrySet())
                 *      action.accept(entry.getKey(), entry.getValue());
                 *  }</pre>
                 * @implNote The default implementation assumes that
                 *  {#code IllegalStateException} thrown by {@code getKey()} or
                 *  {@code getValue()} indicates that the entry has been removed and cannot
                 *  be processed. Operation continues for subsequent entries.
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                forEach(action: java.util.function.BiConsumer<any super K, ? super V> | java.util.function$.BiConsumer<? super K, ? super V>): void
                /**
                 * If the specified key is not already associated
                 * with a value, associate it with the given value.
                 * This is equivalent to
                 * <pre> {@code
                 * if (!map.containsKey(key))
                 * return map.put(key, value);
                 * else
                 * return map.get(key);
                 * }</pre>
                 * except that the action is performed atomically.
                 * @implNote This implementation intentionally re-abstracts the
                 *  inappropriate default provided in {#code Map}.
                 * @param key key with which the specified value is to be associated
                 * @param value value to be associated with the specified key
                 * @return the previous value associated with the specified key, or
                 *          {#code null} if there was no mapping for the key.
                 *          (A {@code null} return can also indicate that the map
                 *          previously associated {@code null} with the key,
                 *          if the implementation supports null values.)
                 * @throws UnsupportedOperationException if the {#code put} operation
                 *          is not supported by this map
                 * @throws ClassCastException if the class of the specified key or value
                 *          prevents it from being stored in this map
                 * @throws NullPointerException if the specified key or value is null,
                 *          and this map does not permit null keys or values
                 * @throws IllegalArgumentException if some property of the specified key
                 *          or value prevents it from being stored in this map
                 */
                // @ts-ignore
                putIfAbsent(key: K, value: V): V
                /**
                 * Removes the entry for a key only if currently mapped to a given value.
                 * This is equivalent to
                 * <pre> {@code
                 * if (map.containsKey(key) && Objects.equals(map.get(key), value)) {
                 * map.remove(key);
                 * return true;
                 * } else
                 * return false;
                 * }</pre>
                 * except that the action is performed atomically.
                 * @implNote This implementation intentionally re-abstracts the
                 *  inappropriate default provided in {#code Map}.
                 * @param key key with which the specified value is associated
                 * @param value value expected to be associated with the specified key
                 * @return {#code true} if the value was removed
                 * @throws UnsupportedOperationException if the {#code remove} operation
                 *          is not supported by this map
                 * @throws ClassCastException if the key or value is of an inappropriate
                 *          type for this map
                 *          (<a href="../Collection.html#optional-restrictions">optional</a>)
                 * @throws NullPointerException if the specified key or value is null,
                 *          and this map does not permit null keys or values
                 *          (<a href="../Collection.html#optional-restrictions">optional</a>)
                 */
                // @ts-ignore
                remove(key: any, value: any): boolean
                /**
                 * Replaces the entry for a key only if currently mapped to a given value.
                 * This is equivalent to
                 * <pre> {@code
                 * if (map.containsKey(key) && Objects.equals(map.get(key), oldValue)) {
                 * map.put(key, newValue);
                 * return true;
                 * } else
                 * return false;
                 * }</pre>
                 * except that the action is performed atomically.
                 * @implNote This implementation intentionally re-abstracts the
                 *  inappropriate default provided in {#code Map}.
                 * @param key key with which the specified value is associated
                 * @param oldValue value expected to be associated with the specified key
                 * @param newValue value to be associated with the specified key
                 * @return {#code true} if the value was replaced
                 * @throws UnsupportedOperationException if the {#code put} operation
                 *          is not supported by this map
                 * @throws ClassCastException if the class of a specified key or value
                 *          prevents it from being stored in this map
                 * @throws NullPointerException if a specified key or value is null,
                 *          and this map does not permit null keys or values
                 * @throws IllegalArgumentException if some property of a specified key
                 *          or value prevents it from being stored in this map
                 */
                // @ts-ignore
                replace(key: K, oldValue: V, newValue: V): boolean
                /**
                 * Replaces the entry for a key only if currently mapped to some value.
                 * This is equivalent to
                 * <pre> {@code
                 * if (map.containsKey(key)) {
                 * return map.put(key, value);
                 * } else
                 * return null;
                 * }</pre>
                 * except that the action is performed atomically.
                 * @implNote This implementation intentionally re-abstracts the
                 *  inappropriate default provided in {#code Map}.
                 * @param key key with which the specified value is associated
                 * @param value value to be associated with the specified key
                 * @return the previous value associated with the specified key, or
                 *          {#code null} if there was no mapping for the key.
                 *          (A {@code null} return can also indicate that the map
                 *          previously associated {@code null} with the key,
                 *          if the implementation supports null values.)
                 * @throws UnsupportedOperationException if the {#code put} operation
                 *          is not supported by this map
                 * @throws ClassCastException if the class of the specified key or value
                 *          prevents it from being stored in this map
                 * @throws NullPointerException if the specified key or value is null,
                 *          and this map does not permit null keys or values
                 * @throws IllegalArgumentException if some property of the specified key
                 *          or value prevents it from being stored in this map
                 */
                // @ts-ignore
                replace(key: K, value: V): V
                /**
                 * {@inheritDoc}
                 * @implSpec <p>The default implementation is equivalent to, for this {#code map}:
                 *  <pre> {@code
                 *  for ((Map.Entry<K, V> entry : map.entrySet())
                 *      do {
                 *         K k = entry.getKey();
                 *         V v = entry.getValue();
                 *      } while(!replace(k, v, function.apply(k, v)));
                 *  }</pre>
                 * 
                 *  The default implementation may retry these steps when multiple
                 *  threads attempt updates including potentially calling the function
                 *  repeatedly for a given key.
                 * 
                 *  <p>This implementation assumes that the ConcurrentMap cannot contain null
                 *  values and {@code get()} returning null unambiguously means the key is
                 *  absent. Implementations which support null values <strong>must</strong>
                 *  override this default implementation.
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 * @throws ClassCastException {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                replaceAll(func: java.util.function.BiFunction<any super K, ? super V, V> | java.util.function$.BiFunction<? super K, ? super V, V>): void
                /**
                 * {@inheritDoc}
                 * @implSpec The default implementation is equivalent to the following steps for this
                 *  {#code map}, then returning the current value or {@code null} if now
                 *  absent:
                 * 
                 *  <pre> {@code
                 *  if (map.get(key) == null) {
                 *      V newValue = mappingFunction.apply(key);
                 *      if (newValue != null)
                 *          return map.putIfAbsent(key, newValue);
                 *  }
                 *  }</pre>
                 * 
                 *  The default implementation may retry these steps when multiple
                 *  threads attempt updates including potentially calling the mapping
                 *  function multiple times.
                 * 
                 *  <p>This implementation assumes that the ConcurrentMap cannot contain null
                 *  values and {@code get()} returning null unambiguously means the key is
                 *  absent. Implementations which support null values <strong>must</strong>
                 *  override this default implementation.
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                computeIfAbsent(key: K, mappingFunction: java.util.function.Function<any super K, V> | java.util.function$.Function<? super K, V>): V
                /**
                 * {@inheritDoc}
                 * @implSpec The default implementation is equivalent to performing the following
                 *  steps for this {#code map}, then returning the current value or
                 *  {@code null} if now absent. :
                 * 
                 *  <pre> {@code
                 *  if (map.get(key) != null) {
                 *      V oldValue = map.get(key);
                 *      V newValue = remappingFunction.apply(key, oldValue);
                 *      if (newValue != null)
                 *          map.replace(key, oldValue, newValue);
                 *      else
                 *          map.remove(key, oldValue);
                 *  }
                 *  }</pre>
                 * 
                 *  The default implementation may retry these steps when multiple threads
                 *  attempt updates including potentially calling the remapping function
                 *  multiple times.
                 * 
                 *  <p>This implementation assumes that the ConcurrentMap cannot contain null
                 *  values and {@code get()} returning null unambiguously means the key is
                 *  absent. Implementations which support null values <strong>must</strong>
                 *  override this default implementation.
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                computeIfPresent(key: K, remappingFunction: java.util.function.BiFunction<any super K, ? super V, V> | java.util.function$.BiFunction<? super K, ? super V, V>): V
                /**
                 * {@inheritDoc}
                 * @implSpec The default implementation is equivalent to performing the following
                 *  steps for this {#code map}, then returning the current value or
                 *  {@code null} if absent:
                 * 
                 *  <pre> {@code
                 *  V oldValue = map.get(key);
                 *  V newValue = remappingFunction.apply(key, oldValue);
                 *  if (oldValue != null ) {
                 *     if (newValue != null)
                 *        map.replace(key, oldValue, newValue);
                 *     else
                 *        map.remove(key, oldValue);
                 *  } else {
                 *     if (newValue != null)
                 *        map.putIfAbsent(key, newValue);
                 *     else
                 *        return null;
                 *  }
                 *  }</pre>
                 * 
                 *  The default implementation may retry these steps when multiple
                 *  threads attempt updates including potentially calling the remapping
                 *  function multiple times.
                 * 
                 *  <p>This implementation assumes that the ConcurrentMap cannot contain null
                 *  values and {@code get()} returning null unambiguously means the key is
                 *  absent. Implementations which support null values <strong>must</strong>
                 *  override this default implementation.
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                compute(key: K, remappingFunction: java.util.function.BiFunction<any super K, ? super V, V> | java.util.function$.BiFunction<? super K, ? super V, V>): V
                /**
                 * {@inheritDoc}
                 * @implSpec The default implementation is equivalent to performing the following
                 *  steps for this {#code map}, then returning the current value or
                 *  {@code null} if absent:
                 * 
                 *  <pre> {@code
                 *  V oldValue = map.get(key);
                 *  V newValue = (oldValue == null) ? value :
                 *               remappingFunction.apply(oldValue, value);
                 *  if (newValue == null)
                 *      map.remove(key);
                 *  else
                 *      map.put(key, newValue);
                 *  }</pre>
                 * 
                 *  <p>The default implementation may retry these steps when multiple
                 *  threads attempt updates including potentially calling the remapping
                 *  function multiple times.
                 * 
                 *  <p>This implementation assumes that the ConcurrentMap cannot contain null
                 *  values and {@code get()} returning null unambiguously means the key is
                 *  absent. Implementations which support null values <strong>must</strong>
                 *  override this default implementation.
                 * @throws UnsupportedOperationException {#inheritDoc}
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException {#inheritDoc}
                 * @since 1.8
                 */
                // @ts-ignore
                merge(key: K, value: V, remappingFunction: java.util.function.BiFunction<any super V, ? super V, V> | java.util.function$.BiFunction<? super V, ? super V, V>): V
            }
        }
    }
}
